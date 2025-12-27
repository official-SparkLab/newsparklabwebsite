'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/common/Button'

export default function HeroSection() {
  const [typedText, setTypedText] = useState('')
  const [currentCommand, setCurrentCommand] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const commands = [
    'npm install growth',
    'git commit -m "business upgrade"',
  ]

  const techStack = [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Cloud', icon: '☁️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'AWS', icon: '☁️' },
  ]

  useEffect(() => {
    let timeout
    const currentCmd = commands[currentCommand]
    
    if (typedText.length < currentCmd.length) {
      timeout = setTimeout(() => {
        setTypedText(currentCmd.slice(0, typedText.length + 1))
      }, 100)
    } else {
      timeout = setTimeout(() => {
        setTypedText('')
        setCurrentCommand((prev) => (prev + 1) % commands.length)
      }, 3000)
    }

    return () => clearTimeout(timeout)
  }, [typedText, currentCommand])

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Animated Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container-custom relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tagline */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block">We don't build</span>
              <motion.span
                className="block bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200%',
                }}
              >
                websites.
              </motion.span>
              <span className="block">We build digital</span>
              <motion.span
                className="block text-primary-400"
                whileHover={{
                  scale: 1.05,
                  textShadow: '0 0 30px rgba(14, 165, 233, 0.5)',
                }}
              >
                experiences.
              </motion.span>
            </motion.h1>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button href="/about/" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                Explore Our Thinking
              </Button>
              <Button href="/services/" variant="accent" size="lg">
                Learn How Tech Works
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Code Terminal & Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Code Terminal */}
            <motion.div
              className="bg-gray-900/90 backdrop-blur-sm rounded-xl p-6 border border-gray-700 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-2 text-gray-400 text-sm">Terminal</span>
              </div>
              <div className="font-mono text-sm">
                <div className="text-gray-500 mb-2">
                  <span className="text-green-400">$</span> {typedText}
                  <motion.span
                    animate={{ opacity: showCursor ? 1 : 0 }}
                    className="inline-block w-2 h-5 bg-primary-400 ml-1"
                  />
                </div>
              </div>
            </motion.div>

            {/* Scrolling Tech Stack */}
            <motion.div
              className="bg-gray-900/90 backdrop-blur-sm rounded-xl p-6 border border-gray-700 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700 cursor-pointer group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                      borderColor: '#0ea5e9',
                      boxShadow: '0 0 20px rgba(14, 165, 233, 0.3)',
                    }}
                  >
                    <motion.span
                      className="text-2xl"
                      whileHover={{
                        scale: 1.2,
                        rotate: [0, -10, 10, -10, 0],
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {tech.icon}
                    </motion.span>
                    <span className="text-white text-sm font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Animated Tech Icons Grid */}
            <motion.div
              className="grid grid-cols-4 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {techStack.slice(0, 4).map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700 flex flex-col items-center justify-center cursor-pointer group"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, type: 'spring', stiffness: 200 }}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    borderColor: '#0ea5e9',
                    boxShadow: '0 0 25px rgba(14, 165, 233, 0.4)',
                  }}
                >
                  <motion.div
                    className="text-4xl mb-2"
                    whileHover={{
                      scale: 1.3,
                      rotate: 360,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {tech.icon}
                  </motion.div>
                  <span className="text-white text-xs font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/60"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
