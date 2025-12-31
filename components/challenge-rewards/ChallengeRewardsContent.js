'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '@/components/common/SectionTitle'
import Button from '@/components/common/Button'

export default function ChallengeRewardsContent() {
  const [activeTab, setActiveTab] = useState('all')
  const [selectedChallenge, setSelectedChallenge] = useState(null)

  const challenges = [
    {
      id: 1,
      type: 'real-company',
      title: 'Optimize Database Query Performance',
      difficulty: 'intermediate',
      description: 'A client reported slow response times on their customer dashboard. The query takes 15+ seconds to load user data.',
      context: 'This is a real issue we encountered where a complex JOIN query was causing performance bottlenecks. Solving this helps thousands of users experience faster load times.',
      expectedOutcome: 'Reduce query execution time to under 2 seconds while maintaining data accuracy.',
      submissionInstructions: 'Submit your optimized query along with an explanation of the changes. Include performance metrics if possible.',
      tags: ['Database', 'SQL', 'Performance'],
      points: 150,
      submissions: 47,
      deadline: '2024-12-31',
    },
    {
      id: 2,
      type: 'coding-logic',
      title: 'Build a Rate Limiter Algorithm',
      difficulty: 'advanced',
      description: 'Design and implement a rate limiter that allows N requests per minute per user, with thread-safe operations.',
      context: 'Rate limiting is crucial for API security and preventing abuse. This challenge tests your understanding of algorithms, data structures, and concurrency.',
      expectedOutcome: 'A working rate limiter class with O(1) time complexity for check operations, supporting multiple users simultaneously.',
      submissionInstructions: 'Submit your code (any language) with unit tests. Include time/space complexity analysis.',
      tags: ['Algorithm', 'System Design', 'Concurrency'],
      points: 200,
      submissions: 23,
      deadline: '2024-12-31',
    },
    {
      id: 3,
      type: 'real-company',
      title: 'Design a Scalable Notification System',
      difficulty: 'advanced',
      description: 'Our notification service needs to handle 1M+ notifications per hour across multiple channels (email, SMS, push).',
      context: 'As our user base grows, we need a robust notification system that can scale horizontally and handle failures gracefully.',
      expectedOutcome: 'A system design document with architecture diagrams, database schema, and implementation approach.',
      submissionInstructions: 'Submit a detailed design document (PDF or markdown) covering architecture, scalability, and failure handling.',
      tags: ['System Design', 'Scalability', 'Architecture'],
      points: 250,
      submissions: 15,
      deadline: '2024-12-31',
    },
    {
      id: 4,
      type: 'coding-logic',
      title: 'Implement a Distributed Cache',
      difficulty: 'advanced',
      description: 'Create a distributed caching solution that supports TTL, eviction policies, and consistency across nodes.',
      context: 'Understanding distributed systems is essential for modern software development. This challenge covers caching strategies and distributed computing concepts.',
      expectedOutcome: 'A working distributed cache implementation with at least 3 nodes, supporting LRU eviction and TTL expiration.',
      submissionInstructions: 'Submit your implementation with Docker setup, API documentation, and test results showing consistency.',
      tags: ['Distributed Systems', 'Caching', 'Go/Java/Python'],
      points: 300,
      submissions: 8,
      deadline: '2024-12-31',
    },
    {
      id: 5,
      type: 'real-company',
      title: 'Fix Memory Leak in React Application',
      difficulty: 'intermediate',
      description: 'A React dashboard is experiencing memory leaks after extended use, causing browser crashes.',
      context: 'Memory leaks are common in long-running web applications. This challenge helps you identify and fix common React memory leak patterns.',
      expectedOutcome: 'Identify the leak source, fix it, and provide a before/after memory profile showing the improvement.',
      submissionInstructions: 'Submit the fixed code with explanations of what caused the leak and how you fixed it. Include memory profiling screenshots.',
      tags: ['React', 'JavaScript', 'Performance'],
      points: 150,
      submissions: 62,
      deadline: '2024-12-31',
    },
    {
      id: 6,
      type: 'coding-logic',
      title: 'Build a URL Shortener Service',
      difficulty: 'intermediate',
      description: 'Design and implement a URL shortener like bit.ly with analytics, custom aliases, and expiration dates.',
      context: 'URL shorteners are great projects to learn about database design, API development, and handling high traffic scenarios.',
      expectedOutcome: 'A working URL shortener with REST API, analytics dashboard, and support for custom short codes.',
      submissionInstructions: 'Submit your code repository with README, API documentation, and a live demo link if possible.',
      tags: ['Full Stack', 'API', 'Database'],
      points: 180,
      submissions: 89,
      deadline: '2024-12-31',
    },
    {
      id: 7,
      type: 'real-company',
      title: 'Improve CI/CD Pipeline Efficiency',
      difficulty: 'intermediate',
      description: 'Our CI/CD pipeline takes 45 minutes to complete. Help us reduce it to under 15 minutes without compromising test coverage.',
      context: 'Faster deployments mean faster feature delivery. This challenge involves optimizing build processes, parallelization, and caching strategies.',
      expectedOutcome: 'A detailed optimization plan with implementation steps, expected improvements, and before/after metrics.',
      submissionInstructions: 'Submit your optimization strategy with code changes (if applicable), configuration files, and performance comparisons.',
      tags: ['DevOps', 'CI/CD', 'Automation'],
      points: 200,
      submissions: 34,
      deadline: '2024-12-31',
    },
    {
      id: 8,
      type: 'coding-logic',
      title: 'Create a Real-time Collaboration Editor',
      difficulty: 'advanced',
      description: 'Build a collaborative text editor where multiple users can edit simultaneously with conflict resolution (like Google Docs).',
      context: 'Real-time collaboration is a complex problem involving operational transforms or CRDTs. This challenge tests advanced algorithms and WebSocket handling.',
      expectedOutcome: 'A working collaborative editor with conflict resolution, user cursors, and change synchronization.',
      submissionInstructions: 'Submit your implementation with architecture explanation, conflict resolution strategy, and a demo showing multiple users editing.',
      tags: ['Real-time', 'WebSockets', 'Algorithms'],
      points: 350,
      submissions: 12,
      deadline: '2024-12-31',
    },
  ]

  const rewards = [
    {
      icon: '🏆',
      title: 'Certificates',
      description: 'Earn verified certificates for completing challenges. Showcase your skills on LinkedIn and your portfolio.',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: '🎖️',
      title: 'Badges',
      description: 'Collect achievement badges for milestones. Build your profile and track your progress as a problem solver.',
      color: 'from-blue-400 to-purple-500',
    },
    {
      icon: '💼',
      title: 'Internship Opportunities',
      description: 'Top performers get priority consideration for internships. Work on real projects with our expert team.',
      color: 'from-green-400 to-teal-500',
    },
    {
      icon: '⭐',
      title: 'Hall of Fame',
      description: 'Get featured on our Hall of Fame page. Recognition for exceptional solutions and innovative thinking.',
      color: 'from-pink-400 to-red-500',
    },
  ]

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-700 border-green-300',
    intermediate: 'bg-yellow-100 text-yellow-700 border-yellow-300',
    advanced: 'bg-red-100 text-red-700 border-red-300',
  }

  const difficultyLabels = {
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
  }

  const filteredChallenges = activeTab === 'all' 
    ? challenges 
    : challenges.filter(c => c.type === activeTab)

  return (
    <>
      {/* Hero Section */}
      <div className="pt-24 pb-16 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.2, 0.7, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        <div className="container-custom text-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Challenge & Rewards
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Solve Real-World IT Problems & Get Recognized
          </motion.p>
          <motion.p 
            className="text-lg text-gray-500 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Join our community of problem solvers. Tackle real company challenges and coding tasks. 
            Earn certificates, badges, and unlock internship opportunities.
          </motion.p>
        </div>
      </div>

      {/* Rewards Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Earn Rewards & Recognition"
            subtitle="Your Achievements"
            center
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rewards.map((reward, index) => (
              <motion.div
                key={reward.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-xl p-6 hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-primary-300 group relative overflow-hidden cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${reward.color} rounded-xl opacity-0 group-hover:opacity-20 blur-lg -z-10 transition-opacity duration-300`}
                />
                
                <div className="relative z-10 text-center">
                  <motion.div 
                    className="text-5xl mb-4 inline-block"
                    whileHover={{ 
                      scale: 1.3,
                      rotate: [0, -15, 15, -15, 0],
                    }}
                    transition={{ 
                      scale: { duration: 0.2 },
                      rotate: { duration: 0.6 }
                    }}
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.2,
                        ease: 'easeInOut',
                      },
                    }}
                  >
                    {reward.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                    {reward.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reward.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Active Challenges"
            subtitle="Choose Your Challenge"
            center
            className="mb-8"
          />

          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-lg p-1 gap-2">
              {[
                { id: 'all', label: 'All Challenges' },
                { id: 'real-company', label: 'Real Company Issues' },
                { id: 'coding-logic', label: 'Coding Logic Tasks' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 rounded-md font-semibold text-sm transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Challenge Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChallenges.map((challenge, index) => (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-300 group cursor-pointer"
                onClick={() => setSelectedChallenge(challenge)}
              >
                {/* Challenge Type Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    challenge.type === 'real-company'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-purple-100 text-purple-700'
                  }`}>
                    {challenge.type === 'real-company' ? '🏢 Real Company Issue' : '💻 Coding Logic'}
                  </span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${difficultyColors[challenge.difficulty]}`}>
                    {difficultyLabels[challenge.difficulty]}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {challenge.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {challenge.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {challenge.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {challenge.submissions}
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-primary-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                      </svg>
                      {challenge.points} pts
                    </span>
                  </div>
                </div>

                {/* View Details Button */}
                <button
                  type="button"
                  className="w-full mt-4 inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105 active:scale-95 border-2 border-accent-500 text-accent-600 hover:bg-accent-50 hover:border-accent-600 focus:ring-accent-500 px-4 py-2 text-sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedChallenge(challenge)
                  }}
                >
                  View Details
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Detail Modal */}
      <AnimatePresence>
        {selectedChallenge && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedChallenge(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    selectedChallenge.type === 'real-company'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-purple-100 text-purple-700'
                  }`}>
                    {selectedChallenge.type === 'real-company' ? '🏢 Real Company Issue' : '💻 Coding Logic'}
                  </span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${difficultyColors[selectedChallenge.difficulty]}`}>
                    {difficultyLabels[selectedChallenge.difficulty]}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedChallenge.title}
                </h2>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {selectedChallenge.submissions} submissions
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-primary-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                    {selectedChallenge.points} points
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedChallenge(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Problem Description</h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedChallenge.description}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Context</h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedChallenge.context}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expected Outcome</h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedChallenge.expectedOutcome}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Submission Instructions</h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedChallenge.submissionInstructions}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {selectedChallenge.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm bg-primary-100 text-primary-700 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  variant="primary"
                  size="md"
                  className="flex-1"
                  onClick={() => {
                    // In a real app, this would open a submission form
                    alert('Submission form would open here. In production, this would connect to your backend.')
                  }}
                >
                  Submit Solution
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => setSelectedChallenge(null)}
                >
                  Close
                </Button>
              </div>
            </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Rules & Guidelines Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Rules & Guidelines"
            subtitle="Important Information"
            center
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md border-l-4 border-primary-600"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🔒</span>
                Security & Privacy
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span>No sensitive data is included in challenges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span>All challenges are educational and ethical</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span>Your submissions remain confidential</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md border-l-4 border-accent-500"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">📋</span>
                Submission Guidelines
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-accent-600 mt-1">✓</span>
                  <span>Submit original work only</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-600 mt-1">✓</span>
                  <span>Include clear explanations and documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-600 mt-1">✓</span>
                  <span>Test your solutions before submitting</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Solving?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join our community of problem solvers and showcase your skills. 
              Start with any challenge that interests you!
            </p>
            <Button
              href="/contact/"
              variant="secondary"
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

