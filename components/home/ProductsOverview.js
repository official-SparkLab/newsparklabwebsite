'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionTitle from '@/components/common/SectionTitle'

export default function ProductsOverview() {
  const products = [
    {
      name: 'CloudSync Pro',
      description:
        'Enterprise cloud management platform for seamless operations.',
      category: 'Cloud Management',
    },
    {
      name: 'DataFlow Analytics',
      description:
        'Advanced analytics and business intelligence platform.',
      category: 'Analytics',
    },
    {
      name: 'SecureConnect',
      description:
        'Enterprise-grade security and compliance solution.',
      category: 'Security',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Our Products"
          subtitle="SaaS Solutions"
          center
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1
              }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 border-2 border-gray-200 hover:border-accent-400 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 group-hover:from-accent-500 group-hover:to-accent-600 transition-all duration-300 shadow-md">
                <span className="text-white font-bold text-xl">
                  {product.name.charAt(0)}
                </span>
              </div>
              <span className="text-primary-600 text-sm font-semibold uppercase tracking-wide">
                {product.category}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-primary-700 transition-colors">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4">
                {product.description}
              </p>
              <Link
                href="/products/"
                className="text-primary-600 font-semibold hover:text-accent-600 transition-colors text-sm inline-flex items-center group/link"
              >
                Explore Product 
                <span className="ml-1 group-hover/link:translate-x-1 transition-transform text-accent-600">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/products/"
            className="text-primary-600 font-semibold hover:text-accent-600 transition-colors inline-flex items-center group"
          >
            View All Products 
            <span className="ml-1 group-hover:translate-x-1 transition-transform text-accent-600">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

