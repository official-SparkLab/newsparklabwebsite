'use client'

import { motion } from 'framer-motion'

export default function VisionMission() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 border-l-4 border-primary-500 hover:border-accent-500 transition-colors"
          >
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be the world's most trusted technology partner, empowering
              businesses to achieve extraordinary outcomes through innovative IT
              solutions and exceptional service delivery.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8"
          >
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To deliver world-class IT solutions that drive digital
              transformation, enhance operational efficiency, and create lasting
              value for our clients through innovation, expertise, and unwavering
              commitment to excellence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

