import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import { OrbitControls, Float, Text, Stars } from '@react-three/drei';
import { Mesh, Vector3, Color, Group, MeshStandardMaterial } from 'three';

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

// Animation stages
type AnimationStage = 
  | 'empathyActive'
  | 'empathyToReasoning'
  | 'reasoningActive'
  | 'reasoningToMaterialization'
  | 'materializationActive'
  | 'materializationToEmpathy'
  | 'complete';

// Main visualization component
const EnhancedDesignThinkingVisualization = () => {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [0, 0, 18], fov: 45 }}>
        <color attach="background" args={['#0a0a0a']} />
        <fog attach="fog" args={['#0a0a0a', 15, 35]} />
        
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
        <pointLight position={[0, 0, 5]} intensity={0.5} color="#ffffff" />
        
        <Stars radius={50} depth={50} count={1000} factor={4} fade speed={1} />
        <DesignThinkingScene />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          rotateSpeed={0.3} 
          autoRotate 
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

// Scene with components arranged in triangle
const DesignThinkingScene = () => {
  const [animationStage, setAnimationStage] = useState<AnimationStage>('empathyActive');
  const [cycleTime, setCycleTime] = useState(0);
  const sceneRef = useRef<Group>(null);
  
  // Triangle layout positions calculation
  const radius = 7; // Distance from center
  const empathyPos = [0, radius * Math.sqrt(3)/2, 0]; // Top
  const reasoningPos = [-radius/2, -radius * Math.sqrt(3)/4, 0]; // Bottom left
  const materializationPos = [radius/2, -radius * Math.sqrt(3)/4, 0]; // Bottom right
  
  // Subtle rotation of the entire scene
  useFrame((state) => {
    if (sceneRef.current) {
      const time = state.clock.getElapsedTime();
      sceneRef.current.rotation.y = Math.sin(time * 0.1) * 0.05;
      sceneRef.current.rotation.x = Math.sin(time * 0.08) * 0.03;
    }
  });
  
  // Managing animation sequence
  useEffect(() => {
    const timings = {
      empathyActive: 3000,
      empathyToReasoning: 2000,
      reasoningActive: 3000,
      reasoningToMaterialization: 2000,
      materializationActive: 3000,
      materializationToEmpathy: 2000,
      complete: 2000,
    };

    const timer = setTimeout(() => {
      switch (animationStage) {
        case 'empathyActive':
          setAnimationStage('empathyToReasoning');
          break;
        case 'empathyToReasoning':
          setAnimationStage('reasoningActive');
          break;
        case 'reasoningActive':
          setAnimationStage('reasoningToMaterialization');
          break;
        case 'reasoningToMaterialization':
          setAnimationStage('materializationActive');
          break;
        case 'materializationActive':
          setAnimationStage('materializationToEmpathy');
          break;
        case 'materializationToEmpathy':
          setAnimationStage('empathyActive');
          setCycleTime(prev => prev + 1);
          break;
        case 'complete':
          setAnimationStage('empathyActive');
          setCycleTime(prev => prev + 1);
          break;
      }
    }, timings[animationStage]);

    return () => clearTimeout(timer);
  }, [animationStage]);

  return (
    <group ref={sceneRef}>      {/* Triangle outline */}
      <TriangleConnection 
        points={[empathyPos, reasoningPos, materializationPos]} 
      />
      
      {/* Process nodes */}
      <EmpathyNode 
        position={empathyPos} 
        isActive={animationStage === 'empathyActive' || animationStage === 'empathyToReasoning'} 
        cycleTime={cycleTime}
      />
      
      <ReasoningNode 
        position={reasoningPos} 
        isActive={animationStage === 'reasoningActive' || animationStage === 'reasoningToMaterialization'} 
        cycleTime={cycleTime}
      />
      
      <MaterializationNode 
        position={materializationPos} 
        isActive={animationStage === 'materializationActive' || animationStage === 'materializationToEmpathy' || animationStage === 'complete'} 
        isFinalState={animationStage === 'complete'}
        cycleTime={cycleTime}
      />
      
      {/* Energy flows between nodes */}
      {animationStage === 'empathyToReasoning' && (
        <EnergyFlow from={empathyPos} to={reasoningPos} color={nodeColors.energy} />
      )}
      
      {animationStage === 'reasoningToMaterialization' && (
        <EnergyFlow from={reasoningPos} to={materializationPos} color={nodeColors.energy} />
      )}
      
      {animationStage === 'materializationToEmpathy' && (
        <EnergyFlow from={materializationPos} to={empathyPos} color={nodeColors.energy} />
      )}
      
      {/* Labels */}
      <Text 
        position={[empathyPos[0], empathyPos[1] - 2, empathyPos[2]]} 
        fontSize={0.6} 
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="/public/fonts/Inter-Medium.woff"
      >
        Empatia
      </Text>
      
      <Text 
        position={[reasoningPos[0], reasoningPos[1] - 2, reasoningPos[2]]} 
        fontSize={0.6} 
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="/public/fonts/Inter-Medium.woff"
      >
        Rozumowanie
      </Text>
      
      <Text 
        position={[materializationPos[0], materializationPos[1] - 2, materializationPos[2]]} 
        fontSize={0.6} 
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="/public/fonts/Inter-Medium.woff"
      >
        Materializacja
      </Text>
    </group>
  );
};

