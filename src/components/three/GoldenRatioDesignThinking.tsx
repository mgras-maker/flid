import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import { 
  OrbitControls, 
  Text, 
  Float,
  useTexture,
  shaderMaterial,
} from '@react-three/drei';
import EnhancedFibonacciSpiral from './EnhancedFibonacciSpiral';
import { 
  Mesh, 
  Vector3, 
  Vector2,
  Color, 
  Points, 
  AdditiveBlending, 
  Line, 
  ShaderMaterial
} from 'three';
import { EffectComposer, Bloom, ChromaticAberration, Vignette, SMAA } from '@react-three/postprocessing';
import { BlendFunction, KernelSize } from 'postprocessing';
import type { Object3DEventMap } from 'three';
import { 
  detectWebGL, 
  checkPerformanceRequirements,
  setupContextLossHandlers,
  handleContextLoss,
  PerformanceTier
} from '../../utils/WebGLDetector';
import { validateShader, makeShaderMoreCompatible } from '../../utils/ShaderValidator';
import { useTheme } from '../../contexts/ThemeHooks';

const PHI = 1.61803398875;

const createColorPalette = (isDark: boolean) => {
  return {
    empathy: new Color(isDark ? '#4facfe' : '#6A8FE5').convertSRGBToLinear(),
    reasoning: new Color(isDark ? '#b465da' : '#9A8CE0').convertSRGBToLinear(),
    materialization: new Color(isDark ? '#43e97b' : '#8371C7').convertSRGBToLinear(),
    background: new Color(isDark ? '#2A2A42' : '#F5F5FA'),
    energy: new Color(isDark ? '#9A8CE0' : '#8B7DD1').convertSRGBToLinear(),
    particles: new Color('#ffffff'),
    golden: new Color(isDark ? '#ffd700' : '#D2CDE8').convertSRGBToLinear(),
    glow: new Color(isDark ? '#8B7DD1' : '#b465da').convertSRGBToLinear(),
  };
};

let colors = createColorPalette(true);

const AnimationPhase = {
  EMPATHY_ACTIVE: 0,
  EMPATHY_TO_REASONING: 1,
  REASONING_ACTIVE: 2,
  REASONING_TO_MATERIALIZATION: 3,
  MATERIALIZATION_ACTIVE: 4,
  MATERIALIZATION_TO_EMPATHY: 5,
} as const;

const PHASE_DURATION = 5;

const processNodes = [
  {
    id: 'empathy',
    title: 'Empatia',
    description: 'Zrozumienie potrzeb i wyzwań ludzi poprzez głęboką obserwację i dialog.',
    position: new Vector3(-PHI * 2, 0, 0),
    color: colors.empathy
  },
  {
    id: 'reasoning',
    title: 'Rozumowanie',
    description: 'Analiza informacji, definiowanie problemów i identyfikacja możliwości innowacji.',
    position: new Vector3(PHI * 2, 0, 0),
    color: colors.reasoning
  },
  {
    id: 'materialization',
    title: 'Materializacja',
    description: 'Transformacja idei w namacalne prototypy, testowanie koncepcji i doskonalenie rozwiązań.',
    position: new Vector3(0, PHI * 2, 0),
    color: colors.materialization
  }
];

interface VesicaPiscisProps {
  position?: [number, number, number];
  color?: Color;
  radius?: number;
  opacity?: number;
  pulseSpeed?: number;
}

const VesicaPiscis: React.FC<VesicaPiscisProps> = ({ 
  position = [0, 0, 0], 
  color = colors.golden, 
  radius = 1, 
  opacity = 0.3,
  pulseSpeed = 0.5
}) => {
  const vesicaRef = useRef<Mesh>(null);
  const lineRef = useRef<Line<any, any, Object3DEventMap>>(null);
  
  useFrame((state) => {
    if (vesicaRef.current) {
      vesicaRef.current.rotation.z = state.clock.getElapsedTime() * 0.1;
      
      const pulse = Math.sin(state.clock.getElapsedTime() * pulseSpeed) * 0.1 + 0.9;
      vesicaRef.current.scale.set(pulse, pulse, pulse);
    }
    
    if (lineRef.current && lineRef.current.material) {
      const material = lineRef.current.material as any;
      material.opacity = (Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2 + 0.8) * opacity;
    }
  });

  const points = useMemo(() => {
    const pointsArray = [];
    const segments = 256;
    
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      pointsArray.push(
        Math.cos(theta) * radius - radius/2,
        Math.sin(theta) * radius,
        0
      );
    }
    
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      pointsArray.push(
        Math.cos(theta) * radius + radius/2,
        Math.sin(theta) * radius,
        0
      );
    }
    
    pointsArray.push(
      0, radius, 0,
      0, -radius, 0
    );
    
    const goldenOffset = radius / PHI;
    
    pointsArray.push(
      -goldenOffset, radius / 2, 0,
      goldenOffset, radius / 2, 0,
      -goldenOffset, -radius / 2, 0,
      goldenOffset, -radius / 2, 0
    );
    
    return pointsArray;
  }, [radius]);

  return (
    <group position={position}>
      <mesh ref={vesicaRef}>
        <line ref={lineRef as any}>          
          <bufferGeometry>
            <bufferAttribute 
              attach="attributes-position" 
              args={[new Float32Array(points), 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial 
            color={color} 
            transparent 
            opacity={opacity}
            linewidth={1}
            blending={AdditiveBlending} 
            depthWrite={false}
          />
        </line>
      </mesh>
    </group>
  );
};

const EnergyParticleShader = shaderMaterial(
  {
    time: 0,
    color: new Color(0xffffff),
    pointTexture: null,
    speed: 1.0,
    density: 1.0,
    maxSize: 1.0,
    activeIntensity: 1.0,
    pathCurvature: 0.3,
  },
  /* glsl */`
    precision mediump float;
    
    uniform float time;
    uniform float speed;
    uniform float activeIntensity;
    uniform float maxSize;
    
    attribute float size;
    attribute vec3 direction;
    attribute float offset;
    attribute vec3 startPoint;
    attribute vec3 endPoint;
    attribute vec3 controlPoint;
    attribute vec3 position;
    
    uniform mat4 modelMatrix;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    
    varying float vProgress;
    varying float vDistance;
    
    vec3 bezier(vec3 a, vec3 b, vec3 c, float t) {
      float oneMinusT = 1.0 - t;
      return oneMinusT * oneMinusT * a + 2.0 * oneMinusT * t * b + t * t * c;
    }
    
    void main() {
      float particleProgress = mod(time * speed + offset, 1.0);
      vProgress = particleProgress;
      
      vec3 pos = bezier(startPoint, controlPoint, endPoint, particleProgress);
      float totalDist = length(endPoint - startPoint);
      float distFromStart = length(pos - startPoint);
      vDistance = totalDist > 0.0001 ? distFromStart / totalDist : 0.0;
      
      float distBasedSize = size * maxSize * (1.0 - abs(vDistance - 0.5) * 1.5);
      
      float sizeMultiplier = 0.5 + activeIntensity * 0.5;
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      
      gl_PointSize = distBasedSize * sizeMultiplier * (300.0 / -mvPosition.z);
    }
  `,
  /* glsl */`
    precision mediump float;
    
    uniform float time;
    uniform vec3 color;
    uniform sampler2D pointTexture;
    uniform float activeIntensity;
    
    varying float vProgress;
    varying float vDistance;    void main() {
      float dist = length(gl_PointCoord - vec2(0.5));
      if (dist > 0.5) discard;
      
      // Calculate a soft, circular particle shape without relying on texture
      float alpha = 1.0 - smoothstep(0.3, 0.5, dist);
      float intensity = smoothstep(0.4, 0.0, dist) + 0.2;
      
      // Try to use texture if available (with fallback)
      #ifdef GL_OES_standard_derivatives
      vec4 texColor = texture2D(pointTexture, gl_PointCoord);
      // Only use texture alpha if it seems valid
      float texAlpha = texColor.a > 0.0 ? texColor.a : 1.0;
      #else
      float texAlpha = 1.0;
      #endif
      
      vec3 adjustedColor = color;
      adjustedColor += vec3(0.2, 0.1, 0.0) * vDistance * activeIntensity;
      
      float pulse = 0.8 + 0.2 * sin(time * 3.0 + vDistance * 10.0);
      
      float pathFade = smoothstep(0.0, 0.2, vProgress) * smoothstep(1.0, 0.8, vProgress);
      
      float finalAlpha = alpha * pathFade * activeIntensity * texAlpha;
      
      gl_FragColor = vec4(adjustedColor * intensity * pulse, finalAlpha);
    }
  `
);

extend({ EnergyParticleShader });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      energyParticleShader: any;
    }
  }
}

