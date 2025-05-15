/**
 * WebGL detection and performance utilities
 * Helps with WebGL context detection, loss handling, and performance requirements
 */

// WebGL version constants
export const WEBGL_VERSIONS = {
  WEBGL1: 'webgl',
  WEBGL2: 'webgl2',
};

// Performance tiers for adaptive rendering
export const PerformanceTier = {
  LOW: 'low' as const,     // Basic features, low resolution
  MEDIUM: 'medium' as const, // Most features, medium resolution
  HIGH: 'high' as const,   // All features, high resolution
  ULTRA: 'ultra' as const, // All features, maximum resolution and effects
} as const;

// Define the type based on the values
export type PerformanceTierType = typeof PerformanceTier[keyof typeof PerformanceTier];

// Context loss status tracking for recovery
let contextLossCount = 0;
let lastContextLossTime = 0;
const CONTEXT_RECOVERY_RESET_TIME = 30000; // 30 seconds without context loss resets the count

/**
 * Detects WebGL support and version
 * @returns Object with support status and version information
 */
export function detectWebGL() {
  try {
    // Try to create temporary canvas for detection
    const canvas = document.createElement('canvas');
    
    // Try WebGL2 first
    let gl = canvas.getContext(WEBGL_VERSIONS.WEBGL2);
    if (gl) {
      return {
        supported: true,
        version: 2,
        contextType: WEBGL_VERSIONS.WEBGL2,
        gl,
      };
    }
    
    // Fall back to WebGL1
    gl = canvas.getContext(WEBGL_VERSIONS.WEBGL1);
    if (gl) {
      return {
        supported: true,
        version: 1,
        contextType: WEBGL_VERSIONS.WEBGL1,
        gl,
      };
    }
    
    // No WebGL support
    return {
      supported: false,
      version: 0,
      contextType: null,
      gl: null,
    };
  } catch (e) {
    console.error("Error detecting WebGL support:", e);
    return {
      supported: false,
      version: 0,
      contextType: null,
      gl: null,
      error: e,
    };
  }
}

/**
 * Checks system performance to determine supported feature level
 * @returns PerformanceTier enum value
 */
export function checkPerformanceRequirements(): PerformanceTierType {
  const webGLInfo = detectWebGL();
  
  // No WebGL support means low performance
  if (!webGLInfo.supported) {
    return PerformanceTier.LOW;
  }
  
  // Check for mobile devices which generally have lower GPU power
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  // Get device pixel ratio as an indicator of screen density
  const pixelRatio = window.devicePixelRatio || 1;
  
  // Check for WebGL2 support
  if (webGLInfo.version >= 2) {
    if (isMobile) {
      return pixelRatio > 2 ? PerformanceTier.MEDIUM : PerformanceTier.HIGH;
    } else {
      return PerformanceTier.ULTRA;
    }
  } else {
    // WebGL1
    if (isMobile) {
      return PerformanceTier.LOW;
    } else {
      return PerformanceTier.MEDIUM;
    }
  }
}

/**
 * Context-aware performance tier adaptation
 * Adjusts performance tier based on WebGL capabilities, context loss history, and memory constraints
 * @param currentTier Current performance tier
 * @param contextLossCount Number of context loss events (optional)
 * @param forceDowngrade Whether to force a downgrade (e.g. after context loss)
 * @returns Recommended new performance tier
 */
export function adaptPerformanceTier(
  currentTier: PerformanceTierType,
  contextLossCount: number = 0,
  forceDowngrade: boolean = false
): PerformanceTierType {
  // Base performance tier from hardware capabilities
  const baseTier = checkPerformanceRequirements();
  
  // Apply context loss history to adjust tier
  let adaptedTier = baseTier;
  
  // If we've had context losses, reduce tier
  if (contextLossCount >= 5 || forceDowngrade) {
    // Severe issues - drop to low tier
    adaptedTier = PerformanceTier.LOW;
  } else if (contextLossCount >= 3) {
    // Moderate issues - drop by two tiers
    if (baseTier === PerformanceTier.ULTRA) {
      adaptedTier = PerformanceTier.MEDIUM;
    } else {
      adaptedTier = PerformanceTier.LOW;
    }
  } else if (contextLossCount >= 1) {
    // Minor issues - drop by one tier
    if (baseTier === PerformanceTier.ULTRA) {
      adaptedTier = PerformanceTier.HIGH;
    } else if (baseTier === PerformanceTier.HIGH) {
      adaptedTier = PerformanceTier.MEDIUM;
    } else if (baseTier === PerformanceTier.MEDIUM) {
      adaptedTier = PerformanceTier.LOW;
    }
  }
    // Check memory conditions (a key factor in context loss)
  try {
    // Chrome-specific memory API - needs proper type handling
    const perf = performance as any;
    if (perf && perf.memory) {
      const memoryInfo = perf.memory;
      // Check if we're using more than 80% of available JS heap
      if (memoryInfo.usedJSHeapSize / memoryInfo.jsHeapSizeLimit > 0.8) {
        // Memory pressure - reduce tier further if possible
        if (adaptedTier === PerformanceTier.ULTRA) {
          adaptedTier = PerformanceTier.HIGH;
        } else if (adaptedTier === PerformanceTier.HIGH) {
          adaptedTier = PerformanceTier.MEDIUM;
        } else if (adaptedTier === PerformanceTier.MEDIUM) {
          adaptedTier = PerformanceTier.LOW;
        }
      }
    }
  } catch (e) {
    // Memory API not available - no adjustments based on memory
    console.log("Memory metrics unavailable, skipping memory-based tier adaptation");
  }
  
  // Never upgrade beyond current tier with this function
  // (prevents bouncing between tiers)
  if (!forceDowngrade && currentTier < adaptedTier) {
    return currentTier;
  }
  
  return adaptedTier;
}

