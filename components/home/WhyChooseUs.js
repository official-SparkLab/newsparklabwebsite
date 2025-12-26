'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/common/SectionTitle'

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Expert Team',
      description:
        'Our team of 500+ certified professionals brings decades of combined experience.',
      icon: '👥',
    },
    {
      title: 'Global Reach',
      description:
        'Serving clients across 50+ countries with 24/7 support and delivery centers.',
      icon: '🌍',
    },
    {
      title: 'Proven Track Record',
      description:
        'Successfully delivered 1000+ projects with 98% client satisfaction rate.',
      icon: '✅',
    },
    {
      title: 'Innovation First',
      description:
        'Cutting-edge technologies and methodologies to stay ahead of the curve.',
      icon: '🚀',
    },
    {
      title: 'Agile Methodology',
      description:
        'Flexible, iterative approach ensuring faster time-to-market and quality.',
      icon: '⚡',
    },
    {
      title: 'Cost Effective',
      description:
        'Competitive pricing without compromising on quality or delivery timelines.',
      icon: '💰',
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionTitle
          title="Why Choose SparkLab"
          subtitle="Our Advantages"
          center
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

