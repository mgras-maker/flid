import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { preloadFonts } from './fonts.ts'
import { collectWebVitals } from './utils/performance.ts'

// Start performance monitoring
collectWebVitals();

// Preload critical assets before rendering
preloadFonts();

// Use createRoot for concurrent rendering features
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);

// Add a class to prevent animations during initial render
document.body.classList.add('initial-render');

// Mark when app starts rendering
performance.mark('react-render-start');

// Remove initial-render class after a delay to enable animations
setTimeout(() => {
  document.body.classList.remove('initial-render');
}, 500);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Mark app render complete and measure
// Use useEffect in App component instead of root.callback which isn't supported in React 19
// We'll add the logic in App.tsx to mark render completion
