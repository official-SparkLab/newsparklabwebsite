'use client'

import { useState, useRef, useEffect } from 'react'

export default function CodeEditor({ value, onChange, language = 'javascript' }) {
  const textareaRef = useRef(null)
  const [lineNumbers, setLineNumbers] = useState(['1'])

  useEffect(() => {
    const lines = value.split('\n')
    setLineNumbers(lines.map((_, i) => String(i + 1)))
  }, [value])

  const handleChange = (e) => {
    onChange(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      const textarea = e.target
      const start = textarea.selectionStart
      const end = textarea.selectionEnd
      const newValue = value.substring(0, start) + '  ' + value.substring(end)
      onChange(newValue)
      
      // Set cursor position after the inserted tab
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 2
      }, 0)
    }
  }

  return (
    <div className="relative flex font-mono text-sm h-full overflow-hidden">
      {/* Line Numbers - Fixed, scrolls with textarea */}
      <div className="bg-gray-800 text-gray-500 px-4 py-4 select-none text-right flex-shrink-0">
        {lineNumbers.map((num, i) => (
          <div key={i} className="leading-6">
            {num}
          </div>
        ))}
      </div>
      
      {/* Code Editor - Only this scrolls */}
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-gray-900 text-green-400 px-4 py-4 resize-none focus:outline-none leading-6 w-full overflow-y-auto"
        style={{
          fontFamily: 'monospace',
          tabSize: 2,
          height: '100%',
        }}
        spellCheck={false}
      />
    </div>
  )
}


