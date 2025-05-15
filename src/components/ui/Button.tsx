import { memo } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  to,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  fullWidth = false,
  icon,
  iconPosition = 'right'
}: ButtonProps) => {
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none';
  
  // Size styles
  const sizeStyles = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2.5 text-base',
    large: 'px-6 py-3 text-lg',
  };
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-flid-accent text-white hover:bg-opacity-80 active:bg-opacity-90',
    secondary: 'bg-flid-primary text-flid-dark hover:bg-opacity-80 active:bg-opacity-90',
    outline: 'bg-transparent border-2 border-flid-accent text-flid-accent hover:bg-flid-accent hover:text-white active:bg-opacity-90',
  };
  
  // Disabled styles
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  // Full width styles
  const widthStyles = fullWidth ? 'w-full' : '';
  
  // Combine all styles
  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles} ${widthStyles} ${className}`;
  
  // Animation props
  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.03 },
    whileTap: disabled ? {} : { scale: 0.97 },
    transition: { type: 'spring', stiffness: 500, damping: 20 }
  };
  
  // Content with icon
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );
  
  // Render as link if href or to prop is provided
  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonStyles}
        {...motionProps}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {content}
      </motion.a>
    );
  }
  
  if (to) {
    return (
      <motion.div {...motionProps}>
        <Link to={to} className={buttonStyles}>
          {content}
        </Link>
      </motion.div>
    );
  }
  
  // Otherwise render as button
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={buttonStyles}
      disabled={disabled}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
};

// Memoize Button to prevent unnecessary re-renders
export default memo(Button);
