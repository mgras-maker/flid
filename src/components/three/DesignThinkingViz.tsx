import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Float, Text, Stars } from '@react-three/drei';
import { Mesh, Vector3, Color, Group, AdditiveBlending, DoubleSide } from 'three';
import { motion } from 'framer-motion';

// Enhanced colors for a more sophisticated look
const nodeColors = {
  empathy: new Color('#4facfe'),      // vibrant blue
  reasoning: new Color('#b465da'),    // rich purple
  materialization: new Color('#43e97b'), // vivid green
  orbit: new Color('#e0c3fc'),        // soft lavender for orbits
  energy: new Color('#f093fb'),       // energetic pink
  planet1: new Color('#fd6585'),      // coral red
  planet2: new Color('#ffdd94'),      // soft yellow
  planet3: new Color('#00dbde'),      // teal
  inactive: new Color('#7f8c8d').multiplyScalar(0.5), // muted gray
};

// Fazy animacji as a plain object of constants
const AnimationPhase = {
  EMPATHY_ACTIVE: 0,
  EMPATHY_TO_REASONING: 1,
  REASONING_ACTIVE: 2,
  REASONING_TO_MATERIALIZATION: 3,
  MATERIALIZATION_ACTIVE: 4,
  MATERIALIZATION_TO_EMPATHY: 5,
  COMPLETION: 6
} as const;

// Stałe dla sekwencji animacji
const PHASE_DURATION = 3; // czas trwania każdej fazy w sekundach (increased for more dramatic effect)
const FLOW_DURATION = 2.0; // czas przepływu energii w sekundach

// Interfejs dla procesów
interface ProcessNode {
  id: string;
  title: string;
  description: string;
}

// Dane o procesach
const processNodes: ProcessNode[] = [
  {
    id: 'empathy',
    title: 'Empatia',
    description: 'Zrozumienie potrzeb, pragnień i wyzwań ludzi poprzez głębokie zanurzenie, obserwację i rozmowę.'
  },
  {
    id: 'reasoning',
    title: 'Rozumowanie',
    description: 'Analiza spostrzeżeń, definiowanie problemów i poszukiwanie kreatywnych rozwiązań poprzez krytyczne myślenie.'
  },
  {
    id: 'materialization',
    title: 'Materializacja',
    description: 'Przekształcanie pomysłów w namacalne prototypy i gotowe produkty, które tworzą pozytywny wpływ.'
  }
];

// Advanced animation utility functions for professional high-tech effects
// Animation easing functions - removed as they're not used

// The following utility functions are used within the component

// Main component
const DesignThinkingViz: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [isInfoVisible, setIsInfoVisible] = useState(false);
    // Phase state for edge node interactions
  const [currentPhase, setCurrentPhase] = useState<number>(AnimationPhase.EMPATHY_ACTIVE);
  
  // Handle node selection
  const handleNodeClick = (nodeId: string) => {
    console.log('Node clicked:', nodeId);
    setSelectedNode(nodeId);
    setIsInfoVisible(true);
    
    // Hide info after 5 seconds of inactivity
    setTimeout(() => {
      setIsInfoVisible(false);
    }, 5000);
  };
  
  // Handle edge node interactions
  const handleEdgeNodeClick = (edgeIndex: number) => {
    console.log(`Edge node ${edgeIndex} clicked`);
    // Map edge index to corresponding transition phase
    // Edge 0: Empathy to Reasoning transition (phase 1)
    // Edge 1: Reasoning to Materialization transition (phase 3)
    // Edge 2: Materialization to Empathy transition (phase 5)
    const newPhase = edgeIndex === 0 ? AnimationPhase.EMPATHY_TO_REASONING : 
                   edgeIndex === 1 ? AnimationPhase.REASONING_TO_MATERIALIZATION : 
                   AnimationPhase.MATERIALIZATION_TO_EMPATHY;
    
    setCurrentPhase(newPhase);
  };
  
  // Get selected node info
  const selectedNodeInfo = selectedNode 
    ? processNodes.find(node => node.id === selectedNode)
    : null;
    
  return (
    <div className="w-full h-full relative" data-testid="design-thinking-viz">
      <Suspense fallback={<div className="w-full h-full flex items-center justify-center bg-gray-900 text-white">Ładowanie wizualizacji 3D...</div>}>
        <Canvas 
          camera={{ position: [0, 0, 18], fov: 45 }} 
          dpr={[1, 1.5]} // Lower DPR for better performance
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: 'high-performance',
            failIfMajorPerformanceCaveat: true // Fall back to 2D if performance is poor
          }}
        >          <color attach="background" args={['#0a0a0a']} />
          <fog attach="fog" args={['#0a0a0a', 15, 35]} />
          <Scene 
            onNodeClick={handleNodeClick} 
            selectedNode={selectedNode}
            onEdgeNodeClick={handleEdgeNodeClick}
            currentPhase={currentPhase} 
          />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            rotateSpeed={0.3}
            autoRotate={!selectedNode} // Stop auto-rotate when a node is selected
            autoRotateSpeed={0.3}
          />
        </Canvas>
      </Suspense>
      
      {/* Node info overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {isInfoVisible && selectedNodeInfo && (
          <motion.div 
            className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md text-white p-4 rounded-lg shadow-lg pointer-events-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-1">{selectedNodeInfo.title}</h3>
            <p className="text-sm text-gray-300">{selectedNodeInfo.description}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

// Interfaces for props and node info
interface SceneProps {
  onNodeClick?: (nodeId: string) => void;
  onEdgeNodeClick?: (edgeIndex: number) => void;
  selectedNode?: string | null;
  currentPhase?: number;
}

// Główna scena 3D
const Scene = ({ onNodeClick, selectedNode, onEdgeNodeClick, currentPhase }: SceneProps) => {
  // Use the passed phase if provided, otherwise manage internally
  const [phase, setPhase] = useState<number>(currentPhase || AnimationPhase.EMPATHY_ACTIVE);
  const qualityLevel = useState<'low' | 'medium' | 'high'>(
    window.devicePixelRatio < 1.5 ? 'high' : window.devicePixelRatio < 2.5 ? 'medium' : 'low'
  )[0]; // Only use the state value, not the setter
  const [cycleCount, setCycleCount] = useState<number>(0);
  const timeRef = useRef<number>(0);
  const frameSkipRef = useRef<number>(0);
  const sceneRef = useRef<Group>(null);
  
  // Update internal phase when external phase changes
  useEffect(() => {
    if (currentPhase !== undefined) {
      setPhase(currentPhase);
    }
  }, [currentPhase]);
  
  const { gl } = useThree();
    // Triangle layout positions calculation - perfect equilateral triangle
  const radius = 7; // Distance from center
  const empathyPos = [0, radius * Math.sqrt(3)/3, 0]; // Top
  const reasoningPos = [-radius, -radius * Math.sqrt(3)/6, 0]; // Bottom left
  const materializationPos = [radius, -radius * Math.sqrt(3)/6, 0]; // Bottom right
  
  // Subtle rotation of the entire scene
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (sceneRef.current) {
      sceneRef.current.rotation.y = Math.sin(time * 0.1) * 0.05;
      sceneRef.current.rotation.x = Math.sin(time * 0.08) * 0.03;
    }
    
    // Animate through phases
    timeRef.current += state.clock.getElapsedTime() - state.clock.oldTime;
    
    let phaseDuration = phase % 2 === 0 ? PHASE_DURATION : FLOW_DURATION;
    
    // Adjust phase timing based on FPS performance
    frameSkipRef.current = (frameSkipRef.current + 1) % 30;
    
    if (timeRef.current >= phaseDuration && frameSkipRef.current === 0) {
      setPhase((prevPhase) => {
        const nextPhase = (prevPhase + 1) % 6;
        if (prevPhase === AnimationPhase.MATERIALIZATION_TO_EMPATHY) {
          setCycleCount(prev => prev + 1);
        }
        return nextPhase;
      });
      timeRef.current = 0;
    }
  });
  
  // Efekt do czyszczenia WebGL renderer przy odmontowaniu
  useEffect(() => {
    // Initialize scene with best practices
    if (gl) {
      gl.setClearColor(0x000000, 0); // Transparent background
      gl.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit for performance
    }
    
    return () => {
      // Cleanup WebGL resources when component unmounts
      if (gl) {
        gl.dispose();
        
        // Attempt to forcefully clean up GPU memory
        const loseContext = gl.getContext().getExtension('WEBGL_lose_context');
        if (loseContext) loseContext.loseContext();
      }
    };
  }, [gl]);
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
      <pointLight position={[0, 0, 5]} intensity={0.5} color="#ffffff" />
      
      <Stars radius={50} depth={50} count={1000} factor={4} fade speed={1} />
      
      <group ref={sceneRef}>        {/* Triangle outline with edge nodes */}        <TriangleConnection 
          points={[empathyPos, reasoningPos, materializationPos]}
          phase={phase}
          onEdgeNodeClick={onEdgeNodeClick}
        />
        
        {/* Process nodes */}
        <EmpathyNodeEnhanced 
          position={empathyPos} 
          isActive={phase === AnimationPhase.EMPATHY_ACTIVE || phase === AnimationPhase.EMPATHY_TO_REASONING}
          quality={qualityLevel}
          cycleCount={cycleCount}
          onClick={() => onNodeClick?.('empathy')}
          isSelected={selectedNode === 'empathy'}
        />
        
        <ReasoningNodeEnhanced 
          position={reasoningPos} 
          isActive={phase === AnimationPhase.REASONING_ACTIVE || phase === AnimationPhase.REASONING_TO_MATERIALIZATION} 
          quality={qualityLevel}
          cycleCount={cycleCount}
          onClick={() => onNodeClick?.('reasoning')}
          isSelected={selectedNode === 'reasoning'}
        />
        
        <MaterializationNodeEnhanced 
          position={materializationPos} 
          isActive={phase === AnimationPhase.MATERIALIZATION_ACTIVE || phase === AnimationPhase.MATERIALIZATION_TO_EMPATHY || phase === AnimationPhase.COMPLETION} 
          isFinalState={phase === AnimationPhase.COMPLETION}
          quality={qualityLevel}
          cycleCount={cycleCount}
          onClick={() => onNodeClick?.('materialization')}
          isSelected={selectedNode === 'materialization'}
        />
            {/* Enhanced high-tech energy flows between nodes */}
        {phase === AnimationPhase.EMPATHY_TO_REASONING && (
          <>
            <EnhancedEnergyFlow 
              from={empathyPos} 
              to={reasoningPos} 
              color={nodeColors.energy}
              quality={qualityLevel}
            />
            {/* Additional energy beam effect for more high-tech look */}
            <mesh position={[
              (empathyPos[0] + reasoningPos[0]) / 2,
              (empathyPos[1] + reasoningPos[1]) / 2,
              (empathyPos[2] + reasoningPos[2]) / 2
            ]}>
              <cylinderGeometry args={[
                0.03, 0.03, 
                Math.sqrt(
                  Math.pow(reasoningPos[0] - empathyPos[0], 2) +
                  Math.pow(reasoningPos[1] - empathyPos[1], 2) +
                  Math.pow(reasoningPos[2] - empathyPos[2], 2)
                ) * 0.85, 
                8, 1, true
              ]} />
              <meshBasicMaterial 
                color="#ffffff"
                transparent={true}
                opacity={0.2}
                blending={AdditiveBlending}
              />
            </mesh>
          </>
        )}
        
        {phase === AnimationPhase.REASONING_TO_MATERIALIZATION && (
          <>
            <EnhancedEnergyFlow 
              from={reasoningPos} 
              to={materializationPos} 
              color={nodeColors.energy}
              quality={qualityLevel} 
            />
            {/* Additional energy beam effect for more high-tech look */}
            <mesh position={[
              (reasoningPos[0] + materializationPos[0]) / 2,
              (reasoningPos[1] + materializationPos[1]) / 2,
              (reasoningPos[2] + materializationPos[2]) / 2
            ]}>
              <cylinderGeometry args={[
                0.03, 0.03, 
                Math.sqrt(
                  Math.pow(materializationPos[0] - reasoningPos[0], 2) +
                  Math.pow(materializationPos[1] - reasoningPos[1], 2) +
                  Math.pow(materializationPos[2] - reasoningPos[2], 2)
                ) * 0.85, 
                8, 1, true
              ]} />
              <meshBasicMaterial 
                color="#ffffff"
                transparent={true}
                opacity={0.2}
                blending={AdditiveBlending}
              />
            </mesh>
          </>
        )}
        
        {phase === AnimationPhase.MATERIALIZATION_TO_EMPATHY && (
          <>
            <EnhancedEnergyFlow 
              from={materializationPos} 
              to={empathyPos} 
              color={nodeColors.energy}
              quality={qualityLevel}
            />
            {/* Additional energy beam effect for more high-tech look */}
            <mesh position={[
              (materializationPos[0] + empathyPos[0]) / 2,
              (materializationPos[1] + empathyPos[1]) / 2,
              (materializationPos[2] + empathyPos[2]) / 2
            ]}>
              <cylinderGeometry args={[
                0.03, 0.03, 
                Math.sqrt(
                  Math.pow(empathyPos[0] - materializationPos[0], 2) +
                  Math.pow(empathyPos[1] - materializationPos[1], 2) +
                  Math.pow(empathyPos[2] - materializationPos[2], 2)
                ) * 0.85, 
                8, 1, true
              ]} />
              <meshBasicMaterial 
                color="#ffffff"
                transparent={true}
                opacity={0.2}
                blending={AdditiveBlending}
              />
            </mesh>
          </>
        )}
        
        {/* Labels */}
        <Text 
          position={[empathyPos[0], empathyPos[1] - 2, empathyPos[2]]} 
          fontSize={0.6} 
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          Empatia
        </Text>
        
        <Text 
          position={[reasoningPos[0], reasoningPos[1] - 2, reasoningPos[2]]} 
          fontSize={0.6} 
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          Rozumowanie
        </Text>
        
        <Text 
          position={[materializationPos[0], materializationPos[1] - 2, materializationPos[2]]} 
          fontSize={0.6} 
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          Materializacja
        </Text>
      </group>
    </>
  );
};

