import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center text-white font-bold text-lg">
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
            <div className="flex items-center gap-4">
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
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3 text-slate-300">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Interior Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Interior Painting
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Exterior Painting
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Carpentry Service
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  POP and False Ceiling
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Home Electrician Service
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
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
