'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/common/SectionTitle'
import Button from '@/components/common/Button'

export default function SolutionsContent() {
  const solutions = [
    {
      title: 'Finance & Banking',
      description:
        'Secure, compliant financial technology solutions including core banking systems, payment processing, and regulatory compliance platforms.',
      icon: '💳',
      features: [
        'Core banking systems',
        'Payment processing',
        'Regulatory compliance',
        'Risk management',
        'Fraud detection',
      ],
    },
    {
      title: 'Healthcare',
      description:
        'Healthcare IT solutions including EHR systems, telemedicine platforms, and healthcare analytics for improved patient care.',
      icon: '🏥',
      features: [
        'EHR systems',
        'Telemedicine platforms',
        'Healthcare analytics',
        'HIPAA compliance',
        'Patient portals',
      ],
    },
    {
      title: 'Retail & E-commerce',
      description:
        'Omnichannel retail solutions, e-commerce platforms, inventory management, and customer engagement systems.',
      icon: '🛒',
      features: [
        'E-commerce platforms',
        'Inventory management',
        'POS systems',
        'Customer analytics',
        'Supply chain optimization',
      ],
    },
    {
      title: 'Education',
      description:
        'Educational technology solutions including learning management systems, student information systems, and virtual classrooms.',
      icon: '🎓',
      features: [
        'Learning management systems',
        'Student information systems',
        'Virtual classrooms',
        'Assessment platforms',
        'Educational analytics',
      ],
    },
    {
      title: 'Manufacturing',
      description:
        'Industry 4.0 solutions including IoT integration, supply chain management, and manufacturing execution systems.',
      icon: '🏭',
      features: [
        'IoT integration',
        'Supply chain management',
        'MES systems',
        'Quality control',
        'Predictive maintenance',
      ],
    },
    {
      title: 'Startups & Enterprises',
      description:
        'Scalable technology solutions for startups and enterprises, from MVP development to enterprise-scale systems.',
      icon: '🚀',
      features: [
        'MVP development',
        'Scalable architecture',
        'Cloud migration',
        'Digital transformation',
        'Enterprise integration',
      ],
    },
  ]

  return (
    <>
      <div className="pt-24 pb-16 gradient-bg">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent">Industry Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored IT solutions for your industry
          </p>
        </div>
      </div>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Solutions by Industry"
            subtitle="Industry Expertise"
            center
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-accent-400 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{solution.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {solution.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary-600 mr-2 font-bold group-hover:text-accent-600 transition-colors">✓</span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button href="/contact/" variant="outline" size="sm">
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

