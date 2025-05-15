import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { detectWebGL } from '../../utils/WebGLDetector';

interface ThreeJsErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ThreeJsErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  webGLSupported: boolean;
}

/**
 * Error boundary specifically designed for Three.js components
 * Handles common Three.js errors and provides helpful diagnostics
 */
class ThreeJsErrorBoundary extends Component<ThreeJsErrorBoundaryProps, ThreeJsErrorBoundaryState> {
  constructor(props: ThreeJsErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      webGLSupported: true
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ThreeJsErrorBoundaryState> {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log the error to an error reporting service
    console.error('Three.js error caught:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo
    });
    
    // Check if this is related to WebGL support
    if (
      error.message.includes('WebGL') || 
      error.message.includes('context') ||
      error.message.includes('shader') ||
      error.message.includes('INVALID_OPERATION') ||
      error.message.includes('GL_')
    ) {
      console.warn('Possible WebGL support issue detected');
      
      // Verify WebGL support
      const webGLInfo = detectWebGL();
      if (!webGLInfo.supported) {
        this.setState({ webGLSupported: false });
      }
    }
  }
  
  // Allow retry
  handleRetry = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      // If we provided a custom fallback, use it
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
      // Otherwise show our default error UI
      return (
        <div className="p-4 w-full h-full flex flex-col items-center justify-center bg-gray-900 rounded-lg text-white" style={{ minHeight: "400px" }}>
          <div className="bg-black/50 p-6 rounded-xl max-w-xl text-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-16 w-16 text-red-500 mx-auto mb-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
              />
            </svg>
            
            <h2 className="text-xl font-bold mb-2">Visualization Error</h2>
            
            {this.state.webGLSupported ? (
              <p className="mb-4 text-gray-300">
                There was an error rendering the 3D visualization. This might be due to browser compatibility issues.
              </p>
            ) : (
              <p className="mb-4 text-gray-300">
                Your browser doesn't support WebGL, which is required for this visualization.
              </p>
            )}
            
            {/* Simple error details */}
            <div className="mt-4 p-3 bg-gray-800 rounded-lg text-left text-sm text-gray-400 mb-4">
              <p className="font-mono">{this.state.error?.toString()}</p>
            </div>
            
            <button 
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              onClick={this.handleRetry}
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    // If no error, render children normally
    return this.props.children;
  }
}

export default ThreeJsErrorBoundary;
