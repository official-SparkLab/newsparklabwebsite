'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import TechByteOfTheDay from '@/components/common/TechByteOfTheDay'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about/' },
      { name: 'Careers', href: '/careers/' },
      { name: 'Contact', href: '/contact/' },
    ],
    services: [
      { name: 'Software Development', href: '/services/' },
      { name: 'Cloud Solutions', href: '/services/' },
      { name: 'AI & Automation', href: '/services/' },
    ],
    resources: [
      { name: 'Solutions', href: '/solutions/' },
      { name: 'Industries', href: '/industries/' },
      { name: 'Products', href: '/products/' },
      { name: 'Case Studies', href: '/case-studies/' },
      { name: 'Code Arena', href: '/code-arena/' },
      { name: 'Innovation Playground', href: '/innovation-playground/' },
      { name: 'Website Readiness Quiz', href: '/website-readiness-quiz/' },
      { name: 'Website Health Check', href: '/website-health-check/' },
      { name: 'Code & See', href: '/code-and-see/' },
      { name: 'IT Without Headache', href: '/it-without-headache/' },
      { name: 'Try IT Yourself', href: '/try-it-yourself/' },
      { name: 'IT Myth Busters', href: '/it-myth-busters/' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-500/20 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 2) * 60}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.5, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container-custom py-6 md:py-12 lg:py-16 px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6 lg:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2 sm:col-span-2 lg:col-span-1"
          >
            <motion.h3 
              className="text-white text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 lg:mb-4"
              whileHover={{ scale: 1.05 }}
            >
              SparkLab
            </motion.h3>
            <p className="text-gray-400 text-[10px] sm:text-xs lg:text-sm leading-relaxed hidden sm:block">
              Leading IT solutions provider delivering cutting-edge software
              development and enterprise solutions for businesses worldwide.
            </p>
            <p className="text-gray-400 text-[10px] leading-relaxed sm:hidden">
              Leading IT solutions provider delivering cutting-edge software solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-2 sm:mb-3 lg:mb-4 text-xs sm:text-sm lg:text-base">Company</h4>
            <ul className="space-y-1 sm:space-y-1.5 lg:space-y-2">
              {footerLinks.company.map((link, idx) => (
                <motion.li 
                  key={link.name}
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.05 }}
                >
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-accent-400 transition-colors text-[10px] sm:text-xs lg:text-sm inline-block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-2 sm:mb-3 lg:mb-4 text-xs sm:text-sm lg:text-base">Services</h4>
            <ul className="space-y-1 sm:space-y-1.5 lg:space-y-2">
              {footerLinks.services.map((link, idx) => (
                <motion.li 
                  key={link.name}
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.05 }}
                >
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-accent-400 transition-colors text-[10px] sm:text-xs lg:text-sm inline-block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-2 sm:col-span-2 lg:col-span-1"
          >
            <h4 className="text-white font-semibold mb-2 sm:mb-3 lg:mb-4 text-xs sm:text-sm lg:text-base">Resources</h4>
            <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-x-2 sm:gap-x-4 gap-y-1 sm:gap-y-1.5 lg:gap-y-2">
              {footerLinks.resources.map((link, idx) => (
                <motion.li 
                  key={link.name}
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.05 }}
                >
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-accent-400 transition-colors text-[10px] sm:text-xs lg:text-sm inline-block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Tech Byte of the Day */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-4 sm:mb-6 lg:mb-8"
        >
          <TechByteOfTheDay variant="footer" />
        </motion.div>

        <motion.div 
          className="border-t border-gray-800 pt-4 sm:pt-6 lg:pt-8 mt-4 sm:mt-6 lg:mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
            <motion.p 
              className="text-gray-400 text-[10px] sm:text-xs lg:text-sm text-center sm:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              © {currentYear} SparkLab. All rights reserved.
            </motion.p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-4 lg:gap-6">
              {['Privacy Policy', 'Terms of Service'].map((text, idx) => (
                <motion.a
                  key={text}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-[10px] sm:text-xs lg:text-sm"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + idx * 0.1 }}
                  whileHover={{ scale: 1.1, x: 3 }}
                >
                  {text}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

