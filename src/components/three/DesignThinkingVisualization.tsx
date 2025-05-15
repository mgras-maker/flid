import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import { Float, Text } from '@react-three/drei';
import { Mesh, Vector3, Color, Group } from 'three';

// Kolory etapów
const nodeColors = {
  empathy: new Color('#3498db'),     // niebieski
  reasoning: new Color('#9b59b6'),   // fioletowy
  materialization: new Color('#2ecc71'), // zielony
  inactive: new Color('#7f8c8d').multiplyScalar(0.5), // przygaszony
};

// Stany animacji
type AnimationStage = 
  | 'empathyActive'
  | 'empathyToReasoning'
  | 'reasoningActive'
  | 'reasoningToMaterialization'
  | 'materializationActive'
  | 'complete';

// Główny komponent wizualizacji
const DesignThinkingVisualization = () => {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        <color attach="background" args={['#111']} />
        <fog attach="fog" args={['#111', 10, 30]} />
        
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <directionalLight position={[-5, -5, -5]} intensity={0.2} />
        
        <DesignThinkingScene />
      </Canvas>
    </div>
  );
};

// Scena z komponentami
const DesignThinkingScene = () => {
  const [animationStage, setAnimationStage] = useState<AnimationStage>('empathyActive');
  const [cycleTime, setCycleTime] = useState(0);
  
  // Zarządzanie sekwencją animacji
  useEffect(() => {
    const timings = {
      empathyActive: 2000,
      empathyToReasoning: 1500,
      reasoningActive: 2000,
      reasoningToMaterialization: 1500,
      materializationActive: 2000,
      complete: 1000,
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
          setAnimationStage('complete');
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
    <group>
      {/* Etapy procesu Design Thinking */}
      <EmpathyNode 
        position={[-5, 3, 0]} 
        isActive={animationStage === 'empathyActive'} 
        cycleTime={cycleTime}
      />
      
      <ReasoningNode 
        position={[0, 0, 0]} 
        isActive={animationStage === 'reasoningActive'} 
        cycleTime={cycleTime}
      />
      
      <MaterializationNode 
        position={[5, -3, 0]} 
        isActive={animationStage === 'materializationActive' || animationStage === 'complete'} 
        isFinalState={animationStage === 'complete'}
        cycleTime={cycleTime}
      />
      
      {/* Przepływy energii */}
      {animationStage === 'empathyToReasoning' && (
        <EnergyFlow from={[-5, 3, 0]} to={[0, 0, 0]} />
      )}
      
      {animationStage === 'reasoningToMaterialization' && (
        <EnergyFlow from={[0, 0, 0]} to={[5, -3, 0]} />
      )}
      
      {/* Etykiety */}
      <Text position={[-5, 1.5, 0]} fontSize={0.5} color="#ffffff">
        Empatia
      </Text>
      
      <Text position={[0, -1.5, 0]} fontSize={0.5} color="#ffffff">
        Rozumowanie
      </Text>
      
      <Text position={[5, -4.5, 0]} fontSize={0.5} color="#ffffff">
        Materializacja
      </Text>
    </group>
  );
};

// Komponenty poszczególnych etapów Design Thinking

interface NodeProps {
  position: [number, number, number];
  isActive: boolean;
  cycleTime: number;
  isFinalState?: boolean;
}

// Empatia - organiczna, miękka forma
const EmpathyNode = ({ position, isActive, cycleTime }: NodeProps) => {
  const groupRef = useRef<Group>(null);
  const sphere1Ref = useRef<Mesh>(null);
  const sphere2Ref = useRef<Mesh>(null);
  const sphere3Ref = useRef<Mesh>(null);
  
  const color = isActive ? nodeColors.empathy : nodeColors.inactive;
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime() + cycleTime * 10;
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1;
    }
    
    if (sphere1Ref.current) {
      sphere1Ref.current.position.y = Math.sin(time) * 0.2;
      sphere1Ref.current.scale.setScalar(isActive ? 1.0 + Math.sin(time * 2) * 0.1 : 0.9);
    }
    
    if (sphere2Ref.current) {
      sphere2Ref.current.position.x = Math.sin(time * 0.8) * 0.2;
      sphere2Ref.current.scale.setScalar(isActive ? 0.9 + Math.sin(time * 1.5) * 0.1 : 0.8);
    }
    
    if (sphere3Ref.current) {
      sphere3Ref.current.position.z = Math.sin(time * 0.6) * 0.2;
      sphere3Ref.current.scale.setScalar(isActive ? 0.8 + Math.sin(time * 1.8) * 0.1 : 0.7);
    }
  });
  
  return (
    <group position={position} ref={groupRef}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh ref={sphere1Ref}>
          <sphereGeometry args={[1.2, 32, 32]} />
          <meshStandardMaterial
            color={color}
            roughness={0.2}
            metalness={0.3}
            transparent
            opacity={0.9}
            emissive={color}
            emissiveIntensity={isActive ? 0.5 : 0.1}
          />
        </mesh>
      </Float>
      
      <mesh ref={sphere2Ref} position={[-1, 0.8, 0]}>
        <sphereGeometry args={[0.8, 24, 24]} />
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.3}
          transparent
          opacity={0.8}
          emissive={color}
          emissiveIntensity={isActive ? 0.4 : 0.1}
        />
      </mesh>
      
      <mesh ref={sphere3Ref} position={[0.9, -0.7, 0]}>
        <sphereGeometry args={[0.6, 20, 20]} />
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.3}
          transparent
          opacity={0.8}
          emissive={color}
          emissiveIntensity={isActive ? 0.4 : 0.1}
        />
      </mesh>
    </group>
  );
};

