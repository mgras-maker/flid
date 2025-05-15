import { useRef, useState, useEffect, useMemo } from 'react';
import { useFrame, useThree, Canvas } from '@react-three/fiber';
import type { ThreeEvent } from '@react-three/fiber';
import { Text, Float, Html, AdaptiveDpr, AdaptiveEvents, Preload } from '@react-three/drei';
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
}

// Interactive particle system that responds to mouse movements
const InteractiveParticles = ({ color, count = 50 }: InteractiveParticlesProps) => {
  const particles = useRef<THREE.Points>(null);
  const { mouse, viewport } = useThree();
  
  // Use throttled mouse values to improve performance
  const throttledMouse = useThrottle({ x: mouse.x, y: mouse.y }, 16); // ~60fps
  
  // Initialize particle positions - memoized to avoid recalculation
  const positions = useMemo(() => {
    const posArray = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      posArray[i * 3] = (Math.random() - 0.5) * 10;
      posArray[i * 3 + 1] = (Math.random() - 0.5) * 10;
      posArray[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return posArray;
  }, [count]);
  
  // Store update frequency to reduce CPU usage
  const frameCount = useRef(0);
  
  useFrame(() => {
    if (!particles.current) return;
    
    // Only update every 2nd frame for better performance
    frameCount.current++;
    if (frameCount.current % 2 !== 0) return;
    
    // Update particles position based on mouse
    const positionArray = particles.current.geometry.getAttribute('position').array as Float32Array;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Move particles towards mouse
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
      if (dist < 3) {
        positionArray[i3] += dx * 0.01;
        positionArray[i3 + 1] += dy * 0.01;
      }
      
      // Add some random movement
      positionArray[i3] += (Math.random() - 0.5) * 0.05;
      positionArray[i3 + 1] += (Math.random() - 0.5) * 0.05;
      positionArray[i3 + 2] += (Math.random() - 0.5) * 0.05;
      
      // Boundary check
      if (Math.abs(x) > 5) positionArray[i3] *= 0.95;
      if (Math.abs(y) > 5) positionArray[i3 + 1] *= 0.95;
      if (Math.abs(z) > 5) positionArray[i3 + 2] *= 0.95;
    }
    
    particles.current.geometry.getAttribute('position').needsUpdate = true;
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
        size={0.1} 
        color={color} 
        transparent 
        opacity={0.6}
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
const ProcessStep = ({ position, color, label, active, onClick, detail }: ProcessStepProps) => {
  const ref = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
      if (active) {
        ref.current.rotation.z += 0.003;
      }
    }
  });
  
  // Calculate animated position
  const [animPos, setAnimPos] = useState(position);
  
  // Update position whenever active state changes
  useEffect(() => {
    setAnimPos([
      position[0],
      active ? position[1] + 0.5 : position[1],
      active ? position[2] - 1 : position[2]
    ]);
  }, [active, position]);
  
  return (
    <group 
      position={animPos} 
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
      {/* Main shape */}
      <mesh castShadow>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.3} 
          roughness={0.5}
          opacity={0.9}
          transparent
          emissive={hovered || active ? color : "#000000"}
          emissiveIntensity={hovered ? 0.5 : active ? 0.3 : 0}
        />
      </mesh>
      
      {/* Glow effect for active or hovered state */}
      <mesh scale={[1.2, 1.2, 1.2]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial 
          color={color} 
          transparent 
          opacity={active ? 0.15 : hovered ? 0.1 : 0}
        />
      </mesh>
      
      {/* Label */}
      <Text 
        position={[0, -1.5, 0]}
        fontSize={0.4}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
      
      {/* Popup with detail information when active */}
      {(active || hovered) && detail && (
        <Html
          position={[0, 2, 0]}
          wrapperClass="pointer-events-none"
          center
          distanceFactor={15}
          sprite
        >
          <div className="bg-white/90 backdrop-blur-sm text-flid-dark p-3 rounded-lg shadow-lg w-48">
            <h3 className="font-bold text-center mb-1">{label}</h3>
            <p className="text-xs leading-tight">{detail}</p>
          </div>
        </Html>
      )}
      
      {/* Particles around active element */}
      {active && (
        <>
          {[...Array(15)].map((_, i) => (
            <Float 
              key={i} 
              speed={Math.random() * 2 + 1} 
              rotationIntensity={Math.random() * 2}
              floatIntensity={Math.random() * 2}
            >
              <mesh position={[
                (Math.random() - 0.5) * 3,
                (Math.random() - 0.5) * 3,
                (Math.random() - 0.5) * 3,
              ]}>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial 
                  color={color} 
                  emissive={color}
                  emissiveIntensity={0.8}
                  toneMapped={false}
                />
              </mesh>
            </Float>
          ))}
        </>
      )}
      
      {/* Interactive ring */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[1.6, 0.05, 16, 100]} />
        <meshStandardMaterial 
          color={color} 
          opacity={active ? 0.8 : 0.3} 
          transparent 
          emissive={color}
          emissiveIntensity={active ? 0.5 : 0.2}
        />
      </mesh>
    </group>
  );
};

interface ProcessItem {
  id: string;
  title: string;
  color: string;
  detail?: string;
}

interface DesignProcessVisualizationProps {
  activeStep?: number;
  setActiveStep: (step: number) => void;
  processes?: ProcessItem[];
}

// Main component that displays the design thinking process
const DesignProcessVisualization = ({ activeStep = 0, setActiveStep, processes = [] }: DesignProcessVisualizationProps) => {
  const [autoRotate, setAutoRotate] = useState(true);
  
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
  
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 15], fov: 50 }}>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-10, 0, -10]} intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#8B7DD1" />
      
      {/* Interactive particle background */}
      <InteractiveParticles color="#D2CDE8" count={100} />
      
      {/* Process steps */}
      {steps.map((step, index) => (
        <ProcessStep
          key={index}
          position={[
            4 * (index - 1), 
            0, 
            0
          ]}
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
      
      {/* Connection lines between steps */}
      {steps.map((_, index) => {
        if (index < steps.length - 1) {
          return (
            <group 
              key={`line-${index}`}
              position={[2 * (index - 0.5), 0, 0]}
              rotation={[0, 0, Math.PI / 2]}
            >
              <mesh>
                <cylinderGeometry args={[0.05, 0.05, 3.5, 16]} />
                <meshStandardMaterial 
                  color="#8B7DD1"
                  opacity={0.6}
                  transparent
                />
              </mesh>
            </group>
          );
        }
        return null;
      })}
      
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
      <Preload all />
      
      {/* Controls overlay */}
      <Html position={[0, -4, 0]} center>
        <div className="flex justify-center">
          <div className="flex space-x-2">
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
    </Canvas>
  );
};

export default DesignProcessVisualization;
