'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { getAllProducts } from '@/data/products'

export default function ProductsGrid() {
  const allProducts = getAllProducts()
  const featuredProducts = allProducts.slice(0, 6)
  const remainingProducts = allProducts.slice(6)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {featuredProducts.map((product, index) => (
          <motion.div
            key={product.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <Link
              href={`/products/${product.slug}/`}
              className="block bg-white rounded-xl border-2 border-gray-200 hover:border-accent-400 hover:shadow-xl transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:from-accent-500 group-hover:to-accent-600 transition-all duration-300 shadow-md">
                    <span className="text-4xl">{product.icon}</span>
                  </div>
                  <span className="px-3 py-1.5 bg-primary-50 text-primary-700 rounded-lg text-xs font-semibold uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="flex items-center text-primary-600 font-semibold group-hover:text-accent-600 transition-colors">
                  <span>Learn More</span>
                  <svg
                    className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform text-accent-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className="h-1 bg-gradient-to-r from-accent-500 to-accent-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          </motion.div>
        ))}
      </div>

      {remainingProducts.length > 0 && (
        <div className="border-t border-gray-200 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">All Products</h2>
            <p className="text-gray-600">Explore our complete product suite</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingProducts.map((product, index) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <Link
                  href={`/products/${product.slug}/`}
                  className="block bg-white rounded-lg border-2 border-gray-200 hover:border-accent-300 hover:shadow-lg transition-all duration-300 p-6 h-full"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:from-accent-500 group-hover:to-accent-600 transition-all duration-300 shadow-md">
                      <span className="text-3xl">{product.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                          {product.name}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">
                        {product.description}
                      </p>
                      <span className="text-primary-600 text-sm font-semibold inline-flex items-center group-hover:text-accent-600 transition-colors">
                        View Details
                        <svg
                          className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform text-accent-600"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get started with our enterprise solutions today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold hover:bg-gray-50 border-2 border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started For Free
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-lg font-semibold hover:from-accent-600 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  )
}
