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
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop',
    },
    {
      number: '02',
      title: 'Design & Architecture',
      description:
        'Our experts design scalable architecture and create detailed technical specifications.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
    },
    {
      number: '03',
      title: 'Development & Testing',
      description:
        'Agile development with continuous testing, code reviews, and quality assurance.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop',
    },
    {
      number: '04',
      title: 'Deployment & Support',
      description:
        'Seamless deployment with ongoing maintenance, monitoring, and 24/7 support.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop',
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
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-primary-400 -z-10">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-primary-600 rounded-full shadow-md"></div>
                </div>
              )}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/40 to-primary-800/40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-white/80 drop-shadow-lg">
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