/**
 * Handler for WebGL context loss events
 * Implements exponential backoff for recovery attempts
 * @returns Object with handling status and recovery info
 */
export function handleContextLoss(canvas: HTMLCanvasElement) {
  const currentTime = Date.now();
  
  // Reset count if enough time has passed since last context loss
  if (currentTime - lastContextLossTime > CONTEXT_RECOVERY_RESET_TIME) {
    contextLossCount = 0;
  }
  
  // Update tracking info
  contextLossCount++;
  lastContextLossTime = currentTime;
  
  // Calculate backoff time for recovery - exponential with maximum cap
  const backoffTime = Math.min(1000 * Math.pow(2, contextLossCount - 1), 30000);
  console.warn(`WebGL context lost (${contextLossCount} times). Attempting recovery in ${backoffTime/1000}s`);
  
  // Implement recovery strategy based on loss frequency
  let recommendedTier = checkPerformanceRequirements();
  
  // More aggressive downgrading based on context loss frequency
  if (contextLossCount >= 5) {
    recommendedTier = PerformanceTier.LOW;
  } else if (contextLossCount >= 3) {
    if (recommendedTier === PerformanceTier.ULTRA) {
      recommendedTier = PerformanceTier.MEDIUM;
    } else if (recommendedTier === PerformanceTier.HIGH) {
      recommendedTier = PerformanceTier.LOW;
    } else {
      recommendedTier = PerformanceTier.LOW;
    }
  } else if (contextLossCount >= 2) {
    if (recommendedTier === PerformanceTier.ULTRA) {
      recommendedTier = PerformanceTier.HIGH;
    } else if (recommendedTier === PerformanceTier.HIGH) {
      recommendedTier = PerformanceTier.MEDIUM;
    } else {
      recommendedTier = PerformanceTier.LOW;
    }
  }
  
  // Create a promise-based recovery attempt that can be awaited
  const recoveryPromise = new Promise<{restored: boolean, gl?: WebGLRenderingContext | WebGL2RenderingContext | null}>((resolve) => {
    // Schedule recovery attempt with exponential backoff
    setTimeout(() => {
      try {
        // Force garbage collection attempt
        if ('gc' in window) {
          (window as any).gc();
        } else {
          // Alternative approach to encourage garbage collection
          const arr = new Array(1000).fill(new Array(10000));
          arr.length = 0;
        }
        
        // Try to restore context
        if (canvas && canvas.getContext) {
          // The browser will attempt to restore the context automatically
          // when we try to get it again
          const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
          if (gl) {
            console.log('WebGL context restored successfully');
            resolve({ restored: true, gl });
            return;
          }
        }
      } catch (e) {
        console.error('Error during WebGL context recovery:', e);
      }
      
      console.error('WebGL context recovery failed');
      resolve({ restored: false });
    }, backoffTime);
  });
  
  return {
    handled: true,
    contextLossCount,
    recommendedTier,
    backoffTime,
    recoveryPromise,
  };
}

/**
 * Setup WebGL context loss handlers for a canvas
 * @param canvas The canvas element to monitor
 * @param onContextLost Callback for context loss events
 * @param onContextRestored Callback for context restored events
 */
