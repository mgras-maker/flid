import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { Vector3, Mesh, Group } from 'three';

interface EmpathyNodeProps {
  position: [number, number, number];
  isActive: boolean;
  isDimmed: boolean;
  qualityLevel?: 'low' | 'medium' | 'high';
}

/**
 * Węzeł reprezentujący etap Empatii - organiczna, miękka forma
 * złożona z kilku połączonych sfer tworzących strukturę organiczną
 */
const EmpathyNode: React.FC<EmpathyNodeProps> = ({ position, isActive, isDimmed, qualityLevel = 'high' }) => {
  const group = useRef<Group>(null);
  const sphere1 = useRef<Mesh>(null);
  const sphere2 = useRef<Mesh>(null);
  const sphere3 = useRef<Mesh>(null);
  
  // Adjust geometry detail based on quality level
  const sphereSegments = qualityLevel === 'low' ? 16 : qualityLevel === 'medium' ? 24 : 32;
  
  // Parametry animacji
  const baseIntensity = isDimmed ? 0.5 : 1;
  const activeIntensity = isActive ? 1.2 : 0;
  const pulseSpeed = 1.5;
  
  useFrame(({ clock }) => {
    if (!group.current) return;
    
    // Pulsowanie w stanie aktywnym
    const pulse = isActive ? Math.sin(clock.getElapsedTime() * pulseSpeed) * 0.1 + 1 : 1;
    
    group.current.scale.set(pulse, pulse, pulse);
    
    // Dodatkowe delikatne ruchy organiczne
    if (sphere1.current && sphere2.current && sphere3.current) {
      sphere1.current.position.y = Math.sin(clock.getElapsedTime() * 1.1) * 0.05;
      sphere2.current.position.x = Math.sin(clock.getElapsedTime() * 0.9) * 0.05;
      sphere3.current.position.z = Math.sin(clock.getElapsedTime() * 1.3) * 0.05;
    }
  });
  
  // Kolor zależny od stanu
  const emissiveIntensity = isActive ? activeIntensity : 0;
  const opacity = isDimmed ? 0.7 : 1;
    return (
    <group ref={group} position={new Vector3(...position)}>
      {/* Główna sfera */}
      <Sphere ref={sphere1} args={[0.8, sphereSegments, sphereSegments]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="dodgerblue" 
          emissive="dodgerblue"
          emissiveIntensity={emissiveIntensity}
          transparent={true}
          opacity={opacity}
          roughness={0.2} 
          metalness={0.3} 
        />
      </Sphere>
      
      {/* Dodatkowe mniejsze sfery tworzące organiczną strukturę */}
      <Sphere ref={sphere2} args={[0.5, sphereSegments, sphereSegments]} position={[0.6, 0.3, 0]}>
        <meshStandardMaterial 
          color="royalblue" 
          emissive="royalblue"
          emissiveIntensity={emissiveIntensity}
          transparent={true}
          opacity={opacity}
          roughness={0.3} 
          metalness={0.2} 
        />
      </Sphere>
      
      <Sphere ref={sphere3} args={[0.4, sphereSegments, sphereSegments]} position={[-0.4, 0.4, 0.3]}>
        <meshStandardMaterial 
          color="cornflowerblue" 
          emissive="cornflowerblue"
          emissiveIntensity={emissiveIntensity}
          transparent={true}
          opacity={opacity}
          roughness={0.4} 
          metalness={0.1} 
        />
      </Sphere>

      {/* Etykieta - opcjonalnie można dodać tekst za pomocą biblioteki troika-three-text */}
    </group>
  );
};

export default EmpathyNode;
