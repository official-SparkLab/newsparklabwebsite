'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/common/SectionTitle'
import Button from '@/components/common/Button'

export default function IndustriesContent() {
  const industries = [
    {
      name: 'Financial Services',
      description:
        'Secure, compliant solutions for banks, insurance companies, and financial institutions.',
      icon: '💼',
      stats: '200+ Projects',
    },
    {
      name: 'Healthcare',
      description:
        'HIPAA-compliant healthcare IT solutions improving patient care and operational efficiency.',
      icon: '🏥',
      stats: '150+ Projects',
    },
    {
      name: 'Retail & E-commerce',
      description:
        'Omnichannel solutions driving sales and enhancing customer experiences.',
      icon: '🛍️',
      stats: '180+ Projects',
    },
    {
      name: 'Education',
      description:
        'EdTech solutions transforming learning experiences and administrative operations.',
      icon: '📚',
      stats: '120+ Projects',
    },
    {
      name: 'Manufacturing',
      description:
        'Industry 4.0 solutions optimizing production and supply chain operations.',
      icon: '⚙️',
      stats: '100+ Projects',
    },
    {
      name: 'Technology',
      description:
        'Cutting-edge solutions for tech companies, startups, and SaaS providers.',
      icon: '💻',
      stats: '250+ Projects',
    },
  ]

  return (
    <>
      <div className="pt-24 pb-16 gradient-bg">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent">Industries We Serve</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized IT solutions across diverse industries
          </p>
        </div>
      </div>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Industry Expertise"
            subtitle="Our Experience"
            center
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {industry.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-4">
                  {industry.stats}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {industry.description}
                </p>
                <Button href="/contact/" variant="outline" size="sm">
                  Explore Solutions
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

