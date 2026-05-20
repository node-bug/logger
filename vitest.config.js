/// <reference types="vitest/config" />
export default {
  test: {
    environment: 'node',
    include: ['tests/**/*.test.js'],
    testTimeout: 10000,
    globals: true,
    coverage: {
      include: ['index.js', 'tests/**/*.js'],
      reportsDirectory: 'coverage',
      reporter: ['text', 'lcov'],
    },
  },
}
