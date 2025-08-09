import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                HM
              </div>
              <div>
                <h3 className="text-xl font-bold">Home Makeover</h3>
                <p className="text-slate-400">Interior Design & Painting Services</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Professional interior design and painting services in Pune. We transform spaces 
              with creativity, quality, and attention to detail.
            </p>
            <div className="flex items-start gap-6 flex-wrap">
              <div className="flex items-center gap-2 text-slate-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="max-w-xs">Marvel Cerise, B 1204, Kharadi, Pune, Maharashtra 411014</span>
              </div>
              <a href="tel:+919031263531" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 9031263531
              </a>
              <a href="mailto:homesmakeover.in@gmail.com" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                homesmakeover.in@gmail.com
              </a>
              <div className="flex items-center gap-3">
                <a href="https://www.instagram.com/homesmakeover/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-300 hover:text-white transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3a5 5 0 110 10 5 5 0 010-10zm0 2.2A2.8 2.8 0 1014.8 12 2.8 2.8 0 0012 9.2zM17.8 6.2a1 1 0 110 2 1 1 0 010-2z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61578062693960" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-slate-300 hover:text-white transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.2 3-3.2.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.4 3h-1.8v7A10 10 0 0022 12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3 text-slate-300">
              <li>
                <Link href="/services/interior-design" className="hover:text-white transition-colors">
                  Interior Design
                </Link>
              </li>
              <li>
                <Link href="/services/painting" className="hover:text-white transition-colors">
                  Interior Painting
                </Link>
              </li>
              <li>
                <Link href="/services/painting" className="hover:text-white transition-colors">
                  Exterior Painting
                </Link>
              </li>
              <li>
                <Link href="/services/renovation" className="hover:text-white transition-colors">
                  Carpentry Service
                </Link>
              </li>
              <li>
                <Link href="/services/renovation" className="hover:text-white transition-colors">
                  POP and False Ceiling
                </Link>
              </li>
              <li>
                <Link href="/services/renovation" className="hover:text-white transition-colors">
                  Home Electrician Service
                </Link>
              </li>
              <li>
                <Link href="/services/renovation" className="hover:text-white transition-colors">
                  Waterproofing
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-slate-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/survey" className="hover:text-white transition-colors">
                  Free Survey
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Home Makeover. All rights reserved.
          </div>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <span className="text-slate-400 text-sm">Serving: Kharadi, Wagholi, Viman Nagar, Kalyani Nagar, Lohegaon, Kesnand</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
