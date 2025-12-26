'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/common/SectionTitle'

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'SparkLab transformed our digital infrastructure. Their expertise and commitment to excellence is unmatched.',
      author: 'Sarah Johnson',
      role: 'CTO, TechCorp Global',
      company: 'TechCorp',
    },
    {
      quote:
        'Outstanding service delivery and technical expertise. They delivered our project ahead of schedule with exceptional quality.',
      author: 'Michael Chen',
      role: 'VP Engineering, InnovateLabs',
      company: 'InnovateLabs',
    },
    {
      quote:
        'Working with SparkLab has been a game-changer. Their cloud solutions reduced our operational costs by 40%.',
      author: 'Emily Rodriguez',
      role: 'Director of IT, FinanceHub',
      company: 'FinanceHub',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Testimonials"
          center
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-primary-500 hover:border-accent-500 group"
            >
              <div className="text-primary-600 text-4xl mb-4 group-hover:text-accent-600 group-hover:scale-110 transition-all duration-300">"</div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="pt-4 border-t border-gray-100">
                <p className="font-semibold text-primary-800">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

