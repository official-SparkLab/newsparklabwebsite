// Challenges organized by language and difficulty level
export const challenges = {
  javascript: {
    beginner: [
      {
        id: 'js-b1',
        title: 'Sum Two Numbers',
        description: 'Write a function called `sum` that takes two numbers as parameters and returns their sum.',
        difficulty: 'beginner',
        language: 'javascript',
        starterCode: `function sum(a, b) {
  // Your code here
}`,
        solution: `function sum(a, b) {
  return a + b;
}`,
        tests: [
          { input: [2, 3], expected: 5 },
          { input: [10, 20], expected: 30 },
          { input: [-5, 5], expected: 0 },
          { input: [0, 0], expected: 0 },
        ],
        hint: 'Use the + operator to add two numbers together.',
        explanation: 'This challenge teaches you basic function syntax and arithmetic operations. The + operator in JavaScript performs addition when used with numbers.',
      },
      {
        id: 'js-b2',
        title: 'Find Maximum Number',
        description: 'Write a function called `findMax` that takes an array of numbers and returns the largest number.',
        difficulty: 'beginner',
        language: 'javascript',
        starterCode: `function findMax(numbers) {
  // Your code here
}`,
        solution: `function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}`,
        tests: [
          { input: [[1, 5, 3, 9, 2]], expected: 9 },
          { input: [[10, 20, 30]], expected: 30 },
          { input: [[-5, -2, -10]], expected: -2 },
          { input: [[42]], expected: 42 },
        ],
        hint: 'Use a loop to compare each number with the current maximum. You can also use Math.max() for a simpler solution.',
        explanation: 'This challenge introduces array iteration and conditional logic. You learn to compare values and track the maximum as you loop through the array.',
      },
      {
        id: 'js-b3',
        title: 'Reverse a String',
        description: 'Write a function called `reverseString` that takes a string and returns it reversed.',
        difficulty: 'beginner',
        language: 'javascript',
        starterCode: `function reverseString(str) {
  // Your code here
}`,
        solution: `function reverseString(str) {
  return str.split('').reverse().join('');
}`,
        tests: [
          { input: ['hello'], expected: 'olleh' },
          { input: ['world'], expected: 'dlrow' },
          { input: ['JavaScript'], expected: 'tpircSavaJ' },
          { input: [''], expected: '' },
        ],
        hint: 'Convert the string to an array, reverse it, then join it back into a string.',
        explanation: 'This challenge teaches string manipulation using array methods. split() converts a string to an array, reverse() reverses the array, and join() converts it back to a string.',
      },
      {
        id: 'js-b4',
        title: 'Check if Even',
        description: 'Write a function called `isEven` that takes a number and returns true if it\'s even, false otherwise.',
        difficulty: 'beginner',
        language: 'javascript',
        starterCode: `function isEven(num) {
  // Your code here
}`,
        solution: `function isEven(num) {
  return num % 2 === 0;
}`,
        tests: [
          { input: [4], expected: true },
          { input: [7], expected: false },
          { input: [0], expected: true },
          { input: [-2], expected: true },
        ],
        hint: 'Use the modulo operator (%) to check the remainder when dividing by 2.',
        explanation: 'This challenge introduces the modulo operator, which returns the remainder of a division. An even number has a remainder of 0 when divided by 2.',
      },
      {
        id: 'js-b5',
        title: 'Count Vowels',
        description: 'Write a function called `countVowels` that takes a string and returns the number of vowels (a, e, i, o, u) in it.',
        difficulty: 'beginner',
        language: 'javascript',
        starterCode: `function countVowels(str) {
  // Your code here
}`,
        solution: `function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}`,
        tests: [
          { input: ['hello'], expected: 2 },
          { input: ['world'], expected: 1 },
          { input: ['JavaScript'], expected: 3 },
          { input: ['xyz'], expected: 0 },
        ],
        hint: 'Loop through each character and check if it\'s a vowel. Use includes() to check if a character is in the vowels string.',
        explanation: 'This challenge combines string iteration with conditional checks. You learn to use includes() to check membership and count occurrences.',
      },
    ],
    intermediate: [
      {
        id: 'js-i1',
        title: 'Remove Duplicates',
        description: 'Write a function called `removeDuplicates` that takes an array and returns a new array with duplicates removed.',
        difficulty: 'intermediate',
        language: 'javascript',
        starterCode: `function removeDuplicates(arr) {
  // Your code here
}`,
        solution: `function removeDuplicates(arr) {
  return [...new Set(arr)];
}`,
        tests: [
          { input: [[1, 2, 2, 3, 4, 4, 5]], expected: [1, 2, 3, 4, 5] },
          { input: [['a', 'b', 'a', 'c']], expected: ['a', 'b', 'c'] },
          { input: [[1, 1, 1, 1]], expected: [1] },
          { input: [[]], expected: [] },
        ],
        hint: 'Use a Set to store unique values, or use filter() with indexOf() to keep only first occurrences.',
        explanation: 'This challenge introduces the Set data structure, which automatically handles uniqueness. Sets are perfect for removing duplicates efficiently.',
      },
      {
        id: 'js-i2',
        title: 'Find Longest Word',
        description: 'Write a function called `findLongestWord` that takes a sentence (string) and returns the longest word. If there are multiple words with the same length, return the first one.',
        difficulty: 'intermediate',
        language: 'javascript',
        starterCode: `function findLongestWord(sentence) {
  // Your code here
}`,
        solution: `function findLongestWord(sentence) {
  const words = sentence.split(' ');
  let longest = words[0];
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}`,
        tests: [
          { input: ['The quick brown fox'], expected: 'quick' },
          { input: ['JavaScript is awesome'], expected: 'JavaScript' },
          { input: ['Hello world'], expected: 'Hello' },
          { input: ['a'], expected: 'a' },
        ],
        hint: 'Split the sentence into words, then find the word with the maximum length.',
        explanation: 'This challenge combines string splitting with array iteration and comparison. You learn to work with word boundaries and find maximum values.',
      },
      {
        id: 'js-i3',
        title: 'Flatten Array',
        description: 'Write a function called `flattenArray` that takes a nested array and returns a flattened array (one level deep).',
        difficulty: 'intermediate',
        language: 'javascript',
        starterCode: `function flattenArray(arr) {
  // Your code here
}`,
        solution: `function flattenArray(arr) {
  return arr.flat();
}`,
        tests: [
          { input: [[[1, 2], [3, 4], [5]]], expected: [1, 2, 3, 4, 5] },
          { input: [[1, [2, 3], 4]], expected: [1, 2, 3, 4] },
          { input: [[[1, 2, 3]]], expected: [1, 2, 3] },
          { input: [[1, 2, 3]], expected: [1, 2, 3] },
        ],
        hint: 'Use the flat() method, or manually iterate and check if each item is an array.',
        explanation: 'This challenge teaches array manipulation and the spread operator. flat() is a modern method that simplifies flattening nested arrays.',
      },
      {
        id: 'js-i4',
        title: 'Capitalize Words',
        description: 'Write a function called `capitalizeWords` that takes a sentence and returns it with the first letter of each word capitalized.',
        difficulty: 'intermediate',
        language: 'javascript',
        starterCode: `function capitalizeWords(sentence) {
  // Your code here
}`,
        solution: `function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}`,
        tests: [
          { input: ['hello world'], expected: 'Hello World' },
          { input: ['javascript is fun'], expected: 'Javascript Is Fun' },
          { input: ['HELLO WORLD'], expected: 'Hello World' },
          { input: ['a'], expected: 'A' },
        ],
        hint: 'Split into words, capitalize the first letter of each word, then join them back.',
        explanation: 'This challenge combines string methods: split(), map(), charAt(), toUpperCase(), slice(), and join(). You learn to transform strings systematically.',
      },
      {
        id: 'js-i5',
        title: 'Find Missing Number',
        description: 'Write a function called `findMissingNumber` that takes an array of consecutive numbers with one missing and returns the missing number.',
        difficulty: 'intermediate',
        language: 'javascript',
        starterCode: `function findMissingNumber(arr) {
  // Your code here
}`,
        solution: `function findMissingNumber(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}`,
        tests: [
          { input: [[1, 2, 4, 5]], expected: 3 },
          { input: [[1, 3, 4, 5]], expected: 2 },
          { input: [[2, 3, 4, 5]], expected: 1 },
          { input: [[1, 2, 3, 5]], expected: 4 },
        ],
        hint: 'Calculate the expected sum of all numbers, subtract the actual sum of the array.',
        explanation: 'This challenge uses mathematical formulas (sum of consecutive numbers) and the reduce() method. It demonstrates algorithmic thinking for finding missing elements.',
      },
    ],
    advanced: [
      {
        id: 'js-a1',
        title: 'Deep Clone Object',
        description: 'Write a function called `deepClone` that creates a deep copy of a nested object (handles objects and arrays).',
        difficulty: 'advanced',
        language: 'javascript',
        starterCode: `function deepClone(obj) {
  // Your code here
}`,
        solution: `function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  const cloned = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
}`,
        tests: [
          { input: [{ a: 1, b: { c: 2 } }], expected: { a: 1, b: { c: 2 } }, deepEqual: true },
          { input: [[1, [2, 3]]], expected: [1, [2, 3]], deepEqual: true },
        ],
        hint: 'Use recursion to handle nested structures. Check the type of each value and clone accordingly.',
        explanation: 'This challenge teaches deep cloning and recursion. Deep cloning is essential when you need independent copies of nested data structures.',
      },
      {
        id: 'js-a2',
        title: 'Debounce Function',
        description: 'Write a function called `debounce` that delays function execution until after a specified time has passed since the last invocation.',
        difficulty: 'advanced',
        language: 'javascript',
        starterCode: `function debounce(func, delay) {
  // Your code here
}`,
        solution: `function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}`,
        tests: [
          { input: [() => console.log('called'), 100], expected: 'function', typeCheck: true },
        ],
        hint: 'Use setTimeout and clearTimeout. Store the timeout ID and clear it on each new call.',
        explanation: 'Debouncing is a performance optimization technique. It prevents functions from being called too frequently, useful for search inputs, scroll events, and resize handlers.',
      },
      {
        id: 'js-a3',
        title: 'Memoize Function',
        description: 'Write a function called `memoize` that caches function results to avoid redundant calculations.',
        difficulty: 'advanced',
        language: 'javascript',
        starterCode: `function memoize(func) {
  // Your code here
}`,
        solution: `function memoize(func) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = func.apply(this, args);
    cache[key] = result;
    return result;
  };
}`,
        tests: [
          { input: [(n) => n * 2], expected: 'function', typeCheck: true },
        ],
        hint: 'Create a cache object. Use function arguments as keys. Store and retrieve results from cache.',
        explanation: 'Memoization is a caching technique that stores expensive function results. It dramatically improves performance for recursive or computationally expensive functions.',
      },
      {
        id: 'js-a4',
        title: 'Group By Property',
        description: 'Write a function called `groupBy` that takes an array of objects and a property name, and returns an object grouped by that property.',
        difficulty: 'advanced',
        language: 'javascript',
        starterCode: `function groupBy(arr, property) {
  // Your code here
}`,
        solution: `function groupBy(arr, property) {
  return arr.reduce((groups, item) => {
    const key = item[property];
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {});
}`,
        tests: [
          { 
            input: [
              [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 25 }],
              'age'
            ],
            expected: { 25: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }], 30: [{ name: 'Bob', age: 30 }] },
            deepEqual: true
          },
        ],
        hint: 'Use reduce() to build an object. Use the property value as the key and push items into arrays.',
        explanation: 'This challenge teaches data transformation using reduce(). Grouping is a common operation when organizing data by categories or properties.',
      },
      {
        id: 'js-a5',
        title: 'Curry Function',
        description: 'Write a function called `curry` that converts a function with multiple arguments into a series of functions that take one argument each.',
        difficulty: 'advanced',
        language: 'javascript',
        starterCode: `function curry(func) {
  // Your code here
}`,
        solution: `function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }
    return function(...nextArgs) {
      return curried.apply(this, args.concat(nextArgs));
    };
  };
}`,
        tests: [
          { input: [(a, b, c) => a + b + c], expected: 'function', typeCheck: true },
        ],
        hint: 'Return a function that checks if enough arguments are provided. If not, return another function that collects more arguments.',
        explanation: 'Currying is a functional programming technique that transforms multi-argument functions into chains of single-argument functions. It enables partial application and function composition.',
      },
    ],
  },
  python: {
    beginner: [
      {
        id: 'py-b1',
        title: 'Sum Two Numbers',
        description: 'Write a function called `sum_numbers` that takes two numbers as parameters and returns their sum.',
        difficulty: 'beginner',
        language: 'python',
        starterCode: `def sum_numbers(a, b):
    # Your code here
    pass`,
        solution: `def sum_numbers(a, b):
    return a + b`,
        tests: [
          { input: [2, 3], expected: 5 },
          { input: [10, 20], expected: 30 },
          { input: [-5, 5], expected: 0 },
        ],
        hint: 'Use the + operator to add two numbers together.',
        explanation: 'This challenge teaches basic Python function syntax and arithmetic operations.',
      },
      {
        id: 'py-b2',
        title: 'Find Maximum Number',
        description: 'Write a function called `find_max` that takes a list of numbers and returns the largest number.',
        difficulty: 'beginner',
        language: 'python',
        starterCode: `def find_max(numbers):
    # Your code here
    pass`,
        solution: `def find_max(numbers):
    return max(numbers)`,
        tests: [
          { input: [[1, 5, 3, 9, 2]], expected: 9 },
          { input: [[10, 20, 30]], expected: 30 },
        ],
        hint: 'Use Python\'s built-in max() function, or iterate through the list.',
        explanation: 'This challenge introduces Python lists and built-in functions.',
      },
      {
        id: 'py-b3',
        title: 'Reverse a String',
        description: 'Write a function called `reverse_string` that takes a string and returns it reversed.',
        difficulty: 'beginner',
        language: 'python',
        starterCode: `def reverse_string(s):
    # Your code here
    pass`,
        solution: `def reverse_string(s):
    return s[::-1]`,
        tests: [
          { input: ['hello'], expected: 'olleh' },
          { input: ['world'], expected: 'dlrow' },
        ],
        hint: 'Use Python string slicing with [::-1] to reverse a string.',
        explanation: 'This challenge teaches Python string slicing, a powerful feature for string manipulation.',
      },
      {
        id: 'py-b4',
        title: 'Check if Even',
        description: 'Write a function called `is_even` that takes a number and returns True if it\'s even, False otherwise.',
        difficulty: 'beginner',
        language: 'python',
        starterCode: `def is_even(num):
    # Your code here
    pass`,
        solution: `def is_even(num):
    return num % 2 == 0`,
        tests: [
          { input: [4], expected: true },
          { input: [7], expected: false },
          { input: [0], expected: true },
        ],
        hint: 'Use the modulo operator (%) to check the remainder when dividing by 2.',
        explanation: 'This challenge introduces the modulo operator in Python, which returns the remainder of a division.',
      },
      {
        id: 'py-b5',
        title: 'Count Vowels',
        description: 'Write a function called `count_vowels` that takes a string and returns the number of vowels (a, e, i, o, u) in it.',
        difficulty: 'beginner',
        language: 'python',
        starterCode: `def count_vowels(s):
    # Your code here
    pass`,
        solution: `def count_vowels(s):
    vowels = 'aeiouAEIOU'
    count = 0
    for char in s:
        if char in vowels:
            count += 1
    return count`,
        tests: [
          { input: ['hello'], expected: 2 },
          { input: ['world'], expected: 1 },
          { input: ['Python'], expected: 1 },
        ],
        hint: 'Loop through each character and check if it\'s in the vowels string.',
        explanation: 'This challenge teaches string iteration and membership testing in Python.',
      },
    ],
    intermediate: [
      {
        id: 'py-i1',
        title: 'Remove Duplicates',
        description: 'Write a function called `remove_duplicates` that takes a list and returns a new list with duplicates removed.',
        difficulty: 'intermediate',
        language: 'python',
        starterCode: `def remove_duplicates(lst):
    # Your code here
    pass`,
        solution: `def remove_duplicates(lst):
    return list(set(lst))`,
        tests: [
          { input: [[1, 2, 2, 3, 4, 4, 5]], expected: [1, 2, 3, 4, 5] },
        ],
        hint: 'Use Python\'s set() to remove duplicates, then convert back to a list.',
        explanation: 'This challenge introduces Python sets, which automatically handle uniqueness.',
      },
      {
        id: 'py-i2',
        title: 'Find Longest Word',
        description: 'Write a function called `find_longest_word` that takes a sentence and returns the longest word.',
        difficulty: 'intermediate',
        language: 'python',
        starterCode: `def find_longest_word(sentence):
    # Your code here
    pass`,
        solution: `def find_longest_word(sentence):
    words = sentence.split()
    return max(words, key=len)`,
        tests: [
          { input: ['The quick brown fox'], expected: 'quick' },
          { input: ['Python is awesome'], expected: 'awesome' },
        ],
        hint: 'Split the sentence into words, then use max() with key=len to find the longest word.',
        explanation: 'This challenge teaches Python\'s max() function with a key parameter for custom comparison.',
      },
      {
        id: 'py-i3',
        title: 'Flatten List',
        description: 'Write a function called `flatten_list` that takes a nested list and returns a flattened list.',
        difficulty: 'intermediate',
        language: 'python',
        starterCode: `def flatten_list(lst):
    # Your code here
    pass`,
        solution: `def flatten_list(lst):
    result = []
    for item in lst:
        if isinstance(item, list):
            result.extend(flatten_list(item))
        else:
            result.append(item)
    return result`,
        tests: [
          { input: [[[1, 2], [3, 4], [5]]], expected: [1, 2, 3, 4, 5] },
          { input: [[1, [2, 3], 4]], expected: [1, 2, 3, 4] },
        ],
        hint: 'Use recursion to handle nested lists. Check if an item is a list using isinstance().',
        explanation: 'This challenge teaches recursion and type checking in Python.',
      },
      {
        id: 'py-i4',
        title: 'Capitalize Words',
        description: 'Write a function called `capitalize_words` that takes a sentence and returns it with the first letter of each word capitalized.',
        difficulty: 'intermediate',
        language: 'python',
        starterCode: `def capitalize_words(sentence):
    # Your code here
    pass`,
        solution: `def capitalize_words(sentence):
    return ' '.join(word.capitalize() for word in sentence.split())`,
        tests: [
          { input: ['hello world'], expected: 'Hello World' },
          { input: ['python is fun'], expected: 'Python Is Fun' },
        ],
        hint: 'Split the sentence, capitalize each word, then join them back.',
        explanation: 'This challenge teaches string methods and generator expressions in Python.',
      },
      {
        id: 'py-i5',
        title: 'Find Missing Number',
        description: 'Write a function called `find_missing_number` that takes a list of consecutive numbers with one missing and returns the missing number.',
        difficulty: 'intermediate',
        language: 'python',
        starterCode: `def find_missing_number(arr):
    # Your code here
    pass`,
        solution: `def find_missing_number(arr):
    n = len(arr) + 1
    expected_sum = n * (n + 1) // 2
    actual_sum = sum(arr)
    return expected_sum - actual_sum`,
        tests: [
          { input: [[1, 2, 4, 5]], expected: 3 },
          { input: [[1, 3, 4, 5]], expected: 2 },
        ],
        hint: 'Calculate the expected sum of all numbers, subtract the actual sum.',
        explanation: 'This challenge teaches mathematical formulas and Python\'s sum() function.',
      },
    ],
    advanced: [
      {
        id: 'py-a1',
        title: 'List Comprehension',
        description: 'Write a function called `square_numbers` that takes a list of numbers and returns a list of their squares using list comprehension.',
        difficulty: 'advanced',
        language: 'python',
        starterCode: `def square_numbers(numbers):
    # Your code here
    pass`,
        solution: `def square_numbers(numbers):
    return [x**2 for x in numbers]`,
        tests: [
          { input: [[1, 2, 3, 4]], expected: [1, 4, 9, 16] },
        ],
        hint: 'Use list comprehension syntax: [expression for item in iterable]',
        explanation: 'List comprehensions are a concise way to create lists in Python, making code more readable and efficient.',
      },
      {
        id: 'py-a2',
        title: 'Dictionary Comprehension',
        description: 'Write a function called `square_dict` that takes a list of numbers and returns a dictionary where keys are numbers and values are their squares.',
        difficulty: 'advanced',
        language: 'python',
        starterCode: `def square_dict(numbers):
    # Your code here
    pass`,
        solution: `def square_dict(numbers):
    return {num: num**2 for num in numbers}`,
        tests: [
          { input: [[1, 2, 3, 4]], expected: {1: 1, 2: 4, 3: 9, 4: 16}, deepEqual: true },
        ],
        hint: 'Use dictionary comprehension: {key: value for item in iterable}',
        explanation: 'Dictionary comprehensions are a powerful way to create dictionaries in Python.',
      },
      {
        id: 'py-a3',
        title: 'Generator Function',
        description: 'Write a generator function called `fibonacci` that yields Fibonacci numbers.',
        difficulty: 'advanced',
        language: 'python',
        starterCode: `def fibonacci():
    # Your code here
    pass`,
        solution: `def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b`,
        tests: [
          { input: [], expected: 'generator', typeCheck: true },
        ],
        hint: 'Use yield to create a generator. Start with 0 and 1, then yield the sum.',
        explanation: 'Generators are memory-efficient functions that yield values one at a time.',
      },
      {
        id: 'py-a4',
        title: 'Decorator Function',
        description: 'Write a decorator called `timer` that measures and prints the execution time of a function.',
        difficulty: 'advanced',
        language: 'python',
        starterCode: `import time

def timer(func):
    # Your code here
    pass`,
        solution: `import time

def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f} seconds")
        return result
    return wrapper`,
        tests: [
          { input: [], expected: 'function', typeCheck: true },
        ],
        hint: 'Create a wrapper function that measures time before and after calling the original function.',
        explanation: 'Decorators are a powerful Python feature for modifying or extending function behavior.',
      },
      {
        id: 'py-a5',
        title: 'Context Manager',
        description: 'Write a context manager class called `FileManager` that opens a file and automatically closes it.',
        difficulty: 'advanced',
        language: 'python',
        starterCode: `class FileManager:
    # Your code here
    pass`,
        solution: `class FileManager:
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode
        self.file = None
    
    def __enter__(self):
        self.file = open(self.filename, self.mode)
        return self.file
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.file.close()`,
        tests: [
          { input: [], expected: 'class', typeCheck: true },
        ],
        hint: 'Implement __enter__ and __exit__ methods to create a context manager.',
        explanation: 'Context managers ensure proper resource management using the with statement.',
      },
    ],
  },
  java: {
    beginner: [
      {
        id: 'java-b1',
        title: 'Sum Two Numbers',
        description: 'Write a method called `sumNumbers` that takes two integers as parameters and returns their sum.',
        difficulty: 'beginner',
        language: 'java',
        starterCode: `public static int sumNumbers(int a, int b) {
    // Your code here
    return 0;
}`,
        solution: `public static int sumNumbers(int a, int b) {
    return a + b;
}`,
        tests: [
          { input: [2, 3], expected: 5 },
          { input: [10, 20], expected: 30 },
        ],
        hint: 'Use the + operator to add two numbers together.',
        explanation: 'This challenge teaches basic Java method syntax and arithmetic operations.',
      },
      {
        id: 'java-b2',
        title: 'Find Maximum Number',
        description: 'Write a method called `findMax` that takes an array of integers and returns the largest number.',
        difficulty: 'beginner',
        language: 'java',
        starterCode: `public static int findMax(int[] numbers) {
    // Your code here
    return 0;
}`,
        solution: `public static int findMax(int[] numbers) {
    int max = numbers[0];
    for (int num : numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}`,
        tests: [
          { input: [[1, 5, 3, 9, 2]], expected: 9 },
          { input: [[10, 20, 30]], expected: 30 },
        ],
        hint: 'Use a for-each loop to iterate through the array and find the maximum.',
        explanation: 'This challenge introduces Java arrays and enhanced for loops.',
      },
      {
        id: 'java-b3',
        title: 'Reverse a String',
        description: 'Write a method called `reverseString` that takes a String and returns it reversed.',
        difficulty: 'beginner',
        language: 'java',
        starterCode: `public static String reverseString(String str) {
    // Your code here
    return "";
}`,
        solution: `public static String reverseString(String str) {
    return new StringBuilder(str).reverse().toString();
}`,
        tests: [
          { input: ['hello'], expected: 'olleh' },
          { input: ['world'], expected: 'dlrow' },
        ],
        hint: 'Use StringBuilder\'s reverse() method, or build the string character by character.',
        explanation: 'This challenge teaches Java String manipulation using StringBuilder.',
      },
      {
        id: 'java-b4',
        title: 'Check if Even',
        description: 'Write a method called `isEven` that takes an integer and returns true if it\'s even, false otherwise.',
        difficulty: 'beginner',
        language: 'java',
        starterCode: `public static boolean isEven(int num) {
    // Your code here
    return false;
}`,
        solution: `public static boolean isEven(int num) {
    return num % 2 == 0;
}`,
        tests: [
          { input: [4], expected: true },
          { input: [7], expected: false },
        ],
        hint: 'Use the modulo operator (%) to check the remainder when dividing by 2.',
        explanation: 'This challenge introduces the modulo operator and boolean return types in Java.',
      },
      {
        id: 'java-b5',
        title: 'Count Vowels',
        description: 'Write a method called `countVowels` that takes a String and returns the number of vowels (a, e, i, o, u) in it.',
        difficulty: 'beginner',
        language: 'java',
        starterCode: `public static int countVowels(String str) {
    // Your code here
    return 0;
}`,
        solution: `public static int countVowels(String str) {
    String vowels = "aeiouAEIOU";
    int count = 0;
    for (char c : str.toCharArray()) {
        if (vowels.indexOf(c) != -1) {
            count++;
        }
    }
    return count;
}`,
        tests: [
          { input: ['hello'], expected: 2 },
          { input: ['world'], expected: 1 },
        ],
        hint: 'Loop through each character and check if it\'s a vowel using indexOf().',
        explanation: 'This challenge teaches character iteration and string searching in Java.',
      },
    ],
    intermediate: [
      {
        id: 'java-i1',
        title: 'Remove Duplicates',
        description: 'Write a method called `removeDuplicates` that takes an array of integers and returns a new array with duplicates removed.',
        difficulty: 'intermediate',
        language: 'java',
        starterCode: `public static int[] removeDuplicates(int[] arr) {
    // Your code here
    return new int[0];
}`,
        solution: `public static int[] removeDuplicates(int[] arr) {
    Set<Integer> set = new LinkedHashSet<>();
    for (int num : arr) {
        set.add(num);
    }
    return set.stream().mapToInt(i -> i).toArray();
}`,
        tests: [
          { input: [[1, 2, 2, 3, 4, 4, 5]], expected: [1, 2, 3, 4, 5], deepEqual: true },
        ],
        hint: 'Use a Set to store unique values, then convert back to an array.',
        explanation: 'This challenge introduces Java Collections, specifically Set and LinkedHashSet.',
      },
      {
        id: 'java-i2',
        title: 'Find Longest Word',
        description: 'Write a method called `findLongestWord` that takes a sentence and returns the longest word.',
        difficulty: 'intermediate',
        language: 'java',
        starterCode: `public static String findLongestWord(String sentence) {
    // Your code here
    return "";
}`,
        solution: `public static String findLongestWord(String sentence) {
    String[] words = sentence.split(" ");
    String longest = words[0];
    for (String word : words) {
        if (word.length() > longest.length()) {
            longest = word;
        }
    }
    return longest;
}`,
        tests: [
          { input: ['The quick brown fox'], expected: 'quick' },
          { input: ['Java is awesome'], expected: 'awesome' },
        ],
        hint: 'Split the sentence into words, then find the word with maximum length.',
        explanation: 'This challenge teaches string splitting and array iteration in Java.',
      },
      {
        id: 'java-i3',
        title: 'Flatten Array',
        description: 'Write a method called `flattenArray` that takes a 2D array and returns a 1D array.',
        difficulty: 'intermediate',
        language: 'java',
        starterCode: `public static int[] flattenArray(int[][] arr) {
    // Your code here
    return new int[0];
}`,
        solution: `public static int[] flattenArray(int[][] arr) {
    List<Integer> list = new ArrayList<>();
    for (int[] row : arr) {
        for (int num : row) {
            list.add(num);
        }
    }
    return list.stream().mapToInt(i -> i).toArray();
}`,
        tests: [
          { input: [[[1, 2], [3, 4], [5]]], expected: [1, 2, 3, 4, 5], deepEqual: true },
        ],
        hint: 'Use nested loops to iterate through the 2D array and collect all elements.',
        explanation: 'This challenge teaches 2D arrays and Java Streams for array conversion.',
      },
      {
        id: 'java-i4',
        title: 'Capitalize Words',
        description: 'Write a method called `capitalizeWords` that takes a sentence and returns it with the first letter of each word capitalized.',
        difficulty: 'intermediate',
        language: 'java',
        starterCode: `public static String capitalizeWords(String sentence) {
    // Your code here
    return "";
}`,
        solution: `public static String capitalizeWords(String sentence) {
    String[] words = sentence.split(" ");
    StringBuilder result = new StringBuilder();
    for (String word : words) {
        if (word.length() > 0) {
            result.append(Character.toUpperCase(word.charAt(0)))
                  .append(word.substring(1).toLowerCase())
                  .append(" ");
        }
    }
    return result.toString().trim();
}`,
        tests: [
          { input: ['hello world'], expected: 'Hello World' },
          { input: ['java is fun'], expected: 'Java Is Fun' },
        ],
        hint: 'Split into words, capitalize first letter, lowercase the rest, then join.',
        explanation: 'This challenge teaches character manipulation and StringBuilder usage.',
      },
      {
        id: 'java-i5',
        title: 'Find Missing Number',
        description: 'Write a method called `findMissingNumber` that takes an array of consecutive numbers with one missing and returns the missing number.',
        difficulty: 'intermediate',
        language: 'java',
        starterCode: `public static int findMissingNumber(int[] arr) {
    // Your code here
    return 0;
}`,
        solution: `public static int findMissingNumber(int[] arr) {
    int n = arr.length + 1;
    int expectedSum = n * (n + 1) / 2;
    int actualSum = 0;
    for (int num : arr) {
        actualSum += num;
    }
    return expectedSum - actualSum;
}`,
        tests: [
          { input: [[1, 2, 4, 5]], expected: 3 },
          { input: [[1, 3, 4, 5]], expected: 2 },
        ],
        hint: 'Calculate the expected sum of all numbers, subtract the actual sum.',
        explanation: 'This challenge teaches mathematical formulas and array iteration in Java.',
      },
    ],
    advanced: [
      {
        id: 'java-a1',
        title: 'Deep Clone Object',
        description: 'Write a method that creates a deep copy of a nested object structure using serialization.',
        difficulty: 'advanced',
        language: 'java',
        starterCode: `import java.io.*;

public static Object deepClone(Object obj) {
    // Your code here
    return null;
}`,
        solution: `import java.io.*;

public static Object deepClone(Object obj) {
    try {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ObjectOutputStream oos = new ObjectOutputStream(baos);
        oos.writeObject(obj);
        oos.close();
        
        ByteArrayInputStream bais = new ByteArrayInputStream(baos.toByteArray());
        ObjectInputStream ois = new ObjectInputStream(bais);
        return ois.readObject();
    } catch (Exception e) {
        return null;
    }
}`,
        tests: [
          { input: [], expected: 'method', typeCheck: true },
        ],
        hint: 'Use Java serialization to create a deep copy of the object.',
        explanation: 'This challenge teaches Java serialization for deep cloning objects.',
      },
      {
        id: 'java-a2',
        title: 'Generic Method',
        description: 'Write a generic method called `swap` that swaps two elements in an array.',
        difficulty: 'advanced',
        language: 'java',
        starterCode: `public static <T> void swap(T[] array, int i, int j) {
    // Your code here
}`,
        solution: `public static <T> void swap(T[] array, int i, int j) {
    T temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}`,
        tests: [
          { input: [], expected: 'method', typeCheck: true },
        ],
        hint: 'Use a temporary variable to swap the elements at the given indices.',
        explanation: 'This challenge teaches Java generics for writing type-safe, reusable code.',
      },
      {
        id: 'java-a3',
        title: 'Lambda Expression',
        description: 'Write a method that uses a lambda expression to filter even numbers from a list.',
        difficulty: 'advanced',
        language: 'java',
        starterCode: `import java.util.*;

public static List<Integer> filterEven(List<Integer> numbers) {
    // Your code here
    return new ArrayList<>();
}`,
        solution: `import java.util.*;
import java.util.stream.Collectors;

public static List<Integer> filterEven(List<Integer> numbers) {
    return numbers.stream()
                  .filter(n -> n % 2 == 0)
                  .collect(Collectors.toList());
}`,
        tests: [
          { input: [[1, 2, 3, 4, 5, 6]], expected: [2, 4, 6], deepEqual: true },
        ],
        hint: 'Use Java Streams with a lambda expression to filter even numbers.',
        explanation: 'This challenge teaches Java 8+ features: Streams, lambdas, and functional programming.',
      },
      {
        id: 'java-a4',
        title: 'Thread-Safe Counter',
        description: 'Write a thread-safe counter class using synchronized methods.',
        difficulty: 'advanced',
        language: 'java',
        starterCode: `public class ThreadSafeCounter {
    private int count = 0;
    
    // Your code here
}`,
        solution: `public class ThreadSafeCounter {
    private int count = 0;
    
    public synchronized void increment() {
        count++;
    }
    
    public synchronized void decrement() {
        count--;
    }
    
    public synchronized int getCount() {
        return count;
    }
}`,
        tests: [
          { input: [], expected: 'class', typeCheck: true },
        ],
        hint: 'Use the synchronized keyword to make methods thread-safe.',
        explanation: 'This challenge teaches Java concurrency and thread synchronization.',
      },
      {
        id: 'java-a5',
        title: 'Custom Exception',
        description: 'Create a custom exception class called `InvalidInputException` and use it in a method.',
        difficulty: 'advanced',
        language: 'java',
        starterCode: `class InvalidInputException extends Exception {
    // Your code here
}

public static void validate(int num) throws InvalidInputException {
    // Your code here
}`,
        solution: `class InvalidInputException extends Exception {
    public InvalidInputException(String message) {
        super(message);
    }
}

public static void validate(int num) throws InvalidInputException {
    if (num < 0) {
        throw new InvalidInputException("Number must be positive");
    }
}`,
        tests: [
          { input: [], expected: 'class', typeCheck: true },
        ],
        hint: 'Create a custom exception class that extends Exception and add a constructor.',
        explanation: 'This challenge teaches exception handling and creating custom exceptions in Java.',
      },
    ],
  },
  react: {
    beginner: [
      {
        id: 'react-b1',
        title: 'Create Counter Component',
        description: 'Create a React component called `Counter` that displays a number and has buttons to increment and decrement it.',
        difficulty: 'beginner',
        language: 'react',
        starterCode: `import React, { useState } from 'react';

function Counter() {
  // Your code here
  return (
    <div>
      {/* Your JSX here */}
    </div>
  );
}`,
        solution: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}`,
        tests: [
          { input: [], expected: 'component', typeCheck: true },
        ],
        hint: 'Use useState hook to manage the count state, and create buttons with onClick handlers.',
        explanation: 'This challenge teaches React hooks, specifically useState, which is fundamental for managing component state.',
      },
      {
        id: 'react-b2',
        title: 'Display User Input',
        description: 'Create a component that displays text as the user types in an input field.',
        difficulty: 'beginner',
        language: 'react',
        starterCode: `import React, { useState } from 'react';

function DisplayInput() {
  // Your code here
  return (
    <div>
      {/* Your JSX here */}
    </div>
  );
}`,
        solution: `import React, { useState } from 'react';

function DisplayInput() {
  const [input, setInput] = useState('');
  
  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <p>You typed: {input}</p>
    </div>
  );
}`,
        tests: [
          { input: [], expected: 'component', typeCheck: true },
        ],
        hint: 'Use useState to store the input value and update it with onChange.',
        explanation: 'This challenge teaches controlled components and two-way data binding in React.',
      },
      {
        id: 'react-b3',
        title: 'Toggle Visibility',
        description: 'Create a component with a button that toggles the visibility of a paragraph.',
        difficulty: 'beginner',
        language: 'react',
        starterCode: `import React, { useState } from 'react';

function ToggleVisibility() {
  // Your code here
  return (
    <div>
      {/* Your JSX here */}
    </div>
  );
}`,
        solution: `import React, { useState } from 'react';

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(true);
  
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <p>This text is visible!</p>}
    </div>
  );
}`,
        tests: [
          { input: [], expected: 'component', typeCheck: true },
        ],
        hint: 'Use useState to track visibility state and conditional rendering to show/hide content.',
        explanation: 'This challenge teaches conditional rendering and boolean state management.',
      },
      {
        id: 'react-b4',
        title: 'Simple Form',
        description: 'Create a form component with name and email fields that displays the submitted values.',
        difficulty: 'beginner',
        language: 'react',
        starterCode: `import React, { useState } from 'react';

