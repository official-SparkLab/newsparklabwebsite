'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '@/components/common/SectionTitle'
import Button from '@/components/common/Button'

export default function WebsiteHealthCheck() {
  const [url, setUrl] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState(null)

  const generateScores = (url) => {
    // Simulate scores based on URL (for demo purposes)
    // In real implementation, this would call an API
    const hash = url.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    
    return {
      speed: 60 + (hash % 30), // 60-90
      seo: 50 + (hash % 40), // 50-90
      mobile: 70 + (hash % 25), // 70-95
      ux: 55 + (hash % 35), // 55-90
    }
  }

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreBgColor = (score) => {
    if (score >= 80) return 'bg-green-500'
    if (score >= 60) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  const getScoreLabel = (score) => {
    if (score >= 80) return 'Excellent'
    if (score >= 60) return 'Good'
    return 'Needs Improvement'
  }

  const getTips = (category, score) => {
    const tips = {
      speed: [
        score < 60 ? 'Optimize images—compress and use WebP format' : 'Images are optimized well',
        score < 60 ? 'Enable browser caching to reduce load times' : 'Caching is configured',
        score < 70 ? 'Minify CSS and JavaScript files' : 'Code is minified',
        score < 80 ? 'Use a Content Delivery Network (CDN)' : 'CDN is active',
      ],
      seo: [
        score < 60 ? 'Add meta descriptions to all pages' : 'Meta descriptions are present',
        score < 60 ? 'Use proper heading tags (H1, H2, H3)' : 'Heading structure is good',
        score < 70 ? 'Optimize images with alt text' : 'Alt text is properly set',
        score < 80 ? 'Create an XML sitemap' : 'Sitemap is configured',
      ],
      mobile: [
        score < 70 ? 'Ensure touch targets are at least 44px' : 'Touch targets are adequate',
        score < 70 ? 'Test on real mobile devices' : 'Mobile testing is done',
        score < 80 ? 'Use responsive images' : 'Images are responsive',
        score < 80 ? 'Optimize font sizes for mobile' : 'Typography is mobile-friendly',
      ],
      ux: [
        score < 60 ? 'Improve navigation structure' : 'Navigation is clear',
        score < 60 ? 'Add clear call-to-action buttons' : 'CTAs are well-placed',
        score < 70 ? 'Reduce form fields to essentials' : 'Forms are optimized',
        score < 80 ? 'Improve page loading feedback' : 'Loading states are good',
      ],
    }
    return tips[category] || []
  }

  const handleAnalyze = (e) => {
    e.preventDefault()
    if (!url.trim()) return

    setIsAnalyzing(true)
    setResults(null)

    // Simulate API call
    setTimeout(() => {
      const scores = generateScores(url)
      setResults({
        url: url,
        scores: scores,
        overall: Math.round((scores.speed + scores.seo + scores.mobile + scores.ux) / 4),
      })
      setIsAnalyzing(false)
    }, 2000)
  }

  const categories = [
    {
      name: 'Speed',
      icon: '⚡',
      description: 'Page loading performance',
      key: 'speed',
    },
    {
      name: 'SEO',
      icon: '📈',
      description: 'Search engine optimization',
      key: 'seo',
    },
    {
      name: 'Mobile Friendly',
      icon: '📱',
      description: 'Mobile responsiveness',
      key: 'mobile',
    },
    {
      name: 'UX',
      icon: '✨',
      description: 'User experience quality',
      key: 'ux',
    },
  ]

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
            Website Health Check 🔍
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Check your website's performance, SEO, mobile-friendliness, and UX. Get instant insights and improvement tips.
          </motion.p>
        </div>
      </div>

      {/* Input Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 border-2 border-primary-200 shadow-lg"
            >
              <form onSubmit={handleAnalyze} className="space-y-6">
                <div>
                  <label htmlFor="url" className="block text-lg font-semibold text-gray-900 mb-3">
                    Enter Your Website URL
                  </label>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="text"
                      id="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="https://example.com"
                      className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none text-gray-900 text-lg"
                      required
                    />
                    <motion.button
                      type="submit"
                      disabled={isAnalyzing}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold text-lg hover:from-primary-700 hover:to-accent-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isAnalyzing ? 'Analyzing...' : 'Check Health'}
                    </motion.button>
                  </div>
                  <p className="mt-3 text-sm text-gray-600">
                    💡 This is a simulation. Enter any URL to see how the health check works.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Loading State */}
      <AnimatePresence>
        {isAnalyzing && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="section-padding bg-gray-50"
          >
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="inline-block text-6xl mb-4"
                >
                  🔄
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Analyzing Your Website...
                </h3>
                <p className="text-gray-600">
                  Checking speed, SEO, mobile-friendliness, and UX
                </p>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Results Section */}
      <AnimatePresence>
        {results && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="section-padding bg-gray-50"
          >
            <div className="container-custom">
              {/* Overall Score */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto mb-12"
              >
                <div className="bg-white rounded-2xl p-8 md:p-12 border-2 border-primary-200 shadow-xl text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Overall Health Score
                  </h2>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                    className="relative inline-block mb-6"
                  >
                    <div className="relative w-48 h-48 mx-auto">
                      <svg className="transform -rotate-90 w-48 h-48">
                        <circle
                          cx="96"
                          cy="96"
                          r="88"
                          stroke="currentColor"
                          strokeWidth="12"
                          fill="none"
                          className="text-gray-200"
                        />
                        <motion.circle
                          cx="96"
                          cy="96"
                          r="88"
                          stroke="currentColor"
                          strokeWidth="12"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 88}`}
                          strokeDashoffset={`${2 * Math.PI * 88 * (1 - results.overall / 100)}`}
                          strokeLinecap="round"
                          className={getScoreColor(results.overall)}
                          initial={{ strokeDashoffset: 2 * Math.PI * 88 }}
                          animate={{ strokeDashoffset: 2 * Math.PI * 88 * (1 - results.overall / 100) }}
                          transition={{ duration: 1.5, ease: 'easeOut' }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className={`text-5xl font-bold ${getScoreColor(results.overall)}`}>
                            {results.overall}
                          </div>
                          <div className="text-sm text-gray-600">/ 100</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <p className={`text-lg font-semibold ${getScoreColor(results.overall)}`}>
                    {getScoreLabel(results.overall)}
                  </p>
                  <p className="text-gray-600 mt-2">
                    {results.url}
                  </p>
                </div>
              </motion.div>

              {/* Category Scores */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {categories.map((category, index) => {
                  const score = results.scores[category.key]
                  const tips = getTips(category.key, score)
                  
                  return (
                    <motion.div
                      key={category.key}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{category.icon}</span>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">
                              {category.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {category.description}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-3xl font-bold ${getScoreColor(score)}`}>
                            {score}
                          </div>
                          <div className="text-xs text-gray-500">/ 100</div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <motion.div
                            className={`h-full ${getScoreBgColor(score)} rounded-full`}
                            initial={{ width: 0 }}
                            animate={{ width: `${score}%` }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                          />
                        </div>
                      </div>

                      {/* Tips */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">
                          💡 Improvement Tips:
                        </h4>
                        {tips.slice(0, 2).map((tip, tipIndex) => (
                          <div key={tipIndex} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-primary-600 mt-0.5">•</span>
                            <span>{tip}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Detailed Tips Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="max-w-4xl mx-auto mb-12"
              >
                <div className="bg-white rounded-xl p-8 border-2 border-primary-200 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Detailed Improvement Recommendations
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categories.map((category) => {
                      const score = results.scores[category.key]
                      const tips = getTips(category.key, score)
                      
                      return (
                        <div key={category.key} className="space-y-3">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-2xl">{category.icon}</span>
                            <h4 className="font-bold text-gray-900">{category.name}</h4>
                            <span className={`text-sm font-semibold ${getScoreColor(score)}`}>
                              ({score}/100)
                            </span>
                          </div>
                          <ul className="space-y-2">
                            {tips.map((tip, index) => (
                              <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                                <span className="text-primary-600 mt-0.5">✓</span>
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="max-w-2xl mx-auto text-center"
              >
                <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white">
                  <h3 className="text-3xl font-bold mb-4">
                    Want Professional Help?
                  </h3>
                  <p className="text-xl text-primary-100 mb-6">
                    Get a free consultation with our experts. We'll analyze your website and provide actionable recommendations.
                  </p>
                  <Button href="/contact/" size="lg" className="bg-white text-primary-700 hover:bg-gray-100">
                    Get Free Website Advice 🚀
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Info Section */}
      {!results && !isAnalyzing && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <SectionTitle
                title="What We Check"
                subtitle="Health Metrics"
                center
                className="mb-12"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.key}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-md"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-4xl">{category.icon}</span>
                      <h3 className="text-xl font-bold text-gray-900">
                        {category.name}
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      {category.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