interface EnergyFlowProps {
  from: Vector3;
  to: Vector3;
  intensity?: number;
  active?: boolean;
  color?: Color;
  pathOffset?: number;
}

const EnergyFlow: React.FC<EnergyFlowProps> = ({ 
  from, 
  to, 
  intensity = 1.0, 
  active = false,
  color = colors.energy,
  pathOffset = 0
}) => {
  const particlesRef = useRef<Points<any, any>>(null);
  const shaderRef = useRef(null);
  const startPos = new Vector3().copy(from);
  const endPos = new Vector3().copy(to);
  const direction = new Vector3().subVectors(endPos, startPos).normalize();
  const distance = startPos.distanceTo(endPos);
    // Create a texture for particles
  const particleTexture = useTexture('/vite.svg', (texture) => {
    // Add error handler for texture loading
    console.log('Particle texture loaded successfully');
  }, (error) => {
    console.warn('Failed to load particle texture:', error);
    // Texture will be undefined, but the shader has fallback
  });
  
  // Calculate curved path control point for bezier curve
  const controlPoint = useMemo(() => {
    // Create a perpendicular vector to use as basis for curve
    const midPoint = new Vector3().addVectors(startPos, endPos).multiplyScalar(0.5);
    
    // Determine direction of curve - makes each energy path visually distinct
    const uniqueOffset = pathOffset || (from.y > 0 ? -0.8 : from.x > 0 ? 0.5 : -0.5);
    
    // Create more natural curve using perpendicular direction
    const perpendicular = new Vector3().crossVectors(direction, new Vector3(0, 1, 0)).normalize();
    
    // Curve height based on distance and custom offset
    const curveHeight = distance * 0.3 + uniqueOffset;
    
    // Create control point offset from midpoint
    return new Vector3().copy(midPoint).addScaledVector(perpendicular, curveHeight);
  }, [startPos, endPos, direction, distance, pathOffset, from]);

  // Dynamic particle count based on distance and intensity
  const particleCount = useMemo(() => Math.floor(120 * intensity * (0.5 + distance * 0.1)), [intensity, distance]);
  
  // Advanced particle attributes
  const { positions, sizes, offsets, directions, startPoints, endPoints, controlPoints } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const offsets = new Float32Array(particleCount);
    const directions = new Float32Array(particleCount * 3);
    const startPoints = new Float32Array(particleCount * 3);
    const endPoints = new Float32Array(particleCount * 3);
    const controlPoints = new Float32Array(particleCount * 3);
    
    // Helper function to calculate point on Bezier curve
    const bezier = (a: Vector3, b: Vector3, c: Vector3, t: number) => {
      const oneMinusT = 1 - t;
      return new Vector3(
        oneMinusT * oneMinusT * a.x + 2 * oneMinusT * t * b.x + t * t * c.x,
        oneMinusT * oneMinusT * a.y + 2 * oneMinusT * t * b.y + t * t * c.y,
        oneMinusT * oneMinusT * a.z + 2 * oneMinusT * t * b.z + t * t * c.z
      );
    };
    
    for (let i = 0; i < particleCount; i++) {
      // Distribute particles more densely toward the middle of the path
      let progress;
      if (i < particleCount * 0.4) {
        // First 40% - distribute with higher density in the middle
        progress = Math.pow(i / (particleCount * 0.4), 1.5) * 0.5;
      } else {
        // Last 60% - distribute with higher density in the middle
        progress = 0.5 + (1 - Math.pow(1 - (i - particleCount * 0.4) / (particleCount * 0.6), 1.5)) * 0.5;
      }
      
      // Calculate position along curve
      const pos = bezier(startPos, controlPoint, endPos, progress);
      
      // Add some randomness to position - less near endpoints for a more focused flow
      const randomOffset = 0.3 * (1 - Math.abs(progress - 0.5) * 2); 
      pos.x += (Math.random() - 0.5) * randomOffset;
      pos.y += (Math.random() - 0.5) * randomOffset;
      pos.z += (Math.random() - 0.5) * randomOffset * 0.5; // Less deviation in z for a flatter curve
      
      // Store position
      positions[i * 3] = pos.x;
      positions[i * 3 + 1] = pos.y;
      positions[i * 3 + 2] = pos.z;
      
      // Dynamic particle sizes - smaller near endpoints for a tapered appearance
      const sizeVariation = 1 - Math.abs(progress - 0.5) * 1.8;
      sizes[i] = Math.max(0.03, Math.random() * 0.1 * sizeVariation + 0.04);
      
      // Store offset for time-varied animation - distribute to avoid clumping
      offsets[i] = Math.random();
      
      // Store direction for velocity
      directions[i * 3] = direction.x;
      directions[i * 3 + 1] = direction.y;
      directions[i * 3 + 2] = direction.z;
      
      // Store path points for Bezier calculation in shader
      startPoints[i * 3] = startPos.x;
      startPoints[i * 3 + 1] = startPos.y;
      startPoints[i * 3 + 2] = startPos.z;
      
      endPoints[i * 3] = endPos.x;
      endPoints[i * 3 + 1] = endPos.y;
      endPoints[i * 3 + 2] = endPos.z;
      
      controlPoints[i * 3] = controlPoint.x;
      controlPoints[i * 3 + 1] = controlPoint.y;
      controlPoints[i * 3 + 2] = controlPoint.z;
    }
    
    return { positions, sizes, offsets, directions, startPoints, endPoints, controlPoints };
  }, [particleCount, startPos, endPos, direction, controlPoint, distance]);
  
  // Animated trail effect with smooth transitions
  useFrame(({ clock }) => {
    if (shaderRef.current && (shaderRef.current as any).uniforms) {
      // Update shader uniforms for animation 
      const uniforms = (shaderRef.current as any).uniforms;
      uniforms.time.value = clock.getElapsedTime();
      
      // Update intensity with smooth transition for active state
      const currentIntensity = uniforms.activeIntensity?.value ?? (active ? 1.0 : 0.2);
      const targetIntensity = active ? 1.0 : 0.0; // 0 intensity when inactive (invisible)
      const step = active ? 0.05 : 0.08; // Faster fade-out than fade-in
      uniforms.activeIntensity.value = active ? 
        Math.min(targetIntensity, currentIntensity + step) : 
        Math.max(targetIntensity, currentIntensity - step);
        
      // Update speed - faster when active
      uniforms.speed.value = active ? 0.35 : 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
        <bufferAttribute
          attach="attributes-offset"
          args={[offsets, 1]}
        />
        <bufferAttribute
          attach="attributes-direction"
          args={[directions, 3]}
        />
        <bufferAttribute
          attach="attributes-startPoint"
          args={[startPoints, 3]}
        />
        <bufferAttribute
          attach="attributes-endPoint"
          args={[endPoints, 3]}
        />
        <bufferAttribute
          attach="attributes-controlPoint"
          args={[controlPoints, 3]}
        />
      </bufferGeometry>
      <energyParticleShader
        ref={shaderRef}
        color={color}
        pointTexture={particleTexture}
        transparent
        depthWrite={false}
        blending={AdditiveBlending}
        speed={active ? 0.35 : 0.1}
        density={intensity}
        maxSize={active ? 2.5 : 0.0} // No size when inactive
        activeIntensity={active ? 1.0 : 0.0} // No intensity when inactive
        pathCurvature={0.3}
        time={0}
      />
    </points>
  );
};

const HolographicShaderMaterial = shaderMaterial(
  {
    time: 0,
    color: new Color(0x00aaff),
    intensity: 1.0,
    active: 0,
    noiseAmplitude: 0.04,
    fresnelPower: 2.0
  },
  /* glsl */`
    precision mediump float;
    
    uniform float time;
    uniform float active;
    uniform float noiseAmplitude;
    attribute vec3 position;
    attribute vec3 normal;
    attribute vec2 uv;
    
    uniform mat4 modelMatrix;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform mat3 normalMatrix;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vEye;
    
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
    float snoise(vec3 v) {
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      
      vec3 i  = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);
      
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      
      i = mod289(i);
      vec4 p = permute(permute(permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0))
              + i.x + vec4(0.0, i1.x, i2.x, 1.0));
              
      float n_ = 0.142857142857;
      vec3 ns = n_ * D.wyz - D.xzx;
      
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_);
      
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      
      vec4 b0 = vec4(x.xy, y.xy);
      vec4 b1 = vec4(x.zw, y.zw);
      
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
      
      vec3 p0 = vec3(a0.xy, h.x);
      vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z);
      vec3 p3 = vec3(a1.zw, h.w);
      
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;      p3 *= norm.w;
      
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }
    
    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      
      vec3 noiseInput = vec3(
        position.x * 1.5, 
        position.y * 1.5, 
        position.z * 1.5 + time * 0.3
      );
      float noiseVal = snoise(noiseInput);
      
      noiseVal = clamp(noiseVal, -1.0, 1.0);
      
      float activeMultiplier = 1.0 + active * 0.8;
      vec3 pos = position + normal * noiseVal * noiseAmplitude * activeMultiplier;
      
      vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
      vec4 viewPosition = modelViewMatrix * modelPosition;
      
      gl_Position = projectionMatrix * viewPosition;
      
      vPosition = pos;
      vEye = normalize(viewPosition.xyz);
    }
  `,
  /* glsl */`
    precision mediump float;
    
    uniform float time;
    uniform vec3 color;
    uniform float intensity;
    uniform float active;
    uniform float fresnelPower;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vEye;
    
    void main() {
      float fresnelTerm = pow(1.0 - abs(dot(vNormal, normalize(-vEye))), fresnelPower);
      
      fresnelTerm = fresnelTerm * (1.0 + active * 2.0);
      
      float lineWidth = 0.02 * (1.0 - active * 0.5);
      float gridFrequency = 10.0;      
      
      vec2 st = vUv * gridFrequency;
      vec2 cell = floor(st);
      vec2 fpos = st - cell;
      
      float gridX = step(lineWidth, fpos.x) * step(fpos.x, 1.0 - lineWidth);
      float gridY = step(lineWidth, fpos.y) * step(fpos.y, 1.0 - lineWidth);
      
      float gridPattern = 1.0 - ((1.0 - gridX) + (1.0 - gridY));
      
      float rippleSpeed = 0.5;
      float rippleFreq = 3.0;
      float rippleWidth = 0.05 * (1.0 + active * 1.5);
      float dist = length(vUv - 0.5) * 2.0;
      float ripple = smoothstep(0.0, rippleWidth, abs(sin(dist * rippleFreq - time * rippleSpeed)));
      
      ripple *= 0.3 + active * 0.7;      
      
      float scanY = vUv.y * 30.0 + time * 0.8;
      float iScanY = floor(scanY);
      float fScanY = scanY - iScanY;
      
      float scanLine = 0.0;
      float fadeIn = step(0.0, fScanY) * min(fScanY / 0.2, 1.0);
      float fadeOut = step(0.8, fScanY) * (1.0 - min((fScanY - 0.8) / 0.2, 1.0));
      float middle = step(0.2, fScanY) * step(fScanY, 0.8);
      scanLine = fadeIn * (1.0 - step(0.2, fScanY)) + middle + fadeOut;
      
      scanLine *= 0.15 + active * 0.2;
      
      scanLine *= 1.0 + active * 2.0;
      
      vec3 finalColor = color * intensity;
      float alpha = fresnelTerm * 0.9 + gridPattern * 0.1 + ripple * 0.4 + scanLine;
      
      float pulse = 1.0 + sin(time * 2.0) * 0.1 * active;
      finalColor *= pulse;
      
      finalColor += vec3(vPosition.y * 0.02, -vPosition.x * 0.02, vPosition.z * 0.03) * active;
      
      float centerHighlight = smoothstep(0.8, 0.0, length(vUv - 0.5) * 2.0) * active;
      finalColor += centerHighlight * color * 0.5;      
      gl_FragColor = vec4(finalColor, min(0.85, alpha * (0.5 + active * 0.5)));
      
      if (active > 0.5 && alpha > 0.7) {
        gl_FragColor.rgb += color * 0.5;
      }
    }
  `
);

extend({ HolographicShaderMaterial });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      holographicShaderMaterial: any;
    }
  }
}