// Enhanced edge node animation function to be used in the useFrame hook
const updateEdgeNodeParticleHover = (child: Mesh, userData: any, time: number) => {
  // Handle click burst animation
  if (userData && userData.clickBurst) {
    const burstElapsed = Date.now() - userData.burstStartTime;
    const burstDuration = 600; // ms
    
    if (burstElapsed < burstDuration) {
      // Add burst velocity with gravity effect
      if (userData.burstVelocity) {
        // Apply velocity
        child.position.add(userData.burstVelocity);
        
        // Add gravity effect
        userData.burstVelocity.y -= 0.0015;
        
        // Add slight drag/resistance
        userData.burstVelocity.multiplyScalar(0.97);
      }
      
      // Add rotation for visual interest
      child.rotation.x += 0.05;
      child.rotation.y += 0.03;
      
      return; // Skip other animations during burst
    } else {
      // After burst completes, reset position smoothly
      if (userData.clickBurstPosition) {
        child.position.lerp(userData.clickBurstPosition, 0.1);
        
        // Check if we're close enough to original position
        if (child.position.distanceTo(userData.clickBurstPosition) < 0.01) {
          child.position.copy(userData.clickBurstPosition);
          delete userData.clickBurst;
          delete userData.clickBurstPosition;
        }
      }
    }
  }
  
  // Handle hover movement
  else if (userData && userData.hoverActive) {
    // If this particle is in hover state, apply outward movement
    if (userData.hoverVelocity) {
      // Apply hover velocity
      child.position.add(userData.hoverVelocity);
      
      // Add more complex oscillation patterns for visual interest
      const uniqueOffset = child.uuid.charCodeAt(0) || 0; // Use character code as unique offset
      child.position.x += Math.sin(time * 5 + uniqueOffset) * 0.003;
      child.position.y += Math.sin(time * 4.5 + uniqueOffset * 2) * 0.003;
      child.position.z += Math.sin(time * 4 + uniqueOffset * 3) * 0.003;
      
      // Smooth rotation while hovering
      child.rotation.x = time * 0.5 + uniqueOffset;
      child.rotation.y = time * 0.3 + uniqueOffset * 0.7;
      
      // Limit maximum distance with soft boundary
      const distanceFromOrigin = child.position.length();
      if (distanceFromOrigin > 1.2) {
        // Soft boundary - stronger slowdown the further out it goes
        const slowdownFactor = 0.88 + (Math.min(distanceFromOrigin - 1.2, 0.5) / 0.5) * 0.1;
        userData.hoverVelocity.multiplyScalar(slowdownFactor);
        
        // Add slight attraction back toward center when too far
        if (distanceFromOrigin > 1.5) {
          const centerDir = child.position.clone().negate().normalize();
          centerDir.multiplyScalar(0.001 * (distanceFromOrigin - 1.5));
          userData.hoverVelocity.add(centerDir);
        }
      }
    }
  } 
  
  // Return to original position
  else if (userData && userData.originalPosition) {
    // Check if we need to return to original position
    const dist = child.position.distanceTo(userData.originalPosition);
    if (dist > 0.01) {
      // Use dynamic lerp factor based on distance for more natural movement
      const lerpFactor = 0.05 + Math.min(dist * 0.05, 0.15);
      child.position.lerp(userData.originalPosition, lerpFactor);
      
      // Gradually slow rotation
      if (child.rotation.x != 0 || child.rotation.y != 0) {
        child.rotation.x *= 0.9;
        child.rotation.y *= 0.9;
      }
    } else {
      // We're close enough, snap to exact position
      child.position.copy(userData.originalPosition);
    }
  }
};

// Triangle connection component
interface TriangleConnectionProps {
  points: number[][];
  phase?: number;
  onEdgeNodeClick?: (edgeIndex: number) => void;
}

