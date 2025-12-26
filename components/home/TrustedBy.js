'use client'

import { motion } from 'framer-motion'

export default function TrustedBy() {
  const companies = [
    { name: 'Fortune 500', icon: '🏆', count: '150+' },
    { name: 'Global Enterprises', icon: '🌍', count: '500+' },
    { name: 'Startups', icon: '🚀', count: '2000+' },
    { name: 'SMBs', icon: '💼', count: '5000+' },
    { name: 'Government', icon: '🏛️', count: '50+' },
    { name: 'Healthcare', icon: '🏥', count: '300+' },
    { name: 'Education', icon: '🎓', count: '400+' },
    { name: 'Finance', icon: '💳', count: '250+' },
  ]

  // Duplicate array for seamless loop
  const duplicatedCompanies = [...companies, ...companies]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-primary-50/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center px-4 py-2 bg-primary-100 rounded-full mb-4">
            <span className="text-primary-700 text-sm font-semibold uppercase tracking-wide">
              Trusted Worldwide
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Organizations
            <span className="block text-primary-600 mt-2">Worldwide</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of companies that trust SparkLab for their digital transformation journey
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none"></div>

          {/* Marquee Animation */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{
                x: ['0%', '-50%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 40,
                  ease: 'linear',
                },
              }}
            >
              {duplicatedCompanies.map((company, index) => (
                <motion.div
                  key={`${company.name}-${index}`}
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-white rounded-xl px-8 py-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-300 min-w-[280px] group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                        {company.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl font-bold text-primary-600 group-hover:text-accent-600 transition-colors">
                          {company.count}
                        </div>
                        <div className="text-sm font-semibold text-gray-700 group-hover:text-primary-700 transition-colors">
                          {company.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white shadow-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10,000+</div>
              <div className="text-primary-200 text-sm md:text-base">Active Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-primary-200 text-sm md:text-base">Countries</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-primary-200 text-sm md:text-base">Uptime SLA</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-primary-200 text-sm md:text-base">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