interface ProcessNodeProps {
  position: Vector3; 
  title: string; 
  description: string; 
  color: Color; 
  active?: boolean;
  scale?: number;
  onClick?: () => void;
}

const ProcessNode: React.FC<ProcessNodeProps> = ({ 
  position, 
  title, 
  description, 
  color, 
  active = false, 
  scale = 1.0, 
  onClick 
}): React.ReactNode => {
  const sphereRef = useRef<Mesh>(null);
  const ringRef = useRef<Mesh>(null);
  const glowRef = useRef<Mesh>(null);
  const hologramRef = useRef<ShaderMaterial>(null);
  const ringHologramRef = useRef<ShaderMaterial>(null);
  const particlesRef = useRef<Points>(null);
  
  const [hovered, setHovered] = useState(false);
  
  const timeRef = useRef(0);
  
  const originalSpherePositions = useRef<Float32Array | null>(null);
  const deformedSpherePositions = useRef<Float32Array | null>(null);
  
  const particleCount = active ? 100 : 50;
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = (1.2 + Math.random() * 1.5) * scale;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = Math.sin(angle) * radius;
      positions[i * 3 + 2] = (Math.random() - 0.5) * radius * 2;
    }
    return positions;
  }, [particleCount, active, scale]);
  
  useEffect(() => {
    if (sphereRef.current) {
      const geometry = sphereRef.current.geometry;
      const positionAttribute = geometry.attributes.position;
      
      if (!originalSpherePositions.current) {
        originalSpherePositions.current = new Float32Array(positionAttribute.array.length);
        originalSpherePositions.current.set(positionAttribute.array);
        
        deformedSpherePositions.current = new Float32Array(positionAttribute.array.length);
      }
    }
  }, []);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    timeRef.current = t;
    
    if (hologramRef.current) {
      const hologramUniforms = (hologramRef.current as any).uniforms;
      if (hologramUniforms) {
        hologramUniforms.time.value = t;
        
        const currentActiveValue = hologramUniforms.active?.value ?? (active ? 1 : 0);
        
        hologramUniforms.active.value = active ? 
          Math.min(1, currentActiveValue + 0.05) : 
          Math.max(0, currentActiveValue - 0.05);
          
        if (hovered) {
          hologramUniforms.fresnelPower.value = 1.5;
          hologramUniforms.intensity.value = 1.2;
        } else {
          hologramUniforms.fresnelPower.value = 2.0;
          hologramUniforms.intensity.value = 1.0;
        }
        
        hologramUniforms.noiseAmplitude.value = active ? 0.08 : 0.04;
      }
    }
    
    if (sphereRef.current && originalSpherePositions.current && deformedSpherePositions.current) {
      const geometry = sphereRef.current.geometry;
      const positionAttribute = geometry.attributes.position;
      const originalPositions = originalSpherePositions.current;
      const deformedPositions = deformedSpherePositions.current;
      
      for (let i = 0; i < originalPositions.length; i += 3) {
        const x = originalPositions[i];
        const y = originalPositions[i + 1];
        const z = originalPositions[i + 2];
        
        const length = Math.sqrt(x*x + y*y + z*z);
        
        if (active) {
          const noiseFreq = 2.5;
          const noiseMag = 0.15 * scale;
          
          if (color.getHexString() === colors.empathy.getHexString()) {
            const wave = Math.sin(noiseFreq * x + t) * 
                      Math.cos(noiseFreq * y + t * 0.7) * 
                      Math.sin(noiseFreq * z + t * 0.5) * noiseMag;
            
            deformedPositions[i] = x + x/length * wave;
            deformedPositions[i+1] = y + y/length * wave;
            deformedPositions[i+2] = z + z/length * wave;
          }
          else if (color.getHexString() === colors.reasoning.getHexString()) {
            const crystal = Math.abs(Math.sin(x * y * z * 0.05 + t * 0.5)) * noiseMag;
            
            deformedPositions[i] = x + x/length * crystal;
            deformedPositions[i+1] = y + y/length * crystal;
            deformedPositions[i+2] = z + z/length * crystal;
          }
          else {
            const pulse = Math.sin(length * 4 + t * 2) * noiseMag;
            
            deformedPositions[i] = x + x/length * pulse;
            deformedPositions[i+1] = y + y/length * pulse;
            deformedPositions[i+2] = z + z/length * pulse;
          }
        } else {
          deformedPositions[i] = x + (deformedPositions[i] - x) * 0.9;
          deformedPositions[i+1] = y + (deformedPositions[i+1] - y) * 0.9;
          deformedPositions[i+2] = z + (deformedPositions[i+2] - z) * 0.9;
        }
      }
      
      positionAttribute.array.set(deformedPositions);
      positionAttribute.needsUpdate = true;
    }
    
    if (ringHologramRef.current) {
      const ringUniforms = (ringHologramRef.current as any).uniforms;
      if (ringUniforms) {
        ringUniforms.time.value = t * 0.7;
        
        const hologramActiveValue = ((hologramRef.current as any)?.uniforms?.active?.value) ?? 0;
        ringUniforms.active.value = hologramActiveValue;
      }
    }
    
    if (sphereRef.current) {
      const targetScale = scale * (1 + (active ? 0.1 : 0) + (hovered ? 0.05 : 0));
      sphereRef.current.scale.lerp(new Vector3(targetScale, targetScale, targetScale), 0.05);
      
      sphereRef.current.rotation.y += active ? 0.003 : 0.001;
      sphereRef.current.rotation.z += active ? 0.001 : 0.0005;
    }
    
    if (ringRef.current) {
      ringRef.current.rotation.z -= active ? 0.005 : 0.002;
      ringRef.current.rotation.x = Math.sin(t * 0.5) * 0.3;
      ringRef.current.rotation.y = Math.cos(t * 0.3) * 0.2;
      
      const ringTargetScale = (1.3 + (active ? 0.1 : 0)) * scale;
      ringRef.current.scale.lerp(new Vector3(ringTargetScale, ringTargetScale, ringTargetScale), 0.03);
    }
    
    if (glowRef.current && active) {
      const pulseBase = Math.sin(t * 0.8) * 0.15 + 0.85;
      const glowScale = 1.8 * scale * pulseBase;
      glowRef.current.scale.lerp(new Vector3(glowScale, glowScale, glowScale), 0.04);
    }
    
    if (particlesRef.current && particlesRef.current.geometry.attributes.position) {
      const positions = particlesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const ix = i * 3;
        const iy = i * 3 + 1;
        const iz = i * 3 + 2;
        
        const x = positions[ix];
        const y = positions[iy];
        const z = positions[iz];
        
        const dist = Math.sqrt(x*x + y*y + z*z);
        
        const angle = t * 0.2 / (dist * 0.5);
        const newX = x * Math.cos(angle) - y * Math.sin(angle);
        const newY = x * Math.sin(angle) + y * Math.cos(angle);
        
        const verticalOffset = active ? Math.sin(t * 2 + dist * 5) * 0.05 : 0;
        
        positions[ix] = newX;
        positions[iy] = newY + verticalOffset;
        
        const radialPulse = Math.sin(t + i * 0.1) * 0.02;
        const dirX = positions[ix] / dist;
        const dirY = positions[iy] / dist;
        const dirZ = positions[iz] / dist;
        
        positions[ix] += dirX * radialPulse;
        positions[iy] += dirY * radialPulse;
        positions[iz] += dirZ * radialPulse;
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group position={[position.x, position.y, position.z]}>
      <Float speed={1.5} floatIntensity={active ? 0.25 : 0.08} rotationIntensity={0.2}>
        <mesh 
          ref={sphereRef} 
          onClick={onClick}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <icosahedronGeometry args={[1, active ? 4 : 3]} />
          <holographicShaderMaterial 
            ref={hologramRef}            
            color={color}
            intensity={1.0}
            active={active ? 1.0 : 0.0}
            noiseAmplitude={0.04}
            fresnelPower={2.0}
            transparent 
            depthWrite={false}
          />
        </mesh>
        
        <mesh ref={ringRef}>
          <torusGeometry args={[1.3, 0.08, 16, 100]} />
          <holographicShaderMaterial
            ref={ringHologramRef}            
            color={color.clone().multiplyScalar(1.2)}
            intensity={0.8}
            active={active ? 1.0 : 0.0}
            noiseAmplitude={0.02}
            fresnelPower={1.5}
            transparent 
            depthWrite={false}
          />
        </mesh>
        
        <points ref={particlesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[particlePositions, 3]}
            />
          </bufferGeometry>          
          <pointsMaterial
            size={0.03}
            color={color}
            transparent
            opacity={0.7}
            blending={AdditiveBlending}
            depthWrite={false}
            sizeAttenuation
          />
        </points>
        
        {active && (
          <mesh ref={glowRef}>
            <sphereGeometry args={[1.2, 32, 32]} />
            <meshBasicMaterial 
              color={color.clone().multiplyScalar(1.5)}
              transparent 
              opacity={0.2}
              blending={AdditiveBlending}
              depthWrite={false}
            />
          </mesh>
        )}
      </Float>
      
      <Float speed={2} floatIntensity={0.5} rotationIntensity={0.2}>
        <Text
          position={[0, 1.8, 0]}
          color="white"        
          fontSize={0.4}
          maxWidth={4}
          textAlign="center"
          anchorY="bottom"
          font={undefined}
          outlineWidth={0.02}
          outlineColor={color.clone().multiplyScalar(0.7).getStyle()}
        >
          {title}
        </Text>
      </Float>
      
      {active && (
        <Float speed={1} floatIntensity={0.2}>
          <Text
            position={[0, -1.8, 0]}
            color="white"
            fontSize={0.2}
            maxWidth={4.5}
            textAlign="center"
            anchorY="top"
            font={undefined}
          >
            {description}
          </Text>
        </Float>
      )}
      
      {active && (
        <group>
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i / 8) * Math.PI * 2;
            const length = 2 + Math.sin(i * 8.23) * 0.5;
            return (
              <line key={`line-${i}`}>
                <bufferGeometry>
                  <bufferAttribute
                    attach="attributes-position"
                    args={[new Float32Array([
                      0, 0, 0,
                      Math.cos(angle) * length, Math.sin(angle) * length, 0
                    ]), 3]}
                  />
                </bufferGeometry>                
                <lineBasicMaterial
                  color={color}
                  transparent
                  opacity={0.3 + Math.sin(i * 0.5) * 0.1}
                  blending={AdditiveBlending}
                />
              </line>
            );
          })}
        </group>
      )}
      
      {active && (
        <group rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <mesh>
            <ringGeometry args={[1.8, 1.85, 64]} />
            <meshBasicMaterial            
              color={color}
              transparent 
              opacity={0.3}
              blending={AdditiveBlending} 
            />
          </mesh>
          
          <mesh>
            <ringGeometry args={[2.2, 2.25, 64]} />
            <meshBasicMaterial              
              color={color.clone().multiplyScalar(1.2)} 
              transparent 
              opacity={0.2}
              blending={AdditiveBlending}
            />
          </mesh>
        </group>
      )}
    </group>
  );
};

