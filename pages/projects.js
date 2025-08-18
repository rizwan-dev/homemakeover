import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Home Interior Design in 2 BHK - Forest County Kharadi',
      category: 'interior',
      location: 'Forest County, Kharadi, Pune',
      society: 'Forest County',
      area: '1,200 sq ft',
      duration: '38 days',
      budget: '₹4.5 Lakhs',
      status: 'Completed',
      image: '/images/project/01-forest-county-kharadi-2bhk-interior-main.webp',
      gallery: [
        '/images/project/01-forest-county-kharadi-2bhk-interior-main.webp',
        '/images/project/01-forest-county-kharadi-2bhk-interior-1.webp',
        '/images/project/01-forest-county-kharadi-2bhk-interior-2.webp',
        '/images/project/01-forest-county-kharadi-2bhk-interior-3.webp'
      ],
      description: 'Complete interior design transformation for a 2 BHK apartment in Forest County, Kharadi. This project included modern living room design, kitchen renovation, master bedroom makeover, and bathroom upgrades.',
      features: [
        'Modern Living Room with Custom Furniture',
        'Kitchen with Premium Cabinets and Countertops',
        'Master Bedroom with Walk-in Wardrobe',
        'Contemporary Bathroom Design',
        'LED Lighting Throughout',
        'Premium Materials and Finishes'
      ],
      client: 'Mr. & Mrs. Sharma',
      completionDate: 'December 2023'
    },
    {
      id: 2,
      title: 'Luxury Villa Interior - Viman Nagar',
      category: 'interior',
      location: 'Viman Nagar, Pune',
      society: 'Ganga Constella',
      area: '3,500 sq ft',
      duration: '45 days',
      budget: '₹12 Lakhs',
      status: 'Completed',
      image: '/images/project/02-viman-nagar-luxury-villa-interior-main.webp',
      gallery: [
        '/images/project/02-viman-nagar-luxury-villa-interior-main.webp',
        '/images/project/02-viman-nagar-luxury-villa-interior-1.webp',
        '/images/project/02-viman-nagar-luxury-villa-interior-2.webp',
        '/images/project/02-viman-nagar-luxury-villa-interior-3.webp'
      ],
      description: 'Complete luxury villa interior design project featuring modern aesthetics with premium materials, custom furniture, and smart home integration.',
      features: [
        'Grand Living Room with High Ceilings',
        'Custom Kitchen with Island Design',
        '4 Bedrooms with En-suite Bathrooms',
        'Home Theater Room',
        'Smart Home Automation',
        'Premium Italian Marble Flooring'
      ],
      client: 'Mr. Rajesh Patel',
      completionDate: 'November 2023'
    },
    {
      id: 3,
      title: 'Exterior House Painting - Lohegaon',
      category: 'painting',
      location: 'Lohegaon, Pune',
      society: 'Lohegaon Heights',
      area: '2,800 sq ft',
      duration: '21 days',
      budget: '₹1.8 Lakhs',
      status: 'Completed',
      image: '/images/project/03-lohegaon-exterior-house-painting-main.webp',
      gallery: [
        '/images/project/03-lohegaon-exterior-house-painting-main.webp',
        '/images/project/03-lohegaon-exterior-house-painting-1.webp',
        '/images/project/03-lohegaon-exterior-house-painting-2.webp',
        '/images/project/03-lohegaon-exterior-house-painting-3.webp'
      ],
      description: 'Complete exterior painting project with weather-resistant finishes, texture work, and waterproofing solutions for long-lasting protection.',
      features: [
        'Weather-Resistant Exterior Paint',
        'Surface Preparation and Repair',
        'Texture and Special Effects',
        'Waterproofing Treatment',
        'Professional Color Scheme',
        '2-Year Warranty'
      ],
      client: 'Mrs. Meera Iyer',
      completionDate: 'October 2023'
    },
    {
      id: 4,
      title: 'Modern Office Space - Kalyani Nagar',
      category: 'interior',
      location: 'Kalyani Nagar, Pune',
      society: 'Cerebrum IT Park',
      area: '2,000 sq ft',
      duration: '35 days',
      budget: '₹6.5 Lakhs',
      status: 'Completed',
      image: '/images/project/04-kalyani-nagar-modern-office-interior-main.webp',
      gallery: [
        '/images/project/04-kalyani-nagar-modern-office-interior-main.webp',
        '/images/project/04-kalyani-nagar-modern-office-interior-1.webp',
        '/images/project/04-kalyani-nagar-modern-office-interior-2.webp',
        '/images/project/04-kalyani-nagar-modern-office-interior-3.webp'
      ],
      description: 'Contemporary office space design with open floor plan, meeting rooms, and modern amenities for a growing tech company.',
      features: [
        'Open Floor Plan Design',
        'Conference Rooms with AV Setup',
        'Reception and Waiting Area',
        'Break Room and Pantry',
        'Ergonomic Workstations',
        'Modern Lighting Design'
      ],
      client: 'TechStart Solutions',
      completionDate: 'September 2023'
    },
    {
      id: 5,
      title: 'Interior Wall Painting - Wagholi',
      category: 'painting',
      location: 'Wagholi, Pune',
      society: 'Ivy Estate',
      area: '1,500 sq ft',
      duration: '14 days',
      budget: '₹95,000',
      status: 'Completed',
      image: '/images/project/05-wagholi-interior-wall-painting-main.webp',
      gallery: [
        '/images/project/05-wagholi-interior-wall-painting-main.webp',
        '/images/project/05-wagholi-interior-wall-painting-1.webp',
        '/images/project/05-wagholi-interior-wall-painting-2.webp',
        '/images/project/05-wagholi-interior-wall-painting-3.webp'
      ],
      description: 'Premium interior painting project with texture work, special effects, and color consultation for a modern apartment.',
      features: [
        'Premium Quality Interior Paints',
        'Texture and Special Effects',
        'Color Consultation',
        'Wall Preparation and Priming',
        'Clean and Professional Finish',
        '2-Year Warranty'
      ],
      client: 'Ms. Anjali Deshmukh',
      completionDate: 'August 2023'
    },
    {
      id: 6,
      title: 'False Ceiling Installation - Kesnand',
      category: 'interior',
      location: 'Kesnand, Pune',
      society: 'Kesnand Greens',
      area: '1,800 sq ft',
      duration: '30 days',
      budget: '₹2.2 Lakhs',
      status: 'Completed',
      image: '/images/project/06-kesnand-false-ceiling-installation-main.webp',
      gallery: [
        '/images/project/06-kesnand-false-ceiling-installation-main.webp',
        '/images/project/06-kesnand-false-ceiling-installation-1.webp',
        '/images/project/06-kesnand-false-ceiling-installation-2.webp',
        '/images/project/06-kesnand-false-ceiling-installation-3.webp'
      ],
      description: 'Modern false ceiling installation with LED integration, acoustic panels, and contemporary design for a restaurant space.',
      features: [
        'Custom False Ceiling Design',
        'LED Integration and Lighting',
        'Acoustic Panels',
        'POP (Plaster of Paris) Work',
        'Modern and Classic Styles',
        'Professional Installation'
      ],
      client: 'Mr. Vikram Singh',
      completionDate: 'July 2023'
    },
    {
      id: 7,
      title: '2 BHK Interior Design - Nyati Elan, Wagholi',
      category: 'interior',
      location: 'Nyati Elan, Wagholi, Pune',
      society: 'Nyati Elan',
      area: '1,000 sq ft',
      duration: '28 days',
      budget: '₹3.8 Lakhs',
      status: 'Completed',
      image: '/images/project/07-nyati-elan-wagholi-2bhk-interior-main.webp',
      gallery: [
        '/images/project/07-nyati-elan-wagholi-2bhk-interior-main.webp',
        '/images/project/07-nyati-elan-wagholi-2bhk-interior-1.webp',
        '/images/project/07-nyati-elan-wagholi-2bhk-interior-2.webp'
      ],
      description: 'Full interior design for a 2 BHK at Nyati Elan featuring a cozy living room, modular kitchen, and smart storage in bedrooms.',
      features: [
        'Modular Kitchen',
        'Custom TV Unit',
        'Bedroom Wardrobes',
        'Accent Lighting',
        'Space Optimization',
        'Premium Finishes'
      ],
      client: 'Mr. & Mrs. Kulkarni',
      completionDate: 'January 2024'
    },
    {
      id: 8,
      title: '3 BHK Interior Makeover - Majestique Towers, Kharadi',
      category: 'interior',
      location: 'Majestique Towers, Kharadi, Pune',
      society: 'Majestique Towers',
      area: '1,400 sq ft',
      duration: '32 days',
      budget: '₹6.2 Lakhs',
      status: 'Completed',
      image: '/images/project/08-majestique-towers-kharadi-3bhk-makeover-main.webp',
      gallery: [
        '/images/project/08-majestique-towers-kharadi-3bhk-makeover-main.webp',
        '/images/project/08-majestique-towers-kharadi-3bhk-makeover-1.webp',
        '/images/project/08-majestique-towers-kharadi-3bhk-makeover-2.webp'
      ],
      description: 'Contemporary interior design for a 3 BHK including false ceiling, wall paneling, and custom furniture.',
      features: [
        'False Ceiling with Cove Lighting',
        'Wall Paneling',
        'Custom Furniture',
        'Premium Veneers',
        'Warm Lighting',
        'Professional Installation'
      ],
      client: 'Ms. Rutuja Patil',
      completionDate: 'February 2024'
    },
    {
      id: 9,
      title: 'Premium Interior - VTP Pegasus, Kharadi',
      category: 'interior',
      location: 'VTP Pegasus, Kharadi, Pune',
      society: 'VTP Pegasus',
      area: '1,250 sq ft',
      duration: '34 days',
      budget: '₹5.1 Lakhs',
      status: 'Completed',
      image: '/images/project/09-vtp-pegasus-kharadi-premium-interior-main.webp',
      gallery: [
        '/images/project/09-vtp-pegasus-kharadi-premium-interior-main.webp',
        '/images/project/09-vtp-pegasus-kharadi-premium-interior-1.webp',
        '/images/project/09-vtp-pegasus-kharadi-premium-interior-2.webp'
      ],
      description: 'Premium interior package with modular kitchen, wardrobe systems, and LED-integrated false ceiling for a modern finish.',
      features: [
        'LED-Integrated False Ceiling',
        'Handleless Kitchen',
        'Sliding Wardrobes',
        'Quartz Countertop',
        'Designer Wall Finishes',
        'Soft-Close Hardware'
      ],
      client: 'Mr. Akash Deshpande',
      completionDate: 'March 2024'
    },
    {
      id: 10,
      title: 'Interior Painting - Ivy Estate, Wagholi',
      category: 'painting',
      location: 'Ivy Estate, Wagholi, Pune',
      society: 'Ivy Estate',
      area: '1,100 sq ft',
      duration: '10 days',
      budget: '₹1.1 Lakhs',
      status: 'Completed',
      image: '/images/project/10-ivy-estate-wagholi-interior-painting-main.jpg',
      gallery: [
        '/images/project/10-ivy-estate-wagholi-interior-painting-main.jpg',
        '/images/project/10-ivy-estate-wagholi-interior-painting-1.jpg',
        '/images/project/10-ivy-estate-wagholi-interior-painting-2.jpg'
      ],
      description: 'Interior repainting with low-VOC premium paints, feature wall textures, and complete surface preparation.',
      features: [
        'Low-VOC Paints',
        'Surface Preparation',
        'Feature Wall Texture',
        'Clean Site Handover',
        'Color Consultation',
        '1-Year Warranty'
      ],
      client: 'Mrs. Neha Jain',
      completionDate: 'January 2024'
    },
    {
      id: 11,
      title: 'Exterior Painting - Rohan Abhilasha, Wagholi',
      category: 'painting',
      location: 'Rohan Abhilasha, Wagholi, Pune',
      society: 'Rohan Abhilasha',
      area: '3,000 sq ft',
      duration: '21 days',
      budget: '₹2.1 Lakhs',
      status: 'Completed',
      image: '/images/project/11-rohan-abhilasha-wagholi-exterior-painting-main.webp',
      gallery: [
        '/images/project/11-rohan-abhilasha-wagholi-exterior-painting-main.webp',
        '/images/project/11-rohan-abhilasha-wagholi-exterior-painting-1.webp',
        '/images/project/11-rohan-abhilasha-wagholi-exterior-painting-2.webp'
      ],
      description: 'Weatherproof exterior painting with crack-filling, waterproofing, and anti-fungal coatings for long-term protection.',
      features: [
        'Crack Filling & Repair',
        'Exterior Waterproofing',
        'Anti-Fungal Coating',
        'Weatherproof Paints',
        'Quality Assurance',
        '2-Year Warranty'
      ],
      client: 'Mr. Ravi Shinde',
      completionDate: 'December 2023'
    },
    {
      id: 12,
      title: 'Compact 1.5 BHK Interior - Nyati Elan, Wagholi',
      category: 'interior',
      location: 'Nyati Elan, Wagholi, Pune',
      society: 'Nyati Elan',
      area: '800 sq ft',
      duration: '25 days',
      budget: '₹2.9 Lakhs',
      status: 'Completed',
      image: '/images/project/12-nyati-elan-wagholi-1-5bhk-interior-main.webp',
      gallery: [
        '/images/project/12-nyati-elan-wagholi-1-5bhk-interior-main.webp',
        '/images/project/12-nyati-elan-wagholi-1-5bhk-interior-1.webp',
        '/images/project/12-nyati-elan-wagholi-1-5bhk-interior-2.webp'
      ],
      description: 'Smart interior for a compact home with space-saving furniture, bright tones, and practical storage.',
      features: [
        'Space-Saving Furniture',
        'Bright Color Palette',
        'Functional Storage',
        'Compact Modular Kitchen',
        'LED Lighting',
        'Professional Execution'
      ],
      client: 'Mr. & Mrs. Pansare',
      completionDate: 'April 2024'
    }
  ]

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab)

  return (
    <>
      <Head>
        <title>Our Projects — Home Makeover | Interior Design & Painting in Pune</title>
        <meta name="description" content="Explore our completed projects including interior design, painting, and renovation work in Pune. View our portfolio of successful transformations." />
      </Head>
      <Header />
      
      <main className="min-h-screen bg-gray-50">
        <Hero
          title="Our Completed Projects"
          subtitle="Explore our portfolio that showcases our expertise, creativity, and commitment to quality."
          breadcrumbs={[{ href: '/', label: 'Home' }, { label: 'Projects' }]}
          backgroundImage="/images/project/01-forest-county-kharadi-2bhk-interior-main.webp"
        />

        {/* Filter Tabs */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-center">
              <div className="bg-slate-100 rounded-xl p-2 shadow-lg">
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveTab('all')}
                    className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                      activeTab === 'all' 
                        ? 'bg-primary text-white' 
                        : 'text-text hover:text-primary'
                    }`}
                  >
                    All Projects
                  </button>
                  <button
                    onClick={() => setActiveTab('interior')}
                    className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                      activeTab === 'interior' 
                        ? 'bg-primary text-white' 
                        : 'text-text hover:text-primary'
                    }`}
                  >
                    Interior Design
                  </button>
                  <button
                    onClick={() => setActiveTab('painting')}
                    className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                      activeTab === 'painting' 
                        ? 'bg-primary text-white' 
                        : 'text-text hover:text-primary'
                    }`}
                  >
                    Painting
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {filteredProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-80">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.currentTarget
                        target.onerror = null
                        target.src = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
                          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#e2e8f0"/><stop offset="1" stop-color="#cbd5e1"/></linearGradient></defs><rect width="800" height="500" fill="url(#g)"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#64748b" font-family="Arial, sans-serif" font-size="24">Image unavailable</text></svg>'
                        )}`
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-medium">
                        {project.category === 'interior' ? 'Interior Design' : 'Painting'}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-green-600 text-white rounded-full text-xs font-medium">
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-slate-600 mb-6">{project.description}</p>
                    
                    <div className="mb-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-slate-800">Location</h4>
                        <p className="text-slate-600">{project.location}</p>
                      </div>
                      {project.society && (
                        <div className="mt-2">
                          <h4 className="font-semibold mb-3 text-slate-800">Society</h4>
                          <p className="text-slate-600">{project.society}</p>
                        </div>
                      )}
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-slate-800">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center gap-3 text-sm text-slate-600">
                            <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-4">
                      <Link 
                        href={`/projects/${project.id}`}
                        className="flex-1 px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-lg font-semibold text-center transition-colors"
                      >
                        View Details
                      </Link>
                      <a 
                        href="/survey" 
                        className="px-6 py-3 border-2 border-neutral text-text rounded-lg font-semibold hover:border-primary hover:text-primary transition-colors"
                      >
                        Get Quote
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 text-white overflow-hidden">
          <img
            src="/images/project/04-kalyani-nagar-modern-office-interior-main.webp"
            alt="Projects background"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary-dark/70" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-30" />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
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