const TriangleConnection = ({ points, phase = 0, onEdgeNodeClick }: TriangleConnectionProps) => {
  const linesRef = useRef<any>([]);
  const edgeNodesRef = useRef<Mesh[]>([]);
  const edgeParticlesRef = useRef<Group[]>([]);
  const tendrilsRef = useRef<any[]>([]);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Determine active edge based on current phase
    // Edge 0: between empathy and reasoning (phase 1)
    // Edge 1: between reasoning and materialization (phase 3)
    // Edge 2: between materialization and empathy (phase 5)
    const activeEdge = phase % 2 === 1 ? Math.floor(phase / 2) % 3 : -1;
    
    linesRef.current.forEach((line: any, i: number) => {
      if (line) {
        // Subtle pulsating effect for the triangle lines
        const opacity = 0.2 + Math.sin(time * 0.5 + i) * 0.1;
        if (line.material) {
          line.material.opacity = opacity;
        }
      }
    });
    
    // Animate tendrils connecting edge nodes to main nodes
    tendrilsRef.current.forEach((tendril: any, i: number) => {
      if (tendril && tendril.material) {
        const edgeIndex = Math.floor(i / 6);  // Each edge has 6 tendrils (3 to each adjacent main node)
        const isActive = edgeIndex === activeEdge;
        
        // Make the tendrils pulse more intensely when their edge is active
        if (isActive) {
          tendril.material.opacity = 0.6 + Math.sin(time * 3 + i * 0.5) * 0.4;
          tendril.material.dashOffset = -time * 2;
          tendril.material.dashSize = 0.5 + Math.sin(time * 2) * 0.3;
          tendril.material.gapSize = 0.2 + Math.cos(time * 3) * 0.1;
          tendril.material.color.set(new Color().setHSL(
            (Math.sin(time + i * 0.1) * 0.1 + 0.5) % 1,
            0.8,
            0.6
          ));
        } else {
          tendril.material.opacity = 0.15 + Math.sin(time * 0.5 + i * 0.2) * 0.1;
          tendril.material.dashOffset = -time * 0.5;
          tendril.material.dashSize = 0.3;
          tendril.material.gapSize = 0.3;
        }
      }
    });
      // Animate edge nodes with enhanced effects
    edgeNodesRef.current.forEach((node, i) => {
      if (node) {
        // Dynamic rotation animation
        const rotationSpeed = i === activeEdge ? 0.8 : 0.4;
        const wobble = 0.05 * Math.sin(time * 2 + i * Math.PI/3);
        
        // Create a more organic motion with wobbling effect
        node.rotation.y = time * rotationSpeed + wobble;
        node.rotation.z = time * 0.3 + wobble * 0.7;
        node.rotation.x = Math.sin(time * 0.2 + i) * 0.1;
        
        // Different animation for active and inactive edge nodes
        if (i === activeEdge) {
          // Active node: pulsating with more energy and dynamic motion
          const pulseBase = 1.3;
          const pulseIntensity = 0.3;
          const pulseFreq = 1.5 + Math.sin(time * 0.3) * 0.2;
          
          // Non-uniform scaling for more dynamic effect
          const scaleBase = pulseBase + Math.sin(time * pulseFreq) * pulseIntensity;
          node.scale.x = scaleBase * (1.0 + Math.sin(time * 1.2) * 0.1);
          node.scale.y = scaleBase * (1.0 + Math.sin(time * 1.5 + 0.4) * 0.1);
          node.scale.z = scaleBase * (1.0 + Math.sin(time * 1.8 + 0.8) * 0.1);
          
          // Update material properties with enhanced glowing effect
          if (node.material) {
            const material = node.material as any;
            if (material.emissiveIntensity !== undefined) {
              // Stronger glow for active edge node with color shift
              material.emissiveIntensity = 1.2 + Math.sin(time * 2) * 0.4;
              material.transmission = 0.45 + Math.sin(time * 1.5) * 0.25;
              
              // Subtle color shift based on the phase
              const hue = (i * 0.2 + Math.sin(time * 0.5) * 0.05) % 1.0;
              material.emissive.setHSL(hue, 0.8, 0.6);
            }
          }
        } else {
          // Inactive nodes: more subtle but still interesting animation
          const pulseBase = 0.85;
          const pulseIntensity = 0.15;
          const pulseFreq = 0.7 + i * 0.2;
          
          node.scale.setScalar(pulseBase + Math.sin(time * pulseFreq + i * 0.5) * pulseIntensity);
          
          // Update material properties with breathing effect
          if (node.material) {
            const material = node.material as any;
            if (material.emissiveIntensity !== undefined) {
              material.emissiveIntensity = 0.5 + Math.sin(time * 0.5 + i) * 0.2;
              material.transmission = 0.25 + Math.sin(time * 0.7 + i) * 0.1;
            }
          }
        }
      }
    });
      // Animate particle groups around edge nodes with enhanced dynamics
    edgeParticlesRef.current.forEach((group, edgeIndex) => {
      if (group) {
        const isActive = edgeIndex === activeEdge;
        
        // Multi-axis rotation for more complex motion
        group.rotation.y = time * (isActive ? 1.2 : 0.5);
        group.rotation.z = Math.sin(time * 0.3) * (isActive ? 0.3 : 0.1);
        group.rotation.x = Math.cos(time * 0.5) * (isActive ? 0.2 : 0.05);
        
        // Make particles perform more complex orbital dances
        if (isActive) {
          // Expand the overall particle system for active nodes
          group.scale.setScalar(1.2 + Math.sin(time * 0.8) * 0.2);
          
          group.children.forEach((child, particleIdx) => {
            if (child instanceof Mesh) {
              // Check for hover state and apply special movement if needed
              if (child.userData) {
                updateEdgeNodeParticleHover(child, child.userData, time);
              }
              
              if (!child.userData?.hoverActive) {
                // Regular active node animation if not in hover state
                // Calculate phase offset for each particle
                const phaseOffset = (particleIdx / group.children.length) * Math.PI * 2;
                
                // Create orbital motion pattern with varying frequencies
                const orbitRadius = 0.5 + Math.sin(time * 0.5 + phaseOffset) * 0.2;
                const orbitSpeed = 2 + particleIdx % 3;
                const verticalBounce = Math.sin(time * 1.5 + phaseOffset) * 0.3;
                
                // Complex 3D motion
                child.position.x = Math.sin(time * orbitSpeed + phaseOffset) * orbitRadius;
                child.position.y = verticalBounce + Math.cos(time * orbitSpeed * 0.7 + phaseOffset) * orbitRadius * 0.8;
                child.position.z = Math.sin(time * orbitSpeed * 0.5 + phaseOffset) * orbitRadius * 0.6;
              }
              
              // Rest of your original particle animation code...
              // Varied scales for visual interest
              const baseScale = 0.15 + (particleIdx % 3) * 0.03;
              const nodePhaseOffset = 1.5; // Define phase offset
              child.scale.setScalar(baseScale + Math.sin(time * 3 + nodePhaseOffset) * 0.1);
              
              // Update material with dynamic color and glow effects
              if (child.material) {
                const material = child.material as any;
                if (material.emissiveIntensity !== undefined) {
                  // Pulsating glow                  material.emissiveIntensity = 1.5 + Math.sin(time * 2.5 + nodePhaseOffset) * 0.5;
                  material.opacity = 0.9 + Math.sin(time * 3 + nodePhaseOffset) * 0.1;
                  
                  // Color variations for particles (if color can be modified)
                  if (material.emissive && particleIdx % 3 === 0) {
                    const hue = (0.5 + Math.sin(time * 0.2 + particleIdx * 0.1) * 0.2) % 1.0;
                    material.emissive.setHSL(hue, 0.9, 0.6);
                  }
                }
              }
            }
          });
        } else {
          // Subtle but still interesting movement for inactive edges
          group.scale.setScalar(1.0 + Math.sin(time * 0.4) * 0.1);
          
          group.children.forEach((child, particleIdx) => {
            if (child instanceof Mesh) {
              // Check for hover state and apply special movement if needed
              if (child.userData) {
                updateEdgeNodeParticleHover(child, child.userData, time);
              }
              
              if (!child.userData?.hoverActive) {
                // Regular inactive node animation if not in hover state
                // Calculate phase offset for each particle
                const phaseOffset = (particleIdx / group.children.length) * Math.PI * 2;
                
                // Gentler orbital motion
                const orbitRadius = 0.3 + Math.sin(time * 0.3 + phaseOffset) * 0.1;
                const orbitSpeed = 0.8 + (particleIdx % 3) * 0.2;
                
                child.position.x = Math.sin(time * orbitSpeed + phaseOffset) * orbitRadius;
                child.position.y = Math.cos(time * orbitSpeed + phaseOffset) * orbitRadius * 0.7;
                child.position.z = Math.sin(time * orbitSpeed * 0.3 + phaseOffset) * orbitRadius * 0.3;
              }
              
              // Rest of your original inactive particle animation code...
              // Varied scales
              const baseScale = 0.1 + (particleIdx % 3) * 0.01;
              const edgePhaseOffset = 2.0; // Define phase offset
              child.scale.setScalar(baseScale + Math.sin(time * 1.2 + edgePhaseOffset) * 0.05);
              
              // Update material for subtle glow
              if (child.material) {
                const material = child.material as any;
                if (material.emissiveIntensity !== undefined) {                  material.emissiveIntensity = 0.7 + Math.sin(time * 0.6 + edgePhaseOffset) * 0.2;
                  material.opacity = 0.7 + Math.sin(time * 0.7 + edgePhaseOffset) * 0.1;
                }
              }
            }
          });
        }
      }
    });
  });
  
  return (
    <group>
      {points.map((point, i) => {
        const nextPoint = points[(i + 1) % points.length];
          // Calculate middle points for edge nodes (exactly on the edges)
        const midPoint = [
          point[0] + (nextPoint[0] - point[0]) / 2,
          point[1] + (nextPoint[1] - point[1]) / 2,
          point[2] + (nextPoint[2] - point[2]) / 2
        ];
        
        return (
          <group key={`line-${i}`}>            {/* Line between main nodes - constrained within triangle */}            <line ref={(el) => { if (el) linesRef.current[i] = el; }}>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  args={[
                    new Float32Array([
                      // Use a point slightly inside the main node for cleaner lines
                      point[0] + (nextPoint[0] - point[0]) * 0.02, 
                      point[1] + (nextPoint[1] - point[1]) * 0.02, 
                      point[2] + (nextPoint[2] - point[2]) * 0.02,
                      
                      // Use a point slightly inside the next node for cleaner lines
                      nextPoint[0] + (point[0] - nextPoint[0]) * 0.02, 
                      nextPoint[1] + (point[1] - nextPoint[1]) * 0.02, 
                      nextPoint[2] + (point[2] - nextPoint[2]) * 0.02
                    ]), 
                    3
                  ]}
                />
              </bufferGeometry>
              <lineBasicMaterial
                attach="material"
                color={nodeColors.orbit}
                transparent
                opacity={0.3}
                linewidth={1}
              />
            </line>
              {/* Enhanced high-tech gradient line overlay with animated effects */}
            <mesh
              position={[
                (point[0] + nextPoint[0]) / 2,
                (point[1] + nextPoint[1]) / 2,
                (point[2] + nextPoint[2]) / 2
              ]}
              rotation={[0, 0, Math.atan2(nextPoint[1] - point[1], nextPoint[0] - point[0])]}
            >
              <planeGeometry args={[
                Math.sqrt(Math.pow(nextPoint[0] - point[0], 2) + Math.pow(nextPoint[1] - point[1], 2)),
                0.12
              ]} />
              <meshPhysicalMaterial 
                transparent 
                opacity={0.6} 
                side={DoubleSide}
                blending={AdditiveBlending}
                color={nodeColors.orbit}
                emissive={nodeColors.orbit}
                emissiveIntensity={0.5}
                transmission={0.95}
                thickness={0.05}
                roughness={0.2}
                clearcoat={1.0}
                reflectivity={0.2}
                depthWrite={false}
                metalness={0.5}
              />
            </mesh>
            
            {/* Additional glowing line effect for more depth and high-tech feel */}
            <mesh
              position={[
                (point[0] + nextPoint[0]) / 2,
                (point[1] + nextPoint[1]) / 2,
                (point[2] + nextPoint[2]) / 2 + 0.01
              ]}
              rotation={[0, 0, Math.atan2(nextPoint[1] - point[1], nextPoint[0] - point[0])]}
            >
              <planeGeometry args={[
                Math.sqrt(Math.pow(nextPoint[0] - point[0], 2) + Math.pow(nextPoint[1] - point[1], 2)) * 0.92,
                0.04
              ]} />
              <meshBasicMaterial 
                transparent 
                opacity={0.8} 
                side={DoubleSide}
                blending={AdditiveBlending}
                color={'#ffffff'}
                depthWrite={false}
              />
            </mesh>
              {/* Node exactly on the edge with enhanced visual */}            <Float speed={1} rotationIntensity={0.5} floatIntensity={0.3}>
              <mesh 
                position={[midPoint[0], midPoint[1], midPoint[2]]}
                ref={el => { if (el) { if (!edgeNodesRef.current[i]) edgeNodesRef.current[i] = el; }}}                onClick={(e) => {
                  e.stopPropagation();
                  // Edge node click handler to trigger animation transitions
                  console.log(`Edge node ${i} clicked`);
                  
                  // Enhanced visual feedback on click with spring animation
                  if (edgeNodesRef.current[i]) {
                    // Create a more sophisticated pulse animation
                    const node = edgeNodesRef.current[i];
                    const originalScale = node.scale.x;
                    const peakScale = originalScale * 1.6;
                    
                    // Animation constants
                    const clickDuration = 400; // ms
                    const startTime = Date.now();
                    
                    // Spring animation function
                    const animateClick = () => {
                      const elapsed = Date.now() - startTime;
                      if (elapsed < clickDuration) {
                        const progress = elapsed / clickDuration;
                        
                        // Spring animation effect - overshoot then return with dampening
                        const springEffect = 
                          progress < 0.2 
                            ? progress * 5 * peakScale / originalScale // Quick rise
                            : 1 + (peakScale / originalScale - 1) * Math.exp(-8 * (progress - 0.2)) * Math.cos(progress * 15); // Oscillation with dampening
                        
                        node.scale.setScalar(originalScale * springEffect);
                        
                        // Continue animation
                        requestAnimationFrame(animateClick);
                      } else {
                        // Ensure we end at the exact original scale
                        node.scale.setScalar(originalScale);
                      }
                      
                      // Also pulse the material as part of click feedback
                      const material = node.material as any;
                      if (material && material.emissiveIntensity !== undefined) {
                        if (elapsed < clickDuration * 0.5) {
                          // Increase emission on click
                          const clickProgress = elapsed / clickDuration;
                          material.emissiveIntensity = 2.0 * Math.sin(clickProgress * Math.PI);
                        } else {
                          // Return to normal
                          const progress = elapsed / clickDuration; // Calculate progress
                          material.emissiveIntensity = 0.8 + (2.0 - 0.8) * Math.exp(-5 * (progress - 0.5));
                        }
                      }
                    };
                    
                    requestAnimationFrame(animateClick);
                      // Create a particle burst effect on click
                    if (edgeParticlesRef.current[i]) {
                      edgeParticlesRef.current[i].children.forEach((child) => {
                        if (child instanceof Mesh) {
                          // Clone position to avoid reference issues
                          child.userData.clickBurstPosition = child.position.clone();
                          
                          // Add explosive velocity
                          const dir = child.position.clone().normalize();
                          const burstSpeed = 0.05 + Math.random() * 0.05;
                          child.userData.clickBurst = true;
                          child.userData.burstVelocity = dir.multiplyScalar(burstSpeed);
                          child.userData.burstStartTime = Date.now();
                          
                          // Create temporary glow effect
                          const childMaterial = child.material as any;
                          if (childMaterial && childMaterial.emissiveIntensity !== undefined) {
                            childMaterial.emissiveIntensity = 2.0;
                            
                            // Reset material after burst
                            setTimeout(() => {
                              childMaterial.emissiveIntensity = 1.0;
                              child.userData.clickBurst = false;
                            }, 400 + Math.random() * 200);
                          }
                        }
                      });
                    }
                  }
                  
                  // Call the handler if provided, otherwise dispatch a custom event
                  if (onEdgeNodeClick) {
                    onEdgeNodeClick(i);
                  } else {
                    // Fallback to event dispatch method
                    if (typeof window !== 'undefined') {
                      const event = new CustomEvent('designThinkingPhaseChange', { 
                        detail: { phase: i === 0 ? 1 : i === 1 ? 3 : 5 } 
                      });
                      window.dispatchEvent(event);
                    }
                  }
                }}onPointerOver={(e) => {
                  e.stopPropagation();
                  document.body.style.cursor = 'pointer';
                  // Enhanced hover effect with smooth scaling animation
                  if (edgeNodesRef.current[i]) {
                    const node = edgeNodesRef.current[i];
                    const startScale = node.scale.x;
                    const targetScale = 1.4;
                    const duration = 300; // ms
                    const startTime = Date.now();
                    
                    // Smooth animation using requestAnimationFrame
                    const animateScale = () => {
                      const elapsed = Date.now() - startTime;
                      if (elapsed < duration) {
                        const progress = elapsed / duration;
                        // Ease out cubic function for smooth transition
                        const easeProgress = 1 - Math.pow(1 - progress, 3);
                        const newScale = startScale + (targetScale - startScale) * easeProgress;
                        
                        node.scale.setScalar(newScale);
                        requestAnimationFrame(animateScale);
                      } else {
                        node.scale.setScalar(targetScale);
                      }
                    };
                    requestAnimationFrame(animateScale);
                    
                    // Update material with enhanced visual effects
                    const material = node.material as any;
                    if (material && material.emissiveIntensity !== undefined) {
                      material.emissiveIntensity = 1.8; // Increased intensity
                      material.transmission = 0.45;  // More transparency for stronger glow
                      material.clearcoat = 1.6;     // Enhanced shine effect
                      material.roughness = 0.01;    // Ultra polished surface
                      material.envMapIntensity = 2.0; // Stronger reflections
                    }
                      // Create dynamic particle effect on hover
                    if (edgeParticlesRef.current[i]) {
                      edgeParticlesRef.current[i].children.forEach((child) => {
                        if (child instanceof Mesh) {
                          // Stagger the animation slightly by particle index
                          setTimeout(() => {
                            // Scale up with random variation
                            child.scale.setScalar(0.15 + Math.random() * 0.1);
                            
                            // Store original position for smooth return later
                            child.userData.originalPosition = child.position.clone();
                            
                            // Add directional velocity with radial pattern
                            const dirVector = child.position.clone().normalize();
                            const speed = 0.01 + Math.random() * 0.01;
                            
                            child.userData.hoverActive = true;
                            child.userData.hoverVelocity = new Vector3(
                              dirVector.x * speed,
                              dirVector.y * speed,
                              dirVector.z * speed
                            );
                            
                            // Add slight randomization to make movement more organic
                            child.userData.hoverVelocity.add(new Vector3(
                              (Math.random() - 0.5) * 0.005,
                              (Math.random() - 0.5) * 0.005,
                              (Math.random() - 0.5) * 0.005
                            ));
                          }, Math.random() * 60); // Random timing for cascade effect
                        }
                      });
                    }
                  }
                }}                onPointerOut={() => {
                  document.body.style.cursor = 'auto';
                  // Reset enhancement with smooth transition
                  if (edgeNodesRef.current[i]) {
                    const node = edgeNodesRef.current[i];
                    
                    // Determine target scale based on node activity state
                    const isActive = i === Math.floor(phase / 2) % 3 && phase % 2 === 1;
                    const targetScale = isActive ? 1.3 : 0.85;
                    
                    // Animate scale return
                    const startScale = node.scale.x;
                    const duration = 350; // ms
                    const startTime = Date.now();
                    
                    const animateScaleDown = () => {
                      const elapsed = Date.now() - startTime;
                      if (elapsed < duration) {
                        const progress = elapsed / duration;
                        // Ease out elastic effect for subtle bounce
                        const easeProgress = Math.pow(1 - progress, 3) * Math.sin(progress * Math.PI * 4) * 0.1 + (1 - Math.pow(1 - progress, 3));
                        const newScale = startScale + (targetScale - startScale) * easeProgress;
                        
                        node.scale.setScalar(newScale);
                        requestAnimationFrame(animateScaleDown);
                      } else {
                        // Let the regular animation take over from here
                      }
                    };
                    requestAnimationFrame(animateScaleDown);
                    
                    // Reset material properties with brief transition delay
                    setTimeout(() => {
                      const material = node.material as any;
                      if (material && material.emissiveIntensity !== undefined) {
                        material.emissiveIntensity = isActive ? 1.2 : 0.5;
                        material.transmission = isActive ? 0.35 : 0.2;
                        material.clearcoat = 1.2;
                        material.roughness = 0.05;
                        material.envMapIntensity = 1.5;
                      }
                    }, 100);
                      // Create smooth return animation for particles
                    if (edgeParticlesRef.current[i]) {
                      edgeParticlesRef.current[i].children.forEach((child) => {
                        if (child instanceof Mesh) {
                          // Stagger the return animation slightly
                          setTimeout(() => {
                            // Mark particles as no longer in hover state
                            child.userData.hoverActive = false;
                            
                            // The position return animation is handled by updateEdgeNodeParticleHover
                            
                            // Scale particles back down with slight delay for visual interest
                            setTimeout(() => {
                              child.scale.setScalar(0.1);
                            }, 50 + Math.random() * 100);
                          }, Math.random() * 45);
                        }
                      });
                    }
                  }
                }}
              >                <icosahedronGeometry args={[0.5, 2]} /> {/* Increased detail level */}
                <meshPhysicalMaterial
                  color={i === 0 ? nodeColors.empathy : i === 1 ? nodeColors.reasoning : nodeColors.materialization}
                  roughness={0.01} // Ultra-smooth surface for high-tech look
                  metalness={0.9}  // Nearly full metalness for maximum reflection
                  clearcoat={1.5}  // Enhanced clearcoat for premium shine
                  clearcoatRoughness={0.0} // Perfectly smooth clearcoat
                  transmission={0.45} // Increased transmission for glass-like effect
                  thickness={1.5} // Increased thickness for better refraction
                  emissive={i === 0 ? nodeColors.empathy : i === 1 ? nodeColors.reasoning : nodeColors.materialization}
                  emissiveIntensity={1.2} // Stronger glow
                  reflectivity={1}
                  ior={2.0} // Higher index of refraction for more dramatic light bending
                  envMapIntensity={2.0} // Enhanced environment reflections
                  toneMapped={false} // Keep colors vibrant without tone mapping
                  attenuationDistance={0.5} // Control light attenuation inside material
                  attenuationColor={new Color('#ffffff').lerp(
                    i === 0 ? nodeColors.empathy : i === 1 ? nodeColors.reasoning : nodeColors.materialization,
                    0.5
                  )}
                />
              </mesh>
            </Float>              {/* Enhanced text label for edge node with animation */}
            <Float
              speed={0.5}
              rotationIntensity={0.2}
              floatIntensity={0.3}
            >            <Text
                position={[
                  midPoint[0] + (i === 0 ? 0 : i === 1 ? -0.8 : 0.8), 
                  midPoint[1] + (i === 0 ? -0.8 : 0.4), 
                  midPoint[2]
                ]}
                fontSize={0.4}
                color={
                  i === Math.floor(phase / 2) % 3 && phase % 2 === 1
                    ? i === 0 ? "#6facfe" : i === 1 ? "#c465da" : "#63e97b" 
                    : "#ffffff"
                }
                anchorX="center"
                anchorY="middle"
                font="/fonts/Inter-Medium.woff"
                outlineWidth={0.01}
                outlineColor={i === 0 ? "#4fa0fe" : i === 1 ? "#b45ada" : "#43d97b"}
                fillOpacity={i === Math.floor(phase / 2) % 3 && phase % 2 === 1 ? 1.0 : 0.8}
              >
                {i === 0 ? "Empatyczne Rozumowanie" : i === 1 ? "Analityczna Materializacja" : "Twórcza Empatia"}
              </Text>
            </Float>
            
            {/* Energy tendrils connecting edge node to adjacent main nodes */}
            <group>
              {[0, 1, 2].map((lineIdx) => {
                // Create multiple energy tendrils for each connection for a more organic look
                const offsetX = (Math.random() - 0.5) * 0.2;
                const offsetY = (Math.random() - 0.5) * 0.2;
                const offsetZ = (Math.random() - 0.5) * 0.2;
                
                return (
                  <line key={`tendril-${i}-${lineIdx}-1`} ref={(el) => { if (el) tendrilsRef.current.push(el); }}>
                    <bufferGeometry>
                      <bufferAttribute
                        attach="attributes-position"
                        args={[
                          new Float32Array([
                            // From edge node to first main node
                            midPoint[0] + offsetX, midPoint[1] + offsetY, midPoint[2] + offsetZ,
                            point[0], point[1], point[2],
                          ]), 
                          3
                        ]}
                      />
                    </bufferGeometry>                    <lineDashedMaterial
                      attach="material"
                      color={i === 0 ? nodeColors.empathy : i === 1 ? nodeColors.reasoning : nodeColors.materialization}
                      transparent
                      opacity={0.4}
                      dashSize={0.5}
                      gapSize={0.3}
                      linewidth={2}
                    />
                  </line>
                );
              })}
              
              {[0, 1, 2].map((lineIdx) => {
                // Create multiple energy tendrils for each connection for a more organic look
                const offsetX = (Math.random() - 0.5) * 0.2;
                const offsetY = (Math.random() - 0.5) * 0.2;
                const offsetZ = (Math.random() - 0.5) * 0.2;
                
                return (
                  <line key={`tendril-${i}-${lineIdx}-2`} ref={(el) => { if (el) tendrilsRef.current.push(el); }}>
                    <bufferGeometry>
                      <bufferAttribute
                        attach="attributes-position"
                        args={[
                          new Float32Array([
                            // From edge node to second main node
                            midPoint[0] + offsetX, midPoint[1] + offsetY, midPoint[2] + offsetZ,
                            nextPoint[0], nextPoint[1], nextPoint[2],
                          ]), 
                          3
                        ]}
                      />
                    </bufferGeometry>
                    <lineDashedMaterial
                      attach="material"
                      color={i === 0 ? nodeColors.empathy : i === 1 ? nodeColors.reasoning : i === 2 ? nodeColors.materialization : nodeColors.orbit}
                      transparent
                      opacity={0.3}
                      dashSize={0.5}
                      gapSize={0.2}
                    />
                  </line>
                );
              })}
            </group>
            
            {/* Organized particles around edge nodes in a group */}
            <group 
              position={[midPoint[0], midPoint[1], midPoint[2]]}
              ref={el => { if (el) { if (!edgeParticlesRef.current[i]) edgeParticlesRef.current[i] = el; }}}
            >              {Array(18).fill(0).map((_, particleIndex) => { // Increased particle count for richer effect
                const particleOffset = 0.6 + (particleIndex % 3) * 0.15; // Variable distance from center
                const angle = (particleIndex / 10) * Math.PI * 2; // More even distribution
                const px = Math.sin(angle) * particleOffset;
                const py = Math.cos(angle) * particleOffset;
                const pz = Math.sin(angle * 2) * 0.2;
                
                // Choose different geometry types for visual variety
                const geometryType = particleIndex % 5;
                
                return (
                  <Float 
                    key={`edge-particle-${i}-${particleIndex}`}
                    speed={0.8 + Math.random() * 1.0} // Variable animation speed
                    rotationIntensity={0.8}
                    floatIntensity={0.7}
                  >
                    <mesh position={[px, py, pz]} scale={[0.08 + (particleIndex % 4) * 0.02, 0.08 + (particleIndex % 4) * 0.02, 0.08 + (particleIndex % 4) * 0.02]}>
                      {geometryType === 0 ? (
                        <sphereGeometry args={[1, 16, 16]} />
                      ) : geometryType === 1 ? (
                        <octahedronGeometry args={[1, 0]} />
                      ) : geometryType === 2 ? (
                        <tetrahedronGeometry args={[1, 0]} />
                      ) : geometryType === 3 ? (
                        <boxGeometry args={[0.7, 0.7, 0.7]} />
                      ) : (
                        <dodecahedronGeometry args={[1, 0]} />
                      )}
                      <meshPhysicalMaterial
                        color={i === 0 ? nodeColors.empathy : i === 1 ? nodeColors.reasoning : nodeColors.materialization}
                        emissive={i === 0 ? nodeColors.empathy : i === 1 ? nodeColors.reasoning : nodeColors.materialization}
                        emissiveIntensity={1.5}
                        transparent
                        opacity={0.85}
                        toneMapped={false}
                        metalness={0.8}
                        roughness={0.1}
                        clearcoat={1.0}
                        clearcoatRoughness={0.0}
                        transmission={0.3} // Slight transparency for more interesting light interactions
                        envMapIntensity={2.0} // Enhanced environment reflections
                      />
                    </mesh>
                  </Float>
                );
              })}
            </group>            {/* Glowing effect for active edge nodes */}
            <EdgeNodeGlow
              position={[midPoint[0], midPoint[1], midPoint[2]]}
              isActive={i === Math.floor(phase / 2) % 3 && phase % 2 === 1}
              color={i === 0 ? nodeColors.empathy : i === 1 ? nodeColors.reasoning : nodeColors.materialization}
              size={0.8}
            />
          </group>
        );
      })}
    </group>
  );
};

