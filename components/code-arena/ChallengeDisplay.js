'use client'

import { motion, AnimatePresence } from 'framer-motion'

export default function ChallengeDisplay({
  challenge,
  showHint,
  showExplanation,
  onToggleHint,
  onToggleExplanation,
}) {
  if (!challenge) return null

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-700 border-green-300',
    intermediate: 'bg-orange-100 text-orange-700 border-orange-300',
    advanced: 'bg-red-100 text-red-700 border-red-300',
  }

  const difficultyIcons = {
    beginner: '🌱',
    intermediate: '🔥',
    advanced: '⚡',
  }

  return (
    <div className="space-y-6">
      {/* Challenge Header */}
      <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-lg">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{challenge.title}</h2>
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold border-2 ${difficultyColors[challenge.difficulty]}`}>
                <span className="mr-1">{difficultyIcons[challenge.difficulty]}</span>
                {challenge.difficulty.charAt(0).toUpperCase() + challenge.difficulty.slice(1)}
              </span>
              <span className="text-sm text-gray-600">
                {challenge.tests.length} test{challenge.tests.length !== 1 ? 's' : ''}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
          <p className="text-gray-700 leading-relaxed">{challenge.description}</p>
        </div>

        {/* Example Tests */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Example Tests</h3>
          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
            {challenge.tests.slice(0, 2).map((test, index) => (
              <div key={index} className="text-sm font-mono">
                <span className="text-gray-600">Input: </span>
                <span className="text-gray-900">{JSON.stringify(test.input)}</span>
                <br />
                <span className="text-gray-600">Expected: </span>
                <span className="text-green-700 font-semibold">{JSON.stringify(test.expected)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hint Toggle */}
        <motion.button
          onClick={onToggleHint}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg font-semibold transition-colors border-2 border-blue-200"
        >
          {showHint ? '🙈 Hide Hint' : '💡 Show Hint'}
        </motion.button>

        <AnimatePresence>
          {showHint && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200 mt-4">
                <h4 className="font-semibold text-blue-900 mb-2">💡 Hint</h4>
                <p className="text-blue-800">{challenge.hint}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Explanation Toggle */}
        <motion.button
          onClick={onToggleExplanation}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg font-semibold transition-colors border-2 border-purple-200"
        >
          {showExplanation ? '📚 Hide Explanation' : '📚 Show Learning Explanation'}
        </motion.button>

        <AnimatePresence>
          {showExplanation && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200 mt-4">
                <h4 className="font-semibold text-purple-900 mb-2">📚 Learning Explanation</h4>
                <p className="text-purple-800 leading-relaxed">{challenge.explanation}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Tips */}
      <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 border-2 border-primary-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">💪 Tips</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-primary-600 mt-1">•</span>
            <span>Read the description carefully and understand what the function should do</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600 mt-1">•</span>
            <span>Check the example tests to understand expected inputs and outputs</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600 mt-1">•</span>
            <span>Use the hint if you're stuck, but try to solve it yourself first</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600 mt-1">•</span>
            <span>Read the explanation after solving to deepen your understanding</span>
          </li>
        </ul>
      </div>
    </div>
  )
}


