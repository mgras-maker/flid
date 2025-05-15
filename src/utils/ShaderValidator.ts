/**
 * Utilities for validating WebGL shader code
 * These functions help catch and prevent WebGL shader compilation errors
 */

/**
 * Tests a shader for compilation errors
 * @param gl WebGL context
 * @param shaderSource GLSL source code
 * @param shaderType gl.VERTEX_SHADER or gl.FRAGMENT_SHADER
 * @returns Object with success status and error message if any
 */
export function validateShader(
  gl: WebGLRenderingContext | WebGL2RenderingContext, 
  shaderSource: string, 
  shaderType: number
): { valid: boolean, errors: string | null } {
  try {
    // Create temporary shader object
    const shader = gl.createShader(shaderType);
    if (!shader) {
      return { valid: false, errors: "Failed to create shader object" };
    }

    // Set the shader source code
    gl.shaderSource(shader, shaderSource);
    
    // Compile the shader
    gl.compileShader(shader);
    
    // Check if it compiled successfully
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      // Compilation failed, get the error
      const error = gl.getShaderInfoLog(shader);
      gl.deleteShader(shader);
      return { valid: false, errors: error };
    }
    
    // Clean up temporary shader
    gl.deleteShader(shader);
    return { valid: true, errors: null };
  } catch (e) {
    return { 
      valid: false, 
      errors: e instanceof Error ? e.message : "Unknown shader validation error" 
    };
  }
}

/**
 * Helper function to check if the WebGL context supports specific features
 * @param gl WebGL context
 */
export function detectShaderCapabilities(
  gl: WebGLRenderingContext | WebGL2RenderingContext
): { 
  version: 1 | 2, 
  highPrecisionFloat: boolean,
  maxTextures: number,
  maxVaryings: number,
  maxUniforms: number,
  maxTextureSize: number
} {
  const isWebGL2 = 'createTransformFeedback' in gl;
  
  // Determine float precision support
  const highpSupport = gl.getShaderPrecisionFormat(
    gl.FRAGMENT_SHADER, 
    gl.HIGH_FLOAT
  );
  
  const highPrecisionFloat = !!(highpSupport && highpSupport.precision > 0);
  
  // Get other hardware limits
  const maxTextures = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
  const maxVaryings = gl.getParameter(gl.MAX_VARYING_VECTORS);
  const maxFragmentUniforms = gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS);
  const maxVertexUniforms = gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS);
  const maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
  
  return {
    version: isWebGL2 ? 2 : 1,
    highPrecisionFloat,
    maxTextures,
    maxVaryings,
    maxUniforms: Math.min(maxFragmentUniforms, maxVertexUniforms),
    maxTextureSize
  };
}

/**
 * Makes shader code more compatible with older WebGL implementations
 * @param shaderSource Original GLSL source
 * @param isWebGL2 Whether target is WebGL 2.0
 * @returns Modified shader source with better compatibility
 */
export function makeShaderMoreCompatible(
  shaderSource: string,
  isWebGL2: boolean
): string {
  let result = shaderSource;
  
  // Add precision qualifier if missing
  if (!result.includes('precision ')) {
    result = `precision ${isWebGL2 ? 'highp' : 'mediump'} float;\n` + result;
  }
  
  // Replace potentially problematic constructs
  if (!isWebGL2) {
    // Replace unsupported features in WebGL 1
    result = result.replace(/texture\(/g, 'texture2D(');
    
    // Remove WebGL2-only features
    result = result.replace(/^#version 300 es.*\n/gm, '');
    result = result.replace(/\bin\b/g, 'attribute');
    result = result.replace(/\bout\b/g, 'varying');
    result = result.replace(/\blayout.*in\b.*?;/g, '');
  }
  
  return result;
}

/**
 * Tests a complete shader program for linking errors
 * @param gl WebGL context 
 * @param vertexSource Vertex shader source code
 * @param fragmentSource Fragment shader source code
 * @returns Validation result with error details
 */
export function validateShaderProgram(
  gl: WebGLRenderingContext | WebGL2RenderingContext,
  vertexSource: string,
  fragmentSource: string
): { valid: boolean, vertexErrors: string | null, fragmentErrors: string | null, linkErrors: string | null } {
  // First check each shader separately
  const vertexResult = validateShader(gl, vertexSource, gl.VERTEX_SHADER);
  const fragmentResult = validateShader(gl, fragmentSource, gl.FRAGMENT_SHADER);
  
  // If either shader fails, return early
  if (!vertexResult.valid || !fragmentResult.valid) {
    return {
      valid: false,
      vertexErrors: vertexResult.errors,
      fragmentErrors: fragmentResult.errors,
      linkErrors: null
    };
  }
  
  try {
    // Create program and shaders
    const program = gl.createProgram();
    if (!program) {
      return { 
        valid: false, 
        vertexErrors: null, 
        fragmentErrors: null, 
        linkErrors: "Failed to create program object" 
      };
    }
    
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    
    if (!vertexShader || !fragmentShader) {
      gl.deleteProgram(program);
      return { 
        valid: false, 
        vertexErrors: !vertexShader ? "Failed to create vertex shader" : null, 
        fragmentErrors: !fragmentShader ? "Failed to create fragment shader" : null, 
        linkErrors: null 
      };
    }
    
    // Compile the shaders
    gl.shaderSource(vertexShader, vertexSource);
    gl.compileShader(vertexShader);
    
    gl.shaderSource(fragmentShader, fragmentSource);
    gl.compileShader(fragmentShader);
    
    // Attach and link program
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    
    // Check link status
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      const error = gl.getProgramInfoLog(program);
      
      // Clean up
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteProgram(program);
      
      return {
        valid: false,
        vertexErrors: null,
        fragmentErrors: null,
        linkErrors: error
      };
    }
    
    // Clean up
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    gl.deleteProgram(program);
    
    return {
      valid: true,
      vertexErrors: null,
      fragmentErrors: null,
      linkErrors: null
    };
  } catch (e) {
    return {
      valid: false,
      vertexErrors: null,
      fragmentErrors: null,
      linkErrors: e instanceof Error ? e.message : "Unknown error during shader linking"
    };
  }
}