// Triangle connection component
interface TriangleConnectionProps {
  points: number[][];
  // Removed unused animationStage prop
}

const TriangleConnection = ({ points }: TriangleConnectionProps) => {
  const linesRef = useRef<any>([]);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    linesRef.current.forEach((line: any, i: number) => {
      if (line) {
        // Subtle pulsating effect for the triangle lines
        const opacity = 0.2 + Math.sin(time * 0.5 + i) * 0.1;
        if (line.material) {
          line.material.opacity = opacity;
        }
      }
    });
  });
  
  return (
    <group>
      {points.map((point, i) => {
        const nextPoint = points[(i + 1) % points.length];        // Removed unused mid vector
        
        return (          <group key={`line-${i}`}>            <line ref={(el) => {
              if (el) linesRef.current[i] = el;
            }}>
              <bufferGeometry attach="geometry">                <bufferAttribute
                  args={[
                    new Float32Array([
                      point[0], point[1], point[2],
                      nextPoint[0], nextPoint[1], nextPoint[2]
                    ]),
                    3
                  ]}
                  attach="attributes-position"
                  count={2}
                  itemSize={3}
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
          </group>
        );
      })}
    </group>
  );
};

// Component interfaces
interface NodeProps {
  position: number[];
  isActive: boolean;
  cycleTime: number;
  isFinalState?: boolean;
}

// Empathy node - organic, fluid form with orbiting planets
const EmpathyNode = ({ position, isActive, cycleTime }: NodeProps) => {
  const groupRef = useRef<Group>(null);
  const mainSphereRef = useRef<Mesh>(null);
  const planetRefs = useRef<Mesh[]>([]);
  const orbitRef = useRef<any>(null);
  
  const color = isActive ? nodeColors.empathy : nodeColors.inactive;
  const planetCount = 3;
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime() + cycleTime * 10;
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1;
    }
    
    if (mainSphereRef.current) {
      mainSphereRef.current.scale.setScalar(isActive ? 1.0 + Math.sin(time * 0.8) * 0.05 : 0.9);      if (isActive && mainSphereRef.current.material instanceof MeshStandardMaterial) {
        // Soft pulsating glow
        mainSphereRef.current.material.emissiveIntensity = 0.5 + Math.sin(time) * 0.2;
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
        <mesh ref={mainSphereRef}>
          <sphereGeometry args={[1.5, 64, 64]} />
          <meshPhysicalMaterial
            color={color}
            roughness={0.2}
            metalness={0.3}
            transmission={0.2}
            thickness={1.5}
            transparent
            opacity={0.9}
            emissive={color}
            emissiveIntensity={isActive ? 0.5 : 0.1}
          />
        </mesh>
      </Float>
      
      {/* Orbit ring */}
      <mesh rotation={[Math.PI/2, 0, 0]} ref={orbitRef}>
        <torusGeometry args={[2.0, 0.02, 16, 100]} />
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
            <sphereGeometry args={[0.25, 32, 32]} />
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
      {isActive && planetRefs.current.length >= 3 && (
        <>
          <OrbitEnergy planet1={0} planet2={1} planetRefs={planetRefs} />
          <OrbitEnergy planet1={1} planet2={2} planetRefs={planetRefs} />
          <OrbitEnergy planet1={2} planet2={0} planetRefs={planetRefs} />
        </>
      )}
    </group>
  );
};

