'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export default function Counters() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const counters = [
    {
      number: 10000,
      suffix: '+',
      label: 'Satisfied Clients',
      icon: '👥',
    },
    {
      number: 1500,
      suffix: '+',
      label: 'Finished Projects',
      icon: '✅',
    },
    {
      number: 500,
      suffix: '+',
      label: 'Skilled Experts',
      icon: '🎓',
    },
    {
      number: 250,
      suffix: '+',
      label: 'Media Posts',
      icon: '📰',
    },
  ]

  const [counts, setCounts] = useState(counters.map(() => 0))

  useEffect(() => {
    if (isInView) {
      const timers = []
      counters.forEach((counter, index) => {
        const duration = 2000
        const steps = 60
        const increment = counter.number / steps
        let current = 0

        const timer = setInterval(() => {
          current += increment
          if (current >= counter.number) {
            setCounts((prev) => {
              const newCounts = [...prev]
              newCounts[index] = counter.number
              return newCounts
            })
            clearInterval(timer)
          } else {
            setCounts((prev) => {
              const newCounts = [...prev]
              newCounts[index] = Math.floor(current)
              return newCounts
            })
          }
        }, duration / steps)
        timers.push(timer)
      })
      return () => {
        timers.forEach((timer) => clearInterval(timer))
      }
    }
  }, [isInView])

  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800">
      <div className="container-custom" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((counter, index) => (
            <motion.div
              key={counter.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="text-center"
            >
              <div className="bg-white/10 rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-5xl mb-4">{counter.icon}</div>
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {counts[index].toLocaleString()}
                  {counter.suffix}
                </div>
                <div className="text-primary-100 text-lg font-semibold">
                  {counter.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

