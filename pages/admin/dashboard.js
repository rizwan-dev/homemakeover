import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState([])
  const [filteredSubmissions, setFilteredSubmissions] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem('adminAuth')
    if (!isAuthenticated) {
      router.push('/admin/login')
      return
    }

    fetchSubmissions()
  }, [])

  useEffect(() => {
    // Filter submissions based on search and filter
    let filtered = submissions

    // Apply type filter
    if (filter !== 'all') {
      filtered = filtered.filter(sub => sub.type === filter)
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(sub => {
        const data = JSON.stringify(sub.data).toLowerCase()
        return data.includes(searchTerm.toLowerCase())
      })
    }

    setFilteredSubmissions(filtered)
  }, [submissions, filter, searchTerm])

  const fetchSubmissions = async () => {
    try {
      const response = await fetch('/api/admin/submissions')
      const data = await response.json()
      setSubmissions(data.submissions || [])
    } catch (error) {
      console.error('Error fetching submissions:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    router.push('/admin/login')
  }

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getSubmissionTypeColor = (type) => {
    return type === 'contact' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
  }

  const getSubmissionTypeLabel = (type) => {
    return type === 'contact' ? 'Contact Form' : 'Survey Request'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-slate-600">Loading submissions...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Admin Dashboard — Home Makeover</title>
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">HM</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-900">Admin Dashboard</h1>
                  <p className="text-sm text-slate-600">Home Makeover Management</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-slate-600 hover:text-slate-900 font-medium transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Total Submissions</p>
                  <p className="text-2xl font-bold text-slate-900">{submissions.length}</p>
                </div>
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Contact Forms</p>
                  <p className="text-2xl font-bold text-slate-900">
                    {submissions.filter(s => s.type === 'contact').length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Survey Requests</p>
                  <p className="text-2xl font-bold text-slate-900">
                    {submissions.filter(s => s.type === 'survey').length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Today's Submissions</p>
                  <p className="text-2xl font-bold text-slate-900">
                    {submissions.filter(s => {
                      const today = new Date().toDateString()
                      const submissionDate = new Date(s.timestamp).toDateString()
                      return today === submissionDate
                    }).length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-slate-700 mb-2">Search</label>
                <input
                  type="text"
                  placeholder="Search by name, email, phone, or any field..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Filter by Type</label>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="all">All Submissions</option>
                  <option value="contact">Contact Forms</option>
                  <option value="survey">Survey Requests</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submissions List */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200">
              <h2 className="text-lg font-semibold text-slate-900">
                Submissions ({filteredSubmissions.length})
              </h2>
            </div>

            {filteredSubmissions.length === 0 ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-slate-600">No submissions found</p>
              </div>
            ) : (
              <div className="divide-y divide-slate-200">
                {filteredSubmissions.map((submission) => (
                  <div key={submission.id} className="p-6 hover:bg-slate-50 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSubmissionTypeColor(submission.type)}`}>
                          {getSubmissionTypeLabel(submission.type)}
                        </span>
                        <span className="text-sm text-slate-500">
                          {formatDate(submission.timestamp)}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400">ID: {submission.id}</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-3">Contact Information</h3>
                        <div className="space-y-2 text-sm">
                          <p><span className="font-medium">Name:</span> {submission.data.firstName} {submission.data.lastName}</p>
                          <p><span className="font-medium">Phone:</span> {submission.data.phone || 'Not provided'}</p>
                          <p><span className="font-medium">Email:</span> {submission.data.email || 'Not provided'}</p>
                          {submission.type === 'contact' && (
                            <p><span className="font-medium">Service:</span> {submission.data.service || 'Not specified'}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-slate-900 mb-3">
                          {submission.type === 'contact' ? 'Message' : 'Project Details'}
                        </h3>
                        <div className="space-y-2 text-sm">
                          {submission.type === 'contact' ? (
                            <p className="text-slate-600">{submission.data.message || 'No message provided'}</p>
                          ) : (
                            <>
                              <p><span className="font-medium">Address:</span> {submission.data.address}</p>
                              <p><span className="font-medium">Property Type:</span> {submission.data.propertyType}</p>
                              <p><span className="font-medium">Services:</span> {submission.data.services?.join(', ') || 'Not specified'}</p>
                              <p><span className="font-medium">Timeline:</span> {submission.data.timeline || 'Not specified'}</p>
                              <p><span className="font-medium">Budget:</span> {submission.data.budget || 'Not specified'}</p>
                              {submission.data.details && (
                                <p><span className="font-medium">Details:</span> {submission.data.details}</p>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

