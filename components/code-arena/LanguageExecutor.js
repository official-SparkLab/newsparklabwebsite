// Language-specific code execution handlers

export function executeCode(code, language, tests) {
  switch (language) {
    case 'javascript':
      return executeJavaScript(code, tests)
    case 'python':
      return executePython(code, tests)
    case 'java':
      return executeJava(code, tests)
    case 'php':
      return executePHP(code, tests)
    case 'react':
      return executeReact(code, tests)
    case 'html':
      return executeHTML(code, tests)
    case 'css':
      return executeCSS(code, tests)
    default:
      return { error: 'Unsupported language' }
  }
}

function executeJavaScript(code, tests) {
  try {
    // Extract function from code
    const func = new Function('return ' + code)()
    
    const results = tests.map((test, index) => {
      try {
        let result
        if (test.typeCheck) {
          result = func(test.input[0])
          return {
            passed: typeof result === test.expected,
            input: test.input,
            expected: test.expected,
            got: typeof result,
            testNumber: index + 1,
          }
        } else if (test.deepEqual) {
          result = func(...test.input)
          const passed = JSON.stringify(result) === JSON.stringify(test.expected)
          return {
            passed,
            input: test.input,
            expected: JSON.stringify(test.expected),
            got: JSON.stringify(result),
            testNumber: index + 1,
          }
        } else {
          result = func(...test.input)
          const passed = JSON.stringify(result) === JSON.stringify(test.expected)
          return {
            passed,
            input: test.input,
            expected: test.expected,
            got: result,
            testNumber: index + 1,
          }
        }
      } catch (error) {
        return {
          passed: false,
          input: test.input,
          expected: test.expected,
          got: `Error: ${error.message}`,
          testNumber: index + 1,
        }
      }
    })
    
    return { results, error: null }
  } catch (error) {
    return { results: [], error: error.message }
  }
}

function executePython(code, tests) {
  // For Python, we'll use a simplified validation approach
  // In a real implementation, you could use Pyodide for browser-based Python execution
  try {
    // Basic syntax validation
    const hasFunction = code.includes('def ')
    const hasReturn = code.includes('return')
    
    if (!hasFunction) {
      return { results: [], error: 'Python code must contain a function definition (def)' }
    }
    
    // For now, we'll do pattern matching validation
    // In production, you'd use Pyodide: https://pyodide.org/
    const results = tests.map((test, index) => {
      // Simulate validation - in real implementation, use Pyodide
      return {
        passed: false,
        input: test.input,
        expected: test.expected,
        got: 'Python execution requires Pyodide library. Please check your code syntax.',
        testNumber: index + 1,
        note: 'Python execution is simulated. Install Pyodide for full execution.',
      }
    })
    
    return { results, error: null, note: 'Python execution is simulated. For full execution, Pyodide library is required.' }
  } catch (error) {
    return { results: [], error: error.message }
  }
}

function executeJava(code, tests) {
  // Java cannot be executed in browser without a backend
  try {
    const results = tests.map((test, index) => {
      return {
        passed: false,
        input: test.input,
        expected: test.expected,
        got: 'Java requires compilation and JVM. Code validation only.',
        testNumber: index + 1,
        note: 'Java execution requires a backend server with JVM.',
      }
    })
    
    return { 
      results, 
      error: null, 
      note: 'Java code cannot be executed in browser. This is for learning and code review purposes only.' 
    }
  } catch (error) {
    return { results: [], error: error.message }
  }
}

function executePHP(code, tests) {
  // PHP cannot be executed in browser without a backend
  try {
    const results = tests.map((test, index) => {
      return {
        passed: false,
        input: test.input,
        expected: test.expected,
        got: 'PHP requires a server. Code validation only.',
        testNumber: index + 1,
        note: 'PHP execution requires a backend server.',
      }
    })
    
    return { 
      results, 
      error: null, 
      note: 'PHP code cannot be executed in browser. This is for learning and code review purposes only.' 
    }
  } catch (error) {
    return { results: [], error: error.message }
  }
}

function executeReact(code, tests) {
  // React components need to be rendered, which is complex
  try {
    const hasComponent = code.includes('function ') || code.includes('const ') || code.includes('class ')
    const hasReturn = code.includes('return')
    
    if (!hasComponent) {
      return { results: [], error: 'React code must contain a component definition' }
    }
    
    const results = tests.map((test, index) => {
      return {
        passed: false,
        input: test.input,
        expected: test.expected,
        got: 'React component validation. Full rendering requires React runtime.',
        testNumber: index + 1,
        note: 'React components are validated for structure. Full execution requires React environment.',
      }
    })
    
    return { 
      results, 
      error: null, 
      note: 'React components are validated for structure. For full execution, a React environment is required.' 
    }
  } catch (error) {
    return { results: [], error: error.message }
  }
}

function executeHTML(code, tests) {
  // HTML can be validated and previewed
  try {
    const hasDoctype = code.includes('<!DOCTYPE')
    const hasHtml = code.includes('<html')
    const hasBody = code.includes('<body')
    
    const results = tests.map((test, index) => {
      const isValid = hasDoctype && hasHtml && hasBody
      return {
        passed: isValid,
        input: test.input,
        expected: test.expected,
        got: isValid ? 'Valid HTML structure' : 'Missing required HTML elements',
        testNumber: index + 1,
        note: 'HTML is validated for structure. Preview available.',
      }
    })
    
    return { 
      results, 
      error: null, 
      note: 'HTML structure validated. You can preview the HTML in a browser.' 
    }
  } catch (error) {
    return { results: [], error: error.message }
  }
}

function executeCSS(code, tests) {
  // CSS can be validated
  try {
    const hasSelector = code.includes('{') && code.includes('}')
    const hasProperties = code.includes(':')
    
    const results = tests.map((test, index) => {
      const isValid = hasSelector && hasProperties
      return {
        passed: isValid,
        input: test.input,
        expected: test.expected,
        got: isValid ? 'Valid CSS syntax' : 'Invalid CSS syntax',
        testNumber: index + 1,
        note: 'CSS is validated for syntax. Apply to HTML to see results.',
      }
    })
    
    return { 
      results, 
      error: null, 
      note: 'CSS syntax validated. Apply the CSS to HTML elements to see visual results.' 
    }
  } catch (error) {
    return { results: [], error: error.message }
  }
}