const BackgroundStars = () => {
  const count = 2000;
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const radius = 50 + Math.random() * 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    
    return positions;
  }, [count]);

  const sizes = useMemo(() => {
    const sizes = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      sizes[i] = Math.random() * 0.5 + 0.1;
    }
    
    return sizes;
  }, [count]);
  
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#ffffff"
        transparent
        opacity={0.8}
        blending={AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
};

const BackgroundFog = ({ color = colors.background }) => {
  const fogRef1 = useRef<Mesh>(null);  
  const fogRef2 = useRef<Mesh>(null);
  const fogRef3 = useRef<Mesh>(null);
  
  const time = useRef(0);
    useFrame((_, delta) => {
    time.current += delta * 0.2;
    
    if (fogRef1.current) {
      fogRef1.current.rotation.z += 0.0003;
      fogRef1.current.rotation.y += 0.0001;
      const fogGeometry = fogRef1.current.geometry as any;
      if (fogGeometry.attributes && fogGeometry.attributes.position) {        
        const positions = fogGeometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          const x = positions[i];
          const y = positions[i + 1];
          const z = positions[i + 2];
          const noiseVal = Math.sin(x * 0.1 + time.current) * Math.cos(y * 0.1 + time.current) * 0.05;
          positions[i + 2] = z + noiseVal;
        }
        fogGeometry.attributes.position.needsUpdate = true;
      }
    }
    
    if (fogRef2.current) {
      fogRef2.current.rotation.z -= 0.0002;
      fogRef2.current.rotation.y -= 0.0001;
      fogRef2.current.rotation.x += 0.0001;
    }
    
    if (fogRef3.current) {
      fogRef3.current.rotation.x += 0.0001;
      fogRef3.current.rotation.z -= 0.0001;
      const scale = 1 + Math.sin(time.current * 0.5) * 0.03;
      fogRef3.current.scale.set(scale, scale, scale);
    }
  });
  
  return (
    <>
      <mesh ref={fogRef1} position={[0, 0, -25]}>
        <sphereGeometry args={[35, 64, 64]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.08}
          depthWrite={false}
          blending={AdditiveBlending}
        />
      </mesh>
      
      <mesh ref={fogRef2} position={[0, 0, -20]}>
        <sphereGeometry args={[28, 48, 48]} />
        <meshBasicMaterial
          color={new Color(color).multiplyScalar(1.2)}
          transparent
          opacity={0.05}
          depthWrite={false}
          blending={AdditiveBlending}
        />
      </mesh>
      
      <mesh ref={fogRef3} position={[0, 0, -15]}>
        <icosahedronGeometry args={[22, 2]} />
        <meshBasicMaterial
          color={new Color(color).multiplyScalar(0.8)}
          wireframe={true}
          transparent
          opacity={0.03}
          depthWrite={false}
          blending={AdditiveBlending}
        />
      </mesh>
    </>
  );
};

