'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/common/SectionTitle'

export default function ProcessFlow() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description:
        'We analyze your requirements, understand your business goals, and create a comprehensive project plan.',
      image: '/api/placeholder/300/200',
    },
    {
      number: '02',
      title: 'Design & Architecture',
      description:
        'Our experts design scalable architecture and create detailed technical specifications.',
      image: '/api/placeholder/300/200',
    },
    {
      number: '03',
      title: 'Development & Testing',
      description:
        'Agile development with continuous testing, code reviews, and quality assurance.',
      image: '/api/placeholder/300/200',
    },
    {
      number: '04',
      title: 'Deployment & Support',
      description:
        'Seamless deployment with ongoing maintenance, monitoring, and 24/7 support.',
      image: '/api/placeholder/300/200',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Work Process"
          subtitle="How We Work"
          center
          className="mb-8"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our proven methodology ensures successful project delivery from concept to completion.
            We follow a structured approach that combines industry best practices with agile
            methodologies to deliver exceptional results.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-primary-400 -z-10">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-primary-600 rounded-full shadow-md group-hover:bg-accent-500 transition-colors"></div>
                </div>
              )}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-300 group">
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary-600/30">
                      {step.number}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