function SimpleForm() {
  // Your code here
  return (
    <div>
      {/* Your JSX here */}
    </div>
  );
}`,
        solution: `import React, { useState } from 'react';

function SimpleForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Name" 
      />
      <input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" 
      />
      <button type="submit">Submit</button>
      {submitted && <p>Name: {name}, Email: {email}</p>}
    </form>
  );
}`,
        tests: [
          { input: [], expected: 'component', typeCheck: true },
        ],
        hint: 'Use multiple useState hooks for form fields and handle form submission.',
        explanation: 'This challenge teaches form handling and managing multiple state values in React.',
      },
      {
        id: 'react-b5',
        title: 'List Rendering',
        description: 'Create a component that renders a list of items from an array.',
        difficulty: 'beginner',
        language: 'react',
        starterCode: `import React from 'react';

function ItemList() {
  const items = ['Apple', 'Banana', 'Cherry'];
  // Your code here
  return (
    <div>
      {/* Your JSX here */}
    </div>
  );
}`,
        solution: `import React from 'react';

function ItemList() {
  const items = ['Apple', 'Banana', 'Cherry'];
  
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}`,
        tests: [
          { input: [], expected: 'component', typeCheck: true },
        ],
        hint: 'Use map() to iterate through the array and render each item as a list element.',
        explanation: 'This challenge teaches list rendering and the map() method in React.',
      },
    ],
    intermediate: [
      {
        id: 'react-i1',
        title: 'Todo List Component',
        description: 'Create a TodoList component that allows adding and removing todo items.',
        difficulty: 'intermediate',
        language: 'react',
        starterCode: `import React, { useState } from 'react';

