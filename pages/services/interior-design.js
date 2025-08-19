import Head from 'next/head'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function InteriorDesignService() {
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
    'best home interior design in Pune',
    'affordable interior designer in Pune',
    'modular kitchen design Pune',
    'false ceiling and lighting design Pune',
    'custom furniture designer Pune'
  ]

  const locationKeywords = locations.flatMap(l => [
    `best home interior design in ${l.name}`,
    `affordable interior design in ${l.name}`,
    `quality home interior design service in ${l.name}`,
    `modular kitchen designer in ${l.name}`
  ])

  const metaKeywords = [
    'interior design',
    'home interiors',
    'Pune',
    ...popularKeywords,
    ...locationKeywords,
  ].join(', ')
  const features = [
    'Space Planning & Layout Design',
    '3D Visualizations & Renderings',
    'Custom Furniture Design',
    'Color Scheme & Material Selection',
    'Lighting Design & Installation',
    'Turnkey Project Execution',
    'Kitchen & Bathroom Design',
    'Living Room & Bedroom Design',
    'Commercial Interior Design',
    'Sustainable Design Solutions'
  ]

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Free consultation to understand your vision, requirements, and budget'
    },
    {
      step: '02',
      title: 'Concept Development',
      description: 'Create design concepts with mood boards and initial sketches'
    },
    {
      step: '03',
      title: '3D Visualization',
      description: 'Detailed 3D renderings to help you visualize the final result'
    },
    {
      step: '04',
      title: 'Material Selection',
      description: 'Choose from premium materials, finishes, and furniture options'
    },
    {
      step: '05',
      title: 'Project Execution',
      description: 'Professional installation and project management'
    },
    {
      step: '06',
      title: 'Final Handover',
      description: 'Quality inspection and project completion with warranty'
    }
  ]

  const projects = [
    {
      title: '2 BHK Interior Design — Forest County, Kharadi',
      image: '/images/project/01-forest-county-kharadi-2bhk-interior-main.webp',
      area: '1,200 sq ft',
      duration: '38 days'
    },
    {
      title: '2 BHK Interior — Nyati Elan, Wagholi',
      image: '/images/project/07-nyati-elan-wagholi-2bhk-interior-main.webp',
      area: '1,000 sq ft',
      duration: '28 days'
    },
    {
      title: '3 BHK Makeover — Majestique Towers, Kharadi',
      image: '/images/project/08-majestique-towers-kharadi-3bhk-makeover-main.webp',
      area: '1,400 sq ft',
      duration: '32 days'
    }
  ]

  return (
    <>
      <Head>
        <title>Interior Design Services in Pune — Home Makeover</title>
        <meta name="description" content="Professional interior design services in Pune. Complete interior design solutions with 3D visualizations, custom furniture, and turnkey execution. Free consultation available." />
        <meta name="keywords" content={metaKeywords} />
        <meta property="og:title" content="Interior Design Services in Pune — Home Makeover" />
        <meta property="og:description" content="Professional interior design services in Pune. Complete interior design solutions with 3D visualizations, custom furniture, and turnkey execution." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://homemakeover.com/services/interior-design" />
        <link rel="canonical" href="https://homemakeover.com/services/interior-design" />
      </Head>
      <Header />
      
      <main className="min-h-screen">
        <Hero
          title="Interior Design Services"
          subtitle="Transform your space with our comprehensive interior design services — from concept to execution."
          breadcrumbs={[{ href: '/', label: 'Home' }, { href: '/services', label: 'Services' }, { label: 'Interior Design' }]}
          backgroundImage="/images/services/01-interior-design-hero.webp"
        />

        {/* Service Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start lg:items-stretch">
              <div>
                <h2 className="text-4xl font-bold mb-6">Complete Interior Design Solutions</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  With over 10 years of experience, we specialize in creating stunning interior spaces that combine 
                  functionality with aesthetics. Our expert designers work closely with you to bring your vision to life, 
                  using premium materials and innovative design techniques.
                </p>
                <div className="prose prose-slate max-w-none mb-8">
                  <h3>Deliverables</h3>
                  <ul>
                    <li>Space planning, mood boards, and 3D renders</li>
                    <li>BOQs and material boards (laminates/veneers/fabrics)</li>
                    <li>Modular kitchen and wardrobe CADs with hardware specs</li>
                    <li>False ceiling and lighting plan; color and finishes guide</li>
                  </ul>
                </div>
                
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

                {/* Removed starting price section as requested */}
              </div>

              <div className="relative">
                <div className="relative w-full h-full min-h-[24rem] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/services/01-interior-design-hero.webp" 
                    alt="Interior design inspiration"
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
              <h2 className="text-3xl font-bold">Interior Design Services Near You</h2>
              <p className="text-slate-600">We actively serve prime localities across Pune</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {locations.map(loc => (
                <Link key={loc.slug} href={`/locations/${loc.slug}/home-interior-design`} className="px-4 py-2 rounded-full bg-white shadow-sm ring-1 ring-slate-200 text-slate-700 hover:text-primary hover:ring-primary transition">
                  Interior Design in {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Design Process</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We follow a systematic approach to ensure your interior design project is completed on time and within budget
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <h2 className="text-4xl font-bold mb-4">Recent Interior Design Projects</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Explore some of our recent interior design projects that showcase our creativity and expertise
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
            <h2 className="text-3xl font-bold mb-8">Interior Design FAQs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl ring-1 ring-slate-100">
                <h3 className="font-semibold text-slate-900 mb-2">How long does a 2 BHK interior take?</h3>
                <p className="text-slate-600">Typical timelines are 25–40 days depending on scope, site readiness, and material selections.</p>
              </div>
              <div className="bg-white p-6 rounded-xl ring-1 ring-slate-100">
                <h3 className="font-semibold text-slate-900 mb-2">Do you provide 3D designs and material boards?</h3>
                <p className="text-slate-600">Yes. We include renders, BOQs, and curated material boards to finalize the look before execution.</p>
              </div>
              <div className="bg-white p-6 rounded-xl ring-1 ring-slate-100">
                <h3 className="font-semibold text-slate-900 mb-2">Can you work within a fixed budget?</h3>
                <p className="text-slate-600">We tailor designs and specifications to your budget while maintaining quality and aesthetics.</p>
              </div>
              <div className="bg-white p-6 rounded-xl ring-1 ring-slate-100">
                <h3 className="font-semibold text-slate-900 mb-2">Do you offer warranty?</h3>
                <p className="text-slate-600">Yes. We offer workmanship warranty alongside brand warranties on hardware and materials.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 text-white overflow-hidden">
          <img
            src="/images/services/01-interior-design-hero.webp"
            alt="Interior design background"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary-dark/70" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-30" />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
            <p className="text-xl mb-8 opacity-90">Get started with a free consultation and let us create your dream interior</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/survey" className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-secondary transition-colors">Get Free Consultation</a>
              <a href="/contact" className="inline-block px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors">Contact Us</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

