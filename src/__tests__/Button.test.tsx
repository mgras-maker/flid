// Import Vitest testing utilities
import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Button from '../components/ui/Button';

// Wrap components that use Link from react-router-dom in a Router
const renderWithRouter = (component: React.ReactNode) => {
  return render(
    <Router>
      {component}
    </Router>
  );
};

describe('Button Component', () => {
  test('renders button with text', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });
  test('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders as anchor when href is provided', () => {
    render(<Button href="https://example.com">Visit Site</Button>);
    const button = screen.getByText('Visit Site');
    expect(button.tagName).toBe('A');
    expect(button).toHaveAttribute('href', 'https://example.com');
  });

  test('renders as Link when to is provided', () => {
    renderWithRouter(<Button to="/projects">Projects</Button>);
    const button = screen.getByText('Projects');
    expect(button.closest('a')).toHaveAttribute('href', '/projects');
  });

  test('applies variant styles correctly', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    expect(screen.getByText('Primary')).toHaveClass('bg-flid-accent');
    
    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByText('Secondary')).toHaveClass('bg-flid-primary');
    
    rerender(<Button variant="outline">Outline</Button>);
    expect(screen.getByText('Outline')).toHaveClass('border-flid-accent');
  });

  test('renders with custom className', () => {
    render(<Button className="custom-class">Custom</Button>);
    expect(screen.getByText('Custom')).toHaveClass('custom-class');
  });

  test('renders disabled button', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByText('Disabled')).toHaveAttribute('disabled');
    expect(screen.getByText('Disabled')).toHaveClass('opacity-50');
  });
});
