import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
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
      area: '1,200 sq ft',
      duration: '2.5 months',
      budget: '₹4.5 Lakhs',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop'
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
      area: '3,500 sq ft',
      duration: '4 months',
      budget: '₹12 Lakhs',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1400&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop'
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
      area: '2,800 sq ft',
      duration: '3 weeks',
      budget: '₹1.8 Lakhs',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1400&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1400&auto=format&fit=crop'
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
      area: '2,000 sq ft',
      duration: '2.5 months',
      budget: '₹6.5 Lakhs',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1400&auto=format&fit=crop'
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
      area: '1,500 sq ft',
      duration: '2 weeks',
      budget: '₹95,000',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1400&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1400&auto=format&fit=crop'
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
      area: '1,800 sq ft',
      duration: '1 month',
      budget: '₹2.2 Lakhs',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1400&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1400&auto=format&fit=crop'
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
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-6">Our Completed Projects</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our portfolio of successful projects that showcase our expertise, creativity, and commitment to quality in interior design and painting.
            </p>
          </div>
        </section>

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
                        ? 'bg-rose-600 text-white' 
                        : 'text-slate-600 hover:text-rose-600'
                    }`}
                  >
                    All Projects
                  </button>
                  <button
                    onClick={() => setActiveTab('interior')}
                    className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                      activeTab === 'interior' 
                        ? 'bg-rose-600 text-white' 
                        : 'text-slate-600 hover:text-rose-600'
                    }`}
                  >
                    Interior Design
                  </button>
                  <button
                    onClick={() => setActiveTab('painting')}
                    className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                      activeTab === 'painting' 
                        ? 'bg-rose-600 text-white' 
                        : 'text-slate-600 hover:text-rose-600'
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
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-rose-600 text-white rounded-full text-xs font-medium">
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
                        <span className="text-sm text-slate-500">Location</span>
                        <p className="font-semibold">{project.location}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-slate-800">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center gap-3 text-sm text-slate-600">
                            <div className="w-2 h-2 bg-rose-400 rounded-full flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-4">
                      <Link 
                        href={`/projects/${project.id}`}
                        className="flex-1 px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-semibold text-center transition-colors"
                      >
                        View Details
                      </Link>
                      <a 
                        href="/survey" 
                        className="px-6 py-3 border-2 border-slate-200 text-slate-700 rounded-lg font-semibold hover:border-rose-600 hover:text-rose-600 transition-colors"
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
        <section className="py-20 bg-gradient-to-r from-rose-600 to-rose-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free consultation and detailed quote for your project
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
