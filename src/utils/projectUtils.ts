// Creates a separate copy of the energia-jutra project 
// so it can be accessed with a more URL-friendly ID

import projectsData from '../data/projectsData';
import type { Project } from '../data/projectsData';

// Create a properly typed dictionary for projects
export const projectDataWithFallbacks: Record<string, Project> = {
  ...projectsData,
  'energia': projectsData['energia-jutra'],
  'energia-jutra-en': projectsData['energia-jutra']
};

// Function to get a project with fuzzy matching if needed
export const getProjectById = (id: string) => {
  // First try direct match
  if (projectDataWithFallbacks[id]) {
    return projectDataWithFallbacks[id];
  }
  
  // Then try fuzzy matching for specific projects we know might have issues
  if (id.includes('energia')) {
    return projectDataWithFallbacks['energia-jutra'];
  }
  
  return null;
};

export default projectDataWithFallbacks;
