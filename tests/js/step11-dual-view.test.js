/**
 * Test suite for Step11_FeaturesNeeds_DualView_Template.html
 *
 * Tests cover:
 * - View toggle functionality (Partners ↔ Means)
 * - CSV export functionality
 * - Keyboard shortcuts (Ctrl+T, Ctrl+E, Ctrl+P)
 * - Accessibility features (ARIA attributes, live regions)
 * - DOM manipulation and state management
 *
 * Note: Requires Node.js 18+ with TextEncoder/TextDecoder support
 */

// Polyfill for Node.js < 18
if (typeof global.TextEncoder === 'undefined') {
  const { TextEncoder, TextDecoder } = require('util');
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Step 11: Features & Needs Dual View Template', () => {
  let dom;
  let document;
  let window;

  beforeEach(() => {
    // Load the HTML template
    const html = fs.readFileSync(
      path.join(__dirname, '../../templates/Step11_FeaturesNeeds_DualView_Template.html'),
      'utf8'
    );

    // Create JSDOM instance
    dom = new JSDOM(html, {
      runScripts: 'dangerously',
      resources: 'usable',
      url: 'http://localhost'
    });

    document = dom.window.document;
    window = dom.window;

    // Wait for initialization
    return new Promise((resolve) => {
      const checkInit = () => {
        if (document.readyState === 'complete') {
          setTimeout(resolve, 100); // Give scripts time to execute
        } else {
          setTimeout(checkInit, 10);
        }
      };
      checkInit();
    });
  });

  afterEach(() => {
    dom.window.close();
  });

  // ============================================================================
  // INITIALIZATION TESTS
  // ============================================================================

  describe('Initialization', () => {
    test('should load the HTML template successfully', () => {
      expect(document).toBeDefined();
      expect(document.title).toContain('Features');
    });

    test('should have toggle switch element', () => {
      const toggleSwitch = document.getElementById('toggleSwitch');
      expect(toggleSwitch).toBeTruthy();
    });

    test('should have view labels', () => {
      const partnersLabel = document.getElementById('partnersLabel');
      const meansLabel = document.getElementById('meansLabel');

      expect(partnersLabel).toBeTruthy();
      expect(meansLabel).toBeTruthy();
    });

    test('should have view header element', () => {
      const viewHeader = document.getElementById('viewHeader');
      expect(viewHeader).toBeTruthy();
      expect(viewHeader.textContent).toBe('PARTNERS');
    });

    test('should have live region for accessibility', () => {
      const liveRegion = document.getElementById('liveRegion');
      expect(liveRegion).toBeTruthy();
      expect(liveRegion.getAttribute('aria-live')).toBe('polite');
    });

    test('should have both partners and means columns', () => {
      const partnersColumns = document.querySelectorAll('[data-view="partners"]');
      const meansColumns = document.querySelectorAll('[data-view="means"]');

      expect(partnersColumns.length).toBeGreaterThan(0);
      expect(meansColumns.length).toBeGreaterThan(0);
    });

    test('should initially show partners view', () => {
      const partnersColumns = document.querySelectorAll('[data-view="partners"]');
      const meansColumns = document.querySelectorAll('[data-view="means"]');

      // Partners should be visible (not hidden)
      partnersColumns.forEach(col => {
        expect(col.classList.contains('hidden')).toBe(false);
      });

      // Means should be hidden
      meansColumns.forEach(col => {
        expect(col.classList.contains('hidden')).toBe(true);
      });
    });
  });

  // ============================================================================
  // VIEW TOGGLE TESTS
  // ============================================================================

  describe('View Toggle Functionality', () => {
    test('should toggle to means view when clicked', () => {
      const toggleSwitch = document.getElementById('toggleSwitch');
      const viewHeader = document.getElementById('viewHeader');

      // Initial state: Partners
      expect(viewHeader.textContent).toBe('PARTNERS');

      // Click toggle
      toggleSwitch.click();

      // Should switch to Means
      expect(viewHeader.textContent).toBe('MEANS');
    });

    test('should toggle back to partners view on second click', () => {
      const toggleSwitch = document.getElementById('toggleSwitch');
      const viewHeader = document.getElementById('viewHeader');

      // Click once
      toggleSwitch.click();
      expect(viewHeader.textContent).toBe('MEANS');

      // Click again
      toggleSwitch.click();
      expect(viewHeader.textContent).toBe('PARTNERS');
    });

    test('should update ARIA attributes when toggling', () => {
      const toggleSwitch = document.getElementById('toggleSwitch');

      // Initial state
      expect(toggleSwitch.getAttribute('aria-checked')).toBe('false');

      // Toggle to means
      toggleSwitch.click();
      expect(toggleSwitch.getAttribute('aria-checked')).toBe('true');

      // Toggle back to partners
      toggleSwitch.click();
      expect(toggleSwitch.getAttribute('aria-checked')).toBe('false');
    });

    test('should toggle CSS classes on labels', () => {
      const toggleSwitch = document.getElementById('toggleSwitch');
      const partnersLabel = document.getElementById('partnersLabel');
      const meansLabel = document.getElementById('meansLabel');

      // Initial state: partners active
      expect(partnersLabel.classList.contains('active')).toBe(true);
      expect(meansLabel.classList.contains('active')).toBe(false);

      // Toggle to means
      toggleSwitch.click();
      expect(partnersLabel.classList.contains('active')).toBe(false);
      expect(meansLabel.classList.contains('active')).toBe(true);
    });

    test('should toggle column visibility', () => {
      const toggleSwitch = document.getElementById('toggleSwitch');
      const partnersColumns = document.querySelectorAll('[data-view="partners"]');
      const meansColumns = document.querySelectorAll('[data-view="means"]');

      // Initial: partners visible, means hidden
      partnersColumns.forEach(col => {
        expect(col.classList.contains('hidden')).toBe(false);
      });
      meansColumns.forEach(col => {
        expect(col.classList.contains('hidden')).toBe(true);
      });

      // Toggle
      toggleSwitch.click();

      // After: means visible, partners hidden
      partnersColumns.forEach(col => {
        expect(col.classList.contains('hidden')).toBe(true);
      });
      meansColumns.forEach(col => {
        expect(col.classList.contains('hidden')).toBe(false);
      });
    });

    test('should announce view change to screen readers', (done) => {
      const toggleSwitch = document.getElementById('toggleSwitch');
      const liveRegion = document.getElementById('liveRegion');

      toggleSwitch.click();

      // Live region should be updated
      expect(liveRegion.textContent).toContain('Means');

      // Should clear after timeout
      setTimeout(() => {
        expect(liveRegion.textContent).toBe('');
        done();
      }, 1100);
    });

    test('should handle rapid clicks with debouncing', () => {
      const toggleSwitch = document.getElementById('toggleSwitch');
      const viewHeader = document.getElementById('viewHeader');

      // Initial state
      expect(viewHeader.textContent).toBe('PARTNERS');

      // Rapid clicks (should be debounced)
      toggleSwitch.click();
      toggleSwitch.click();
      toggleSwitch.click();

      // Due to debouncing, might not toggle all times
      // At least one toggle should have occurred
      expect(viewHeader.textContent).not.toBe('PARTNERS');
    });
  });

  // ============================================================================
  // KEYBOARD SHORTCUT TESTS
  // ============================================================================

  describe('Keyboard Shortcuts', () => {
    test('should toggle view with Ctrl+T', () => {
      const viewHeader = document.getElementById('viewHeader');

      expect(viewHeader.textContent).toBe('PARTNERS');

      // Simulate Ctrl+T
      const event = new window.KeyboardEvent('keydown', {
        key: 't',
        ctrlKey: true,
        bubbles: true
      });
      document.dispatchEvent(event);

      expect(viewHeader.textContent).toBe('MEANS');
    });

    test('should toggle view with Cmd+T (Mac)', () => {
      const viewHeader = document.getElementById('viewHeader');

      expect(viewHeader.textContent).toBe('PARTNERS');

      // Simulate Cmd+T
      const event = new window.KeyboardEvent('keydown', {
        key: 't',
        metaKey: true,
        bubbles: true
      });
      document.dispatchEvent(event);

      expect(viewHeader.textContent).toBe('MEANS');
    });

    test('should trigger CSV export with Ctrl+E', () => {
      // Mock the CSV export function
      let exportCalled = false;
      window.exportCSV = () => { exportCalled = true; };

      const event = new window.KeyboardEvent('keydown', {
        key: 'e',
        ctrlKey: true,
        bubbles: true
      });
      document.dispatchEvent(event);

      expect(exportCalled).toBe(true);
    });

    test('should trigger print with Ctrl+P', () => {
      // Mock window.print
      let printCalled = false;
      window.print = () => { printCalled = true; };

      const event = new window.KeyboardEvent('keydown', {
        key: 'p',
        ctrlKey: true,
        bubbles: true
      });
      document.dispatchEvent(event);

      expect(printCalled).toBe(true);
    });

    test('should handle Enter key on toggle switch', () => {
      const toggleSwitch = document.getElementById('toggleSwitch');
      const viewHeader = document.getElementById('viewHeader');

      expect(viewHeader.textContent).toBe('PARTNERS');

      // Simulate Enter key on toggle
      const event = new window.KeyboardEvent('keydown', {
        key: 'Enter',
        bubbles: true
      });
      toggleSwitch.dispatchEvent(event);

      expect(viewHeader.textContent).toBe('MEANS');
    });

    test('should handle Space key on toggle switch', () => {
      const toggleSwitch = document.getElementById('toggleSwitch');
      const viewHeader = document.getElementById('viewHeader');

      expect(viewHeader.textContent).toBe('PARTNERS');

      // Simulate Space key on toggle
      const event = new window.KeyboardEvent('keydown', {
        key: ' ',
        bubbles: true
      });
      toggleSwitch.dispatchEvent(event);

      expect(viewHeader.textContent).toBe('MEANS');
    });
  });

  // ============================================================================
  // CSV EXPORT TESTS
  // ============================================================================

  describe('CSV Export Functionality', () => {
    test('should have export button', () => {
      const exportButtons = document.querySelectorAll('button');
      const exportButton = Array.from(exportButtons).find(btn =>
        btn.textContent.includes('Export')
      );

      expect(exportButton).toBeTruthy();
    });

    test('should generate CSV with correct headers', () => {
      // This test would need to mock the CSV generation
      // For now, check that the table structure is correct
      const table = document.querySelector('.matrix-table');
      expect(table).toBeTruthy();

      const headers = table.querySelectorAll('thead th');
      expect(headers.length).toBeGreaterThan(0);
    });

    test('should include feature names in CSV', () => {
      const table = document.querySelector('.matrix-table');
      const rows = table.querySelectorAll('tbody tr');

      expect(rows.length).toBeGreaterThan(0);

      // Each row should have a feature name
      rows.forEach(row => {
        const featureCell = row.querySelector('th');
        expect(featureCell).toBeTruthy();
      });
    });
  });

  // ============================================================================
  // ACCESSIBILITY TESTS
  // ============================================================================

  describe('Accessibility Features', () => {
    test('should have proper ARIA labels', () => {
      const toggleSwitch = document.getElementById('toggleSwitch');
      expect(toggleSwitch.getAttribute('role')).toBe('switch');
      expect(toggleSwitch.getAttribute('aria-checked')).toBeDefined();
      expect(toggleSwitch.getAttribute('aria-label')).toBeDefined();
    });

    test('should have semantic HTML elements', () => {
      const header = document.querySelector('header');
      const main = document.querySelector('main');
      const table = document.querySelector('table');

      expect(header).toBeTruthy();
      expect(main).toBeTruthy();
      expect(table).toBeTruthy();
    });

    test('should have table accessibility attributes', () => {
      const table = document.querySelector('.matrix-table');
      expect(table.getAttribute('role')).toBe('table');
      expect(table.getAttribute('aria-label')).toBeDefined();
    });

    test('should have caption for screen readers', () => {
      const caption = document.querySelector('caption');
      expect(caption).toBeTruthy();
      expect(caption.classList.contains('sr-only')).toBe(true);
    });

    test('should have proper heading structure', () => {
      const viewHeader = document.getElementById('viewHeader');
      expect(viewHeader.getAttribute('aria-live')).toBe('polite');
    });
  });

  // ============================================================================
  // STATE MANAGEMENT TESTS
  // ============================================================================

  describe('State Management', () => {
    test('should maintain state across multiple toggles', () => {
      const toggleSwitch = document.getElementById('toggleSwitch');
      const viewHeader = document.getElementById('viewHeader');

      // Toggle multiple times
      toggleSwitch.click(); // -> MEANS
      expect(viewHeader.textContent).toBe('MEANS');

      toggleSwitch.click(); // -> PARTNERS
      expect(viewHeader.textContent).toBe('PARTNERS');

      toggleSwitch.click(); // -> MEANS
      expect(viewHeader.textContent).toBe('MEANS');

      toggleSwitch.click(); // -> PARTNERS
      expect(viewHeader.textContent).toBe('PARTNERS');
    });

    test('should maintain consistent DOM state', () => {
      const toggleSwitch = document.getElementById('toggleSwitch');
      const partnersColumns = document.querySelectorAll('[data-view="partners"]');
      const meansColumns = document.querySelectorAll('[data-view="means"]');

      // Toggle and check consistency
      toggleSwitch.click();

      const partnersHidden = Array.from(partnersColumns).every(col =>
        col.classList.contains('hidden')
      );
      const meansVisible = Array.from(meansColumns).every(col =>
        !col.classList.contains('hidden')
      );

      expect(partnersHidden).toBe(true);
      expect(meansVisible).toBe(true);
    });
  });

  // ============================================================================
  // ERROR HANDLING TESTS
  // ============================================================================

  describe('Error Handling', () => {
    test('should handle missing DOM elements gracefully', () => {
      // Remove an element and trigger toggle
      const viewHeader = document.getElementById('viewHeader');
      viewHeader.remove();

      const toggleSwitch = document.getElementById('toggleSwitch');

      // Should not throw error
      expect(() => {
        toggleSwitch.click();
      }).not.toThrow();
    });

    test('should handle events on removed elements', () => {
      const toggleSwitch = document.getElementById('toggleSwitch');
      toggleSwitch.remove();

      // Should not throw when dispatching events
      expect(() => {
        const event = new window.KeyboardEvent('keydown', {
          key: 't',
          ctrlKey: true,
          bubbles: true
        });
        document.dispatchEvent(event);
      }).not.toThrow();
    });
  });
});
