/**
 * Jest setup file for JavaScript tests
 *
 * Provides polyfills and global setup for jsdom environment
 */

const { TextEncoder, TextDecoder } = require('util');

// Polyfill TextEncoder/TextDecoder for jsdom
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock window methods that don't work in jsdom
global.window.scrollTo = jest.fn();

// Mock console methods to reduce noise in tests
global.console = {
  ...console,
  // Uncomment to suppress console.log in tests
  // log: jest.fn(),
  debug: jest.fn(),
  // Keep error and warn for debugging
  error: console.error,
  warn: console.warn,
};
