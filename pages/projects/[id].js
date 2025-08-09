import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function ProjectDetail() {
  const router = useRouter()
  const { id } = router.query
  const [activeImage, setActiveImage] = useState(0)

  const projects = [
    {
      id: 1,
      title: 'Home Interior Design in 2 BHK - Forest County Kharadi',
      category: 'interior',
      location: 'Forest County, Kharadi, Pune',
      area: '1,200 sq ft',
      duration: '2.5 months',
      budget: '₹4.5 Lakhs',
      status: 'Completed',
      mainImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1400&auto=format&fit=crop'
      ],
      description: 'Complete interior design transformation for a 2 BHK apartment in Forest County, Kharadi. This project included modern living room design, kitchen renovation, master bedroom makeover, and bathroom upgrades. The client wanted a contemporary design that maximized space utilization while maintaining aesthetic appeal.',
      longDescription: `This project was a complete transformation of a 2 BHK apartment in Forest County, Kharadi. The client, Mr. & Mrs. Sharma, wanted a modern, functional, and aesthetically pleasing interior that would make the most of their 1,200 sq ft space.

The project involved comprehensive interior design work including:
- Complete living room redesign with custom furniture
- Kitchen renovation with premium cabinets and countertops
- Master bedroom makeover with walk-in wardrobe
- Contemporary bathroom design with modern fixtures
- LED lighting installation throughout the apartment
- Premium materials and finishes for durability

The design focused on creating an open, airy feel while maintaining privacy and functionality. We used a neutral color palette with accent colors to create visual interest. The project was completed within the 2.5-month timeline and the client was extremely satisfied with the results.`,
      features: [
        'Modern Living Room with Custom Furniture',
        'Kitchen with Premium Cabinets and Countertops',
        'Master Bedroom with Walk-in Wardrobe',
        'Contemporary Bathroom Design',
        'LED Lighting Throughout',
        'Premium Materials and Finishes',
        'Space Optimization',
        'Custom Storage Solutions',
        'Modern Fixtures and Fittings',
        'Professional Installation'
      ],
      specifications: {
        'Project Type': 'Residential Interior Design',
        'Location': 'Forest County, Kharadi, Pune',
        'Status': 'Completed',
        'Client': 'Mr. & Mrs. Sharma',
        'Completion Date': 'December 2023',
        'Services Used': 'Interior Design, Carpentry, Electrical, Painting'
      },
      client: 'Mr. & Mrs. Sharma',
      completionDate: 'December 2023',
      testimonial: {
        text: 'Home Makeover transformed our 2 BHK apartment into a beautiful, functional space. The team was professional, creative, and delivered exactly what we envisioned. The quality of work is outstanding!',
        rating: 5,
        name: 'Mr. & Mrs. Sharma',
        location: 'Forest County, Kharadi'
      }
    },
    {
      id: 2,
      title: 'Luxury Villa Interior - Viman Nagar',
      category: 'interior',
      location: 'Viman Nagar, Pune',
      area: '3,500 sq ft',
      duration: '4 months',
      budget: '₹12 Lakhs',
      status: 'Completed',
      mainImage: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1400&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1400&auto=format&fit=crop'
      ],
      description: 'Complete luxury villa interior design project featuring modern aesthetics with premium materials, custom furniture, and smart home integration.',
      longDescription: `This luxury villa project in Viman Nagar was a comprehensive interior design transformation spanning 3,500 sq ft. The client wanted a sophisticated, modern design that reflected their lifestyle and taste.

The project included:
- Grand living room with high ceilings and custom lighting
- Custom kitchen with island design and premium appliances
- 4 bedrooms with en-suite bathrooms
- Home theater room with acoustic treatment
- Smart home automation throughout
- Premium Italian marble flooring
- Custom furniture and upholstery
- Advanced lighting control systems

The design emphasized luxury, comfort, and functionality while incorporating the latest technology and premium materials. The project was completed successfully within the 4-month timeline.`,
      features: [
        'Grand Living Room with High Ceilings',
        'Custom Kitchen with Island Design',
        '4 Bedrooms with En-suite Bathrooms',
        'Home Theater Room',
        'Smart Home Automation',
        'Premium Italian Marble Flooring',
        'Custom Furniture Design',
        'Advanced Lighting Systems',
        'Acoustic Treatment',
        'Premium Appliances'
      ],
      specifications: {
        'Project Type': 'Luxury Villa Interior',
        'Location': 'Viman Nagar, Pune',
        'Status': 'Completed',
        'Client': 'Mr. Rajesh Patel',
        'Completion Date': 'November 2023',
        'Services Used': 'Interior Design, Smart Home, Carpentry, Electrical, Painting'
      },
      client: 'Mr. Rajesh Patel',
      completionDate: 'November 2023',
      testimonial: {
        text: 'The luxury villa project exceeded our expectations. The attention to detail, quality of materials, and professional execution is outstanding. Highly recommended!',
        rating: 5,
        name: 'Mr. Rajesh Patel',
        location: 'Viman Nagar'
      }
    },
    {
      id: 3,
      title: 'Exterior House Painting - Lohegaon',
      category: 'painting',
      location: 'Lohegaon, Pune',
      area: '2,800 sq ft',
      duration: '3 weeks',
      budget: '₹1.8 Lakhs',
      status: 'Completed',
      mainImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1400&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1400&auto=format&fit=crop'
      ],
      description: 'Complete exterior painting project with weather-resistant finishes, texture work, and waterproofing solutions for long-lasting protection.',
      longDescription: `This exterior painting project in Lohegaon involved comprehensive surface preparation and painting of a 2,800 sq ft residential property. The client wanted a durable, weather-resistant finish that would protect their home from Pune's climate.

The project included:
- Complete surface preparation and repair
- Weather-resistant exterior paint application
- Texture and special effects work
- Waterproofing treatment for terraces
- Professional color scheme consultation
- Quality assurance and warranty

The team used premium weather-resistant paints and proper surface preparation techniques to ensure long-lasting results. The project was completed efficiently within 3 weeks.`,
      features: [
        'Weather-Resistant Exterior Paint',
        'Surface Preparation and Repair',
        'Texture and Special Effects',
        'Waterproofing Treatment',
        'Professional Color Scheme',
        '2-Year Warranty',
        'Quality Materials',
        'Professional Application',
        'Surface Repair',
        'Protective Coatings'
      ],
      specifications: {
        'Project Type': 'Exterior Painting',
        'Location': 'Lohegaon, Pune',
        'Status': 'Completed',
        'Client': 'Mrs. Meera Iyer',
        'Completion Date': 'October 2023',
        'Services Used': 'Exterior Painting, Waterproofing, Surface Repair'
      },
      client: 'Mrs. Meera Iyer',
      completionDate: 'October 2023',
      testimonial: {
        text: 'The exterior painting work is excellent. The weather-resistant finish has held up perfectly through monsoon. No leaks and the color still looks fresh!',
        rating: 5,
        name: 'Mrs. Meera Iyer',
        location: 'Lohegaon'
      }
    }
  ]

  const project = projects.find(p => p.id === parseInt(id))

  if (!project) {
    return (
      <>
        <Head>
          <title>Project Not Found — Home Makeover</title>
        </Head>
        <Header />
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-xl text-slate-600 mb-8">The project you're looking for doesn't exist.</p>
            <Link href="/projects" className="px-8 py-4 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 transition-colors">
              View All Projects
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{project.title} — Home Makeover | Interior Design & Painting in Pune</title>
        <meta name="description" content={project.description} />
      </Head>
      <Header />
      
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-8">
              <Link href="/projects" className="text-indigo-300 hover:text-white transition-colors">
                ← Back to Projects
              </Link>
            </div>
            <div className="text-center">
              <span className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-medium mb-4 inline-block">
                {project.category === 'interior' ? 'Interior Design' : 'Painting'}
              </span>
              <h1 className="text-5xl font-bold mb-6">{project.title}</h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                {project.description}
              </p>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Main Image */}
                <div className="mb-8">
                  <img 
                    src={project.gallery[activeImage]} 
                    alt={project.title}
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                </div>

                {/* Thumbnail Gallery */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-6">Project Gallery</h3>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                    {project.gallery.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImage(index)}
                        className={`relative h-24 rounded-lg overflow-hidden transition-all ${
                          activeImage === index ? 'ring-2 ring-indigo-600' : 'hover:opacity-80'
                        }`}
                      >
                        <img 
                          src={image} 
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Description */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-6">Project Overview</h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-slate-600 leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full flex-shrink-0"></div>
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Client Testimonial */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">Client Testimonial</h3>
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-4">
                        {[...Array(project.testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <blockquote className="text-slate-600 italic mb-4">
                        "{project.testimonial.text}"
                      </blockquote>
                      <div>
                        <p className="font-semibold text-slate-900">{project.testimonial.name}</p>
                        <p className="text-sm text-slate-500">{project.testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Project Specifications */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">Project Details</h3>
                  <div className="space-y-4">
                    {Object.entries(project.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-3 border-b border-slate-100 last:border-b-0">
                        <span className="text-slate-600">{key}</span>
                        <span className="font-semibold text-slate-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Start Your Project</h3>
                  <p className="mb-6 opacity-90">
                    Ready to transform your space? Get a free consultation and quote.
                  </p>
                  <div className="space-y-4">
                    <a 
                      href="/survey" 
                      className="block w-full px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold text-center hover:bg-slate-100 transition-colors"
                    >
                      Get Free Quote
                    </a>
                    <a 
                      href="/contact" 
                      className="block w-full px-6 py-3 border-2 border-white text-white rounded-lg font-semibold text-center hover:bg-white hover:text-indigo-600 transition-colors"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>

                {/* Similar Projects */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">Similar Projects</h3>
                  <div className="space-y-4">
                    {projects
                      .filter(p => p.id !== project.id && p.category === project.category)
                      .slice(0, 2)
                      .map((similarProject) => (
                        <Link 
                          key={similarProject.id}
                          href={`/projects/${similarProject.id}`}
                          className="block group"
                        >
                          <div className="flex gap-4">
                            <img 
                              src={similarProject.mainImage} 
                              alt={similarProject.title}
                              className="w-20 h-20 object-cover rounded-lg"
                            />
                            <div>
                              <h4 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                {similarProject.title}
                              </h4>
                              <p className="text-sm text-slate-600">{similarProject.location}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
