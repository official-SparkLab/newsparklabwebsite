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
      <div className="pt-24 pb-16 gradient-bg relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-primary-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        <div className="container-custom text-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Join Our Team
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Build your career with a leading IT solutions provider
          </motion.p>
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
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-xl p-6 hover:shadow-2xl transition-all duration-300 border-l-4 border-transparent hover:border-accent-500 group relative overflow-hidden cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 rounded-xl opacity-0 group-hover:opacity-30 blur-lg -z-10 transition-opacity duration-300"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    backgroundSize: '200% 100%',
                  }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-4xl mb-4 inline-block"
                    whileHover={{ 
                      scale: 1.3,
                      rotate: [0, -15, 15, -15, 0],
                    }}
                    transition={{ 
                      scale: { duration: 0.2 },
                      rotate: { duration: 0.6 }
                    }}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.2,
                        ease: 'easeInOut',
                      },
                    }}
                  >
                    {point.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors"
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {point.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 text-sm leading-relaxed"
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {point.description}
                  </motion.p>
                </div>
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
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-primary-600 font-semibold text-sm">
                        {position.department}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600 text-sm flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {position.location}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                    {position.type}
                  </span>
                </div>
                
                <Button href="/contact/" variant="outline" size="sm" className="w-full">
                  Apply Now
                </Button>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4">
              Don't see a position that matches your skills?
            </p>
            <Button href="/contact/" variant="primary" size="md">
              Send Us Your Resume
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

