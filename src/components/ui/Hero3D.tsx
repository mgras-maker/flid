import { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text, Float, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Vector3, MathUtils, Mesh, Group } from 'three';

interface HeroProps {
  subtitle?: string;
}

// Animated floating spheres in the background
function FloatingSpheres() {
  const count = 8;
  const sphereRefs = useRef<Mesh[]>([]);
  useFrame(({ clock }) => {
    // Animate each sphere differently
    sphereRefs.current.forEach((sphere, i) => {
      if (!sphere) return;
      
      const t = clock.getElapsedTime() * 0.2;
      const x = Math.sin(t + i * 1000) * 5;
      const y = Math.cos(t + i * 1000) * 5;
      const z = Math.sin(t + i * 2.5) * 3;
      
      sphere.position.lerp(new Vector3(x, y, z), 0.01);
      sphere.rotation.x = Math.sin(t * 0.5) * 0.5;
      sphere.rotation.y = Math.cos(t * 0.5) * 0.5;
      
      // Pulse scale slightly
      const scale = 1 + Math.sin(t * 0.5 + i) * 0.1;
      sphere.scale.setScalar(scale);
    });
  });

  return (
    <group>
      {Array.from({ length: count }).map((_, i) => {
        // Generate randomized initial positions for each sphere
        const radius = 5 + Math.random() * 5;
        const angle = (i / count) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const z = -5 + Math.random() * 10;
        
        // Generate a size based on position (spheres further back are larger)
        const size = 0.5 + Math.random() * 0.5;
        
        return (          <mesh 
            key={`sphere-${i}`}
            position={[x, y, z]} 
            ref={(el: Mesh) => {
              if (el) sphereRefs.current[i] = el;
            }}
          >
            <sphereGeometry args={[size, 32, 32]} />
            <meshStandardMaterial 
              color="#6366f1"
              transparent
              opacity={0.15 + Math.random() * 0.1}
              metalness={0.2}
              roughness={0.8}
            />
          </mesh>
        );
      })}
    </group>
  );
}

// Animated title effect
function AnimatedTitle() {
  const { viewport } = useThree();
  const titleRef = useRef<Group>(null);
  
  useFrame(({ clock }) => {
    if (titleRef.current) {
      const t = clock.getElapsedTime();
      titleRef.current.rotation.x = MathUtils.lerp(
        titleRef.current.rotation.x,
        Math.sin(t * 0.5) * 0.05,
        0.1
      );
      titleRef.current.rotation.y = MathUtils.lerp(
        titleRef.current.rotation.y,
        Math.sin(t * 0.2) * 0.05,
        0.1
      );
    }
  });
  
  // Adjust size based on viewport
  const size = Math.min(viewport.width * 0.1, 1);
  
  return (
    <Float
      speed={2} // Animation speed
      rotationIntensity={0.5} // XYZ rotation intensity
      floatIntensity={0.5} // Up/down float intensity
    >
      <group ref={titleRef}>
        <Text
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hjp-Ek-_EeA.woff"
          fontSize={size}
          position={[0, 0, 0]}
          textAlign="center"
          anchorX="center"
          anchorY="middle"
          color="#2A2A42"
          maxWidth={viewport.width * 0.8}
          letterSpacing={0.05}
        >
          Balance through design
        </Text>
      </group>
    </Float>
  );
}

// Main 3D scene
function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={60} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <Suspense fallback={null}>
        <AnimatedTitle />
        <FloatingSpheres />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        makeDefault
      />
    </>
  );
}

const Hero3D = ({ subtitle = "Foundation People-Innovations-Design" }: HeroProps) => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-flid-light py-24 px-4 sm:px-6">
      <div className="absolute inset-0 z-10">
        {isMounted && (
          <Canvas flat>
            <Scene />
          </Canvas>
        )}
      </div>
      
      <div className="relative z-20 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-flid-accent font-medium text-lg md:text-xl mb-4">
            {subtitle}
          </p>
        </motion.div>
        
        {/* Invisible text for SEO and accessibility */}
        <h1 className="sr-only">Balance through design</h1>
        
        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Designing positive change for sustainability through innovation,
          research and creative thinking.
        </motion.p>
        
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.a
            href="#projects"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Projects
          </motion.a>
          
          <motion.a
            href="#process"
            className="btn border-2 border-flid-dark text-flid-dark hover:bg-flid-dark hover:text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Process
          </motion.a>
        </motion.div>
      </div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2,
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M20 5V35M20 35L10 25M20 35L30 25" 
            stroke="#2A2A42" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero3D;
