import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Survey() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    propertyType: '',
    services: [],
    timeline: '',
    budget: '',
    details: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          address: '',
          propertyType: '',
          services: [],
          timeline: '',
          budget: '',
          details: ''
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (type === 'checkbox') {
      const updatedServices = checked 
        ? [...formData.services, value]
        : formData.services.filter(service => service !== value)
      
      setFormData({
        ...formData,
        services: updatedServices
      })
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
    }
  }

  return (
    <>
      <Head>
        <title>Free Site Survey — Home Makeover | Interior Design & Painting in Pune</title>
        <meta name="description" content="Request a free site survey for interior design and painting services in Pune. Professional consultation and quotes." />
      </Head>
      <Header />
      
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative text-white overflow-hidden py-20">
          <img
            src="/images/project/05-wagholi-interior-wall-painting-main.webp"
            alt="Survey header background"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/75 via-primary/65 to-primary-dark/80" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-30" />
          <div className="relative max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-6">Free Site Survey</h1>
            <p className="text-xl text-white/85 max-w-3xl mx-auto">
              Get a professional assessment of your space with detailed recommendations and free quotes
            </p>
          </div>
        </section>

        {/* Survey Form Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6">Request Your Free Survey</h2>
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    Thank you! Your survey request has been sent successfully. We'll contact you soon to schedule your free site survey.
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">First Name *</label>
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Last Name *</label>
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                       className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                       className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Property Address *</label>
                    <textarea 
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows="3"
                       className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Enter your complete address"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Property Type *</label>
                    <div className="relative">
                      <select 
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        required 
                        className="w-full pr-12 pl-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white"
                      >
                        <option value="">Select property type</option>
                        <option value="apartment">Apartment</option>
                        <option value="villa">Villa</option>
                        <option value="house">Independent House</option>
                        <option value="office">Office/Commercial</option>
                        <option value="other">Other</option>
                      </select>
                      <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Services Required *</label>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          name="services"
                          value="Interior Design"
                          checked={formData.services.includes('Interior Design')}
                          onChange={handleChange}
                          className="mr-3" 
                        />
                        <span>Interior Design</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          name="services"
                          value="Interior Painting"
                          checked={formData.services.includes('Interior Painting')}
                          onChange={handleChange}
                          className="mr-3" 
                        />
                        <span>Interior Painting</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          name="services"
                          value="Exterior Painting"
                          checked={formData.services.includes('Exterior Painting')}
                          onChange={handleChange}
                          className="mr-3" 
                        />
                        <span>Exterior Painting</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          name="services"
                          value="Carpentry Service"
                          checked={formData.services.includes('Carpentry Service')}
                          onChange={handleChange}
                          className="mr-3" 
                        />
                        <span>Carpentry Service</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          name="services"
                          value="POP and False Ceiling"
                          checked={formData.services.includes('POP and False Ceiling')}
                          onChange={handleChange}
                          className="mr-3" 
                        />
                        <span>POP and False Ceiling</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          name="services"
                          value="Home Electrician Service"
                          checked={formData.services.includes('Home Electrician Service')}
                          onChange={handleChange}
                          className="mr-3" 
                        />
                        <span>Home Electrician Service</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          name="services"
                          value="Waterproofing"
                          checked={formData.services.includes('Waterproofing')}
                          onChange={handleChange}
                          className="mr-3" 
                        />
                        <span>Waterproofing</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          name="services"
                          value="Home Renovation"
                          checked={formData.services.includes('Home Renovation')}
                          onChange={handleChange}
                          className="mr-3" 
                        />
                        <span>Home Renovation</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Project Timeline</label>
                    <div className="relative">
                      <select 
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full pr-12 pl-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white"
                      >
                        <option value="">Select timeline</option>
                        <option value="immediate">Immediate (Within 1 month)</option>
                        <option value="soon">Soon (1-3 months)</option>
                        <option value="planning">Planning Phase (3-6 months)</option>
                        <option value="future">Future (6+ months)</option>
                      </select>
                      <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Budget Range</label>
                    <div className="relative">
                      <select 
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full pr-12 pl-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-50k">Under ₹50,000</option>
                        <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                        <option value="1l-2l">₹1,00,000 - ₹2,00,000</option>
                        <option value="2l-5l">₹2,00,000 - ₹5,00,000</option>
                        <option value="5l+">₹5,00,000+</option>
                      </select>
                      <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Additional Details</label>
                    <textarea 
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Tell us about your project requirements, preferences, or any specific concerns..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="flex items-center">
                      <input type="checkbox" required className="mr-3" />
                      <span className="text-sm text-slate-600">
                        I agree to receive a call from Home Makeover for site survey scheduling
                      </span>
                    </label>
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                     className="w-full px-8 py-4 bg-primary hover:bg-secondary disabled:bg-slate-400 text-white rounded-lg font-semibold text-lg transition-colors"
                  >
                    {isSubmitting ? 'Sending Request...' : 'Request Free Survey'}
                  </button>
                </form>
              </div>

              {/* Benefits */}
              <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-6">What's Included in Free Survey?</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                       <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                         <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Professional Assessment</h4>
                        <p className="text-sm text-slate-600">Expert evaluation of your space and requirements</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                       <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                         <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Detailed Recommendations</h4>
                        <p className="text-sm text-slate-600">Customized solutions and material suggestions</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                       <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                         <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Free Quote</h4>
                        <p className="text-sm text-slate-600">Comprehensive pricing breakdown with no hidden costs</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                       <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                         <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Timeline Planning</h4>
                        <p className="text-sm text-slate-600">Project schedule and milestone planning</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">No Obligation</h4>
                        <p className="text-sm text-slate-600">Free consultation with no pressure to proceed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Process */}
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200">
                  <h3 className="text-2xl font-bold mb-6">Our Process</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Submit Request</h4>
                        <p className="text-sm text-slate-600">Fill out the form with your project details</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Schedule Survey</h4>
                        <p className="text-sm text-slate-600">We'll call to schedule a convenient time</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Site Visit</h4>
                        <p className="text-sm text-slate-600">Professional assessment of your space</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Get Quote</h4>
                        <p className="text-sm text-slate-600">Detailed proposal and pricing within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 text-white overflow-hidden">
          <img
            src="/images/services/02-interior-painting-hero.webp"
            alt="Survey background"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary-dark/70" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-30" />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get started with a free site survey and professional consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919031263531" className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-secondary transition-colors">
                Call Now
              </a>
              <a href="/contact" className="inline-block px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors">
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
