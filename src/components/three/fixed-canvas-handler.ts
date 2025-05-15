import { validateShader, makeShaderMoreCompatible, validateShaderProgram } from '../../utils/ShaderValidator';

/**
 * Handle the Canvas onCreated event with proper error handling for shaders
 */
export const handleCanvasCreated = (
  params: { gl: any },
  setRenderError: (error: string | null) => void, 
  setIsLoaded: (loaded: boolean) => void,
  setPerformanceMode: (mode: 'high' | 'medium' | 'low') => void,
  shaderMaterials: Record<string, {
    vertexShader?: string;
    fragmentShader?: string;
    name?: string;
  }>
) => {
  const { gl } = params;
  
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
  });
  
  // Get WebGL context for shader validation
  const glContext = gl.getContext();
  const isWebGL2 = glContext instanceof WebGL2RenderingContext;
  
  // Add debug info
  console.log("WebGL initialized successfully", {
    isWebGL2,
    extensions: glContext.getSupportedExtensions(),
    maxTextures: glContext.getParameter(glContext.MAX_TEXTURE_IMAGE_UNITS),
    renderer: glContext.getParameter(glContext.RENDERER),
    vendor: glContext.getParameter(glContext.VENDOR)
  });
  
  // Validate all shader materials if provided
  if (shaderMaterials && Object.keys(shaderMaterials).length > 0) {
    try {
      for (const [name, material] of Object.entries(shaderMaterials)) {
        if (material.vertexShader && material.fragmentShader) {
          console.log(`Validating ${name || 'unnamed'} shader`);
          
          // Make shader more compatible with different WebGL versions
          const vertexShader = makeShaderMoreCompatible(material.vertexShader, isWebGL2);
          const fragmentShader = makeShaderMoreCompatible(material.fragmentShader, isWebGL2);
          
          // Validate each shader separately
          const vertexResult = validateShader(glContext, vertexShader, glContext.VERTEX_SHADER);
          if (!vertexResult.valid) {
            console.error(`Vertex shader validation failed for ${name || 'unnamed'}:`, vertexResult.errors);
          }
          
          const fragmentResult = validateShader(glContext, fragmentShader, glContext.FRAGMENT_SHADER);
          if (!fragmentResult.valid) {
            console.error(`Fragment shader validation failed for ${name || 'unnamed'}:`, fragmentResult.errors);
          }
          
          // Validate program linking
          const programResult = validateShaderProgram(glContext, vertexShader, fragmentShader);
          if (!programResult.valid) {
            console.error(`Program linking failed for ${name || 'unnamed'}:`, {
              linkErrors: programResult.linkErrors,
              vertexErrors: programResult.vertexErrors,
              fragmentErrors: programResult.fragmentErrors
            });
          } else {
            console.log(`✅ ${name || 'unnamed'} shader validated successfully`);
          }
        } else {
          console.warn(`Cannot validate ${name || 'unnamed'} shader: missing vertex or fragment shader source`);
        }
      }
    } catch (error) {
      console.error("Shader validation error:", error);
    }
  }
  
  // Force a garbage collection if available (can help with memory issues)
  if (typeof window !== 'undefined' && (window as any).gc) {
    try {
      (window as any).gc();
    } catch (e) {
      // Manual garbage collection not available - that's fine
    }
  }
};
