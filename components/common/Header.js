'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const pathname = usePathname()
  const mobileMenuRef = useRef(null)
  const resourcesRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest('button[aria-label="Toggle menu"]')
      ) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsResourcesOpen(false)
  }, [pathname])


  const mainNavLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about/' },
    { name: 'Services', href: '/services/' },
    { name: 'Products', href: '/products/' },
    { name: 'Solutions', href: '/solutions/' },
    { name: 'Industries', href: '/industries/' },
    { name: 'Case Studies', href: '/case-studies/' },
    { name: 'Careers', href: '/careers/' },
    { name: 'Contact', href: '/contact/' },
  ]

  const resourcesLinks = [
    { name: 'Innovation Playground', href: '/innovation-playground/', icon: '🎮', description: 'Interactive demos & experiments' },
    { name: 'IT Without Headache', href: '/it-without-headache/', icon: '📚', description: 'Learn IT concepts simply' },
    { name: 'Try IT Yourself', href: '/try-it-yourself/', icon: '🛠️', description: 'Interactive tools & calculators' },
    { name: 'Website Readiness Quiz', href: '/website-readiness-quiz/', icon: '🎯', description: 'Find your perfect solution' },
  ]

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-white py-2.5'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="flex items-center space-x-2.5 flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-start"
            >
              <div className="flex items-baseline">
                <div className="relative">
                  <svg
                    className="absolute -left-2.5 -top-0.5 w-3 h-3 md:w-4 md:h-4 text-accent-500 transform rotate-12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                  <span className="text-2xl md:text-3xl font-bold text-primary-800 relative" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                    S
                  </span>
                </div>
                <span className="text-xl md:text-2xl font-bold text-primary-800 ml-0.5" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                  park
                </span>
                <span className="text-2xl md:text-3xl font-bold text-primary-800" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>L</span>
                <span className="text-xl md:text-2xl font-bold text-primary-800 relative" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                  ab
                  <svg
                    className="absolute -right-2.5 top-0 w-3 h-3 md:w-4 md:h-4 text-accent-500 transform -rotate-12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </span>
              </div>
              <div className="w-full h-[1px] bg-primary-800 mt-0.5"></div>
              <div className="text-[8px] md:text-[9px] font-semibold text-primary-800 tracking-[0.1em] uppercase mt-0.5 leading-tight">
                IT SOLUTIONS PVT. LTD.
              </div>
            </motion.div>
          </Link>

          <div className="hidden xl:flex items-center space-x-1 flex-1 justify-center mx-6">
            {mainNavLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    className={`relative font-medium text-sm transition-all duration-200 whitespace-nowrap px-3 py-2 rounded-md ${
                      active
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700 hover:text-accent-600 hover:bg-gray-50'
                    }`}
                  >
                    <motion.span
                      whileHover={{ 
                        scale: 1.1,
                        textShadow: '0 0 8px rgba(14, 165, 233, 0.3)',
                      }}
                    >
                      {link.name}
                    </motion.span>
                    {active && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-accent-500 rounded-full"
                        initial={false}
                        layout
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.8, 1, 0.8],
                        }}
                        transition={{
                          layout: { type: 'spring', stiffness: 500, damping: 30 },
                          scale: {
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          },
                          opacity: {
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          },
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
              )
            })}
            
            {/* Resources Dropdown */}
            <div className="relative" ref={resourcesRef}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className={`relative font-medium text-sm transition-all duration-200 whitespace-nowrap px-3 py-2 rounded-md flex items-center gap-1 ${
                  resourcesLinks.some(link => isActive(link.href))
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-accent-600 hover:bg-gray-50'
                }`}
              >
                <span>Resources</span>
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: isResourcesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>

              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                  >
                    {resourcesLinks.map((link) => {
                      const active = isActive(link.href)
                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setIsResourcesOpen(false)}
                          className={`block px-4 py-3 hover:bg-gray-50 transition-colors ${
                            active ? 'bg-primary-50 border-l-4 border-accent-500' : ''
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <span className="text-2xl flex-shrink-0">{link.icon}</span>
                            <div className="flex-1 min-w-0">
                              <div className={`font-semibold text-sm ${
                                active ? 'text-primary-600' : 'text-gray-900'
                              }`}>
                                {link.name}
                              </div>
                              <div className="text-xs text-gray-500 mt-0.5">
                                {link.description}
                              </div>
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="hidden xl:flex items-center space-x-4 flex-shrink-0">
            <div className="hidden 2xl:flex items-center space-x-2 text-gray-600 whitespace-nowrap">
              <svg
                className="w-4 h-4 text-primary-600 flex-shrink-0"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm font-medium">+1 (555) 123-4567</span>
            </div>
            <Link
              href="/contact/"
              className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:from-accent-600 hover:to-accent-700 transition-all duration-300 shadow-md hover:shadow-xl whitespace-nowrap"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2.5 text-gray-700 hover:text-primary-600 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="xl:hidden mt-3 pb-3 space-y-1 overflow-hidden border-t border-gray-200 pt-3"
            >
              {mainNavLinks.map((link) => {
                const active = isActive(link.href)
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-2.5 px-4 rounded-lg transition-all duration-200 text-sm font-medium ${
                      active
                        ? 'bg-primary-50 text-primary-600 font-semibold border-l-4 border-accent-500'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-accent-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              })}
              
              {/* Resources Section in Mobile */}
              <div className="pt-2 mt-2 border-t border-gray-200">
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Resources
                </div>
                {resourcesLinks.map((link) => {
                  const active = isActive(link.href)
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-2.5 px-4 rounded-lg transition-all duration-200 text-sm font-medium ${
                        active
                          ? 'bg-primary-50 text-primary-600 font-semibold border-l-4 border-accent-500'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-accent-600'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{link.icon}</span>
                        <span>{link.name}</span>
                      </div>
                    </Link>
                  )
                })}
              </div>
              <div className="pt-3 border-t border-gray-200 mt-2">
                <div className="flex items-center justify-center space-x-2 text-gray-600 px-4 py-2.5 mb-3">
                  <svg
                    className="w-4 h-4 text-primary-600 flex-shrink-0"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm font-medium">+1 (555) 123-4567</span>
                </div>
                <Link
                  href="/contact/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 py-3 rounded-lg font-semibold text-center hover:from-accent-600 hover:to-accent-700 transition-all duration-300 shadow-md mx-4"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

