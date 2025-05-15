// Advanced Fibonacci spiral with animated components
import React, { useRef, useState, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line, Points, Mesh } from 'three';
import { Vector3, Color, AdditiveBlending } from 'three';
import type { Object3DEventMap } from 'three';

interface FibonacciSpiralProps {
  position?: [number, number, number];
  color?: Color;
  opacity?: number;
  rotationSpeed?: number;
  pointSize?: number;
  complexity?: number;
}

const EnhancedFibonacciSpiral: React.FC<FibonacciSpiralProps> = ({ 
  position = [0, 0, 0], 
  color = new Color(0xffd700), 
  opacity = 0.7,
  rotationSpeed = 0.05,
  pointSize = 0.03,
  complexity = 1.0
}): React.ReactNode => {
  const spiralRef = useRef<Line<any, any, Object3DEventMap>>(null);
  const pointsRef = useRef<Points<any, any>>(null);
  const secondaryPointsRef = useRef<Points<any, any>>(null);
  const glowRef = useRef<Mesh>(null);
  
  // Animation time tracking for smoother motion
  const time = useRef(0);
  const [animationProgress, setAnimationProgress] = useState(0);
  
  // Entry animation effect
  useEffect(() => {
    // Start with progress at 0
    setAnimationProgress(0);
    
    // Animate to 1 over 2 seconds
    const duration = 2000;
    const startTime = Date.now();
    
    const animateProgress = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setAnimationProgress(progress);
      
      if (progress < 1) {
        requestAnimationFrame(animateProgress);
      }
    };
    
    requestAnimationFrame(animateProgress);
  }, []);
  
  // Create an improved spiral with more points for higher complexity
  const { enhancedSpiralPoints, secondarySpiralPoints } = useMemo(() => {
    const primaryPoints = [];
    const secondaryPoints = [];
    const PHI = (1 + Math.sqrt(5)) / 2; // Golden ratio
      const numPoints = Math.floor(400 * complexity); // More points for higher complexity
    
    // Generate primary spiral curve points
    for (let i = 0; i < numPoints; i++) {
      // Calculate parameter t with variable density based on position
      const t = i / 30; // Parameter
      // Using logarithmic spiral formula based on golden ratio
      const r = Math.pow(PHI, 2 * t / Math.PI) / 10;
      const theta = t * 2 * Math.PI;
      
      const x = r * Math.cos(theta);
      const y = r * Math.sin(theta);
      
      // Check for NaN or Infinity before adding point
      if (!isNaN(x) && isFinite(x) && !isNaN(y) && isFinite(y)) {
        primaryPoints.push(new Vector3(x, y, 0));
        
        // Add a second offset spiral for richer visuals
        if (i % 2 === 0) {
          const offset = 0.02 + 0.01 * Math.sin(i * 0.1);
          secondaryPoints.push(
            new Vector3(
              x * 0.7 + Math.sin(i * 0.2) * offset, 
              y * 0.7 + Math.cos(i * 0.2) * offset, 
              0.01
            )
          );
        }
      }
    }
    
    return { 
      enhancedSpiralPoints: primaryPoints,
      secondarySpiralPoints: secondaryPoints
    };
  }, [complexity]);
    
  // Create multiple particle systems for a richer visual effect
  const { spiralParticles, gridParticles, accentParticles } = useMemo(() => {
    const spiralPts = [];
    const gridPts = [];
    const accentPts = [];
    
    // Golden angle for natural distribution
    const goldenAngle = Math.PI * (3 - Math.sqrt(5)); // ~137.5 degrees in radians
    
    // Generate spiral particles
    const numSpiralPoints = Math.floor(120 * complexity);
    for (let i = 0; i < numSpiralPoints; i++) {
      const progress = i / numSpiralPoints;
      
      // Use golden angle for more natural distribution
      const angle = i * goldenAngle;
      const radius = 0.05 + 0.6 * Math.sqrt(progress) * complexity;
      
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      const z = (Math.random() - 0.5) * 0.05; // Slight z-variation for depth
      
      spiralPts.push(x, y, z);
    }
    
    // Generate grid particles with more structure
    const numGridPoints = Math.floor(200 * complexity);
    for (let i = 0; i < numGridPoints; i++) {
      const t = i / numGridPoints;
      
      // Create a more ordered grid pattern
      const rad = 0.1 + 0.8 * Math.sqrt(t) * complexity;
      const angle = i * goldenAngle * 1.5;
      
      const x = rad * Math.cos(angle);
      const y = rad * Math.sin(angle);
      const z = (Math.random() - 0.5) * 0.1; // More z-variation for depth
      
      gridPts.push(x, y, z);
    }
    
    // Generate accent particles to highlight key points
    const numAccentPoints = Math.floor(30 * complexity);
    const PHI = (1 + Math.sqrt(5)) / 2; // Golden ratio
    for (let i = 0; i < numAccentPoints; i++) {
      const t = i / numAccentPoints * 10;
      
      // Use golden ratio directly for these key points
      const r = Math.pow(PHI, t / Math.PI) / 15;
      const theta = t * 2 * Math.PI;
      
      const x = r * Math.cos(theta);
      const y = r * Math.sin(theta);
      const z = 0.03; // Slightly forward
      
      accentPts.push(x, y, z);
    }
    
    return {
      spiralParticles: new Float32Array(spiralPts),
      gridParticles: new Float32Array(gridPts),
      accentParticles: new Float32Array(accentPts)
    };
  }, [complexity]);
  // Animation with professional curves and easing
  useFrame((_, delta) => {
    // Update time for animations
    time.current += delta;
    const t = time.current;
    
    // Rotation with elastic easing and sinusoidal modulation for spiral
    if (spiralRef.current) {
      // Base rotation with slight acceleration
      const baseRotation = t * rotationSpeed;
      
      // Sinusoidal modulation for elegant, natural motion
      const modulation = Math.sin(t * 0.2) * 0.1;
      
      // Apply smooth rotation
      spiralRef.current.rotation.z = baseRotation + modulation;
      
      // Subtle tilt effect
      spiralRef.current.rotation.x = Math.sin(t * 0.1) * 0.05;
    }
    
    // More complex particle animations
    if (pointsRef.current) {
      // Counter-rotation creates interesting visual tension
      const baseRotation = t * rotationSpeed * 0.7;
      const modulation = Math.sin(t * 0.3) * 0.2;
      
      pointsRef.current.rotation.z = baseRotation - modulation;
      
      // Subtle 3D tilt
      pointsRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
      
      // Dynamically animate particle size
      const material = pointsRef.current.material as any;
      if (material) {
        // Smooth sinusoidal pulsing with a longer period
        material.size = pointSize * (0.8 + Math.sin(t * 0.4) * 0.3);
      }
    }
    
    // Animate secondary particles differently for visual interest
    if (secondaryPointsRef.current) {
      secondaryPointsRef.current.rotation.z = t * rotationSpeed * 0.5;
      secondaryPointsRef.current.rotation.y = Math.sin(t * 0.15) * 0.1;
      
      const material = secondaryPointsRef.current.material as any;
      if (material) {
        // Different pulse rate creates interactive visual harmony
        material.size = pointSize * 0.7 * (0.9 + Math.sin(t * 0.3 + 1.5) * 0.2);
      }
    }
    
    // Animate the glow
    if (glowRef.current) {
      const pulseFactor = 0.9 + Math.sin(t * 0.8) * 0.1;
      glowRef.current.scale.set(pulseFactor, pulseFactor, 1);
      
      // Softly animate opacity
      const material = glowRef.current.material as any;
      if (material) {
        material.opacity = (0.5 + Math.sin(t * 0.6) * 0.2) * opacity;
      }
    }
  });

  return (
    <group position={position}>
      {/* Main spiral lines with elegant curvature */}
      <group ref={spiralRef as any}>
        <line>
          <bufferGeometry attach="geometry" setFromPoints={enhancedSpiralPoints} />
          <lineBasicMaterial 
            attach="material" 
            color={color} 
            transparent 
            opacity={opacity * 0.6 * animationProgress} 
            blending={AdditiveBlending}
            linewidth={1}
          />
        </line>
        
        {/* Secondary spiral for added depth and detail */}
        <line>
          <bufferGeometry attach="geometry" setFromPoints={secondarySpiralPoints} />
          <lineBasicMaterial 
            attach="material" 
            color={color.clone().multiplyScalar(1.2)} 
            transparent 
            opacity={opacity * 0.4 * animationProgress} 
            blending={AdditiveBlending}
          />
        </line>
      </group>
      
      {/* Primary particle field along the spiral */}
      <points ref={pointsRef as any}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[spiralParticles, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={pointSize * 1.2}
          color={color.clone().multiplyScalar(1.1)}
          transparent
          opacity={opacity * Math.min(1, animationProgress * 1.5)}
          blending={AdditiveBlending}
          depthWrite={false}
          sizeAttenuation
        />
      </points>
      
      {/* Secondary particle field for added volume and depth */}
      <points ref={secondaryPointsRef as any}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[gridParticles, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={pointSize * 0.7}
          color={color.clone().multiplyScalar(0.9)}
          transparent
          opacity={opacity * 0.7 * Math.min(1, animationProgress * 1.2)}
          blending={AdditiveBlending}
          depthWrite={false}
          sizeAttenuation
        />
      </points>
      
      {/* Accent particles for key positions */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[accentParticles, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={pointSize * 2.5}
          color={color.clone().multiplyScalar(1.3)}
          transparent
          opacity={opacity * 0.5 * animationProgress}
          blending={AdditiveBlending}
          depthWrite={false}
          sizeAttenuation
        />
      </points>
      
      {/* Central glow effect */}
      <mesh ref={glowRef as any} position={[0, 0, -0.05]}>
        <circleGeometry args={[0.15 * complexity, 32]} />
        <meshBasicMaterial 
          color={color.clone().multiplyScalar(1.5)}
          transparent
          opacity={0.6 * opacity * animationProgress}
          blending={AdditiveBlending}
        />
      </mesh>
    </group>
  );
};

export default EnhancedFibonacciSpiral;
