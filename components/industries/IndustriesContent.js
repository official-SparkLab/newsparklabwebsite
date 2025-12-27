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
            Industries We Serve
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Specialized IT solutions across diverse industries
          </motion.p>
        </div>
      </div>
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-primary-300/20 rounded-full"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 30}%`,
              }}
              animate={{
                y: [-25, 25, -25],
                opacity: [0.2, 0.6, 0.2],
                scale: [0.8, 1.3, 0.8],
              }}
              transition={{
                duration: 4 + i * 0.4,
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        <div className="container-custom relative z-10">
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
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-300 relative overflow-hidden group cursor-pointer"
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-primary-400 to-accent-400 rounded-xl opacity-0 group-hover:opacity-20 blur-lg -z-10 transition-opacity duration-300"
                />
                
                <motion.div 
                  className="text-5xl mb-4 inline-block"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -15, 15, -15, 0],
                  }}
                  transition={{ duration: 0.5 }}
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
                  {industry.icon}
                </motion.div>
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors"
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2 }}
                >
                  {industry.name}
                </motion.h3>
                <motion.p 
                  className="text-primary-600 font-semibold mb-4"
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                >
                  {industry.stats}
                </motion.p>
                <motion.p 
                  className="text-gray-600 mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.4 }}
                >
                  {industry.description}
                </motion.p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button href="/contact/" variant="outline" size="sm">
                    Explore Solutions
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

