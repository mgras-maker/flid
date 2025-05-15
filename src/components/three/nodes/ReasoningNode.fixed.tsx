import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, Torus, Line, Point } from '@react-three/drei';
import { Vector3, Group, Mesh, BufferGeometry } from 'three';

interface ReasoningNodeProps {
  position: [number, number, number];
  isActive: boolean;
  isDimmed: boolean;
  qualityLevel?: 'low' | 'medium' | 'high';
}

/**
 * Węzeł reprezentujący etap Rozumowania/Ideacji - złożona,
 * geometryczna struktura z elementami symbolizującymi połączenia i analizę
 */
const ReasoningNode: React.FC<ReasoningNodeProps> = ({ position, isActive, isDimmed, qualityLevel = 'high' }) => {
  const group = useRef<Group>(null);
  const icosahedron = useRef<Mesh>(null);
  const torus = useRef<Mesh>(null);
  const points = useRef<BufferGeometry>(null);
  
  // Parametry animacji
  const baseIntensity = isDimmed ? 0.5 : 1;
  const activeIntensity = isActive ? 1.2 : 0;
  
  // Adjust geometry detail based on quality level
  const icosahedronDetail = qualityLevel === 'low' ? 0 : qualityLevel === 'medium' ? 1 : 2;
  const torusSegments = qualityLevel === 'low' ? 16 : qualityLevel === 'medium' ? 32 : 64;
  const torusRadialSegments = qualityLevel === 'low' ? 8 : qualityLevel === 'medium' ? 16 : 32;
  
  // Punkty dla sieci połączeń - adjust based on quality
  const pointsCount = qualityLevel === 'low' ? 5 : qualityLevel === 'medium' ? 8 : 10;
  
  // Use useMemo to avoid recreating points on every render
  const pointsData = useMemo(() => {
    // Generate random positions for points
    return Array(pointsCount).fill(0).map(() => new Vector3(
      (Math.random() - 0.5) * 2,
      (Math.random() - 0.5) * 2,
      (Math.random() - 0.5) * 2
    ));
  }, [pointsCount]);
  
  // Linie łączące punkty - also memoized for performance
  const connections = useMemo(() => {
    const lines: [Vector3, Vector3][] = [];
    
    // Create connections between some points
    for (let i = 0; i < pointsData.length; i++) {
      for (let j = i + 1; j < pointsData.length; j++) {
        // Only create some connections (random)
        if (Math.random() > 0.7) {
          lines.push([pointsData[i], pointsData[j]]);
        }
      }
    }
    
    return lines;
  }, [pointsData]);
  
  useFrame(({ clock }) => {
    if (!group.current || !icosahedron.current || !torus.current) return;
    
    const time = clock.getElapsedTime();
    
    // Rotacja komponentów w różnych osiach
    icosahedron.current.rotation.x = time * 0.2;
    icosahedron.current.rotation.y = time * 0.3;
    
    torus.current.rotation.x = time * 0.3;
    torus.current.rotation.z = time * 0.2;
    
    // Pulsowanie w stanie aktywnym
    const pulse = isActive 
      ? Math.sin(time * 1.5) * 0.05 + 1 
      : 1;
    
    icosahedron.current.scale.set(pulse, pulse, pulse);
    
    // Zmiana skali całej grupy
    const groupScale = isDimmed ? 0.9 : 1;
    group.current.scale.set(groupScale, groupScale, groupScale);
  });
  
  // Kolor zależny od stanu
  const emissiveIntensity = isActive ? activeIntensity : 0;
  const opacity = isDimmed ? 0.6 : 0.9;
  
  return (
    <group ref={group} position={new Vector3(...position)}>
      {/* Główna struktura - icosahedron */}
      <Icosahedron 
        ref={icosahedron} 
        args={[0.7, icosahedronDetail]} 
        position={[0, 0, 0]}
      >
        <meshPhysicalMaterial 
          color="tomato" 
          emissive="tomato"
          emissiveIntensity={emissiveIntensity}
          transparent={true}
          transmission={0.2}
          opacity={opacity}
          roughness={0.2} 
          metalness={0.8} 
          clearcoat={0.5}
        />
      </Icosahedron>
      
      {/* Torus otaczający strukturę */}
      <Torus 
        ref={torus} 
        args={[1.2, 0.05, torusRadialSegments, torusSegments]} 
        position={[0, 0, 0]} 
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial 
          color="coral" 
          emissive="coral"
          emissiveIntensity={emissiveIntensity * 0.8}
          transparent={true}
          opacity={opacity}
          roughness={0.3} 
          metalness={0.7} 
        />
      </Torus>
      
      {/* Punkty reprezentujące dane/idee */}
      {pointsData.map((pos, i) => (
        <Point key={i} position={pos} color="orangered" size={3}>
          <meshBasicMaterial 
            color="orangered" 
            transparent 
            opacity={opacity * 0.7} 
          />
        </Point>
      ))}
      
      {/* Linie połączeń między punktami */}
      {connections.map((points, i) => (
        <Line 
          key={i} 
          points={points} 
          color="orangered" 
          lineWidth={1} 
          transparent 
          opacity={isActive ? 0.7 : 0.3} 
        />
      ))}
    </group>
  );
};

export default ReasoningNode;