function TodoList() {
  // Your code here
  return (
    <div>
      {/* Your JSX here */}
    </div>
  );
}`,
        solution: `import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };
  
  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}`,
        tests: [
          { input: [], expected: 'component', typeCheck: true },
        ],
        hint: 'Use useState to manage both the todos array and input value. Use map() to render the list.',
        explanation: 'This challenge teaches managing multiple state values and rendering lists in React.',
      },
      {
        id: 'react-i2',
        title: 'Filter List',
        description: 'Create a component that filters a list of items based on user input.',
        difficulty: 'intermediate',
        language: 'react',
        starterCode: `import React, { useState } from 'react';

function FilterList() {
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
  // Your code here
  return (
    <div>
      {/* Your JSX here */}
    </div>
  );
}`,
        solution: `import React, { useState } from 'react';

function FilterList() {
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
  const [filter, setFilter] = useState('');
  
  const filteredItems = items.filter(item => 
    item.toLowerCase().includes(filter.toLowerCase())
  );
  
  return (
    <div>
      <input 
        value={filter} 
        onChange={(e) => setFilter(e.target.value)} 
        placeholder="Filter items..." 
      />
      <ul>
        {filteredItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}`,
        tests: [
          { input: [], expected: 'component', typeCheck: true },
        ],
        hint: 'Use filter() to filter the array based on the input value.',
        explanation: 'This challenge teaches array filtering and dynamic list rendering in React.',
      },
      {
        id: 'react-i3',
        title: 'Use Effect Hook',
        description: 'Create a component that displays the current time and updates every second using useEffect.',
        difficulty: 'intermediate',
        language: 'react',
        starterCode: `import React, { useState, useEffect } from 'react';

function Clock() {
  // Your code here
  return (
    <div>
      {/* Your JSX here */}
    </div>
  );
}`,
        solution: `import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return <div>Current time: {time.toLocaleTimeString()}</div>;
}`,
        tests: [
          { input: [], expected: 'component', typeCheck: true },
        ],
        hint: 'Use useEffect with setInterval to update time, and return a cleanup function.',
        explanation: 'This challenge teaches useEffect hook for side effects and cleanup in React.',
      },
      {
        id: 'react-i4',
        title: 'Custom Hook',
        description: 'Create a custom hook called `useCounter` and use it in a component.',
        difficulty: 'intermediate',
        language: 'react',
        starterCode: `import React from 'react';

function useCounter(initialValue = 0) {
  // Your code here
}

function Counter() {
  // Your code here
  return (
    <div>
      {/* Your JSX here */}
    </div>
  );
}`,
        solution: `import React, { useState } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
}

