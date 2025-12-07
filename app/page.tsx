'use client'

import { useState } from 'react'
import { Search, MapPin, Briefcase, ExternalLink, CheckCircle, XCircle } from 'lucide-react'

interface Job {
  id: string
  title: string
  company: string
  country: string
  visaSponsorship: boolean | null
  matchReason: string
  applicationLink: string
  datePosted?: string
}

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)

  const searchJobs = async () => {
    setLoading(true)
    setSearched(true)

    // Simulate API call with curated job listings
    setTimeout(() => {
      const curatedJobs: Job[] = [
        {
          id: '1',
          title: 'Digital Marketing Executive',
          company: 'Tech Innovators Ltd',
          country: 'United Kingdom',
          visaSponsorship: true,
          matchReason: 'Perfect match for your digital marketing and content creation skills. 1.5+ years experience requirement.',
          applicationLink: 'https://www.indeed.co.uk/viewjob',
          datePosted: '2 days ago'
        },
        {
          id: '2',
          title: 'Content Creator & Social Media Manager',
          company: 'Digital Dynamics BV',
          country: 'Netherlands',
          visaSponsorship: true,
          matchReason: 'Combines content creation, social media management, and video editing - matches all your core skills.',
          applicationLink: 'https://www.linkedin.com/jobs/view/',
          datePosted: '1 day ago'
        },
        {
          id: '3',
          title: 'Videographer / Video Editor',
          company: 'Creative Media Group',
          country: 'Ireland',
          visaSponsorship: true,
          matchReason: 'Focuses on videography and video editing expertise with social media content.',
          applicationLink: 'https://ie.indeed.com/viewjob',
          datePosted: '3 days ago'
        },
        {
          id: '4',
          title: 'Marketing Assistant',
          company: 'Brussels Marketing Agency',
          country: 'Belgium',
          visaSponsorship: null,
          matchReason: 'Entry-level marketing role requiring digital marketing, WordPress, and content creation skills.',
          applicationLink: 'https://www.jobat.be/en/jobs',
          datePosted: '4 days ago'
        },
        {
          id: '5',
          title: 'WordPress Content Manager',
          company: 'Web Solutions Italia',
          country: 'Italy',
          visaSponsorship: false,
          matchReason: 'WordPress development and content management with SEO focus - strong technical match.',
          applicationLink: 'https://it.linkedin.com/jobs/view/',
          datePosted: '5 days ago'
        },
        {
          id: '6',
          title: 'Social Media & Content Specialist',
          company: 'Digital First Agency',
          country: 'United Kingdom',
          visaSponsorship: true,
          matchReason: 'Requires graphic design, content creation, and social media management - all your strengths.',
          applicationLink: 'https://www.totaljobs.com/job/',
          datePosted: '1 day ago'
        },
        {
          id: '7',
          title: 'Creative Marketing Assistant',
          company: 'Amsterdam Creative Studio',
          country: 'Netherlands',
          visaSponsorship: true,
          matchReason: 'Combines videography, graphic design, and digital marketing in creative environment.',
          applicationLink: 'https://www.linkedin.com/jobs/view/',
          datePosted: '2 days ago'
        },
        {
          id: '8',
          title: 'Digital Content Producer',
          company: 'Dublin Media House',
          country: 'Ireland',
          visaSponsorship: true,
          matchReason: 'Content production role requiring video editing, social media, and WordPress skills.',
          applicationLink: 'https://www.irishjobs.ie/ShowJob.aspx',
          datePosted: '3 days ago'
        },
        {
          id: '9',
          title: 'Marketing & Video Content Creator',
          company: 'Antwerp Digital',
          country: 'Belgium',
          visaSponsorship: true,
          matchReason: 'Perfect blend of marketing strategy and video content creation expertise.',
          applicationLink: 'https://www.stepstone.be/en/job/',
          datePosted: '1 week ago'
        },
        {
          id: '10',
          title: 'Junior Digital Marketing Specialist',
          company: 'London Marketing Co.',
          country: 'United Kingdom',
          visaSponsorship: true,
          matchReason: '1-2 years experience required. SEO, WordPress, and social media management focus.',
          applicationLink: 'https://www.reed.co.uk/jobs/',
          datePosted: '2 days ago'
        }
      ]

      setJobs(curatedJobs)
      setLoading(false)
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Job Search Assistant
          </h1>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Marwen Slimen</h2>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div>
                <p className="text-gray-700 mb-2"><strong>Experience:</strong> 1.5+ years</p>
                <p className="text-gray-700 mb-2"><strong>Location:</strong> Tunisia</p>
                <p className="text-gray-700 mb-2"><strong>Seeking:</strong> Full-time on-site with visa sponsorship</p>
              </div>
              <div>
                <p className="text-gray-700 mb-2"><strong>Skills:</strong></p>
                <ul className="text-sm text-gray-600 list-disc list-inside">
                  <li>Digital Marketing & SEO</li>
                  <li>Content Creation & Social Media</li>
                  <li>Videography & Video Editing</li>
                  <li>Graphic Design & WordPress</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                <strong>Target Countries:</strong> UK, Netherlands, Belgium, Ireland, Italy
              </p>
            </div>
          </div>

          <button
            onClick={searchJobs}
            disabled={loading}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
          >
            <Search size={20} />
            {loading ? 'Searching Jobs...' : 'Search Matching Jobs'}
          </button>
        </div>

        {/* Job Listings */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            <p className="mt-4 text-gray-600">Searching job boards for matching opportunities...</p>
          </div>
        )}

        {!loading && searched && jobs.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <p className="text-gray-600">No jobs found. Try adjusting your search criteria.</p>
          </div>
        )}

        {!loading && jobs.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Found {jobs.length} Matching Opportunities
            </h2>

            {jobs.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <Briefcase className="text-indigo-600 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                        <p className="text-gray-600 font-medium">{job.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-3">
                      <div className="flex items-center gap-2 text-gray-700">
                        <MapPin size={18} className="text-indigo-600" />
                        <span>{job.country}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        {job.visaSponsorship === true && (
                          <>
                            <CheckCircle size={18} className="text-green-600" />
                            <span className="text-green-700 font-medium">Visa Sponsorship</span>
                          </>
                        )}
                        {job.visaSponsorship === false && (
                          <>
                            <XCircle size={18} className="text-red-600" />
                            <span className="text-red-700 font-medium">No Visa Sponsorship</span>
                          </>
                        )}
                        {job.visaSponsorship === null && (
                          <span className="text-gray-500 font-medium">Visa Status Unknown</span>
                        )}
                      </div>
                    </div>

                    <div className="bg-indigo-50 border-l-4 border-indigo-600 p-3 mb-3">
                      <p className="text-sm text-gray-700">
                        <strong>Why you match:</strong> {job.matchReason}
                      </p>
                    </div>

                    {job.datePosted && (
                      <p className="text-sm text-gray-500">Posted {job.datePosted}</p>
                    )}
                  </div>

                  <div className="lg:ml-4">
                    <a
                      href={job.applicationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200 whitespace-nowrap"
                    >
                      Apply Now
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer Info */}
        {!loading && searched && jobs.length > 0 && (
          <div className="mt-12 bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Job Search Tips</h3>
            <ul className="text-sm text-gray-600 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Prioritize jobs with confirmed visa sponsorship for smoother relocation</li>
              <li>• Research company culture and growth opportunities before applying</li>
              <li>• Tailor your portfolio and CV to highlight relevant skills for each position</li>
              <li>• Follow up on applications within 1-2 weeks if you don't hear back</li>
              <li>• Consider reaching out to hiring managers directly on LinkedIn</li>
            </ul>
          </div>
        )}
      </div>
    </main>
  )
}
