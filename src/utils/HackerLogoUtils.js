/**
 * Utility functions for creating hacker-style text animations
 */

/**
 * Split text into individual characters with data attributes for animations
 * @param {string} text - The text to transform
 * @returns {JSX.Element[]} - Array of span elements with character data
 */
export const splitTextForAnimation = (text) => {
  return text.split('').map((char, index) => {
    if (char === '.') {
      return (
        <span 
          key={index} 
          className="char dot" 
          style={{ '--char-index': index }} 
          data-letter={char}
          aria-hidden="true"
        >
          {char}
        </span>
      );
    }
    
    return (
      <span 
        key={index} 
        className="char" 
        style={{ '--char-index': index }} 
        data-letter={char}
        aria-hidden="true"
      >
        {char}
      </span>
    );
  });
};
