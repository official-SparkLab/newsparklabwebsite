'use client'

import { motion } from 'framer-motion'
import Button from '@/components/common/Button'

export default function HeroSection() {
  return (
    <section className="relative gradient-bg pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Business with
              <span className="text-primary-600"> Enterprise IT Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              We deliver cutting-edge software development, cloud services, and
              digital transformation solutions that drive innovation and growth
              for businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact/" size="lg">
                Get Started
              </Button>
              <Button href="/services/" variant="accent" size="lg">
                Our Services
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-2xl border-2 border-primary-200/50">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + item * 0.1 }}
                    className="bg-white rounded-lg p-6 shadow-md border border-primary-100 hover:border-primary-300 transition-colors"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg mb-3"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

