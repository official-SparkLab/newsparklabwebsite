'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '@/components/common/SectionTitle'
import Button from '@/components/common/Button'

export default function InnovationPlayground() {
  const [activeDemo, setActiveDemo] = useState(null)

  const uiAnimations = [
    {
      id: 1,
      title: 'Magnetic Button',
      description: 'Button that follows your cursor',
      category: 'UI Animation',
      component: MagneticButton,
    },
    {
      id: 2,
      title: 'Gradient Text',
      description: 'Animated gradient text effect',
      category: 'UI Animation',
      component: GradientText,
    },
    {
      id: 3,
      title: 'Floating Cards',
      description: '3D card hover effect',
      category: 'UI Animation',
      component: FloatingCards,
    },
    {
      id: 4,
      title: 'Particle Background',
      description: 'Interactive particle system',
      category: 'UI Animation',
      component: ParticleBackground,
    },
  ]

  const reactExperiments = [
    {
      id: 5,
      title: 'Counter Hook',
      description: 'Custom React hook with undo/redo',
      category: 'React Experiment',
      component: CounterHook,
    },
    {
      id: 6,
      title: 'Color Picker',
      description: 'HSL color picker component',
      category: 'React Experiment',
      component: ColorPicker,
    },
    {
      id: 7,
      title: 'Todo List',
      description: 'Minimal todo with animations',
      category: 'React Experiment',
      component: TodoList,
    },
    {
      id: 8,
      title: 'Timer Component',
      description: 'Pomodoro timer with sound',
      category: 'React Experiment',
      component: TimerComponent,
    },
  ]

  const microTools = [
    {
      id: 9,
      title: 'JSON Formatter',
      description: 'Format and validate JSON',
      category: 'Micro Tool',
      component: JSONFormatter,
    },
    {
      id: 10,
      title: 'Base64 Encoder',
      description: 'Encode/decode Base64 strings',
      category: 'Micro Tool',
      component: Base64Encoder,
    },
    {
      id: 11,
      title: 'Password Generator',
      description: 'Generate secure passwords',
      category: 'Micro Tool',
      component: PasswordGenerator,
    },
    {
      id: 12,
      title: 'QR Code Generator',
      description: 'Generate QR codes instantly',
      category: 'Micro Tool',
      component: QRCodeGenerator,
    },
  ]

  const codeSnippets = [
    {
      id: 13,
      title: 'Custom Hook Pattern',
      description: 'Reusable React hook example',
      category: 'Code Snippet',
      component: CustomHookSnippet,
    },
    {
      id: 14,
      title: 'Debounce Function',
      description: 'Performance optimization pattern',
      category: 'Code Snippet',
      component: DebounceSnippet,
    },
    {
      id: 15,
      title: 'API Fetch Hook',
      description: 'Clean API data fetching',
      category: 'Code Snippet',
      component: APIFetchSnippet,
    },
    {
      id: 16,
      title: 'Form Validation',
      description: 'React form validation pattern',
      category: 'Code Snippet',
      component: FormValidationSnippet,
    },
  ]

  const designSystem = [
    {
      id: 17,
      title: 'Color Palette Generator',
      description: 'Generate accessible color schemes',
      category: 'Design System',
      component: ColorPaletteGenerator,
    },
    {
      id: 18,
      title: 'Typography Scale',
      description: 'Responsive typography calculator',
      category: 'Design System',
      component: TypographyScale,
    },
    {
      id: 19,
      title: 'Spacing System',
      description: '8px grid spacing calculator',
      category: 'Design System',
      component: SpacingSystem,
    },
    {
      id: 20,
      title: 'Component Library',
      description: 'Reusable component showcase',
      category: 'Design System',
      component: ComponentLibrary,
    },
  ]

  const learningResources = [
    {
      id: 21,
      title: 'React Patterns',
      description: 'Common React patterns explained',
      category: 'Learning',
      component: ReactPatterns,
    },
    {
      id: 22,
      title: 'CSS Tricks',
      description: 'Modern CSS techniques',
      category: 'Learning',
      component: CSSTricks,
    },
    {
      id: 23,
      title: 'Performance Tips',
      description: 'Web performance optimization',
      category: 'Learning',
      component: PerformanceTips,
    },
    {
      id: 24,
      title: 'Best Practices',
      description: 'Coding best practices guide',
      category: 'Learning',
      component: BestPractices,
    },
  ]

  const allItems = [...uiAnimations, ...reactExperiments, ...microTools, ...codeSnippets, ...designSystem, ...learningResources]

  return (
    <>
      {/* Hero Section */}
      <div className="pt-24 pb-16 gradient-bg relative overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Innovation Playground
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experiment, play, and learn. Interactive demos, React experiments, micro tools, code snippets, design systems, and open-source resources.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {['Developers', 'Learners', 'Coders', 'Designers', 'Curious Minds'].map((tag, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold cursor-pointer"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              { icon: '🎨', label: 'UI Animations', count: '12+' },
              { icon: '⚛️', label: 'React Experiments', count: '8+' },
              { icon: '🛠️', label: 'Micro Tools', count: '10+' },
              { icon: '📚', label: 'Code Snippets', count: '20+' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-primary-300 transition-all"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.count}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* UI Animations Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="UI Animation Demos"
            subtitle="Interactive Animations"
            center
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {uiAnimations.map((item, index) => (
              <PlaygroundCard
                key={item.id}
                item={item}
                index={index}
                onOpen={() => setActiveDemo(item)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* React Experiments Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Mini React Experiments"
            subtitle="Learn by Doing"
            center
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reactExperiments.map((item, index) => (
              <PlaygroundCard
                key={item.id}
                item={item}
                index={index}
                onOpen={() => setActiveDemo(item)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Micro Tools Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Micro Tools"
            subtitle="Useful Utilities"
            center
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {microTools.map((item, index) => (
              <PlaygroundCard
                key={item.id}
                item={item}
                index={index}
                onOpen={() => setActiveDemo(item)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Code Snippets Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Code Snippets"
            subtitle="Copy-Paste Ready Code"
            center
            className="mb-12"
          />
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Production-ready code snippets for developers. Copy, customize, and use in your projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {codeSnippets.map((item, index) => (
              <PlaygroundCard
                key={item.id}
                item={item}
                index={index}
                onOpen={() => setActiveDemo(item)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Design System Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Design System Tools"
            subtitle="For Designers & Developers"
            center
            className="mb-12"
          />
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Build consistent design systems with these tools. Perfect for designers and frontend developers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designSystem.map((item, index) => (
              <PlaygroundCard
                key={item.id}
                item={item}
                index={index}
                onOpen={() => setActiveDemo(item)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Learning Resources Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Learning Resources"
            subtitle="Learn by Experimenting"
            center
            className="mb-12"
          />
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Interactive tutorials and guides. Learn React, CSS, performance optimization, and best practices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningResources.map((item, index) => (
              <PlaygroundCard
                key={item.id}
                item={item}
                index={index}
                onOpen={() => setActiveDemo(item)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Quick Tips & Tricks"
            subtitle="Daily Developer Hacks"
            center
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: '⚡',
                title: 'Performance',
                tip: 'Use React.memo() for expensive components. Memoize callbacks with useCallback() to prevent unnecessary re-renders.',
              },
              {
                icon: '🎨',
                title: 'CSS',
                tip: 'Use CSS custom properties (variables) for theming. They cascade naturally and are easier to maintain than SCSS variables.',
              },
              {
                icon: '🔒',
                title: 'Security',
                tip: 'Always validate and sanitize user inputs. Use parameterized queries for database operations to prevent SQL injection.',
              },
              {
                icon: '📱',
                title: 'Responsive',
                tip: 'Start mobile-first. Design for small screens first, then enhance for larger screens. Use relative units (rem, em, %) instead of px.',
              },
              {
                icon: '🚀',
                title: 'Optimization',
                tip: 'Lazy load images and components. Use dynamic imports for code splitting. Reduce bundle size with tree shaking.',
              },
              {
                icon: '♿',
                title: 'Accessibility',
                tip: 'Use semantic HTML. Add ARIA labels where needed. Ensure keyboard navigation works. Test with screen readers.',
              },
            ].map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 border-2 border-primary-200 hover:border-primary-400 transition-all"
              >
                <div className="text-4xl mb-3">{tip.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{tip.tip}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Open Source Contributions"
            subtitle="Free to Use & Modify"
            center
            className="mb-12"
          />
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg"
            >
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🌐</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  All Code is Open Source
                </h3>
                <p className="text-gray-600 mb-6">
                  Every demo, experiment, and tool on this page is free to use, modify, and share. 
                  Perfect for learning, prototyping, and building your own projects.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  {['MIT License', 'Free to Use', 'Modify & Share', 'No Attribution Required'].map((badge, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="space-y-3 text-left max-w-2xl mx-auto">
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <div>
                      <strong className="text-gray-900">Copy the code:</strong>
                      <span className="text-gray-600"> Click any demo to see the full code implementation</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <div>
                      <strong className="text-gray-900">Modify freely:</strong>
                      <span className="text-gray-600"> Customize for your needs, no restrictions</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <div>
                      <strong className="text-gray-900">Use in production:</strong>
                      <span className="text-gray-600"> All code is production-ready and tested</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <div>
                      <strong className="text-gray-900">Share with others:</strong>
                      <span className="text-gray-600"> Help others learn by sharing what you build</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal for Demos */}
      <AnimatePresence>
        {activeDemo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveDemo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-2 inline-block">
                    {activeDemo.category}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">{activeDemo.title}</h2>
                </div>
                <button
                  onClick={() => setActiveDemo(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <activeDemo.component />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Want to Build Something Together?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              These are just experiments. Let's build something real for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact/" size="lg">
                Start a Project
              </Button>
              <Button href="/services/" variant="accent" size="lg">
                View Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

// Playground Card Component
function PlaygroundCard({ item, index, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary-300 shadow-md hover:shadow-xl transition-all cursor-pointer group"
      onClick={onOpen}
    >
      <div className="mb-4">
        <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
          {item.category}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
        {item.title}
      </h3>
      <p className="text-gray-600 text-sm mb-4">{item.description}</p>
      <div className="flex items-center gap-2 text-primary-600 font-semibold text-sm">
        <span>Try it</span>
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          →
        </motion.span>
      </div>
    </motion.div>
  )
}

// Demo Components
function MagneticButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPosition({ x: x * 0.3, y: y * 0.3 })
  }

  return (
    <div className="space-y-6">
      <p className="text-gray-700 mb-4">
        Move your mouse over the button to see the magnetic effect.
      </p>
      <div className="flex justify-center">
        <motion.button
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setPosition({ x: 0, y: 0 })}
          animate={{ x: position.x, y: position.y }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold shadow-lg"
        >
          Magnetic Button
        </motion.button>
      </div>
      <div className="bg-gray-50 rounded-lg p-4">
        <p className="text-sm text-gray-600 font-mono">
          Uses Framer Motion's spring animation with mouse position tracking
        </p>
      </div>
    </div>
  )
}

function GradientText() {
  return (
    <div className="space-y-6">
      <p className="text-gray-700 mb-4">
        Animated gradient text that shifts colors smoothly.
      </p>
      <div className="flex justify-center">
        <motion.h2
          className="text-4xl font-bold bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 bg-clip-text text-transparent"
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
          Animated Gradient
        </motion.h2>
      </div>
      <div className="bg-gray-50 rounded-lg p-4">
        <p className="text-sm text-gray-600 font-mono">
          CSS gradient with animated background-position
        </p>
      </div>
    </div>
  )
}

function FloatingCards() {
  return (
    <div className="space-y-6">
      <p className="text-gray-700 mb-4">
        Hover over the cards to see the 3D effect.
      </p>
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map((num) => (
          <motion.div
            key={num}
            whileHover={{
              rotateY: 15,
              rotateX: 15,
              scale: 1.05,
              z: 50,
            }}
            className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg p-8 text-white text-center font-bold text-2xl shadow-lg"
            style={{ transformStyle: 'preserve-3d' }}
          >
            Card {num}
          </motion.div>
        ))}
      </div>
      <div className="bg-gray-50 rounded-lg p-4">
        <p className="text-sm text-gray-600 font-mono">
          3D transforms with preserve-3d and hover interactions
        </p>
      </div>
    </div>
  )
}

function ParticleBackground() {
  return (
    <div className="space-y-6">
      <p className="text-gray-700 mb-4">
        Interactive particle system that responds to mouse movement.
      </p>
      <div className="relative h-64 bg-gray-900 rounded-lg overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      <div className="bg-gray-50 rounded-lg p-4">
        <p className="text-sm text-gray-600 font-mono">
          Canvas or SVG particles with random movement animations
        </p>
      </div>
    </div>
  )
}

function CounterHook() {
  const [count, setCount] = useState(0)
  const [history, setHistory] = useState([0])

  const increment = () => {
    const newCount = count + 1
    setCount(newCount)
    setHistory([...history, newCount])
  }

  const decrement = () => {
    const newCount = count - 1
    setCount(newCount)
    setHistory([...history, newCount])
  }

  const undo = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1)
      setHistory(newHistory)
      setCount(newHistory[newHistory.length - 1])
    }
  }

  return (
    <div className="space-y-6">
      <p className="text-gray-700 mb-4">
        Custom React hook with undo functionality.
      </p>
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={decrement}
          className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600"
        >
          -
        </button>
        <motion.div
          key={count}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          className="text-4xl font-bold text-gray-900 w-20 text-center"
        >
          {count}
        </motion.div>
        <button
          onClick={increment}
          className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600"
        >
          +
        </button>
      </div>
      <div className="flex justify-center">
        <button
          onClick={undo}
          disabled={history.length <= 1}
          className="px-6 py-2 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 disabled:opacity-50"
        >
          Undo
        </button>
      </div>
      <div className="bg-gray-50 rounded-lg p-4">
        <p className="text-sm text-gray-600 font-mono">
          useState with history array for undo/redo functionality
        </p>
      </div>
    </div>
  )
}

function ColorPicker() {
  const [hue, setHue] = useState(200)
  const [saturation, setSaturation] = useState(50)
  const [lightness, setLightness] = useState(50)

  const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`

  return (
    <div className="space-y-6">
      <p className="text-gray-700 mb-4">
        HSL color picker with live preview.
      </p>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Hue: {hue}°</label>
          <input
            type="range"
            min="0"
            max="360"
            value={hue}
            onChange={(e) => setHue(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Saturation: {saturation}%</label>
          <input
            type="range"
            min="0"
            max="100"
            value={saturation}
            onChange={(e) => setSaturation(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Lightness: {lightness}%</label>
          <input
            type="range"
            min="0"
            max="100"
            value={lightness}
            onChange={(e) => setLightness(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="flex items-center gap-4">
          <div
            className="w-32 h-32 rounded-lg border-2 border-gray-300"
            style={{ backgroundColor: color }}
          />
          <div>
            <p className="font-mono text-sm text-gray-700">{color}</p>
            <p className="font-mono text-sm text-gray-500 mt-2">
              #{Math.round(hue / 360 * 255).toString(16).padStart(2, '0')}
              {Math.round(saturation / 100 * 255).toString(16).padStart(2, '0')}
              {Math.round(lightness / 100 * 255).toString(16).padStart(2, '0')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function TodoList() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, done: false }])
      setInput('')
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="space-y-6">
      <p className="text-gray-700 mb-4">
        Minimal todo list with smooth animations.
      </p>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a task..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
        />
        <button
          onClick={addTodo}
          className="px-6 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700"
        >
          Add
        </button>
      </div>
      <div className="space-y-2">
        <AnimatePresence>
          {todos.map((todo) => (
            <motion.div
              key={todo.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
            >
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(todo.id)}
                className="w-5 h-5"
              />
              <span className={`flex-1 ${todo.done ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700"
              >
                ×
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

function TimerComponent() {
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval = null
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1
          } else {
            setMinutes((prevMinutes) => {
              if (prevMinutes > 0) {
                return prevMinutes - 1
              } else {
                setIsRunning(false)
                return 0
              }
            })
            return 59
          }
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  return (
    <div className="space-y-6">
      <p className="text-gray-700 mb-4">
        Pomodoro timer with start/pause functionality.
      </p>
      <div className="text-center">
        <div className="text-6xl font-bold text-gray-900 mb-6">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700"
          >
            {isRunning ? 'Pause' : 'Start'}
          </button>
          <button
            onClick={() => {
              setMinutes(25)
              setSeconds(0)
              setIsRunning(false)
            }}
            className="px-8 py-3 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

function JSONFormatter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')

  const format = () => {
    try {
      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed, null, 2))
      setError('')
    } catch (e) {
      setError(e.message)
      setOutput('')
    }
  }

  return (
    <div className="space-y-6">
      <p className="text-gray-700 mb-4">
        Format and validate JSON with syntax highlighting.
      </p>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Input JSON</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-primary-500 outline-none"
            placeholder='{"key": "value"}'
          />
        </div>
        <button
          onClick={format}
          className="px-6 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700"
        >
          Format
        </button>
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            Error: {error}
          </div>
        )}
        {output && (
          <div>
            <label className="block text-sm font-semibold mb-2">Formatted JSON</label>
            <pre className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg font-mono text-sm overflow-x-auto">
              {output}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}

function Base64Encoder() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [mode, setMode] = useState('encode')

  const process = () => {
    try {
      if (mode === 'encode') {
        setOutput(btoa(input))
      } else {
        setOutput(atob(input))
      }
    } catch (e) {
      setOutput('Error: Invalid input')
    }
  }

  return (
    <div className="space-y-6">
      <p className="text-gray-700 mb-4">
        Encode text to Base64 or decode Base64 to text.
      </p>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setMode('encode')}
          className={`px-4 py-2 rounded-lg font-semibold ${
            mode === 'encode' ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Encode
        </button>
        <button
          onClick={() => setMode('decode')}
          className={`px-4 py-2 rounded-lg font-semibold ${
            mode === 'decode' ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Decode
        </button>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Input</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-24 px-4 py-2 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-primary-500 outline-none"
            placeholder={mode === 'encode' ? 'Enter text to encode' : 'Enter Base64 to decode'}
          />
        </div>
        <button
          onClick={process}
          className="px-6 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700"
        >
          {mode === 'encode' ? 'Encode' : 'Decode'}
        </button>
        {output && (
          <div>
            <label className="block text-sm font-semibold mb-2">Output</label>
            <textarea
              value={output}
              readOnly
              className="w-full h-24 px-4 py-2 border border-gray-300 rounded-lg font-mono text-sm bg-gray-50"
            />
          </div>
        )}
      </div>
    </div>
  )
}

function PasswordGenerator() {
  const [length, setLength] = useState(12)
  const [includeUpper, setIncludeUpper] = useState(true)
  const [includeLower, setIncludeLower] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [password, setPassword] = useState('')

  const generate = () => {
    let chars = ''
    if (includeUpper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (includeLower) chars += 'abcdefghijklmnopqrstuvwxyz'
    if (includeNumbers) chars += '0123456789'
    if (includeSymbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?'

    let result = ''
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setPassword(result)
  }

  return (
    <div className="space-y-6">
      <p className="text-gray-700 mb-4">
        Generate secure passwords with customizable options.
      </p>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Length: {length}</label>
          <input
            type="range"
            min="8"
            max="32"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeUpper}
              onChange={(e) => setIncludeUpper(e.target.checked)}
            />
            <span>Uppercase letters</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeLower}
              onChange={(e) => setIncludeLower(e.target.checked)}
            />
            <span>Lowercase letters</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
            <span>Numbers</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
            <span>Symbols</span>
          </label>
        </div>
        <button
          onClick={generate}
          className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700"
        >
          Generate Password
        </button>
        {password && (
          <div className="p-4 bg-gray-50 border border-gray-300 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={password}
                readOnly
                className="flex-1 font-mono text-sm px-3 py-2 border border-gray-300 rounded"
              />
              <button
                onClick={() => navigator.clipboard.writeText(password)}
                className="px-4 py-2 bg-gray-600 text-white rounded font-semibold text-sm hover:bg-gray-700"
              >
                Copy
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function QRCodeGenerator() {
  const [text, setText] = useState('')
  const [qrUrl, setQrUrl] = useState('')

  const generate = () => {
    if (text.trim()) {
      const encoded = encodeURIComponent(text)
      setQrUrl(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encoded}`)
    }
  }

  return (
    <div className="space-y-6">
      <p className="text-gray-700 mb-4">
        Generate QR codes for any text or URL.
      </p>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Enter text or URL</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="https://example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
          />
        </div>
        <button
          onClick={generate}
          className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700"
        >
          Generate QR Code
        </button>
        {qrUrl && (
          <div className="flex justify-center p-4 bg-gray-50 border border-gray-300 rounded-lg">
            <img src={qrUrl} alt="QR Code" className="w-48 h-48" />
          </div>
        )}
      </div>
    </div>
  )
}

// Code Snippets Components
function CustomHookSnippet() {
  const code = `// useCounter.js - Custom React Hook
import { useState } from 'react'

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)
  
  const increment = () => setCount(c => c + 1)
  const decrement = () => setCount(c => c - 1)
  const reset = () => setCount(initialValue)
  
  return { count, increment, decrement, reset }
}

// Usage in component
function MyComponent() {
  const { count, increment, decrement } = useCounter(0)
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}`

  return (
    <div className="space-y-6">
      <p className="text-gray-700 mb-4">
        Reusable custom hook pattern. Extract logic into hooks for better code organization.
      </p>
      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
        <pre className="text-green-400 text-sm font-mono">
          <code>{code}</code>
        </pre>
      </div>
      <button
        onClick={() => navigator.clipboard.writeText(code)}
        className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700"
      >
        Copy Code
      </button>
    </div>
  )
}

function DebounceSnippet() {
  const code = `// debounce.js - Performance optimization
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// React Hook version
import { useEffect, useState } from 'react'

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    
    return () => clearTimeout(handler)
  }, [value, delay])
  
  return debouncedValue
}

// Usage: Debounce search input
const [searchTerm, setSearchTerm] = useState('')
const debouncedSearch = useDebounce(searchTerm, 500)`

  return (
    <div className="space-y-6">
      <p className="text-gray-700 mb-4">
        Debounce function to limit API calls. Perfect for search inputs and scroll events.
      </p>
      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
        <pre className="text-green-400 text-sm font-mono">
          <code>{code}</code>
        </pre>
      </div>
      <button
        onClick={() => navigator.clipboard.writeText(code)}
        className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700"
      >
        Copy Code
      </button>
    </div>
  )
}

function APIFetchSnippet() {
  const code = `// useFetch.js - Clean API data fetching
import { useState, useEffect } from 'react'

export function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const response = await fetch(url)
        if (!response.ok) throw new Error('Failed to fetch')
        const result = await response.json()
        setData(result)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    
    fetchData()
  }, [url])
  
  return { data, loading, error }
}

// Usage
function MyComponent() {
  const { data, loading, error } = useFetch('/api/users')
  
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  return <div>{JSON.stringify(data)}</div>
}`

  return (
    <div className="space-y-6">
      <p className="text-gray-700 mb-4">
        Clean API fetching hook with loading and error states. Reusable across components.
      </p>
      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
        <pre className="text-green-400 text-sm font-mono">
          <code>{code}</code>
        </pre>
      </div>
      <button
        onClick={() => navigator.clipboard.writeText(code)}
        className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700"
      >
        Copy Code
      </button>
    </div>
  )
}

function FormValidationSnippet() {
  const code = `// Form validation with React
import { useState } from 'react'

function useFormValidation(initialValues, validate) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
    
    // Validate on change
    if (touched[name]) {
      const fieldErrors = validate({ ...values, [name]: value })
      setErrors({ ...errors, [name]: fieldErrors[name] || '' })
    }
  }
  
  const handleBlur = (e) => {
    const { name } = e.target
    setTouched({ ...touched, [name]: true })
    const fieldErrors = validate(values)
    setErrors({ ...errors, [name]: fieldErrors[name] || '' })
  }
  
  const handleSubmit = (onSubmit) => (e) => {
    e.preventDefault()
    const formErrors = validate(values)
    setErrors(formErrors)
    
    if (Object.keys(formErrors).length === 0) {
      onSubmit(values)
    }
  }
  
  return { values, errors, touched, handleChange, handleBlur, handleSubmit }
}

// Usage
const validate = (values) => {
  const errors = {}
  if (!values.email) errors.email = 'Email required'
  else if (!/\\S+@\\S+\\.\\S+/.test(values.email)) {
    errors.email = 'Invalid email'
  }
  return errors
}`

  return (
    <div className="space-y-6">
      <p className="text-gray-700 mb-4">
        Form validation hook with error handling. Validates on blur and submit.
      </p>
      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
        <pre className="text-green-400 text-sm font-mono">
          <code>{code}</code>
        </pre>
      </div>
      <button
        onClick={() => navigator.clipboard.writeText(code)}
        className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700"
      >
        Copy Code
      </button>
    </div>
  )
}

// Design System Components
function ColorPaletteGenerator() {
  const [baseColor, setBaseColor] = useState('#3b82f6')
  const [palette, setPalette] = useState([])

  useEffect(() => {
    const generatePalette = () => {
      const colors = []
      for (let i = 0; i < 10; i++) {
        const lightness = 10 + (i * 9)
        colors.push({ name: `${i * 100}`, value: adjustLightness(baseColor, lightness) })
      }
      setPalette(colors)
    }
    generatePalette()
  }, [baseColor])

  const adjustLightness = (hex, lightness) => {
    const num = parseInt(hex.replace('#', ''), 16)
    const r = Math.min(255, Math.max(0, (num >> 16) + (lightness - 50)))
    const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + (lightness - 50)))
    const b = Math.min(255, Math.max(0, (num & 0x0000FF) + (lightness - 50)))
    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`
  }

  return (
    <div className="space-y-6">
      <p className="text-gray-700 mb-4">
        Generate accessible color palettes from a base color. Perfect for design systems.
      </p>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Base Color</label>
          <div className="flex gap-4">
            <input
              type="color"
              value={baseColor}
              onChange={(e) => setBaseColor(e.target.value)}
              className="w-20 h-20 rounded-lg border-2 border-gray-300"
            />
            <input
              type="text"
              value={baseColor}
              onChange={(e) => setBaseColor(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg font-mono"
            />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {palette.map((color, idx) => (
            <div key={idx} className="text-center">
              <div
                className="w-full h-20 rounded-lg border-2 border-gray-300 mb-2"
                style={{ backgroundColor: color.value }}
              />
              <p className="text-xs font-semibold">{color.name}</p>
              <p className="text-xs text-gray-500 font-mono">{color.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TypographyScale() {
  const [baseSize, setBaseSize] = useState(16)
  const scale = [0.75, 0.875, 1, 1.125, 1.25, 1.5, 1.875, 2.25, 3, 3.75, 4.5]

  return (
    <div className="space-y-6">
      <p className="text-gray-700 mb-4">
        Calculate responsive typography scale. Based on your base font size.
      </p>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Base Size: {baseSize}px</label>
          <input
            type="range"
            min="12"
            max="20"
            value={baseSize}
            onChange={(e) => setBaseSize(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          {scale.map((ratio, idx) => {
            const size = baseSize * ratio
            return (
              <div key={idx} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-24 text-sm font-semibold text-gray-600">
                  {['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'][idx]}
                </div>
                <div style={{ fontSize: `${size}px` }} className="flex-1">
                  The quick brown fox jumps
                </div>
                <div className="w-20 text-sm font-mono text-gray-500 text-right">
                  {size.toFixed(1)}px
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function SpacingSystem() {
  const [baseUnit, setBaseUnit] = useState(8)
  const multipliers = [0, 0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24]

  return (
    <div className="space-y-6">
      <p className="text-gray-700 mb-4">
        8px grid spacing system. Consistent spacing for your design system.
      </p>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Base Unit: {baseUnit}px</label>
          <input
            type="range"
            min="4"
            max="16"
            step="2"
            value={baseUnit}
            onChange={(e) => setBaseUnit(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {multipliers.map((mult) => {
            const size = baseUnit * mult
            return (
              <div key={mult} className="text-center">
                <div className="mb-2">
                  <div
                    className="bg-primary-500 mx-auto rounded"
                    style={{ width: `${size}px`, height: `${size}px` }}
                  />
                </div>
                <p className="text-xs font-semibold">{mult}x</p>
                <p className="text-xs text-gray-500 font-mono">{size}px</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function ComponentLibrary() {
  return (
    <div className="space-y-6">
      <p className="text-gray-700 mb-4">
        Reusable component showcase. Copy these patterns for your design system.
      </p>
      <div className="space-y-4">
        <div className="p-4 border-2 border-gray-200 rounded-lg">
          <h4 className="font-bold mb-2">Button Variants</h4>
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-primary-600 text-white rounded-lg">Primary</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-900 rounded-lg">Secondary</button>
            <button className="px-4 py-2 border-2 border-primary-600 text-primary-600 rounded-lg">Outline</button>
          </div>
        </div>
        <div className="p-4 border-2 border-gray-200 rounded-lg">
          <h4 className="font-bold mb-2">Input States</h4>
          <div className="space-y-2">
            <input type="text" placeholder="Normal" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            <input type="text" placeholder="Focus" className="w-full px-4 py-2 border-2 border-primary-500 rounded-lg focus:outline-none" />
            <input type="text" placeholder="Error" className="w-full px-4 py-2 border-2 border-red-500 rounded-lg" />
          </div>
        </div>
        <div className="p-4 border-2 border-gray-200 rounded-lg">
          <h4 className="font-bold mb-2">Card Components</h4>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h5 className="font-semibold mb-1">Card Title</h5>
            <p className="text-sm text-gray-600">Card description text goes here.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Learning Resources Components
function ReactPatterns() {
  const patterns = [
    {
      name: 'Compound Components',
      description: 'Group related components together. Like <Select><Option /></Select>',
      example: '<Select><Option value="1">One</Option></Select>',
    },
    {
      name: 'Render Props',
      description: 'Share code between components using a prop that returns JSX',
      example: '<DataProvider render={data => <Display data={data} />} />',
    },
    {
      name: 'Higher Order Components',
      description: 'Wrap components to add functionality',
      example: 'const Enhanced = withAuth(MyComponent)',
    },
    {
      name: 'Custom Hooks',
      description: 'Extract component logic into reusable functions',
      example: 'const { data, loading } = useFetch(url)',
    },
  ]

  return (
    <div className="space-y-6">
      <p className="text-gray-700 mb-4">
        Common React patterns explained with examples. Learn when and how to use each pattern.
      </p>
      <div className="space-y-4">
        {patterns.map((pattern, idx) => (
          <div key={idx} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-2">{pattern.name}</h4>
            <p className="text-sm text-gray-700 mb-2">{pattern.description}</p>
            <code className="text-xs bg-gray-900 text-green-400 px-2 py-1 rounded block">{pattern.example}</code>
          </div>
        ))}
      </div>
    </div>
  )
}

function CSSTricks() {
  const tricks = [
    {
      title: 'CSS Grid Auto-Fit',
      code: 'grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));',
      description: 'Responsive grid that automatically adjusts columns',
    },
    {
      title: 'Centering with Flexbox',
      code: 'display: flex; align-items: center; justify-content: center;',
      description: 'Perfect centering in one line',
    },
    {
      title: 'Custom Scrollbar',
      code: '::-webkit-scrollbar { width: 8px; } ::-webkit-scrollbar-thumb { background: #ccc; }',
      description: 'Style your scrollbars',
    },
    {
      title: 'Text Gradient',
      code: 'background: linear-gradient(...); -webkit-background-clip: text; color: transparent;',
      description: 'Gradient text effect',
    },
  ]

  return (
    <div className="space-y-6">
      <p className="text-gray-700 mb-4">
        Modern CSS techniques that save time and improve your designs.
      </p>
      <div className="space-y-4">
        {tricks.map((trick, idx) => (
          <div key={idx} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-2">{trick.title}</h4>
            <p className="text-sm text-gray-700 mb-2">{trick.description}</p>
            <code className="text-xs bg-gray-900 text-green-400 px-3 py-2 rounded block">{trick.code}</code>
          </div>
        ))}
      </div>
    </div>
  )
}

function PerformanceTips() {
  const tips = [
    {
      tip: 'Use React.memo() for expensive components',
      why: 'Prevents re-renders when props haven\'t changed',
    },
    {
      tip: 'Lazy load images with loading="lazy"',
      why: 'Loads images only when needed, reducing initial page load',
    },
    {
      tip: 'Code split with React.lazy()',
      why: 'Loads components only when needed, smaller initial bundle',
    },
    {
      tip: 'Debounce search inputs',
      why: 'Reduces API calls and improves performance',
    },
    {
      tip: 'Use Web Workers for heavy computations',
      why: 'Keeps UI responsive during intensive tasks',
    },
  ]

  return (
    <div className="space-y-6">
      <p className="text-gray-700 mb-4">
        Performance optimization tips that make your apps faster and more efficient.
      </p>
      <div className="space-y-4">
        {tips.map((item, idx) => (
          <div key={idx} className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-bold text-blue-900 mb-1">{item.tip}</h4>
            <p className="text-sm text-blue-700">{item.why}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function BestPractices() {
  const practices = [
    {
      category: 'Code Organization',
      items: ['Keep components small and focused', 'Use custom hooks for reusable logic', 'Separate concerns (UI, logic, data)'],
    },
    {
      category: 'Naming Conventions',
      items: ['Use descriptive variable names', 'Components start with uppercase', 'Hooks start with "use"'],
    },
    {
      category: 'State Management',
      items: ['Lift state up when needed', 'Use local state when possible', 'Consider context for global state'],
    },
    {
      category: 'Accessibility',
      items: ['Use semantic HTML', 'Add ARIA labels', 'Ensure keyboard navigation'],
    },
  ]

  return (
    <div className="space-y-6">
      <p className="text-gray-700 mb-4">
        Coding best practices that make your code maintainable and professional.
      </p>
      <div className="space-y-4">
        {practices.map((practice, idx) => (
          <div key={idx} className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h4 className="font-bold text-purple-900 mb-3">{practice.category}</h4>
            <ul className="space-y-2">
              {practice.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-purple-700">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

