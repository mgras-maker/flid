import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout.tsx';
import { motion } from 'framer-motion';

const SustainablePackagingPage = () => {
  // Project data hard-coded for this specific project
  const project = {
    title: 'Sustainable Packaging',
    subtitle: 'Biodegradable solutions for consumer goods',
    description: 'Developing innovative biodegradable packaging solutions to reduce environmental impact in consumer goods while maintaining functionality and aesthetic appeal.',
    client: 'EcoRetail Consortium',
    duration: '18 months',
    year: '2023-2024',
    location: 'Warsaw, Poland',
    categories: ['Product Design', 'Sustainability', 'Innovation'],    coverImage: './projects/eco-packaging.jpg',
    gallery: [
      './projects/eco-packaging/gallery-1.jpg',
      './projects/eco-packaging/gallery-2.jpg',
      './projects/eco-packaging/gallery-3.jpg',
    ],
    challenge: 'The EcoRetail Consortium needed to address growing consumer and regulatory demand for sustainable packaging solutions that didn\'t compromise on product protection, shelf appeal, or user experience. Traditional plastic packaging was creating significant environmental issues, while existing eco-alternatives often failed on performance or aesthetics.',
    approach: [
      {
        phase: 'Empathy',
        description: 'We conducted comprehensive user research with consumers, retailers, and sustainability experts to understand pain points with current packaging solutions and identify opportunities for innovation.',
        outcome: 'Created a detailed map of user needs and environmental impact factors that informed our design priorities.'
      },
      {
        phase: 'Reasoning',
        description: 'Analyzed materials science research alongside user insights to identify promising biodegradable materials that could meet both functional and aesthetic requirements.',
        outcome: 'Developed a material selection framework that balanced performance characteristics with environmental impact across the full lifecycle.'
      },
      {
        phase: 'Materialization',
        description: 'Prototyped multiple packaging solutions using seaweed-based polymers, mycelium structures, and agricultural waste composites through an iterative design process.',
        outcome: 'Created a family of packaging solutions for different product categories that meet sustainability goals while enhancing the user experience.'
      }
    ],
    results: [
      'Development of a packaging system that decomposes fully within 180 days',
      'Reduction in carbon footprint by 65% compared to conventional packaging',
      'Implementation across 3 major product lines with 200,000+ units in market',
      'Creation of visually distinctive aesthetic that enhances brand recognition',
      'Patent-pending material composite technology with potential applications beyond packaging'
    ],
    testimonial: {
      quote: "FLID's sustainable packaging designs didn't force us to choose between environmental responsibility and market appeal. Their innovative approach actually enhanced our product experience while dramatically reducing our environmental footprint—a win-win we didn't think was possible.",
      author: 'Julia Kowalczyk',
      title: 'Sustainability Director, EcoRetail Consortium'
    },
    nextProjects: ['urban-sustainability', 'community-garden']
  };
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-flid-light dark:bg-flid-dark/95">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="pt-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold text-flid-dark dark:text-white mb-6">
                  {project.title}
                </h1>
                <p className="text-xl text-flid-accent dark:text-flid-accent-dark mb-2">{project.subtitle}</p>
                <p className="text-lg text-gray-600 dark:text-gray-200 mb-8 max-w-xl">
                  {project.description}
                </p>
                  {/* Project details */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6 mb-12">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">Client</p>
                    <p className="font-medium dark:text-white">{project.client}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">Duration</p>
                    <p className="font-medium dark:text-white">{project.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">Year</p>
                    <p className="font-medium dark:text-white">{project.year}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">Location</p>
                    <p className="font-medium dark:text-white">{project.location}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.categories.map((category, index) => (
                    <span 
                      key={index}
                      className="bg-flid-accent/10 text-flid-accent dark:bg-flid-accent-dark/30 dark:text-white px-4 py-1 rounded-full text-sm shadow-sm"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="relative h-[300px] md:h-auto overflow-hidden rounded-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-flid-dark/30 to-transparent`}></div>
            </motion.div>
          </div>
        </div>      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-wide">
          {/* Challenge Section */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-flid-dark dark:text-white">The Challenge</h2>
              <p className="text-lg mb-8 max-w-4xl dark:text-gray-200">{project.challenge}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="bg-flid-light dark:bg-gray-800 p-8 rounded-lg transition-colors shadow-md border border-transparent dark:border-gray-700">
                  <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mb-5 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-flid-dark dark:text-white">Environmental Impact</h3>
                  <p className="dark:text-gray-300">Traditional packaging contributes to waste and pollution, with plastics persisting in the environment for hundreds of years.</p>
                </div>
                
                <div className="bg-flid-light dark:bg-gray-800 p-8 rounded-lg transition-colors shadow-md border border-transparent dark:border-gray-700">
                  <div className="inline-block p-3 bg-green-100 dark:bg-green-900 rounded-lg mb-5 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-flid-dark dark:text-white">Performance Requirements</h3>
                  <p className="dark:text-gray-300">Eco-friendly alternatives often fail to provide adequate protection, shelf-stability, or visual appeal needed for consumer products.</p>
                </div>
                
                <div className="bg-flid-light dark:bg-gray-800 p-8 rounded-lg transition-colors shadow-md border border-transparent dark:border-gray-700">
                  <div className="inline-block p-3 bg-amber-100 dark:bg-amber-900 rounded-lg mb-5 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600 dark:text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-flid-dark dark:text-white">Cost Considerations</h3>
                  <p className="dark:text-gray-300">Sustainable alternatives often come with higher production costs, making market adoption challenging for businesses with tight margins.</p>
                </div>
              </div>
            </motion.div>
          </div>
            {/* Design Process */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-10 text-flid-dark dark:text-white">Design Process</h2>
              
              <div className="space-y-24">
                {project.approach.map((phase, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-4">
                      <div className="sticky top-[180px]">
                        <span className="text-flid-accent dark:text-flid-accent-dark text-lg font-medium">Phase {index + 1}</span>
                        <h3 className="text-2xl font-bold mb-4 dark:text-white">{phase.phase}</h3>
                        <p className="mb-6 dark:text-gray-300">{phase.description}</p>
                      </div>
                    </div>
                    
                    <div className="md:col-span-8">
                      <div className="bg-flid-light dark:bg-gray-800 rounded-lg p-8 transition-colors shadow-md">
                        <h4 className="text-xl font-bold mb-4 dark:text-white">Outcome</h4>
                        <p className="mb-6 dark:text-gray-300">{phase.outcome}</p>
                        
                        {/* Phase-specific visualization */}
                        <div className="h-64 w-full bg-flid-accent-light dark:bg-flid-accent-dark/70 rounded-lg overflow-hidden flex items-center justify-center transition-colors shadow-inner">
                          <span className="text-white text-lg font-medium drop-shadow-md">{phase.phase} Visualization</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
            {/* Results Section */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-10 text-flid-dark dark:text-white">Results & Impact</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                  <ul className="space-y-4">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-flid-accent dark:bg-flid-accent-dark text-white flex items-center justify-center mr-4 mt-1 shadow-md">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <p className="text-lg dark:text-gray-200">{result}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-flid-light dark:bg-gray-800 p-8 rounded-lg transition-colors shadow-lg border border-transparent dark:border-gray-700">
                  <h3 className="text-2xl font-bold mb-6 text-flid-dark dark:text-white">Testimonial</h3>
                  <blockquote className="mb-6">
                    <p className="text-lg italic mb-4 dark:text-gray-200">"{project.testimonial.quote}"</p>
                    <footer>
                      <p className="font-bold dark:text-white">{project.testimonial.author}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{project.testimonial.title}</p>
                    </footer>
                  </blockquote>
                </div>
              </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative h-64 overflow-hidden rounded-lg shadow-lg"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={image} 
                      alt={`${project.title} - Gallery ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Call to Action */}
          <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-flid-accent-light dark:bg-flid-accent-dark/80 rounded-xl shadow-lg border border-transparent dark:border-flid-accent-dark">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-sm">Interested in sustainable design solutions?</h3>
              <p className="text-white/90 dark:text-white/90">Let's collaborate on your next project.</p>
            </div>
            <Link
              to="/contact"
              className="px-8 py-3 bg-white dark:bg-gray-100 text-flid-accent hover:bg-gray-100 dark:hover:bg-white transition-colors font-bold shadow-md hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
        {/* Next Projects Section */}
      <section className="py-16 bg-flid-light dark:bg-gray-900">
        <div className="container-wide">
          <h2 className="text-2xl font-bold mb-8 text-flid-dark dark:text-white">Related Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.nextProjects.map((projectId, index) => (
              <Link 
                key={index}
                to={`/projects/${projectId}`} 
                className="group block"
              >
                <div className="relative h-64 rounded-lg overflow-hidden mb-4 shadow-lg">
                  <div 
                    className="w-full h-full bg-flid-accent bg-opacity-20 dark:bg-flid-accent-dark dark:bg-opacity-30 flex items-center justify-center group-hover:scale-105 transition-transform duration-500"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <h3 className="text-xl font-bold text-white drop-shadow-md relative z-10">{projectId.split('-').join(' ')}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SustainablePackagingPage;
