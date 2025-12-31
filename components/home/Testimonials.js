'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '@/components/common/SectionTitle'

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'SparkLab transformed our digital infrastructure. Their expertise and commitment to excellence is unmatched.',
      author: 'Sarah Johnson',
      profession: 'CTO',
      company: 'TechCorp Global',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
    },
    {
      quote:
        'Outstanding service delivery and technical expertise. They delivered our project ahead of schedule with exceptional quality.',
      author: 'Michael Chen',
      profession: 'VP Engineering',
      company: 'InnovateLabs',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
    },
    {
      quote:
        'Working with SparkLab has been a game-changer. Their cloud solutions reduced our operational costs by 40%.',
      author: 'Emily Rodriguez',
      profession: 'Director of IT',
      company: 'FinanceHub',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
    },
    {
      quote:
        'Exceptional team and outstanding results. SparkLab helped us scale our platform to handle 10x more traffic seamlessly.',
      author: 'David Kim',
      profession: 'CEO',
      company: 'StartupHub',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
    },
    {
      quote:
        'Professional, reliable, and innovative. Their AI solutions have revolutionized our customer service operations.',
      author: 'Lisa Anderson',
      profession: 'Operations Manager',
      company: 'ServicePro',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face',
    },
    {
      quote:
        'Best technology partner we have worked with. Their attention to detail and customer focus is remarkable.',
      author: 'Robert Taylor',
      profession: 'CTO',
      company: 'Enterprise Solutions Inc',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume auto-play after 10 seconds
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-accent-500' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Enhanced Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 right-0 w-64 h-64 bg-primary-100/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-64 h-64 bg-accent-100/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, -15, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <SectionTitle
          title="Clients Review"
          subtitle="What Our Clients Say"
          center
          className="mb-12"
        />

        {/* Simple & Sweet Slider Container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Enhanced Navigation Buttons */}
          <motion.button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-8 z-20 w-10 h-10 bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center hover:bg-primary-50 transition-all duration-300 border border-gray-200 hover:border-primary-300 group"
            aria-label="Previous testimonial"
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.svg
              className="w-5 h-5 text-primary-600 group-hover:text-accent-600 transition-colors"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ x: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path d="M15 19l-7-7 7-7" />
            </motion.svg>
          </motion.button>

          <motion.button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-8 z-20 w-10 h-10 bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center hover:bg-primary-50 transition-all duration-300 border border-gray-200 hover:border-primary-300 group"
            aria-label="Next testimonial"
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.svg
              className="w-5 h-5 text-primary-600 group-hover:text-accent-600 transition-colors"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.button>

          {/* Enhanced Slider Content */}
          <div className="relative overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.95 }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="bg-white rounded-xl p-6 md:p-8 shadow-lg border-2 border-primary-200 relative overflow-hidden"
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-accent-50/50 opacity-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
                
                <div className="max-w-xl mx-auto text-center relative z-10">
                  {/* Animated Quote Icon */}
                  <motion.div 
                    className="text-4xl text-primary-200 mb-3"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.6,
                      type: 'spring',
                      stiffness: 200
                    }}
                  >
                    "
                  </motion.div>
                  
                  {/* Animated Quote */}
                  <motion.p 
                    className="text-base md:text-lg text-gray-700 leading-relaxed mb-5"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {testimonials[currentIndex].quote}
                  </motion.p>

                  {/* Animated Author Section */}
                  <motion.div 
                    className="flex flex-col items-center"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-xl font-bold text-white mb-2 shadow-md"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        delay: 0.5,
                        type: 'spring',
                        stiffness: 200
                      }}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                    >
                      {testimonials[currentIndex].author.charAt(0)}
                    </motion.div>
                    <motion.div 
                      className="flex items-center mb-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6, type: 'spring' }}
                    >
                      {renderStars(testimonials[currentIndex].rating)}
                      <span className="ml-2 text-xs font-semibold text-gray-700">
                        {testimonials[currentIndex].rating}/5
                      </span>
                    </motion.div>
                    <motion.p 
                      className="text-sm font-bold text-gray-900"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      {testimonials[currentIndex].author}
                    </motion.p>
                    <motion.p 
                      className="text-xs text-gray-600"
                      initial={{ x: 10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      {testimonials[currentIndex].profession}, {testimonials[currentIndex].company}
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full ${
                  index === currentIndex
                    ? 'bg-primary-600'
                    : 'bg-gray-300 hover:bg-primary-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                initial={false}
                animate={{
                  width: index === currentIndex ? 32 : 8,
                  height: 8,
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

