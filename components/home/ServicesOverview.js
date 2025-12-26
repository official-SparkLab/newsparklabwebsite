'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionTitle from '@/components/common/SectionTitle'

export default function ServicesOverview() {
  const services = [
    {
      title: 'Software Development',
      description:
        'Custom software solutions built with modern technologies and best practices.',
      icon: '💻',
    },
    {
      title: 'Web Development',
      description:
        'Responsive, scalable web applications that deliver exceptional user experiences.',
      icon: '🌐',
    },
    {
      title: 'Mobile App Development',
      description:
        'Native and cross-platform mobile applications for iOS and Android.',
      icon: '📱',
    },
    {
      title: 'Cloud Solutions',
      description:
        'Cloud migration, infrastructure, and DevOps services for modern businesses.',
      icon: '☁️',
    },
    {
      title: 'AI & Automation',
      description:
        'Intelligent automation and AI-powered solutions to streamline operations.',
      icon: '🤖',
    },
    {
      title: 'Enterprise Solutions',
      description:
        'Comprehensive enterprise software and integration services.',
      icon: '🏢',
    },
  ]

  return (
    <section className="section-padding gradient-bg">
      <div className="container-custom">
        <SectionTitle
          title="Our Offering"
          subtitle="What We Offer"
          center
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-accent-500 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                href="/services/"
                className="text-primary-600 font-semibold hover:text-accent-600 transition-colors text-sm inline-flex items-center group/link"
              >
                Learn More 
                <span className="ml-1 group-hover/link:translate-x-1 transition-transform text-accent-600">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

