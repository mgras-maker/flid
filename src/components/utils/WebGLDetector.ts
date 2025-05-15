/**
 * WebGL detection and compatibility check
 * Used to gracefully handle WebGL not being available
 */

export interface WebGLInfo {
  supported: boolean;
  renderer?: string;
  vendor?: string;
  version?: string;
  error?: string;
}

/**
 * Detect WebGL support and get information about the renderer
 * @returns Object containing WebGL support information
 */
export function detectWebGL(): WebGLInfo {
  try {
    // Use OffscreenCanvas if available to prevent main thread blocking
    const canvas = typeof OffscreenCanvas !== 'undefined' 
      ? new OffscreenCanvas(1, 1) 
      : document.createElement('canvas');
    
    // More robust context options to prevent context loss
    const contextAttributes = {
      alpha: false,
      antialias: false,
      powerPreference: 'low-power',
      failIfMajorPerformanceCaveat: false,
      desynchronized: true,
      preserveDrawingBuffer: false
    };
      // Try to get WebGL 2 first, fall back to WebGL 1
    const gl = (
      (typeof canvas.getContext === 'function' && canvas.getContext('webgl2', contextAttributes)) || 
      (typeof canvas.getContext === 'function' && canvas.getContext('webgl', contextAttributes))
    );
    
    if (!gl) {
      return {
        supported: false,
        error: 'WebGL not supported by this browser'
      };
    }
    
    // Get WebGL information - need to cast to WebGLRenderingContext to access these properties
    const webGL = gl as WebGLRenderingContext;
    
    try {
      return {
        supported: true,
        renderer: webGL.getParameter(webGL.RENDERER) || 'Unknown',
        vendor: webGL.getParameter(webGL.VENDOR) || 'Unknown',
        version: webGL.getParameter(webGL.VERSION) || 'Unknown'
      };
    } catch (paramError) {
      // Some browsers may throw errors when accessing certain parameters
      return {
        supported: true,
        renderer: 'Parameter access restricted',
        vendor: 'Parameter access restricted',
        version: 'Parameter access restricted'
      };
    }
  } catch (error) {
    return {
      supported: false,
      error: error instanceof Error ? error.message : String(error)
    };
  }
}

/**
 * Check if the system meets minimum requirements for good Three.js performance
 * @returns Boolean indicating if the system meets minimum requirements
 */
export function checkPerformanceRequirements(): boolean {
  const webglInfo = detectWebGL();
  
  if (!webglInfo.supported) {
    return false;
  }
  
  // Check if we're running on a mobile device with potentially limited GPU
  const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  // If mobile, we might want to reduce complexity or suggest performance mode
  return !isMobile;
}

export default detectWebGL;
