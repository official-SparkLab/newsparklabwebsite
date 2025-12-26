'use client'

import { motion } from 'framer-motion'
import Button from '@/components/common/Button'

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-700 to-primary-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Let's discuss how our IT solutions can drive innovation and growth
            for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact/" variant="secondary" size="lg" className="bg-white text-primary-700 hover:bg-gray-50 border-2 border-white/30">
              Get in Touch
            </Button>
            <Button href="/services/" variant="accent" size="lg">
              Explore Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

