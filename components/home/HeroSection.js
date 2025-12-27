'use client'

import { motion } from 'framer-motion'
import Button from '@/components/common/Button'

export default function HeroSection() {
  return (
    <section className="relative gradient-bg pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
        
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              duration: 0.8,
              type: 'spring',
              stiffness: 100
            }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform Your Business with
              <motion.span 
                className="text-primary-600 inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ 
                  scale: 1.05,
                  textShadow: '0 0 20px rgba(14, 165, 233, 0.5)',
                }}
              >
                {' '}Enterprise IT Solutions
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We deliver cutting-edge software development, cloud services, and
              digital transformation solutions that drive innovation and growth
              for businesses worldwide.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button href="/contact/" size="lg">
                Get Started
              </Button>
              <Button href="/services/" variant="accent" size="lg">
                Our Services
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: 'spring',
              stiffness: 100
            }}
            className="relative"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="relative bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-2xl border-2 border-primary-200/50"
              animate={{
                boxShadow: [
                  '0 20px 40px rgba(14, 165, 233, 0.2)',
                  '0 25px 50px rgba(14, 165, 233, 0.3)',
                  '0 20px 40px rgba(14, 165, 233, 0.2)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-2xl blur-xl opacity-0"
                animate={{
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {[1, 2, 3, 4].map((item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.4 + item * 0.15,
                      type: 'spring',
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, -5, 5, -5, 0],
                      zIndex: 10
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white rounded-lg p-6 shadow-md border border-primary-100 hover:border-primary-300 transition-all cursor-pointer group"
                  >
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg mb-3"
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.2,
                      }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.div 
                      className="h-3 bg-gray-200 rounded w-3/4 mb-2"
                      initial={{ width: 0 }}
                      animate={{ width: '75%' }}
                      transition={{ delay: 0.6 + item * 0.1, duration: 0.5 }}
                    />
                    <motion.div 
                      className="h-2 bg-gray-100 rounded w-1/2"
                      initial={{ width: 0 }}
                      animate={{ width: '50%' }}
                      transition={{ delay: 0.8 + item * 0.1, duration: 0.5 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