// Interface for EdgeNodeGlow props
interface EdgeNodeGlowProps {
  position: [number, number, number];
  isActive: boolean;
  color: Color | string;
  size?: number;
}

// Custom component for the glowing effect around active edge nodes
const EdgeNodeGlow: React.FC<EdgeNodeGlowProps> = ({ position, isActive, color, size = 0.8 }) => {
  const outerGlowRef = useRef<Mesh>(null);
  const innerGlowRef = useRef<Mesh>(null);
  const raysRef = useRef<Group>(null);
  const sparklesRef = useRef<Group>(null);
  const energyRingRef = useRef<Mesh>(null);
  
  // Track active state to create smooth transitions
  const activeStateRef = useRef<boolean>(isActive);
  const transitionStartRef = useRef<number>(0);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Handle state change transitions
    if (isActive !== activeStateRef.current) {
      activeStateRef.current = isActive;
      transitionStartRef.current = time;
    }
    
    // Calculate transition progress
    const transitionDuration = 1.2; // seconds
    const timeSinceTransition = time - transitionStartRef.current;
    const transitionProgress = Math.min(timeSinceTransition / transitionDuration, 1.0);
    
    // Use easing function for smooth transition
    const easeTransition = isActive 
      ? 1 - Math.pow(1 - transitionProgress, 3) // ease out cubic when turning on
      : Math.pow(1 - transitionProgress, 2);    // ease out quad when turning off
    
    // Only update if refs exist
    if (outerGlowRef.current && outerGlowRef.current.material && 
        innerGlowRef.current && innerGlowRef.current.material) {
      
      // Update the glow effect
      const outerMaterial = outerGlowRef.current.material as any;
      const innerMaterial = innerGlowRef.current.material as any;
      
      if (isActive || timeSinceTransition < transitionDuration) {
        // Pulsating outer glow with transition
        const baseOpacity = isActive ? 0.35 : 0;
        const pulseAmount = Math.sin(time * 1.5) * 0.15;
        outerMaterial.opacity = baseOpacity * easeTransition + pulseAmount * easeTransition;
        
        const baseScale = size * 1.5;
        const pulseScale = Math.sin(time * 1.2) * size * 0.4;
        outerGlowRef.current.scale.setScalar((baseScale + pulseScale) * easeTransition);
        
        // More intense inner glow with transition
        const innerOpacity = isActive ? 0.7 : 0;
        const innerPulseAmount = Math.sin(time * 2.0) * 0.3;
        innerMaterial.opacity = innerOpacity * easeTransition + innerPulseAmount * easeTransition;
        
        const innerBaseScale = size * 0.9;
        const innerPulseScale = Math.sin(time * 1.5) * size * 0.15;
        innerGlowRef.current.scale.setScalar((innerBaseScale + innerPulseScale) * easeTransition);
        
        // Animate ray beams with transition
        if (raysRef.current) {
          // Continuous rotation regardless of active state
          raysRef.current.rotation.y = time * 0.5;
          raysRef.current.rotation.z = time * 0.3;
          
          raysRef.current.children.forEach((ray, i) => {
            if (ray instanceof Mesh) {
              // Base length with pulsation
              const baseLength = 1.8 + Math.sin(time * 1.5 + i * 0.2) * 0.5;
              ray.scale.y = baseLength * easeTransition;
              
              // Update opacity with transition
              const rayMaterial = ray.material as any;
              if (rayMaterial.opacity !== undefined) {
                const rayBaseOpacity = isActive ? 0.4 : 0;
                const rayPulse = Math.sin(time * 0.8 + i) * 0.2;
                rayMaterial.opacity = (rayBaseOpacity + rayPulse) * easeTransition;
              }
            }
          });
        }
        
        // Animate energy ring
        if (energyRingRef.current) {
          const ringMaterial = energyRingRef.current.material as any;
          energyRingRef.current.rotation.z = time * 0.2;
          
          if (ringMaterial) {
            ringMaterial.opacity = 0.6 * easeTransition;
            // Animate emission map offset for flowing effect
            if (ringMaterial.emissiveIntensity !== undefined) {
              ringMaterial.emissiveIntensity = 1.0 * easeTransition;
            }
            
            // Animate ring scale with subtle pulsation
            const ringScale = size * (1.4 + Math.sin(time * 1.7) * 0.15);
            energyRingRef.current.scale.setScalar(ringScale * easeTransition);
          }
        }
        
        // Animate sparkles
        if (sparklesRef.current) {
          sparklesRef.current.children.forEach((sparkle, i) => {
            if (sparkle instanceof Mesh) {
              // Unique movement pattern for each sparkle
              const angle = time * (0.2 + i * 0.1) + i * Math.PI / 4;
              const radius = size * (1.1 + Math.sin(time * 0.5 + i) * 0.2);
              
              sparkle.position.x = Math.cos(angle) * radius;
              sparkle.position.y = Math.sin(angle) * radius;
              sparkle.position.z = Math.sin(time + i) * size * 0.3;
              
              // Rotate sparkles
              sparkle.rotation.z = time * 2 + i;
              
              // Scale with pulsation
              const sparkleScale = 0.1 + Math.sin(time * 3 + i * 2) * 0.05;
              sparkle.scale.setScalar(sparkleScale * easeTransition);
              
              // Update opacity
              const sparkleMaterial = sparkle.material as any;
              if (sparkleMaterial && sparkleMaterial.opacity !== undefined) {
                sparkleMaterial.opacity = (0.7 + Math.sin(time * 2 + i) * 0.3) * easeTransition;
              }
            }
          });
        }
      } else {
        // Hide all glow elements when inactive and transition complete
        outerMaterial.opacity = 0;
        innerMaterial.opacity = 0;
        outerGlowRef.current.scale.setScalar(0);
        innerGlowRef.current.scale.setScalar(0);
        
        if (raysRef.current) {
          raysRef.current.children.forEach(ray => {
            if (ray instanceof Mesh) {
              ray.scale.setScalar(0);
            }
          });
        }
        
        if (energyRingRef.current) {
          energyRingRef.current.scale.setScalar(0);
          const ringMaterial = energyRingRef.current.material as any;
          if (ringMaterial) {
            ringMaterial.opacity = 0;
          }
        }
        
        if (sparklesRef.current) {
          sparklesRef.current.children.forEach(sparkle => {
            if (sparkle instanceof Mesh) {
              sparkle.scale.setScalar(0);
            }
          });
        }
      }
    }
  });
  
  // Convert color from string or Color to hex string for consistency
  const colorHex = typeof color === 'string' ? color : `#${color.getHexString()}`;
  const colorObj = new Color(colorHex);
  // Create variations of the color
  const lightenedColor = colorObj.clone().lerp(new Color('#ffffff'), 0.3).getHexString();
  // Removed unused variable
  
  return (
    <group position={position}>
      {/* Outer glow sphere */}
      <mesh ref={outerGlowRef} renderOrder={-1}>
        <sphereGeometry args={[size, 24, 24]} />
        <meshBasicMaterial
          color={colorHex}
          transparent
          opacity={0.4}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      
      {/* Inner glow sphere - more intense */}
      <mesh ref={innerGlowRef} renderOrder={-1}>
        <sphereGeometry args={[size * 0.7, 16, 16]} />
        <meshBasicMaterial
          color={lightenedColor}
          transparent
          opacity={0.7}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      
      {/* Energy ring around the node */}
      <mesh ref={energyRingRef} renderOrder={-1} rotation={[Math.PI/2, 0, 0]}>
        <ringGeometry args={[size * 1.2, size * 1.4, 32]} />
        <meshBasicMaterial
          color={colorHex}
          transparent
          opacity={0.6}
          blending={AdditiveBlending}
          depthWrite={false}
          side={DoubleSide}          /* emissive properties removed as they're not supported */
        />
      </mesh>
      
      {/* Light rays emanating from node */}
      <group ref={raysRef}>
        {Array(8).fill(0).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const rayLength = size * 2.5;
          return (
            <mesh 
              key={`ray-${i}`} 
              position={[0, 0, 0]}
              rotation={[0, 0, angle]}
            >
              <planeGeometry args={[0.15, rayLength]} />
              <meshBasicMaterial
                color={colorHex}
                transparent
                opacity={0.5}
                blending={AdditiveBlending}
                depthWrite={false}
                side={DoubleSide}
              />
            </mesh>
          );
        })}
      </group>
      
      {/* Sparkling particles orbiting the node */}
      <group ref={sparklesRef}>
        {Array(12).fill(0).map((_, i) => {
          // Randomize initial positions in a sphere
          const angle = (i / 12) * Math.PI * 2;
          const radius = size * (1 + Math.random() * 0.3);
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const z = (Math.random() - 0.5) * size * 0.6;
          
          return (
            <mesh
              key={`sparkle-${i}`}
              position={[x, y, z]}
            >
              {i % 3 === 0 ? (
                <octahedronGeometry args={[0.08, 0]} />
              ) : i % 3 === 1 ? (
                <tetrahedronGeometry args={[0.1, 0]} />
              ) : (
                <boxGeometry args={[0.07, 0.07, 0.07]} />
              )}
              <meshBasicMaterial
                color={i % 2 === 0 ? lightenedColor : colorHex}
                transparent
                opacity={0.7}
                blending={AdditiveBlending}
                depthWrite={false}
              />
            </mesh>
          );
        })}
      </group>
    </group>
  );
};

