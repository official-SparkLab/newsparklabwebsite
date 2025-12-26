'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/common/SectionTitle'
import Button from '@/components/common/Button'

export default function CareersContent() {
  const culturePoints = [
    {
      title: 'Innovation First',
      description:
        'We encourage creativity and innovation, giving you the freedom to explore new technologies and solutions.',
      icon: '💡',
    },
    {
      title: 'Growth Opportunities',
      description:
        'Continuous learning with training programs, certifications, and mentorship to advance your career.',
      icon: '📈',
    },
    {
      title: 'Work-Life Balance',
      description:
        'Flexible work arrangements, remote options, and comprehensive benefits to support your well-being.',
      icon: '⚖️',
    },
    {
      title: 'Diverse & Inclusive',
      description:
        'A welcoming environment that values diversity, inclusion, and different perspectives.',
      icon: '🌍',
    },
    {
      title: 'Competitive Benefits',
      description:
        'Attractive compensation, health insurance, retirement plans, and performance bonuses.',
      icon: '💰',
    },
    {
      title: 'Global Impact',
      description:
        'Work on projects that make a difference for clients across 50+ countries worldwide.',
      icon: '🌐',
    },
  ]

  const openPositions = [
    {
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Cloud Services',
      location: 'Austin, TX / Remote',
      type: 'Full-time',
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'London, UK / Remote',
      type: 'Full-time',
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Austin, TX / Remote',
      type: 'Full-time',
    },
    {
      title: 'Business Analyst',
      department: 'Consulting',
      location: 'London, UK / Remote',
      type: 'Full-time',
    },
  ]

  return (
    <>
      <div className="pt-24 pb-16 gradient-bg">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent">Join Our Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build your career with a leading IT solutions provider
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Why Work at SparkLab"
            subtitle="Our Culture"
            center
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {culturePoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-transparent hover:border-accent-500 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{point.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Open Positions"
            subtitle="Current Opportunities"
            center
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {position.title}
                </h3>
                <p className="text-primary-600 font-semibold mb-2">
                  {position.department}
                </p>
                <p className="text-gray-600 text-sm mb-2">{position.location}</p>
                <span className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {position.type}
                </span>
                <Button href="/contact/" variant="outline" size="sm" className="w-full">
                  Apply Now
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

