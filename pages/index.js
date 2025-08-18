import Head from 'next/head'
import { Ruler, PaintRoller, Home as HomeIcon, MessageSquare, Pencil, Hammer, Truck } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AutoSlider from '../components/AutoSlider'
import Link from 'next/link'

export default function Home({ reviewImages = [], sliderImages = [] }) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const testimonialsContainerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const VISIBLE_PROJECTS = 6

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
      icon: (<MessageSquare className="w-10 h-10 text-primary" aria-hidden />)
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Detailed design planning with 3D visualizations and material selection',
      icon: (<Pencil className="w-10 h-10 text-primary" aria-hidden />)
    },
    {
      step: '03',
      title: 'Execution',
      description: 'Professional execution with quality materials and expert craftsmanship',
      icon: (<Hammer className="w-10 h-10 text-primary" aria-hidden />)
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Timely project completion with quality assurance and warranty',
      icon: (<Truck className="w-10 h-10 text-primary" aria-hidden />)
    }
  ]

  const featuredProjects = [
    {
      id: 1,
      title: 'Luxury Villa Interior',
      category: 'Interior Design',
      image: '/images/project/02-viman-nagar-luxury-villa-interior-main.webp',
      area: '3,500 sq ft',
      duration: '3 months'
    },
    {
      id: 2,
      title: 'Modern Office Space',
      category: 'Commercial Interior',
      image: '/images/project/04-kalyani-nagar-modern-office-interior-main.webp',
      area: '2,000 sq ft',
      duration: '2 months'
    },
    {
      id: 3,
      title: 'Premium Apartment',
      category: 'Residential Interior',
      image: '/images/project/01-forest-county-kharadi-2bhk-interior-main.webp',
      area: '1,200 sq ft',
      duration: '1.5 months'
    },
    {
      id: 4,
      title: 'Home Renovation — Kharadi',
      category: 'Renovation',
      image: '/images/project/09-vtp-pegasus-kharadi-premium-interior-main.webp',
      area: '1020 sq ft',
      duration: '5 weeks'
    },
    {
      id: 5,
      title: 'Exterior Painting — Viman Nagar',
      category: 'Painting',
      image: '/images/project/03-lohegaon-exterior-house-painting-main.webp',
      area: '2,600 sq ft',
      duration: '3 weeks'
    },
    {
      id: 6,
      title: 'False Ceiling & Lighting',
      category: 'Interior',
      image: '/images/project/06-kesnand-false-ceiling-installation-main.webp',
      area: '1,000 sq ft',
      duration: '4 weeks'
    },
    {
      id: 7,
      title: 'Boutique Store Fit-out',
      category: 'Commercial Interior',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1400&auto=format&fit=crop',
      area: '900 sq ft',
      duration: '6 weeks'
    },
    {
      id: 8,
      title: 'Luxury Bedroom Suite',
      category: 'Interior Design',
      image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d52?q=80&w=1400&auto=format&fit=crop',
      area: '650 sq ft',
      duration: '3 weeks'
    },
    {
      id: 9,
      title: 'Waterproofing & Terrace Garden',
      category: 'Waterproofing',
      image: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f5?q=80&w=1400&auto=format&fit=crop',
      area: '1,400 sq ft',
      duration: '2 weeks'
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
        {/* FAQ Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'How much does interior design cost in Pune?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Interior design costs in Pune vary by scope, materials and customization. At Home Makeover, we offer transparent, value-driven pricing with popular starter packages like: 2BHK from ₹3.6 Lakhs, 3BHK from ₹4.3 Lakhs, 4BHK from ₹4.9 Lakhs, Living room from ₹1.2 Lakhs, Kitchen from ₹1.4 Lakhs, Bedroom from ₹1.5 Lakhs. Final costs depend on finishes, hardware, and site readiness.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'How to find an interior designer in Pune?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Shortlist Pune-based firms with real local projects, verified reviews, and clear scopes. Explore the Home Makeover portfolio, book a free consultation, and get a tailored proposal with drawings, BOQs and timelines. We provide end-to-end execution from design to installation.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'How much does a 2BHK interior cost in Pune?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'A 2BHK interior typically ranges from ₹4–10 Lakhs based on materials and customization. Home Makeover offers curated 2BHK packages starting around ₹3.6 Lakhs, optimized for quality and timelines.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'How much does 3BHK interior design cost in Pune?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'A 3BHK interior usually ranges from ₹6–15 Lakhs. With Home Makeover, popular 3BHK configurations start near ₹4.3 Lakhs and scale according to finishes (ply, hardware, veneers, appliances) and scope.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Why choose Home Makeover for your home interiors?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We combine local Pune expertise with design-first thinking, detailed BOQs, and project management. Our modular plus custom solutions, premium hardware, and on-site quality checks ensure durable, elegant interiors—delivered on time.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'What are the timelines for project completion?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'For modular scopes we target a 45-day move‑in from site readiness and approvals. Full‑home interiors typically complete in ~90 days. Timelines depend on design approvals, material lead times and site conditions (conditions apply).'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'What services are included under home interior design?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'End‑to‑end: design, drawings, modular kitchens/wardrobes, custom carpentry, painting, electrical, plumbing, false ceiling/POP, waterproofing, flooring/tiling, delivery and installation. We handle both new homes and renovations.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Do you provide a free site survey and quote?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Book a free site survey with Home Makeover and receive a detailed, no‑obligation quote with itemized BOQ.'
                  }
                }
              ]
            })
          }}
        />
      </Head>
      <Header />
      
      <main className="min-h-screen">
        {/* Auto Slider Hero Section */}
        <AutoSlider sliderImages={sliderImages} />

        {/* Statistics Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                   <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
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
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-6 text-primary">
                  <Ruler className="w-8 h-8" aria-hidden />
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
                <a href="/services/interior-design" className="inline-block px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-lg font-semibold transition-colors">
                  Learn More
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-6 text-primary">
                  <PaintRoller className="w-8 h-8" aria-hidden />
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
                <a href="/services/painting" className="inline-block px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-lg font-semibold transition-colors">
                  Learn More
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-6 text-primary">
                  <HomeIcon className="w-8 h-8" aria-hidden />
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
                <a href="/services/renovation" className="inline-block px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-lg font-semibold transition-colors">
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
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-secondary to-background border border-secondary-dark flex items-center justify-center shadow">
                    {step.icon}
                  </div>
                  <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-secondary text-primary font-semibold text-sm mb-3">
                    Step {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
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
              {featuredProjects.slice(0, VISIBLE_PROJECTS).map((project) => (
                <Link href={`/projects/${project.id}`} key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow block group">
                  <div className="relative h-64">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <div className="flex justify-between text-sm text-slate-600 mb-4">
                      <span>Area: {project.area}</span>
                      <span>Duration: {project.duration}</span>
                    </div>
                    <span className="inline-block px-4 py-2 border-2 border-primary text-primary rounded-lg font-semibold transition-colors group-hover:bg-primary group-hover:text-white">
                      View Details
                    </span>
                  </div>
                </Link>
              ))}
              <div className="md:col-span-3 text-center mt-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-neutral rounded-lg text-text hover:border-primary hover:text-primary font-semibold"
                >
                  View All Projects
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                </Link>
              </div>
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

        {/* FAQ Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-slate-600">Answers to common questions about our services in Pune</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              <details className="group bg-white rounded-xl border border-slate-200 p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-slate-900">How much does interior design cost in Pune?
                  <span className="ml-4 transition-transform group-open:rotate-45">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M4 12h16"/></svg>
                  </span>
                </summary>
                <div className="mt-3 text-slate-600">
                  Pricing depends on scope, materials and customization. Popular starting points at Home Makeover:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>2BHK: from ₹3.6 Lakhs</li>
                    <li>3BHK: from ₹4.3 Lakhs</li>
                    <li>4BHK: from ₹4.9 Lakhs</li>
                    <li>Living room: from ₹1.2 Lakhs</li>
                    <li>Kitchen: from ₹1.4 Lakhs</li>
                    <li>Bedroom: from ₹1.5 Lakhs</li>
                  </ul>
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-slate-200 p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-slate-900">How to find an interior designer in Pune?
                  <span className="ml-4 transition-transform group-open:rotate-45">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M4 12h16"/></svg>
                  </span>
                </summary>
                <div className="mt-3 text-slate-600">Review portfolios, on-site photos, and BOQs; check timelines and warranty. Book a free consultation with Home Makeover for a tailored plan and transparent proposal.</div>
              </details>

              <details className="group bg-white rounded-xl border border-slate-200 p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-slate-900">How much does a 2BHK interior cost in Pune?
                  <span className="ml-4 transition-transform group-open:rotate-45">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M4 12h16"/></svg>
                  </span>
                </summary>
                <div className="mt-3 text-slate-600">Typically ₹4–10 Lakhs. Home Makeover packages start near ₹3.6 Lakhs and scale with finishes and custom elements.</div>
              </details>

              <details className="group bg-white rounded-xl border border-slate-200 p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-slate-900">How much does 3BHK interior design cost in Pune?
                  <span className="ml-4 transition-transform group-open:rotate-45">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M4 12h16"/></svg>
                  </span>
                </summary>
                <div className="mt-3 text-slate-600">Usually ₹6–15 Lakhs. With Home Makeover, popular 3BHK configurations begin around ₹4.3 Lakhs depending on scope and materials.</div>
              </details>

              <details className="group bg-white rounded-xl border border-slate-200 p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-slate-900">Why choose Home Makeover for your interiors?
                  <span className="ml-4 transition-transform group-open:rotate-45">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M4 12h16"/></svg>
                  </span>
                </summary>
                <div className="mt-3 text-slate-600">Pune-based team, design-first approach, premium hardware/finishes, transparent BOQs, on-time handovers and local post-installation support.</div>
              </details>

              <details className="group bg-white rounded-xl border border-slate-200 p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-slate-900">What will be the project timelines?
                  <span className="ml-4 transition-transform group-open:rotate-45">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M4 12h16"/></svg>
                  </span>
                </summary>
                <div className="mt-3 text-slate-600">Modular scopes: ~45‑day move‑in from site readiness and approvals. Full‑home interiors: ~90 days. Timelines vary by approvals, material lead times, and site conditions.</div>
              </details>

              <details className="group bg-white rounded-xl border border-slate-200 p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-slate-900">What services are included?
                  <span className="ml-4 transition-transform group-open:rotate-45">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M4 12h16"/></svg>
                  </span>
                </summary>
                <div className="mt-3 text-slate-600">Design & drawings, modular kitchens/wardrobes, custom carpentry, painting, electrical, plumbing, false ceiling/POP, waterproofing, flooring/tiling, delivery and installation.</div>
              </details>

              <details className="group bg-white rounded-xl border border-slate-200 p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-slate-900">Do you provide a free site survey and quote?
                  <span className="ml-4 transition-transform group-open:rotate-45">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M4 12h16"/></svg>
                  </span>
                </summary>
                <div className="mt-3 text-slate-600">Yes—book a free site survey and receive a detailed, no‑obligation proposal.</div>
              </details>
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

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <section className="relative py-20 text-white overflow-hidden">
          <img
            src="/images/project/02-viman-nagar-luxury-villa-interior-main.webp"
            alt="Luxury interior background"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary-dark/70" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-30" />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
            <p className="text-xl mb-8 opacity-90">Get started with a free consultation and professional assessment of your project</p>
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

export async function getStaticProps() {
  const fs = await import('fs')
  const path = await import('path')

  // Reviews
  const reviewDir = path.join(process.cwd(), 'public', 'images', 'review')
  let reviewFiles = []
  try {
    reviewFiles = fs.readdirSync(reviewDir)
      .filter((f) => /\.(webp|jpg|jpeg|png)$/i.test(f))
      .sort()
  } catch (e) {
    console.warn('[home] review images directory not readable:', e?.message || e)
  }

  // Slider
  const sliderDir = path.join(process.cwd(), 'public', 'images', 'slider')
  let sliderFiles = []
  try {
    sliderFiles = fs.readdirSync(sliderDir)
      .filter((f) => /\.(webp|jpg|jpeg|png)$/i.test(f))
      .sort()
  } catch (e) {
    console.warn('[home] slider images directory not readable:', e?.message || e)
  }

  return {
    props: {
      reviewImages: reviewFiles,
      sliderImages: sliderFiles,
    },
  }
}
