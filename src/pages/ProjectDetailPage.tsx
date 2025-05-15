import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Sphere, Environment } from '@react-three/drei';
import Layout from '../components/layout/Layout.tsx';
import { useTheme } from '../contexts/ThemeHooks.tsx';
import projectsData, { getProjectById } from '../data/projectsData.ts';
import type { Project } from '../data/projectsData.ts';

// Define props for AnimatedSphere component
interface AnimatedSphereProps {
  color?: string;
  position?: [number, number, number];
  scale?: number;
}

const ProjectDetailPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  // Enhanced debugging
  console.log("Raw projectId from URL:", projectId);
  console.log("Full current path:", window.location.pathname);
  console.log("ProjectDetailPage component loaded");
  console.log("Available project keys:", Object.keys(projectsData));
  
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>('overview');  const [activeGalleryImage, setActiveGalleryImage] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [animationComplete, setAnimationComplete] = useState<boolean>(false);

  const { isDarkMode } = useTheme();
  
  // Effect to trigger dark mode animations
  useEffect(() => {
    if (isDarkMode) {
      // Reset animation completion state when dark mode changes
      setAnimationComplete(false);
      
      // Set animation complete after delay
      const timer = setTimeout(() => {
        setAnimationComplete(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [isDarkMode]);
  
  // Custom style objects for dark mode effects
  const textGlowStyle = isDarkMode ? {
    textShadow: '0 0 10px rgba(154, 140, 224, 0.5), 0 0 20px rgba(154, 140, 224, 0.3), 0 0 30px rgba(154, 140, 224, 0.1)'
  } : {};
  
  const shadowStyle = isDarkMode ? {
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.2)'
  } : {};
  
  // Dark mode specific animations
  const darkModeAnimation = {
    initial: { opacity: 0, y: 10 },
    animate: animationComplete ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, ease: "easeOut" }
  };
  
  // Track element visibility with IntersectionObserver
  const [overviewVisible, setOverviewVisible] = useState<boolean>(false);
  const [processVisible, setProcessVisible] = useState<boolean>(false);
  const [resultsVisible, setResultsVisible] = useState<boolean>(false);
  
  useEffect(() => {
    // Set up intersection observers
    const overviewObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOverviewVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const processObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProcessVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const resultsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setResultsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    // Observe elements with respective IDs
    if (!loading) {
      const overviewElement = document.getElementById('section-overview');
      const processElement = document.getElementById('section-process');
      const resultsElement = document.getElementById('section-results');
      
      if (overviewElement) overviewObserver.observe(overviewElement);
      if (processElement) processObserver.observe(processElement);
      if (resultsElement) resultsObserver.observe(resultsElement);
    }
    
    return () => {
      overviewObserver.disconnect();
      processObserver.disconnect();
      resultsObserver.disconnect();
    };
  }, [loading]);
    useEffect(() => {
    // Load project data
    setLoading(true);
    setTimeout(() => {
      // Enhanced debugging information
      console.log("Project ID from URL:", projectId);
      console.log("Project ID type:", typeof projectId);
      console.log("Available project IDs:", Object.keys(projectsData));
      console.log("Full path:", window.location.pathname);
      
      // Use the path as a fallback if useParams doesn't provide a projectId
      const pathSegments = window.location.pathname.split('/');
      const pathProjectId = pathSegments[pathSegments.length - 1];
      console.log("Path-derived project ID:", pathProjectId);
      
      // Use our utility function to find the project - first try projectId from useParams
      let projectData = null;
      if (projectId) {
        projectData = getProjectById(projectId);
        console.log("Attempt to find project by URL params:", projectId, projectData ? "found" : "not found");
      }
      
      // If not found, try the path-derived ID
      if (!projectData && pathProjectId) {
        projectData = getProjectById(pathProjectId);
        console.log("Attempt to find project by path:", pathProjectId, projectData ? "found" : "not found");
      }
      
      if (projectData) {
        setProject(projectData);
      }
      
      setLoading(false);
      
      // Reset state when project changes
      setActiveTab('overview');
      setActiveGalleryImage(0);
      setLightboxOpen(false);
    }, 800);
  }, [projectId]);

  // Handle tab changes
  const handleTabChange = (tab: string): void => {
    setActiveTab(tab);
    // Smooth scroll to the appropriate section
    const element = document.getElementById(`section-${tab}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Navigate to next/previous image in lightbox
  const navigateGallery = (direction: 'next' | 'prev'): void => {
    if (!project) return;
    
    if (direction === 'next') {
      setActiveGalleryImage((prev) => (prev + 1) % project.gallery.length);
    } else {
      setActiveGalleryImage((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
    }
  };

  // 3D sphere component for visual interest
  const AnimatedSphere = ({ color = '#D2CDE8', position = [0, 0, 0], scale = 1 }: AnimatedSphereProps) => {
    return (
      <Sphere args={[1, 32, 32]} scale={scale} position={position}>
        <meshStandardMaterial color={color} roughness={0.4} metalness={0.3} />
      </Sphere>
    );
  };

  if (loading) {
    return (
      <Layout>
        <div className="pt-24 pb-16 flex justify-center items-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-flid-accent dark:border-flid-accent-dark"></div>
        </div>
      </Layout>
    );
  }
  if (!project) {
    // Extract path information for debugging
    const pathSegments = window.location.pathname.split('/');
    const pathProjectId = pathSegments[pathSegments.length - 1];
    
    return (
      <Layout>
        <div className="pt-24 pb-16 bg-flid-light">
          <div className="container-wide text-center py-16">
            <h1 className="text-4xl font-bold text-flid-dark mb-6">Project Not Found</h1>
            <p className="text-lg mb-8">The project you're looking for doesn't seem to exist.</p>
              <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-2xl mx-auto text-left">
              <h2 className="text-xl font-bold mb-4">Diagnostic Information:</h2>
              <p className="mb-2"><strong>Project ID from URL params:</strong> "{projectId || 'none'}"</p>
              <p className="mb-2"><strong>Project ID from path:</strong> "{pathProjectId || 'none'}"</p>
              <p className="mb-2"><strong>Full path:</strong> {window.location.pathname}</p>
              <p className="mb-4"><strong>Available projects:</strong> {Object.keys(projectsData).join(', ')}</p>
              
              <details className="mt-4">
                <summary className="text-blue-600 cursor-pointer">Advanced Debug Info</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded border border-gray-200">
                  <p className="mb-1"><strong>Routing method:</strong> React Router useParams</p>
                  <p className="mb-1"><strong>Utility function used:</strong> getProjectById()</p>
                  <p className="mb-1"><strong>Browser location:</strong> {JSON.stringify(window.location, null, 2)}</p>
                </div>
              </details>
            </div>
              <div className="mb-8">
              <h3 className="text-xl mb-4">Try one of these direct links:</h3>              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/projects/energia-jutra" className="bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-md">
                  Energią Jutra
                </Link>
                <Link to="/projects/eco-packaging" className="bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-md">
                  Sustainable Packaging
                </Link>
                <Link to="/projects/lotnisko-wiec" className="bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-md">
                  Lotnisko-wiec
                </Link>
                <Link to="/projects" className="bg-green-100 hover:bg-green-200 px-4 py-2 rounded-md">
                  All Projects
                </Link>
              </div>
            </div>
            
            <Link to="/projects" className="btn bg-flid-accent text-white px-6 py-3 rounded-lg hover:bg-flid-accent-darker transition-colors">
              Browse All Projects
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>      {/* Hero Section */}      <div className="relative overflow-hidden">
        {/* Cover Image with Overlay */}
        <div 
          className="w-full h-[60vh] bg-cover bg-center relative transform transition-transform duration-1000"
          style={{ 
            backgroundImage: `url(${project.coverImage})`,
            backgroundPosition: isDarkMode ? 'center 55%' : 'center center',
            transform: isDarkMode ? 'scale(1.05)' : 'scale(1)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80 dark:from-black/50 dark:via-black/70 dark:to-black/90 transition-all duration-500"></div>
          
          {/* Subtle pattern overlay for dark mode */}
          <div className="absolute inset-0 opacity-10 dark:opacity-20 mix-blend-overlay bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0.5px,_transparent_1px)] bg-[length:20px_20px]"></div>
          
          {/* Additional particle effect only visible in dark mode */}
          {isDarkMode && (
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgo8ZGVmcz4KPHBhdHRlcm4gaWQ9InBhdHRlcm5fTHBKdmEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+Cjxwb2x5bGluZSBwb2ludHM9IjAgMCwgNSAwLCA1IDUsIDAgMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybl9McEp2YSkiLz4KPC9zdmc+')]"
              style={{ opacity: 0.1, animation: 'pulse 8s infinite alternate' }}
            ></div>
          )}
        </div>
        
        {/* Project Title and Info */}
        <div className="container-wide absolute bottom-0 left-0 right-0 text-white p-8 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-2"
          >
            <span className="text-flid-accent-dark font-medium">{project.categories.join(' · ')}</span>
          </motion.div>            <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl font-bold mb-3 text-shadow-lg dark:text-glow"
            style={isDarkMode ? textGlowStyle : {}}
          >
            {project.title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl mb-6 max-w-3xl dark:text-gray-200"
          >
            {project.subtitle}
          </motion.p>
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-6 mb-12"
          >
            <div className="bg-white/10 dark:bg-flid-accent-dark/10 backdrop-blur-sm px-4 py-3 rounded-md transition-all duration-300 hover:bg-white/20 dark:hover:bg-flid-accent-dark/20">
              <span className="text-flid-accent-dark text-sm block mb-1 font-semibold">Client</span>
              <span className="text-md">{project.client}</span>
            </div>
            <div className="bg-white/10 dark:bg-flid-accent-dark/10 backdrop-blur-sm px-4 py-3 rounded-md transition-all duration-300 hover:bg-white/20 dark:hover:bg-flid-accent-dark/20">
              <span className="text-flid-accent-dark text-sm block mb-1 font-semibold">Duration</span>
              <span className="text-md">{project.duration}</span>
            </div>
            <div className="bg-white/10 dark:bg-flid-accent-dark/10 backdrop-blur-sm px-4 py-3 rounded-md transition-all duration-300 hover:bg-white/20 dark:hover:bg-flid-accent-dark/20">
              <span className="text-flid-accent-dark text-sm block mb-1 font-semibold">Year</span>
              <span className="text-md">{project.year}</span>
            </div>
            <div className="bg-white/10 dark:bg-flid-accent-dark/10 backdrop-blur-sm px-4 py-3 rounded-md transition-all duration-300 hover:bg-white/20 dark:hover:bg-flid-accent-dark/20">
              <span className="text-flid-accent-dark text-sm block mb-1 font-semibold">Location</span>
              <span className="text-md">{project.location}</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Navigation Tabs */}      <div className="sticky top-[70px] z-20 bg-white dark:bg-gray-900/95 shadow-md backdrop-blur-md transition-all duration-300">
        <div className="container-wide flex overflow-x-auto">
          <button 
            className={`px-6 py-4 font-medium whitespace-nowrap transition-all duration-300 ${
              activeTab === 'overview' 
                ? 'text-flid-accent dark:text-flid-accent-dark border-b-2 border-flid-accent dark:border-flid-accent-dark' 
                : 'hover:text-flid-accent dark:text-gray-300 dark:hover:text-flid-accent-dark'
            }`}
            onClick={() => handleTabChange('overview')}
          >
            Overview
          </button>
          <button 
            className={`px-6 py-4 font-medium whitespace-nowrap transition-all duration-300 ${
              activeTab === 'process' 
                ? 'text-flid-accent dark:text-flid-accent-dark border-b-2 border-flid-accent dark:border-flid-accent-dark' 
                : 'hover:text-flid-accent dark:text-gray-300 dark:hover:text-flid-accent-dark'
            }`}
            onClick={() => handleTabChange('process')}
          >
            Process
          </button>
          <button 
            className={`px-6 py-4 font-medium whitespace-nowrap transition-all duration-300 ${
              activeTab === 'results' 
                ? 'text-flid-accent dark:text-flid-accent-dark border-b-2 border-flid-accent dark:border-flid-accent-dark' 
                : 'hover:text-flid-accent dark:text-gray-300 dark:hover:text-flid-accent-dark'
            }`}
            onClick={() => handleTabChange('results')}
          >
            Results
          </button>
          <button 
            className={`px-6 py-4 font-medium whitespace-nowrap transition-all duration-300 ${
              activeTab === 'gallery' 
                ? 'text-flid-accent dark:text-flid-accent-dark border-b-2 border-flid-accent dark:border-flid-accent-dark' 
                : 'hover:text-flid-accent dark:text-gray-300 dark:hover:text-flid-accent-dark'
            }`}
            onClick={() => handleTabChange('gallery')}
          >
            Gallery
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container-wide py-16">
        {/* Overview Section */}
        <section id="section-overview" className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={overviewVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold mb-6 dark:text-white">Project Overview</h2>
                <p className="text-lg mb-8 dark:text-gray-200 leading-relaxed">{project.description}</p>
                <h3 className="text-2xl font-bold mb-4 dark:text-flid-accent-dark">The Challenge</h3>
                <p className="mb-12 dark:text-gray-300 leading-relaxed">{project.challenge}</p>
              </div>
                <div className="md:col-span-1 relative">
                <div className="sticky top-[180px]">
                  <div className="h-64 w-full rounded-lg overflow-hidden mb-6 shadow-lg dark:shadow-flid-accent-dark/10">
                    <Canvas>
                      <ambientLight intensity={isDarkMode ? 0.8 : 0.5} />
                      <directionalLight position={[10, 10, 10]} intensity={isDarkMode ? 1.2 : 0.8} />
                      <AnimatedSphere 
                        position={[0, 0, 0]} 
                        color={isDarkMode ? '#9A8CE0' : '#D2CDE8'} 
                        scale={1.5} 
                      />
                      <Environment preset={isDarkMode ? "night" : "sunset"} />
                    </Canvas>
                  </div>
                    <div className="bg-flid-light dark:bg-gray-800 p-6 rounded-lg shadow-xl transition-all duration-500
                  backdrop-blur-sm dark:backdrop-blur-md border border-transparent dark:border-flid-accent-dark/10"
                  style={isDarkMode ? shadowStyle : {}}>
                    <h3 className="text-xl font-bold mb-3 dark:text-flid-accent-dark" 
                    style={isDarkMode ? textGlowStyle : {}}>Key Features</h3>
                    <ul className="list-disc list-inside space-y-3">
                      {project.categories.map((category, index) => (
                        <li key={index} className="dark:text-gray-300 transition-all duration-300 hover:translate-x-1">
                          {category}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
        
        {/* Process Section */}
        <section id="section-process" className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={processVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >            <h2 className="text-3xl font-bold mb-10 dark:text-white dark:drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">Design Process</h2>
            
            <div className="space-y-24">
              {project.approach.map((phase, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  <div className="md:col-span-4">
                    <div className="sticky top-[180px]">
                      <span 
                        className={`px-4 py-2 rounded-full text-flid-accent text-lg font-medium inline-block 
                        dark:text-flid-accent-dark dark:bg-flid-dark/70 dark:backdrop-blur-md
                        ${isDarkMode ? 'shadow-[0_0_15px_rgba(154,140,224,0.3)]' : ''}`}
                      >
                        Phase {index + 1}
                      </span>
                      <h3 className="text-2xl font-bold mb-4 mt-4 dark:text-white">{phase.phase}</h3>
                      <p className="mb-6 dark:text-gray-300">{phase.description}</p>
                    </div>
                  </div>
                        <div className="md:col-span-8">                    <div className="bg-flid-light dark:bg-gray-800/90 rounded-lg p-8 shadow-lg transition-all duration-500 hover:shadow-xl dark:shadow-flid-accent-dark/10"
                    style={isDarkMode ? { boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(154, 140, 224, 0.15)' } : {}}>
                      <h4 className="text-xl font-bold mb-4 dark:text-flid-accent-dark"
                      style={isDarkMode ? { textShadow: '0 0 8px rgba(154, 140, 224, 0.3)' } : {}}>Outcome</h4>
                      <p className="mb-6 dark:text-gray-200">{phase.outcome}</p>
                        {/* Placeholder for phase-specific visualization with improved dark mode */}
                      <motion.div 
                        className="h-64 w-full bg-gradient-to-br from-flid-accent-light to-flid-accent rounded-lg 
                        dark:from-flid-accent-dark dark:to-flid-dark overflow-hidden flex items-center justify-center 
                        transition-all duration-500 shadow-inner transform hover:scale-[1.02]"
                        style={isDarkMode ? { 
                          boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5), 0 0 15px rgba(154, 140, 224, 0.2)',
                          background: `radial-gradient(circle at ${50 + (index % 3) * 15}% ${40 + (index % 2) * 20}%, rgba(154, 140, 224, 0.4), transparent 70%), 
                                      linear-gradient(135deg, rgba(42, 42, 66, 0.9), rgba(30, 30, 50, 0.95))`
                        } : {}}
                        {...(isDarkMode ? {
                          initial: { opacity: 0.6, scale: 0.98 },
                          animate: animationComplete ? { opacity: 1, scale: 1 } : {},
                          transition: { duration: 0.8, delay: 0.2 }
                        } : {})}
                        whileHover={isDarkMode ? { 
                          scale: 1.02,
                          boxShadow: 'inset 0 0 25px rgba(0,0,0,0.6), 0 0 20px rgba(154, 140, 224, 0.4)'
                        } : { scale: 1.02 }}
                      >
                        <span className={`text-white text-lg font-medium drop-shadow-md ${
                          isDarkMode ? 'bg-flid-dark/30 px-6 py-2 rounded-full backdrop-blur-sm' : ''
                        }`}>{phase.phase} Visualization</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
        
        {/* Results Section */}
        <section id="section-results" className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={resultsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >            <h2 className="text-3xl font-bold mb-10 dark:text-white dark:drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">Project Results</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">                <motion.div 
                className={`${isDarkMode ? 'bg-gray-800/30 rounded-lg p-6 backdrop-blur-sm' : ''}`}
                {...(isDarkMode ? darkModeAnimation : {})}>
                <ul className="space-y-6">
                  {project.results.map((result, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start group"
                      {...(isDarkMode ? {
                        initial: { opacity: 0, x: -10 },
                        animate: animationComplete ? { opacity: 1, x: 0 } : {},
                        transition: { duration: 0.4, delay: index * 0.15 }
                      } : {})}
                    >
                      <span className={`text-flid-accent dark:text-flid-accent-dark text-2xl mr-4 
                      transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6
                      ${isDarkMode ? 'drop-shadow-[0_0_8px_rgba(154,140,224,0.5)]' : ''}`}>✓</span>
                      <span className="dark:text-gray-200">{result}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
                <motion.div 
                className="bg-flid-light dark:bg-gray-800/80 p-8 rounded-lg shadow-lg transition-all duration-500 
                border border-transparent dark:border-flid-accent-dark/20 backdrop-blur-sm"
                style={isDarkMode ? shadowStyle : {}}
                {...(isDarkMode ? darkModeAnimation : {})}
              >
                <h3 className="text-2xl font-bold mb-6 dark:text-white" 
                style={isDarkMode ? textGlowStyle : {}}>Client Testimonial</h3>
                <motion.blockquote 
                  className="mb-6 text-lg font-light italic dark:text-gray-300 relative pl-6"
                  {...(isDarkMode ? {
                    initial: { opacity: 0 },
                    animate: animationComplete ? { opacity: 1 } : {},
                    transition: { duration: 0.8, delay: 0.3 }
                  } : {})}
                >
                  <motion.span 
                    className="absolute top-0 left-0 text-4xl text-flid-accent dark:text-flid-accent-dark opacity-40"
                    {...(isDarkMode ? {
                      initial: { scale: 0.8, opacity: 0 },
                      animate: animationComplete ? { scale: 1, opacity: 0.4 } : {},
                      transition: { duration: 0.5, delay: 0.5 }
                    } : {})}
                  >"</motion.span>
                  "{project.testimonial.quote}"
                </motion.blockquote>
                <motion.div
                  {...(isDarkMode ? {
                    initial: { opacity: 0, y: 10 },
                    animate: animationComplete ? { opacity: 1, y: 0 } : {},
                    transition: { duration: 0.5, delay: 0.7 }
                  } : {})}
                >
                  <p className="font-bold dark:text-flid-accent-dark">{project.testimonial.author}</p>
                  <p className="dark:text-gray-400">{project.testimonial.title}</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>
        
        {/* Gallery Section */}
        <section id="section-gallery">          <h2 className="text-3xl font-bold mb-10 dark:text-white dark:drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.gallery.map((image, index) => (
              <div 
                key={index} 
                className={`aspect-[4/3] rounded-lg overflow-hidden cursor-pointer shadow-md
                dark:shadow-flid-accent-dark/5 group transition-all duration-500 
                hover:shadow-xl dark:hover:shadow-flid-accent-dark/20 transform hover:scale-[1.02]
                ${isDarkMode ? 'border border-flid-accent-dark/10' : ''}`}
                onClick={() => {
                  setActiveGalleryImage(index);
                  setLightboxOpen(true);
                }}
              >                <img 
                  src={image} 
                  alt={`Project gallery image ${index + 1}`}
                  className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105
                  ${isDarkMode ? 'brightness-90 contrast-125 saturate-110' : ''}`}
                  style={isDarkMode ? {
                    filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))'
                  } : {}}
                />
                <div className={`absolute inset-0 bg-gradient-to-t 
                  ${isDarkMode 
                    ? 'from-flid-dark/80 via-flid-dark/30 to-transparent' 
                    : 'from-black/60 via-transparent to-transparent'} 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-between p-4`}>
                  <span className={`text-white text-sm font-medium p-2 rounded transform transition-all
                  ${isDarkMode ? 'bg-flid-accent-dark/20 backdrop-blur-sm scale-y-0 origin-bottom group-hover:scale-y-100' : ''}`}>
                    View Image {index + 1}
                  </span>
                  
                  {isDarkMode && (
                    <motion.div
                      className="h-8 w-8 rounded-full bg-flid-accent-dark/20 backdrop-blur-sm flex items-center justify-center text-white"
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        delay: index * 0.1, 
                        duration: 0.5,
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                      }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <span>+</span>
                    </motion.div>
                  )}
                </div>
                
                {/* Dark mode specific image decoration */}
                {isDarkMode && (
                  <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-flid-accent-dark/30 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                )}
                {isDarkMode && (
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-flid-accent-dark/30 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                )}
              </div>
            ))}
          </div>
        </section>
        
        {/* Next Projects */}          <section className="mt-24">
          <h2 className="text-2xl font-bold mb-8 dark:text-white dark:drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">Related Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.nextProjects.map((projectId, index) => {
              const nextProject = projectsData[projectId];
              return nextProject ? (
                <Link 
                  key={index}
                  to={`/projects/${projectId}`} 
                  className="group block"
                >                  <div className={`relative h-64 rounded-lg overflow-hidden mb-4 shadow-lg 
                  dark:shadow-flid-accent-dark/10 transition-all duration-500 transform group-hover:shadow-xl
                  ${isDarkMode ? 'border border-flid-accent-dark/10 hover:border-flid-accent-dark/30' : ''}`}>
                    <div 
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: `url(${nextProject.coverImage})` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                    group-hover:from-black/60 group-hover:via-black/30 transition-all duration-500"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-xl font-bold text-white">{nextProject.title}</h3>
                      <p className="text-white text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                        {nextProject.subtitle}
                      </p>                      <span className={`mt-3 inline-block text-flid-accent-dark text-xs font-bold 
                        opacity-0 group-hover:opacity-100 transition-all duration-500
                        ${isDarkMode ? 'bg-flid-accent-dark/20 px-3 py-1 rounded' : ''}`}>
                        EXPLORE PROJECT →
                      </span>
                    </div>
                  </div>
                </Link>
              ) : null;
            })}
          </div>
        </section>
      </div>
        {/* Lightbox */}      <AnimatePresence>
        {lightboxOpen && project && (
          <motion.div 
            className={`fixed inset-0 z-50 flex items-center justify-center p-4
            ${isDarkMode 
              ? 'bg-gradient-to-b from-black to-gray-900/95 cursor-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMiIgZmlsbD0id2hpdGUiLz48L3N2Zz4="),auto]' 
              : 'bg-black bg-opacity-90'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
          ><button 
              className={`absolute top-4 right-4 text-white text-4xl z-10 
              ${isDarkMode ? 'hover:text-flid-accent-dark transition-colors' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setLightboxOpen(false);
              }}
            >
              &times;
            </button>
            
            <button 
              className={`absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl z-10 
              opacity-70 hover:opacity-100 transition-opacity duration-300
              ${isDarkMode ? 'hover:text-flid-accent-dark hover:scale-110 transform' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                navigateGallery('prev');
              }}
            >
              ‹
            </button>
            
            <button 
              className={`absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl z-10 
              opacity-70 hover:opacity-100 transition-opacity duration-300 
              ${isDarkMode ? 'hover:text-flid-accent-dark hover:scale-110 transform' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                navigateGallery('next');
              }}
            >
              ›
            </button>            <motion.div
              className="relative max-w-4xl max-h-[80vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: isDarkMode ? 0.5 : 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
              style={shadowStyle}
            >              <motion.img 
                src={project.gallery[activeGalleryImage]} 
                alt={`Project gallery image ${activeGalleryImage + 1}`} 
                className={`max-w-full max-h-[80vh] object-contain rounded-lg
                ${isDarkMode ? 'shadow-[0_0_30px_rgba(0,0,0,0.5)] contrast-125' : ''}`}
                style={isDarkMode ? {
                  border: '1px solid rgba(154, 140, 224, 0.2)',
                  filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.8))'
                } : {}}
                whileHover={isDarkMode ? { 
                  scale: 1.01,
                  border: '1px solid rgba(154, 140, 224, 0.4)'
                } : {}}
              />
              <div className={`absolute bottom-0 left-0 right-0 p-4 
                ${isDarkMode 
                  ? 'bg-gradient-to-t from-gray-900/90 to-transparent backdrop-blur-sm' 
                  : 'bg-gradient-to-t from-black/70 to-transparent'} 
                text-white text-center`}>
                <span className={isDarkMode ? 'font-medium text-flid-accent-dark' : ''}>
                  Image {activeGalleryImage + 1} of {project.gallery.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default ProjectDetailPage;