// Reasoning node - complex geometric form with orbiting planets
const ReasoningNode = ({ position, isActive, cycleTime }: NodeProps) => {
  const torusRef = useRef<Mesh>(null);
  const icosahedronRef = useRef<Mesh>(null);
  const planetRefs = useRef<Mesh[]>([]);
  const orbitRef = useRef<any>(null);
  
  const color = isActive ? nodeColors.reasoning : nodeColors.inactive;
  const planetCount = 3;
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime() + cycleTime * 10;
    
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
      <group>
        <mesh ref={torusRef}>
          <torusGeometry args={[1.2, 0.3, 24, 64]} />
          <meshStandardMaterial
            color={color}
            roughness={0.3}
            metalness={0.7}
            emissive={color}
            emissiveIntensity={isActive ? 0.6 : 0.1}
          />
        </mesh>
        
        <mesh ref={icosahedronRef} position={[0, 0, 0]}>
          <icosahedronGeometry args={[0.8, 1]} />
          <meshPhysicalMaterial
            color={color}
            roughness={0.4}
            metalness={0.6}
            clearcoat={1}
            transmission={0.1}
            emissive={color}
            emissiveIntensity={isActive ? 0.7 : 0.1}
          />
        </mesh>
      </group>
      
      {/* Orbit ring - slightly tilted */}
      <mesh rotation={[Math.PI/2 + 0.2, 0, 0]} ref={orbitRef}>
        <torusGeometry args={[2.0, 0.02, 16, 100]} />
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
      {isActive && planetRefs.current.length >= 3 && (
        <>
          <OrbitEnergy planet1={0} planet2={1} planetRefs={planetRefs} />
          <OrbitEnergy planet1={1} planet2={2} planetRefs={planetRefs} />
          <OrbitEnergy planet1={2} planet2={0} planetRefs={planetRefs} />
        </>
      )}
    </group>
  );
};

