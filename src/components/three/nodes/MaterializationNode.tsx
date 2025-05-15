import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import { Vector3, Group, Mesh } from 'three';

interface MaterializationNodeProps {
  position: [number, number, number];
  isActive: boolean;
  isCompleting?: boolean;
  qualityLevel?: 'low' | 'medium' | 'high';
}

/**
 * Węzeł reprezentujący etap Materializacji - solidna, 
 * stabilna struktura złożona z uporządkowanych elementów
 */
const MaterializationNode: React.FC<MaterializationNodeProps> = ({ 
  position, 
  isActive, 
  isCompleting = false,
  qualityLevel = 'high'
}) => {
  const group = useRef<Group>(null);
  const mainBox = useRef<Mesh>(null);
  
  // Adjust number of boxes based on quality level
  const boxCount = qualityLevel === 'low' ? 2 : qualityLevel === 'medium' ? 4 : 6;
  const smallBoxes = Array(boxCount).fill(0).map(() => useRef<Mesh>(null));
  
  // Segmentation for geometry based on quality
  const boxSegments = qualityLevel === 'low' ? 1 : qualityLevel === 'medium' ? 2 : 3;
  
  // Pozycje dla mniejszych boxów
  const allBoxPositions = [
    [0.8, 0.8, 0], [-0.8, 0.8, 0], 
    [0.8, -0.8, 0], [-0.8, -0.8, 0], 
    [0, 0.8, 0.8], [0, -0.8, 0.8]
  ];
  
  // Use only as many positions as we have boxes
  const smallBoxPositions = allBoxPositions.slice(0, boxCount);
  
  // Parametry animacji
  const activeIntensity = isActive ? 1.2 : 0;
  
  useFrame(({ clock }) => {
    if (!group.current || !mainBox.current) return;
    
    const time = clock.getElapsedTime();
    
    // Delikatna rotacja dla struktury
    if (isActive) {
      group.current.rotation.y = time * 0.1;
      
      // Sygnał ukończenia - szybka rotacja i pulsacja
      if (isCompleting) {
        const completionPulse = Math.sin(time * 6) * 0.1 + 1.05;
        mainBox.current.scale.set(completionPulse, completionPulse, completionPulse);
        
        // Szybsza rotacja przy ukończeniu
        group.current.rotation.y = time * 0.3;
      }
    }
    
    // Animacja dla małych boxów
    smallBoxes.forEach((boxRef, i) => {
      if (boxRef.current) {
        if (isActive) {
          // Delikatne pulsowanie dla małych boxów
          const pulseScale = Math.sin(time * 1.5 + i) * 0.05 + 1;
          boxRef.current.scale.set(pulseScale, pulseScale, pulseScale);
          
          // Specjalna animacja przy ukończeniu
          if (isCompleting) {
            boxRef.current.rotation.x = time * 2;
            boxRef.current.rotation.z = time * 2;
          }
        }
      }
    });
  });
  
  // Kolory zależne od stanu
  const mainEmissiveIntensity = isActive ? activeIntensity : 0;
  const completingEmissive = isCompleting ? 'lightgreen' : 'lightgreen';
  const completingEmissiveIntensity = isCompleting ? 2 : mainEmissiveIntensity;
    return (
    <group ref={group} position={new Vector3(...position)}>
      {/* Centralny sześcian */}
      <Box ref={mainBox} args={[1, 1, 1, boxSegments, boxSegments, boxSegments]} position={[0, 0, 0]}>
        <meshPhysicalMaterial 
          color="lightgreen" 
          emissive={completingEmissive}
          emissiveIntensity={completingEmissiveIntensity}
          roughness={0.1} 
          metalness={0.9}
          clearcoat={0.8}
          reflectivity={1}
        />
      </Box>
      
      {/* Mniejsze sześciany okoła centralnego */}
      {smallBoxPositions.map((boxPosition, i) => (        <Box 
          key={i}
          ref={smallBoxes[i]}
          args={[0.3, 0.3, 0.3]} 
          position={[boxPosition[0], boxPosition[1], boxPosition[2]]}
        >
          <meshStandardMaterial 
            color="mediumseagreen" 
            emissive="mediumseagreen"
            emissiveIntensity={isCompleting ? 1.5 : (isActive ? 0.8 : 0)}
            roughness={0.3} 
            metalness={0.7} 
          />
        </Box>
      ))}
      
      {/* Platforma pod strukturą */}
      <Box args={[1.6, 0.1, 1.6]} position={[0, -0.8, 0]}>
        <meshStandardMaterial 
          color="mediumseagreen" 
          roughness={0.5} 
          metalness={0.5} 
        />
      </Box>
    </group>
  );
};

export default MaterializationNode;
