import Head from 'next/head'
import { useState, useRef, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AutoSlider from '../components/AutoSlider'
import Link from 'next/link'

export default function Home({ reviewImages = [] }) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const testimonialsContainerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollButtons = () => {
    const el = testimonialsContainerRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
  }

  useEffect(() => {
    updateScrollButtons()
    const el = testimonialsContainerRef.current
    if (!el) return
    el.addEventListener('scroll', updateScrollButtons)
    const onResize = () => updateScrollButtons()
    window.addEventListener('resize', onResize)
    return () => {
      el.removeEventListener('scroll', updateScrollButtons)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const scrollTestimonials = (direction) => {
    const el = testimonialsContainerRef.current
    if (!el) return
    const amount = Math.min(600, el.clientWidth * 0.9)
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  // Reviews are hardcoded; remove Google fetch integration per request

  const fileNameToName = (fileName) => {
    const base = fileName.replace(/\.[^.]+$/, '') // remove extension
    return base
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ')
  }

  const baseTestimonials = [
    {
      id: 1,
      role: 'IT Professional, Kharadi',
      rating: 5,
      text: 'Home Makeover transformed our living room into a stunning space. The team was professional, punctual, and delivered exactly what we envisioned. Highly recommended!'
    },
    {
      id: 2,
      role: 'IT Professional, Katraj',
      rating: 5,
      text: 'Excellent painting work for our office. The quality is outstanding and they completed the project on time. Will definitely hire them again for future projects.'
    },
    {
      id: 3,
      role: 'IT Professional, Kharadi',
      rating: 5,
      text: 'As a professional designer, I\'m very particular about quality. Home Makeover exceeded my expectations with their attention to detail and craftsmanship.'
    },
    {
      id: 4,
      role: 'Property Developer, Kharadi',
      rating: 5,
      text: 'We hired Home Makeover for multiple properties. Their consistency, quality, and professional approach make them our go-to choice for all interior work.'
    },
    {
      id: 5,
      role: 'Homeowner, Lohegaon',
      rating: 5,
      text: 'The waterproofing work on our terrace is perfect. No more leaks during monsoon! The team was thorough and the work quality is exceptional.'
    },
    {
      id: 6,
      role: 'Restaurant Owner, Kesnand',
      rating: 5,
      text: 'Home Makeover did an amazing job renovating our restaurant. The carpentry work and electrical installations are top-notch. Great value for money!'
    },
    {
      id: 7,
      role: 'Homeowner, Kharadi',
      rating: 5,
      text: 'The false ceiling work in our living room is beautiful. The LED integration and design are exactly what we wanted. Professional team and excellent results.'
    },
    {
      id: 8,
      role: 'IT Professional, Wagholi',
      rating: 5,
      text: 'Home Makeover\'s electrical work is outstanding. They installed smart lighting throughout our home with proper safety measures. Highly skilled team!'
    }
  ]

  const testimonials = reviewImages.length
    ? baseTestimonials.map((t, idx) => {
        const file = reviewImages[idx] || reviewImages[0]
        return {
          ...t,
          name: fileNameToName(file),
          image: `/images/review/${file}`
        }
      })
    : baseTestimonials.map((t, idx) => ({
        ...t,
        name: (t.role && String(t.role).split(',')[0]) || `Client ${idx + 1}`,
        image: `https://i.pravatar.cc/100?u=${idx + 1}`
      }))

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '10+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Team Members' }
  ]

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Free initial consultation to understand your vision and requirements',
      icon: (
        <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4-.8L3 20l.8-4A8.963 8.963 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Detailed design planning with 3D visualizations and material selection',
      icon: (
        <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m4-4H8" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l9-4 9 4-9 4-9-4zm0 0v10l9 4 9-4V7" />
        </svg>
      )
    },
    {
      step: '03',
      title: 'Execution',
      description: 'Professional execution with quality materials and expert craftsmanship',
      icon: (
        <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 21v-4a2 2 0 012-2h3l3-3 5 5-3 3v3a2 2 0 01-2 2H6a2 2 0 01-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.5 6.5l3 3" />
        </svg>
      )
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Timely project completion with quality assurance and warranty',
      icon: (
        <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  const featuredProjects = [
    {
      id: 1,
      title: 'Luxury Villa Interior',
      category: 'Interior Design',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop',
      area: '3,500 sq ft',
      duration: '3 months'
    },
    {
      id: 2,
      title: 'Modern Office Space',
      category: 'Commercial Interior',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop',
      area: '2,000 sq ft',
      duration: '2 months'
    },
    {
      id: 3,
      title: 'Premium Apartment',
      category: 'Residential Interior',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1400&auto=format&fit=crop',
      area: '1,200 sq ft',
      duration: '1.5 months'
    }
  ]



  return (
    <>
      <Head>
        <title>Home Makeover — Professional Interior Design & Painting Services in Pune</title>
        <meta name="description" content="Transform your home with professional interior design, painting, carpentry, electrical, and waterproofing services in Pune. Free consultation and quotes." />
        <meta name="keywords" content="interior design, painting, Pune, Kharadi, Viman Nagar, Lohegaon, Magarpatta, Kalyani Nagar, home renovation, interior designer, painter" />
        <meta property="og:title" content="Home Makeover — Professional Interior Design & Painting Services in Pune" />
        <meta property="og:description" content="Transform your home with professional interior design, painting, carpentry, electrical, and waterproofing services in Pune. Free consultation and quotes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://homemakeover.com" />
        <link rel="canonical" href="https://homemakeover.com" />
      </Head>
      <Header />
      
      <main className="min-h-screen">
        {/* Auto Slider Hero Section */}
        <AutoSlider />

        {/* Statistics Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                   <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">{stat.number}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-bold mb-4">Our Premium Services</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From interior design to painting, carpentry to electrical work — we provide comprehensive 
                solutions to transform your space into something extraordinary.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Interior Design</h3>
                <p className="text-slate-600 mb-6">
                  Complete interior design solutions from concept to execution. We create beautiful, 
                  functional spaces that reflect your style and lifestyle.
                </p>
                <ul className="text-sm text-slate-600 space-y-2 mb-6">
                  <li>• Space Planning & Layout Design</li>
                  <li>• 3D Visualizations & Renderings</li>
                  <li>• Custom Furniture Design</li>
                  <li>• Color Scheme & Material Selection</li>
                </ul>
                <a href="/services/interior-design" className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors">
                  Learn More
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Professional Painting</h3>
                <p className="text-slate-600 mb-6">
                  Expert interior and exterior painting services with premium quality materials. 
                  We deliver flawless finishes that last.
                </p>
                <ul className="text-sm text-slate-600 space-y-2 mb-6">
                  <li>• Interior & Exterior Painting</li>
                  <li>• Texture & Special Effects</li>
                  <li>• Color Consultation</li>
                  <li>• Premium Quality Materials</li>
                </ul>
                <a href="/services/painting" className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors">
                  Learn More
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Complete Renovation</h3>
                <p className="text-slate-600 mb-6">
                  Full home renovation services including carpentry, electrical, waterproofing, 
                  and false ceiling work. One-stop solution for all your needs.
                </p>
                <ul className="text-sm text-slate-600 space-y-2 mb-6">
                  <li>• Carpentry & Furniture</li>
                  <li>• Electrical Work</li>
                  <li>• Waterproofing</li>
                  <li>• False Ceiling & POP</li>
                </ul>
                <a href="/services/renovation" className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Process</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We follow a systematic approach to ensure your project is completed on time and within budget
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="group text-center relative bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 flex items-center justify-center shadow">
                    {step.icon}
                  </div>
                  <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-sm mb-3">
                    Step {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-700 transition-colors">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-[-16px] w-8 h-0.5 bg-gradient-to-r from-slate-200 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Explore some of our most impressive projects that showcase our expertise and creativity
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <Link href={`/projects/${project.id}`} key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow block group">
                  <div className="relative h-64">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-indigo-600 text-white rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                    <div className="flex justify-between text-sm text-slate-600 mb-4">
                      <span>Area: {project.area}</span>
                      <span>Duration: {project.duration}</span>
                    </div>
                    <span className="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-semibold">
                      View Details
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities & Guarantees Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Capabilities & Guarantees</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">What sets us apart as a leading interior design and painting company in Pune</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-xl font-bold mb-2">Design to Delivery</h3>
                <p className="text-slate-600 mb-4">End-to-end execution with project management, quality checks, and regular updates</p>
                <ul className="text-slate-600 space-y-2 text-sm">
                  <li>• Dedicated project manager</li>
                  <li>• Daily progress tracking</li>
                  <li>• Quality checklist for every stage</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-xl font-bold mb-2">Assured Timelines</h3>
                <p className="text-slate-600 mb-4">Realistic schedules with milestone commitments and on-time handover</p>
                <ul className="text-slate-600 space-y-2 text-sm">
                  <li>• Planned material readiness</li>
                  <li>• Weekly milestone reviews</li>
                  <li>• Escalation support</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-xl font-bold mb-2">Trusted Warranty</h3>
                <p className="text-slate-600 mb-4">Warranty on workmanship and select materials with post-service support</p>
                <ul className="text-slate-600 space-y-2 text-sm">
                  <li>• Painting: up to 2 years</li>
                  <li>• Waterproofing: as per system</li>
                  <li>• Electrical & carpentry workmanship</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Real experiences from happy homeowners and partners
              </p>
            </div>

            {/* Horizontal Testimonials */}
            <div className="relative">
              {/* Edge fades */}
              {canScrollLeft && (
                <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-slate-50 to-transparent rounded-l-2xl" />
              )}
              {canScrollRight && (
                <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-slate-50 to-transparent rounded-r-2xl" />
              )}

              {/* Nav arrows */}
              <button
                aria-label="Scroll testimonials left"
                onClick={() => scrollTestimonials('left')}
                className={`hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full items-center justify-center shadow-md transition-all ${
                  canScrollLeft ? 'bg-white hover:bg-slate-100 text-slate-700' : 'bg-white/60 text-slate-400 pointer-events-none'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                aria-label="Scroll testimonials right"
                onClick={() => scrollTestimonials('right')}
                className={`hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full items-center justify-center shadow-md transition-all ${
                  canScrollRight ? 'bg-white hover:bg-slate-100 text-slate-700' : 'bg-white/60 text-slate-400 pointer-events-none'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>

              <div ref={testimonialsContainerRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mb-4 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent scroll-smooth">
                {testimonials.map((t) => (
                  <div key={t.id} className="snap-start shrink-0 w-[320px] md:w-[360px] bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden">
                        <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900">{t.name}</h4>
                        <p className="text-xs text-slate-500">{t.role || 'Google Reviewer'}</p>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(t.rating)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-slate-700 text-sm leading-relaxed">
                      “{t.text}”
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose Home Makeover?</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We combine expertise, quality materials, and attention to detail to deliver exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Materials</h3>
                <p className="text-slate-600">We use only premium quality materials and equipment for lasting results</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Team</h3>
                <p className="text-slate-600">Our skilled professionals have years of experience in all services</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Warranty Coverage</h3>
                <p className="text-slate-600">All our work comes with comprehensive warranty for your peace of mind</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Customer Support</h3>
                <p className="text-slate-600">Dedicated support team available throughout your project journey</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-rose-600 to-rose-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get started with a free consultation and professional assessment of your project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/survey" className="inline-block px-8 py-4 bg-white text-rose-600 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors">
                Get Free Quote
              </a>
              <a href="/contact" className="inline-block px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-rose-600 transition-colors">
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

export async function getStaticProps() {
  // Dynamically read available images from public/images/review
  const fs = await import('fs')
  const path = await import('path')
  const dir = path.join(process.cwd(), 'public', 'images', 'review')
  let files = []
  try {
    files = fs.readdirSync(dir)
      .filter((f) => /\.(webp|jpg|jpeg|png)$/i.test(f))
      .sort()
  } catch (e) {
    console.warn('[home] review images directory not readable:', e?.message || e)
  }
  return {
    props: {
      reviewImages: files,
    },
  }
}