// Materialization node - crystalline structure with orbiting planets
const MaterializationNode = ({ position, isActive, isFinalState = false, cycleTime }: NodeProps) => {
  const groupRef = useRef<Group>(null);
  const mainRef = useRef<Mesh>(null);
  const planetRefs = useRef<Mesh[]>([]);
  const orbitRef = useRef<any>(null);
  
  const color = isActive ? nodeColors.materialization : nodeColors.inactive;
  const planetCount = 3;
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime() + cycleTime * 10;
    
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
        mainRef.current.scale.setScalar(1.0 + Math.sin(time * 3) * 0.1);        if (mainRef.current.material && mainRef.current.material instanceof MeshStandardMaterial) {
          mainRef.current.material.emissiveIntensity = 0.8 + Math.sin(time * 2) * 0.2;
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
          // Energetic movement during final state          planet.scale.setScalar(1.0 + Math.sin(time * 3 + i) * 0.2);
          if (planet.material instanceof MeshStandardMaterial) {
            planet.material.emissiveIntensity = 0.9 + Math.sin(time * 2.5 + i) * 0.3;
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
        <mesh ref={mainRef}>
          <dodecahedronGeometry args={[1.3, 0]} />
          <meshPhysicalMaterial
            color={color}
            roughness={0.1}
            metalness={0.8}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transmission={0.2}
            thickness={1.5}
            emissive={color}
            emissiveIntensity={isActive ? (isFinalState ? 0.8 : 0.5) : 0.1}
          />
        </mesh>
      </Float>
      
      {/* Orbit ring - differently tilted */}
      <mesh rotation={[Math.PI/2 - 0.2, 0, 0]} ref={orbitRef}>
        <torusGeometry args={[2.0, 0.02, 16, 100]} />
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
      {isActive && planetRefs.current.length >= 3 && (
        <>
          <OrbitEnergy planet1={0} planet2={1} planetRefs={planetRefs} />
          <OrbitEnergy planet1={1} planet2={2} planetRefs={planetRefs} />
          <OrbitEnergy planet1={2} planet2={0} planetRefs={planetRefs} />
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
}

const OrbitEnergy = ({ planet1, planet2, planetRefs }: OrbitEnergyProps) => {
  const particlesCount = 5;
  const particles = useRef<Mesh[]>([]);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    particles.current.forEach((particle, i) => {
      if (particle && planetRefs.current[planet1] && planetRefs.current[planet2]) {
        const p1 = planetRefs.current[planet1].position;
        const p2 = planetRefs.current[planet2].position;
        
        // Calculate position along path
        const t = ((time * 0.6 + i * 0.05) % 1);
        
        // Curved path
        const midPoint = new Vector3()
          .addVectors(p1, p2)
          .multiplyScalar(0.5)
          .add(new Vector3(0, Math.sin(i * 0.5) * 0.3, Math.cos(i * 0.5) * 0.3));
          
        if (t < 0.5) {
          const t2 = t * 2;
          particle.position.lerpVectors(p1, midPoint, t2);
        } else {
          const t2 = (t - 0.5) * 2;
          particle.position.lerpVectors(midPoint, p2, t2);
        }
        
        // Pulsating effect
        const scale = 0.06 + Math.sin(time * 5 + i) * 0.02;
        particle.scale.setScalar(scale);
      }
    });
  });
  
  const color = nodeColors.energy;
  
  return (
    <group>
      {Array(particlesCount).fill(0).map((_, i) => (
        <mesh
          key={`orbit-particle-${planet1}-${planet2}-${i}`}
          ref={el => {
            if (el) particles.current[i] = el;
          }}
        >
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={2}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
};

// Energy flow between main nodes
const EnergyFlow = ({ from, to, color }: { from: number[], to: number[], color: Color }) => {
  const particlesCount = 15;
  const particles = useRef<Mesh[]>([]);
  const lineRef = useRef<any>(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    particles.current.forEach((particle, i) => {
      if (particle) {
        // Position along the path
        const t = ((time * 0.5 + i * 0.05) % 1);
        const fromVec = new Vector3(from[0], from[1], from[2]);
        const toVec = new Vector3(to[0], to[1], to[2]);
        
        // Curved path for more organic look
        const midPoint = new Vector3()
          .addVectors(fromVec, toVec)
          .multiplyScalar(0.5)
          .add(new Vector3(
            Math.sin(i * 0.4) * 2, 
            Math.sin(time * 0.2 + i * 0.3) * 2, 
            Math.cos(i * 0.5) * 2
          ));
          
        if (t < 0.5) {
          const t2 = t * 2;
          particle.position.lerpVectors(fromVec, midPoint, t2);
        } else {
          const t2 = (t - 0.5) * 2;
          particle.position.lerpVectors(midPoint, toVec, t2);
        }
        
        // Pulsating effect
        const scale = 0.15 + Math.sin(time * 4 + i) * 0.05;
        particle.scale.setScalar(scale);
      }
    });
    
    // Pulsate energy line
    if (lineRef.current && lineRef.current.material) {
      lineRef.current.material.opacity = 0.3 + Math.sin(time * 3) * 0.1;
    }
  });
  
  return (
    <group>
      {/* Subtle energy path line */}      <line ref={lineRef}>
        <bufferGeometry>          <bufferAttribute
            args={[
              new Float32Array([
                from[0], from[1], from[2],
                to[0], to[1], to[2]
              ]),
              3
            ]}
            attach="attributes-position"
            count={2}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color={color}
          transparent
          opacity={0.3}
          linewidth={1}
        />
      </line>
      
      {/* Energy particles */}
      {Array(particlesCount).fill(0).map((_, i) => (
        <mesh
          key={`energy-particle-${i}`}
          ref={el => {
            if (el) particles.current[i] = el;
          }}
        >
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={2}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
};

export default EnhancedDesignThinkingVisualization;
