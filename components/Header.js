import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const isActive = (href) => {
    const path = router.asPath || '/'
    if (href === '/') return path === '/'
    return path === href || path.startsWith(href + '/')
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-white shrink-0">
                <img
                  src="/images/brand/logo.svg"
                  alt="Home Makeover logo"
                  className="w-full h-full object-cover transform scale-150"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Home Makeover</h1>
                <p className="text-sm text-slate-600">Interior Design & Painting — Pune</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" aria-current={isActive('/') ? 'page' : undefined} className={`${isActive('/') ? 'text-primary font-semibold' : 'text-text hover:text-primary font-medium'} transition-colors`}>
              Home
            </Link>
            <Link href="/services" aria-current={isActive('/services') ? 'page' : undefined} className={`${isActive('/services') ? 'text-primary font-semibold' : 'text-text hover:text-primary font-medium'} transition-colors`}>
              Services
            </Link>
            <Link href="/projects" aria-current={isActive('/projects') ? 'page' : undefined} className={`${isActive('/projects') ? 'text-primary font-semibold' : 'text-text hover:text-primary font-medium'} transition-colors`}>
              Projects
            </Link>
            <Link href="/blog" aria-current={isActive('/blog') ? 'page' : undefined} className={`${isActive('/blog') ? 'text-primary font-semibold' : 'text-text hover:text-primary font-medium'} transition-colors`}>
              Blog
            </Link>
            <Link href="/contact" aria-current={isActive('/contact') ? 'page' : undefined} className={`${isActive('/contact') ? 'text-primary font-semibold' : 'text-text hover:text-primary font-medium'} transition-colors`}>
              Contact
            </Link>
            <button
              type="button"
              onClick={() => { if (typeof window !== 'undefined') window.location.href = 'tel:+919031263531' }}
              aria-label="Call Home Makeover"
              className="group relative inline-flex items-center gap-3 px-5 py-2.5 rounded-xl text-white font-semibold bg-gradient-to-r from-primary to-primary-light shadow-lg ring-1 ring-white/10 hover:shadow-xl hover:scale-[1.02] transition-all duration-200 overflow-hidden"
            >
              <span className="relative flex items-center justify-center w-9 h-9 rounded-full bg-white/10">
                <span className="absolute inset-0 rounded-full animate-ping bg-accent/20" />
                <svg className="relative w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2.25 5.25c0-1.243 1.007-2.25 2.25-2.25H6c.966 0 1.795.622 2.084 1.54l.62 2.012c.19.616.03 1.288-.41 1.74l-1.1 1.1a15.75 15.75 0 006.222 6.222l1.1-1.1c.452-.44 1.124-.6 1.74-.41l2.012.62A2.25 2.25 0 0120.75 18v1.5a2.25 2.25 0 01-2.25 2.25h-.75C9.55 21.75 2.25 14.45 2.25 5.25V5.25z" />
                </svg>
              </span>
              <span className="tracking-wide">90312 63531</span>
              <span className="absolute inset-0 rounded-xl ring-2 ring-accent/0 group-hover:ring-accent/40 transition-all duration-300" />
              <span className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/3 bg-white/20 blur-md skew-x-[-20deg] -translate-x-[120%] group-hover:translate-x-[220%] transition-transform duration-700 ease-out" />
            </button>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/homesmakeover/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-text hover:text-primary">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3a5 5 0 110 10 5 5 0 010-10zm0 2.2A2.8 2.8 0 1014.8 12 2.8 2.8 0 0012 9.2zM17.8 6.2a1 1 0 110 2 1 1 0 010-2z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61578062693960" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-text hover:text-primary">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.2 3-3.2.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.4 3h-1.8v7A10 10 0 0022 12z"/>
                </svg>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-200">
            <nav className="flex flex-col gap-4 pt-4">
              <Link href="/" aria-current={isActive('/') ? 'page' : undefined} className={`${isActive('/') ? 'text-primary font-semibold' : 'text-text hover:text-primary font-medium'} transition-colors`}>
                Home
              </Link>
              <Link href="/services" aria-current={isActive('/services') ? 'page' : undefined} className={`${isActive('/services') ? 'text-primary font-semibold' : 'text-text hover:text-primary font-medium'} transition-colors`}>
                Services
              </Link>
              <Link href="/projects" aria-current={isActive('/projects') ? 'page' : undefined} className={`${isActive('/projects') ? 'text-primary font-semibold' : 'text-text hover:text-primary font-medium'} transition-colors`}>
                Projects
              </Link>
              <Link href="/blog" aria-current={isActive('/blog') ? 'page' : undefined} className={`${isActive('/blog') ? 'text-primary font-semibold' : 'text-text hover:text-primary font-medium'} transition-colors`}>
                Blog
              </Link>
              <Link href="/contact" aria-current={isActive('/contact') ? 'page' : undefined} className={`${isActive('/contact') ? 'text-primary font-semibold' : 'text-text hover:text-primary font-medium'} transition-colors`}>
                Contact
              </Link>
              <button
                type="button"
                onClick={() => { if (typeof window !== 'undefined') window.location.href = 'tel:+919031263531' }}
                aria-label="Call Home Makeover"
                className="group relative inline-flex items-center gap-3 px-5 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-primary to-primary-light shadow-lg ring-1 ring-white/10 hover:shadow-xl hover:scale-[1.02] transition-all duration-200 overflow-hidden"
              >
                <span className="relative flex items-center justify-center w-9 h-9 rounded-full bg-white/10">
                  <span className="absolute inset-0 rounded-full animate-ping bg-accent/20" />
                  <svg className="relative w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2.25 5.25c0-1.243 1.007-2.25 2.25-2.25H6c.966 0 1.795.622 2.084 1.54l.62 2.012c.19.616.03 1.288-.41 1.74l-1.1 1.1a15.75 15.75 0 006.222 6.222l1.1-1.1c.452-.44 1.124-.6 1.74-.41l2.012.62A2.25 2.25 0 0120.75 18v1.5a2.25 2.25 0 01-2.25 2.25h-.75C9.55 21.75 2.25 14.45 2.25 5.25V5.25z" />
                  </svg>
                </span>
                <span className="tracking-wide">90312 63531</span>
                <span className="absolute inset-0 rounded-xl ring-2 ring-accent/0 group-hover:ring-accent/40 transition-all duration-300" />
                <span className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/3 bg-white/20 blur-md skew-x-[-20deg] -translate-x-[120%] group-hover:translate-x-[220%] transition-transform duration-700 ease-out" />
              </button>
                <div className="flex items-center gap-4 pt-2">
                  <a href="https://www.instagram.com/homesmakeover/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-text hover:text-primary">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3a5 5 0 110 10 5 5 0 010-10zm0 2.2A2.8 2.8 0 1014.8 12 2.8 2.8 0 0012 9.2zM17.8 6.2a1 1 0 110 2 1 1 0 010-2z"/>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61578062693960" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-text hover:text-primary">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.2 3-3.2.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.4 3h-1.8v7A10 10 0 0022 12z"/>
                    </svg>
                  </a>
                </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