// Rozumowanie - złożona forma geometryczna
const ReasoningNode = ({ position, isActive, cycleTime }: NodeProps) => {
  const torusRef = useRef<Mesh>(null);
  // Removed unused pointsRef
  const icosahedronRef = useRef<Mesh>(null);
  
  const color = isActive ? nodeColors.reasoning : nodeColors.inactive;
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime() + cycleTime * 10;
    
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.2;
      torusRef.current.rotation.y = time * 0.1;
      torusRef.current.scale.setScalar(isActive ? 1.0 + Math.sin(time) * 0.05 : 0.9);
    }
    
    if (icosahedronRef.current) {
      icosahedronRef.current.rotation.y = -time * 0.3;
      icosahedronRef.current.rotation.z = time * 0.2;
      icosahedronRef.current.scale.setScalar(isActive ? 1.0 + Math.sin(time * 1.5) * 0.1 : 0.8);
    }
  });
  
  return (
    <group position={position}>
      <mesh ref={torusRef}>
        <torusGeometry args={[1.2, 0.3, 16, 64]} />
        <meshStandardMaterial
          color={color}
          roughness={0.3}
          metalness={0.6}
          emissive={color}
          emissiveIntensity={isActive ? 0.5 : 0.1}
        />
      </mesh>
      
      <mesh ref={icosahedronRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshStandardMaterial
          color={color}
          roughness={0.4}
          metalness={0.5}
          wireframe={true}
          emissive={color}
          emissiveIntensity={isActive ? 0.5 : 0.1}
        />
      </mesh>
      
      {/* Symulacja połączonej siatki punktów */}
      {Array(12)
        .fill(0)
        .map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const radius = 1.8;
          const x = Math.sin(angle) * radius;
          const y = Math.cos(angle) * radius;
          const z = Math.sin(angle + Math.PI) * 0.5;
          
          return (
            <mesh key={`point-${i}`} position={[x, y, z]}>
              <sphereGeometry args={[0.1, 16, 16]} />
              <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={isActive ? 0.7 : 0.15}
              />
            </mesh>
          );
        })}
    </group>
  );
};