// Component interfaces
interface NodeProps {
  position: number[];
  isActive: boolean;
  quality: 'low' | 'medium' | 'high';
  cycleCount: number;
  isFinalState?: boolean;
  onClick?: () => void;
  isSelected?: boolean;
}

// Empathy node - organic, fluid form with orbiting planets
const EmpathyNodeEnhanced = ({ position, isActive, quality, cycleCount, onClick, isSelected }: NodeProps) => {
  const groupRef = useRef<Group>(null);
  const mainSphereRef = useRef<Mesh>(null);
  const planetRefs = useRef<Mesh[]>([]);
  const orbitRef = useRef<any>(null);
  const [hovered, setHovered] = useState(false);
  
  const color = isActive ? nodeColors.empathy : nodeColors.inactive;
  const planetCount = quality === 'high' ? 3 : quality === 'medium' ? 2 : 1;
  
  // Change cursor on hover
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [hovered]);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime() + cycleCount * 10;
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1;
    }
    
    if (mainSphereRef.current) {
      mainSphereRef.current.scale.setScalar(isActive ? 1.0 + Math.sin(time * 0.8) * 0.05 : 0.9);
      if (isActive && mainSphereRef.current.material) {
        const material = mainSphereRef.current.material as any;
        if (material.emissiveIntensity !== undefined) {
          material.emissiveIntensity = 0.5 + Math.sin(time) * 0.2;
        }
      }
    }
    
    // Animate orbiting planets
    planetRefs.current.forEach((planet, i) => {
      if (planet) {
        const angle = (time * 0.3 + i * (Math.PI * 2 / planetCount)) % (Math.PI * 2);
        const radius = 2.0 + Math.sin(time * 0.5 + i) * 0.1;
        planet.position.x = Math.sin(angle) * radius;
        planet.position.y = Math.cos(angle) * radius;
        planet.rotation.y = time * (0.5 + i * 0.1);
        planet.rotation.x = time * (0.3 + i * 0.1);
        
        // Scale effect based on active state
        planet.scale.setScalar(isActive ? 1.0 + Math.sin(time * 2 + i) * 0.1 : 0.7);
      }
    });
  });
    return (
    <group position={[position[0], position[1], position[2]]} ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh 
          ref={mainSphereRef}
          onClick={onClick}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <sphereGeometry args={[1.5, quality === 'low' ? 16 : quality === 'medium' ? 32 : 64, quality === 'low' ? 16 : quality === 'medium' ? 32 : 64]} />
          <meshPhysicalMaterial
            color={isSelected ? '#ffffff' : color}
            roughness={0.2}
            metalness={0.3}
            transmission={0.2}
            thickness={1.5}
            transparent
            opacity={0.9}
            emissive={isSelected ? '#ffffff' : color}
            emissiveIntensity={isSelected ? 0.8 : isActive ? 0.5 : 0.1}
          />
        </mesh>
      </Float>
      
      {/* Selection indicator */}
      {isSelected && (
        <mesh rotation={[Math.PI/2, 0, 0]}>
          <torusGeometry args={[1.8, 0.05, 16, 64]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.8} />
        </mesh>
      )}
      
      {/* Orbit ring */}
      <mesh rotation={[Math.PI/2, 0, 0]} ref={orbitRef}>
        <torusGeometry args={[2.0, 0.02, 8, quality === 'low' ? 32 : quality === 'medium' ? 64 : 100]} />
        <meshBasicMaterial
          color={nodeColors.orbit}
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Orbiting planets */}
      {Array(planetCount).fill(0).map((_, i) => {
        const angle = (i / planetCount) * Math.PI * 2;
        const radius = 2.0;
        const x = Math.sin(angle) * radius;
        const y = Math.cos(angle) * radius;
        
        return (
          <mesh 
            key={`emp-planet-${i}`}
            position={[x, y, 0]}
            ref={el => { if (el) planetRefs.current[i] = el }}
          >
            <sphereGeometry args={[0.25, quality === 'low' ? 8 : quality === 'medium' ? 16 : 32, quality === 'low' ? 8 : quality === 'medium' ? 16 : 32]} />
            <meshStandardMaterial
              color={i === 0 ? nodeColors.planet1 : i === 1 ? nodeColors.planet2 : nodeColors.planet3}
              roughness={0.3}
              metalness={0.6}
              emissive={i === 0 ? nodeColors.planet1 : i === 1 ? nodeColors.planet2 : nodeColors.planet3}
              emissiveIntensity={isActive ? 0.8 : 0.2}
            />
          </mesh>
        );
      })}
      
      {/* Mini energy flows between planets */}
      {isActive && planetCount >= 2 && (
        <>
          {planetCount >= 3 && (
            <>
              <OrbitEnergy planet1={0} planet2={1} planetRefs={planetRefs} quality={quality} />
              <OrbitEnergy planet1={1} planet2={2} planetRefs={planetRefs} quality={quality} />
              <OrbitEnergy planet1={2} planet2={0} planetRefs={planetRefs} quality={quality} />
            </>
          )}
          {planetCount === 2 && (
            <OrbitEnergy planet1={0} planet2={1} planetRefs={planetRefs} quality={quality} />
          )}
        </>
      )}
    </group>
  );
};

