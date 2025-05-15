import { useState } from 'react';
import { motion } from 'framer-motion';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: 'raise' | 'glow' | 'tilt' | 'none';
  glowColor?: string;
  borderGlow?: boolean;
}

const FuturisticCard = ({
  children,
  className = '',
  hoverEffect = 'raise',
  glowColor = 'rgba(139, 125, 209, 0.5)',
  borderGlow = true
}: FuturisticCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Variables for tilt effect
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hoverEffect !== 'tilt') return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation (max 10 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateY((x - centerX) / centerX * 5); // -5 to 5 degrees
    setRotateX((centerY - y) / centerY * 5); // -5 to 5 degrees
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };
  
  // Define the box shadow based on hover state and effect
  const getBoxShadow = () => {
    const defaultShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
    
    if (hoverEffect === 'glow' && isHovered) {
      return `${defaultShadow}, 0 0 20px ${glowColor}`;
    }
    
    return defaultShadow;
  };
  
  // Define transform based on hover effect
  const getTransform = () => {
    if (hoverEffect === 'tilt') {
      return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
    
    if (hoverEffect === 'raise' && isHovered) {
      return 'translateY(-8px)';
    }
    
    return 'none';
  };
  
  return (
    <motion.div
      className={`relative overflow-hidden backdrop-blur-sm ${borderGlow ? 'border border-white/20' : ''} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: getTransform(),
        boxShadow: getBoxShadow(),
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      {borderGlow && isHovered && (
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div 
            className="absolute inset-0" 
            style={{ 
              background: `radial-gradient(circle at 50% 50%, ${glowColor}, transparent 70%)`,
              opacity: 0.4
            }} 
          />
        </motion.div>
      )}
      
      {children}
    </motion.div>
  );
};

export default FuturisticCard;