// Materializacja - solidna forma geometryczna
const MaterializationNode = ({ position, isActive, isFinalState = false, cycleTime }: NodeProps) => {
  const groupRef = useRef<Group>(null);
  const cubeRef = useRef<Mesh>(null);
  const cubes = useRef<Mesh[]>([]);
  
  const color = isActive ? nodeColors.materialization : nodeColors.inactive;
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime() + cycleTime * 10;
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1;
      if (isFinalState) {
        groupRef.current.rotation.y = time * 0.5;
        groupRef.current.rotation.x = time * 0.3;
      }
    }
    
    if (cubeRef.current) {
      if (isFinalState) {
        // Efekt "ukończenia" - pulsowanie
        cubeRef.current.scale.setScalar(1.0 + Math.sin(time * 5) * 0.2);
      } else {
        cubeRef.current.scale.setScalar(isActive ? 1.0 : 0.9);
      }
    }
    
    // Animowanie mniejszych kostek
    cubes.current.forEach((cube, i) => {
      if (cube) {
        if (isFinalState) {
          // Przy ukończeniu - rozdzielenie kostek
          const angle = (i / 8) * Math.PI * 2;
          cube.position.x = Math.sin(angle) * (0.5 + Math.sin(time * 2) * 0.3);
          cube.position.y = Math.cos(angle) * (0.5 + Math.sin(time * 2) * 0.3);
          cube.position.z = Math.sin(time * 3) * 0.3;
          cube.rotation.x = time * 2;
          cube.rotation.y = time * 2;
        } else {
          const offset = 0.5;
          const x = ((i % 2) - 0.5) * offset;
          const y = ((Math.floor(i / 2) % 2) - 0.5) * offset;
          const z = ((Math.floor(i / 4)) - 0.5) * offset;
          cube.position.set(x, y, z);
          
          if (isActive) {
            cube.rotation.x = time * 0.2;
            cube.rotation.y = time * 0.2;
          }
        }
      }
    });
  });
  
  return (
    <group position={position} ref={groupRef}>
      <mesh ref={cubeRef}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshPhysicalMaterial
          color={color}
          roughness={0.1}
          metalness={0.8}
          clearcoat={1}
          clearcoatRoughness={0.2}
          reflectivity={1}
          emissive={color}
          emissiveIntensity={isActive ? (isFinalState ? 0.8 : 0.5) : 0.1}
          transparent
          opacity={0.7}
        />
      </mesh>
      
      {Array(8)
        .fill(0)
        .map((_, i) => {
          const offset = 0.7;
          const x = ((i % 2) - 0.5) * offset;
          const y = ((Math.floor(i / 2) % 2) - 0.5) * offset;
          const z = ((Math.floor(i / 4)) - 0.5) * offset;
          
          return (
            <mesh 
              key={`cube-${i}`} 
              position={[x, y, z]}
              ref={el => {
                if (el) cubes.current[i] = el;
              }}
            >
              <boxGeometry args={[0.3, 0.3, 0.3]} />
              <meshStandardMaterial
                color={color}
                roughness={0.3}
                metalness={0.6}
                emissive={color}
                emissiveIntensity={isActive ? (isFinalState ? 0.9 : 0.6) : 0.1}
              />
            </mesh>
          );
        })}
    </group>
  );
};

// Przepływ energii między etapami
const EnergyFlow = ({ from, to }: { from: number[], to: number[] }) => {
  const particlesCount = 10;
  const particles = useRef<Mesh[]>([]);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    particles.current.forEach((particle, i) => {
      if (particle) {
        // Określanie pozycji cząsteczki wzdłuż ścieżki od -> do
        const t = ((time * 0.8 + i * 0.08) % 1);
        const fromVec = new Vector3(from[0], from[1], from[2]);
        const toVec = new Vector3(to[0], to[1], to[2]);
        
        // Lekko zakrzywiona ścieżka dla bardziej organicznego wyglądu
        const midPoint = new Vector3()
          .addVectors(fromVec, toVec)
          .multiplyScalar(0.5)
          .add(new Vector3(0, Math.sin(i * 0.5) * 2, Math.cos(i * 0.5) * 2));
          
        // Interpolacja kwadratowa dla bardziej naturalnego ruchu
        if (t < 0.5) {
          const t2 = t * 2;
          particle.position.lerpVectors(fromVec, midPoint, t2);
        } else {
          const t2 = (t - 0.5) * 2;
          particle.position.lerpVectors(midPoint, toVec, t2);
        }
        
        // Pulsowanie cząstek
        const scale = 0.1 + Math.sin(time * 4 + i) * 0.05;
        particle.scale.setScalar(scale);
      }
    });
  });
    // Removed unused fromTo vector
  
  const color = new Color('#ffffff');
  
  return (
    <group>
      {Array(particlesCount).fill(0).map((_, i) => (
        <mesh
          key={`particle-${i}`}
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

export default DesignThinkingVisualization;
