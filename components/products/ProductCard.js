'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ProductCard({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg mb-6 flex items-center justify-center">
        <span className="text-primary-600 font-bold text-2xl">
          {product.icon}
        </span>
      </div>
      <span className="text-primary-600 text-sm font-semibold uppercase tracking-wide">
        {product.category}
      </span>
      <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">
        {product.name}
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
      <ul className="space-y-2 mb-6">
        {product.features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <span className="text-primary-600 mr-2">✓</span>
            <span className="text-gray-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/contact/"
        className="text-primary-600 font-semibold hover:text-primary-700 transition-colors text-sm inline-flex items-center"
      >
        Request Demo →
      </Link>
    </motion.div>
  )
}

