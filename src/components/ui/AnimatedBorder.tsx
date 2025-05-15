import { motion } from 'framer-motion';

interface AnimatedBorderProps {
  className?: string;
  color?: string;
  thickness?: number;
  cornerLength?: number;
  duration?: number;
  delay?: number;
}

const AnimatedBorder = ({
  className = '',
  color = '#8B7DD1',
  thickness = 2,
  cornerLength = 16,
  duration = 2.5,
  delay = 0
}: AnimatedBorderProps) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Top left corner */}
      <motion.div
        className="absolute top-0 left-0"
        initial={{ width: 0, height: 0 }}
        animate={{ width: cornerLength, height: thickness }}
        transition={{ duration: duration / 4, delay }}
        style={{ backgroundColor: color }}
      />
      <motion.div
        className="absolute top-0 left-0"
        initial={{ width: 0, height: 0 }}
        animate={{ width: thickness, height: cornerLength }}
        transition={{ duration: duration / 4, delay: delay + duration / 4 }}
        style={{ backgroundColor: color }}
      />
      
      {/* Top right corner */}
      <motion.div
        className="absolute top-0 right-0"
        initial={{ width: 0, height: 0 }}
        animate={{ width: cornerLength, height: thickness }}
        transition={{ duration: duration / 4, delay: delay + duration / 2 }}
        style={{ backgroundColor: color, right: 0 }}
      />
      <motion.div
        className="absolute top-0 right-0"
        initial={{ width: 0, height: 0 }}
        animate={{ width: thickness, height: cornerLength }}
        transition={{ duration: duration / 4, delay: delay + duration * 3 / 4 }}
        style={{ backgroundColor: color, right: 0 }}
      />
      
      {/* Bottom right corner */}
      <motion.div
        className="absolute bottom-0 right-0"
        initial={{ width: 0, height: 0 }}
        animate={{ width: cornerLength, height: thickness }}
        transition={{ duration: duration / 4, delay: delay + duration }}
        style={{ backgroundColor: color, right: 0, bottom: 0 }}
      />
      <motion.div
        className="absolute bottom-0 right-0"
        initial={{ width: 0, height: 0 }}
        animate={{ width: thickness, height: cornerLength }}
        transition={{ duration: duration / 4, delay: delay + duration * 5 / 4 }}
        style={{ backgroundColor: color, right: 0, bottom: 0 }}
      />
      
      {/* Bottom left corner */}
      <motion.div
        className="absolute bottom-0 left-0"
        initial={{ width: 0, height: 0 }}
        animate={{ width: cornerLength, height: thickness }}
        transition={{ duration: duration / 4, delay: delay + duration * 6 / 4 }}
        style={{ backgroundColor: color, bottom: 0 }}
      />
      <motion.div
        className="absolute bottom-0 left-0"
        initial={{ width: 0, height: 0 }}
        animate={{ width: thickness, height: cornerLength }}
        transition={{ duration: duration / 4, delay: delay + duration * 7 / 4 }}
        style={{ backgroundColor: color, bottom: 0 }}
      />
    </div>
  );
};

export default AnimatedBorder;
