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
            Industry Solutions
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Tailored IT solutions for your industry
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
            title="Solutions by Industry"
            subtitle="Industry Expertise"
            center
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
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
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-accent-400 group relative overflow-hidden cursor-pointer"
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
                    {solution.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors"
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2 }}
                  >
                    {solution.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 mb-4 leading-relaxed"
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                  >
                    {solution.description}
                  </motion.p>
                  <motion.ul 
                    className="space-y-2 mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.4 }}
                  >
                    {solution.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start"
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.5 + idx * 0.05 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.span 
                          className="text-primary-600 mr-2 font-bold group-hover:text-accent-600 transition-colors"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + 0.5 + idx * 0.05, type: 'spring' }}
                        >
                          ✓
                        </motion.span>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button href="/contact/" variant="outline" size="sm">
                      Learn More
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

