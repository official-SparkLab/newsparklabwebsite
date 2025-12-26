'use client'

import { motion } from 'framer-motion'

export default function TrustedBy() {
  const companies = [
    'Fortune 500',
    'Global Enterprises',
    'Startups',
    'SMBs',
    'Government',
    'Healthcare',
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-gray-600 text-sm font-medium">
            Trusted by leading organizations worldwide
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="text-gray-400 font-semibold text-lg hover:text-primary-600 transition-colors">
                {company}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