// Reasoning node - complex geometric form with orbiting planets
const ReasoningNodeEnhanced = ({ position, isActive, quality, cycleCount, onClick, isSelected }: NodeProps) => {
  const torusRef = useRef<Mesh>(null);
  const icosahedronRef = useRef<Mesh>(null);
  const planetRefs = useRef<Mesh[]>([]);
  const orbitRef = useRef<any>(null);
  const [hovered, setHovered] = useState(false);
  
  const color = isActive ? nodeColors.reasoning : nodeColors.inactive;
  const planetCount = quality === 'high' ? 3 : quality === 'medium' ? 2 : 1;
  
  // Change cursor on hover
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [hovered]);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime() + cycleCount * 10;
    
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.2;
      torusRef.current.rotation.y = time * 0.1;
      torusRef.current.scale.setScalar(isActive ? 1.0 + Math.sin(time * 0.5) * 0.03 : 0.9);
    }
    
    if (icosahedronRef.current) {
      icosahedronRef.current.rotation.y = -time * 0.3;
      icosahedronRef.current.rotation.z = time * 0.2;
      icosahedronRef.current.scale.setScalar(isActive ? 1.0 + Math.sin(time * 0.8) * 0.05 : 0.8);
    }
    
    // Animate orbiting planets
    planetRefs.current.forEach((planet, i) => {
      if (planet) {
        const angle = (time * 0.4 + i * (Math.PI * 2 / planetCount) + Math.PI/6) % (Math.PI * 2);
        const radius = 2.0 + Math.sin(time * 0.6 + i) * 0.1;
        // Tilted orbital plane for visual interest
        planet.position.x = Math.sin(angle) * radius;
        planet.position.y = Math.cos(angle) * radius * 0.8;
        planet.position.z = Math.cos(angle) * radius * 0.2; // Slight z-axis variation
        planet.rotation.y = time * (0.6 + i * 0.1);
        planet.rotation.z = time * (0.4 + i * 0.1);
        
        planet.scale.setScalar(isActive ? 1.0 + Math.sin(time * 1.5 + i) * 0.1 : 0.7);
      }
    });
    
    // Animate orbit ring
    if (orbitRef.current) {
      orbitRef.current.rotation.z = time * 0.1;
      orbitRef.current.rotation.x = Math.PI/2 + Math.sin(time * 0.2) * 0.1;
    }
  });
    return (
    <group position={[position[0], position[1], position[2]]}>
      <group
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <mesh ref={torusRef}>
          <torusGeometry args={[1.2, 0.3, quality === 'low' ? 12 : quality === 'medium' ? 16 : 24, quality === 'low' ? 24 : quality === 'medium' ? 48 : 64]} />
          <meshStandardMaterial
            color={isSelected ? '#ffffff' : color}
            roughness={0.3}
            metalness={0.7}
            emissive={isSelected ? '#ffffff' : color}
            emissiveIntensity={isSelected ? 0.9 : isActive ? 0.6 : 0.1}
          />
        </mesh>
        
        <mesh ref={icosahedronRef} position={[0, 0, 0]}>
          <icosahedronGeometry args={[0.8, 1]} />
          <meshPhysicalMaterial
            color={isSelected ? '#ffffff' : color}
            roughness={0.4}
            metalness={0.6}
            clearcoat={1}
            transmission={0.1}
            emissive={isSelected ? '#ffffff' : color}
            emissiveIntensity={isSelected ? 1.0 : isActive ? 0.7 : 0.1}
          />
        </mesh>
      </group>
      
      {/* Selection indicator */}
      {isSelected && (
        <mesh rotation={[Math.PI/2, 0, 0]}>
          <torusGeometry args={[1.8, 0.05, 16, 64]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.8} />
        </mesh>
      )}
      
      {/* Orbit ring - slightly tilted */}
      <mesh rotation={[Math.PI/2 + 0.2, 0, 0]} ref={orbitRef}>
        <torusGeometry args={[2.0, 0.02, 8, quality === 'low' ? 32 : quality === 'medium' ? 64 : 100]} />
        <meshBasicMaterial
          color={nodeColors.orbit}
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Orbiting planets */}
      {Array(planetCount).fill(0).map((_, i) => {
        const angle = (i / planetCount) * Math.PI * 2 + Math.PI/6;
        const radius = 2.0;
        const x = Math.sin(angle) * radius;
        const y = Math.cos(angle) * radius * 0.8;
        const z = Math.cos(angle) * radius * 0.2;
        
        return (
          <mesh 
            key={`rea-planet-${i}`}
            position={[x, y, z]}
            ref={el => { if (el) planetRefs.current[i] = el }}
          >
            <octahedronGeometry args={[0.25, 0]} />
            <meshStandardMaterial
              color={i === 0 ? nodeColors.planet1 : i === 1 ? nodeColors.planet2 : nodeColors.planet3}
              roughness={0.3}
              metalness={0.7}
              emissive={i === 0 ? nodeColors.planet1 : i === 1 ? nodeColors.planet2 : nodeColors.planet3}
              emissiveIntensity={isActive ? 0.8 : 0.2}
            />
          </mesh>
        );
      })}
      
      {/* Mini energy flows between planets */}
      {isActive && planetCount >= 2 && (
        <>
          {planetCount >= 3 && (
            <>
              <OrbitEnergy planet1={0} planet2={1} planetRefs={planetRefs} quality={quality} />
              <OrbitEnergy planet1={1} planet2={2} planetRefs={planetRefs} quality={quality} />
              <OrbitEnergy planet1={2} planet2={0} planetRefs={planetRefs} quality={quality} />
            </>
          )}
          {planetCount === 2 && (
            <OrbitEnergy planet1={0} planet2={1} planetRefs={planetRefs} quality={quality} />
          )}
        </>
      )}
    </group>
  );
};