function Counter() {
  const { count, increment, decrement, reset } = useCounter(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}`,
        tests: [
          { input: [], expected: 'component', typeCheck: true },
        ],
        hint: 'Create a custom hook that returns count and functions to modify it.',
        explanation: 'This challenge teaches creating and using custom hooks in React.',
      },
      {
        id: 'react-i5',
        title: 'Conditional Rendering',
        description: 'Create a component that conditionally renders different content based on user role.',
        difficulty: 'intermediate',
        language: 'react',
        starterCode: `import React, { useState } from 'react';

function UserDashboard() {
  // Your code here
  return (
    <div>
      {/* Your JSX here */}
    </div>
  );
}`,
        solution: `import React, { useState } from 'react';

function UserDashboard() {
  const [role, setRole] = useState('user');
  
  return (
    <div>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      {role === 'admin' ? (
        <div>
          <h2>Admin Dashboard</h2>
          <p>You have admin privileges</p>
        </div>
      ) : (
        <div>
          <h2>User Dashboard</h2>
          <p>Welcome, user!</p>
        </div>
      )}
    </div>
  );
}`,
        tests: [
          { input: [], expected: 'component', typeCheck: true },
        ],
        hint: 'Use ternary operator or && operator for conditional rendering based on role.',
        explanation: 'This challenge teaches advanced conditional rendering patterns in React.',
      },
    ],
    advanced: [
      {
        id: 'react-a1',
        title: 'Context API',
        description: 'Create a ThemeContext and use it to toggle between light and dark themes.',
        difficulty: 'advanced',
        language: 'react',
        starterCode: `import React, { createContext, useContext, useState } from 'react';

// Your code here

function ThemeProvider({ children }) {
  // Your code here
}

function ThemedComponent() {
  // Your code here
  return <div>{/* Your JSX */}</div>;
}`,
        solution: `import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <div style={{ 
      background: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      padding: '20px'
    }}>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}`,
        tests: [
          { input: [], expected: 'component', typeCheck: true },
        ],
        hint: 'Create a context with createContext, provide it with a Provider, and consume it with useContext.',
        explanation: 'This challenge teaches React Context API for global state management.',
      },
      {
        id: 'react-a2',
        title: 'Memo and useMemo',
        description: 'Create a component that uses React.memo and useMemo to optimize performance.',
        difficulty: 'advanced',
        language: 'react',
        starterCode: `import React, { useState, useMemo, memo } from 'react';

