import { useRef, useEffect } from 'react';

interface ShaderAnimationProps {
  className?: string;
  type?: 'flow' | 'wave' | 'nebula' | 'grid' | 'aurora';
  colorA?: string;
  colorB?: string;
}

const ShaderAnimation = ({
  className = '',
  type = 'flow',
  colorA = '#8B7DD1',
  colorB = '#9c27b0'
}: ShaderAnimationProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>(0);
  const isMountedRef = useRef(true);
  
  useEffect(() => {
    // Set mounted ref to true when component mounts
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const gl = canvas.getContext('webgl');
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }
    
    // Set canvas size with debounced resize handler
    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      const { width, height } = parent.getBoundingClientRect();
      const devicePixelRatio = window.devicePixelRatio || 1;
      
      // Use device pixel ratio for high-DPI displays but cap at 2 for performance
      const scale = Math.min(devicePixelRatio, 2);
      
      canvas.width = width * scale;
      canvas.height = height * scale;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    
    let resizeTimeout: number;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(resize, 200);
    };
    
    resize();
    window.addEventListener('resize', debouncedResize);
    
    // Also resize on orientation change for mobile devices
    window.addEventListener('orientationchange', resize);
    
    // Parse color to RGB
    const hexToRgb = (hex: string): [number, number, number] => {
      const r = parseInt(hex.substring(1, 3), 16) / 255;
      const g = parseInt(hex.substring(3, 5), 16) / 255;
      const b = parseInt(hex.substring(5, 7), 16) / 255;
      return [r, g, b];
    };
    
    const colorARgb = hexToRgb(colorA);
    const colorBRgb = hexToRgb(colorB);
    
    // Set up shaders
    const getVertexShader = () => {
      return `
        attribute vec2 position;
        void main() {
          gl_Position = vec4(position, 0.0, 1.0);
        }
      `;
    };
    
    const getFragmentShader = () => {      
      // Aurora shader - subtle professional animation
      if (type === 'aurora') {
        return `
          precision mediump float;
          uniform vec2 resolution;
          uniform float time;
          uniform vec3 colorA;
          uniform vec3 colorB;
          
          #define PI 3.14159265359
          
          // Simplex noise function
          vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
          vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
          vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
          
          float snoise(vec2 v) {
            const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                               -0.577350269189626, 0.024390243902439);
            vec2 i  = floor(v + dot(v, C.yy));
            vec2 x0 = v -   i + dot(i, C.xx);
            vec2 i1;
            i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
            vec4 x12 = x0.xyxy + C.xxzz;
            x12.xy -= i1;
            i = mod289(i);
            vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
            vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
            m = m*m;
            m = m*m;
            vec3 x = 2.0 * fract(p * C.www) - 1.0;
            vec3 h = abs(x) - 0.5;
            vec3 ox = floor(x + 0.5);
            vec3 a0 = x - ox;
            m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
            vec3 g;
            g.x  = a0.x  * x0.x  + h.x  * x0.y;
            g.yz = a0.yz * x12.xz + h.yz * x12.yw;
            return 130.0 * dot(m, g);
          }
          
          void main() {
            vec2 uv = gl_FragCoord.xy / resolution.xy;
            float aspect = resolution.x / resolution.y;
            vec2 center = vec2(0.5 * aspect, 0.5);
            uv.x *= aspect;
            
            // Very slow time for extremely subtle movement
            float t = time * 0.05;
            
            // Create extremely subtle, slow-moving layers
            float layer1 = snoise(vec2(uv.x * 1.0 + t * 0.03, uv.y * 1.2 - t * 0.02)) * 0.15;
            float layer2 = snoise(vec2(uv.x * 0.7 - t * 0.01, uv.y * 0.8 + t * 0.02)) * 0.1;
            
            // Combine layers for a subtle effect
            float layers = layer1 + layer2;
            
            // Create a soft gradient from bottom to top
            float vGradient = smoothstep(0.0, 1.0, uv.y);
            
            // Add a gentle radial gradient from center
            float radial = smoothstep(1.0, 0.0, length(uv - center) * 1.2);
            
            // Combine gradients
            float gradientMask = mix(vGradient, radial, 0.6);
            
            // Very subtle color mixing with reduced saturation
            vec3 baseColor = mix(colorA * 0.5, colorB * 0.5, gradientMask);
            
            // Add depth variations with the noise layers
            float depthVariation = smoothstep(0.45, 0.55, layers + 0.5);
            baseColor = mix(baseColor * 0.7, baseColor, depthVariation);
            
            // Darken edges very slightly
            float edgeDarkening = smoothstep(0.0, 0.7, length(uv - center));
            baseColor *= mix(1.0, 0.9, edgeDarkening);
            
            // Add extremely subtle highlights
            float highlights = pow(snoise(vec2(uv.x * 2.0 + t, uv.y * 2.0 - t * 0.5)) * 0.5 + 0.5, 16.0) * 0.1;
            baseColor += vec3(highlights);
            
            // Add slight vignette for professional look
            float vignette = 1.0 - smoothstep(0.7, 1.8, length(uv - center) * 0.8);
            baseColor *= vignette * 1.1;
            
            gl_FragColor = vec4(baseColor, 1.0);
          }
        `;
      } 
      // Grid shader
      else if (type === 'grid') {
        return `
          precision mediump float;
          uniform vec2 resolution;
          uniform float time;
          uniform vec3 colorA;
          uniform vec3 colorB;
          
          #define PI 3.14159265359
          
          // Smooth min function for blending
          float smin(float a, float b, float k) {
            float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
            return mix(b, a, h) - k * h * (1.0 - h);
          }
          
          // Random hash function
          float hash(vec2 p) {
            float h = dot(p, vec2(127.1, 311.7));
            return fract(sin(h) * 43758.5453123);
          }
          
          // Value noise implementation
          float noise(vec2 p) {
            vec2 i = floor(p);
            vec2 f = fract(p);
            
            vec2 u = f * f * (3.0 - 2.0 * f);
            
            float a = hash(i);
            float b = hash(i + vec2(1.0, 0.0));
            float c = hash(i + vec2(0.0, 1.0));
            float d = hash(i + vec2(1.0, 1.0));
            
            return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
          }
          
          // Draw a line with smooth edges
          float line(vec2 p, vec2 a, vec2 b, float thickness) {
            vec2 pa = p - a;
            vec2 ba = b - a;
            float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
            float d = length(pa - ba * h);
            return smoothstep(thickness, thickness * 0.5, d);
          }
          
          void main() {
            vec2 uv = gl_FragCoord.xy / resolution.xy;
            float aspect = resolution.x / resolution.y;
            uv.x *= aspect;
            
            // Add some movement to the whole grid
            float t = time * 0.2;
            
            // Grid cells
            float cellSize = 0.1;
            float gridIntensity = 0.4;
            vec2 grid = fract(uv / cellSize) - 0.5;
            
            // Calculate distance to grid lines
            float gridX = smoothstep(0.02, 0.0, abs(grid.x));
            float gridY = smoothstep(0.02, 0.0, abs(grid.y));
            float gridLines = max(gridX, gridY) * gridIntensity;
            
            // Add animated diagonal lines
            vec2 pos = uv;
            pos.x += sin(pos.y * 4.0 + t) * 0.03;
            pos.y += sin(pos.x * 3.0 - t * 0.7) * 0.03;
            
            float diagonals = 0.0;
            for (int i = 0; i < 3; i++) {
              float fi = float(i);
              float offset = fi * 0.3;
              float speed = 0.2 + fi * 0.1;
              
              // Moving diagonal lines in both directions
              float diag1 = line(pos, vec2(-0.5 + mod(t * speed + offset, 2.0), -0.5), 
                                     vec2(1.5 - mod(t * speed + offset, 2.0), 1.5), 0.004);
              float diag2 = line(pos, vec2(-0.5, 1.5 - mod(t * speed + offset, 2.0)), 
                                     vec2(1.5, -0.5 + mod(t * speed + offset, 2.0)), 0.004);
              
              diagonals += (diag1 + diag2) * (0.3 - fi * 0.05);
            }
            
            // Add some pulsing nodes at grid intersections
            float nodes = 0.0;
            for (int i = 0; i < 5; i++) {
              for (int j = 0; j < 5; j++) {
                float fi = float(i);
                float fj = float(j);
                
                vec2 nodePos = vec2(fi * 0.2 + 0.1, fj * 0.2 + 0.1);
                
                // Make some nodes move slightly
                nodePos.x += sin(time * (0.2 + fract(fi * fj * 0.1)) + fi * PI) * 0.02;
                nodePos.y += cos(time * (0.3 + fract(fi + fj * 0.1)) + fj * PI) * 0.02;
                
                float pulse = sin(time * (1.0 + 0.2 * hash(vec2(fi, fj))) + fi * fj) * 0.5 + 0.5;
                float nodeSize = 0.005 + 0.005 * pulse;
                
                float node = smoothstep(nodeSize, nodeSize * 0.5, length(pos - nodePos));
                // Only activate certain nodes
                if (hash(vec2(fi * 10.0, fj * 10.0)) > 0.5) {
                  nodes += node * (0.6 + 0.4 * pulse);
                }
              }
            }
            
            // Add data-flow effect along some grid lines
            float dataFlow = 0.0;
            for (int i = 0; i < 3; i++) {
              float fi = float(i);
              float speed = 0.2 + fi * 0.3;
              float thickness = 0.005 - fi * 0.001;
              
              // Horizontal data flows
              float y = 0.1 + fi * 0.3;
              float x = mod(time * speed, 1.2) - 0.1;
              float flow = line(pos, vec2(x, y), vec2(x + 0.2, y), thickness);
              
              // Vertical data flows
              x = 0.2 + fi * 0.25;
              y = mod(time * speed * 0.7, 1.2) - 0.1;
              flow += line(pos, vec2(x, y), vec2(x, y + 0.2), thickness);
              
              dataFlow += flow * (0.6 - fi * 0.1);
            }
            
            // Combine all elements
            float finalPattern = gridLines * 0.8 + diagonals + nodes + dataFlow;
            
            // Add background glow effect
            float glow = 0.0;
            for (int i = 0; i < 3; i++) {
              float fi = float(i);
              vec2 center = vec2(0.5 * aspect, 0.5);
              center.x += sin(time * (0.1 + fi * 0.05)) * 0.2;
              center.y += cos(time * (0.1 + fi * 0.05)) * 0.1;
              
              float dist = length(uv - center);
              float radius = 0.4 + sin(time * 0.2 + fi) * 0.2;
              glow += smoothstep(radius, radius * 0.5, dist) * 0.2;
            }
            
            // Color gradient background
            vec3 bgColor = mix(colorB * 0.2, colorA * 0.3, uv.y);
            bgColor = mix(bgColor, mix(colorA, colorB, 0.5) * 0.5, glow);
            
            // Final color composition
            vec3 gridColor = mix(colorA, colorB, sin(pos.x * 5.0 - time) * 0.5 + 0.5);
            vec3 finalColor = bgColor + gridColor * finalPattern;
            
            gl_FragColor = vec4(finalColor, 1.0);
          }
        `;
      } 
      // Wave shader
      else if (type === 'wave') {
        return `
          precision mediump float;
          uniform vec2 resolution;
          uniform float time;
          uniform vec3 colorA;
          uniform vec3 colorB;
          
          #define PI 3.14159265359
          
          // Smooth min function
          float smin(float a, float b, float k) {
            float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
            return mix(b, a, h) - k * h * (1.0 - h);
          }
          
          // This creates a smoother wave pattern
          float smoothWave(float x, float freq, float amp, float shift) {
            return sin(x * freq + shift) * amp;
          }
          
          void main() {
            vec2 uv = gl_FragCoord.xy / resolution.xy;
            float aspect = resolution.x / resolution.y;
            vec2 center = vec2(0.5 * aspect, 0.5);
            
            // Adjust UV for aspect ratio
            vec2 p = vec2(uv.x * aspect, uv.y);
            
            // Time variables
            float t = time * 0.3;
            float slowTime = time * 0.15;
            
            // Create multiple layers of waves
            float wave1 = smoothWave(p.x, 4.0, 0.04, t);
            float wave2 = smoothWave(p.x, 7.0, 0.025, t * 1.3);
            float wave3 = smoothWave(p.x, 10.0, 0.015, t * 0.7);
            float wave4 = smoothWave(p.x, 15.0, 0.01, t * 1.5);
            
            // Combine waves with varying weights for natural look
            float waveY = 0.5 + wave1 + wave2 + wave3 + wave4;
            
            // Distance to the wave
            float dist = abs(p.y - waveY);
            
            // Create multiple glowing lines
            float line1 = smoothstep(0.003, 0.0, dist);
            float glow1 = exp(-dist * 30.0) * 0.8;
            float glow2 = exp(-dist * 15.0) * 0.3;
            
            // Secondary waves with offset
            float secWave = waveY + sin(time * 0.2) * 0.1;
            float secDist = abs(p.y - secWave - 0.1);
            float secLine = smoothstep(0.002, 0.0, secDist);
            float secGlow = exp(-secDist * 35.0) * 0.5;
            
            // Third wave (more subtle)
            float thirdWave = waveY - 0.08;
            float thirdDist = abs(p.y - thirdWave);
            float thirdGlow = exp(-thirdDist * 25.0) * 0.3;
            
            // Background gradient
            vec3 gradientColor = mix(colorA * 0.2, colorB * 0.2, p.y);
            
            // Wave colors
            vec3 waveColor1 = mix(colorA, colorB, sin(p.x * 5.0 + t) * 0.5 + 0.5);
            vec3 waveColor2 = mix(colorB, colorA, cos(p.x * 3.0 - t * 0.7) * 0.5 + 0.5);
            
            // Combine all effects
            vec3 finalColor = gradientColor;
            finalColor += waveColor1 * (line1 + glow1);
            finalColor += waveColor2 * (secLine + secGlow);
            finalColor += mix(waveColor1, waveColor2, 0.5) * thirdGlow;
            
            // Add subtle vertical light beams
            float beams = 0.0;
            for(int i = 0; i < 5; i++) {
              float fi = float(i);
              float xPos = mod(fi * 0.17 + slowTime * (0.1 + fi * 0.05), 1.0) * aspect;
              float width = 0.03 + fi * 0.01;
              beams += smoothstep(width, 0.0, abs(p.x - xPos)) * 0.1;
            }
            
            finalColor += mix(colorA, colorB, sin(time) * 0.5 + 0.5) * beams;
            
            // Add a slight vignette effect
            float vignette = 1.0 - smoothstep(0.5, 1.5, length(p - center) * 0.8);
            finalColor *= vignette * 1.2;
            
            gl_FragColor = vec4(finalColor, 1.0);
          }
        `;
      } 
      // Flow shader
      else if (type === 'flow') {
        return `
          precision mediump float;
          uniform vec2 resolution;
          uniform float time;
          uniform vec3 colorA;
          uniform vec3 colorB;
          
          #define PI 3.14159265359
          
          // FBM noise implementation
          float hash(vec2 p) {
            float h = dot(p, vec2(127.1, 311.7));
            return fract(sin(h) * 43758.5453123);
          }
          
          float noise(vec2 p) {
            vec2 i = floor(p);
            vec2 f = fract(p);
            
            vec2 u = f * f * (3.0 - 2.0 * f);
            
            float a = hash(i);
            float b = hash(i + vec2(1.0, 0.0));
            float c = hash(i + vec2(0.0, 1.0));
            float d = hash(i + vec2(1.0, 1.0));
            
            return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
          }
          
          float fbm(vec2 p) {
            float value = 0.0;
            float amplitude = 0.5;
            float frequency = 1.0;
            
            // Domain warping for more interesting patterns
            p += sin(p.yx * 0.5) * 0.5;
            
            for (int i = 0; i < 5; i++) {
              value += amplitude * noise(p * frequency);
              amplitude *= 0.5;
              frequency *= 2.0;
              
              // Rotate to avoid axis-aligned patterns
              p = vec2(p.x * 0.866 - p.y * 0.5, p.x * 0.5 + p.y * 0.866);
            }
            
            return value;
          }
          
          void main() {
            vec2 uv = gl_FragCoord.xy / resolution.xy;
            float aspect = resolution.x / resolution.y;
            
            // Adjust for aspect ratio
            uv.x *= aspect;
            
            // Center coordinates
            vec2 center = vec2(0.5 * aspect, 0.5);
            
            // Calculate distance from center for radial effects
            float dist = length(uv - center);
            
            // Animation time
            float t = time * 0.3;
            
            // Base flow pattern
            float flow = fbm(vec2(uv.x * 1.5 - t * 0.2, uv.y * 1.5 - t * 0.1));
            
            // Add some swirling motion
            float angle = atan(uv.y - center.y, uv.x - center.x);
            float swirl = sin(dist * 10.0 - t + angle * 3.0) * 0.15;
            
            // Combine patterns with motion
            float pattern = flow + swirl;
            pattern += fbm(vec2(uv.x * 3.0 + t * 0.1, uv.y * 3.0)) * 0.3;
            
            // Create ripple effect
            float ripples = 0.0;
            for (int i = 0; i < 3; i++) {
              float fi = float(i);
              float speed = 0.15 + fi * 0.08;
              float scale = 10.0 + fi * 5.0;
              float t_offset = t * speed + fi * 1.7;
              
              // Expanding ring
              float ring = abs(sin(dist * scale - t_offset) * 0.5 + 0.5);
              ring = pow(ring, 3.0) * 0.5;
              
              ripples += ring;
            }
            
            // Combine all effects
            float finalPattern = pattern * 0.6 + ripples * 0.4;
            finalPattern = pow(finalPattern, 1.5);
            
            // Edge glow effect
            float edge = smoothstep(0.4, 0.5, dist) * smoothstep(0.7, 0.6, dist);
            finalPattern += edge * 0.2;
            
            // Create vibrant color mix
            vec3 color1 = mix(colorA, colorA * 1.4, finalPattern);
            vec3 color2 = mix(colorB * 0.8, colorB * 1.2, 1.0 - finalPattern);
            vec3 finalColor = mix(color1, color2, finalPattern);
            
            // Add some subtle highlights
            float highlight = pow(1.0 - dist, 4.0) * 0.3;
            finalColor += vec3(highlight);
            
            // Radial falloff for soft edges
            float alpha = smoothstep(1.2, 0.5, dist);
            
            gl_FragColor = vec4(finalColor, alpha);
          }
        `;
      }
      // Nebula shader (default)
      else {
        return `
          precision mediump float;
          uniform vec2 resolution;
          uniform float time;
          uniform vec3 colorA;
          uniform vec3 colorB;
          
          #define PI 3.14159265359
          
          float rand(vec2 co) {
            return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
          }
          
          float noise(vec2 p) {
            vec2 ip = floor(p);
            vec2 u = fract(p);
            u = u * u * (3.0 - 2.0 * u);
            
            float res = mix(
              mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
              mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x),
              u.y
            );
            return res * res;
          }
          
          // Simplex-like noise function
          vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
          vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
          vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
          
          float snoise(vec2 v) {
            const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                                0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                                -0.577350269189626,  // -1.0 + 2.0 * C.x
                                0.024390243902439); // 1.0 / 41.0
            vec2 i  = floor(v + dot(v, C.yy));
            vec2 x0 = v -   i + dot(i, C.xx);
            vec2 i1;
            i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
            vec4 x12 = x0.xyxy + C.xxzz;
            x12.xy -= i1;
            i = mod289(i);
            vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
            vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
            m = m*m;
            m = m*m;
            vec3 x = 2.0 * fract(p * C.www) - 1.0;
            vec3 h = abs(x) - 0.5;
            vec3 ox = floor(x + 0.5);
            vec3 a0 = x - ox;
            m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
            vec3 g;
            g.x  = a0.x  * x0.x  + h.x  * x0.y;
            g.yz = a0.yz * x12.xz + h.yz * x12.yw;
            return 130.0 * dot(m, g);
          }
          
          void main() {
            vec2 uv = gl_FragCoord.xy / resolution.xy;
            uv.x *= resolution.x / resolution.y;
            
            // Center the coordinates
            vec2 p = uv - 0.5;
            float angle = atan(p.y, p.x);
            float dist = length(p);
            
            // Create a spiral pattern
            float spiral = 
              snoise(vec2(3.0*angle + 5.0*dist - time*0.2, 
                          4.0*angle - 3.0*dist + time*0.1)) * 0.5 + 0.5;
            
            // Add multiple layers of noise
            float n1 = snoise(p * 3.0 + time * 0.05) * 0.5 + 0.5;
            float n2 = snoise(p * 6.0 - time * 0.07) * 0.25 + 0.25;
            float n3 = snoise(p * 12.0 + vec2(sin(time*0.1), cos(time*0.13)) * 0.3) * 0.125 + 0.125;
            
            // Create cosmic dust effect
            float cosmic = n1 * 0.65 + n2 * 0.25 + n3 * 0.1;
            cosmic *= smoothstep(1.0, 0.2, dist); // Center concentration
            
            // Combine patterns
            float pattern = cosmic * 0.7 + spiral * 0.3;
            
            // Create color based on pattern
            vec3 baseColor = mix(colorA, colorB, pattern);
            
            // Add brightness variation
            float brightness = sin(dist * 20.0 - time * 0.3) * 0.5 + 0.5;
            brightness = pow(brightness, 3.0) * 0.15;
            
            // Add stars
            float star = pow(rand(floor(uv * 100.0)), 40.0) * 4.0;
            
            // Add moving stars
            float movingStar = 0.0;
            for(int i = 0; i < 3; i++) {
              float t = mod(time * (0.1 + float(i) * 0.05) + float(i) * 1.7, 10.0);
              float starX = mod(t * 0.6 + float(i) * 0.3, 1.0);
              float starY = mod(sin(t * 0.3) * 0.5 + 0.5, 1.0);
              vec2 starPos = vec2(starX, starY);
              float starDist = distance(uv, starPos);
              float s = 0.005 / (starDist + 0.001);
              movingStar += s * (0.6 + sin(time * 2.0 + float(i)) * 0.4);
            }
            
            // Final color
            vec3 color = baseColor + brightness + vec3(star) + vec3(movingStar);
            
            gl_FragColor = vec4(color, 1.0);
          }
        `;
      }
    };
    
    // Create and compile shaders
    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) {
        console.error('Failed to create shader');
        return null;
      }
      
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compilation failed: ' + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      
      return shader;
    };
    
    const vertexShader = createShader(gl.VERTEX_SHADER, getVertexShader());
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, getFragmentShader());
    
    if (!vertexShader || !fragmentShader) return;
    
    // Create shader program
    const program = gl.createProgram();
    if (!program) {
      console.error('Failed to create program');
      return;
    }
    
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program linking failed: ' + gl.getProgramInfoLog(program));
      return;
    }
    
    gl.useProgram(program);
    
    // Create and bind buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    
    // Create a rectangle covering the whole canvas
    const positions = [
      -1.0, -1.0,
       1.0, -1.0,
      -1.0,  1.0,
       1.0,  1.0
    ];
    
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    
    // Get attribute location
    const positionAttributeLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);
    
    // Get uniform locations
    const timeLocation = gl.getUniformLocation(program, 'time');
    const resolutionLocation = gl.getUniformLocation(program, 'resolution');
    const colorALocation = gl.getUniformLocation(program, 'colorA');
    const colorBLocation = gl.getUniformLocation(program, 'colorB');
    
    // Ensure the program is currently being used
    gl.useProgram(program);
    
    // Set up uniform values - check if locations are valid
    if (resolutionLocation) {
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
    }
    
    if (colorALocation) {
      gl.uniform3f(colorALocation, colorARgb[0], colorARgb[1], colorARgb[2]);
    }
    
    if (colorBLocation) {
      gl.uniform3f(colorBLocation, colorBRgb[0], colorBRgb[1], colorBRgb[2]);
    }
    
    // Animation loop with adaptive frame rate
    const startTime = Date.now();
    let frameCounter = 0;
    let fpsTimer = 0;
    let fps = 60;
    let frameSkip = 0;
    
    const animate = (timestamp: number) => {
      // Check if component is still mounted and canvas exists
      if (!isMountedRef.current || !canvas || !gl || !program) {
        return;
      }
      
      // Calculate time since start
      const time = (Date.now() - startTime) / 1000; // Convert to seconds
      
      // Adaptive frame rendering
      if (frameSkip > 0) {
        frameSkip--;
        animationFrameId.current = requestAnimationFrame(animate);
        return;
      }
      
      // Simple FPS counter
      if (timestamp - fpsTimer > 1000) {
        fps = frameCounter;
        frameCounter = 0;
        fpsTimer = timestamp;
        
        // Adaptive quality - skip frames if FPS is too low
        if (fps < 30) {
          frameSkip = 1; // Skip every other frame
        } else {
          frameSkip = 0;
        }
      }
      frameCounter++;
      
      try {
        // Make sure the correct program is active
        gl.useProgram(program);
        
        // Update shader uniforms - only if the locations are valid
        if (timeLocation !== null && timeLocation !== undefined) {
          gl.uniform1f(timeLocation, time);
        }
        
        // Make sure resolution is up to date in case of resize
        if (resolutionLocation !== null && resolutionLocation !== undefined) {
          gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
        }
        
        // Render frame
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      } catch (error) {
        console.error('WebGL rendering error:', error);
        // Stop animation on error to prevent console spam
        return;
      }
      
      // Continue animation if still mounted
      if (isMountedRef.current) {
        animationFrameId.current = requestAnimationFrame(animate);
      }
    };
    
    // Start animation
    requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      // Mark component as unmounted to stop animation loop
      isMountedRef.current = false;
      
      window.removeEventListener('resize', debouncedResize);
      window.removeEventListener('orientationchange', resize);
      cancelAnimationFrame(animationFrameId.current);
      
      // Clean up WebGL resources
      if (gl) {
        if (program) gl.deleteProgram(program);
        if (vertexShader) gl.deleteShader(vertexShader);
        if (fragmentShader) gl.deleteShader(fragmentShader);
        if (positionBuffer) gl.deleteBuffer(positionBuffer);
      }
    };
  }, [type, colorA, colorB]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`w-full h-full ${className}`}
    />
  );
};

export default ShaderAnimation;
