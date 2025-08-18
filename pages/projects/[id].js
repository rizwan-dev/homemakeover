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
      duration: '38 days',
      budget: '₹4.5 Lakhs',
      status: 'Completed',
      mainImage: '/images/project/01-forest-county-kharadi-2bhk-interior-main.webp',
      gallery: [
        '/images/project/01-forest-county-kharadi-2bhk-interior-main.webp',
        '/images/project/01-forest-county-kharadi-2bhk-interior-1.webp',
        '/images/project/01-forest-county-kharadi-2bhk-interior-2.webp',
        '/images/project/01-forest-county-kharadi-2bhk-interior-3.webp'
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
        'Society': 'Forest County',
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
      id: 4,
      title: 'Modern Office Space - Kalyani Nagar',
      category: 'interior',
      location: 'Kalyani Nagar, Pune',
      area: '2,000 sq ft',
      duration: '35 days',
      budget: '₹6.5 Lakhs',
      status: 'Completed',
      mainImage: '/images/project/04-kalyani-nagar-modern-office-interior-main.webp',
      gallery: [
        '/images/project/04-kalyani-nagar-modern-office-interior-main.webp',
        '/images/project/04-kalyani-nagar-modern-office-interior-1.webp',
        '/images/project/04-kalyani-nagar-modern-office-interior-2.webp',
        '/images/project/04-kalyani-nagar-modern-office-interior-3.webp'
      ],
      description: 'Contemporary office space design with open floor plan, meeting rooms, and modern amenities for a growing tech company.',
      longDescription: `A complete office space transformation for a fast-growing company in Kalyani Nagar. The design focused on productivity, collaboration, and brand presence with an open floor plan, quiet rooms, and modern lighting. The material palette balanced durability and aesthetics with warm wood tones and acoustic treatments.`,
      features: [
        'Open Floor Plan Design',
        'Conference Rooms with AV Setup',
        'Reception and Waiting Area',
        'Break Room and Pantry',
        'Ergonomic Workstations',
        'Modern Lighting Design'
      ],
      specifications: {
        'Project Type': 'Commercial Interior',
        'Location': 'Kalyani Nagar, Pune',
        'Society': 'Cerebrum IT Park',
        'Status': 'Completed',
        'Client': 'TechStart Solutions',
        'Completion Date': 'September 2023',
        'Services Used': 'Interior Design, Carpentry, Electrical, Lighting'
      },
      client: 'TechStart Solutions',
      completionDate: 'September 2023',
      testimonial: {
        text: 'Our new office is inspiring and functional. The team delivered a beautiful space on time and within budget.',
        rating: 5,
        name: 'Operations Head',
        location: 'Kalyani Nagar'
      }
    },
    {
      id: 5,
      title: 'Interior Wall Painting - Wagholi',
      category: 'painting',
      location: 'Wagholi, Pune',
      area: '1,500 sq ft',
      duration: '14 days',
      budget: '₹95,000',
      status: 'Completed',
      mainImage: '/images/project/05-wagholi-interior-wall-painting-main.webp',
      gallery: [
        '/images/project/05-wagholi-interior-wall-painting-main.webp',
        '/images/project/05-wagholi-interior-wall-painting-1.webp',
        '/images/project/05-wagholi-interior-wall-painting-2.webp',
        '/images/project/05-wagholi-interior-wall-painting-3.webp'
      ],
      description: 'Premium interior painting project with texture work, special effects, and color consultation for a modern apartment.',
      longDescription: `End-to-end repainting with surface preparation, primer, and low-VOC premium paints. A textured feature wall was added in the living room while bedrooms used soothing tones. We ensured clean execution and quick turnaround with minimal disruption.`,
      features: [
        'Premium Quality Interior Paints',
        'Texture and Special Effects',
        'Color Consultation',
        'Wall Preparation and Priming',
        'Clean and Professional Finish',
        '2-Year Warranty'
      ],
      specifications: {
        'Project Type': 'Interior Painting',
        'Location': 'Wagholi, Pune',
        'Society': 'Ivy Estate',
        'Status': 'Completed',
        'Client': 'Ms. Anjali Deshmukh',
        'Completion Date': 'August 2023',
        'Services Used': 'Interior Painting, Surface Prep, Texture'
      },
      client: 'Ms. Anjali Deshmukh',
      completionDate: 'August 2023',
      testimonial: {
        text: 'Flawless finish and great color guidance. The team was punctual and professional throughout.',
        rating: 5,
        name: 'Ms. Anjali Deshmukh',
        location: 'Wagholi'
      }
    },
    {
      id: 6,
      title: 'False Ceiling Installation - Kesnand',
      category: 'interior',
      location: 'Kesnand, Pune',
      area: '1,800 sq ft',
      duration: '30 days',
      budget: '₹2.2 Lakhs',
      status: 'Completed',
      mainImage: '/images/project/06-kesnand-false-ceiling-installation-main.webp',
      gallery: [
        '/images/project/06-kesnand-false-ceiling-installation-main.webp',
        '/images/project/06-kesnand-false-ceiling-installation-1.webp',
        '/images/project/06-kesnand-false-ceiling-installation-2.webp',
        '/images/project/06-kesnand-false-ceiling-installation-3.webp'
      ],
      description: 'Modern false ceiling installation with LED integration, acoustic panels, and contemporary design for a restaurant space.',
      longDescription: `A lighting-driven ceiling design with cove lighting, recessed profiles, and acoustic panels. The ceiling design balanced aesthetics and functionality while improving ambient lighting levels.`,
      features: [
        'Custom False Ceiling Design',
        'LED Integration and Lighting',
        'Acoustic Panels',
        'POP (Plaster of Paris) Work',
        'Modern and Classic Styles',
        'Professional Installation'
      ],
      specifications: {
        'Project Type': 'Ceiling & Lighting',
        'Location': 'Kesnand, Pune',
        'Society': 'Kesnand Greens',
        'Status': 'Completed',
        'Client': 'Mr. Vikram Singh',
        'Completion Date': 'July 2023',
        'Services Used': 'POP, Lighting, Electrical'
      },
      client: 'Mr. Vikram Singh',
      completionDate: 'July 2023',
      testimonial: {
        text: 'Excellent finish and creative lighting ideas. The space looks premium and inviting.',
        rating: 5,
        name: 'Mr. Vikram Singh',
        location: 'Kesnand'
      }
    },
    {
      id: 7,
      title: '2 BHK Interior Design - Nyati Elan, Wagholi',
      category: 'interior',
      location: 'Nyati Elan, Wagholi, Pune',
      area: '1,000 sq ft',
      duration: '28 days',
      budget: '₹3.8 Lakhs',
      status: 'Completed',
      mainImage: '/images/project/07-nyati-elan-wagholi-2bhk-interior-main.webp',
      gallery: [
        '/images/project/07-nyati-elan-wagholi-2bhk-interior-main.webp',
        '/images/project/07-nyati-elan-wagholi-2bhk-interior-1.webp',
        '/images/project/07-nyati-elan-wagholi-2bhk-interior-2.webp'
      ],
      description: 'Full interior design for a 2 BHK featuring a cozy living room, modular kitchen, and smart bedroom storage.',
      longDescription: `A compact yet warm 2 BHK interior. We focused on maximizing storage, using light tones, and integrating accent lighting. The kitchen received a modular layout with durable finishes. Bedrooms feature space-efficient wardrobes and study corners.`,
      features: [
        'Modular Kitchen',
        'Custom TV Unit',
        'Bedroom Wardrobes',
        'Accent Lighting',
        'Space Optimization',
        'Premium Finishes'
      ],
      specifications: {
        'Project Type': 'Residential Interior',
        'Location': 'Nyati Elan, Wagholi, Pune',
        'Society': 'Nyati Elan',
        'Status': 'Completed',
        'Client': 'Mr. & Mrs. Kulkarni',
        'Completion Date': 'January 2024',
        'Services Used': 'Interior Design, Carpentry, Electrical, Painting'
      },
      client: 'Mr. & Mrs. Kulkarni',
      completionDate: 'January 2024',
      testimonial: {
        text: 'Beautiful designs and very practical use of space. Great experience end-to-end.',
        rating: 5,
        name: 'Mr. & Mrs. Kulkarni',
        location: 'Nyati Elan, Wagholi'
      }
    },
    {
      id: 8,
      title: '3 BHK Interior Makeover - Majestique Towers, Kharadi',
      category: 'interior',
      location: 'Majestique Towers, Kharadi, Pune',
      area: '1,400 sq ft',
      duration: '32 days',
      budget: '₹6.2 Lakhs',
      status: 'Completed',
      mainImage: '/images/project/08-majestique-towers-kharadi-3bhk-makeover-main.webp',
      gallery: [
        '/images/project/08-majestique-towers-kharadi-3bhk-makeover-main.webp',
        '/images/project/08-majestique-towers-kharadi-3bhk-makeover-1.webp',
        '/images/project/08-majestique-towers-kharadi-3bhk-makeover-2.webp'
      ],
      description: 'Contemporary interior design for a 3 BHK including false ceiling, wall paneling, and custom furniture.',
      longDescription: `A premium makeover with a warm contemporary palette. The home features veneer wall paneling, cozy lighting, and bespoke furniture for the living and bedrooms. Kitchen storage was optimized with soft-close hardware and quartz counters.`,
      features: [
        'False Ceiling with Cove Lighting',
        'Wall Paneling',
        'Custom Furniture',
        'Premium Veneers',
        'Warm Lighting',
        'Professional Installation'
      ],
      specifications: {
        'Project Type': 'Residential Interior',
        'Location': 'Majestique Towers, Kharadi, Pune',
        'Society': 'Majestique Towers',
        'Status': 'Completed',
        'Client': 'Ms. Rutuja Patil',
        'Completion Date': 'February 2024',
        'Services Used': 'Interior Design, Carpentry, Electrical, Painting'
      },
      client: 'Ms. Rutuja Patil',
      completionDate: 'February 2024',
      testimonial: {
        text: 'Loved the finishes and detailing. The home feels luxurious yet practical.',
        rating: 5,
        name: 'Ms. Rutuja Patil',
        location: 'Kharadi'
      }
    },
    {
      id: 9,
      title: 'Premium Interior - VTP Pegasus, Kharadi',
      category: 'interior',
      location: 'VTP Pegasus, Kharadi, Pune',
      area: '1,250 sq ft',
      duration: '34 days',
      budget: '₹5.1 Lakhs',
      status: 'Completed',
      mainImage: '/images/project/09-vtp-pegasus-kharadi-premium-interior-main.webp',
      gallery: [
        '/images/project/09-vtp-pegasus-kharadi-premium-interior-main.webp',
        '/images/project/09-vtp-pegasus-kharadi-premium-interior-1.webp',
        '/images/project/09-vtp-pegasus-kharadi-premium-interior-2.webp'
      ],
      description: 'Premium interior package with modular kitchen, wardrobe systems, and LED-integrated false ceiling for a modern finish.',
      longDescription: `A refined interior emphasizing functionality and clean lines. The kitchen features a handleless layout with quartz countertop. Bedrooms include sliding wardrobes and integrated study units. A layered ceiling with LED profiles elevates the ambiance.`,
      features: [
        'LED-Integrated False Ceiling',
        'Handleless Kitchen',
        'Sliding Wardrobes',
        'Quartz Countertop',
        'Designer Wall Finishes',
        'Soft-Close Hardware'
      ],
      specifications: {
        'Project Type': 'Residential Interior',
        'Location': 'VTP Pegasus, Kharadi, Pune',
        'Society': 'VTP Pegasus',
        'Status': 'Completed',
        'Client': 'Mr. Akash Deshpande',
        'Completion Date': 'March 2024',
        'Services Used': 'Interior Design, Carpentry, Electrical, Painting'
      },
      client: 'Mr. Akash Deshpande',
      completionDate: 'March 2024',
      testimonial: {
        text: 'Excellent quality and thoughtful design. The team paid attention to every detail.',
        rating: 5,
        name: 'Mr. Akash Deshpande',
        location: 'Kharadi'
      }
    },
    {
      id: 10,
      title: 'Interior Painting - Ivy Estate, Wagholi',
      category: 'painting',
      location: 'Ivy Estate, Wagholi, Pune',
      area: '1,100 sq ft',
      duration: '10 days',
      budget: '₹1.1 Lakhs',
      status: 'Completed',
      mainImage: '/images/project/10-ivy-estate-wagholi-interior-painting-main.jpg',
      gallery: [
        '/images/project/10-ivy-estate-wagholi-interior-painting-main.jpg',
        '/images/project/10-ivy-estate-wagholi-interior-painting-1.jpg',
        '/images/project/10-ivy-estate-wagholi-interior-painting-2.jpg'
      ],
      description: 'Interior repainting with low-VOC premium paints, feature wall textures, and complete surface preparation.',
      longDescription: `Quick and clean repainting job using eco-friendly paints. Included surface preparation, crack filling, and a textured feature wall in the living area.`,
      features: [
        'Low-VOC Paints',
        'Surface Preparation',
        'Feature Wall Texture',
        'Clean Site Handover',
        'Color Consultation',
        '1-Year Warranty'
      ],
      specifications: {
        'Project Type': 'Interior Painting',
        'Location': 'Ivy Estate, Wagholi, Pune',
        'Society': 'Ivy Estate',
        'Status': 'Completed',
        'Client': 'Mrs. Neha Jain',
        'Completion Date': 'January 2024',
        'Services Used': 'Interior Painting, Texture'
      },
      client: 'Mrs. Neha Jain',
      completionDate: 'January 2024',
      testimonial: {
        text: 'Great finish and neat work. Very happy with the color outcome and speed.',
        rating: 5,
        name: 'Mrs. Neha Jain',
        location: 'Wagholi'
      }
    },
    {
      id: 11,
      title: 'Exterior Painting - Rohan Abhilasha, Wagholi',
      category: 'painting',
      location: 'Rohan Abhilasha, Wagholi, Pune',
      area: '3,000 sq ft',
      duration: '21 days',
      budget: '₹2.1 Lakhs',
      status: 'Completed',
      mainImage: '/images/project/11-rohan-abhilasha-wagholi-exterior-painting-main.webp',
      gallery: [
        '/images/project/11-rohan-abhilasha-wagholi-exterior-painting-main.webp',
        '/images/project/11-rohan-abhilasha-wagholi-exterior-painting-1.webp',
        '/images/project/11-rohan-abhilasha-wagholi-exterior-painting-2.webp'
      ],
      description: 'Weatherproof exterior painting with crack-filling, waterproofing, and anti-fungal coatings for long-term protection.',
      longDescription: `A comprehensive exterior protection and repainting with anti-fungal coats and terrace waterproofing. Crack repairs and primer ensured a durable finish.`,
      features: [
        'Crack Filling & Repair',
        'Exterior Waterproofing',
        'Anti-Fungal Coating',
        'Weatherproof Paints',
        'Quality Assurance',
        '2-Year Warranty'
      ],
      specifications: {
        'Project Type': 'Exterior Painting',
        'Location': 'Rohan Abhilasha, Wagholi, Pune',
        'Society': 'Rohan Abhilasha',
        'Status': 'Completed',
        'Client': 'Mr. Ravi Shinde',
        'Completion Date': 'December 2023',
        'Services Used': 'Exterior Painting, Waterproofing'
      },
      client: 'Mr. Ravi Shinde',
      completionDate: 'December 2023',
      testimonial: {
        text: 'The exterior looks new again, and monsoon protection has been solid. Great job!',
        rating: 5,
        name: 'Mr. Ravi Shinde',
        location: 'Wagholi'
      }
    },
    {
      id: 12,
      title: 'Compact 1.5 BHK Interior - Nyati Elan, Wagholi',
      category: 'interior',
      location: 'Nyati Elan, Wagholi, Pune',
      area: '800 sq ft',
      duration: '25 days',
      budget: '₹2.9 Lakhs',
      status: 'Completed',
      mainImage: '/images/project/12-nyati-elan-wagholi-1-5bhk-interior-main.webp',
      gallery: [
        '/images/project/12-nyati-elan-wagholi-1-5bhk-interior-main.webp',
        '/images/project/12-nyati-elan-wagholi-1-5bhk-interior-1.webp',
        '/images/project/12-nyati-elan-wagholi-1-5bhk-interior-2.webp'
      ],
      description: 'Smart interior for a compact home with space-saving furniture, bright tones, and practical storage.',
      longDescription: `Designed for compact living without compromise. The plan includes multi-functional furniture, bright tones to amplify space, and clever storage in every room.`,
      features: [
        'Space-Saving Furniture',
        'Bright Color Palette',
        'Functional Storage',
        'Compact Modular Kitchen',
        'LED Lighting',
        'Professional Execution'
      ],
      specifications: {
        'Project Type': 'Residential Interior',
        'Location': 'Nyati Elan, Wagholi, Pune',
        'Society': 'Nyati Elan',
        'Status': 'Completed',
        'Client': 'Mr. & Mrs. Pansare',
        'Completion Date': 'April 2024',
        'Services Used': 'Interior Design, Carpentry, Electrical, Painting'
      },
      client: 'Mr. & Mrs. Pansare',
      completionDate: 'April 2024',
      testimonial: {
        text: 'Amazing use of space and very neat workmanship. Perfect for our needs.',
        rating: 5,
        name: 'Mr. & Mrs. Pansare',
        location: 'Nyati Elan, Wagholi'
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
            <Link href="/projects" className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-light transition-colors">
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
        <section className="relative text-white overflow-hidden py-20">
          <img
            src={project.mainImage}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-primary-dark/85" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-30" />
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="mb-8">
              <Link href="/projects" className="text-secondary-dark hover:text-white transition-colors">
                ← Back to Projects
              </Link>
            </div>
            <div className="text-center">
              <span className="px-4 py-2 bg-primary/60 backdrop-blur-sm ring-1 ring-white/20 text-white rounded-full text-sm font-medium mb-4 inline-block">
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
                      onError={(e) => {
                        const t = e.currentTarget
                        t.onerror = null
                        t.src = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
                          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#e2e8f0"/><stop offset="1" stop-color="#cbd5e1"/></linearGradient></defs><rect width="1000" height="600" fill="url(#g)"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#64748b" font-family="Arial, sans-serif" font-size="28">Image unavailable</text></svg>'
                        )}`
                      }}
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
                          activeImage === index ? 'ring-2 ring-primary' : 'hover:opacity-80'
                        }`}
                      >
                        <img 
                          src={image} 
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const t = e.currentTarget
                            t.onerror = null
                            t.src = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
                              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#e2e8f0"/><stop offset="1" stop-color="#cbd5e1"/></linearGradient></defs><rect width="300" height="200" fill="url(#g)"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#64748b" font-family="Arial, sans-serif" font-size="14">Image unavailable</text></svg>'
                            )}`
                          }}
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
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
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
                <div className="bg-gradient-to-r from-primary to-primary-light text-white rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Start Your Project</h3>
                  <p className="mb-6 opacity-90">
                    Ready to transform your space? Get a free consultation and quote.
                  </p>
                  <div className="space-y-4">
                    <a 
                      href="/survey" 
                      className="block w-full px-6 py-3 bg-white text-primary rounded-lg font-semibold text-center hover:bg-secondary transition-colors"
                    >
                      Get Free Quote
                    </a>
                    <a 
                      href="/contact" 
                      className="block w-full px-6 py-3 border-2 border-white text-white rounded-lg font-semibold text-center hover:bg-white hover:text-primary transition-colors"
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
                              <h4 className="font-semibold text-slate-900 group-hover:text-primary transition-colors">
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
