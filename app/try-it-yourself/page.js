'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '@/components/common/SectionTitle'
import Button from '@/components/common/Button'

export default function TryItYourself() {
  // Website Cost Estimator State
  const [pages, setPages] = useState(5)
  const [features, setFeatures] = useState(3)
  const [design, setDesign] = useState(2)
  const [estimatedCost, setEstimatedCost] = useState(0)

  // SEO Score Checker State
  const [seoInputs, setSeoInputs] = useState({
    title: '',
    description: '',
    keywords: '',
    mobileFriendly: false,
    fastLoading: false,
  })
  const [seoScore, setSeoScore] = useState(0)

  // Brand Color Palette Generator State
  const [primaryColor, setPrimaryColor] = useState('#3b82f6')
  const [secondaryColor, setSecondaryColor] = useState('#f59e0b')
  const [generatedPalette, setGeneratedPalette] = useState([])

  // Website Speed Simulator State
  const [speedType, setSpeedType] = useState('fast')

  // Calculate Website Cost
  useEffect(() => {
    const baseCost = 2000
    const pageCost = pages * 300
    const featureCost = features * 500
    // Design complexity: 1 = Simple (500), 2 = Standard (1200), 3 = Premium (2000)
    const designCostMap = { 1: 500, 2: 1200, 3: 2000 }
    const designCost = designCostMap[design] || 1200
    const total = baseCost + pageCost + featureCost + designCost
    setEstimatedCost(total)
  }, [pages, features, design])

  // Calculate SEO Score
  useEffect(() => {
    let score = 0
    if (seoInputs.title.length >= 30 && seoInputs.title.length <= 60) score += 25
    if (seoInputs.description.length >= 120 && seoInputs.description.length <= 160) score += 25
    if (seoInputs.keywords.split(',').filter(k => k.trim()).length >= 3) score += 15
    if (seoInputs.mobileFriendly) score += 20
    if (seoInputs.fastLoading) score += 15
    setSeoScore(score)
  }, [seoInputs])

  // Color utility functions
  const lightenColor = (color, percent) => {
    const num = parseInt(color.replace('#', ''), 16)
    const r = Math.min(255, (num >> 16) + Math.round(255 * percent))
    const g = Math.min(255, ((num >> 8) & 0x00FF) + Math.round(255 * percent))
    const b = Math.min(255, (num & 0x0000FF) + Math.round(255 * percent))
    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`
  }

  const darkenColor = (color, percent) => {
    const num = parseInt(color.replace('#', ''), 16)
    const r = Math.max(0, (num >> 16) - Math.round(255 * percent))
    const g = Math.max(0, ((num >> 8) & 0x00FF) - Math.round(255 * percent))
    const b = Math.max(0, (num & 0x0000FF) - Math.round(255 * percent))
    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`
  }

  // Generate Color Palette
  useEffect(() => {
    const colors = [
      primaryColor,
      secondaryColor,
      lightenColor(primaryColor, 0.2),
      darkenColor(primaryColor, 0.2),
      lightenColor(secondaryColor, 0.2),
      darkenColor(secondaryColor, 0.2),
    ]
    setGeneratedPalette(colors)
  }, [primaryColor, secondaryColor])

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
            Try IT Yourself
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Interactive tools to understand IT concepts. Play, experiment, and learn how technology decisions impact your business.
          </motion.p>
        </div>
      </div>

      {/* Website Cost Estimator */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Website Cost Estimator"
            subtitle="See How Features Affect Price"
            center
            className="mb-12"
          />

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200"
            >
              <div className="space-y-8">
                {/* Number of Pages */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-lg font-semibold text-gray-900">
                      Number of Pages
                    </label>
                    <span className="text-2xl font-bold text-blue-600">{pages}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={pages}
                    onChange={(e) => {
                      setPages(parseInt(e.target.value))
                    }}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>1 page</span>
                    <span>20 pages</span>
                  </div>
                </div>

                {/* Number of Features */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-lg font-semibold text-gray-900">
                      Special Features
                    </label>
                    <span className="text-2xl font-bold text-blue-600">{features}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={features}
                    onChange={(e) => {
                      setFeatures(parseInt(e.target.value))
                    }}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>Basic</span>
                    <span>Advanced</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    (Contact forms, payment gateways, user accounts, etc.)
                  </p>
                </div>

                {/* Design Complexity */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-lg font-semibold text-gray-900">
                      Design Complexity
                    </label>
                    <span className="text-2xl font-bold text-blue-600">
                      {design === 1 ? 'Simple' : design === 2 ? 'Standard' : 'Premium'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="3"
                    value={design}
                    onChange={(e) => {
                      setDesign(parseInt(e.target.value))
                    }}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>Simple</span>
                    <span>Premium</span>
                  </div>
                </div>

                {/* Estimated Cost Display */}
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="bg-white rounded-xl p-6 border-2 border-blue-300 text-center"
                >
                  <p className="text-gray-600 mb-2">Estimated Cost</p>
                  <p className="text-4xl font-bold text-blue-600 mb-2">
                    ${estimatedCost.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500">
                    *This is an estimate. Actual costs may vary based on specific requirements.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-center"
            >
              <div className="inline-block bg-blue-100 border-2 border-blue-300 rounded-xl px-6 py-4">
                <p className="text-lg font-semibold text-blue-900">
                  💡 What You Learn: More pages and features increase cost, but also add value. Simple sites start around $2,000, while complex sites can reach $15,000+.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO Score Checker */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="SEO Score Checker"
            subtitle="Test Your Website's SEO Potential"
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
              <div className="space-y-6">
                {/* Title Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Page Title ({seoInputs.title.length}/60 characters)
                  </label>
                  <input
                    type="text"
                    value={seoInputs.title}
                    onChange={(e) => {
                      setSeoInputs({ ...seoInputs, title: e.target.value })
                    }}
                    placeholder="Enter your page title..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    maxLength={60}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {seoInputs.title.length < 30 ? '⚠️ Too short (aim for 30-60 characters)' : 
                     seoInputs.title.length > 60 ? '⚠️ Too long' : '✅ Good length'}
                  </p>
                </div>

                {/* Description Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Meta Description ({seoInputs.description.length}/160 characters)
                  </label>
                  <textarea
                    value={seoInputs.description}
                    onChange={(e) => {
                      setSeoInputs({ ...seoInputs, description: e.target.value })
                    }}
                    placeholder="Describe your page in 120-160 characters..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none resize-none"
                    rows="3"
                    maxLength={160}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {seoInputs.description.length < 120 ? '⚠️ Too short (aim for 120-160 characters)' : 
                     seoInputs.description.length > 160 ? '⚠️ Too long' : '✅ Good length'}
                  </p>
                </div>

                {/* Keywords Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Keywords (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={seoInputs.keywords}
                    onChange={(e) => {
                      setSeoInputs({ ...seoInputs, keywords: e.target.value })
                    }}
                    placeholder="keyword1, keyword2, keyword3..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Found {seoInputs.keywords.split(',').filter(k => k.trim()).length} keywords
                  </p>
                </div>

                {/* Checkboxes */}
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={seoInputs.mobileFriendly}
                      onChange={(e) => {
                        setSeoInputs({ ...seoInputs, mobileFriendly: e.target.checked })
                      }}
                      className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                    />
                    <span className="text-gray-700">Mobile-friendly design</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={seoInputs.fastLoading}
                      onChange={(e) => {
                        setSeoInputs({ ...seoInputs, fastLoading: e.target.checked })
                      }}
                      className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                    />
                    <span className="text-gray-700">Fast loading speed</span>
                  </label>
                </div>

                {/* SEO Score Display */}
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-300 text-center"
                >
                  <p className="text-gray-700 mb-2 font-semibold">Your SEO Score</p>
                  <div className="relative">
                    <div className="text-6xl font-bold text-green-600 mb-2">{seoScore}</div>
                    <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${seoScore}%` }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-r from-green-500 to-green-600 h-4 rounded-full"
                      />
                    </div>
                    <p className="text-sm text-gray-600">
                      {seoScore < 50 ? '⚠️ Needs Improvement' : 
                       seoScore < 80 ? '✅ Good' : '🌟 Excellent'}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-center"
            >
              <div className="inline-block bg-green-100 border-2 border-green-300 rounded-xl px-6 py-4">
                <p className="text-lg font-semibold text-green-900">
                  💡 What You Learn: SEO isn't just keywords—title length, descriptions, mobile-friendliness, and speed all matter. Google rewards complete, user-friendly sites.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Color Palette Generator */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Brand Color Palette Generator"
            subtitle="Create Your Perfect Color Scheme"
            center
            className="mb-12"
          />

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border-2 border-purple-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Primary Color */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-4">
                    Primary Color
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="color"
                      value={primaryColor}
                      onChange={(e) => {
                        setPrimaryColor(e.target.value)
                      }}
                      className="w-20 h-20 rounded-lg border-2 border-gray-300 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={primaryColor}
                      onChange={(e) => {
                        setPrimaryColor(e.target.value)
                      }}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg font-mono text-sm"
                    />
                  </div>
                </div>

                {/* Secondary Color */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-4">
                    Secondary Color
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="color"
                      value={secondaryColor}
                      onChange={(e) => {
                        setSecondaryColor(e.target.value)
                      }}
                      className="w-20 h-20 rounded-lg border-2 border-gray-300 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={secondaryColor}
                      onChange={(e) => {
                        setSecondaryColor(e.target.value)
                      }}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg font-mono text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Generated Palette */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Color Palette</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                  {generatedPalette.map((color, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="cursor-pointer"
                    >
                      <div
                        className="w-full h-24 rounded-lg border-2 border-gray-300 mb-2"
                        style={{ backgroundColor: color }}
                      />
                      <p className="text-xs font-mono text-center text-gray-600">{color}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Preview */}
              <div className="mt-8 bg-white rounded-xl p-6 border-2 border-purple-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Preview</h3>
                <div className="space-y-4">
                  <div
                    className="p-4 rounded-lg text-white font-semibold"
                    style={{ backgroundColor: primaryColor }}
                  >
                    Primary Button
                  </div>
                  <div
                    className="p-4 rounded-lg text-white font-semibold"
                    style={{ backgroundColor: secondaryColor }}
                  >
                    Secondary Button
                  </div>
                  <div className="p-4 rounded-lg border-2" style={{ borderColor: primaryColor }}>
                    <p className="font-semibold" style={{ color: primaryColor }}>
                      Text with Primary Color
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-center"
            >
              <div className="inline-block bg-purple-100 border-2 border-purple-300 rounded-xl px-6 py-4">
                <p className="text-lg font-semibold text-purple-900">
                  💡 What You Learn: Colors create emotions and recognition. Consistent brand colors increase brand recognition by 80%. Choose 2-3 main colors and use them everywhere.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Website Speed Simulator */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Website Speed Simulator"
            subtitle="See How Speed Affects User Experience"
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
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-900 mb-4">
                  Select Website Speed
                </label>
                <div className="flex gap-4">
                  {['slow', 'medium', 'fast'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setSpeedType(type)}
                      className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
                        speedType === type
                          ? 'bg-orange-500 text-white shadow-lg scale-105'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Speed Comparison */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Loading Animation</h3>
                  <div className="bg-gray-100 rounded-lg p-6 relative overflow-hidden">
                    <motion.div
                      key={speedType}
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{
                        duration: speedType === 'slow' ? 5 : speedType === 'medium' ? 2 : 0.5,
                        ease: 'linear',
                      }}
                      className={`h-8 rounded-lg ${
                        speedType === 'slow' ? 'bg-red-500' :
                        speedType === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-semibold text-gray-700">
                        {speedType === 'slow' ? 'Loading... (5 seconds)' :
                         speedType === 'medium' ? 'Loading... (2 seconds)' :
                         'Loading... (0.5 seconds)'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stats Comparison */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {speedType === 'slow' ? '40%' :
                       speedType === 'medium' ? '70%' : '95%'}
                    </div>
                    <div className="text-sm text-gray-600">Users Stay</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {speedType === 'slow' ? '-7%' :
                       speedType === 'medium' ? '+2%' : '+10%'}
                    </div>
                    <div className="text-sm text-gray-600">Conversion Rate</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {speedType === 'slow' ? 'Low' :
                       speedType === 'medium' ? 'Medium' : 'High'}
                    </div>
                    <div className="text-sm text-gray-600">SEO Ranking</div>
                  </div>
                </div>

                {/* Visual Comparison */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">User Experience Comparison</h3>
                  <div className="space-y-4">
                    {[
                      { label: 'Slow Site (5s)', speed: 'slow', color: 'red' },
                      { label: 'Medium Site (2s)', speed: 'medium', color: 'yellow' },
                      { label: 'Fast Site (0.5s)', speed: 'fast', color: 'green' },
                    ].map((item) => (
                      <div key={item.speed} className="flex items-center gap-4">
                        <div className="w-24 text-sm font-medium text-gray-700">{item.label}</div>
                        <div className="flex-1 bg-gray-200 rounded-full h-4 relative overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: item.speed === 'slow' ? '40%' : item.speed === 'medium' ? '70%' : '95%' }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className={`h-4 rounded-full bg-${item.color}-500`}
                          />
                        </div>
                        <div className="w-16 text-sm font-semibold text-gray-700 text-right">
                          {item.speed === 'slow' ? '40%' : item.speed === 'medium' ? '70%' : '95%'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-center"
            >
              <div className="inline-block bg-orange-100 border-2 border-orange-300 rounded-xl px-6 py-4">
                <p className="text-lg font-semibold text-orange-900">
                  💡 What You Learn: Every second counts! 1 second delay can drop conversions by 7%. Fast sites keep 95% of visitors, while slow sites lose 60%. Speed = money.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Build Your Digital Presence?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Now that you've seen how IT decisions work, let's discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/it-without-headache/" size="lg">
                Learn More About IT
              </Button>
              <Button href="/contact/" size="lg">
                Get Started
              </Button>
              <Button href="/services/" variant="accent" size="lg">
                Explore Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

