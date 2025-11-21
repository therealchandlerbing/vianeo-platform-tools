/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom',
  testMatch: [
    '**/tests/js/**/*.test.js',
    '**/tests/js/**/*.spec.js'
  ],
  collectCoverageFrom: [
    'templates/**/*.html',
    '!templates/**/node_modules/**'
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/tests/'
  ],
  verbose: true,
  testTimeout: 10000
};
