'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/common/SectionTitle'
import Button from '@/components/common/Button'

export default function ProblemSolutionCards() {
  const cards = [
    {
      problem: {
        title: 'Slow Website',
        icon: '🐌',
        description: 'Pages take forever to load, visitors leave quickly',
      },
      solution: {
        title: 'High Performance Next.js',
        icon: '⚡',
        description: 'Lightning-fast pages that keep users engaged',
      },
      learning: {
        title: 'Why Speed Improves SEO',
        icon: '📈',
        description: 'Google ranks faster sites higher. Every second counts - 1 second delay can drop conversions by 7%. Fast sites keep visitors happy and search engines reward you.',
      },
    },
    {
      problem: {
        title: 'Low Leads',
        icon: '📉',
        description: 'Visitors come but don\'t convert into customers',
      },
      solution: {
        title: 'Conversion Focused UI',
        icon: '🎯',
        description: 'Strategic design that guides users to take action',
      },
      learning: {
        title: 'How CTAs Affect Users',
        icon: '💡',
        description: 'Clear call-to-action buttons increase conversions by 121%. Placement, color, and wording matter. Good CTAs feel helpful, not pushy - they guide users naturally toward what they need.',
      },
    },
    {
      problem: {
        title: 'No Branding',
        icon: '🎨',
        description: 'Inconsistent look across platforms confuses customers',
      },
      solution: {
        title: 'Digital Identity Design',
        icon: '✨',
        description: 'Cohesive visual language that builds trust',
      },
      learning: {
        title: 'Importance of Consistency',
        icon: '🔗',
        description: 'Consistent branding increases revenue by 23%. When customers see the same colors, fonts, and style everywhere, they recognize and trust your brand instantly. It\'s like meeting a friend - you know them by their consistent appearance.',
      },
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Learn How IT Solutions Work"
          subtitle="Problem → Solution → Understanding"
          center
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card, cardIndex) => (
            <motion.div
              key={cardIndex}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: cardIndex * 0.2 }}
            >
              <div className="flex flex-col h-full">
                {/* Problem Card */}
                <motion.div
                  className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-4 relative overflow-hidden group cursor-pointer"
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: '#ef4444',
                    boxShadow: '0 10px 30px rgba(239, 68, 68, 0.2)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-red-100/50 rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <motion.div
                      className="text-4xl mb-3"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: [0, -10, 10, -10, 0],
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {card.problem.icon}
                    </motion.div>
                    <h3 className="text-lg font-bold text-red-700 mb-2">
                      Problem
                    </h3>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {card.problem.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {card.problem.description}
                    </p>
                  </div>
                </motion.div>

                {/* Arrow */}
                <motion.div
                  className="flex justify-center my-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + cardIndex * 0.2 }}
                >
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-2xl text-primary-600"
                  >
                    ↓
                  </motion.div>
                </motion.div>

                {/* Solution Card */}
                <motion.div
                  className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-4 relative overflow-hidden group cursor-pointer"
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: '#3b82f6',
                    boxShadow: '0 10px 30px rgba(59, 130, 246, 0.2)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100/50 rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <motion.div
                      className="text-4xl mb-3"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: [0, 10, -10, 10, 0],
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {card.solution.icon}
                    </motion.div>
                    <h3 className="text-lg font-bold text-blue-700 mb-2">
                      Solution
                    </h3>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {card.solution.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {card.solution.description}
                    </p>
                  </div>
                </motion.div>

                {/* Arrow */}
                <motion.div
                  className="flex justify-center my-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + cardIndex * 0.2 }}
                >
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                    className="text-2xl text-primary-600"
                  >
                    ↓
                  </motion.div>
                </motion.div>

                {/* Learning Card */}
                <motion.div
                  className="bg-green-50 border-2 border-green-200 rounded-xl p-6 relative overflow-hidden group cursor-pointer flex-1"
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: '#22c55e',
                    boxShadow: '0 10px 30px rgba(34, 197, 94, 0.2)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-green-100/50 rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <motion.div
                      className="text-4xl mb-3"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {card.learning.icon}
                    </motion.div>
                    <h3 className="text-lg font-bold text-green-700 mb-2">
                      What You Learn
                    </h3>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {card.learning.title}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {card.learning.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quiz CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">Not Sure What You Need?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Take our fun quiz to discover what type of website solution is perfect for your business.
            </p>
            <Button href="/website-readiness-quiz/" size="lg" className="bg-white text-primary-700 hover:bg-gray-100">
              Take the Quiz 🎯
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

