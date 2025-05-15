import type { Variants } from 'framer-motion';

/**
 * Custom hook that provides reusable animations for consistent UX throughout the site
 */
const useAnimations = () => {
  // Fade in from bottom animation
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom = 0) => ({
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: custom * 0.1
      }
    })
  };

  // Fade in from left animation
  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -70 },
    visible: (custom = 0) => ({
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: custom * 0.1
      }
    })
  };

  // Fade in from right animation
  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 70 },
    visible: (custom = 0) => ({
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: custom * 0.1
      }
    })
  };

  // Scale in animation
  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom = 0) => ({
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: custom * 0.1
      }
    })
  };

  // Staggered animation for children elements
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Text character animation
  const textCharacter: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Item hover animations
  const itemHover = {
    scale: 1.05,
    y: -5,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  };

  // Card hover animations
  const cardHover = {
    y: -10,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    transition: { duration: 0.3 }
  };

  // Button hover animations
  const buttonHover = {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  };

  // Button click animations
  const buttonTap = {
    scale: 0.95,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  };

  return {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    staggerContainer,
    textCharacter,
    itemHover,
    cardHover,
    buttonHover,
    buttonTap
  };
};

export default useAnimations;