export function setupContextLossHandlers(
  canvas: HTMLCanvasElement,
  onContextLost?: () => void,
  onContextRestored?: () => void
) {
  // Handle context loss
  canvas.addEventListener('webglcontextlost', (event) => {
    event.preventDefault(); // Allow for automatic recovery
    console.warn('WebGL context lost, preventing default to allow recovery');
    
    // Call custom handler
    if (onContextLost) {
      onContextLost();
    }
    
    // Handle recovery
    handleContextLoss(canvas);
  }, false);
  
  // Handle context restoration
  canvas.addEventListener('webglcontextrestored', () => {
    console.log('WebGL context restored');
    
    // Call custom handler
    if (onContextRestored) {
      onContextRestored();
    }
  }, false);
}

/**
 * Preemptively check for potential WebGL issues
 * Use this before initializing complex WebGL scenes to avoid context loss
 * @param gl The WebGL context to analyze
 * @returns Object containing test results and recommendations 
 */
export function checkWebGLHealth(
  gl: WebGLRenderingContext | WebGL2RenderingContext
): {
  healthy: boolean;
  issues: string[];
  recommendations: string[];
} {
  const result = {
    healthy: true,
    issues: [] as string[],
    recommendations: [] as string[]
  };

  try {
    // Check if context is already lost
    if (gl.isContextLost()) {
      result.healthy = false;
      result.issues.push("WebGL context is already lost");
      result.recommendations.push("Refresh the page to recover");
      return result;
    }
    
    // Check maximum texture size (indicator of GPU capability)
    const maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
    if (maxTextureSize < 4096) {
      result.healthy = false;
      result.issues.push(`Low maximum texture size: ${maxTextureSize}`);
      result.recommendations.push("Use smaller textures and reduce scene complexity");
    }
    
    // Check shader precision support
    const fragmentHighp = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT);
    if (!fragmentHighp || fragmentHighp.precision === 0) {
      result.issues.push("Limited shader precision support");
      result.recommendations.push("Use 'mediump' or 'lowp' precision in shaders");
    }
    
    // Check maximum varying vectors (critical for complex shaders)
    const maxVaryings = gl.getParameter(gl.MAX_VARYING_VECTORS);
    if (maxVaryings < 8) {
      result.issues.push(`Limited varying vectors support: ${maxVaryings}`);
      result.recommendations.push("Simplify shader code");
    }
    
    // Check available memory if possible
    const perf = performance as any;
    if (perf && perf.memory) {
      const memoryInfo = perf.memory;
      const memoryUsageRatio = memoryInfo.usedJSHeapSize / memoryInfo.jsHeapSizeLimit;
      if (memoryUsageRatio > 0.7) {
        result.issues.push(`High memory usage: ${Math.round(memoryUsageRatio * 100)}%`);
        result.recommendations.push("Reduce scene complexity or texture sizes");
      }
    }
    
    // Check for WebGL2 specific features
    if ('createTransformFeedback' in gl) {
      // This is WebGL2
      result.recommendations.push("Consider using WebGL2 features like instancing for better performance");
    } else {
      result.recommendations.push("Consider using simpler shaders for better WebGL1 compatibility");
    }
    
    // Update healthy status based on issues
    if (result.issues.length > 0) {
      result.healthy = false;
    }
    
  } catch (e) {
    result.healthy = false;
    result.issues.push(`Error during WebGL health check: ${e instanceof Error ? e.message : String(e)}`);
    result.recommendations.push("Use low performance mode for better stability");
  }
  
  return result;
}

/**
 * Helper to force a restart of the WebGL context (useful when detecting problems)
 * @param canvas The canvas element to reset
 * @returns Promise that resolves when context is reset
 */
export async function forceContextReset(canvas: HTMLCanvasElement): Promise<boolean> {
  return new Promise((resolve) => {
    try {
      // Get the current GL context
      const currentContext = canvas.getContext('webgl2') || canvas.getContext('webgl');
      
      if (currentContext) {
        // Force context loss
        const loseExtension = currentContext.getExtension('WEBGL_lose_context');
        if (loseExtension) {
          // Set up one-time context restored handler
          const onRestored = () => {
            canvas.removeEventListener('webglcontextrestored', onRestored);
            resolve(true);
          };
          canvas.addEventListener('webglcontextrestored', onRestored);
          
          // Lose and restore context
          loseExtension.loseContext();
          setTimeout(() => {
            try {
              loseExtension.restoreContext();
            } catch (e) {
              console.error('Error restoring WebGL context:', e);
              resolve(false);
            }
          }, 500);
        } else {
          console.warn('WEBGL_lose_context extension not supported, cannot force reset');
          resolve(false);
        }
      } else {
        console.warn('No WebGL context found to reset');
        resolve(false);
      }
    } catch (e) {
      console.error('Error during forced context reset:', e);
      resolve(false);
    }
  });
}
