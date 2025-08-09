import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              HM
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Home Makeover</h1>
              <p className="text-sm text-slate-600">Interior Design & Painting — Pune</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-slate-700 hover:text-indigo-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-slate-700 hover:text-indigo-600 font-medium transition-colors">
              Services
            </Link>
            <Link href="/projects" className="text-slate-700 hover:text-indigo-600 font-medium transition-colors">
              Projects
            </Link>
            <Link href="/blog" className="text-slate-700 hover:text-indigo-600 font-medium transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-indigo-600 font-medium transition-colors">
              Contact
            </Link>
            <a 
              href="tel:+919031263531" 
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors shadow-lg"
            >
              +91 9031263531
            </a>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/homesmakeover/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-600 hover:text-indigo-600">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3a5 5 0 110 10 5 5 0 010-10zm0 2.2A2.8 2.8 0 1014.8 12 2.8 2.8 0 0012 9.2zM17.8 6.2a1 1 0 110 2 1 1 0 010-2z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61578062693960" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-slate-600 hover:text-indigo-600">
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
              <Link href="/" className="text-slate-700 hover:text-indigo-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-slate-700 hover:text-indigo-600 font-medium transition-colors">
                Services
              </Link>
              <Link href="/projects" className="text-slate-700 hover:text-indigo-600 font-medium transition-colors">
                Projects
              </Link>
              <Link href="/blog" className="text-slate-700 hover:text-indigo-600 font-medium transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-slate-700 hover:text-indigo-600 font-medium transition-colors">
                Contact
              </Link>
              <a 
                href="tel:+919031263531" 
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors text-center"
              >
                +91 9031263531
              </a>
                <div className="flex items-center gap-4 pt-2">
                  <a href="https://www.instagram.com/homesmakeover/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-600 hover:text-indigo-600">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3a5 5 0 110 10 5 5 0 010-10zm0 2.2A2.8 2.8 0 1014.8 12 2.8 2.8 0 0012 9.2zM17.8 6.2a1 1 0 110 2 1 1 0 010-2z"/>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61578062693960" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-slate-600 hover:text-indigo-600">
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
