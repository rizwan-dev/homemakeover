import { NextResponse } from 'next/server'

export function middleware(req) {
  const { nextUrl, headers } = req
  const url = nextUrl.clone()

  const matcherPaths = ['/admin']
  const shouldProtect = matcherPaths.some((base) => url.pathname === base || url.pathname.startsWith(base + '/'))
  if (!shouldProtect) return NextResponse.next()

  const auth = headers.get('authorization')
  const username = process.env.ADMIN_USERNAME
  const password = process.env.ADMIN_PASSWORD

  // If credentials are not configured, allow access (or block). Here we block by default for safety.
  if (!username || !password) {
    return new NextResponse('Admin credentials not configured', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Admin Area"' }
    })
  }

  if (auth) {
    const [scheme, encoded] = auth.split(' ')
    if (scheme === 'Basic' && encoded) {
      try {
        const decoded = Buffer.from(encoded, 'base64').toString('utf8')
        const [user, pass] = decoded.split(':')
        if (user === username && pass === password) {
          return NextResponse.next()
        }
      } catch {
        // fall through to unauthorized
      }
    }
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Admin Area"' }
  })
}

export const config = {
  matcher: ['/admin/:path*']
}


