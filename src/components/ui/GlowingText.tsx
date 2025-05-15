import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  gradient?: 'primary' | 'secondary' | 'accent';
  animate?: boolean;
}

const GradientText = ({ 
  children, 
  className = '', 
  gradient = 'primary',
  animate = false
}: GradientTextProps) => {
  
  const getGradientClass = () => {
    switch (gradient) {
      case 'secondary':
        return 'bg-gradient-to-r from-purple-400 to-flid-accent';
      case 'accent':
        return 'bg-gradient-to-r from-flid-accent via-purple-500 to-indigo-500';
      case 'primary':
      default:
        return 'bg-gradient-to-r from-flid-accent to-purple-600';
    }
  };
  
  const baseClasses = `bg-clip-text text-transparent ${getGradientClass()} ${className}`;
  
  return animate ? (
    <motion.span
      className={`inline-block ${baseClasses}`}
      animate={{
        backgroundPosition: ['0% center', '100% center', '0% center'],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "reverse"
      }}
      style={{
        backgroundSize: '200% auto'
      }}
    >
      {children}
    </motion.span>
  ) : (
    <span className={`inline-block ${baseClasses}`}>
      {children}
    </span>
  );
};

export default GradientText;