const OrbitalCamera = ({ speed = 0.5 }) => {
  const { camera } = useThree();
  const initialPosition = useMemo(() => new Vector3(0, 0, 10), []);
  const cameraTarget = useRef(new Vector3(0, 0, 0));
  const cameraMovementPhase = useRef(0);
  const lastPhaseChangeTime = useRef(0);
  const phaseTransitionDuration = 20;
    useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const speedFactor = speed / 0.5;
    
    if (time - lastPhaseChangeTime.current > phaseTransitionDuration) {
      cameraMovementPhase.current = (cameraMovementPhase.current + 1) % 5;
      lastPhaseChangeTime.current = time;
    }
    
    const phaseProgress = (time - lastPhaseChangeTime.current) / phaseTransitionDuration;
    
    const easeInOutCubic = (t: number) => 
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    
    const eased = easeInOutCubic(phaseProgress);
    
    let newPos = new Vector3();
    
    switch(cameraMovementPhase.current) {
      case 0:
        newPos.set(
          initialPosition.x + Math.sin(time * 0.15 * speedFactor) * 2.5,
          initialPosition.y + Math.sin(time * 0.1 * speedFactor) * 1.2,
          initialPosition.z + Math.cos(time * 0.15 * speedFactor) * 1.5
        );
        cameraTarget.current.lerp(new Vector3(0, 0, 0), 0.01);
        break;
        
      case 1:
        newPos.set(
          Math.cos(time * 0.05 * speedFactor) * 8,
          3 + Math.sin(time * 0.08 * speedFactor) * 1.5,
          Math.sin(time * 0.05 * speedFactor) * 8
        );
        cameraTarget.current.lerp(new Vector3(0, 0, 0), 0.01);
        break;
        
      case 2:
        const figureEightX = Math.sin(time * 0.2 * speedFactor) * 3;
        const figureEightZ = Math.sin(time * 0.1 * speedFactor) * Math.cos(time * 0.2 * speedFactor) * 3;
        newPos.set(
          figureEightX,
          initialPosition.y + Math.sin(time * 0.15 * speedFactor) * 1,
          initialPosition.z + figureEightZ
        );
        cameraTarget.current.lerp(new Vector3(figureEightX * 0.2, 0, figureEightZ * 0.2), 0.02);
        break;
        
      case 3:
        newPos.set(
          initialPosition.x + Math.cos(time * 0.12 * speedFactor) * 4,
          initialPosition.y - 2 + Math.cos(time * 0.2 * speedFactor) * 1,
          initialPosition.z + Math.sin(time * 0.12 * speedFactor) * 4
        );
        cameraTarget.current.lerp(new Vector3(0, 1, 0), 0.01);
        break;
        
      case 4:
        const revealX = Math.cos(time * 0.05 * speedFactor) * 4;
        const revealZ = Math.sin(time * 0.05 * speedFactor) * 10;
        newPos.set(
          revealX,
          initialPosition.y + 2 + Math.sin(time * 0.1 * speedFactor) * 1.5,
          revealZ
        );
        cameraTarget.current.lerp(new Vector3(0, 0, 0), 0.01);
        break;
    }
    
    if (speedFactor > 0.3) {
      const microShakeAmount = 0.005 * speedFactor;
      newPos.x += (Math.random() - 0.5) * microShakeAmount;
      newPos.y += (Math.random() - 0.5) * microShakeAmount;
      newPos.z += (Math.random() - 0.5) * microShakeAmount;
    }
    
    camera.position.lerp(newPos, Math.min(0.01 * speedFactor, 0.03));
      const currentLookAt = new Vector3();
    camera.getWorldDirection(currentLookAt);
    
    const quaternion = camera.quaternion.clone();
    camera.lookAt(cameraTarget.current);
    const targetQuaternion = camera.quaternion.clone();
    camera.quaternion.copy(quaternion);
    camera.quaternion.slerp(targetQuaternion, 0.02 * speedFactor);
  });
  
  return null;
};

