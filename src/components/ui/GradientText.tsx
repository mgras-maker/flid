import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  gradient?: 'primary' | 'secondary' | 'accent' | 'creative' | 'futuristic';
  animate?: boolean;
  highlightOnHover?: boolean;
}

const GradientText = ({ 
  children, 
  className = '', 
  gradient = 'primary',
  animate = false,
  highlightOnHover = false
}: GradientTextProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const getGradientClass = () => {
    switch (gradient) {
      case 'secondary':
        return 'bg-gradient-to-r from-purple-400 to-flid-accent';
      case 'accent':
        return 'bg-gradient-to-r from-flid-accent via-purple-500 to-indigo-500';
      case 'creative':
        return 'bg-gradient-to-br from-flid-accent via-purple-500 to-blue-500';
      case 'futuristic':
        return 'bg-gradient-to-r from-indigo-500 via-flid-accent to-purple-500';
      case 'primary':
      default:
        return 'bg-gradient-to-r from-flid-accent to-purple-600';
    }
  };
  
  const baseClasses = `bg-clip-text text-transparent ${getGradientClass()} ${className}`;
  
  // Different animation settings for various gradient types
  const getAnimationProps = () => {
    switch (gradient) {
      case 'creative':
        return {
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          backgroundSize: '200% 200%',
          duration: 10
        };
      case 'futuristic':
        return {
          backgroundPosition: ['0% center', '100% center', '0% center'],
          backgroundSize: '200% auto',
          duration: 6
        };
      case 'accent':
        return {
          backgroundPosition: ['0% center', '200% center', '0% center'],
          backgroundSize: '200% auto',
          duration: 12
        };
      default:
        return {
          backgroundPosition: ['0% center', '100% center', '0% center'],
          backgroundSize: '200% auto',
          duration: 8
        };
    }
  };
  
  const animProps = getAnimationProps();
  
  if (!isMounted) {
    return <span className={`inline-block ${baseClasses}`}>{children}</span>;
  }
  
  return animate ? (
    <motion.span
      className={`inline-block ${baseClasses}`}
      animate={{
        backgroundPosition: animProps.backgroundPosition,
      }}
      transition={{
        duration: animProps.duration,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "reverse"
      }}
      style={{
        backgroundSize: animProps.backgroundSize
      }}
      onMouseEnter={highlightOnHover ? () => setIsHovered(true) : undefined}
      onMouseLeave={highlightOnHover ? () => setIsHovered(false) : undefined}
      whileHover={highlightOnHover ? { scale: 1.05 } : undefined}
    >
      <motion.span
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-flid-accent to-transparent opacity-0"
      />
      {children}
    </motion.span>
  ) : (
    <motion.span
      className={`inline-block relative ${baseClasses}`}
      onMouseEnter={highlightOnHover ? () => setIsHovered(true) : undefined}
      onMouseLeave={highlightOnHover ? () => setIsHovered(false) : undefined}
      whileHover={highlightOnHover ? { scale: 1.05 } : undefined}
    >
      {highlightOnHover && (
        <motion.span
          initial={{ opacity: 0, width: "0%" }}
          animate={isHovered ? { opacity: 1, width: "100%" } : { opacity: 0, width: "0%" }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-flid-accent to-transparent"
        />
      )}
      {children}
    </motion.span>
  );
};

export default GradientText;
