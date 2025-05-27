import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();
  // Add a subtle pulse animation for first-time users
  useEffect(() => {
    // Check if user has previously toggled theme
    const hasToggledTheme = localStorage.getItem('flid-theme-toggled');
    
    if (!hasToggledTheme) {
      // Add a subtle animation to draw attention to the theme toggle
      const toggleTimer = setTimeout(() => {
        setIsAnimating(true);
        
        // Reset animation after 2 seconds
        setTimeout(() => {
          setIsAnimating(false);
        }, 2000);
      }, 3000); // Wait 3 seconds after component mounts
      
      return () => clearTimeout(toggleTimer);
    }
  }, []);
  
  // Track animation state
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Record that user has toggled theme
  const handleToggleTheme = () => {
    localStorage.setItem('flid-theme-toggled', 'true');
    toggleTheme();
  };

  return (
    <ToggleButton 
      onClick={handleToggleTheme} 
      aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
      className={isAnimating ? 'pulse-attention' : ''}
    >      <ToggleIcon 
        className="toggle-icon"
        initial={false} 
        animate={{ 
          rotate: darkMode ? 180 : 0,
          scale: isAnimating ? [1, 1.1, 1] : 1
        }}
        transition={{
          rotate: { 
            duration: 0.8, 
            ease: [0.25, 0.1, 0.25, 1] // Bardziej płynna animacja
          },
          scale: isAnimating ? { 
            repeat: 2, 
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1]
          } : {}
        }}
      >        {darkMode ? (
          // Simple sun icon for mobile dark mode
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="sun-icon"
          >
            {/* Simplified sun center */}
            <circle 
              cx="12" 
              cy="12" 
              r="4" 
              fill="#FFD700"
              stroke="#FFA500" 
              strokeWidth="1"
            />
            
            {/* Simple sun rays */}
            <g stroke="#FFD700" strokeWidth="2" strokeLinecap="round">
              <line x1="12" y1="2" x2="12" y2="4" />
              <line x1="12" y1="20" x2="12" y2="22" />
              <line x1="22" y1="12" x2="20" y2="12" />
              <line x1="4" y1="12" x2="2" y2="12" />
              <line x1="19.07" y1="4.93" x2="17.66" y2="6.34" />
              <line x1="6.34" y1="17.66" x2="4.93" y2="19.07" />
              <line x1="19.07" y1="19.07" x2="17.66" y2="17.66" />
              <line x1="6.34" y1="6.34" x2="4.93" y2="4.93" />
            </g>
          </svg>        ) : (
          // Simple moon icon for mobile light mode
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="moon-icon"
          >
            {/* Simplified moon shape */}
            <path
              d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
              fill="var(--text)"
              stroke="var(--text-secondary)"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            {/* Simple moon craters */}
            <circle cx="9" cy="9" r="1" fill="var(--background)" opacity="0.4" />
            <circle cx="14" cy="13" r="0.5" fill="var(--background)" opacity="0.3" />
          </svg>
        )}
      </ToggleIcon>
    </ToggleButton>
  );
};

const ToggleButton = styled.button`
  background: transparent;
  border: 1.5px solid var(--border);
  color: var(--text);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-left: 8px;
  flex-shrink: 0;
  
  /* Force perfect circle - prevent oval/egg shape */
  min-width: 44px;
  max-width: 44px;
  min-height: 44px;
  max-height: 44px;
  aspect-ratio: 1;
  
  /* Light background for sun icon */
  &[aria-label*="dark mode"] {
    background: rgba(255, 248, 225, 0.2);
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    
    /* Enhance hover effect for sun button */
    &[aria-label*="dark mode"] {
      background: rgba(255, 248, 225, 0.4);
      border-color: rgba(255, 215, 0, 0.4);
    }
  }
  &:focus {
    outline: none;
    outline-offset: 0;
    box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.3);
  }
  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(var(--primary-rgb), 0.2);
  }

  /* Pulse animation for attention */
  &.pulse-attention {
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(var(--primary-rgb), 0.5); }
    70% { box-shadow: 0 0 0 8px rgba(var(--primary-rgb), 0); }
    100% { box-shadow: 0 0 0 0 rgba(var(--primary-rgb), 0); }
  }
  
  /* Dark mode specific styles */
  html.dark & {
    border-color: var(--lavender-600);
    background: var(--background-alt);
  }
`;

const ToggleIcon = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
  width: 26px;
  height: 26px;

  svg {
    width: 24px;
    height: 24px;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
  }

  html.dark & {
    color: #e0e0e0;
    
    svg {
      filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.2));
    }
  }

  /* Override for sun icon */
  .sun-icon {
    width: 26px;
    height: 26px;
  }

  /* Override for moon icon */
  .moon-icon {
    width: 24px;
    height: 24px;
  }
`;

export default ThemeToggle;
