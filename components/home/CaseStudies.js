'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionTitle from '@/components/common/SectionTitle'

export default function CaseStudies() {
  const caseStudies = [
    {
      image: '/api/placeholder/400/300',
      smallHeading: 'Cloud Migration',
      mediumHeading: 'Enterprise Cloud Transformation',
      company: 'TechCorp Global',
      slug: 'techcorp-cloud-migration',
    },
    {
      image: '/api/placeholder/400/300',
      smallHeading: 'Digital Transformation',
      mediumHeading: 'E-commerce Platform Modernization',
      company: 'RetailMax',
      slug: 'retailmax-ecommerce',
    },
    {
      image: '/api/placeholder/400/300',
      smallHeading: 'AI Integration',
      mediumHeading: 'Intelligent Automation System',
      company: 'FinanceHub',
      slug: 'financehub-ai-automation',
    },
    {
      image: '/api/placeholder/400/300',
      smallHeading: 'Mobile App Development',
      mediumHeading: 'Healthcare Mobile Solution',
      company: 'HealthCare Plus',
      slug: 'healthcare-mobile-app',
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionTitle
          title="From Our Case Studies"
          subtitle="Success Stories"
          center
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link
                href={`/case-studies/${study.slug}/`}
                className="block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-300"
              >
                <div className="relative h-64 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-white/90 rounded-full text-xs font-semibold text-primary-700 mb-2">
                      {study.smallHeading}
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {study.mediumHeading}
                    </h3>
                    <p className="text-white/90 text-sm mt-1">{study.company}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-primary-600 font-semibold text-sm">
                      View Case Study
                    </span>
                    <svg
                      className="w-5 h-5 text-primary-600 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/case-studies/"
            className="inline-flex items-center text-primary-600 font-semibold hover:text-accent-600 transition-colors group"
          >
            View All Case Studies
            <svg
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

