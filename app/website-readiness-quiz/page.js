'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '@/components/common/Button'

export default function WebsiteReadinessQuiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)

  const questions = [
    {
      id: 'businessType',
      question: 'What type of business do you have?',
      options: [
        { value: 'retail', label: 'Retail / E-commerce', icon: '🛒' },
        { value: 'service', label: 'Service Provider', icon: '🔧' },
        { value: 'restaurant', label: 'Restaurant / Food', icon: '🍽️' },
        { value: 'consulting', label: 'Consulting / Professional', icon: '💼' },
        { value: 'creative', label: 'Creative / Portfolio', icon: '🎨' },
        { value: 'other', label: 'Other', icon: '🏢' },
      ],
    },
    {
      id: 'targetAudience',
      question: 'Who is your target audience?',
      options: [
        { value: 'local', label: 'Local customers', icon: '📍' },
        { value: 'national', label: 'National market', icon: '🗺️' },
        { value: 'global', label: 'Global audience', icon: '🌍' },
        { value: 'b2b', label: 'Other businesses (B2B)', icon: '🤝' },
        { value: 'mixed', label: 'Mixed audience', icon: '👥' },
      ],
    },
    {
      id: 'budget',
      question: 'What\'s your budget range?',
      options: [
        { value: 'low', label: 'Under $2,000', icon: '💰', description: 'Basic website' },
        { value: 'medium', label: '$2,000 - $10,000', icon: '💵', description: 'Standard website' },
        { value: 'high', label: '$10,000 - $25,000', icon: '💎', description: 'Premium website' },
        { value: 'enterprise', label: '$25,000+', icon: '🏆', description: 'Enterprise solution' },
      ],
    },
    {
      id: 'growthGoal',
      question: 'What\'s your main growth goal?',
      options: [
        { value: 'online', label: 'Establish online presence', icon: '🌐' },
        { value: 'sales', label: 'Increase sales / revenue', icon: '📈' },
        { value: 'branding', label: 'Build brand awareness', icon: '✨' },
        { value: 'leads', label: 'Generate leads', icon: '📞' },
        { value: 'info', label: 'Share information', icon: '📚' },
      ],
    },
  ]

  const handleAnswer = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value })
    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300)
    } else {
      calculateResult({ ...answers, [questionId]: value })
    }
  }

  const calculateResult = (finalAnswers) => {
    const { businessType, targetAudience, budget, growthGoal } = finalAnswers

    // Determine solution based on answers
    let solution = {
      type: 'Basic Website',
      title: 'You\'re Ready for a Simple Website!',
      description: 'A clean, professional website will help establish your online presence.',
      why: 'Based on your answers, a simple website is perfect for getting started online.',
      features: ['Contact form', 'About page', 'Service listings', 'Mobile-friendly design'],
    }

    if (budget === 'enterprise' || (budget === 'high' && targetAudience === 'global')) {
      solution = {
        type: 'Enterprise Platform',
        title: 'You Need a Comprehensive Digital Platform!',
        description: 'Your business needs a full-featured website with advanced capabilities.',
        why: 'With your budget and global reach, you need a platform that can scale and handle complex requirements.',
        features: ['Custom features', 'Multi-language support', 'Advanced analytics', 'API integrations', 'Scalable infrastructure'],
      }
    } else if (budget === 'high' || (budget === 'medium' && growthGoal === 'sales')) {
      solution = {
        type: 'E-commerce Website',
        title: 'You\'re Ready for an E-commerce Platform!',
        description: 'An online store will help you reach more customers and increase sales.',
        why: 'Your goal to increase sales combined with your budget makes an e-commerce website the perfect choice.',
        features: ['Product catalog', 'Shopping cart', 'Payment gateway', 'Order management', 'Inventory tracking'],
      }
    } else if (businessType === 'service' && growthGoal === 'leads') {
      solution = {
        type: 'Lead Generation Website',
        title: 'You Need a Lead-Focused Website!',
        description: 'A website designed to capture and convert visitors into customers.',
        why: 'Your focus on generating leads means you need strategic CTAs, forms, and conversion-optimized pages.',
        features: ['Lead capture forms', 'Landing pages', 'Booking system', 'Testimonials', 'Case studies'],
      }
    } else if (budget === 'medium' || (budget === 'low' && targetAudience === 'local')) {
      solution = {
        type: 'Professional Website',
        title: 'You\'re Ready for a Professional Website!',
        description: 'A well-designed website that showcases your business professionally.',
        why: 'Your budget and local focus make a professional website the ideal starting point for your business.',
        features: ['Responsive design', 'SEO optimization', 'Contact forms', 'Social media integration', 'Blog section'],
      }
    }

    setResult(solution)
  }

  const resetQuiz = () => {
    setCurrentStep(0)
    setAnswers({})
    setResult(null)
  }

  const progress = ((currentStep + 1) / questions.length) * 100

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
            Is Your Business Ready for a Website?
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Take this fun quiz to discover what type of website your business needs. No sales pitch, just honest insights.
          </motion.p>
        </div>
      </div>

      {/* Quiz Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {!result ? (
              <>
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-700">
                      Question {currentStep + 1} of {questions.length}
                    </span>
                    <span className="text-sm text-gray-500">
                      {Math.round(progress)}% Complete
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                      className="h-full bg-gradient-to-r from-primary-600 to-accent-600 rounded-full"
                    />
                  </div>
                </div>

                {/* Question */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 border-2 border-primary-200">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                        {questions[currentStep].question}
                      </h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {questions[currentStep].options.map((option, index) => (
                          <motion.button
                            key={option.value}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleAnswer(questions[currentStep].id, option.value)}
                            className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary-400 hover:shadow-lg transition-all text-left group"
                          >
                            <div className="flex items-start gap-4">
                              <div className="text-4xl group-hover:scale-110 transition-transform">
                                {option.icon}
                              </div>
                              <div className="flex-1">
                                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                                  {option.label}
                                </h3>
                                {option.description && (
                                  <p className="text-sm text-gray-600">{option.description}</p>
                                )}
                              </div>
                              <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1, x: 5 }}
                                className="text-primary-600"
                              >
                                →
                              </motion.div>
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </>
            ) : (
              /* Results */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-green-50 to-primary-50 rounded-2xl p-8 md:p-12 border-2 border-green-300"
              >
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                    className="text-6xl mb-4"
                  >
                    🎉
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {result.title}
                  </h2>
                  <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-semibold mb-4">
                    {result.type}
                  </div>
                  <p className="text-xl text-gray-700 mb-6">
                    {result.description}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 mb-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Why This Solution?</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {result.why}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 mb-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">What You'll Get:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {result.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <span className="text-green-500 font-bold">✓</span>
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <p className="text-gray-600">
                    Want to discuss your idea and get a custom quote?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button href="/contact/" size="lg">
                      Discuss Your Idea
                    </Button>
                    <button
                      onClick={resetQuiz}
                      className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                    >
                      Take Quiz Again
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      {!result && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Did You Know? 🤔
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    stat: '75%',
                    fact: 'of users judge business credibility by website design',
                  },
                  {
                    stat: '3 seconds',
                    fact: 'is all you have before users decide to stay or leave',
                  },
                  {
                    stat: '88%',
                    fact: 'of consumers research online before making a purchase',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 border-2 border-gray-200 text-center"
                  >
                    <div className="text-4xl font-bold text-primary-600 mb-2">
                      {item.stat}
                    </div>
                    <div className="text-gray-700 text-sm">
                      {item.fact}
                    </div>
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