// Your code here`,
        solution: `import React, { useState, useMemo, memo } from 'react';

const ExpensiveComponent = memo(({ value }) => {
  const expensiveValue = useMemo(() => {
    let result = 0;
    for (let i = 0; i < value * 1000000; i++) {
      result += i;
    }
    return result;
  }, [value]);
  
  return <div>Expensive calculation: {expensiveValue}</div>;
});

function App() {
  const [count, setCount] = useState(1);
  const [other, setOther] = useState(0);
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <button onClick={() => setOther(other + 1)}>Other: {other}</button>
      <ExpensiveComponent value={count} />
    </div>
  );
}`,
        tests: [
          { input: [], expected: 'component', typeCheck: true },
        ],
        hint: 'Use React.memo to memoize components and useMemo for expensive calculations.',
        explanation: 'This challenge teaches React performance optimization techniques.',
      },
      {
        id: 'react-a3',
        title: 'useReducer Hook',
        description: 'Create a todo app using useReducer instead of useState for state management.',
        difficulty: 'advanced',
        language: 'react',
        starterCode: `import React, { useReducer } from 'react';

// Your code here`,
        solution: `import React, { useReducer } from 'react';

const initialState = { todos: [] };

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return { todos: [...state.todos, action.payload] };
    case 'REMOVE':
      return { todos: state.todos.filter((_, i) => i !== action.payload) };
    case 'CLEAR':
      return { todos: [] };
    default:
      return state;
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = React.useState('');
  
  const addTodo = () => {
    if (input.trim()) {
      dispatch({ type: 'ADD', payload: input });
      setInput('');
    }
  };
  
  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <button onClick={() => dispatch({ type: 'CLEAR' })}>Clear All</button>
      <ul>
        {state.todos.map((todo, i) => (
          <li key={i}>
            {todo}
            <button onClick={() => dispatch({ type: 'REMOVE', payload: i })}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
        tests: [
          { input: [], expected: 'component', typeCheck: true },
        ],
        hint: 'Create a reducer function and use useReducer hook for complex state management.',
        explanation: 'This challenge teaches useReducer for managing complex state logic in React.',
      },
      {
        id: 'react-a4',
        title: 'Error Boundary',
        description: 'Create an Error Boundary component to catch and handle React errors.',
        difficulty: 'advanced',
        language: 'react',
        starterCode: `import React from 'react';

// Your code here`,
        solution: `import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong: {this.state.error?.message}</h2>;
    }
    return this.props.children;
  }
}

function BuggyComponent() {
  throw new Error('I crashed!');
}

function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}`,
        tests: [
          { input: [], expected: 'component', typeCheck: true },
        ],
        hint: 'Create a class component with getDerivedStateFromError and componentDidCatch methods.',
        explanation: 'This challenge teaches error boundaries for graceful error handling in React.',
      },
      {
        id: 'react-a5',
        title: 'Higher Order Component',
        description: 'Create a Higher Order Component (HOC) that adds authentication to a component.',
        difficulty: 'advanced',
        language: 'react',
        starterCode: `import React from 'react';

// Your code here`,
        solution: `import React from 'react';

function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    
    React.useEffect(() => {
      // Simulate auth check
      setIsAuthenticated(true);
    }, []);
    
    if (!isAuthenticated) {
      return <div>Please log in to access this component.</div>;
    }
    
    return <Component {...props} />;
  };
}

function ProtectedContent() {
  return <div>This is protected content!</div>;
}

const AuthenticatedContent = withAuth(ProtectedContent);

function App() {
  return <AuthenticatedContent />;
}`,
        tests: [
          { input: [], expected: 'component', typeCheck: true },
        ],
        hint: 'Create a function that takes a component and returns a new component with added functionality.',
        explanation: 'This challenge teaches Higher Order Components (HOCs) for component composition in React.',
      },
    ],
  },
  php: {
    beginner: [
      {
        id: 'php-b1',
        title: 'Sum Two Numbers',
        description: 'Write a function called `sumNumbers` that takes two numbers as parameters and returns their sum.',
        difficulty: 'beginner',
        language: 'php',
        starterCode: `<?php
function sumNumbers($a, $b) {
    // Your code here
}`,
        solution: `<?php
function sumNumbers($a, $b) {
    return $a + $b;
}`,
        tests: [
          { input: [2, 3], expected: 5 },
          { input: [10, 20], expected: 30 },
        ],
        hint: 'Use the + operator to add two numbers together.',
        explanation: 'This challenge teaches basic PHP function syntax and arithmetic operations.',
      },
      {
        id: 'php-b2',
        title: 'Find Maximum Number',
        description: 'Write a function called `findMax` that takes an array of numbers and returns the largest number.',
        difficulty: 'beginner',
        language: 'php',
        starterCode: `<?php
function findMax($numbers) {
    // Your code here
}`,
        solution: `<?php
function findMax($numbers) {
    return max($numbers);
}`,
        tests: [
          { input: [[1, 5, 3, 9, 2]], expected: 9 },
          { input: [[10, 20, 30]], expected: 30 },
        ],
        hint: 'Use PHP\'s built-in max() function, or iterate through the array.',
        explanation: 'This challenge introduces PHP arrays and built-in functions.',
      },
      {
        id: 'php-b3',
        title: 'Reverse a String',
        description: 'Write a function called `reverseString` that takes a string and returns it reversed.',
        difficulty: 'beginner',
        language: 'php',
        starterCode: `<?php
function reverseString($str) {
    // Your code here
}`,
        solution: `<?php
function reverseString($str) {
    return strrev($str);
}`,
        tests: [
          { input: ['hello'], expected: 'olleh' },
          { input: ['world'], expected: 'dlrow' },
        ],
        hint: 'Use PHP\'s strrev() function to reverse a string.',
        explanation: 'This challenge teaches PHP string manipulation functions.',
      },
      {
        id: 'php-b4',
        title: 'Check if Even',
        description: 'Write a function called `isEven` that takes a number and returns true if it\'s even, false otherwise.',
        difficulty: 'beginner',
        language: 'php',
        starterCode: `<?php
function isEven($num) {
    // Your code here
}`,
        solution: `<?php
function isEven($num) {
    return $num % 2 == 0;
}`,
        tests: [
          { input: [4], expected: true },
          { input: [7], expected: false },
        ],
        hint: 'Use the modulo operator (%) to check the remainder when dividing by 2.',
        explanation: 'This challenge introduces the modulo operator in PHP.',
      },
      {
        id: 'php-b5',
        title: 'Count Vowels',
        description: 'Write a function called `countVowels` that takes a string and returns the number of vowels.',
        difficulty: 'beginner',
        language: 'php',
        starterCode: `<?php
function countVowels($str) {
    // Your code here
}`,
        solution: `<?php
function countVowels($str) {
    return preg_match_all('/[aeiouAEIOU]/', $str);
}`,
        tests: [
          { input: ['hello'], expected: 2 },
          { input: ['world'], expected: 1 },
        ],
        hint: 'Use preg_match_all() with a regular expression to count vowels.',
        explanation: 'This challenge teaches PHP regular expressions for pattern matching.',
      },
    ],
    intermediate: [
      {
        id: 'php-i1',
        title: 'Remove Duplicates',
        description: 'Write a function called `removeDuplicates` that takes an array and returns a new array with duplicates removed.',
        difficulty: 'intermediate',
        language: 'php',
        starterCode: `<?php
function removeDuplicates($arr) {
    // Your code here
}`,
        solution: `<?php
function removeDuplicates($arr) {
    return array_unique($arr);
}`,
        tests: [
          { input: [[1, 2, 2, 3, 4, 4, 5]], expected: [1, 2, 3, 4, 5], deepEqual: true },
        ],
        hint: 'Use PHP\'s array_unique() function to remove duplicates.',
        explanation: 'This challenge teaches PHP array functions for data manipulation.',
      },
      {
        id: 'php-i2',
        title: 'Find Longest Word',
        description: 'Write a function called `findLongestWord` that takes a sentence and returns the longest word.',
        difficulty: 'intermediate',
        language: 'php',
        starterCode: `<?php
function findLongestWord($sentence) {
    // Your code here
}`,
        solution: `<?php
function findLongestWord($sentence) {
    $words = explode(' ', $sentence);
    $longest = $words[0];
    foreach ($words as $word) {
        if (strlen($word) > strlen($longest)) {
            $longest = $word;
        }
    }
    return $longest;
}`,
        tests: [
          { input: ['The quick brown fox'], expected: 'quick' },
          { input: ['PHP is awesome'], expected: 'awesome' },
        ],
        hint: 'Use explode() to split the sentence, then find the word with maximum length.',
        explanation: 'This challenge teaches string splitting and array iteration in PHP.',
      },
      {
        id: 'php-i3',
        title: 'Flatten Array',
        description: 'Write a function called `flattenArray` that takes a nested array and returns a flattened array.',
        difficulty: 'intermediate',
        language: 'php',
        starterCode: `<?php
function flattenArray($arr) {
    // Your code here
}`,
        solution: `<?php
function flattenArray($arr) {
    $result = [];
    foreach ($arr as $item) {
        if (is_array($item)) {
            $result = array_merge($result, flattenArray($item));
        } else {
            $result[] = $item;
        }
    }
    return $result;
}`,
        tests: [
          { input: [[[1, 2], [3, 4], [5]]], expected: [1, 2, 3, 4, 5], deepEqual: true },
        ],
        hint: 'Use recursion to handle nested arrays. Check if an item is an array using is_array().',
        explanation: 'This challenge teaches recursion and array manipulation in PHP.',
      },
      {
        id: 'php-i4',
        title: 'Capitalize Words',
        description: 'Write a function called `capitalizeWords` that capitalizes the first letter of each word.',
        difficulty: 'intermediate',
        language: 'php',
        starterCode: `<?php
function capitalizeWords($sentence) {
    // Your code here
}`,
        solution: `<?php
function capitalizeWords($sentence) {
    return ucwords(strtolower($sentence));
}`,
        tests: [
          { input: ['hello world'], expected: 'Hello World' },
          { input: ['php is fun'], expected: 'Php Is Fun' },
        ],
        hint: 'Use ucwords() to capitalize words and strtolower() to normalize the string first.',
        explanation: 'This challenge teaches PHP string case manipulation functions.',
      },
      {
        id: 'php-i5',
        title: 'Validate Email',
        description: 'Write a function called `validateEmail` that checks if a string is a valid email address.',
        difficulty: 'intermediate',
        language: 'php',
        starterCode: `<?php
function validateEmail($email) {
    // Your code here
}`,
        solution: `<?php
function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}`,
        tests: [
          { input: ['test@example.com'], expected: true },
          { input: ['invalid-email'], expected: false },
        ],
        hint: 'Use PHP\'s filter_var() function with FILTER_VALIDATE_EMAIL.',
        explanation: 'This challenge teaches PHP filter functions for data validation.',
      },
    ],
    advanced: [
      {
        id: 'php-a1',
        title: 'Class and Object',
        description: 'Create a PHP class called `User` with properties and methods.',
        difficulty: 'advanced',
        language: 'php',
        starterCode: `<?php
class User {
    // Your code here
}`,
        solution: `<?php
class User {
    private $name;
    private $email;
    
    public function __construct($name, $email) {
        $this->name = $name;
        $this->email = $email;
    }
    
    public function getName() {
        return $this->name;
    }
    
    public function getEmail() {
        return $this->email;
    }
}`,
        tests: [
          { input: [], expected: 'class', typeCheck: true },
        ],
        hint: 'Create a class with constructor, private properties, and getter methods.',
        explanation: 'This challenge teaches Object-Oriented Programming in PHP.',
      },
      {
        id: 'php-a2',
        title: 'Array Map Function',
        description: 'Write a function that uses array_map() to square all numbers in an array.',
        difficulty: 'advanced',
        language: 'php',
        starterCode: `<?php
function squareNumbers($numbers) {
    // Your code here
}`,
        solution: `<?php
function squareNumbers($numbers) {
    return array_map(function($n) {
        return $n * $n;
    }, $numbers);
}`,
        tests: [
          { input: [[1, 2, 3, 4]], expected: [1, 4, 9, 16], deepEqual: true },
        ],
        hint: 'Use array_map() with an anonymous function to transform each element.',
        explanation: 'This challenge teaches functional programming with array_map() in PHP.',
      },
      {
        id: 'php-a3',
        title: 'Exception Handling',
        description: 'Write a function that throws and catches custom exceptions.',
        difficulty: 'advanced',
        language: 'php',
        starterCode: `<?php
class CustomException extends Exception {}

function divide($a, $b) {
    // Your code here
}`,
        solution: `<?php
class CustomException extends Exception {}

function divide($a, $b) {
    if ($b == 0) {
        throw new CustomException("Division by zero is not allowed");
    }
    return $a / $b;
}

try {
    $result = divide(10, 0);
} catch (CustomException $e) {
    echo $e->getMessage();
}`,
        tests: [
          { input: [], expected: 'function', typeCheck: true },
        ],
        hint: 'Create a custom exception class and use try-catch blocks.',
        explanation: 'This challenge teaches exception handling and custom exceptions in PHP.',
      },
      {
        id: 'php-a4',
        title: 'Closure and Anonymous Functions',
        description: 'Write a function that returns a closure for creating multiplier functions.',
        difficulty: 'advanced',
        language: 'php',
        starterCode: `<?php
function createMultiplier($factor) {
    // Your code here
}`,
        solution: `<?php
function createMultiplier($factor) {
    return function($number) use ($factor) {
        return $number * $factor;
    };
}

$double = createMultiplier(2);
$triple = createMultiplier(3);`,
        tests: [
          { input: [], expected: 'function', typeCheck: true },
        ],
        hint: 'Return an anonymous function that uses the $factor variable with the use keyword.',
        explanation: 'This challenge teaches closures and anonymous functions in PHP.',
      },
      {
        id: 'php-a5',
        title: 'Array Reduce',
        description: 'Write a function that uses array_reduce() to calculate the sum of an array.',
        difficulty: 'advanced',
        language: 'php',
        starterCode: `<?php
function sumArray($numbers) {
    // Your code here
}`,
        solution: `<?php
function sumArray($numbers) {
    return array_reduce($numbers, function($carry, $item) {
        return $carry + $item;
    }, 0);
}`,
        tests: [
          { input: [[1, 2, 3, 4, 5]], expected: 15 },
          { input: [[10, 20, 30]], expected: 60 },
        ],
        hint: 'Use array_reduce() with an accumulator function.',
        explanation: 'This challenge teaches functional programming with array_reduce() in PHP.',
      },
    ],
  },
  html: {
    beginner: [
      {
        id: 'html-b1',
        title: 'Create Basic HTML Structure',
        description: 'Create a complete HTML document with doctype, html, head, and body tags.',
        difficulty: 'beginner',
        language: 'html',
        starterCode: `<!DOCTYPE html>
<html>
<head>
    <!-- Your code here -->
</head>
<body>
    <!-- Your code here -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Page</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>`,
        tests: [
          { input: [], expected: 'html', typeCheck: true },
        ],
        hint: 'Include proper meta tags in the head section and add content in the body.',
        explanation: 'This challenge teaches the basic structure of an HTML document and semantic HTML.',
      },
      {
        id: 'html-b2',
        title: 'Create Form',
        description: 'Create an HTML form with name, email, and message fields.',
        difficulty: 'beginner',
        language: 'html',
        starterCode: `<!DOCTYPE html>
<html>
<body>
    <!-- Your code here -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<body>
    <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        
        <button type="submit">Submit</button>
    </form>
</body>
</html>`,
        tests: [
          { input: [], expected: 'html', typeCheck: true },
        ],
        hint: 'Use form, label, input, textarea, and button elements.',
        explanation: 'This challenge teaches HTML form elements and form structure.',
      },
      {
        id: 'html-b3',
        title: 'Create Navigation Menu',
        description: 'Create a navigation menu with links using semantic HTML.',
        difficulty: 'beginner',
        language: 'html',
        starterCode: `<!DOCTYPE html>
<html>
<body>
    <!-- Your code here -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<body>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</body>
</html>`,
        tests: [
          { input: [], expected: 'html', typeCheck: true },
        ],
        hint: 'Use nav, ul, li, and a elements to create a navigation menu.',
        explanation: 'This challenge teaches semantic HTML and navigation structure.',
      },
      {
        id: 'html-b4',
        title: 'Create Table',
        description: 'Create an HTML table with headers and data rows.',
        difficulty: 'beginner',
        language: 'html',
        starterCode: `<!DOCTYPE html>
<html>
<body>
    <!-- Your code here -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<body>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John</td>
                <td>25</td>
                <td>New York</td>
            </tr>
            <tr>
                <td>Jane</td>
                <td>30</td>
                <td>London</td>
            </tr>
        </tbody>
    </table>
</body>
</html>`,
        tests: [
          { input: [], expected: 'html', typeCheck: true },
        ],
        hint: 'Use table, thead, tbody, tr, th, and td elements.',
        explanation: 'This challenge teaches HTML table structure and semantic markup.',
      },
      {
        id: 'html-b5',
        title: 'Create List',
        description: 'Create both an ordered list and an unordered list with items.',
        difficulty: 'beginner',
        language: 'html',
        starterCode: `<!DOCTYPE html>
<html>
<body>
    <!-- Your code here -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<body>
    <h3>Ordered List:</h3>
    <ol>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
    </ol>
    
    <h3>Unordered List:</h3>
    <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>Cherry</li>
    </ul>
</body>
</html>`,
        tests: [
          { input: [], expected: 'html', typeCheck: true },
        ],
        hint: 'Use ol for ordered lists and ul for unordered lists, with li for list items.',
        explanation: 'This challenge teaches HTML list elements and their usage.',
      },
    ],
    intermediate: [
      {
        id: 'html-i1',
        title: 'Semantic HTML Layout',
        description: 'Create a semantic HTML layout with header, nav, main, article, and footer.',
        difficulty: 'intermediate',
        language: 'html',
        starterCode: `<!DOCTYPE html>
<html>
<body>
    <!-- Your code here -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<body>
    <header>
        <h1>Website Title</h1>
    </header>
    <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
    </nav>
    <main>
        <article>
            <h2>Article Title</h2>
            <p>Article content goes here.</p>
        </article>
    </main>
    <footer>
        <p>&copy; 2024 Website</p>
    </footer>
</body>
</html>`,
        tests: [
          { input: [], expected: 'html', typeCheck: true },
        ],
        hint: 'Use semantic HTML5 elements: header, nav, main, article, and footer.',
        explanation: 'This challenge teaches semantic HTML5 elements for better document structure.',
      },
      {
        id: 'html-i2',
        title: 'Form with Validation',
        description: 'Create a form with HTML5 validation attributes.',
        difficulty: 'intermediate',
        language: 'html',
        starterCode: `<!DOCTYPE html>
<html>
<body>
    <!-- Your code here -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<body>
    <form>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        
        <label for="age">Age:</label>
        <input type="number" id="age" name="age" min="18" max="100" required>
        
        <label for="website">Website:</label>
        <input type="url" id="website" name="website" pattern="https?://.+">
        
        <button type="submit">Submit</button>
    </form>
</body>
</html>`,
        tests: [
          { input: [], expected: 'html', typeCheck: true },
        ],
        hint: 'Use HTML5 input types and validation attributes like required, min, max, and pattern.',
        explanation: 'This challenge teaches HTML5 form validation attributes.',
      },
      {
        id: 'html-i3',
        title: 'Media Elements',
        description: 'Create HTML with image, video, and audio elements.',
        difficulty: 'intermediate',
        language: 'html',
        starterCode: `<!DOCTYPE html>
<html>
<body>
    <!-- Your code here -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<body>
    <img src="image.jpg" alt="Description" width="300" height="200">
    
    <video width="320" height="240" controls>
        <source src="video.mp4" type="video/mp4">
        Your browser does not support video.
    </video>
    
    <audio controls>
        <source src="audio.mp3" type="audio/mpeg">
        Your browser does not support audio.
    </audio>
</body>
</html>`,
        tests: [
          { input: [], expected: 'html', typeCheck: true },
        ],
        hint: 'Use img, video, and audio elements with appropriate attributes.',
        explanation: 'This challenge teaches HTML media elements for images, video, and audio.',
      },
      {
        id: 'html-i4',
        title: 'Data Attributes',
        description: 'Create HTML elements with data attributes for storing custom data.',
        difficulty: 'intermediate',
        language: 'html',
        starterCode: `<!DOCTYPE html>
<html>
<body>
    <!-- Your code here -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<body>
    <div data-id="123" data-name="Product" data-price="29.99">
        Product Information
    </div>
    
    <button data-action="save" data-target="form1">
        Save Form
    </button>
</body>
</html>`,
        tests: [
          { input: [], expected: 'html', typeCheck: true },
        ],
        hint: 'Use data-* attributes to store custom data on HTML elements.',
        explanation: 'This challenge teaches HTML5 data attributes for storing custom information.',
      },
      {
        id: 'html-i5',
        title: 'Accessibility Attributes',
        description: 'Create accessible HTML with ARIA attributes and proper labeling.',
        difficulty: 'intermediate',
        language: 'html',
        starterCode: `<!DOCTYPE html>
<html>
<body>
    <!-- Your code here -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<body>
    <button aria-label="Close dialog" aria-describedby="close-desc">
        ×
    </button>
    <span id="close-desc" class="sr-only">Closes the current dialog window</span>
    
    <div role="alert" aria-live="polite">
        Important message appears here
    </div>
    
    <nav aria-label="Main navigation">
        <ul>
            <li><a href="#home">Home</a></li>
        </ul>
    </nav>
</body>
</html>`,
        tests: [
          { input: [], expected: 'html', typeCheck: true },
        ],
        hint: 'Use ARIA attributes like aria-label, aria-describedby, role, and aria-live.',
        explanation: 'This challenge teaches accessibility attributes for better screen reader support.',
      },
    ],
    advanced: [
      {
        id: 'html-a1',
        title: 'Custom Data Attributes',
        description: 'Create HTML with custom data attributes and demonstrate their usage.',
        difficulty: 'advanced',
        language: 'html',
        starterCode: `<!DOCTYPE html>
<html>
<body>
    <!-- Your code here -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<body>
    <div data-user-id="12345" 
         data-user-role="admin" 
         data-timestamp="2024-01-01">
        User Profile
    </div>
    
    <article data-category="tech" 
             data-author="John Doe" 
             data-publish-date="2024-01-01">
        Article Content
    </article>
</body>
</html>`,
        tests: [
          { input: [], expected: 'html', typeCheck: true },
        ],
        hint: 'Use data-* attributes with descriptive names to store custom data.',
        explanation: 'This challenge teaches advanced use of data attributes for metadata storage.',
      },
      {
        id: 'html-a2',
        title: 'Microdata Schema',
        description: 'Create HTML with microdata schema.org markup for structured data.',
        difficulty: 'advanced',
        language: 'html',
        starterCode: `<!DOCTYPE html>
<html>
<body>
    <!-- Your code here -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<body>
    <div itemscope itemtype="http://schema.org/Person">
        <h1 itemprop="name">John Doe</h1>
        <p itemprop="jobTitle">Web Developer</p>
        <p itemprop="email">john@example.com</p>
    </div>
    
    <article itemscope itemtype="http://schema.org/Article">
        <h2 itemprop="headline">Article Title</h2>
        <p itemprop="author" itemscope itemtype="http://schema.org/Person">
            <span itemprop="name">Jane Smith</span>
        </p>
    </article>
</body>
</html>`,
        tests: [
          { input: [], expected: 'html', typeCheck: true },
        ],
        hint: 'Use itemscope, itemtype, and itemprop attributes for microdata.',
        explanation: 'This challenge teaches microdata for SEO and structured data markup.',
      },
      {
        id: 'html-a3',
        title: 'SVG Integration',
        description: 'Create HTML with inline SVG graphics.',
        difficulty: 'advanced',
        language: 'html',
        starterCode: `<!DOCTYPE html>
<html>
<body>
    <!-- Your code here -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<body>
    <svg width="100" height="100">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
    </svg>
    
    <svg width="200" height="100">
        <rect width="200" height="100" fill="blue" />
        <text x="100" y="50" text-anchor="middle" fill="white">SVG Text</text>
    </svg>
</body>
</html>`,
        tests: [
          { input: [], expected: 'html', typeCheck: true },
        ],
        hint: 'Use SVG element with shapes like circle, rect, and text.',
        explanation: 'This challenge teaches inline SVG for scalable vector graphics in HTML.',
      },
      {
        id: 'html-a4',
        title: 'Canvas Element',
        description: 'Create HTML with canvas element for drawing graphics.',
        difficulty: 'advanced',
        language: 'html',
        starterCode: `<!DOCTYPE html>
<html>
<body>
    <!-- Your code here -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<body>
    <canvas id="myCanvas" width="200" height="100"></canvas>
    <script>
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'blue';
        ctx.fillRect(10, 10, 100, 50);
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(150, 50, 30, 0, 2 * Math.PI);
        ctx.fill();
    </script>
</body>
</html>`,
        tests: [
          { input: [], expected: 'html', typeCheck: true },
        ],
        hint: 'Use canvas element and JavaScript to draw shapes.',
        explanation: 'This challenge teaches HTML5 canvas for programmatic graphics rendering.',
      },
      {
        id: 'html-a5',
        title: 'Web Components Structure',
        description: 'Create HTML structure for a web component with template and slot.',
        difficulty: 'advanced',
        language: 'html',
        starterCode: `<!DOCTYPE html>
<html>
<body>
    <!-- Your code here -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<body>
    <template id="card-template">
        <div class="card">
            <slot name="title">Default Title</slot>
            <slot name="content">Default Content</slot>
        </div>
    </template>
    
    <div id="container"></div>
    <script>
        const template = document.getElementById('card-template');
        const container = document.getElementById('container');
        const clone = template.content.cloneNode(true);
        container.appendChild(clone);
    </script>
</body>
</html>`,
        tests: [
          { input: [], expected: 'html', typeCheck: true },
        ],
        hint: 'Use template element with slot elements for reusable component structure.',
        explanation: 'This challenge teaches HTML templates and slots for web components.',
      },
    ],
  },
  css: {
    beginner: [
      {
        id: 'css-b1',
        title: 'Center a Div',
        description: 'Write CSS to center a div both horizontally and vertically on the page.',
        difficulty: 'beginner',
        language: 'css',
        starterCode: `.container {
    /* Your code here */
}`,
        solution: `.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}`,
        tests: [
          { input: [], expected: 'css', typeCheck: true },
        ],
        hint: 'Use Flexbox with justify-content and align-items properties.',
        explanation: 'This challenge teaches Flexbox, a modern CSS layout method for centering elements.',
      },
      {
        id: 'css-b2',
        title: 'Style a Button',
        description: 'Write CSS to style a button with hover and active states.',
        difficulty: 'beginner',
        language: 'css',
        starterCode: `.button {
    /* Your code here */
}`,
        solution: `.button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.button:hover {
    background-color: #0056b3;
}

.button:active {
    background-color: #004085;
}`,
        tests: [
          { input: [], expected: 'css', typeCheck: true },
        ],
        hint: 'Use :hover and :active pseudo-classes for interactive states.',
        explanation: 'This challenge teaches CSS pseudo-classes for interactive elements.',
      },
      {
        id: 'css-b3',
        title: 'Create Grid Layout',
        description: 'Write CSS to create a 3-column grid layout.',
        difficulty: 'beginner',
        language: 'css',
        starterCode: `.grid {
    /* Your code here */
}`,
        solution: `.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}`,
        tests: [
          { input: [], expected: 'css', typeCheck: true },
        ],
        hint: 'Use CSS Grid with grid-template-columns and gap properties.',
        explanation: 'This challenge teaches CSS Grid for creating flexible layouts.',
      },
      {
        id: 'css-b4',
        title: 'Style Text',
        description: 'Write CSS to style text with font size, weight, color, and spacing.',
        difficulty: 'beginner',
        language: 'css',
        starterCode: `.text {
    /* Your code here */
}`,
        solution: `.text {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    line-height: 1.6;
    letter-spacing: 1px;
}`,
        tests: [
          { input: [], expected: 'css', typeCheck: true },
        ],
        hint: 'Use font-size, font-weight, color, line-height, and letter-spacing properties.',
        explanation: 'This challenge teaches CSS typography properties for text styling.',
      },
      {
        id: 'css-b5',
        title: 'Add Border and Shadow',
        description: 'Write CSS to add border, border-radius, and box-shadow to an element.',
        difficulty: 'beginner',
        language: 'css',
        starterCode: `.card {
    /* Your code here */
}`,
        solution: `.card {
    border: 2px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}`,
        tests: [
          { input: [], expected: 'css', typeCheck: true },
        ],
        hint: 'Use border, border-radius, and box-shadow properties.',
        explanation: 'This challenge teaches CSS border and shadow properties for visual effects.',
      },
    ],
    intermediate: [
      {
        id: 'css-i1',
        title: 'Responsive Design',
        description: 'Write CSS with media queries for responsive design on mobile and desktop.',
        difficulty: 'intermediate',
        language: 'css',
        starterCode: `.container {
    /* Your code here */
}`,
        solution: `.container {
    width: 100%;
    padding: 20px;
}

@media (max-width: 768px) {
    .container {
        padding: 10px;
        font-size: 14px;
    }
}

@media (min-width: 1200px) {
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
}`,
        tests: [
          { input: [], expected: 'css', typeCheck: true },
        ],
        hint: 'Use @media queries with max-width and min-width for responsive breakpoints.',
        explanation: 'This challenge teaches CSS media queries for responsive web design.',
      },
      {
        id: 'css-i2',
        title: 'CSS Variables',
        description: 'Create CSS custom properties (variables) and use them throughout your styles.',
        difficulty: 'intermediate',
        language: 'css',
        starterCode: `/* Your code here */`,
        solution: `:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --font-size-base: 16px;
    --spacing-unit: 8px;
}

.button {
    background-color: var(--primary-color);
    font-size: var(--font-size-base);
    padding: calc(var(--spacing-unit) * 2);
}

.text {
    color: var(--secondary-color);
    font-size: var(--font-size-base);
}`,
        tests: [
          { input: [], expected: 'css', typeCheck: true },
        ],
        hint: 'Define variables in :root and use var() to reference them.',
        explanation: 'This challenge teaches CSS custom properties for maintainable styling.',
      },
      {
        id: 'css-i3',
        title: 'Flexbox Layout',
        description: 'Create a flexible layout using Flexbox with space-between and align-items.',
        difficulty: 'intermediate',
        language: 'css',
        starterCode: `.flex-container {
    /* Your code here */
}`,
        solution: `.flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}

.flex-item {
    flex: 1;
    min-width: 200px;
}`,
        tests: [
          { input: [], expected: 'css', typeCheck: true },
        ],
        hint: 'Use flex properties: justify-content, align-items, flex-wrap, and flex.',
        explanation: 'This challenge teaches advanced Flexbox properties for complex layouts.',
      },
      {
        id: 'css-i4',
        title: 'CSS Animations',
        description: 'Create a CSS animation that fades in and moves an element.',
        difficulty: 'intermediate',
        language: 'css',
        starterCode: `.animated {
    /* Your code here */
}`,
        solution: `.animated {
    animation: fadeInMove 2s ease-in-out;
}

@keyframes fadeInMove {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}`,
        tests: [
          { input: [], expected: 'css', typeCheck: true },
        ],
        hint: 'Use @keyframes to define animation and animation property to apply it.',
        explanation: 'This challenge teaches CSS animations and keyframes for dynamic effects.',
      },
      {
        id: 'css-i5',
        title: 'CSS Transitions',
        description: 'Add smooth transitions to element state changes.',
        difficulty: 'intermediate',
        language: 'css',
        starterCode: `.box {
    /* Your code here */
}`,
        solution: `.box {
    width: 100px;
    height: 100px;
    background-color: blue;
    transition: all 0.3s ease;
}

.box:hover {
    width: 150px;
    height: 150px;
    background-color: red;
    transform: rotate(45deg);
}`,
        tests: [
          { input: [], expected: 'css', typeCheck: true },
        ],
        hint: 'Use transition property to animate changes smoothly.',
        explanation: 'This challenge teaches CSS transitions for smooth state changes.',
      },
    ],
    advanced: [
      {
        id: 'css-a1',
        title: 'CSS Grid Advanced',
        description: 'Create a complex grid layout with named grid areas.',
        difficulty: 'advanced',
        language: 'css',
        starterCode: `.grid-container {
    /* Your code here */
}`,
        solution: `.grid-container {
    display: grid;
    grid-template-areas:
        "header header header"
        "sidebar main aside"
        "footer footer footer";
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    gap: 20px;
    height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }`,
        tests: [
          { input: [], expected: 'css', typeCheck: true },
        ],
        hint: 'Use grid-template-areas to define named grid areas and assign them to elements.',
        explanation: 'This challenge teaches advanced CSS Grid with named areas for complex layouts.',
      },
      {
        id: 'css-a2',
        title: 'CSS Custom Properties with Calc',
        description: 'Use CSS variables with calc() for dynamic calculations.',
        difficulty: 'advanced',
        language: 'css',
        starterCode: `/* Your code here */`,
        solution: `:root {
    --base-size: 16px;
    --spacing: 8px;
}

.container {
    width: calc(100% - var(--spacing) * 2);
    padding: calc(var(--spacing) * 2);
    font-size: calc(var(--base-size) * 1.25);
}

.card {
    margin: calc(var(--spacing) * 1.5);
    padding: calc(var(--spacing) * 3);
}`,
        tests: [
          { input: [], expected: 'css', typeCheck: true },
        ],
        hint: 'Use calc() function with CSS variables for dynamic calculations.',
        explanation: 'This challenge teaches calc() function for dynamic CSS calculations.',
      },
      {
        id: 'css-a3',
        title: 'CSS Pseudo-elements',
        description: 'Use ::before and ::after pseudo-elements to add decorative content.',
        difficulty: 'advanced',
        language: 'css',
        starterCode: `.decorative {
    /* Your code here */
}`,
        solution: `.decorative {
    position: relative;
    padding: 20px;
}

.decorative::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, blue, red);
}

.decorative::after {
    content: "★";
    position: absolute;
    top: -10px;
    right: -10px;
    color: gold;
    font-size: 24px;
}`,
        tests: [
          { input: [], expected: 'css', typeCheck: true },
        ],
        hint: 'Use ::before and ::after with content property to add decorative elements.',
        explanation: 'This challenge teaches CSS pseudo-elements for adding decorative content.',
      },
      {
        id: 'css-a4',
        title: 'CSS Transform and 3D',
        description: 'Create 3D transforms with perspective and rotateX/rotateY.',
        difficulty: 'advanced',
        language: 'css',
        starterCode: `.card-3d {
    /* Your code here */
}`,
        solution: `.container {
    perspective: 1000px;
}

.card-3d {
    transform-style: preserve-3d;
    transition: transform 0.6s;
}

.card-3d:hover {
    transform: rotateY(180deg) rotateX(10deg);
}

.card-face {
    backface-visibility: hidden;
}`,
        tests: [
          { input: [], expected: 'css', typeCheck: true },
        ],
        hint: 'Use perspective, transform-style, and 3D transform functions.',
        explanation: 'This challenge teaches CSS 3D transforms for creating 3D effects.',
      },
      {
        id: 'css-a5',
        title: 'CSS Clip-path',
        description: 'Use clip-path to create custom shapes and masks.',
        difficulty: 'advanced',
        language: 'css',
        starterCode: `.shaped {
    /* Your code here */
}`,
        solution: `.shaped {
    width: 200px;
    height: 200px;
    background: linear-gradient(45deg, blue, red);
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.hexagon {
    clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
}

.circle {
    clip-path: circle(50%);
}`,
        tests: [
          { input: [], expected: 'css', typeCheck: true },
        ],
        hint: 'Use clip-path with polygon() or circle() to create custom shapes.',
        explanation: 'This challenge teaches CSS clip-path for creating custom shapes and masks.',
      },
    ],
  },
}

// Helper functions
export function getChallengeById(id) {
  for (const lang of Object.values(challenges)) {
    for (const level of Object.values(lang)) {
      const challenge = level.find(c => c.id === id)
      if (challenge) return challenge
    }
  }
  return null
}

export function getAllChallenges() {
  const all = []
  for (const lang of Object.values(challenges)) {
    for (const level of Object.values(lang)) {
      all.push(...level)
    }
  }
  return all
}

export function getChallengesByLanguage(language) {
  return challenges[language] || { beginner: [], intermediate: [], advanced: [] }
}

export function getChallengesByLevel(language, level) {
  const langChallenges = challenges[language]
  if (!langChallenges) return []
  return langChallenges[level] || []
}
