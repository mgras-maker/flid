import { useRef, useState, useEffect, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import type { ThreeEvent } from '@react-three/fiber';
import { Text, Float, Html } from '@react-three/drei';
import * as THREE from 'three';

interface InteractiveParticlesProps {
  color: string;
  count?: number;
}

// Utility function to throttle frame updates
const useThrottle = (value: any, limit: number) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastRan = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRan.current >= limit) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, limit - (Date.now() - lastRan.current));

    return () => clearTimeout(handler);
  }, [value, limit]);

  return throttledValue;
};

// Interactive particle system that responds to mouse movements
const InteractiveParticles: React.FC<InteractiveParticlesProps> = ({ color, count = 80 }) => {
  const particles = useRef<THREE.Points>(null);
  const { mouse, viewport } = useThree();
  
  // Use throttled mouse values to improve performance
  const throttledMouse = useThrottle({ x: mouse.x, y: mouse.y }, 16); // ~60fps
  
  // Initialize particle positions - memoized to avoid recalculation
  const positions = useMemo(() => {
    const posArray = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      posArray[i * 3] = (Math.random() - 0.5) * 15;
      posArray[i * 3 + 1] = (Math.random() - 0.5) * 10;
      posArray[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return posArray;
  }, [count]);
  
  // Store update frequency to reduce CPU usage
  const frameCount = useRef(0);
  const time = useRef(0);
  
  useFrame((_, delta) => {
    if (!particles.current) return;
    
    time.current += delta;
    
    // Only update every 2nd frame for better performance
    frameCount.current++;
    if (frameCount.current % 2 !== 0) return;
    
    // Update particles position based on mouse
    const positionArray = particles.current.geometry.getAttribute('position').array as Float32Array;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Move particles towards mouse with subtle wave motion
      const x = positionArray[i3];
      const y = positionArray[i3 + 1];
      const z = positionArray[i3 + 2];
      
      // Calculate distance to mouse (in normalized coordinates)
      const mouseX = (throttledMouse.x * viewport.width) / 2;
      const mouseY = (throttledMouse.y * viewport.height) / 2;
      const dx = mouseX - x;
      const dy = mouseY - y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      // Apply force inversely proportional to distance
      if (dist < 5) {
        positionArray[i3] += dx * 0.01;
        positionArray[i3 + 1] += dy * 0.01;
        // Add a slight wave effect
        positionArray[i3 + 2] += Math.sin(time.current + i * 0.1) * 0.01;
      }
      
      // Add some random movement with wave patterns
      positionArray[i3] += Math.sin(time.current * 0.5 + i * 0.2) * 0.01;
      positionArray[i3 + 1] += Math.cos(time.current * 0.5 + i * 0.2) * 0.01;
      positionArray[i3 + 2] += (Math.random() - 0.5) * 0.02;
      
      // Boundary check with smoother return
      if (Math.abs(x) > 7) positionArray[i3] *= 0.98;
      if (Math.abs(y) > 7) positionArray[i3 + 1] *= 0.98;
      if (Math.abs(z) > 7) positionArray[i3 + 2] *= 0.98;
    }
    
    particles.current.geometry.getAttribute('position').needsUpdate = true;
    
    // Gently rotate the entire particle system for added motion
    particles.current.rotation.y += 0.001;
    particles.current.rotation.z += 0.0005;
  });
  
  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.15} 
        color={color} 
        transparent 
        opacity={0.7}
        sizeAttenuation 
      />
    </points>
  );
};

interface ProcessStepProps {
  position: [number, number, number];
  color: string;
  label: string;
  active: boolean;
  onClick: () => void;
  detail?: string;
}

