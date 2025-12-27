'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/common/Button'

export default function ContactFormUI() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
    })
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.7,
        type: 'spring',
        stiffness: 100
      }}
      onSubmit={handleSubmit}
      className="bg-white rounded-xl p-8 shadow-lg relative overflow-hidden group"
    >
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-primary-400 to-accent-400 rounded-xl opacity-0 group-hover:opacity-20 blur-lg -z-10 transition-opacity duration-300"
      />
      
      <motion.h3 
        className="text-2xl font-bold text-gray-900 mb-6 relative z-10"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Send us a Message
      </motion.h3>
      <motion.div 
        className="space-y-6 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Full Name *
            </label>
            <motion.input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all"
              placeholder="John Doe"
              whileFocus={{ scale: 1.02, borderColor: '#f59e0b' }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Email Address *
            </label>
            <motion.input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all"
              placeholder="john@example.com"
              whileFocus={{ scale: 1.02, borderColor: '#f59e0b' }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <label
              htmlFor="company"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Company Name
            </label>
            <motion.input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all"
              placeholder="Your Company"
              whileFocus={{ scale: 1.02, borderColor: '#f59e0b' }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <motion.input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all"
              placeholder="+1 (555) 123-4567"
              whileFocus={{ scale: 1.02, borderColor: '#f59e0b' }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Message *
          </label>
          <motion.textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all resize-none"
            placeholder="Tell us about your project or inquiry..."
            whileFocus={{ scale: 1.01, borderColor: '#f59e0b' }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button type="submit" size="lg" className="w-full md:w-auto">
              Send Message
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.form>
  )
}

