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
    },
    {
      number: '02',
      title: 'Design & Architecture',
      description:
        'Our experts design scalable architecture and create detailed technical specifications.',
    },
    {
      number: '03',
      title: 'Development & Testing',
      description:
        'Agile development with continuous testing, code reviews, and quality assurance.',
    },
    {
      number: '04',
      title: 'Deployment & Support',
      description:
        'Seamless deployment with ongoing maintenance, monitoring, and 24/7 support.',
    },
  ]

  return (
    <section className="section-padding gradient-bg">
      <div className="container-custom">
        <SectionTitle
          title="How We Work"
          subtitle="Our Process"
          center
          className="mb-16"
        />
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
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-primary-400 -z-10">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-primary-600 rounded-full shadow-md group-hover:bg-accent-500 transition-colors"></div>
                </div>
              )}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-primary-500 hover:border-accent-500 group">
                <div className="text-4xl font-bold text-primary-600 mb-4 group-hover:text-accent-600 group-hover:scale-110 transition-all duration-300">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

