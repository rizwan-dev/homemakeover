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
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              HM
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Home Makeover</h1>
              <p className="text-sm text-slate-600">Interior Design & Painting — Pune</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-slate-700 hover:text-rose-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-slate-700 hover:text-rose-600 font-medium transition-colors">
              Services
            </Link>
            <Link href="/projects" className="text-slate-700 hover:text-rose-600 font-medium transition-colors">
              Projects
            </Link>
            <Link href="/blog" className="text-slate-700 hover:text-rose-600 font-medium transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-rose-600 font-medium transition-colors">
              Contact
            </Link>
            <a 
              href="tel:+919031263531" 
              className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-semibold transition-colors shadow-lg"
            >
              +91 9031263531
            </a>
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
              <Link href="/" className="text-slate-700 hover:text-rose-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-slate-700 hover:text-rose-600 font-medium transition-colors">
                Services
              </Link>
              <Link href="/projects" className="text-slate-700 hover:text-rose-600 font-medium transition-colors">
                Projects
              </Link>
              <Link href="/blog" className="text-slate-700 hover:text-rose-600 font-medium transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-slate-700 hover:text-rose-600 font-medium transition-colors">
                Contact
              </Link>
              <a 
                href="tel:+919031263531" 
                className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-semibold transition-colors text-center"
              >
                +91 9031263531
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
