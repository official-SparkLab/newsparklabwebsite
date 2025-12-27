'use client'

import { motion } from 'framer-motion'

export default function SectionTitle({
  title,
  subtitle,
  center = false,
  className = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${center ? 'text-center' : ''} ${className}`}
    >
      {subtitle && (
        <motion.p 
          className="text-primary-600 font-semibold text-sm uppercase tracking-[0.15em] mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2 
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.2] tracking-tight"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h2>
    </motion.div>
  )
}

