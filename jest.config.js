export default {
  testEnvironment: 'node',
  collectCoverageFrom: [
    'index.js',
    'test/**/*.js'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  testMatch: [
    '**/tests/**/*.{js,jsx}',
  ],
  moduleFileExtensions: ['js', 'json'],
  transformIgnorePatterns: [
    '/node_modules/',
  ],
}