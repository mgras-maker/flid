import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cylinder, Line, Trail } from '@react-three/drei';
import { Vector3, Group } from 'three';
import * as THREE from 'three';

interface EnergyFlowProps {
  startPosition: [number, number, number];
  endPosition: [number, number, number];
  active: boolean;
  qualityLevel?: 'low' | 'medium' | 'high';
}

/**
 * Komponent wizualizujący przepływ energii/informacji między węzłami
 */
const EnergyFlow: React.FC<EnergyFlowProps> = ({ startPosition, endPosition, active, qualityLevel = 'high' }) => {
  const group = useRef<Group>(null);
  const particles = useRef<React.MutableRefObject<Group | null>[]>([]);
  
  // Adjust particle count based on quality level
  const particleCount = qualityLevel === 'low' ? 2 : qualityLevel === 'medium' ? 3 : 5;
  
  // Tworzymy referencje dla cząsteczek - optymalizacja liczby cząsteczek
  if (particles.current.length === 0) {
    particles.current = Array(particleCount).fill(0).map(() => ({ current: null } as React.MutableRefObject<Group | null>));
  }
  
  // Konwertujemy pozycje na obiekty Vector3
  const start = new Vector3(...startPosition);
  const end = new Vector3(...endPosition);
  
  // Obliczamy kierunek przepływu
  const direction = new Vector3().subVectors(end, start).normalize();  const distance = start.distanceTo(end);
  
  // Optymalizacja - używamy useRef do śledzenia klatek i pomijamy niektóre
  const frameSkipRef = useRef<number>(0);
  
  useFrame(({ clock }) => {
    if (!active) return;
    
    // Optymalizacja - aktualizacja tylko co 2 klatki
    frameSkipRef.current += 1;
    if (frameSkipRef.current % 2 !== 0) return;
    
    // Animacja cząstek poruszających się od początku do końca
    particles.current.forEach((particleRef, i) => {
      if (particleRef.current) {
        // Czas z offsetem dla każdej cząstki
        const time = (clock.getElapsedTime() + i * 0.2) % (distance * 0.6);
        
        // Obliczanie pozycji cząstki wzdłuż ścieżki
        const currentPos = new Vector3()
          .copy(start)
          .addScaledVector(direction, time * 2);
        
        // Dodanie delikatnej sinusoidalnej ścieżki dla wizualnego efektu
        const offset = new Vector3(
          Math.sin(time * 5 + i) * 0.1,
          Math.cos(time * 4 + i) * 0.1,
          Math.sin(time * 6 + i) * 0.1
        );
        
        particleRef.current.position.copy(currentPos).add(offset);
        
        // Skala cząstek zależna od pozycji na ścieżce
        const progress = time / (distance * 0.6);
        const scale = Math.sin(progress * Math.PI) * 1.2;
        particleRef.current.scale.set(scale, scale, scale);
      }
    });
  });
  
  // Kolor i przezroczystość zależne od stanu aktywności
  const lineOpacity = active ? 0.6 : 0;
  const particleOpacity = active ? 1 : 0;
  
  // Kolor przepływu zależny od źródła i celu
  const startColor = startPosition[0] < 0 ? "dodgerblue" : "tomato"; // Empatia lub Rozumowanie
  const endColor = endPosition[0] > 0 ? "lightgreen" : "tomato"; // Rozumowanie lub Materializacja
  
  return (
    <group ref={group}>
      {/* Linia bazowa łączącą węzły */}
      <Line 
        points={[start, end]} 
        color={startColor} 
        lineWidth={1} 
        transparent 
        opacity={lineOpacity}
      />
      
      {/* Cząsteczki przepływu energii */}
      {active && particles.current.map((_, i) => (
        <group key={i} ref={particles.current[i]} position={start}>
          {/* Świecące punkty jako cząsteczki energii */}
          <Trail 
            width={1} 
            length={4} 
            color={new THREE.Color(startColor).lerp(new THREE.Color(endColor), 0.5)}
            attenuation={(width) => width}
          >
            <mesh>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshBasicMaterial 
                color={i % 2 ? startColor : endColor} 
                transparent 
                opacity={particleOpacity}
              />
            </mesh>
          </Trail>
        </group>
      ))}
    </group>
  );
};

export default EnergyFlow;