interface SceneProps {
  disableCameraAnimation?: boolean;
  orbitSpeed?: number;
}

const Scene: React.FC<SceneProps> = ({ disableCameraAnimation = false, orbitSpeed = 0.5 }) => {
  const [phase, setPhase] = useState<number>(AnimationPhase.EMPATHY_ACTIVE);
  const { isDarkMode } = useTheme();
  
  const { camera } = useThree();
  
  useEffect(() => {
    colors = createColorPalette(isDarkMode);
  }, [isDarkMode]);
  
  useEffect(() => {
    camera.position.set(0, 0, 10);
  }, [camera]);
  
  const elapsedTimeRef = useRef(0);
    
  useFrame((_, delta) => {
    elapsedTimeRef.current += delta;
    
    if (elapsedTimeRef.current > PHASE_DURATION) {
      setPhase(prevPhase => (prevPhase + 1) % 6);
      elapsedTimeRef.current = 0;
    }
  });
  
  const activeNode = Math.floor(phase / 2);
  
  const flowsActive = {
    empathyToReasoning: phase === AnimationPhase.EMPATHY_TO_REASONING,
    reasoningToMaterialization: phase === AnimationPhase.REASONING_TO_MATERIALIZATION,
    materializationToEmpathy: phase === AnimationPhase.MATERIALIZATION_TO_EMPATHY
  };
  
  const handleNodeClick = (index: number) => {
    setPhase(index * 2);
    elapsedTimeRef.current = 0;
  };  
  return (
    <>
      {!disableCameraAnimation && <OrbitalCamera speed={orbitSpeed} />}
      
      <BackgroundStars />
      <BackgroundFog color={colors.background} />      
      <EnhancedFibonacciSpiral position={[0, 0, -2]} color={colors.golden} complexity={1.2} />
      <VesicaPiscis position={[0, 0, -1]} radius={4} pulseSpeed={0.3} color={colors.golden} />
      <VesicaPiscis position={[0, 0, -1.5]} radius={6} opacity={0.2} pulseSpeed={0.2} color={colors.golden} />
      <VesicaPiscis position={[0, 0, -3]} radius={10} opacity={0.1} pulseSpeed={0.1} color={colors.golden} />
      
      <EnhancedFibonacciSpiral position={[0, 0, -5]} color={colors.golden} opacity={0.2} rotationSpeed={0.03} complexity={0.9} />
      
      {processNodes.map((node, index) => (
        <ProcessNode
          key={node.id}
          position={node.position}
          title={node.title}
          description={node.description}
          color={colors[node.id as keyof typeof colors]}
          active={activeNode === index}
          onClick={() => handleNodeClick(index)}
        />
      ))}
      
      {flowsActive.empathyToReasoning && (
        <EnergyFlow 
          from={processNodes[0].position} 
          to={processNodes[1].position} 
          active={true} 
          intensity={1.2}
          color={colors.energy}
        />
      )}
      
      {flowsActive.reasoningToMaterialization && (
        <EnergyFlow 
          from={processNodes[1].position} 
          to={processNodes[2].position} 
          active={true} 
          intensity={1.2}
          color={colors.energy}
        />
      )}
      
      {flowsActive.materializationToEmpathy && (
        <EnergyFlow 
          from={processNodes[2].position} 
          to={processNodes[0].position} 
          active={true}
          intensity={1.2}
          color={colors.energy}
        />
      )}
      
      <ambientLight intensity={isDarkMode ? 0.3 : 0.4} color={isDarkMode ? "#ffffff" : "#e0e0e0"} />
      
      <directionalLight position={[5, 5, 5]} intensity={isDarkMode ? 0.5 : 0.4} color="#ffffff" />
      <directionalLight position={[-5, -5, -5]} intensity={isDarkMode ? 0.3 : 0.2} color={isDarkMode ? "#00ffff" : "#8B7DD1"} />
      
      <pointLight position={processNodes[0].position.toArray()} intensity={activeNode === 0 ? 1 : 0} color={colors.empathy} />
      <pointLight position={processNodes[1].position.toArray()} intensity={activeNode === 1 ? 1 : 0} color={colors.reasoning} />
      <pointLight position={processNodes[2].position.toArray()} intensity={activeNode === 2 ? 1 : 0} color={colors.materialization} />
    </>
  );
};

