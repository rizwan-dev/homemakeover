import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Interior Design',
      description: 'Complete interior design solutions from concept to execution',
      image: '/images/services/01-interior-design-hero.webp',
      features: [
        'Space Planning & Layout Design',
        '3D Visualizations & Renderings',
        'Custom Furniture Design',
        'Color Scheme & Material Selection',
        'Lighting Design & Installation',
        'Turnkey Project Execution'
      ],
      price: 'Starting from ₹50,000'
    },
    {
      id: 2,
      title: 'Interior Painting',
      description: 'Professional interior painting with premium quality materials',
      image: '/images/services/02-interior-painting-hero.webp',
      features: [
        'Wall Preparation & Priming',
        'Premium Quality Paints',
        'Texture & Special Effects',
        'Color Consultation',
        'Clean & Professional Finish',
        '2-Year Warranty'
      ],
      price: 'Starting from ₹15/sq ft'
    },
    {
      id: 3,
      title: 'Exterior Painting',
      description: 'Durable exterior painting solutions for all weather conditions',
      image: '/images/services/03-exterior-painting-hero.webp',
      features: [
        'Weather-Resistant Paints',
        'Surface Preparation & Repair',
        'Waterproofing Solutions',
        'Color Matching & Consultation',
        'Professional Application',
        'Long-lasting Protection'
      ],
      price: 'Starting from ₹20/sq ft'
    },
    {
      id: 4,
      title: 'Carpentry Service',
      description: 'Custom woodwork and furniture solutions for your home',
      image: '/images/services/04-carpentry-service-hero.webp',
      features: [
        'Custom Furniture Design',
        'Kitchen Cabinets & Wardrobes',
        'Bedroom Furniture',
        'Living Room Furniture',
        'Office Furniture',
        'Quality Wood Materials'
      ],
      price: 'Starting from ₹80,000'
    },
    {
      id: 5,
      title: 'POP and False Ceiling',
      description: 'Modern false ceiling designs and POP work for contemporary homes',
      image: '/images/services/05-false-ceiling-pop-hero.webp',
      features: [
        'Custom False Ceiling Designs',
        'POP (Plaster of Paris) Work',
        'LED Integration',
        'Acoustic Solutions',
        'Modern & Classic Styles',
        'Professional Installation'
      ],
      price: 'Starting from ₹80/sq ft'
    },
    {
      id: 6,
      title: 'Home Electrician Service',
      description: 'Complete electrical solutions for residential and commercial spaces',
      image: '/images/services/06-home-electrician-service-hero.webp',
      features: [
        'Electrical Wiring & Installation',
        'Switch & Socket Installation',
        'Lighting Design & Installation',
        'MCB & Distribution Board',
        'Safety Compliance',
        'Professional Electricians'
      ],
      price: 'Starting from ₹40,000'
    },
    {
      id: 7,
      title: 'Waterproofing',
      description: 'Comprehensive waterproofing solutions for roofs and terraces',
      image: '/images/services/07-waterproofing-hero.webp',
      features: [
        'Terrace Waterproofing',
        'Bathroom Waterproofing',
        'Basement Waterproofing',
        'Advanced Membrane Technology',
        'Leak Detection & Repair',
        '5-Year Warranty'
      ],
      price: 'Starting from ₹120/sq ft'
    },
    {
      id: 8,
      title: 'Home Renovation',
      description: 'Complete home renovation and remodeling services',
      image: '/images/services/08-home-renovation-hero.webp',
      features: [
        'Complete Home Makeover',
        'Kitchen Renovation',
        'Bathroom Remodeling',
        'Structural Modifications',
        'Project Management',
        'Quality Assurance'
      ],
      price: 'Custom Quote'
    }
  ]

  return (
    <>
      <Head>
        <title>Our Services — Home Makeover | Interior Design & Painting in Pune</title>
        <meta name="description" content="Professional interior design, painting, carpentry, electrical, waterproofing, and renovation services in Pune. Free consultation, quality work, and warranty." />
      </Head>
      <Header />
      
      <main className="min-h-screen bg-gray-50">
        <Hero
          title="Our Premium Services"
          subtitle="From interior design to painting, carpentry to electrical work — we provide comprehensive solutions to transform your space."
          breadcrumbs={[{ href: '/', label: 'Home' }, { label: 'Services' }]}
          backgroundImage="/images/services/01-interior-design-hero.webp"
        />

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {services.map((service) => (
                <div key={service.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-64">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-slate-600 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-slate-800">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                           <li key={index} className="flex items-center gap-3 text-sm text-slate-600">
                             <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-4">
                      <a 
                        href="/survey" 
                        className="flex-1 px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-lg font-semibold text-center transition-colors"
                      >
                        Get Quote
                      </a>
                      <a 
                        href={service.title === 'Interior Design' ? '/services/interior-design' : 
                              service.title === 'Interior Painting' ? '/services/painting' :
                              service.title === 'Exterior Painting' ? '/services/painting' :
                              '/services/renovation'} 
                        className="px-6 py-3 border-2 border-neutral text-text rounded-lg font-semibold hover:border-primary hover:text-primary transition-colors"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose Our Services?</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We combine expertise, quality materials, and attention to detail to deliver exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Materials</h3>
                <p className="text-slate-600">We use only premium quality materials and equipment for lasting results</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Team</h3>
                <p className="text-slate-600">Our skilled professionals have years of experience in all services</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Warranty Coverage</h3>
                <p className="text-slate-600">All our work comes with comprehensive warranty for your peace of mind</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 text-white overflow-hidden">
          <img
            src="/images/services/01-interior-design-hero.webp"
            alt="Services background"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary-dark/70" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-30" />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">Get a free consultation and detailed quote for your project</p>
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
