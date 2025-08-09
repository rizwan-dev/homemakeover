import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function InteriorDesignService() {
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
      title: 'Modern Living Room',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop',
      area: '400 sq ft',
      duration: '3 weeks'
    },
    {
      title: 'Luxury Kitchen',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1400&auto=format&fit=crop',
      area: '250 sq ft',
      duration: '4 weeks'
    },
    {
      title: 'Master Bedroom',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1400&auto=format&fit=crop',
      area: '300 sq ft',
      duration: '2 weeks'
    }
  ]

  return (
    <>
      <Head>
        <title>Interior Design Services in Pune — Home Makeover</title>
        <meta name="description" content="Professional interior design services in Pune. Complete interior design solutions with 3D visualizations, custom furniture, and turnkey execution. Free consultation available." />
        <meta name="keywords" content="interior design, Pune, 3D visualization, custom furniture, space planning, interior designer" />
        <meta property="og:title" content="Interior Design Services in Pune — Home Makeover" />
        <meta property="og:description" content="Professional interior design services in Pune. Complete interior design solutions with 3D visualizations, custom furniture, and turnkey execution." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://homemakeover.com/services/interior-design" />
        <link rel="canonical" href="https://homemakeover.com/services/interior-design" />
      </Head>
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
          <div className="relative max-w-6xl mx-auto px-6 py-24">
            <div className="text-center">
              <nav className="flex justify-center mb-8">
                <Link href="/" className="text-indigo-300 hover:text-white transition-colors">
                  Home
                </Link>
                <span className="mx-2 text-slate-400">/</span>
                <Link href="/services" className="text-indigo-300 hover:text-white transition-colors">
                  Services
                </Link>
                <span className="mx-2 text-slate-400">/</span>
                <span className="text-white">Interior Design</span>
              </nav>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                Interior Design Services
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Transform your space with our comprehensive interior design services. From concept to execution, 
                we create beautiful, functional spaces that reflect your style and lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/survey" className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold text-lg transition-colors">
                  Get Free Consultation
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
                <h2 className="text-4xl font-bold mb-6">Complete Interior Design Solutions</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  With over 10 years of experience, we specialize in creating stunning interior spaces that combine 
                  functionality with aesthetics. Our expert designers work closely with you to bring your vision to life, 
                  using premium materials and innovative design techniques.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-slate-50 rounded-xl">
                  <h3 className="font-semibold text-slate-900 mb-2">Starting Price</h3>
                  <p className="text-slate-600">Complete interior design packages starting from ₹50,000</p>
                </div>
              </div>

              <div className="relative">
                <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop" 
                    alt="Interior Design Services"
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
              <h2 className="text-4xl font-bold mb-4">Our Design Process</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We follow a systematic approach to ensure your interior design project is completed on time and within budget
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-indigo-600">{step.step}</span>
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get started with a free consultation and let us create your dream interior
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/survey" className="inline-block px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors">
                Get Free Consultation
              </a>
              <a href="/contact" className="inline-block px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors">
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