// Materialization node - crystalline structure with orbiting planets
const MaterializationNodeEnhanced = ({ position, isActive, isFinalState = false, quality, cycleCount, onClick, isSelected }: NodeProps) => {
  const groupRef = useRef<Group>(null);
  const mainRef = useRef<Mesh>(null);
  const planetRefs = useRef<Mesh[]>([]);
  const orbitRef = useRef<any>(null);
  const [hovered, setHovered] = useState(false);
  
  const color = isActive ? nodeColors.materialization : nodeColors.inactive;
  const planetCount = quality === 'high' ? 3 : quality === 'medium' ? 2 : 1;
  
  // Change cursor on hover
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [hovered]);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime() + cycleCount * 10;
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1;
      if (isFinalState) {
        groupRef.current.rotation.y = time * 0.3;
        groupRef.current.rotation.x = time * 0.2;
      }
    }
    
    if (mainRef.current) {
      if (isFinalState) {
        // Completion effect - pulsing
        mainRef.current.scale.setScalar(1.0 + Math.sin(time * 3) * 0.1);
        if (mainRef.current.material) {
          const material = mainRef.current.material as any;
          if (material.emissiveIntensity !== undefined) {
            material.emissiveIntensity = 0.8 + Math.sin(time * 2) * 0.2;
          }
        }
      } else {
        mainRef.current.scale.setScalar(isActive ? 1.0 + Math.sin(time * 0.7) * 0.03 : 0.9);
      }
    }
    
    // Animate orbiting planets
    planetRefs.current.forEach((planet, i) => {
      if (planet) {
        const angle = (time * 0.5 + i * (Math.PI * 2 / planetCount) + Math.PI/3) % (Math.PI * 2);
        const radius = 2.0 + Math.sin(time * 0.7 + i) * 0.1;
        // Tilted orbit in different direction
        planet.position.x = Math.sin(angle) * radius;
        planet.position.y = Math.cos(angle) * radius * 0.7;
        planet.position.z = Math.sin(angle) * radius * 0.3;
        planet.rotation.y = time * (0.7 + i * 0.1);
        planet.rotation.x = time * (0.5 + i * 0.1);
        
        if (isFinalState) {
          // Energetic movement during final state
          planet.scale.setScalar(1.0 + Math.sin(time * 3 + i) * 0.2);
          const material = planet.material as any;
          if (material && material.emissiveIntensity !== undefined) {
            material.emissiveIntensity = 0.9 + Math.sin(time * 2.5 + i) * 0.3;
          }
        } else {
          planet.scale.setScalar(isActive ? 1.0 + Math.sin(time * 1.2 + i) * 0.1 : 0.7);
        }
      }
    });
    
    // Animate orbit ring
    if (orbitRef.current) {
      orbitRef.current.rotation.z = time * 0.15;
      orbitRef.current.rotation.x = Math.PI/2 + Math.sin(time * 0.25) * 0.15;
    }
  });
    return (
    <group position={[position[0], position[1], position[2]]} ref={groupRef}>
      {/* Main crystal structure */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh 
          ref={mainRef}
          onClick={onClick}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <dodecahedronGeometry args={[1.3, 0]} />
          <meshPhysicalMaterial
            color={isSelected ? '#ffffff' : color}
            roughness={0.1}
            metalness={0.8}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transmission={0.2}
            thickness={1.5}
            emissive={isSelected ? '#ffffff' : color}
            emissiveIntensity={isSelected ? 1.0 : isActive ? (isFinalState ? 0.8 : 0.5) : 0.1}
          />
        </mesh>
      </Float>
      
      {/* Selection indicator */}
      {isSelected && (
        <mesh rotation={[Math.PI/2, 0, 0]}>
          <torusGeometry args={[1.8, 0.05, 16, 64]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.8} />
        </mesh>
      )}
      
      {/* Orbit ring - differently tilted */}
      <mesh rotation={[Math.PI/2 - 0.2, 0, 0]} ref={orbitRef}>
        <torusGeometry args={[2.0, 0.02, 8, quality === 'low' ? 32 : quality === 'medium' ? 64 : 100]} />
        <meshBasicMaterial
          color={nodeColors.orbit}
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Orbiting planets */}
      {Array(planetCount).fill(0).map((_, i) => {
        const angle = (i / planetCount) * Math.PI * 2 + Math.PI/3;
        const radius = 2.0;
        const x = Math.sin(angle) * radius;
        const y = Math.cos(angle) * radius * 0.7;
        const z = Math.sin(angle) * radius * 0.3;
        
        return (
          <mesh 
            key={`mat-planet-${i}`}
            position={[x, y, z]}
            ref={el => { if (el) planetRefs.current[i] = el }}
          >
            <tetrahedronGeometry args={[0.3, 0]} />
            <meshStandardMaterial
              color={i === 0 ? nodeColors.planet1 : i === 1 ? nodeColors.planet2 : nodeColors.planet3}
              roughness={0.2}
              metalness={0.8}
              emissive={i === 0 ? nodeColors.planet1 : i === 1 ? nodeColors.planet2 : nodeColors.planet3}
              emissiveIntensity={isActive ? 0.8 : 0.2}
            />
          </mesh>
        );
      })}
      
      {/* Mini energy flows between planets */}
      {isActive && planetCount >= 2 && (
        <>
          {planetCount >= 3 && (
            <>
              <OrbitEnergy planet1={0} planet2={1} planetRefs={planetRefs} quality={quality} />
              <OrbitEnergy planet1={1} planet2={2} planetRefs={planetRefs} quality={quality} />
              <OrbitEnergy planet1={2} planet2={0} planetRefs={planetRefs} quality={quality} />
            </>
          )}
          {planetCount === 2 && (
            <OrbitEnergy planet1={0} planet2={1} planetRefs={planetRefs} quality={quality} />
          )}
        </>
      )}
    </group>
  );
};

// Energy flow between planets
interface OrbitEnergyProps {
  planet1: number;
  planet2: number;
  planetRefs: React.MutableRefObject<Mesh[]>;
  quality: 'low' | 'medium' | 'high';
}

