'use client'

import { motion } from 'framer-motion'

export default function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-accent-500 group"
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {service.icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        {service.description}
      </p>
      <ul className="space-y-2 mb-6">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <span className="text-primary-600 mr-2 font-bold group-hover:text-accent-600 transition-colors">✓</span>
            <span className="text-gray-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

