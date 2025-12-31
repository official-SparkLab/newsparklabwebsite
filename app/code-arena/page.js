'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '@/components/common/SectionTitle'
import CodeEditor from '@/components/code-arena/CodeEditor'
import ChallengeDisplay from '@/components/code-arena/ChallengeDisplay'
import { executeCode } from '@/components/code-arena/LanguageExecutor'
import { challenges, getAllChallenges, getChallengesByLanguage, getChallengesByLevel, getChallengeById } from '@/data/challenges'

export default function CodeArena() {
  const [selectedLanguage, setSelectedLanguage] = useState(null) // null means language not selected yet
  const [selectedLevel, setSelectedLevel] = useState('beginner')
  const [selectedChallenge, setSelectedChallenge] = useState(null)
  const [userCode, setUserCode] = useState('')
  const [output, setOutput] = useState('')
  const [testResults, setTestResults] = useState(null)
  const [showHint, setShowHint] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)
  const [completedChallenges, setCompletedChallenges] = useState([])
  const [xp, setXp] = useState(0)
  const [level, setLevel] = useState(1)
  const [showCelebration, setShowCelebration] = useState(false)
  const [showLevelCelebration, setShowLevelCelebration] = useState(false)
  const [completedLevel, setCompletedLevel] = useState(null)

  // Get completed challenges count for selected language
  const getLanguageCompletedCount = () => {
    if (!selectedLanguage) return 0
    return completedChallenges.filter(id => {
      // Check if challenge ID belongs to selected language
      const challenge = getChallengeById(id)
      return challenge && challenge.language === selectedLanguage
    }).length
  }

  const languageCompletedCount = getLanguageCompletedCount()

  useEffect(() => {
    // Load progress from localStorage
    const saved = localStorage.getItem('codeArenaProgress')
    if (saved) {
      const progress = JSON.parse(saved)
      setCompletedChallenges(progress.completed || [])
      setXp(progress.xp || 0)
      setLevel(progress.level || 1)
    }
  }, [])

  // Auto-advance function
  const autoAdvanceToNextChallenge = (currentChallenge, currentLevel, completedList) => {
    if (!selectedLanguage) return
    const levelChallenges = getChallengesByLevel(selectedLanguage, currentLevel) || []
    
    // Find current challenge index
    const currentIndex = levelChallenges.findIndex(c => c.id === currentChallenge.id)
    
    // Check if there's a next challenge in the same level
    if (currentIndex < levelChallenges.length - 1) {
      // Move to next challenge in same level
      const nextChallenge = levelChallenges[currentIndex + 1]
      setSelectedChallenge(nextChallenge)
      setUserCode(nextChallenge.starterCode)
      setOutput('🎉 Challenge completed! Loading next challenge...')
      setTestResults(null)
      setShowHint(false)
      setShowExplanation(false)
      
      // Clear output after a moment
      setTimeout(() => {
        setOutput('')
      }, 2000)
    } else {
      // All challenges in this level completed, move to next level
      const levels = ['beginner', 'intermediate', 'advanced']
      const currentLevelIndex = levels.indexOf(currentLevel)
      
      if (currentLevelIndex < levels.length - 1) {
        const nextLevel = levels[currentLevelIndex + 1]
        const nextLevelChallenges = getChallengesByLevel(selectedLanguage, nextLevel) || []
        
        if (nextLevelChallenges.length > 0) {
          // Auto-advance to next level
          setOutput('🎉 Level completed! Moving to next level...')
          setTimeout(() => {
            setSelectedLevel(nextLevel)
            const firstChallenge = nextLevelChallenges[0]
            setSelectedChallenge(firstChallenge)
            setUserCode(firstChallenge.starterCode)
            setOutput('')
            setTestResults(null)
            setShowHint(false)
            setShowExplanation(false)
          }, 2000)
        } else {
          setOutput('🎉 Congratulations! You completed all challenges!')
        }
      } else {
        setOutput('🎉 Congratulations! You completed all challenges in all levels!')
      }
    }
  }

  useEffect(() => {
    // Auto-select first challenge when level changes (auto-start)
    if (!selectedLanguage) return
    
    // Check if the selected level is unlocked
    const unlocked = isLevelUnlocked(selectedLevel)
    if (!unlocked) {
      // If level is locked, reset to beginner
      if (selectedLevel !== 'beginner') {
        setSelectedLevel('beginner')
      }
      return
    }
    
    const levelChallenges = getChallengesByLevel(selectedLanguage, selectedLevel) || []
    if (levelChallenges && levelChallenges.length > 0) {
      // Always automatically select the first challenge of the level
      const challengeToSelect = levelChallenges[0]
      
      setSelectedChallenge(challengeToSelect)
      setUserCode(challengeToSelect.starterCode)
      setOutput('')
      setTestResults(null)
      setShowHint(false)
      setShowExplanation(false)
    }
  }, [selectedLevel, selectedLanguage, completedChallenges])

  useEffect(() => {
    // Set starter code when challenge changes
    if (selectedChallenge) {
      setUserCode(selectedChallenge.starterCode)
      setOutput('')
      setTestResults(null)
      setShowHint(false)
      setShowExplanation(false)
    }
  }, [selectedChallenge])

  // Keyboard shortcut: Ctrl+Enter to run code
  useEffect(() => {
    if (!selectedChallenge) return
    
    const handleKeyPress = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault()
        if (userCode.trim()) {
          runCode()
        }
      }
    }
    
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [selectedChallenge, userCode])

  const runCode = () => {
    if (!selectedChallenge || !selectedLanguage) return

    try {
      // Use language-specific executor
      const executionResult = executeCode(userCode, selectedLanguage, selectedChallenge.tests)
      
      if (executionResult.error) {
        setOutput(`❌ Error: ${executionResult.error}`)
        setTestResults([])
        return
      }
      
      const results = executionResult.results
      const allPassed = results.every(r => r.passed)
      setTestResults(results)
      
      // Show language-specific note if available
      if (executionResult.note) {
        setOutput(executionResult.note + '\n\n' + (allPassed ? '✅ All tests passed! Great job!' : `❌ ${results.filter(r => !r.passed).length} out of ${results.length} tests failed. Keep trying!`))
      } else {
        setOutput(allPassed ? '✅ All tests passed! Great job!' : `❌ ${results.filter(r => !r.passed).length} out of ${results.length} tests failed. Keep trying!`)
      }
      
      if (allPassed) {
        // Award XP and mark as completed
        if (!completedChallenges.includes(selectedChallenge.id)) {
          // Trigger flower celebration animation
          setShowCelebration(true)
          setTimeout(() => setShowCelebration(false), 3000)
          
          const newCompleted = [...completedChallenges, selectedChallenge.id]
          setCompletedChallenges(newCompleted)
          
          // Check if level is completed
          const levelChallenges = getChallengesByLevel(selectedLanguage, selectedLevel) || []
          const completedInLevel = levelChallenges.filter(c => newCompleted.includes(c.id))
          const isLevelComplete = levelChallenges.length > 0 && completedInLevel.length === levelChallenges.length
          
          if (isLevelComplete) {
            // Trigger level completion celebration
            setCompletedLevel(selectedLevel)
            setShowLevelCelebration(true)
            setTimeout(() => setShowLevelCelebration(false), 5000)
          }
          
          const xpGain = selectedChallenge.difficulty === 'beginner' ? 10 : 
                        selectedChallenge.difficulty === 'intermediate' ? 20 : 30
          const newXp = xp + xpGain
          setXp(newXp)
          
          // Level up every 100 XP
          const newLevel = Math.floor(newXp / 100) + 1
          setLevel(newLevel)
          
          // Save progress
          localStorage.setItem('codeArenaProgress', JSON.stringify({
            completed: newCompleted,
            xp: newXp,
            level: newLevel,
          }))

          // Auto-advance to next challenge after 5 seconds
          setTimeout(() => {
            autoAdvanceToNextChallenge(selectedChallenge, selectedLevel, newCompleted)
          }, isLevelComplete ? 5000 : 5000)
        }
      }
    } catch (error) {
      setOutput(`❌ Error: ${error.message}`)
      setTestResults([])
    }
  }

  const resetCode = () => {
    if (selectedChallenge) {
      setUserCode(selectedChallenge.starterCode)
      setOutput('')
      setTestResults(null)
    }
  }

  const getFileExtension = (language) => {
    const extensions = {
      javascript: 'js',
      python: 'py',
      java: 'java',
      react: 'jsx',
      php: 'php',
      html: 'html',
      css: 'css',
    }
    return extensions[language] || 'txt'
  }

  // Get challenges for selected language and level
  const currentLevelChallenges = selectedLanguage 
    ? getChallengesByLevel(selectedLanguage, selectedLevel) || []
    : []
  
  const progress = currentLevelChallenges.length > 0
    ? (currentLevelChallenges.filter(c => completedChallenges.includes(c.id)).length / currentLevelChallenges.length) * 100
    : 0

  // Check if levels are unlocked (step-by-step progression)
  const isLevelUnlocked = (level) => {
    if (!selectedLanguage) return false
    
    // Beginner is always unlocked
    if (level === 'beginner') return true
    
    // Intermediate is unlocked if all Beginner challenges are completed
    if (level === 'intermediate') {
      const beginnerChallenges = getChallengesByLevel(selectedLanguage, 'beginner') || []
      const completedBeginner = beginnerChallenges.filter(c => completedChallenges.includes(c.id))
      return beginnerChallenges.length > 0 && completedBeginner.length === beginnerChallenges.length
    }
    
    // Advanced is unlocked if all Intermediate challenges are completed
    if (level === 'advanced') {
      const intermediateChallenges = getChallengesByLevel(selectedLanguage, 'intermediate') || []
      const completedIntermediate = intermediateChallenges.filter(c => completedChallenges.includes(c.id))
      return intermediateChallenges.length > 0 && completedIntermediate.length === intermediateChallenges.length
    }
    
    return false
  }

  const getLevelCompletionCount = (level) => {
    if (!selectedLanguage) return { completed: 0, total: 0 }
    const levelChallenges = getChallengesByLevel(selectedLanguage, level) || []
    const completed = levelChallenges.filter(c => completedChallenges.includes(c.id)).length
    return { completed, total: levelChallenges.length }
  }

  // If language not selected, show language preference first
  if (!selectedLanguage) {
    const availableLanguages = [
      { 
        language: 'html', 
        label: 'HTML', 
        icon: '🌐', 
        description: 'Web page structure',
        gradient: 'from-red-400 via-red-500 to-red-600',
        bgGradient: 'from-red-50 to-red-100',
        borderColor: 'border-red-300',
        hoverBorder: 'hover:border-red-500',
        textColor: 'text-red-700',
      },
      { 
        language: 'css', 
        label: 'CSS', 
        icon: '🎨', 
        description: 'Style your web pages',
        gradient: 'from-pink-400 via-pink-500 to-pink-600',
        bgGradient: 'from-pink-50 to-pink-100',
        borderColor: 'border-pink-300',
        hoverBorder: 'hover:border-pink-500',
        textColor: 'text-pink-700',
      },
      { 
        language: 'javascript', 
        label: 'JavaScript', 
        icon: '🟨', 
        description: 'Master the language of the web',
        gradient: 'from-yellow-400 via-yellow-500 to-yellow-600',
        bgGradient: 'from-yellow-50 to-yellow-100',
        borderColor: 'border-yellow-300',
        hoverBorder: 'hover:border-yellow-500',
        textColor: 'text-yellow-700',
      },
    ]

    return (
      <>
        {/* Hero Section */}
        <div className="pt-24 pb-16 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
          <div className="container-custom text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl mb-4">⚔️</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Code Arena
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto mb-12">
                Choose your programming language and start coding challenges
              </p>
            </motion.div>
          </div>
        </div>

        {/* Language Selection - Redesigned */}
        <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-primary-50 relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-20 right-20 w-64 h-64 bg-primary-200/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute bottom-20 left-20 w-80 h-80 bg-accent-200/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
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
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="inline-block mb-4"
              >
                <div className="text-6xl mb-3">🎯</div>
              </motion.div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                Choose Your Language
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                Select a programming language to start your coding journey. Each language offers unique challenges to sharpen your skills.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                  🏆 105+ Challenges
                </span>
                <span className="px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold">
                  📚 7 Languages
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                  ⚡ Interactive Learning
                </span>
              </div>
            </motion.div>

            {/* Available Languages First - HTML, CSS, JavaScript */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Available Now</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {availableLanguages.map((lang, index) => {
                  const langChallenges = getChallengesByLanguage(lang.language)
                  const totalChallenges = (langChallenges.beginner?.length || 0) + 
                                        (langChallenges.intermediate?.length || 0) + 
                                        (langChallenges.advanced?.length || 0)
                  
                  return (
                    <motion.div
                      key={lang.language}
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: index * 0.15, type: 'spring', stiffness: 100 }}
                      onClick={() => setSelectedLanguage(lang.language)}
                      className={`group relative rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer bg-gradient-to-br ${lang.bgGradient} border-2 ${lang.borderColor} ${lang.hoverBorder} hover:shadow-2xl hover:scale-105`}
                      whileHover={{ y: -8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Gradient Overlay on Hover */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${lang.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />
                      
                      {/* Content */}
                      <div className="relative z-10 p-6">
                        {/* Icon with Background */}
                        <motion.div
                          className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/80 backdrop-blur-sm mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300"
                          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <span className="text-5xl">{lang.icon}</span>
                        </motion.div>
                        
                        {/* Language Name */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                          {lang.label}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {lang.description}
                        </p>
                        
                        {/* Challenge Count Badge */}
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-sm ${lang.textColor} text-sm font-semibold mb-4`}>
                          <span>📝</span>
                          <span>{totalChallenges} Challenges</span>
                        </div>
                        
                        {/* CTA Button */}
                        <motion.div
                          className={`flex items-center justify-between mt-4 pt-4 border-t-2 ${lang.borderColor} group-hover:border-opacity-50 transition-colors`}
                          whileHover={{ x: 5 }}
                        >
                          <span className={`font-bold ${lang.textColor} text-sm`}>
                            Start Learning
                          </span>
                          <motion.span
                            className={`text-xl ${lang.textColor}`}
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </motion.div>
                      </div>
                      
                      {/* Shine Effect on Hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                      />
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Coming Soon Languages */}
            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">More Languages Coming Soon</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {[
                { 
                  language: 'python', 
                  label: 'Python', 
                  icon: '🐍', 
                  description: 'Learn Python programming',
                  gradient: 'from-blue-400 via-blue-500 to-blue-600',
                  bgGradient: 'from-blue-50 to-blue-100',
                  borderColor: 'border-blue-300',
                  hoverBorder: 'hover:border-blue-500',
                  textColor: 'text-blue-700',
                  challengeCount: 15,
                  available: false
                },
                { 
                  language: 'java', 
                  label: 'Java', 
                  icon: '☕', 
                  description: 'Object-oriented programming',
                  gradient: 'from-orange-400 via-orange-500 to-orange-600',
                  bgGradient: 'from-orange-50 to-orange-100',
                  borderColor: 'border-orange-300',
                  hoverBorder: 'hover:border-orange-500',
                  textColor: 'text-orange-700',
                  challengeCount: 15,
                  available: false
                },
                { 
                  language: 'react', 
                  label: 'React', 
                  icon: '⚛️', 
                  description: 'Build user interfaces',
                  gradient: 'from-cyan-400 via-cyan-500 to-cyan-600',
                  bgGradient: 'from-cyan-50 to-cyan-100',
                  borderColor: 'border-cyan-300',
                  hoverBorder: 'hover:border-cyan-500',
                  textColor: 'text-cyan-700',
                  challengeCount: 15,
                  available: false
                },
                { 
                  language: 'php', 
                  label: 'PHP', 
                  icon: '🐘', 
                  description: 'Server-side scripting',
                  gradient: 'from-purple-400 via-purple-500 to-purple-600',
                  bgGradient: 'from-purple-50 to-purple-100',
                  borderColor: 'border-purple-300',
                  hoverBorder: 'hover:border-purple-500',
                  textColor: 'text-purple-700',
                  challengeCount: 15,
                  available: false
                },
              ].map((lang, index) => {
                const langChallenges = getChallengesByLanguage(lang.language)
                const totalChallenges = (langChallenges.beginner?.length || 0) + 
                                      (langChallenges.intermediate?.length || 0) + 
                                      (langChallenges.advanced?.length || 0)
                
                return (
                  <motion.div
                    key={lang.language}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: index * 0.08, type: 'spring', stiffness: 100 }}
                    onClick={() => lang.available && setSelectedLanguage(lang.language)}
                    className={`group relative rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer ${
                      lang.available
                        ? `bg-gradient-to-br ${lang.bgGradient} border-2 ${lang.borderColor} ${lang.hoverBorder} hover:shadow-2xl hover:scale-105`
                        : 'bg-gray-100 border-2 border-gray-300 opacity-60 cursor-not-allowed'
                    }`}
                    whileHover={lang.available ? { y: -8, scale: 1.02 } : {}}
                    whileTap={lang.available ? { scale: 0.98 } : {}}
                  >
                    {/* Coming Soon Badge */}
                    {!lang.available && (
                      <div className="absolute top-4 right-4 bg-gray-500 text-white rounded-full px-3 py-1 text-xs font-bold shadow-lg z-20">
                        Coming Soon
                      </div>
                    )}
                    
                    {/* Gradient Overlay on Hover */}
                    {lang.available && (
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${lang.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />
                    )}
                    
                    {/* Content */}
                    <div className="relative z-10 p-6">
                      {/* Icon with Background */}
                      <motion.div
                        className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/80 backdrop-blur-sm mb-4 shadow-lg transition-all duration-300 ${
                          lang.available ? 'group-hover:shadow-xl' : 'grayscale opacity-50'
                        }`}
                        whileHover={lang.available ? { rotate: [0, -10, 10, -10, 0], scale: 1.1 } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        <span className="text-5xl">{lang.icon}</span>
                      </motion.div>
                      
                      {/* Language Name */}
                      <h3 className={`text-2xl font-bold mb-2 transition-colors ${
                        lang.available ? 'text-gray-900 group-hover:text-gray-800' : 'text-gray-500'
                      }`}>
                        {lang.label}
                      </h3>
                      
                      {/* Description */}
                      <p className={`text-sm mb-4 leading-relaxed ${
                        lang.available ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {lang.description}
                      </p>
                      
                      {/* Challenge Count Badge */}
                      {lang.available && (
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-sm ${lang.textColor} text-sm font-semibold mb-4`}>
                          <span>📝</span>
                          <span>{totalChallenges} Challenges</span>
                        </div>
                      )}
                      
                      {/* Coming Soon Message */}
                      {!lang.available && (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-200 text-gray-600 text-sm font-semibold mb-4">
                          <span>⏳</span>
                          <span>Available Soon</span>
                        </div>
                      )}
                      
                      {/* CTA Button */}
                      {lang.available && (
                        <motion.div
                          className={`flex items-center justify-between mt-4 pt-4 border-t-2 ${lang.borderColor} group-hover:border-opacity-50 transition-colors`}
                          whileHover={{ x: 5 }}
                        >
                          <span className={`font-bold ${lang.textColor} text-sm`}>
                            Start Learning
                          </span>
                          <motion.span
                            className={`text-xl ${lang.textColor}`}
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </motion.div>
                      )}
                    </div>
                    
                    {/* Shine Effect on Hover */}
                    {lang.available && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                      />
                    )}
                  </motion.div>
                )
              })}
              </div>
            </div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 text-center"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-gray-200 shadow-lg max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  🚀 Why Code Arena?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">💡</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Learn by Doing</h4>
                      <p className="text-sm text-gray-600">Practice with real coding challenges and improve your skills hands-on.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">🎯</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Progressive Learning</h4>
                      <p className="text-sm text-gray-600">Start from beginner and advance to expert level at your own pace.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">🏆</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Track Progress</h4>
                      <p className="text-sm text-gray-600">Earn XP, level up, and see your coding skills improve over time.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl mb-4">⚔️</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Code Arena
            </h1>
            <div className="flex flex-col items-center gap-4 mb-6">
              <p className="text-xl md:text-2xl text-primary-100 max-w-3xl text-center">
                Sharpen your {selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)} skills with interactive coding challenges
              </p>
              <motion.button
                onClick={() => setSelectedLanguage(null)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg text-white font-semibold transition-all border-2 border-white/30 flex items-center gap-2 shadow-lg"
              >
                <span className="text-lg">←</span>
                <span>Change Language</span>
              </motion.button>
            </div>
            
            {/* XP and Level Display */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4 border-2 border-white/30"
              >
                <div className="text-sm text-primary-100 mb-1">Level</div>
                <div className="text-3xl font-bold">{level}</div>
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4 border-2 border-white/30"
              >
                <div className="text-sm text-primary-100 mb-1">XP</div>
                <div className="text-3xl font-bold">{xp}</div>
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4 border-2 border-white/30"
              >
                <div className="text-sm text-primary-100 mb-1">Completed ({selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)})</div>
                <div className="text-3xl font-bold">{languageCompletedCount}</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Level Selection */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Choose Your Challenge Level"
            subtitle="Start Easy, Master Hard"
            center
            className="mb-8"
          />
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { level: 'beginner', label: 'Beginner', icon: '🌱', activeClass: 'bg-green-600', inactiveClass: 'bg-white', color: 'green' },
              { level: 'intermediate', label: 'Intermediate', icon: '🔥', activeClass: 'bg-orange-600', inactiveClass: 'bg-white', color: 'orange' },
              { level: 'advanced', label: 'Advanced', icon: '⚡', activeClass: 'bg-red-600', inactiveClass: 'bg-white', color: 'red' },
            ].map((item) => {
              const isUnlocked = isLevelUnlocked(item.level)
              const levelStats = getLevelCompletionCount(item.level)
              const isLocked = !isUnlocked
              
              return (
                <motion.div
                  key={item.level}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="relative"
                >
                  <motion.button
                    onClick={() => isUnlocked && setSelectedLevel(item.level)}
                    disabled={isLocked}
                    whileHover={isUnlocked ? { scale: 1.05, y: -5 } : {}}
                    whileTap={isUnlocked ? { scale: 0.95 } : {}}
                    className={`relative px-8 py-4 rounded-xl font-bold text-lg transition-all min-w-[180px] ${
                      isLocked
                        ? 'bg-gray-200 text-gray-400 border-2 border-gray-300 cursor-not-allowed opacity-60'
                        : selectedLevel === item.level
                        ? `${item.activeClass} text-white shadow-lg scale-105`
                        : `${item.inactiveClass} text-gray-700 border-2 border-gray-300 hover:border-primary-400`
                    }`}
                  >
                    {/* Lock Icon for locked levels */}
                    {isLocked && (
                      <div className="absolute -top-2 -right-2 bg-gray-500 text-white rounded-full p-1.5 shadow-lg">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                    
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{item.icon}</span>
                        <span>{item.label}</span>
                      </div>
                      
                      {/* Progress indicator */}
                      {isUnlocked && levelStats.total > 0 && (
                        <div className={`text-xs font-normal ${
                          selectedLevel === item.level ? 'text-white/90' : 'text-gray-500'
                        }`}>
                          {levelStats.completed} / {levelStats.total} completed
                        </div>
                      )}
                      
                      {/* Locked message */}
                      {isLocked && (
                        <div className="text-xs font-normal text-gray-500 mt-1">
                          {item.level === 'intermediate' 
                            ? 'Complete Beginner first'
                            : 'Complete Intermediate first'}
                        </div>
                      )}
                    </div>
                    
                    {/* Progress bar for unlocked levels */}
                    {isUnlocked && levelStats.total > 0 && (
                      <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-xl ${
                        selectedLevel === item.level 
                          ? 'bg-white/30' 
                          : item.color === 'green' 
                            ? 'bg-green-200' 
                            : item.color === 'orange' 
                            ? 'bg-orange-200' 
                            : 'bg-red-200'
                      }`}>
                        <motion.div
                          className={`h-full ${
                            selectedLevel === item.level 
                              ? 'bg-white' 
                              : item.color === 'green' 
                                ? 'bg-green-500' 
                                : item.color === 'orange' 
                                  ? 'bg-orange-500' 
                                  : 'bg-red-500'
                          }`}
                          initial={{ width: 0 }}
                          animate={{ width: `${(levelStats.completed / levelStats.total) * 100}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    )}
                  </motion.button>
                </motion.div>
              )
            })}
          </div>

          {/* Progress Bar */}
          {currentLevelChallenges.length > 0 && (
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-gray-700">
                  Progress: {Math.round(progress)}%
                </span>
                <span className="text-sm text-gray-600">
                  {currentLevelChallenges.filter(c => completedChallenges.includes(c.id)).length} / {currentLevelChallenges.length} completed
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-gradient-to-r from-primary-600 to-accent-600 rounded-full"
                />
              </div>
            </div>
          )}

          {/* Challenge List - Enhanced */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <span>📋</span>
                <span>Available Challenges</span>
              </h3>
              <span className="text-sm text-gray-600">
                {currentLevelChallenges.length} challenges in {selectedLevel}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {currentLevelChallenges.map((challenge, index) => (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedChallenge(challenge)}
                className={`group relative p-6 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedChallenge?.id === challenge.id
                    ? 'border-primary-600 bg-primary-50 shadow-lg scale-105 ring-2 ring-primary-300'
                    : completedChallenges.includes(challenge.id)
                    ? 'border-green-500 bg-green-50 hover:border-green-600'
                    : 'border-gray-200 bg-white hover:border-primary-300 hover:shadow-md hover:scale-102'
                }`}
              >
                {/* Completion Badge */}
                {completedChallenges.includes(challenge.id) && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white rounded-full p-1.5 shadow-lg">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                
                {/* Active Indicator */}
                {selectedChallenge?.id === challenge.id && (
                  <div className="absolute top-3 left-3 w-3 h-3 bg-primary-600 rounded-full animate-pulse"></div>
                )}
                
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 pr-8">{challenge.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{challenge.description}</p>
                </div>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      challenge.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                      challenge.difficulty === 'intermediate' ? 'bg-orange-100 text-orange-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {challenge.difficulty}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <span>🧪</span>
                      <span>{challenge.tests.length} tests</span>
                    </span>
                  </div>
                  {selectedChallenge?.id === challenge.id && (
                    <span className="text-primary-600 text-sm font-semibold">Active</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Level Completion Celebration - Full Page */}
      {showLevelCelebration && (
        <div className="fixed inset-0 z-[100] bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 flex items-center justify-center overflow-hidden">
          {/* Animated Background Particles */}
          {[...Array(100)].map((_, i) => {
            const angle = (i * 360) / 100
            const distance = 300 + Math.random() * 200
            const delay = Math.random() * 2
            const duration = 3 + Math.random() * 2
            const size = 15 + Math.random() * 25
            const colors = ['#FFD700', '#FF6B9D', '#4ECDC4', '#FFE66D', '#FF6B6B', '#95E1D3', '#F38181', '#AA96DA']
            const color = colors[Math.floor(Math.random() * colors.length)]
            
            return (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  originX: 0.5,
                  originY: 0.5,
                }}
                initial={{ 
                  x: 0, 
                  y: 0, 
                  rotate: 0,
                  scale: 0,
                  opacity: 1,
                }}
                animate={{
                  x: Math.cos((angle * Math.PI) / 180) * distance,
                  y: Math.sin((angle * Math.PI) / 180) * distance,
                  rotate: 720 + angle,
                  scale: [0, 1.5, 1, 0],
                  opacity: [1, 1, 1, 0],
                }}
                transition={{
                  duration: duration,
                  delay: delay,
                  ease: 'easeOut',
                }}
              >
                <div
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    background: `radial-gradient(circle, ${color} 0%, ${color}aa 50%, transparent 100%)`,
                    borderRadius: '50%',
                    boxShadow: `0 0 ${size}px ${color}, 0 0 ${size*2}px ${color}88`,
                  }}
                />
              </motion.div>
            )
          })}
          
          {/* Main Celebration Content */}
          <motion.div
            className="relative z-10 text-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Level Badge */}
            <motion.div
              className="mb-8"
              animate={{ 
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1 }}
            >
              <div className="text-9xl mb-4">🏆</div>
            </motion.div>
            
            {/* Title */}
            <motion.h1
              className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-2xl"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              Level Complete!
            </motion.h1>
            
            {/* Level Name */}
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {completedLevel ? completedLevel.charAt(0).toUpperCase() + completedLevel.slice(1) : ''} Level Mastered! 🎉
            </motion.h2>
            
            {/* Celebration Emojis */}
            <motion.div
              className="flex justify-center gap-4 text-6xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {['🎊', '✨', '🌟', '💫', '🎈', '🎁'].map((emoji, i) => (
                <motion.span
                  key={i}
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {emoji}
                </motion.span>
              ))}
            </motion.div>
            
            {/* Message */}
            <motion.p
              className="text-2xl md:text-3xl text-white/90 mt-8 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Congratulations! You've mastered this level! 🚀
            </motion.p>
            
            {/* Progress Indicator */}
            <motion.div
              className="mt-12 text-xl text-white/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              Moving to next level...
            </motion.div>
          </motion.div>
        </div>
      )}

      {/* Challenge Workspace */}
      {selectedChallenge && (
        <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-primary-50 relative overflow-hidden">
          {/* Flower Celebration Animation - Task Completion */}
          {showCelebration && (
            <div className="fixed inset-0 pointer-events-none z-50">
              {[...Array(50)].map((_, i) => {
                const angle = (i * 360) / 50
                const distance = 200 + Math.random() * 100
                const delay = Math.random() * 0.5
                const duration = 2 + Math.random() * 1
                const size = 20 + Math.random() * 20
                const colors = ['#FF6B9D', '#C44569', '#FFA07A', '#FFB347', '#FFD700', '#98D8C8', '#F7DC6F', '#BB8FCE']
                const color = colors[Math.floor(Math.random() * colors.length)]
                
                return (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                      originX: 0.5,
                      originY: 0.5,
                    }}
                    initial={{ 
                      x: 0, 
                      y: 0, 
                      rotate: 0,
                      scale: 0,
                      opacity: 1,
                    }}
                    animate={{
                      x: Math.cos((angle * Math.PI) / 180) * distance,
                      y: Math.sin((angle * Math.PI) / 180) * distance,
                      rotate: 360 + angle,
                      scale: [0, 1, 1, 0],
                      opacity: [1, 1, 1, 0],
                    }}
                    transition={{
                      duration: duration,
                      delay: delay,
                      ease: 'easeOut',
                    }}
                  >
                    <div
                      style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        background: `radial-gradient(circle, ${color} 0%, ${color}dd 50%, transparent 100%)`,
                        borderRadius: '50%',
                        boxShadow: `0 0 ${size/2}px ${color}`,
                      }}
                    />
                  </motion.div>
                )
              })}
              {/* Center Celebration Text */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 1.5, delay: 0.2 }}
              >
                <div className="text-center">
                  <motion.div
                    className="text-8xl mb-4"
                    animate={{ 
                      rotate: [0, 10, -10, 10, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 0.6, repeat: 2 }}
                  >
                    🌸
                  </motion.div>
                  <motion.h2
                    className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.5, repeat: 2 }}
                  >
                    Challenge Completed! 🎉
                  </motion.h2>
                </div>
              </motion.div>
            </div>
          )}
          
          <div className="container-custom">
            {/* Challenge Header with Stats */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-4 h-4 rounded-full ${
                      completedChallenges.includes(selectedChallenge.id) 
                        ? 'bg-green-500 animate-pulse' 
                        : 'bg-gray-300'
                    }`}></div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-1">
                        {selectedChallenge.title}
                      </h2>
                      <p className="text-gray-600">
                        {selectedChallenge.difficulty.charAt(0).toUpperCase() + selectedChallenge.difficulty.slice(1)} Level Challenge
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center px-4 py-2 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">{selectedChallenge.tests.length}</div>
                      <div className="text-xs text-gray-600">Tests</div>
                    </div>
                    <span className={`px-4 py-2 rounded-lg text-sm font-bold ${
                      selectedChallenge.difficulty === 'beginner' 
                        ? 'bg-green-100 text-green-700' 
                        : selectedChallenge.difficulty === 'intermediate' 
                        ? 'bg-orange-100 text-orange-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {selectedChallenge.difficulty.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Tips Banner */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 bg-gradient-to-r from-primary-50 via-accent-50 to-primary-50 border-l-4 border-primary-500 rounded-xl p-5 shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">💡</div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Quick Tips to Get Started</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <span className="text-primary-600">✓</span>
                      <span>Read the challenge description carefully</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary-600">✓</span>
                      <span>Use the hint if you get stuck</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary-600">✓</span>
                      <span>Click "Run Code" to test your solution</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary-600">✓</span>
                      <span>All tests must pass to complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Workspace - All in One View */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {/* Left: Challenge Description - Compact */}
              <div className="xl:col-span-1 space-y-4">
                <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 p-4 max-h-[600px] overflow-y-auto">
                  <ChallengeDisplay
                    challenge={selectedChallenge}
                    showHint={showHint}
                    showExplanation={showExplanation}
                    onToggleHint={() => setShowHint(!showHint)}
                    onToggleExplanation={() => setShowExplanation(!showExplanation)}
                  />
                </div>
              </div>

              {/* Center & Right: Code Editor + Output - Side by Side */}
              <div className="xl:col-span-2 space-y-4">
                {/* Code Editor - Compact */}
                <div className="bg-white rounded-xl shadow-xl border-2 border-gray-200 overflow-hidden flex flex-col">
                  {/* Fixed Header with Buttons */}
                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-2.5 flex items-center justify-between flex-shrink-0">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                        <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="ml-3 text-gray-300 text-xs font-mono">
                        {selectedLanguage ? `editor.${getFileExtension(selectedLanguage)}` : 'editor.js'}
                      </span>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <button
                        onClick={resetCode}
                        className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded text-xs font-medium transition-all whitespace-nowrap"
                        title="Reset"
                      >
                        ↺ Reset
                      </button>
                      <motion.button
                        onClick={runCode}
                        disabled={!userCode.trim()}
                        whileHover={!userCode.trim() ? {} : { scale: 1.05 }}
                        whileTap={!userCode.trim() ? {} : { scale: 0.95 }}
                        className={`px-4 py-1.5 rounded text-sm font-bold text-white transition-all whitespace-nowrap ${
                          !userCode.trim()
                            ? 'bg-gray-600 cursor-not-allowed opacity-50'
                            : 'bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700'
                        }`}
                      >
                        ▶ Run
                      </motion.button>
                    </div>
                  </div>
                  {/* Scrollable Editor Area */}
                  <div className="bg-gray-900 overflow-hidden" style={{ height: '300px', maxHeight: '300px' }}>
                    <div className="h-full">
                      <CodeEditor
                        value={userCode}
                        onChange={setUserCode}
                        language={selectedLanguage || 'javascript'}
                      />
                    </div>
                  </div>
                </div>

                {/* Output & Results - Compact, Always Visible */}
                <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-2.5 border-b border-gray-300">
                    <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                      <span>📊</span>
                      <span>Output & Results</span>
                    </h3>
                  </div>
                  <div className="p-4 bg-gray-50 min-h-[200px] max-h-[300px] overflow-y-auto">
                    {/* Output Section */}
                    {output && (
                      <div className="bg-white rounded-lg p-4 mb-4 border-2 border-gray-300 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg">💻</span>
                          <div className="text-sm font-bold text-gray-700">Output:</div>
                        </div>
                        <pre className="text-sm font-mono text-gray-800 whitespace-pre-wrap break-words">
                          {output}
                        </pre>
                      </div>
                    )}

                    {/* Test Results Section */}
                    {testResults && testResults.length > 0 && (
                      <div className="mt-2">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                            <span>🧪</span>
                            <span>Test Results</span>
                          </h4>
                          <span className="text-xs text-gray-600 font-semibold bg-white px-2 py-1 rounded">
                            {testResults.filter(r => r.passed).length}/{testResults.length} passed
                            {testResults.every(r => r.passed) && <span className="ml-1 text-green-600">🎉</span>}
                          </span>
                        </div>
                        <div className="space-y-2">
                          {testResults.map((result, index) => (
                            <div
                              key={index}
                              className={`p-3 rounded-lg border-2 ${
                                result.passed
                                  ? 'bg-green-50 border-green-300'
                                  : 'bg-red-50 border-red-300'
                              }`}
                            >
                              <div className="flex items-center gap-2 mb-2">
                                {result.passed ? (
                                  <span className="text-xl">✅</span>
                                ) : (
                                  <span className="text-xl">❌</span>
                                )}
                                <span className="text-sm font-bold text-gray-900">
                                  Test {result.testNumber || index + 1}
                                </span>
                                {result.passed && (
                                  <span className="ml-auto text-xs text-green-700 font-bold bg-green-200 px-2 py-1 rounded">PASSED</span>
                                )}
                              </div>
                              {!result.passed && (
                                <div className="mt-2 pl-6 space-y-1 text-xs">
                                  <div className="bg-white rounded p-2">
                                    <span className="text-gray-500">Expected: </span>
                                    <span className="font-mono text-green-700 font-semibold">{String(result.expected)}</span>
                                  </div>
                                  <div className="bg-white rounded p-2">
                                    <span className="text-gray-500">Got: </span>
                                    <span className="font-mono text-red-700 font-semibold">{String(result.got)}</span>
                                  </div>
                                  {result.input && (
                                    <div className="bg-white rounded p-2">
                                      <span className="text-gray-500">Input: </span>
                                      <span className="font-mono text-gray-700">{JSON.stringify(result.input)}</span>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Empty State */}
                    {!output && (!testResults || testResults.length === 0) && (
                      <div className="bg-gray-100 rounded-lg p-8 border-2 border-dashed border-gray-300 text-center h-full flex flex-col items-center justify-center">
                        <div className="text-4xl mb-3">👆</div>
                        <p className="text-base text-gray-700 font-semibold mb-1">
                          Click "Run" to test your code
                        </p>
                        <p className="text-sm text-gray-500">
                          Your output and test results will appear here
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Level Up Your Skills?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Practice makes perfect. Complete more challenges to unlock advanced topics and become a JavaScript master.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 border-2 border-primary-200 shadow-lg"
              >
                <div className="text-4xl mb-2">🎯</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{getAllChallenges().length}</div>
                <div className="text-sm text-gray-600">Total Challenges</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 border-2 border-primary-200 shadow-lg"
              >
                <div className="text-4xl mb-2">🏆</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {selectedLanguage ? languageCompletedCount : completedChallenges.length}
                </div>
                <div className="text-sm text-gray-600">
                  {selectedLanguage ? `${selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)} Completed` : 'Total Completed'}
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 border-2 border-primary-200 shadow-lg"
              >
                <div className="text-4xl mb-2">⭐</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{xp}</div>
                <div className="text-sm text-gray-600">Experience Points</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

