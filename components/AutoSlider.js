import { useState, useEffect } from 'react'

export default function AutoSlider({ sliderImages = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const baseSlides = [
    {
      id: 1,
      title: "Professional Interior Design",
      subtitle: "Transform Your Living Space",
      description: "Expert interior design services with 3D visualizations and custom furniture design. Create your dream home with our comprehensive design solutions.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop",
      cta: "Get Free Consultation",
      ctaLink: "/survey",
      stats: ["500+ Projects", "10+ Years Experience", "100% Satisfaction"]
    },
    {
      id: 2,
      title: "Premium Painting Services",
      subtitle: "Flawless Finishes That Last",
      description: "Interior and exterior painting with premium materials and 2-year warranty. Professional application techniques for stunning results.",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1400&auto=format&fit=crop",
      cta: "Get Free Quote",
      ctaLink: "/survey",
      stats: ["Premium Materials", "Expert Team", "2-Year Warranty"]
    },
    {
      id: 3,
      title: "Complete Home Renovation",
      subtitle: "One-Stop Solution",
      description: "Carpentry, electrical, waterproofing, and false ceiling services. From concept to completion, we handle every aspect of your renovation.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1400&auto=format&fit=crop",
      cta: "Start Your Project",
      ctaLink: "/contact",
      stats: ["End-to-End Service", "Quality Guarantee", "Timely Delivery"]
    },
    {
      id: 4,
      title: "Local Expertise",
      subtitle: "Serving Pune Areas",
      description: "Professional services in Kharadi, Viman Nagar, Lohegaon, Magarpatta, and Kalyani Nagar. Local knowledge, global standards.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop",
      cta: "View Our Areas",
      ctaLink: "/services",
      stats: ["5+ Areas Covered", "Quick Response", "Local Support"]
    }
  ]

  // Prefer local slider images if provided
  const slides = baseSlides.map((slide, idx) => ({
    ...slide,
    image: sliderImages[idx] ? `/images/slider/${sliderImages[idx]}` : slide.image,
  }))

  // If there are more local images than base slides, append simple slides for extras
  if (sliderImages.length > slides.length) {
    const extras = sliderImages.slice(slides.length).map((file, i) => ({
      id: slides.length + i + 1,
      title: 'Beautiful Home Interiors',
      subtitle: 'Designed & Executed by Professionals',
      description: 'End-to-end interior design and painting services in Pune with assured quality and timelines.',
      image: `/images/slider/${file}`,
      cta: 'Get Free Consultation',
      ctaLink: '/survey',
      stats: ["Quality Materials", "Expert Team", "On-Time Delivery"],
    }))
    slides.push(...extras)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000) // Change slide every 6 seconds

    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-800/75 to-slate-900/85"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="max-w-6xl mx-auto px-6 w-full">
              <div className="max-w-4xl">
                <div className="mb-8">
                  <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
                    Professional Home Services
                  </div>
                  <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">
                    {slide.title}
                  </h2>
                  <h3 className="text-2xl md:text-3xl font-semibold text-secondary-dark mb-6">
                    {slide.subtitle}
                  </h3>
                  <p className="text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl">
                    {slide.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 mb-8">
                  {slide.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-slate-300 font-medium">{stat}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={slide.ctaLink}
                    className="inline-block px-8 py-4 bg-primary hover:bg-primary-light text-white rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    {slide.cta}
                  </a>
                  <a 
                    href="/contact"
                    className="inline-block px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-accent scale-125' 
                : 'bg-white/50 hover:bg-white/70 hover:scale-110'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-gradient-to-r from-accent to-primary transition-all duration-6000 ease-linear"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
