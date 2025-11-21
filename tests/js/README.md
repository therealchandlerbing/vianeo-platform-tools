# JavaScript Tests for VIANEO HTML Templates

This directory contains Jest-based tests for the interactive HTML templates.

## Overview

The VIANEO framework includes several HTML templates with embedded JavaScript for interactive features:

- **Step 11: Features & Needs Dual View** - View toggling, CSV export
- **Step 7: Needs Matrix** - Interactive heatmap
- **Step 9: Value Network Visualization** - Network diagrams

## Test Infrastructure

### Setup

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run with coverage
npm run test:coverage

# Watch mode for development
npm run test:watch
```

### Test Framework

- **Jest** v29.7.0 - Test runner
- **jsdom** v23.0.0 - DOM implementation for Node.js
- **jest-environment-jsdom** - Browser-like environment

## Test Files

### `step11-dual-view.test.js`

Tests for the Features & Needs Dual View template (`Step11_FeaturesNeeds_DualView_Template.html`)

**Coverage:**
- ✅ Initialization and DOM setup
- ✅ View toggle functionality (Partners ↔ Means)
- ✅ Keyboard shortcuts (Ctrl+T, Ctrl+E, Ctrl+P)
- ✅ CSV export functionality
- ✅ Accessibility features (ARIA attributes, live regions)
- ✅ State management across toggles
- ✅ Error handling and edge cases

**Total Tests:** 33 tests across 8 test suites

## Test Categories

### 1. Initialization Tests (7 tests)
- HTML template loading
- DOM element existence
- Initial state verification
- Partners/Means column setup

### 2. View Toggle Tests (8 tests)
- Toggle to Means view
- Toggle back to Partners view
- ARIA attribute updates
- CSS class toggling
- Column visibility management
- Live region announcements
- Debouncing behavior

### 3. Keyboard Shortcut Tests (6 tests)
- Ctrl+T / Cmd+T - Toggle view
- Ctrl+E / Cmd+E - Export CSV
- Ctrl+P / Cmd+P - Print
- Enter key on toggle
- Space key on toggle

### 4. CSV Export Tests (3 tests)
- Export button existence
- CSV header generation
- Feature names in export

### 5. Accessibility Tests (5 tests)
- ARIA labels and roles
- Semantic HTML elements
- Table accessibility
- Screen reader captions
- Heading structure

### 6. State Management Tests (2 tests)
- State persistence across toggles
- DOM consistency

### 7. Error Handling Tests (2 tests)
- Missing DOM elements
- Events on removed elements

## Running Tests

### All Tests

```bash
npm test
```

### Specific Test File

```bash
npm test step11-dual-view
```

### With Coverage

```bash
npm run test:coverage
```

Coverage reports are generated in `coverage/` directory.

### Watch Mode

```bash
npm run test:watch
```

Automatically re-runs tests when files change.

## Test Approach

### DOM Testing with jsdom

Tests use jsdom to create a browser-like environment in Node.js:

```javascript
const { JSDOM } = require('jsdom');

// Load HTML template
const html = fs.readFileSync('template.html', 'utf8');

// Create DOM
const dom = new JSDOM(html, {
  runScripts: 'dangerously',  // Execute inline scripts
  resources: 'usable'         // Load resources
});

// Access DOM elements
const document = dom.window.document;
const element = document.getElementById('myElement');
```

### Event Simulation

Tests simulate user interactions:

```javascript
// Click events
element.click();

// Keyboard events
const event = new KeyboardEvent('keydown', {
  key: 't',
  ctrlKey: true
});
document.dispatchEvent(event);
```

### Accessibility Testing

Tests verify ARIA attributes and screen reader support:

```javascript
expect(element.getAttribute('aria-checked')).toBe('true');
expect(element.getAttribute('role')).toBe('switch');
```

## Test Structure

Each test file follows this structure:

```javascript
describe('Component Name', () => {
  let dom, document, window;

  beforeEach(() => {
    // Load template and initialize DOM
  });

  afterEach(() => {
    // Clean up
  });

  describe('Feature Category', () => {
    test('specific behavior', () => {
      // Arrange
      // Act
      // Assert
    });
  });
});
```

## Coverage Goals

Target coverage for JavaScript functionality:

- **Statements:** 90%+
- **Branches:** 85%+
- **Functions:** 90%+
- **Lines:** 90%+

## Known Limitations

### Current Limitations

1. **Inline JavaScript** - Scripts are embedded in HTML templates
2. **File I/O** - CSV downloads cannot be fully tested in jsdom
3. **Print Dialog** - window.print() is mocked
4. **Visual Rendering** - No actual rendering, only DOM manipulation

### Future Improvements

1. **Extract JavaScript** - Separate scripts into .js files for easier testing
2. **End-to-End Tests** - Use Playwright/Cypress for full browser testing
3. **Visual Regression** - Screenshot comparison for visual changes
4. **Performance Tests** - Measure toggle/export performance

## CI/CD Integration

JavaScript tests are integrated into the GitHub Actions workflow:

```yaml
- name: Set up Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '20'

- name: Install JS dependencies
  run: npm install

- name: Run JavaScript tests
  run: npm test
```

## Contributing

When adding new interactive features to HTML templates:

1. Add corresponding test file in `tests/js/`
2. Follow existing test structure
3. Aim for 90%+ coverage
4. Test all interactive features
5. Include accessibility tests
6. Document keyboard shortcuts

## Examples

### Testing a Toggle

```javascript
test('should toggle view when clicked', () => {
  const toggle = document.getElementById('toggleSwitch');
  const header = document.getElementById('viewHeader');

  expect(header.textContent).toBe('PARTNERS');

  toggle.click();

  expect(header.textContent).toBe('MEANS');
});
```

### Testing Keyboard Shortcuts

```javascript
test('should export with Ctrl+E', () => {
  const event = new KeyboardEvent('keydown', {
    key: 'e',
    ctrlKey: true,
    bubbles: true
  });

  document.dispatchEvent(event);

  // Verify export was triggered
});
```

### Testing Accessibility

```javascript
test('should have proper ARIA labels', () => {
  const toggle = document.getElementById('toggleSwitch');

  expect(toggle.getAttribute('role')).toBe('switch');
  expect(toggle.getAttribute('aria-checked')).toBeDefined();
  expect(toggle.getAttribute('aria-label')).toBeTruthy();
});
```

## Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [jsdom Documentation](https://github.com/jsdom/jsdom)
- [Testing Library](https://testing-library.com/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
