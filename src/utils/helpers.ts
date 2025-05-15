// Helper function to get a placeholder image when an image fails to load
export const getPlaceholderImage = (category: string = 'design'): string => {
  const placeholders: Record<string, string> = {
    design: 'https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    architecture: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    default: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  };
  
  return placeholders[category] || placeholders.default;
};

// Function to handle image loading errors
export const handleImageError = (
  event: React.SyntheticEvent<HTMLImageElement, Event>, 
  category: string = 'default'
): void => {
  const target = event.target as HTMLImageElement;
  target.src = getPlaceholderImage(category);
};

// Format timestamp to human-readable date
export const formatDate = (timestamp: string | number | Date): string => {
  const date = new Date(timestamp);
  return new Intl.DateTimeFormat('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }).format(date);
};