const GoldenRatioDesignThinking: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [useManualControls, setUseManualControls] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [renderError, setRenderError] = useState<string | null>(null);
  const [webGLSupported, setWebGLSupported] = useState(true);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [performanceMode, setPerformanceMode] = useState<'high' | 'medium' | 'low'>('high');
  
  const { isDarkMode } = useTheme();
    
  useEffect(() => {
    console.log("GoldenRatioDesignThinking mounted - rendering Three.js content");
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReducedMotion(prefersReducedMotion);
    
    const isHighPerformance = checkPerformanceRequirements();
    setPerformanceMode(isHighPerformance ? 'high' : 'medium');
    
    colors = createColorPalette(isDarkMode);
      
    const handleContextLost = (event: Event) => {
      event.preventDefault();
      console.error("WebGL context lost");
      setRenderError("WebGL context lost. Attempting to recover...");
      setIsLoaded(false);
      
      if ((window as any).gc) {
        try {
          (window as any).gc();
        } catch (e) {
          console.log('Manual garbage collection unavailable');
        }
      }
      
      setPerformanceMode('low');
      
      let attempts = 0;
      const maxAttempts = 3;
      const attemptRecovery = () => {
        if (attempts < maxAttempts) {
          attempts++;
          const delay = Math.pow(2, attempts) * 500;
          console.log(`Recovery attempt ${attempts} in ${delay}ms`);
          setTimeout(() => {
            setRenderError(`Recovery attempt ${attempts}/${maxAttempts}...`);
            
            if (attempts === maxAttempts) {
              setRenderError("Could not recover WebGL context automatically.");
            }
          }, delay);
        }
      };
      
      attemptRecovery();
    };

    const handleContextRestored = () => {
      console.log("WebGL context restored");
      setRenderError(null);
      
      setTimeout(() => {
        setIsLoaded(true);
        console.log("Context recovered successfully");
      }, 500);
    };
    
    const webglInfo = detectWebGL();
    if (!webglInfo.supported) {
      console.error('WebGL not supported:', webglInfo.error);
      setRenderError(`WebGL not available: ${webglInfo.error ? String(webglInfo.error) : 'Unknown error'}`);
      setWebGLSupported(false);
      return;
    }
    
    const performanceTier = checkPerformanceRequirements();
    if (performanceTier === PerformanceTier.LOW) {
      setPerformanceMode('low');
    } else if (performanceTier === PerformanceTier.MEDIUM) {
      setPerformanceMode('medium');
    } else {
      setPerformanceMode('high');
    }
    
    console.log('WebGL info:', {
      version: webglInfo.version,
      contextType: webglInfo.contextType,
      performanceTier,
      initialPerformanceMode: performanceMode
    });
    
    const timer = setTimeout(() => {
      setIsLoaded(true);
      console.log("GoldenRatioDesignThinking marked as loaded");
    }, 1200);
      
    return () => {
      clearTimeout(timer);
    };
  }, [isDarkMode]);
  
  if (!webGLSupported) {
    return (
      <div className="w-full h-full flex items-center justify-center" 
           style={{ 
             background: isDarkMode ? '#2A2A42' : '#F5F5FA', 
             minHeight: '100vh', 
             color: isDarkMode ? 'white' : '#2A2A42' 
           }}>
        <div className="text-center p-8 max-w-xl">
          <h2 className="text-3xl font-bold mb-4">Visualization Not Available</h2>
          <p className="mb-4">
            Your browser or device doesn't support WebGL, which is required for this 3D visualization.
          </p>
          {renderError && (
            <div className={`mt-4 p-4 ${isDarkMode ? 'bg-red-900/50' : 'bg-red-200/70'} rounded`}>
              <p className="text-sm opacity-80">{renderError}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  const bgColor = isDarkMode ? '#2A2A42' : '#F5F5FA';
  
  return (
    <div className="w-full h-full relative" style={{ 
      background: bgColor, 
      minHeight: '100vh', 
      position: 'relative'    
    }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={performanceMode === 'low' ? 1 : Math.min(window.devicePixelRatio || 1, 1.5)}
        frameloop={performanceMode === 'low' ? 'demand' : 'always'}
        gl={{ 
          alpha: false, 
          antialias: performanceMode !== 'low',
          powerPreference: performanceMode === 'low' ? 'low-power' : 'high-performance',
          precision: performanceMode === 'low' ? 'lowp' : 'mediump',
          failIfMajorPerformanceCaveat: false,
          stencil: false,
          depth: true,
          logarithmicDepthBuffer: true
        }}        onCreated={({ gl }) => {
          // Setup context loss handlers on the WebGL canvas
          const canvas = gl.domElement;
          canvas.addEventListener('webglcontextlost', (event: Event) => {
            event.preventDefault();
            console.error("WebGL context lost");
            setRenderError("WebGL context lost. Attempting to recover...");
            setIsLoaded(false);
            setPerformanceMode('low');
          });
          
          canvas.addEventListener('webglcontextrestored', () => {
            console.log("WebGL context restored");
            setRenderError(null);
            setTimeout(() => setIsLoaded(true), 500);
          });          // Add debug info
          console.log("WebGL initialized successfully");
        }}
        style={{ 
          width: '100%', 
          height: '100vh', 
          background: bgColor, 
          visibility: isLoaded ? 'visible' : 'hidden',
          position: 'absolute',
          top: 0,
          left: 0
        }}
      >
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          rotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
          enabled={useManualControls}
        />
        
        <Scene 
          disableCameraAnimation={useManualControls || isReducedMotion}
          orbitSpeed={isReducedMotion ? 0.2 : performanceMode === 'low' ? 0.3 : 0.5} 
        />
        
        {performanceMode !== 'low' && (
          <EffectComposer enabled={!isReducedMotion}>
            <Bloom 
              intensity={isDarkMode ? 1.2 : 0.8} 
              luminanceThreshold={isDarkMode ? 0.2 : 0.4}
              luminanceSmoothing={0.9}
              kernelSize={KernelSize.LARGE}
            />
            
            <ChromaticAberration
              offset={new Vector2(0.002, 0.002)} 
              radialModulation={true}
              modulationOffset={0.5}
            />
            
            <Vignette
              offset={0.3}
              darkness={isDarkMode ? 0.7 : 0.4}
              eskil={false}
              blendFunction={BlendFunction.NORMAL}
            />
            
            <SMAA />
          </EffectComposer>
        )}
      </Canvas>
        
      <button 
        className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full ${
          isDarkMode ? 'bg-white/10' : 'bg-flid-dark/10'
        } backdrop-blur-md flex items-center justify-center hover:bg-flid-accent/20 transition-all`}
        onClick={() => setShowDetails(!showDetails)}
      >
        <span className={`${isDarkMode ? 'text-white' : 'text-flid-dark'} text-xl font-bold`}>i</span>
      </button>
      
      <button 
        className={`absolute top-4 right-16 z-10 w-10 h-10 rounded-full ${
          isDarkMode ? 'bg-white/10' : 'bg-flid-dark/10'
        } backdrop-blur-md flex items-center justify-center hover:bg-flid-accent/20 transition-all`}
        onClick={() => setUseManualControls(!useManualControls)}
        title={useManualControls ? "Automatyczna kamera" : "Sterowanie ręczne"}
      >
        <span className={`${isDarkMode ? 'text-white' : 'text-flid-dark'} text-sm`}>
          {useManualControls ? "🔄" : "🖱️"}
        </span>
      </button>
      
      {performanceMode !== 'high' && (
        <div className={`absolute top-4 left-1/2 transform -translate-x-1/2 z-10 px-3 py-1 rounded-full ${
          isDarkMode ? 'bg-white/10' : 'bg-flid-dark/10'
        } backdrop-blur-md text-xs ${isDarkMode ? 'text-white/70' : 'text-flid-dark/70'}`}>
          {performanceMode === 'low' ? '⚠️ Tryb niskiej wydajności' : 'ℹ️ Tryb zoptymalizowany'}
        </div>
      )}
      
      <div className={`absolute top-4 left-4 ${isDarkMode ? 'text-white' : 'text-flid-dark'} p-4`}>
        <h2 className={`text-2xl font-bold mb-1 ${isDarkMode ? 'text-white/90' : 'text-flid-dark/90'}`}>
          Design Thinking
        </h2>
        <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-flid-dark/70'}`}>
          Wizualizacja w świętej geometrii
        </p>
      </div>
      
      {showDetails && (
        <div 
          className={`absolute inset-0 ${
            isDarkMode ? 'bg-black/70' : 'bg-white/70'
          } backdrop-blur-md flex items-center justify-center p-8 z-20`}
          onClick={() => setShowDetails(false)}
        >
          <div 
            className={`${
              isDarkMode ? 'bg-white/10' : 'bg-flid-dark/10'
            } backdrop-blur-md rounded-xl p-8 max-w-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-flid-dark'}`}>
              Metodologia Design Thinking
            </h2>
            <p className={`${isDarkMode ? 'text-white/80' : 'text-flid-dark/80'} mb-6`}>
              Nasza wizualizacja przedstawia proces Design Thinking w harmonii ze złotym podziałem i świętą geometrią, 
              tworząc holistyczne podejście do projektowania zorientowanego na człowieka.
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500/30 flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-300 text-2xl">1</span>
                </div>
                <h3 className={`${isDarkMode ? 'text-white' : 'text-flid-dark'} font-bold mb-1`}>Empatia</h3>
                <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-flid-dark/70'}`}>
                  Zrozumienie potrzeb i wyzwań użytkowników poprzez głęboką obserwację.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-purple-500/30 flex items-center justify-center mx-auto mb-2">
                  <span className="text-purple-300 text-2xl">2</span>
                </div>
                <h3 className={`${isDarkMode ? 'text-white' : 'text-flid-dark'} font-bold mb-1`}>Rozumowanie</h3>
                <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-flid-dark/70'}`}>
                  Analiza zdobytych informacji i definiowanie problemów do rozwiązania.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/30 flex items-center justify-center mx-auto mb-2">
                  <span className="text-green-300 text-2xl">3</span>
                </div>
                <h3 className={`${isDarkMode ? 'text-white' : 'text-flid-dark'} font-bold mb-1`}>Materializacja</h3>
                <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-flid-dark/70'}`}>
                  Transformacja pomysłów w prototypy i testowanie rozwiązań z użytkownikami.
                </p>
              </div>
            </div>
            
            <div className={`mt-6 pt-6 border-t ${isDarkMode ? 'border-white/20' : 'border-flid-dark/20'}`}>
              <p className={`${isDarkMode ? 'text-white/60' : 'text-flid-dark/60'} text-sm`}>
                Wizualizacja wykorzystuje złoty podział (φ = 1.618...) jako podstawę kompozycji, 
                symbolizując naturalne proporcje i harmonię w procesie projektowym.
              </p>
            </div>
            
            <button 
              className={`mt-6 px-6 py-2 ${
                isDarkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-flid-dark/10 hover:bg-flid-dark/20'
              } rounded-full ${isDarkMode ? 'text-white' : 'text-flid-dark'} transition-all`}
              onClick={() => setShowDetails(false)}
            >
              Zamknij
            </button>
          </div>
        </div>
      )}
      
      <div className={`absolute bottom-0 left-0 right-0 text-center ${
        isDarkMode ? 'text-white' : 'text-flid-dark'
      } p-4 ${
        isDarkMode ? 'bg-black/30' : 'bg-flid-dark/10'
      } backdrop-blur-sm`}>
        <p className="text-sm">Trzy etapy połączone złotym podziałem: Empatia · Rozumowanie · Materializacja</p>
      </div>
      
      {renderError && (
        <div className={`absolute inset-0 ${
          isDarkMode ? 'bg-red-500/70' : 'bg-red-200/70'
        } backdrop-blur-md flex items-center justify-center p-8 z-20`}>
          <div className={`${
            isDarkMode ? 'bg-white/10' : 'bg-flid-dark/10'
          } backdrop-blur-md rounded-xl p-8 max-w-2xl text-center`}>
            <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-flid-dark'}`}>
              Błąd renderowania
            </h2>
            <p className={`${isDarkMode ? 'text-white/80' : 'text-flid-dark/80'} mb-6`}>{renderError}</p>
            <button 
              className={`mt-6 px-6 py-2 ${
                isDarkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-flid-dark/10 hover:bg-flid-dark/20'
              } rounded-full ${isDarkMode ? 'text-white' : 'text-flid-dark'} transition-all`}
              onClick={() => setRenderError(null)}
            >
              Zamknij
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoldenRatioDesignThinking;
