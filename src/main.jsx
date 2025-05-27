import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './styles/NavFixes.css' // Import navigation fixes
import './styles/PageTransitions.css' // Import enhanced page transitions
import './styles/PageFixes.css' // Import page transition fixes
import './styles/LavenderAnimations.css' // Import lavender animation effects
import './styles/Navbar.css' // Import navbar-specific styles
import './styles/ClickFix.css' // Import fix dla klikalności elementów
// Import naszych optymalizacji wydajności - przed innymi stylami, aby miały wyższy priorytet
import './styles/PerformanceOptimizations.css' // Globalne optymalizacje wydajności
// CreativeNavbar.css is imported directly in the component
import App from './App.jsx'
import './utils/PerformanceOptimizer' // Import naszego nowego optymalizatora wydajności
import './utils/HDDisplayOptimizer' // Import HD display optimizations (zoptymalizowany)
import './utils/NavbarOptimization' // Import navbar optimizations
// Usunięty import IconPreloader - zbyt obciążający

// Import nowych eleganckich czcionek
import '@fontsource/playfair-display/400.css'
import '@fontsource/playfair-display/500.css'
import '@fontsource/playfair-display/700.css'
import '@fontsource/cormorant-garamond/400.css'
import '@fontsource/cormorant-garamond/500.css'
import '@fontsource/cormorant-garamond/600.css'
import '@fontsource/montserrat/300.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'

// Dodanie klasy dev-mode w trybie deweloperskim dla lepszego debugowania
if (import.meta.env.DEV) {
  document.documentElement.classList.add('dev-mode');
}

// Initialize the application with optimizations for transitions
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
