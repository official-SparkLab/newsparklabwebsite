'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '@/components/common/SectionTitle'
import Button from '@/components/common/Button'

export default function CodeAndSee() {
  const [htmlCode, setHtmlCode] = useState(`<!DOCTYPE html>
<html>
<head>
  <title>My First Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>Welcome to the coding playground.</p>
  <button id="myButton">Click Me!</button>
</body>
</html>`)

  const [cssCode, setCssCode] = useState(`body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  min-height: 100vh;
}

h1 {
  color: #fff;
  text-align: center;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #45a049;
}`)

  const [jsCode, setJsCode] = useState(`document.getElementById('myButton').addEventListener('click', function() {
  alert('Button clicked! Great job! 🎉');
});`)

  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const [currentTask, setCurrentTask] = useState(0)
  const [activeTab, setActiveTab] = useState('html')
  const [isAutoRun, setIsAutoRun] = useState(false)
  const [completedTasks, setCompletedTasks] = useState([])
  const [showSuccess, setShowSuccess] = useState(false)
  const [codeHistory, setCodeHistory] = useState([])

  const tasks = [
    {
      id: 1,
      title: 'Change Button Color on Click',
      description: 'Make the button change color when clicked',
      whatToChange: 'Modify the JavaScript code to change button background color on click',
      expectedBehavior: 'Button should change to a different color (like red or blue) when clicked',
      whatYouLearn: 'You\'ll learn event handling, DOM manipulation, and how JavaScript interacts with HTML elements.',
      starterCode: {
        html: `<!DOCTYPE html>
<html>
<head>
  <title>Color Changer</title>
</head>
<body>
  <h1>Click the Button!</h1>
  <button id="colorButton">Change My Color</button>
</body>
</html>`,
        css: `body {
  font-family: Arial, sans-serif;
  padding: 40px;
  text-align: center;
  background: #f0f0f0;
}

h1 {
  color: #333;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  margin-top: 20px;
}`,
        js: `// Your code here - make the button change color on click!
// Hint: Use addEventListener and style.backgroundColor`,
      },
    },
    {
      id: 2,
      title: 'Create a Counter',
      description: 'Build a counter that increases when button is clicked',
      whatToChange: 'Add JavaScript to increment a counter and display it',
      expectedBehavior: 'Number should increase by 1 each time you click the button',
      whatYouLearn: 'You\'ll learn state management in vanilla JavaScript, DOM updates, and event handling.',
      starterCode: {
        html: `<!DOCTYPE html>
<html>
<head>
  <title>Counter App</title>
</head>
<body>
  <h1>Counter: <span id="count">0</span></h1>
  <button id="incrementBtn">Click to Count</button>
</body>
</html>`,
        css: `body {
  font-family: Arial, sans-serif;
  padding: 40px;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  min-height: 100vh;
}

h1 {
  font-size: 3em;
  margin-bottom: 30px;
}

button {
  background-color: #ff6b6b;
  color: white;
  padding: 15px 40px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
}`,
        js: `// Create a counter that increases on button click
// Hint: Use a variable to store the count, then update the span element`,
      },
    },
    {
      id: 3,
      title: 'Style a Card',
      description: 'Make a beautiful card with hover effects',
      whatToChange: 'Add CSS to create a card with shadow, hover effects, and smooth transitions',
      expectedBehavior: 'Card should have shadow, and lift up slightly when you hover over it',
      whatYouLearn: 'You\'ll learn CSS transitions, hover states, box-shadow, and transform properties.',
      starterCode: {
        html: `<!DOCTYPE html>
<html>
<head>
  <title>Card Design</title>
</head>
<body>
  <div class="card">
    <h2>Beautiful Card</h2>
    <p>This is a sample card. Add CSS to make it look amazing!</p>
  </div>
</body>
</html>`,
        css: `body {
  font-family: Arial, sans-serif;
  padding: 40px;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.card {
  background: white;
  padding: 30px;
  border-radius: 10px;
  width: 300px;
  /* Add your styles here! */
}`,
        js: `// No JavaScript needed for this task!`,
      },
    },
  ]

  useEffect(() => {
    // Initial run on mount
    runCode()
  }, [])

  // Auto-run when auto-run is enabled
  useEffect(() => {
    if (isAutoRun) {
      const timer = setTimeout(() => {
        runCode()
      }, 1000) // Debounce 1 second
      return () => clearTimeout(timer)
    }
  }, [htmlCode, cssCode, jsCode, isAutoRun])

  // Check task completion
  useEffect(() => {
    if (currentTask < tasks.length && output) {
      checkTaskCompletion()
    }
  }, [output, currentTask])

  const runCode = () => {
    setError('')
    setShowSuccess(false)
    try {
      const iframeContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>${htmlCode.replace(/<!DOCTYPE html>|<\/?html>|<\/?head>|<\/?body>/gi, '')}</body>
        <script>
          try {
            ${jsCode}
          } catch(e) {
            document.body.innerHTML += '<div style="color: red; padding: 20px; background: #ffe6e6; margin: 20px; border-radius: 5px;"><strong>Error:</strong> ' + e.message + '</div>';
          }
        </script>
        </html>
      `
      setOutput(iframeContent)
      // Save to history
      setCodeHistory(prev => [...prev.slice(-4), { html: htmlCode, css: cssCode, js: jsCode }])
    } catch (err) {
      setError(err.message)
    }
  }

  const checkTaskCompletion = () => {
    if (currentTask >= tasks.length) return
    
    const task = tasks[currentTask]
    let completed = false

    // Simple completion checks based on task
    if (task.id === 1) {
      // Button color change task
      completed = jsCode.includes('addEventListener') && 
                  (jsCode.includes('style') || jsCode.includes('backgroundColor') || jsCode.includes('background'))
    } else if (task.id === 2) {
      // Counter task
      completed = jsCode.includes('addEventListener') && 
                  (jsCode.includes('innerHTML') || jsCode.includes('textContent')) &&
                  jsCode.match(/\+\+|count|increment/i)
    } else if (task.id === 3) {
      // Card styling task
      completed = cssCode.includes('hover') || cssCode.includes('transition') || cssCode.includes('transform') || cssCode.includes('box-shadow')
    }

    if (completed && !completedTasks.includes(task.id)) {
      setCompletedTasks(prev => [...prev, task.id])
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3000)
    }
  }

  const resetCode = () => {
    if (currentTask < tasks.length) {
      const task = tasks[currentTask]
      setHtmlCode(task.starterCode.html)
      setCssCode(task.starterCode.css)
      setJsCode(task.starterCode.js)
      runCode()
    } else {
      setHtmlCode(`<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Start Coding!</h1>
</body>
</html>`)
      setCssCode(`body {
  font-family: Arial, sans-serif;
  padding: 20px;
}`)
      setJsCode(`// Your JavaScript code here`)
      runCode()
    }
  }

  const loadTask = (taskIndex) => {
    setCurrentTask(taskIndex)
    const task = tasks[taskIndex]
    setHtmlCode(task.starterCode.html)
    setCssCode(task.starterCode.css)
    setJsCode(task.starterCode.js)
    runCode()
  }

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
            Code & See 💻
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Write code, see results instantly. Learn by doing. No setup, no complexity—just code and see!
          </motion.p>
        </div>
      </div>

      {/* Main Playground */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Left Side - Code Editor */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-xl border-2 border-gray-200 overflow-hidden"
            >
              {/* Editor Header */}
              <div className="bg-gray-800 text-white px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-3 text-sm font-medium">Code Editor</span>
                  {completedTasks.length > 0 && (
                    <span className="ml-2 px-2 py-0.5 bg-green-600 rounded text-xs font-semibold">
                      {completedTasks.length} Task{completedTasks.length > 1 ? 's' : ''} Completed! 🎉
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsAutoRun(!isAutoRun)}
                    className={`px-3 py-1.5 rounded text-sm font-semibold transition-colors ${
                      isAutoRun 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-gray-600 hover:bg-gray-700'
                    }`}
                    title="Auto-run code as you type"
                  >
                    {isAutoRun ? '⏸ Auto' : '▶ Auto'}
                  </button>
                  <button
                    onClick={runCode}
                    className="px-4 py-1.5 bg-green-600 hover:bg-green-700 rounded text-sm font-semibold transition-colors"
                  >
                    ▶ Run Code
                  </button>
                  <button
                    onClick={resetCode}
                    className="px-4 py-1.5 bg-gray-600 hover:bg-gray-700 rounded text-sm font-semibold transition-colors"
                  >
                    ↻ Reset
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-gray-200 bg-gray-50">
                <button 
                  onClick={() => setActiveTab('html')}
                  className={`px-4 py-2 text-sm font-semibold transition-colors ${
                    activeTab === 'html' 
                      ? 'text-gray-900 border-b-2 border-primary-600 bg-white' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  HTML
                </button>
                <button 
                  onClick={() => setActiveTab('css')}
                  className={`px-4 py-2 text-sm font-semibold transition-colors ${
                    activeTab === 'css' 
                      ? 'text-gray-900 border-b-2 border-primary-600 bg-white' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  CSS
                </button>
                <button 
                  onClick={() => setActiveTab('js')}
                  className={`px-4 py-2 text-sm font-semibold transition-colors ${
                    activeTab === 'js' 
                      ? 'text-gray-900 border-b-2 border-primary-600 bg-white' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  JavaScript
                </button>
              </div>

              {/* Tabbed Editors */}
              <div className="relative">
                {/* HTML Editor */}
                {activeTab === 'html' && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        HTML
                      </label>
                      <span className="text-xs text-gray-500">
                        {htmlCode.split('\n').length} lines
                      </span>
                    </div>
                    <textarea
                      value={htmlCode}
                      onChange={(e) => setHtmlCode(e.target.value)}
                      className="w-full h-[600px] font-mono text-sm p-4 bg-gray-900 text-green-400 rounded-lg border-2 border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none resize-none"
                      spellCheck={false}
                      placeholder="Write your HTML code here..."
                    />
                  </motion.div>
                )}

                {/* CSS Editor */}
                {activeTab === 'css' && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        CSS
                      </label>
                      <span className="text-xs text-gray-500">
                        {cssCode.split('\n').length} lines
                      </span>
                    </div>
                    <textarea
                      value={cssCode}
                      onChange={(e) => setCssCode(e.target.value)}
                      className="w-full h-[600px] font-mono text-sm p-4 bg-gray-900 text-blue-400 rounded-lg border-2 border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none resize-none"
                      spellCheck={false}
                      placeholder="Write your CSS code here..."
                    />
                  </motion.div>
                )}

                {/* JavaScript Editor */}
                {activeTab === 'js' && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        JavaScript
                      </label>
                      <span className="text-xs text-gray-500">
                        {jsCode.split('\n').length} lines
                      </span>
                    </div>
                    <textarea
                      value={jsCode}
                      onChange={(e) => setJsCode(e.target.value)}
                      className="w-full h-[600px] font-mono text-sm p-4 bg-gray-900 text-yellow-400 rounded-lg border-2 border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none resize-none"
                      spellCheck={false}
                      placeholder="Write your JavaScript code here..."
                    />
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Right Side - Live Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-xl border-2 border-gray-200 overflow-hidden"
            >
              {/* Preview Header */}
              <div className="bg-gray-800 text-white px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Live Preview</span>
                  {isAutoRun && (
                    <span className="px-2 py-0.5 bg-green-600 rounded text-xs font-semibold animate-pulse">
                      Auto-running
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  {showSuccess && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex items-center gap-2 px-3 py-1 bg-green-600 rounded-lg"
                    >
                      <span>🎉</span>
                      <span className="text-xs font-semibold">Task Completed!</span>
                    </motion.div>
                  )}
                  <div className="text-xs text-gray-400">
                    {isAutoRun ? 'Auto-updates' : 'Click Run to update'}
                  </div>
                </div>
              </div>

              {/* Preview Output */}
              <div className="h-[800px] border-t border-gray-200 relative">
                {error ? (
                  <div className="p-6 text-red-600 bg-red-50 m-4 rounded-lg">
                    <strong>Error:</strong> {error}
                  </div>
                ) : (
                  <>
                    <iframe
                      srcDoc={output}
                      className="w-full h-full border-0"
                      title="Code Output"
                      sandbox="allow-scripts allow-same-origin"
                    />
                    {/* Success Overlay */}
                    <AnimatePresence>
                      {showSuccess && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          className="absolute inset-0 flex items-center justify-center bg-black/50 z-10 pointer-events-none"
                        >
                          <motion.div
                            initial={{ y: 20 }}
                            animate={{ y: 0 }}
                            className="bg-white rounded-2xl p-8 text-center shadow-2xl max-w-md mx-4"
                          >
                            <motion.div
                              animate={{ 
                                rotate: [0, 10, -10, 10, 0],
                                scale: [1, 1.2, 1]
                              }}
                              transition={{ duration: 0.5 }}
                              className="text-6xl mb-4"
                            >
                              🎉
                            </motion.div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              Amazing Work!
                            </h3>
                            <p className="text-gray-600 mb-4">
                              You completed "{tasks[currentTask]?.title}"!
                            </p>
                            <p className="text-sm text-primary-600 font-semibold">
                              {tasks[currentTask]?.whatYouLearn}
                            </p>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tasks Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Coding Tasks"
            subtitle="Learn by Doing"
            center
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {tasks.map((task, index) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br rounded-xl p-6 border-2 shadow-lg cursor-pointer transition-all ${
                  currentTask === index
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 bg-white hover:border-primary-300 hover:shadow-xl'
                }`}
                onClick={() => loadTask(index)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{task.id === 1 ? '🎨' : task.id === 2 ? '🔢' : '💳'}</div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Task {task.id}
                  </h3>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {task.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {task.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                  {currentTask === index && (
                    <p className="text-xs text-primary-600 font-semibold">
                      ✓ Active Task
                    </p>
                  )}
                  {completedTasks.includes(task.id) && (
                    <div className="flex items-center gap-1 text-green-600">
                      <span className="text-lg">🏆</span>
                      <span className="text-xs font-semibold">Completed!</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Current Task Details */}
          {currentTask < tasks.length && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-8 border-2 border-primary-200 shadow-lg"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl flex-shrink-0">
                  {tasks[currentTask].id === 1 ? '🎨' : tasks[currentTask].id === 2 ? '🔢' : '💳'}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tasks[currentTask].title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {tasks[currentTask].description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span>📝</span> What to Change
                  </h4>
                  <p className="text-gray-700 text-sm">
                    {tasks[currentTask].whatToChange}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span>✨</span> Expected Behavior
                  </h4>
                  <p className="text-gray-700 text-sm">
                    {tasks[currentTask].expectedBehavior}
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-white rounded-lg p-5 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span>💡</span> What You'll Learn
                </h4>
                <p className="text-gray-700">
                  {tasks[currentTask].whatYouLearn}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Learning Tips & Shortcuts */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Learning Tips */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 border-2 border-primary-200 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span>💡</span> Learning Tips
              </h2>
              <div className="space-y-4">
                {[
                  {
                    tip: 'Experiment freely',
                    description: 'Try different values, break things, and see what happens. That\'s how you learn!',
                    icon: '🧪',
                  },
                  {
                    tip: 'Read error messages',
                    description: 'Errors are your friends—they tell you exactly what went wrong.',
                    icon: '🔍',
                  },
                  {
                    tip: 'Start simple',
                    description: 'Get the basics working first, then add complexity.',
                    icon: '🎯',
                  },
                  {
                    tip: 'Use the console',
                    description: 'Add console.log() to see what\'s happening in your code.',
                    icon: '📊',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        {item.tip}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Keyboard Shortcuts & Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 border-2 border-accent-200 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span>⌨️</span> Features & Shortcuts
              </h2>
              <div className="space-y-4">
                {[
                  {
                    feature: 'Auto-Run Mode',
                    description: 'Toggle auto-run to see results as you type (1 second delay)',
                    icon: '⚡',
                  },
                  {
                    feature: 'Tab Navigation',
                    description: 'Switch between HTML, CSS, and JavaScript tabs easily',
                    icon: '📑',
                  },
                  {
                    feature: 'Task Completion',
                    description: 'Get instant feedback when you complete a task!',
                    icon: '🏆',
                  },
                  {
                    feature: 'Code History',
                    description: 'Your code is saved automatically as you work',
                    icon: '💾',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        {item.feature}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Progress Indicator */}
              {completedTasks.length > 0 && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">Your Progress</span>
                    <span className="text-sm font-bold text-primary-600">
                      {completedTasks.length} / {tasks.length}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(completedTasks.length / tasks.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                      className="h-full bg-gradient-to-r from-primary-600 to-accent-600 rounded-full"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    {completedTasks.length === tasks.length 
                      ? '🎉 All tasks completed! You\'re a coding champion!' 
                      : `Keep going! ${tasks.length - completedTasks.length} task${tasks.length - completedTasks.length > 1 ? 's' : ''} remaining.`}
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Something Real?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              This playground is just the beginning. Let's build your actual website or application together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact/" size="lg" className="bg-white text-primary-700 hover:bg-gray-100">
                Start Your Project 🚀
              </Button>
              <Button href="/innovation-playground/" size="lg" variant="secondary" className="border-2 border-white text-white hover:bg-white/10">
                Explore More Tools 🛠️
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

