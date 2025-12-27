'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/common/SectionTitle'

export default function AboutSparklab() {
  const items = [
    {
      icon: '🚀',
      title: 'Innovation & Technology',
      description: 'Cutting-edge solutions that drive business transformation.',
    },
    {
      icon: '🌍',
      title: 'Global Expertise',
      description: 'Serving 50+ countries with 500+ skilled professionals.',
    },
    {
      icon: '⚡',
      title: 'Agile Delivery',
      description: 'Rapid deployment with proven methodologies.',
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-grade security and compliance standards.',
    },
  ]

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Enhanced Dynamic Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.7, 0.3],
            x: [0, -30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 1,
            ease: 'easeInOut',
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-100/20 to-accent-100/20 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            },
            scale: {
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400/40 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.3, 0.8],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        {/* Header with SectionTitle */}
        <SectionTitle
          title="About SparkLab IT Solutions"
          subtitle="Who We Are"
          center
          className="mb-16"
        />

        {/* Two Column Layout - White box wider, Blue box narrower and taller */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
          {/* Left: Description Card - Wider (3 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 flex"
          >
            <div className="bg-gradient-to-br from-white via-primary-50/30 to-white rounded-2xl p-8 md:p-10 shadow-xl border-2 border-primary-100 relative overflow-hidden w-full flex flex-col">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-200/20 rounded-full blur-2xl"></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <motion.div 
                  className="flex items-start gap-4 mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <motion.div 
                    className="w-1 h-20 bg-gradient-to-b from-primary-600 to-accent-500 rounded-full"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                  <motion.div 
                    className="flex-1"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <p className="text-xl md:text-2xl font-bold text-gray-900 leading-relaxed mb-4">
                      SparkLab IT Solutions is a premier global technology partner, delivering
                      comprehensive IT services and software solutions that transform businesses
                      and drive digital innovation across industries.
                    </p>
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="space-y-4 pl-5 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <motion.p 
                    className="text-lg text-gray-700 leading-relaxed"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    Founded with a vision to bridge the gap between technology and business
                    excellence, we have grown into a trusted partner for Fortune 500 companies,
                    innovative startups, and enterprises across diverse industries.
                  </motion.p>
                  <motion.p 
                    className="text-lg text-gray-700 leading-relaxed"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    Our team of 500+ professionals brings together diverse skills in software
                    development, cloud computing, data analytics, cybersecurity, and digital
                    transformation. We combine deep technical expertise with business acumen to
                    deliver solutions that create real value.
                  </motion.p>
                </motion.div>

                {/* 4 Points Inside White Box */}
                <div className="grid grid-cols-2 gap-3 pt-6 border-t border-gray-200">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="group"
                    >
                      <motion.div 
                        className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-primary-300 h-full relative overflow-hidden cursor-pointer"
                        whileHover={{ 
                          scale: 1.05,
                          y: -5,
                          rotate: [0, -1, 1, -1, 0],
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ 
                          type: 'spring',
                          stiffness: 300,
                          damping: 20
                        }}
                      >
                        {/* Glow effect on hover */}
                        <motion.div
                          className="absolute -inset-0.5 bg-gradient-to-r from-primary-400 to-accent-400 rounded-lg opacity-0 group-hover:opacity-20 blur-md -z-10 transition-opacity duration-300"
                        />
                        
                        {/* Icon */}
                        <motion.div 
                          className="w-10 h-10 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center text-xl mb-2 relative z-10"
                          whileHover={{ 
                            scale: 1.3,
                            rotate: [0, -15, 15, -15, 0],
                            background: 'linear-gradient(to bottom right, #fef3c7, #fde68a)',
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          {item.icon}
                        </motion.div>
                        
                        {/* Content */}
                        <h3 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-primary-700 transition-colors relative z-10">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-xs leading-relaxed relative z-10">
                          {item.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual Card with Counters - Narrower (2 columns) and Taller */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex"
          >
            <div className="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 rounded-2xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden w-full flex flex-col min-h-[600px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-500/20 rounded-full blur-2xl"></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <motion.div 
                  className="text-6xl mb-6 inline-block"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  💼
                </motion.div>
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold mb-4 leading-tight"
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Your Trusted Technology Partner
                </motion.h3>
                <motion.p 
                  className="text-primary-100 text-base leading-relaxed mb-6"
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  We don't just build software—we build partnerships that last. What sets us
                  apart is our commitment to understanding your unique business challenges.
                </motion.p>
                
                {/* Counters Inside Box */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white/10 rounded-xl p-5 border border-white/20 text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
                    <div className="text-primary-100 text-xs font-semibold">Expert Professionals</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-white/10 rounded-xl p-5 border border-white/20 text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold mb-2">1000+</div>
                    <div className="text-primary-100 text-xs font-semibold">Projects Delivered</div>
                  </motion.div>
                </div>

                {/* Additional Content to Increase Height */}
                <motion.div 
                  className="mb-6 space-y-3 flex-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {['24/7 Global Support', '50+ Countries Served', 'Enterprise-Grade Solutions'].map((text, idx) => (
                    <motion.div 
                      key={text}
                      className="flex items-center gap-3 text-primary-100 cursor-pointer"
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                      whileHover={{ 
                        x: 5,
                        scale: 1.05,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-accent-400 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: idx * 0.2,
                        }}
                        whileHover={{ scale: 2 }}
                      />
                      <span className="text-sm">{text}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Client Satisfaction */}
                <div className="bg-white/10 rounded-xl p-5 border border-white/20 mt-auto">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold">Client Satisfaction</span>
                    <span className="text-lg font-bold">98%</span>
                  </div>
                  <div className="h-2.5 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '98%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-accent-400 to-accent-500 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

