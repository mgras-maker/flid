import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import DesignThinkingFallback from './DesignThinkingFallback';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

/**
 * An error boundary component specifically for React Three Fiber components.
 * This helps gracefully handle Three.js errors by showing a fallback component.
 */
class ThreeJsErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Three.js component error:', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Render fallback UI
      return <DesignThinkingFallback />;
    }

    return this.props.children;
  }
}

export default ThreeJsErrorBoundary;