const OrbitEnergy = ({ planet1, planet2, planetRefs, quality }: OrbitEnergyProps) => {
  const particlesCount = quality === 'low' ? 4 : quality === 'medium' ? 6 : 8;
  const particles = useRef<Mesh[]>([]);
  const trailParticles = useRef<Mesh[]>([]);  // Dodatkowe cząstki dla śladu
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    particles.current.forEach((particle, i) => {
      if (particle && planetRefs.current[planet1] && planetRefs.current[planet2]) {
        const p1 = planetRefs.current[planet1].position;
        const p2 = planetRefs.current[planet2].position;
        
        // Bardziej zróżnicowane prędkości dla cząsteczek
        const speed = 0.4 + (i % 3) * 0.1;
        const t = ((time * speed + i * 0.1) % 1);
        
        // Dynamiczna ścieżka z większą krzywizną i zmiennością
        const midOffsetMagnitude = 0.4 + Math.sin(time * 0.3 + i) * 0.2;
        const midPoint = new Vector3()
          .addVectors(p1, p2)
          .multiplyScalar(0.5)
          .add(new Vector3(
            Math.sin(i * 0.8 + time * 0.2) * midOffsetMagnitude, 
            Math.sin(i * 0.5 + time * 0.3) * midOffsetMagnitude, 
            Math.cos(i * 0.7 + time * 0.25) * midOffsetMagnitude
          ));
          
        // Dodatkowe punkty kontrolne dla bardziej złożonej ścieżki
        const controlPoint1 = new Vector3()
          .lerpVectors(p1, midPoint, 0.3)
          .add(new Vector3(
            Math.sin(time * 0.5 + i * 0.7) * 0.2,
            Math.sin(time * 0.4 + i * 0.5) * 0.2,
            Math.sin(time * 0.3 + i * 0.3) * 0.2
          ));
          
        const controlPoint2 = new Vector3()
          .lerpVectors(midPoint, p2, 0.3)
          .add(new Vector3(
            Math.sin(time * 0.6 + i * 0.6) * 0.2,
            Math.sin(time * 0.5 + i * 0.4) * 0.2,
            Math.sin(time * 0.4 + i * 0.2) * 0.2
          ));
          
        // Złożona ścieżka z wieloma punktami kontrolnymi
        if (t < 0.33) {
          const t2 = t * 3;
          particle.position.lerpVectors(p1, controlPoint1, t2);
        } else if (t < 0.66) {
          const t2 = (t - 0.33) * 3;
          particle.position.lerpVectors(controlPoint1, controlPoint2, t2);
        } else {
          const t2 = (t - 0.66) * 3;
          particle.position.lerpVectors(controlPoint2, p2, t2);
        }
        
        // Bardziej dynamiczne efekty pulsacji
        const pulseFreq = 3 + (i % 4) * 1.5;
        const scale = 0.07 + Math.sin(time * pulseFreq + i * 2) * 0.03;
        particle.scale.setScalar(scale);
        
        // Animacja rotacji
        particle.rotation.x = time * (1 + i * 0.2);
        particle.rotation.y = time * (0.8 + i * 0.15);
        
        // Dynamiczna zmiana jasności
        if (particle.material) {
          const material = particle.material as any;
          if (material.emissiveIntensity !== undefined) {
            material.emissiveIntensity = 2 + Math.sin(time * 4 + i) * 1;
          }
        }
      }
    });
    
    // Animacja cząstek śladu
    trailParticles.current.forEach((particle, i) => {
      if (particle && particles.current[i % particles.current.length]) {        // Cząstki śladu podążają za głównymi z opóźnieniem
        const mainParticle = particles.current[i % particles.current.length];
        
        // Interpolacja pozycji z opóźnieniem
        particle.position.lerp(mainParticle.position, 0.1);
        
        // Mniejsze rozmiary i zanikanie dla śladu
        const fadeScale = 0.04 - i * 0.005;
        particle.scale.setScalar(Math.max(0.01, fadeScale));
        
        // Efekt zanikania śladu z czasem
        if (particle.material) {
          const material = particle.material as any;
          if (material.opacity !== undefined) {
            material.opacity = 0.3 + Math.sin(time * 3 + i) * 0.2;
          }
        }
      }
    });
  });
  
  // Różne kolory dla różnych par planet
  const colorIndex = (planet1 + planet2) % 3;
  const colors = [
    nodeColors.energy, 
    new Color('#00e5ff'),  // jasny turkus
    new Color('#ffdd94')   // jasny żółty
  ];
  const color = colors[colorIndex];
  
  return (
    <group>
      {/* Główne cząsteczki energii */}
      {Array(particlesCount).fill(0).map((_, i) => {
        // Zróżnicowane kształty dla cząstek
        const particleType = i % 3;
        
        return (
          <mesh
            key={`orbit-particle-${planet1}-${planet2}-${i}`}
            ref={el => {
              if (el) particles.current[i] = el;
            }}
          >
            {particleType === 0 ? (
              <sphereGeometry args={[0.06, 8, 8]} />
            ) : particleType === 1 ? (
              <octahedronGeometry args={[0.07, 0]} />
            ) : (
              <tetrahedronGeometry args={[0.05, 0]} />
            )}
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={2}
              transparent
              opacity={0.9}
            />
          </mesh>
        );
      })}
      
      {/* Cząsteczki śladu */}
      {Array(particlesCount * 2).fill(0).map((_, i) => (
        <mesh
          key={`orbit-trail-${planet1}-${planet2}-${i}`}
          ref={el => {
            if (el) trailParticles.current[i] = el;
          }}
        >
          <sphereGeometry args={[0.03, 6, 6]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}
    </group>
  );
};

// Energy flow between main nodes
interface EnergyFlowProps {
  from: number[];
  to: number[];
  color: Color;
  quality: 'low' | 'medium' | 'high';
}

const EnhancedEnergyFlow = ({ from, to, color, quality }: EnergyFlowProps) => {
  const particlesCount = quality === 'low' ? 10 : quality === 'medium' ? 15 : 20;
  const particles = useRef<Mesh[]>([]);
  const lineRef = useRef<any>(null);  const extraParticles = useRef<Mesh[]>([]);  // Dodatkowe cząsteczki dla bardziej dynamicznego przepływu
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Oblicz dynamiczne zakłócenia dla ścieżki
    const dynamicOffset = {
      x: Math.sin(time * 0.5) * 0.5 + Math.cos(time * 0.3) * 0.5,
      y: Math.sin(time * 0.4) * 0.5 + Math.cos(time * 0.6) * 0.5,
      z: Math.sin(time * 0.3) * 0.3 + Math.cos(time * 0.5) * 0.2
    };
    
    particles.current.forEach((particle, i) => {
      if (particle) {
        // Position along the path with variable speed
        const speed = 0.5 + (i % 3) * 0.1;  // Różne prędkości dla różnych cząsteczek
        const t = ((time * speed + i * 0.05) % 1);
        const fromVec = new Vector3(from[0], from[1], from[2]);
        const toVec = new Vector3(to[0], to[1], to[2]);
        
        // Bardziej złożona ścieżka z wieloma punktami kontrolnymi
        const controlPoints = [
          fromVec,
          new Vector3()
            .addVectors(fromVec, toVec)
            .multiplyScalar(0.3)
            .add(new Vector3(
              dynamicOffset.x + Math.sin(i * 0.4) * 1.5, 
              dynamicOffset.y + Math.sin(time * 0.5 + i * 0.3) * 1.5, 
              dynamicOffset.z + Math.cos(i * 0.5) * 1.5
            )),
          new Vector3()
            .addVectors(fromVec, toVec)
            .multiplyScalar(0.7)
            .add(new Vector3(
              -dynamicOffset.x + Math.cos(i * 0.3) * 1.5, 
              -dynamicOffset.y + Math.cos(time * 0.4 + i * 0.6) * 1.5, 
              -dynamicOffset.z + Math.sin(i * 0.7) * 1.5
            )),
          toVec
        ];
          
        // Compute position along spline
        if (t < 0.33) {
          const t2 = t * 3;
          particle.position.lerpVectors(controlPoints[0], controlPoints[1], t2);
        } else if (t < 0.66) {
          const t2 = (t - 0.33) * 3;
          particle.position.lerpVectors(controlPoints[1], controlPoints[2], t2);
        } else {
          const t2 = (t - 0.66) * 3;
          particle.position.lerpVectors(controlPoints[2], toVec, t2);
        }
        
        // Dynamiczne efekty pulsacji i kolorów
        const pulseFreq = 4 + (i % 5) * 0.5;
        const scale = 0.15 + Math.sin(time * pulseFreq + i) * 0.1;
        particle.scale.setScalar(scale);
        
        // Animacja rotacji cząsteczek
        particle.rotation.x = time * (0.5 + i * 0.05);
        particle.rotation.y = time * (0.3 + i * 0.03);
        
        // Zmiana koloru z czasem dla bardziej energetycznego wyglądu
        if (particle.material) {
          const material = particle.material as any;
          if (material.emissiveIntensity !== undefined) {
            material.emissiveIntensity = 1.5 + Math.sin(time * 5 + i) * 0.5;
          }
        }
      }
    });
    
    // Aktualizacja dodatkowych cząsteczek poruszających się po orbitach głównej ścieżki
    extraParticles.current.forEach((particle, i) => {
      if (particle && particles.current[i % particles.current.length]) {
        const mainParticle = particles.current[i % particles.current.length];
        const angle = time * 5 + i;
        const radius = 0.3 + Math.sin(time + i) * 0.1;
        
        particle.position.copy(mainParticle.position);
        particle.position.x += Math.sin(angle) * radius;
        particle.position.y += Math.cos(angle) * radius;
        particle.position.z += Math.sin(angle + Math.PI/2) * radius * 0.5;
        
        const scale = 0.08 + Math.sin(time * 6 + i * 2) * 0.03;
        particle.scale.setScalar(scale);
      }
    });
    
    // Pulsate energy line with more dynamic effect
    if (lineRef.current && lineRef.current.material) {
      const baseOpacity = 0.4 + Math.sin(time * 2) * 0.1;
      const pulseEffect = 0.2 * Math.sin(time * 10) * Math.sin(time * 5);
      lineRef.current.material.opacity = baseOpacity + pulseEffect;
    }
  });
    return (
    <group>
      {/* Energy stream effect - multiple curved lines */}
      {[0, 1, 2].map((curveIndex) => (
        <line key={`energy-line-${curveIndex}`} ref={curveIndex === 0 ? lineRef : undefined}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[
                new Float32Array([
                  from[0] + (curveIndex - 1) * 0.1, from[1], from[2],
                  (from[0] + to[0])/2 + Math.sin(curveIndex) * 0.5, 
                  (from[1] + to[1])/2 + Math.cos(curveIndex) * 0.5, 
                  (from[2] + to[2])/2,
                  to[0] + (curveIndex - 1) * 0.1, to[1], to[2]
                ]), 
                3
              ]}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color={color}
            transparent
            opacity={0.2 + (curveIndex === 0 ? 0.1 : 0)}
            linewidth={curveIndex === 0 ? 1.5 : 0.5}
          />
        </line>
      ))}
      
      {/* Główne cząsteczki energii */}
      {Array(particlesCount).fill(0).map((_, i) => {
        const customColor = i % 3 === 0 
          ? '#ffffff' 
          : i % 3 === 1 
            ? color.getHex().toString(16) 
            : '#00e5ff';
            
        return (
          <mesh
            key={`energy-particle-${i}`}
            ref={el => {
              if (el) particles.current[i] = el;
            }}
          >
            {i % 3 === 0 ? (
              <sphereGeometry args={[0.12, 16, 16]} />
            ) : i % 3 === 1 ? (
              <octahedronGeometry args={[0.14, 0]} />
            ) : (
              <tetrahedronGeometry args={[0.1, 0]} />
            )}
            <meshStandardMaterial
              color={customColor}
              emissive={customColor}
              emissiveIntensity={2}
              transparent
              opacity={0.8}
            />
          </mesh>
        );
      })}
      
      {/* Dodatkowe małe cząsteczki orbitujące wokół głównych */}
      {Array(particlesCount).fill(0).map((_, i) => (
        <mesh
          key={`extra-energy-particle-${i}`}
          ref={el => {
            if (el) extraParticles.current[i] = el;
          }}
        >
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
};

export default DesignThinkingViz;
