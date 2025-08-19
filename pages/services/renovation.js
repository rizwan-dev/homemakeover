import Head from 'next/head'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function RenovationService() {
  const locations = [
    { name: 'Kharadi', slug: 'kharadi' },
    { name: 'Viman Nagar', slug: 'viman-nagar' },
    { name: 'Kalyani Nagar', slug: 'kalyani-nagar' },
    { name: 'Magarpatta', slug: 'magarpatta' },
    { name: 'Lohegaon', slug: 'lohegaon' },
    { name: 'Wagholi', slug: 'wagholi' },
    { name: 'Kesnand', slug: 'kesnand' },
  ]

  const popularKeywords = [
    'best home renovation in Pune',
    'affordable home renovation Pune',
    'kitchen renovation Pune',
    'bathroom remodeling Pune',
    'false ceiling and lighting Pune'
  ]

  const locationKeywords = locations.flatMap(l => [
    `best home renovation in ${l.name}`,
    `affordable renovation in ${l.name}`,
    `quality renovation service in ${l.name}`
  ])

  const metaKeywords = [
    'home renovation', 'Pune',
    ...popularKeywords, ...locationKeywords
  ].join(', ')
  const features = [
    'Carpentry & Furniture',
    'Electrical Work',
    'Waterproofing',
    'False Ceiling & POP',
    'Plumbing Services',
    'Tiling & Flooring',
    'Kitchen Renovation',
    'Bathroom Remodeling',
    'Commercial Renovation',
    'Complete Home Makeover'
  ]

  const process = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Comprehensive site assessment and requirement analysis'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Detailed project planning and material selection'
    },
    {
      step: '03',
      title: 'Execution',
      description: 'Professional execution with quality materials'
    },
    {
      step: '04',
      title: 'Quality Check',
      description: 'Thorough quality inspection and testing'
    },
    {
      step: '05',
      title: 'Handover',
      description: 'Project completion with warranty and support'
    }
  ]

  const projects = [
    {
      title: 'False Ceiling Installation — Kesnand',
      image: '/images/project/06-kesnand-false-ceiling-installation-main.webp',
      area: '1,800 sq ft',
      duration: '30 days'
    },
    {
      title: '3 BHK Interior Makeover — Majestique Towers, Kharadi',
      image: '/images/project/08-majestique-towers-kharadi-3bhk-makeover-main.webp',
      area: '1,400 sq ft',
      duration: '32 days'
    },
    {
      title: 'Premium Interior Upgrade — VTP Pegasus, Kharadi',
      image: '/images/project/09-vtp-pegasus-kharadi-premium-interior-main.webp',
      area: '1,250 sq ft',
      duration: '34 days'
    }
  ]

  return (
    <>
      <Head>
        <title>Complete Home Renovation Services in Pune — Home Makeover</title>
        <meta name="description" content="Complete home renovation services in Pune. Carpentry, electrical, waterproofing, false ceiling, and more. One-stop renovation solution with 10+ years experience." />
        <meta name="keywords" content={metaKeywords} />
        <meta property="og:title" content="Complete Home Renovation Services in Pune — Home Makeover" />
        <meta property="og:description" content="Complete home renovation services in Pune. Carpentry, electrical, waterproofing, false ceiling, and more. One-stop renovation solution." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://homemakeover.com/services/renovation" />
        <link rel="canonical" href="https://homemakeover.com/services/renovation" />
      </Head>
      <Header />
      
      <main className="min-h-screen">
        <Hero
          title="Complete Home Renovation"
          subtitle="From carpentry to electrical and waterproofing — we handle your renovation end-to-end."
          breadcrumbs={[{ href: '/', label: 'Home' }, { href: '/services', label: 'Services' }, { label: 'Renovation' }]}
          backgroundImage="/images/services/08-home-renovation-hero.webp"
        />

        {/* Service Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start lg:items-stretch">
              <div>
                <h2 className="text-4xl font-bold mb-6">One-Stop Renovation Solution</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  With over 10 years of experience, we provide complete renovation services under one roof. 
                  Our expert team handles everything from planning to execution, ensuring your renovation 
                  project is completed on time and within budget.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="prose prose-slate max-w-none mt-6 mb-8">
                  <h3>Scope & Standards</h3>
                  <ul>
                    <li>Carpentry with marine ply/HDHMR, soft‑close hardware</li>
                    <li>Electrical rewiring with ISI cables and MCBs</li>
                    <li>Bathroom waterproofing with 3‑coat system</li>
                    <li>False ceiling with GI channels and moisture‑resistant boards</li>
                  </ul>
                </div>
                {/* Removed starting price section as requested */}
              </div>

              <div className="relative">
                <div className="relative w-full h-full min-h-[24rem] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/services/08-home-renovation-hero.webp" 
                    alt="Complete home renovation"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">Renovation Services Near You</h2>
              <p className="text-slate-600">We actively serve prime localities across Pune</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {locations.map(loc => (
                <Link key={loc.slug} href={`/locations/${loc.slug}/home-interior-design`} className="px-4 py-2 rounded-full bg-white shadow-sm ring-1 ring-slate-200 text-slate-700 hover:text-primary hover:ring-primary transition">
                  Renovation in {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Renovation Process</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We follow a systematic approach to ensure your renovation project is completed efficiently and to your satisfaction
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Gallery */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Recent Renovation Projects</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Explore some of our recent renovation projects that showcase our expertise and quality
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-64">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <div className="flex justify-between text-sm text-slate-600 mb-4">
                      <span>Area: {project.area}</span>
                      <span>Duration: {project.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Searches (SEO) */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4">Popular searches</h2>
            <div className="flex flex-wrap gap-2">
              {[...popularKeywords, ...locationKeywords.slice(0, 12)].map(kw => (
                <span key={kw} className="px-3 py-1.5 rounded-full bg-secondary text-primary text-sm font-medium">{kw}</span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Renovation FAQs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl ring-1 ring-slate-100">
                <h3 className="font-semibold text-slate-900 mb-2">Do you provide turnkey renovation?</h3>
                <p className="text-slate-600">Yes. We manage civil, electrical, plumbing, carpentry, paint and handover with quality checks.</p>
              </div>
              <div className="bg-white p-6 rounded-xl ring-1 ring-slate-100">
                <h3 className="font-semibold text-slate-900 mb-2">How do you ensure waterproofing quality?</h3>
                <p className="text-slate-600">We use branded membranes and a 3‑coat system with pond tests for bathrooms and terraces.</p>
              </div>
              <div className="bg-white p-6 rounded-xl ring-1 ring-slate-100">
                <h3 className="font-semibold text-slate-900 mb-2">Can you renovate within occupied homes?</h3>
                <p className="text-slate-600">We plan phased work, dust control, and daily cleanup to minimize disruption.</p>
              </div>
              <div className="bg-white p-6 rounded-xl ring-1 ring-slate-100">
                <h3 className="font-semibold text-slate-900 mb-2">Do you offer warranties?</h3>
                <p className="text-slate-600">Yes. Workmanship warranty with brand warranties on materials and hardware.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 text-white overflow-hidden">
          <img
            src="/images/services/08-home-renovation-hero.webp"
            alt="Renovation background"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary-dark/70" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-30" />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Home?</h2>
            <p className="text-xl mb-8 opacity-90">Get started with a free consultation and let us bring your renovation vision to life</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/survey" className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-secondary transition-colors">Get Free Quote</a>
              <a href="/contact" className="inline-block px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors">Contact Us</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

