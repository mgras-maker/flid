import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line

/**
 * PageTransitionOverlay - Subtelny overlay podczas przejść między stronami
 * Dodaje elegancki efekt fade podczas zmiany stron
 */
const PageTransitionOverlay = ({ isTransitioning }) => {
  const overlayVariants = {
    hidden: {
      opacity: 0,
      visibility: 'hidden'
    },
    visible: {
      opacity: 0.03, // Bardzo subtelny overlay
      visibility: 'visible',
      transition: {
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    },
    exit: {
      opacity: 0,
      visibility: 'hidden',
      transition: {
        duration: 0.3,
        ease: [0.7, 0, 0.84, 0]
      }
    }
  };

  if (!isTransitioning) return null;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={overlayVariants}      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, var(--background-alt) 0%, var(--background) 100%)',
        zIndex: 9998,
        pointerEvents: 'none',
        willChange: 'opacity'
      }}
    />
  );
};

export default PageTransitionOverlay;
