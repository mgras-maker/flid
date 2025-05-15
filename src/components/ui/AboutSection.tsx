import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Intersection observer to trigger animations when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    const element = document.getElementById('about-section');
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="about-section" className="section bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image with decoration */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="FLID Foundation Team" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-flid-accent"
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            <motion.div 
              className="absolute -top-8 -right-8 w-40 h-40 rounded-full border-8 border-flid-primary"
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
          </motion.div>
          
          {/* About content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-flid-dark mb-6">
              About FLID Foundation
            </h2>
            
            <div className="space-y-6 text-gray-600">
              <p>
                <span className="text-flid-accent font-semibold">FLID</span> - Foundation People-Innovations-Design - 
                was established with a vision to create balance through design and to develop positive 
                change for sustainability.
              </p>
              
              <p>
                Our team brings together experts in various design disciplines: architecture, urban planning, 
                product design, and digital experiences. This interdisciplinary approach allows us to tackle 
                complex challenges from multiple perspectives.
              </p>
              
              <p>
                We believe that thoughtful design can address some of the most pressing social and environmental 
                issues of our time. Our projects aim to create spaces and products that not only look beautiful 
                but also improve lives and contribute to a more sustainable future.
              </p>
              
              <div className="pt-4">
                <motion.a
                  href="/about"
                  className="btn btn-primary inline-flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More About Us
                  <svg 
                    className="ml-2 h-5 w-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Values section */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-flid-dark mb-12">Our Core Values</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Innovation', 
                icon: '💡', 
                description: 'We push boundaries and explore new approaches to create forward-thinking solutions.' 
              },
              { 
                title: 'Sustainability', 
                icon: '🌿', 
                description: 'We design with the planet in mind, minimizing environmental impact and promoting ecological balance.' 
              },
              { 
                title: 'Human-Centered', 
                icon: '👥', 
                description: 'We place people at the heart of our design process, creating solutions that meet genuine needs.' 
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="p-6 rounded-xl bg-flid-light"
                initial={{ y: 50, opacity: 0 }}
                animate={isVisible ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-flid-dark mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
