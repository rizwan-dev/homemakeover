import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function RenovationService() {
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
      title: 'Complete Villa Renovation',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1400&auto=format&fit=crop',
      area: '3,500 sq ft',
      duration: '3 months'
    },
    {
      title: 'Kitchen & Bathroom Remodel',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop',
      area: '800 sq ft',
      duration: '6 weeks'
    },
    {
      title: 'Commercial Office Renovation',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1400&auto=format&fit=crop',
      area: '2,000 sq ft',
      duration: '2 months'
    }
  ]

  return (
    <>
      <Head>
        <title>Complete Home Renovation Services in Pune — Home Makeover</title>
        <meta name="description" content="Complete home renovation services in Pune. Carpentry, electrical, waterproofing, false ceiling, and more. One-stop renovation solution with 10+ years experience." />
        <meta name="keywords" content="home renovation, Pune, carpentry, electrical work, waterproofing, false ceiling, renovation services" />
        <meta property="og:title" content="Complete Home Renovation Services in Pune — Home Makeover" />
        <meta property="og:description" content="Complete home renovation services in Pune. Carpentry, electrical, waterproofing, false ceiling, and more. One-stop renovation solution." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://homemakeover.com/services/renovation" />
        <link rel="canonical" href="https://homemakeover.com/services/renovation" />
      </Head>
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
          <div className="relative max-w-6xl mx-auto px-6 py-24">
            <div className="text-center">
              <nav className="flex justify-center mb-8">
                <Link href="/" className="text-rose-300 hover:text-white transition-colors">
                  Home
                </Link>
                <span className="mx-2 text-slate-400">/</span>
                <Link href="/services" className="text-rose-300 hover:text-white transition-colors">
                  Services
                </Link>
                <span className="mx-2 text-slate-400">/</span>
                <span className="text-white">Renovation</span>
              </nav>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                Complete Home Renovation
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Transform your space with our comprehensive renovation services. From carpentry to electrical, 
                waterproofing to false ceiling — we handle every aspect of your renovation project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/survey" className="inline-block px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-semibold text-lg transition-colors">
                  Get Free Quote
                </a>
                <a href="/contact" className="inline-block px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-slate-50 rounded-xl">
                  <h3 className="font-semibold text-slate-900 mb-2">Project-Based Pricing</h3>
                  <p className="text-slate-600">Custom quotes based on project scope and requirements</p>
                </div>
              </div>

              <div className="relative">
                <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1400&auto=format&fit=crop" 
                    alt="Complete Home Renovation"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
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
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-blue-600">{step.step}</span>
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Home?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get started with a free consultation and let us bring your renovation vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/survey" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors">
                Get Free Quote
              </a>
              <a href="/contact" className="inline-block px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