// Process step model representing each stage
const ProcessStep: React.FC<ProcessStepProps> = ({ position, color, label, active, onClick, detail }) => {
  const ref = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const time = useRef(0);
  
  // Create a more complex animation pattern
  useFrame((_, delta) => {
    if (ref.current) {
      time.current += delta;
      
      // Rotation animation
      ref.current.rotation.y += active ? 0.01 : hovered ? 0.007 : 0.002;
      
      // Active element has more dynamic movement
      if (active) {
        // Gentle bobbing up and down
        ref.current.position.y = position[1] + 0.5 + Math.sin(time.current * 2) * 0.2;
        // Slight rotation on other axes
        ref.current.rotation.z = Math.sin(time.current * 1.5) * 0.05;
        ref.current.rotation.x = Math.cos(time.current * 1.2) * 0.05;
      } else if (hovered) {
        // Subtle hover animation
        ref.current.position.y = position[1] + Math.sin(time.current * 3) * 0.1;
      }
    }
  });
    // Use spring animation for position changes
  const targetPos = useMemo(() => [
    position[0],
    position[1], 
    active ? position[2] - 1 : position[2]
  ] as [number, number, number], [active, position]);
  
  // Smoothly animate to target position
  useFrame(() => {
    if (!ref.current) return;
    
    // Spring animation for Z position
    ref.current.position.z += (targetPos[2] - ref.current.position.z) * 0.1;
    
    // Maintain X position
    ref.current.position.x = targetPos[0];
  });
  
  // Generate particle positions
  const particlePositions = useMemo(() => {
    return [...Array(15)].map(() => [
      (Math.random() - 0.5) * 5,
      (Math.random() - 0.5) * 5,
      (Math.random() - 0.5) * 5,
    ]);
  }, []);
  
  return (
    <group 
      position={position} 
      ref={ref}
      onClick={(e: ThreeEvent<MouseEvent>) => {
        e.stopPropagation();
        onClick();
        setShowDetail(!showDetail);
      }}
      onPointerOver={(e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={(e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation();
        setHovered(false);
      }}
      scale={active ? 1.2 : hovered ? 1.1 : 1}
    >
      {/* Main shape with more complex geometry */}
      <group scale={[1, 1, 1]}>
        <mesh castShadow>
          <icosahedronGeometry args={[0.8, 1]} />
          <meshStandardMaterial 
            color={color} 
            metalness={0.4} 
            roughness={0.2}
            opacity={0.95}
            transparent
            emissive={hovered || active ? color : "#000000"}
            emissiveIntensity={hovered ? 0.5 : active ? 0.3 : 0}
          />
        </mesh>
        
        {/* Outer wireframe for added complexity */}
        {active && (
          <mesh scale={[1.1, 1.1, 1.1]}>
            <icosahedronGeometry args={[0.8, 1]} />
            <meshStandardMaterial 
              color={color} 
              wireframe
              opacity={0.3}
              transparent
              emissive={color}
              emissiveIntensity={0.5}
            />
          </mesh>
        )}
      </group>
      
      {/* Inner core that pulses */}
      <mesh>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshPhysicalMaterial 
          color="#ffffff"
          emissive={color}
          emissiveIntensity={active ? 0.8 + Math.sin(time.current * 3) * 0.2 : hovered ? 0.5 : 0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>
      
      {/* Glow effect for active or hovered state */}
      <mesh scale={[1.5, 1.5, 1.5]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial 
          color={color} 
          transparent 
          opacity={active ? 0.15 + Math.sin(time.current * 2) * 0.05 : hovered ? 0.1 : 0}
        />
      </mesh>
      
      {/* Outer ring that rotates */}
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh rotation={[0, time.current * (active ? 0.8 : 0.2), 0]}>
          <torusGeometry args={[1.6, 0.05, 16, 100]} />
          <meshStandardMaterial 
            color={color} 
            opacity={active ? 0.8 : 0.3} 
            transparent 
            emissive={color}
            emissiveIntensity={active ? 0.5 : 0.2}
          />
        </mesh>
        
        {/* Second ring for active state */}
        {active && (
          <mesh rotation={[0, -time.current * 0.5, Math.PI / 4]}>
            <torusGeometry args={[1.8, 0.03, 16, 100]} />
            <meshStandardMaterial 
              color={color} 
              opacity={0.5} 
              transparent 
              emissive={color}
              emissiveIntensity={0.3}
            />
          </mesh>
        )}
      </group>
      
      {/* Enhanced label with better visibility */}
      <group position={[0, -1.8, 0]}>
        <Text 
          fontSize={0.45}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          outlineColor="#000000"
          outlineWidth={0.01}
        >
          {label}
        </Text>
        
        {/* Backplate for better readability */}
        <mesh position={[0, 0, -0.05]} scale={[label.length * 0.25, 0.6, 0.1]}>
          <boxGeometry />
          <meshBasicMaterial 
            color={color} 
            opacity={0.7} 
            transparent 
          />
        </mesh>
      </group>
      
      {/* Detailed popup when active or hovered */}
      {(active || hovered) && detail && (
        <Html
          position={[0, 2.2, 0]}
          wrapperClass="pointer-events-none"
          center
          distanceFactor={15}
          sprite
        >
          <div className="bg-white/90 backdrop-blur-sm text-flid-dark p-4 rounded-xl shadow-xl w-56 transform transition-all duration-300 scale-100">
            <h3 className="font-bold text-center mb-2 text-lg">{label}</h3>
            <p className="text-sm leading-snug">{detail}</p>
          </div>
        </Html>
      )}
      
      {/* Animated particles around active element */}
      {active && (
        <>
          {particlePositions.map((pos, i) => (
            <Float 
              key={i} 
              speed={1 + Math.sin(i * 0.5) * 1.5}
              rotationIntensity={Math.random() * 2}
              floatIntensity={1 + Math.random()}
            >
              <mesh position={pos as [number, number, number]}>
                <sphereGeometry args={[0.1 * (1 + Math.sin(time.current * 2 + i) * 0.3), 16, 16]} />
                <meshStandardMaterial 
                  color={color} 
                  emissive={color}
                  emissiveIntensity={0.8 + Math.sin(time.current * 3 + i) * 0.2}
                  toneMapped={false}
                />
              </mesh>
            </Float>
          ))}
        </>
      )}
      
      {/* Trail effect for active element */}
      {active && (
        <>
          {[...Array(5)].map((_, i) => (
            <mesh 
              key={`trail-${i}`}
              position={[0, -i * 0.2, 0]}
              scale={[1 - i * 0.15, 1 - i * 0.15, 1 - i * 0.15]}
              rotation={[0, time.current * (0.5 + i * 0.1), 0]}
            >
              <icosahedronGeometry args={[0.3, 1]} />
              <meshBasicMaterial 
                color={color} 
                opacity={0.2 - i * 0.04}
                transparent
                wireframe
              />
            </mesh>
          ))}
        </>
      )}
    </group>
  );
};

// Line connecting process steps with animation
const ConnectionLine: React.FC<{ 
  start: [number, number, number]; 
  end: [number, number, number]; 
  color?: string;
  active?: boolean;
}> = ({ 
  start, 
  end, 
  color = "#8B7DD1", 
  active = false 
}) => {
  const ref = useRef<THREE.Mesh>(null);
  const time = useRef(0);

  // Calculate the position and rotation for the cylinder
  const position: [number, number, number] = [
    (start[0] + end[0]) / 2,
    (start[1] + end[1]) / 2,
    (start[2] + end[2]) / 2
  ];

  // Calculate the length of the cylinder
  const length = Math.sqrt(
    Math.pow(end[0] - start[0], 2) +
    Math.pow(end[1] - start[1], 2) +
    Math.pow(end[2] - start[2], 2)
  );
  // Animation
  useFrame((_, delta) => {
    if (!ref.current) return;
    time.current += delta;
    
    if (active && ref.current.material instanceof THREE.Material) {
      // Pulse animation for active connections
      if ('opacity' in ref.current.material) {
        ref.current.material.opacity = 0.6 + Math.sin(time.current * 3) * 0.2;
      }
      
      if ('emissiveIntensity' in ref.current.material) {
        ref.current.material.emissiveIntensity = 0.3 + Math.sin(time.current * 2) * 0.1;
      }
    }
  });

  return (
    <group position={position} rotation={[0, 0, Math.PI / 2]}>
      <mesh ref={ref}>
        <cylinderGeometry args={[0.05, 0.05, length, 16]} />
        <meshStandardMaterial 
          color={color}
          opacity={active ? 0.8 : 0.6}
          transparent
          emissive={color}
          emissiveIntensity={active ? 0.3 : 0.1}
        />
      </mesh>
      
      {/* Animated particles along the connection for active state */}
      {active && (
        <>
          {[...Array(5)].map((_, i) => {
            const t = ((time.current * 0.5) + i / 5) % 1;
            const pos: [number, number, number] = [
              start[0] + (end[0] - start[0]) * t - position[0],
              start[1] + (end[1] - start[1]) * t - position[1],
              start[2] + (end[2] - start[2]) * t - position[2]
            ];
            
            return (
              <mesh key={i} position={pos} scale={[0.12, 0.12, 0.12]}>
                <sphereGeometry args={[1, 16, 16]} />
                <meshBasicMaterial color={color} />
              </mesh>
            );
          })}
        </>
      )}
    </group>
  );
};

interface ProcessItem {
  id: string;
  title: string;
  color: string;
  detail?: string;
}

interface EnhancedDesignProcessVisualizationProps {
  activeStep?: number;
  setActiveStep: (step: number) => void;
  processes?: ProcessItem[];
}

// Main component that displays the design thinking process
const EnhancedDesignProcessVisualization: React.FC<EnhancedDesignProcessVisualizationProps> = ({ 
  activeStep = 0, 
  setActiveStep, 
  processes = [] 
}) => {
  const [autoRotate, setAutoRotate] = useState(true);
  const groupRef = useRef<THREE.Group>(null);
  
  // Use provided processes or default if not provided
  const steps = processes.length > 0 ? processes : [
    { 
      id: "empathy", 
      title: "Empathy", 
      color: "#D2CDE8",
      detail: "Understanding the needs and desires of users through observation and engagement."
    },
    { 
      id: "reasoning", 
      title: "Reasoning", 
      color: "#8B7DD1",
      detail: "Analyzing findings to define problems and identify opportunities for innovation."
    },
    { 
      id: "materialization", 
      title: "Materialization", 
      color: "#6A5ACD",
      detail: "Creating solutions and refining them through testing and iteration."
    }
  ];
  
  // Set background color 
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scene = document.querySelector('canvas')?.parentElement;
      if (scene) {
        scene.style.backgroundColor = "#F5F5FA";
      }
    }
  }, []);
  
  // Change active step every 5 seconds if autoRotate is true
  useEffect(() => {
    if (!autoRotate) return;
    
    const interval = setInterval(() => {
      const nextStep = (activeStep + 1) % steps.length;
      setActiveStep(nextStep);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeStep, steps.length, autoRotate, setActiveStep]);
  
  // Calculate step positions
  const stepPositions = useMemo(() => {
    return steps.map((_, index) => [
      4 * (index - Math.floor(steps.length / 2)), 
      0, 
      0
    ] as [number, number, number]);
  }, [steps.length]);
    // Add subtle animation to the entire visualization
  useFrame(() => {
    if (groupRef.current) {
      // Very subtle floating motion
      groupRef.current.position.y = Math.sin(Date.now() * 0.0005) * 0.2;
    }
  });
  
  return (
    <>
      {/* Environment lights */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-10, 0, -10]} intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#8B7DD1" />
      
      {/* Interactive particle background */}
      <InteractiveParticles color="#D2CDE8" count={150} />
      
      <group ref={groupRef}>
        {/* Process steps */}
        {steps.map((step, index) => (
          <ProcessStep
            key={index}
            position={stepPositions[index]}
            color={step.color}
            label={step.title}
            detail={step.detail}
            active={index === activeStep}
            onClick={() => {
              setActiveStep(index);
              setAutoRotate(false);
            }}
          />
        ))}
        
        {/* Connection lines between steps with animations */}
        {steps.map((_, index) => {
          if (index < steps.length - 1) {
            const isActive = index === activeStep || index === activeStep - 1;
            return (
              <ConnectionLine 
                key={`line-${index}`}
                start={stepPositions[index]}
                end={stepPositions[index + 1]}
                active={isActive}
                color={isActive ? steps[Math.min(index, activeStep)].color : "#8B7DD1"}
              />
            );
          }
          return null;
        })}
      </group>
      
      {/* Controls overlay */}
      <Html position={[0, -4, 0]} center>
        <div className="flex justify-center">
          <div className="flex space-x-3">
            {steps.map((step, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === activeStep ? 'bg-flid-accent' : 'bg-flid-dark/30'
                }`}
                onClick={() => {
                  setActiveStep(index);
                  setAutoRotate(false);
                }}
                aria-label={`Go to ${step.title} step`}
              />
            ))}
          </div>
        </div>
      </Html>
    </>
  );
};

export default EnhancedDesignProcessVisualization;
