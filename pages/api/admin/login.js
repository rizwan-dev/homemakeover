export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { username, password } = req.body || {}

  const envUsername = process.env.ADMIN_USERNAME
  const envPassword = process.env.ADMIN_PASSWORD

  if (!envUsername || !envPassword) {
    return res.status(500).json({ error: 'Admin credentials not configured. Set ADMIN_USERNAME and ADMIN_PASSWORD in environment.' })
  }

  if (typeof username !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ error: 'Invalid request body' })
  }

  const isValid = username === envUsername && password === envPassword

  if (!isValid) {
    return res.status(401).json({ error: 'Invalid credentials' })
  }

  // In a real app, set a secure session/cookie. For now, return success
  return res.status(200).json({ ok: true })
}


