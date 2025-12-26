'use client'

import { motion } from 'framer-motion'

export default function CompanyOverview() {
  const stats = [
    { number: '500+', label: 'Expert Professionals' },
    { number: '1000+', label: 'Projects Delivered' },
    { number: '50+', label: 'Countries Served' },
    { number: '98%', label: 'Client Satisfaction' },
  ]

  return (
    <section className="section-padding gradient-bg">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About SparkLab
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              SparkLab is a leading global IT solutions provider, delivering
              cutting-edge software development, cloud services, and digital
              transformation solutions to businesses worldwide.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Founded with a vision to bridge the gap between technology and
              business, we have grown into a trusted partner for Fortune 500
              companies, startups, and enterprises across diverse industries.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our commitment to excellence, innovation, and client success has
              established us as a premier technology partner, helping
              organizations achieve their digital transformation goals.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

