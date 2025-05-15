import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout.tsx';
import { useTheme } from '../contexts/ThemeHooks.tsx';

const EnergiaJutraPage = () => {
  const { isDarkMode } = useTheme();
  
  // Project data hard-coded for this specific project to avoid URL encoding issues
  const project = {
    title: 'Energią Jutra',
    subtitle: 'Renewable energy community initiative',
    description: 'A grassroots initiative transforming how communities access, understand, and benefit from renewable energy through design innovation and education.',
    client: 'Community Energy Coalition',
    duration: '24 months',
    year: '2024-2025',
    location: 'Kraków, Poland',
    categories: ['Sustainability', 'Innovation', 'Social Impact'],    coverImage: './projects/energia-jutra.jpg',
    gallery: [
      './projects/energia-jutra/gallery-1.jpg',
      './projects/energia-jutra/gallery-2.jpg',
      './projects/energia-jutra/gallery-3.jpg',
    ],
    challenge: 'The Community Energy Coalition sought to address the growing energy crisis by making renewable energy solutions more accessible and understandable to ordinary citizens. Despite technological advances, adoption remained low due to complexity, cost perceptions, and lack of community engagement models.',
    approach: [
      {
        phase: 'Empathy',
        description: 'We conducted extensive community research through workshops, home visits, and energy usage monitoring to understand barriers to renewable energy adoption across different socioeconomic groups.',
        outcome: 'Identified key barriers including financial concerns, technical complexity, and lack of community ownership models.'
      },
      {
        phase: 'Reasoning',
        description: 'Analysis of community feedback alongside technical renewable energy data to develop community-centered solutions that prioritize accessibility, education, and shared ownership.',
        outcome: 'Created a framework for community solar projects that combines innovative financing models with intuitive user interfaces and education programs.'
      },
      {
        phase: 'Materialization',
        description: 'Developed modular community solar installation designs alongside digital platforms for monitoring and education, with community workshops for participatory implementation.',
        outcome: 'Created complete solution packages including physical solar installations, mobile monitoring applications, and community engagement toolkits.'
      }
    ],
    results: [
      'Installation of 5 community solar projects serving over 500 households',
      'Development of educational platform reaching 2,000+ community members',
      '35% increase in renewable energy literacy in target communities',
      'Creation of cooperative ownership model reducing costs by 40% for participants',
      'Establishment of youth renewable energy ambassador program with 50 graduates'
    ],
    testimonial: {
      quote: "FLID Foundation's approach to renewable energy transformed our communities' relationship with power generation. By making solar not just accessible but a source of community pride and ownership, they've created something far more sustainable than just the energy itself.",
      author: 'Anna Nowak',
      title: 'Director, Community Energy Coalition'
    },
    nextProjects: ['lotnisko-wiec', 'urban-sustainability']
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative pt-20 pb-32 bg-flid-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-flid-dark/70 backdrop-blur-sm z-10"></div>
          <div className="w-full h-full">
            <img 
              src={project.coverImage} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="container-wide relative z-20 mt-16">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.categories.map((category, index) => (
                <span 
                  key={index} 
                  className="text-sm bg-flid-accent/70 dark:bg-flid-accent-dark/70 text-white px-3 py-1 rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-3">
              {project.title}
            </h1>
            <p className="text-2xl text-white/90 mb-8">
              {project.subtitle}
            </p>
            <p className="text-xl text-white/80 max-w-2xl">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className={isDarkMode ? 'bg-flid-dark/90' : 'bg-flid-light'}>
        <div className="container-wide py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Overview Section */}
              <section className="mb-16">
                <div className={`p-8 rounded-xl shadow-lg ${isDarkMode ? 'bg-flid-dark/70' : 'bg-white'}`}>
                  <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-flid-dark'}`}>Project Overview</h2>
                  
                  <div className="mb-8">
                    <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white/90' : 'text-flid-dark'}`}>The Challenge</h3>
                    <p className={`leading-relaxed ${isDarkMode ? 'text-white/80' : 'text-flid-dark/80'}`}>
                      {project.challenge}
                    </p>
                  </div>
                </div>
              </section>

              {/* Process Section */}
              <section className="mb-16">
                <div className={`p-8 rounded-xl shadow-lg ${isDarkMode ? 'bg-flid-dark/70' : 'bg-white'}`}>
                  <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-flid-dark'}`}>Our Process</h2>
                  
                  <div className="relative">
                    {/* Process Timeline */}
                    <div className="hidden md:block absolute left-[15px] top-0 bottom-0 w-[2px] bg-flid-accent/30"></div>
                    
                    <div className="space-y-12">
                      {project.approach.map((phase, index) => (
                        <div key={phase.phase} className="relative">
                          <div className="hidden md:flex absolute left-0 top-0 items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-flid-accent text-white flex items-center justify-center font-medium">
                              {index + 1}
                            </div>
                          </div>
                          
                          <div className="md:ml-16">
                            <h3 className={`text-xl font-semibold mb-3 flex items-center ${isDarkMode ? 'text-white' : 'text-flid-dark'}`}>
                              <span className="md:hidden mr-3 w-8 h-8 rounded-full bg-flid-accent text-white flex items-center justify-center font-medium">
                                {index + 1}
                              </span>
                              {phase.phase}
                            </h3>
                            <p className={`mb-4 ${isDarkMode ? 'text-white/80' : 'text-flid-dark/80'}`}>{phase.description}</p>
                            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-flid-dark/90' : 'bg-flid-light'}`}>
                              <h4 className={`font-medium mb-2 ${isDarkMode ? 'text-white/90' : 'text-flid-dark'}`}>Outcome</h4>
                              <p className={isDarkMode ? 'text-white/70' : 'text-flid-dark/70'}>{phase.outcome}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Results Section */}
              <section className="mb-16">
                <div className={`p-8 rounded-xl shadow-lg ${isDarkMode ? 'bg-flid-dark/70' : 'bg-white'}`}>
                  <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-flid-dark'}`}>Project Results</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {project.results.map((result, index) => (
                      <div
                        key={index}
                        className={`p-5 rounded-lg border-l-4 border-flid-accent ${isDarkMode ? 'bg-flid-dark/90' : 'bg-flid-light'}`}
                      >
                        <p className={isDarkMode ? 'text-white/90' : 'text-flid-dark/90'}>{result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Next Projects Navigation */}
              <div className="flex flex-wrap gap-4 justify-between">
                <Link 
                  to="/projects"
                  className={`inline-flex items-center px-5 py-2.5 rounded-lg ${
                    isDarkMode 
                      ? 'bg-flid-dark text-white hover:bg-flid-dark/80' 
                      : 'bg-white text-flid-dark hover:bg-gray-100'
                  } transition-colors shadow-md`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  All Projects
                </Link>
              </div>
            </div>

            {/* Sidebar - only visible on desktop */}
            <div className="hidden lg:block">
              <div className="sticky top-32">
                <div className={`p-6 rounded-xl shadow-lg mb-6 ${isDarkMode ? 'bg-flid-dark/70' : 'bg-white'}`}>
                  <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-flid-dark'}`}>Project Details</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm text-flid-accent">Client</span>
                      <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-flid-dark'}`}>{project.client}</p>
                    </div>
                    <div>
                      <span className="text-sm text-flid-accent">Duration</span>
                      <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-flid-dark'}`}>{project.duration}</p>
                    </div>
                    <div>
                      <span className="text-sm text-flid-accent">Year</span>
                      <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-flid-dark'}`}>{project.year}</p>
                    </div>
                    <div>
                      <span className="text-sm text-flid-accent">Location</span>
                      <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-flid-dark'}`}>{project.location}</p>
                    </div>
                  </div>
                </div>

                <div className={`p-6 rounded-xl shadow-lg ${isDarkMode ? 'bg-flid-dark/70' : 'bg-white'}`}>
                  <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-flid-dark'}`}>
                    Need a Similar Project?
                  </h3>
                  <p className={`mb-6 ${isDarkMode ? 'text-white/80' : 'text-flid-dark/80'}`}>
                    Let us help you create something amazing. Our team is ready to bring your vision to life.
                  </p>
                  <Link
                    to="/contact"
                    className="block w-full py-3 px-4 bg-flid-accent dark:bg-flid-accent-dark text-white rounded-lg text-center font-medium hover:bg-flid-accent/90 dark:hover:bg-flid-accent-dark/90 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EnergiaJutraPage;
