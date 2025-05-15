import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout.tsx';

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Define project type
  interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    categories: string[];
    featured: boolean;
  }
  
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  
  // Sample project data - in a real app, this would come from an API
  const projects = useMemo<Project[]>(() => [
    {
      id: 'energia-jutra',
      title: 'Energią Jutra',
      description: 'An innovative renewable energy initiative focusing on community-based solar power solutions and education.',
      image: './projects/energia-jutra.jpg',
      categories: ['sustainability', 'innovation', 'social'],
      featured: true
    },
    {
      id: 'lotnisko-wiec',
      title: 'Lotnisko-wiec Festival',
      description: 'A cultural festival transforming an abandoned airport into a vibrant space for art, music, and sustainable community engagement.',
      image: './projects/lotnisko-wiec.jpg',
      categories: ['urban', 'social', 'innovation'],
      featured: true
    },
    {
      id: 'urban-sustainability',
      title: 'Urban Sustainability Initiative',
      description: 'Redesigning public spaces to promote sustainable living practices while enhancing quality of life in urban environments.',
      image: './projects/urban-sustainability.jpg',
      categories: ['urban', 'sustainability'],
      featured: true
    },    
    {
      id: 'eco-packaging',
      title: 'Sustainable Packaging',
      description: 'Developing innovative biodegradable packaging solutions to reduce environmental impact in consumer goods while maintaining functionality and aesthetic appeal.',
      image: './projects/eco-packaging.jpg',      
      categories: ['product', 'sustainability'],
      featured: true
    },
    {
      id: 'beskidzka-bench',
      title: 'Beskidzka Bench',
      description: 'An innovative urban furniture design that enhances public spaces and promotes community interaction.',
      image: './projects/urban-sustainability.jpg',
      categories: ['urban', 'product', 'innovation'],
      featured: false
    },
    {
      id: 'bb-design-lab',
      title: 'BB__Design Lab',
      description: 'A collaborative design laboratory focused on experimental materials and production methods.',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      categories: ['innovation', 'product'],
      featured: false
    },
    {
      id: 'house-of-creative-work',
      title: 'House of Creative Work',
      description: 'A multifunctional space designed to inspire creativity and facilitate artistic collaboration.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      categories: ['urban', 'social'],
      featured: false
    },
    {
      id: 'energy-of-tomorrow',
      title: 'Energy of Tomorrow',
      description: 'A forward-looking project exploring sustainable energy solutions for urban environments.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      categories: ['sustainability', 'innovation'],
      featured: true
    },
    {
      id: 'd-spot-design-portal',
      title: 'D-Spot Design Portal',
      description: 'An online platform connecting designers, clients, and resources for collaborative innovation.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      categories: ['digital', 'innovation'],
      featured: false
    },
    {
      id: 'artistic-shack-on-the-shaft',
      title: 'Artistic Shack on the Shaft',
      description: 'A repurposed industrial structure transformed into an artistic hub for community engagement.',
      image: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      categories: ['urban', 'social'],
      featured: false
    },
    {
      id: 'design-bank',
      title: 'Design Bank',
      description: 'A repository of design methodologies and case studies for educational and professional use.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      categories: ['digital', 'innovation'],
      featured: false
    }
  ], []);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: 'Featured' },
    { id: 'urban', label: 'Urban Design' },
    { id: 'product', label: 'Product Design' },
    { id: 'digital', label: 'Digital Solutions' },
    { id: 'sustainability', label: 'Sustainability' },
    { id: 'social', label: 'Social Impact' },
    { id: 'innovation', label: 'Innovation' }
  ];

  // Filter projects based on category and search query
  useEffect(() => {
    let results = [...projects];
    
    if (selectedCategory !== 'all') {
      if (selectedCategory === 'featured') {
        results = results.filter(project => project.featured);
      } else {
        results = results.filter(project => project.categories.includes(selectedCategory));
      }
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(project => 
        project.title.toLowerCase().includes(query) || 
        project.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredProjects(results);
  }, [selectedCategory, searchQuery, projects]);

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-flid-light dark:bg-gray-900">
        <div className="container-wide">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-flid-dark dark:text-white mb-6">
              Our <span className="text-flid-accent">Projects</span>
            </h1>
            <p className="text-xl text-flid-dark/80 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of innovative designs and solutions that 
              promote sustainability and positive social impact.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Search */}
              <div className="md:w-1/3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search projects..."
                    className="w-full px-4 py-3 pr-10 rounded-lg border border-flid-accent/30 dark:border-flid-accent/20 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-flid-accent/50"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-flid-dark/50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Categories */}
              <div className="md:w-2/3">
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <motion.button
                      key={category.id}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedCategory === category.id 
                          ? 'bg-flid-accent text-white shadow-md' 
                          : 'bg-white dark:bg-gray-700 text-flid-dark dark:text-white hover:bg-flid-accent/10 dark:hover:bg-flid-accent/20'
                      }`}
                      onClick={() => setSelectedCategory(category.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {category.label}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.length > 0 ? filteredProjects.map((project) => (                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: "easeOut",
                    delay: 0.1 * (filteredProjects.indexOf(project) % 10) 
                  }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                >
                  <Link to={`/projects/${project.id}`}>
                    <div className="relative h-64 overflow-hidden">
                      <motion.img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      />
                      {project.featured && (
                        <span className="absolute top-4 right-4 bg-flid-accent text-white text-xs px-3 py-1 rounded-full font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-flid-dark dark:text-white mb-2">{project.title}</h3>
                      <p className="text-flid-dark/80 dark:text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.categories.map((category, index) => (
                          <span 
                            key={index} 
                            className="text-xs bg-flid-light dark:bg-gray-700 text-flid-dark/70 dark:text-gray-300 px-2 py-1 rounded"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )) : (
                <motion.div 
                  className="col-span-full text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-flid-dark dark:text-white mb-2">No Projects Found</h3>
                  <p className="text-flid-dark/80 dark:text-gray-300">
                    Try adjusting your search or filter criteria.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
