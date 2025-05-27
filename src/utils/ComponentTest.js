/**
 * ComponentTest.js - Utility script for testing FLID components
 * 
 * This utility helps debug and test components by tracking their render cycles
 * and performance. It's particularly useful for complex components like the navbar.
 */

// Flag to enable component testing (set to false in production)
const DEBUG_COMPONENTS = import.meta.env.DEV && false; // Set to true to enable debugging

// Component render tracking
const componentRenders = {};

/**
 * Track component rendering for performance monitoring
 * @param {string} componentName - The name of the component being tracked
 * @param {Object} props - The component props (optional)
 */
export const trackComponentRender = (componentName, props = {}) => {
  if (!DEBUG_COMPONENTS) return;
  
  if (!componentRenders[componentName]) {
    componentRenders[componentName] = {
      count: 0,
      lastRender: Date.now(),
      props: []
    };
  }
  
  componentRenders[componentName].count++;
  componentRenders[componentName].lastRender = Date.now();
  componentRenders[componentName].props.push({
    timestamp: Date.now(),
    props: { ...props }
  });
  
  // Only keep the last 5 prop changes
  if (componentRenders[componentName].props.length > 5) {
    componentRenders[componentName].props.shift();
  }
  
  console.log(`[ComponentTest] ${componentName} rendered (${componentRenders[componentName].count} times)`);
};

/**
 * Run a test to verify a component is working correctly
 * @param {string} componentName - The name of the component to test
 */
export const testComponent = (componentName) => {
  if (!DEBUG_COMPONENTS) return;
  
  console.log(`[ComponentTest] Testing ${componentName}...`);
  
  // Simple timing test
  const start = performance.now();
  setTimeout(() => {
    const end = performance.now();
    console.log(`[ComponentTest] ${componentName} test completed in ${end - start}ms`);
  }, 0);
};

/**
 * Check if a component exists in the DOM
 * @param {string} selector - CSS selector for the component
 * @returns {boolean} - Whether the component exists
 */
export const doesComponentExist = (selector) => {
  if (typeof document === 'undefined') return false;
  return document.querySelector(selector) !== null;
};

// Export a helper to use in components
export default {
  trackRender: trackComponentRender,
  test: testComponent,
  exists: doesComponentExist
};

// Test the CreativeNavbar when the script loads
if (DEBUG_COMPONENTS) {
  setTimeout(() => {
    console.log('[ComponentTest] Checking for CreativeNavbar...');
    const navbarExists = doesComponentExist('.creative-navbar');
    console.log(`[ComponentTest] CreativeNavbar ${navbarExists ? 'exists' : 'not found'} in DOM`);
  }, 1000);
}
