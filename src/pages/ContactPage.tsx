import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout.tsx';
import FAQSection from '../components/ui/FAQSection.tsx';
import LocationMap from '../components/ui/LocationMap.tsx';
import L from 'leaflet';

const ContactPage = () => {
  // Fix for Leaflet default marker icons when using SSR or code splitting
  useEffect(() => {
    // Fix Leaflet's default icon issue in production
    delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
    
    // Apply custom styles to map for dark/light mode
    const updateMapStyles = () => {
      const mapContainer = document.querySelector('.leaflet-container');
      if (mapContainer) {
        const isDark = document.documentElement.classList.contains('dark');
        if (isDark) {
          mapContainer.classList.add('dark-map');
        } else {
          mapContainer.classList.remove('dark-map');
        }
      }
    };
    
    // Run once on load
    updateMapStyles();
    
    // Add observer for theme changes
    const observer = new MutationObserver(updateMapStyles);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });
    
    return () => observer.disconnect();
  }, []);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    formType: 'general',
    budget: '',
    timeframe: '',
    position: '',
    experience: '',
    portfolio: '',
    hearAboutUs: '',
    newsletter: false,
    privacy: false
  });
  
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    privacy: '',
    portfolio: '',
    experience: '',
    position: '',
    budget: '',
    timeframe: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: false,
    message: '',
    progress: 0
  });
    // Warsaw coordinates
  const mapPosition: [number, number] = [52.2297, 21.0122];
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear the error for this field if it exists
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };
  const handleFormTypeChange = (type: string) => {
    setFormData({
      ...formData,
      formType: type
    });
  };  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Reset previous errors
    const errors = {
      name: '',
      email: '',
      phone: '',
      message: '',
      privacy: '',
      portfolio: '',
      experience: '',
      position: '',
      budget: '',
      timeframe: ''
    };
    let hasError = false;
    
    // Validate name
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      hasError = true;
    }
    
    // Validate email
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      hasError = true;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
      hasError = true;
    }
    
    // Validate message
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      hasError = true;
    }
    
    // Form type specific validations
    if (formData.formType === 'project') {
      // Validate budget for project inquiries
      if (!formData.budget.trim()) {
        errors.budget = 'Please select a budget range';
        hasError = true;
      }
      
      // Validate timeframe for project inquiries
      if (!formData.timeframe.trim()) {
        errors.timeframe = 'Please select a project timeframe';
        hasError = true;
      }
    }
    
    if (formData.formType === 'careers') {
      // Validate position
      if (!formData.position.trim()) {
        errors.position = 'Please specify the position you\'re applying for';
        hasError = true;
      }
      
      // Validate experience
      if (!formData.experience.trim()) {
        errors.experience = 'Please select your experience level';
        hasError = true;
      }
      
      // Validate portfolio link for job applications
      if (!formData.portfolio.trim()) {
        errors.portfolio = 'Portfolio link or description is required';
        hasError = true;      } else if (
        formData.portfolio.includes('http') && 
        !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i.test(formData.portfolio)
      ) {
        errors.portfolio = 'Please enter a valid URL';
        hasError = true;
      }
    }
    
    // Validate privacy policy acceptance
    if (!formData.privacy) {
      errors.privacy = 'You must accept the privacy policy';
      hasError = true;
    }
    
    if (hasError) {
      setFormErrors(errors);
      setFormStatus({
        submitted: false,
        submitting: false,
        error: true,
        message: 'Please correct the errors in the form.',
        progress: 0
      });
      return;
    }
    
    // In a real app, this would be an API call
    // Simulate form submission with loading state
    setFormStatus({
      submitted: false,
      submitting: true,
      error: false,
      message: 'Sending your message...',
      progress: 30
    });
    
    // Simulate API delay with progress updates
    setTimeout(() => {
      setFormStatus(prev => ({
        ...prev,
        progress: 60,
        message: 'Almost there...'
      }));
      
      setTimeout(() => {
        setFormStatus({
          submitted: true,
          submitting: false,
          error: false,
          message: 'Your message has been sent! We\'ll get back to you soon.',
          progress: 100
        });
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
          formType: 'general',
          budget: '',
          timeframe: '',
          position: '',
          experience: '',
          portfolio: '',
          hearAboutUs: '',
          newsletter: false,
          privacy: false
        });
        
        // Reset status message after 5 seconds
        setTimeout(() => {
          setFormStatus({
            submitted: false,
            submitting: false,
            error: false,
            message: '',
            progress: 0
          });
        }, 5000);
      }, 800);
    }, 1200);
  };
  // No additional animation configs needed
  
  // FAQs for the contact page
  const contactFaqs = [
    {
      question: "How soon can I expect a response?",
      answer: "We typically respond to all inquiries within 24-48 hours during business days."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, we collaborate with clients worldwide and have experience working across different time zones."
    },
    {
      question: "What information should I include in my project inquiry?",
      answer: "It's helpful to include your project timeline, goals, budget range, and any specific requirements you have in mind."
    },
    {
      question: "Can I request a quote without committing to a project?",
      answer: "Absolutely! We're happy to provide quotes and proposals with no obligation."
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer: "Yes, we offer various maintenance and support packages tailored to your needs."
    }
  ];    return (
    <Layout><div className="py-20 bg-flid-light dark:bg-gray-900 relative">
        {/* Creative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute top-0 right-0 h-96 w-96 text-flid-accent/5 dark:text-flid-accent/10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M42.7,-62.2C55.9,-53.4,67.4,-42,74.4,-27.5C81.4,-13,83.9,4.6,78.5,19C73.1,33.5,59.9,44.8,45.9,53.5C31.8,62.1,16.9,68.2,0.4,67.6C-16,67,-32,59.7,-43.6,49.2C-55.2,38.7,-62.3,25,-67.7,9.4C-73,-6.3,-76.6,-23.8,-70.3,-37.3C-64.1,-50.7,-48,-60,-33,-66.7C-17.9,-73.3,-3.9,-77.4,10.2,-74.8C24.4,-72.1,29.5,-70.9,42.7,-62.2Z" transform="translate(100 100)" />
          </svg>
          <svg className="absolute bottom-0 left-0 h-64 w-64 text-flid-accent/10 dark:text-flid-accent-dark/10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M37.9,-53.2C49.1,-42.8,58,-31.1,65.8,-16.2C73.5,-1.4,80,16.6,76.4,32.2C72.8,47.9,59,61.3,42.8,68.5C26.6,75.6,8,76.4,-8.8,72.8C-25.6,69.2,-40.7,61.3,-51.3,49.6C-62,37.9,-68.1,22.4,-70.4,6.3C-72.6,-9.8,-70.9,-26.4,-62.3,-39C-53.7,-51.6,-38.2,-60,-24,-63.3C-9.8,-66.6,3.2,-64.8,15.6,-60.6C28,-56.3,39.7,-49.7,50.1,-40.1C60.5,-30.5,69.6,-17.9,69.7,-5.1C69.7,7.7,60.8,20.7,50.4,32C40.1,43.3,28.2,52.9,13.9,60.2C-0.5,67.5,-17.3,72.7,-28.9,67.7C-40.6,62.8,-47.2,47.7,-54.4,34.2C-61.6,20.7,-69.5,8.9,-71.9,-4.4C-74.3,-17.7,-71.3,-32.5,-62.4,-42.1C-53.6,-51.7,-38.9,-56.1,-25.5,-59.1C-12,-62.2,0.1,-63.9,12,-60.9C23.8,-57.9,35.5,-50.1,37.9,-53.2Z" transform="translate(100 100)" />
          </svg>
          
          {/* Floating 3D geometric elements */}
          <div className="absolute top-40 left-1/4 w-20 h-20 md:w-28 md:h-28">
            <motion.div 
              className="w-full h-full relative animate-float-slow"
              style={{ perspective: "800px" }}
            >              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-flid-accent/20 to-flid-primary/20 dark:from-flid-accent/30 dark:to-flid-accent-dark/40 rounded-xl backdrop-blur-sm border border-white/20 dark:border-white/10"
                style={{ boxShadow: "0 5px 15px rgba(139, 125, 209, 0.1)" }}
                animate={{ 
                  rotateX: [0, 25, 0, -25, 0],
                  rotateY: [0, 25, 0, -25, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 12,
                  ease: "easeInOut" 
                }}
              />
            </motion.div>
          </div>
          
          <div className="absolute top-60 right-1/4 w-16 h-16 md:w-24 md:h-24">
            <motion.div 
              className="w-full h-full relative animate-float-slow"
              style={{ perspective: "800px" }}
              animate={{ rotate: 360 }}
              transition={{ 
                repeat: Infinity, 
                duration: 20,
                ease: "linear" 
              }}
            >              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-flid-primary/20 to-flid-accent/30 dark:from-flid-accent-dark/20 dark:to-flid-accent/40 rounded-full backdrop-blur-sm border border-white/20 dark:border-white/10"
                style={{ boxShadow: "0 5px 15px rgba(139, 125, 209, 0.1)" }}
                animate={{ 
                  scale: [1, 1.1, 1, 0.9, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 10,
                  ease: "easeInOut" 
                }}
              />
            </motion.div>
          </div>
          
          {/* Animated connecting lines between elements */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
            <motion.path
              d="M200,150 C350,120 450,250 600,200"
              stroke="url(#gradient)"
              strokeWidth="1"
              strokeDasharray="5,5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <motion.path
              d="M250,300 C300,200 350,300 400,250 C450,200 500,350 600,300"
              stroke="url(#gradient)"
              strokeWidth="1"
              strokeDasharray="5,5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: 0.8 }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B7DD1" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#D2CDE8" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
          <div className="container-wide relative z-10">
          {/* Page title with animated reveal */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >            <motion.h1 
              className="relative inline-block text-4xl font-bold text-flid-dark dark:text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="text-flid-accent dark:text-flid-accent-dark relative">
                <motion.svg
                  className="absolute -bottom-1 left-0 w-full h-2 text-flid-accent/30 dark:text-flid-accent-dark/30"
                  viewBox="0 0 100 15" 
                  preserveAspectRatio="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <motion.path
                    d="M0,7.5 C15,2.5 35,12.5 50,7.5 C65,2.5 85,12.5 100,7.5"
                    fill="none" 
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </motion.svg>              </span>
            </motion.h1>
            <motion.p 
              className="text-flid-dark/70 dark:text-gray-300 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              
            </motion.p>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row gap-16 items-start" id="contact-form">
            {/* Contact Form */}              <motion.div 
                className="lg:w-2/3 glass-card p-8 md:p-10 shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.3
              }}
              style={{ boxShadow: "0 10px 30px rgba(139, 125, 209, 0.05)" }}
              whileHover={{ boxShadow: "0 30px 60px rgba(139, 125, 209, 0.15)" }}
            >{/* Form Type Selection with enhanced look */}
              <div className="mb-12">
                <motion.h2 
                  className="text-3xl font-bold text-flid-dark dark:text-white mb-8 relative inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  How can we help you?
                  <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-flid-accent rounded-full"></span>
                </motion.h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { 
                      type: 'general', 
                      label: 'General Inquiry',
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      ),
                      description: 'Questions about our services or company'
                    },
                    { 
                      type: 'project', 
                      label: 'Project Collaboration',
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      ),
                      description: 'Work with us on your next project'
                    },
                    { 
                      type: 'careers', 
                      label: 'Join Our Team',
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      ),
                      description: 'Apply for open positions'
                    },
                    { 
                      type: 'press', 
                      label: 'Press & Media',
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      ),
                      description: 'Media inquiries and resources'
                    }
                  ].map((option, index) => (
                    <motion.button
                      key={option.type}
                      type="button"
                      className={`flex flex-col items-center px-6 py-5 rounded-xl font-medium text-center transition-all ${
                        formData.formType === option.type 
                          ? 'bg-flid-accent dark:bg-flid-accent-dark text-white shadow-lg ring-4 ring-flid-accent/20 dark:ring-flid-accent-dark/20' 
                          : 'bg-white dark:bg-gray-700/80 text-flid-dark dark:text-white hover:bg-flid-accent/5 dark:hover:bg-flid-accent/10 hover:shadow-lg'
                      }`}
                      onClick={() => handleFormTypeChange(option.type)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      whileTap={{ y: 0 }}
                    >
                      <div className={`${formData.formType === option.type ? 'text-white' : 'text-flid-accent dark:text-flid-accent-dark'}`}>
                        {option.icon}
                      </div>
                      <span className="font-bold mb-1">{option.label}</span>
                      <span className="text-xs opacity-80">{option.description}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">                    <div className="relative group">                      
                      <label htmlFor="name" className="block text-flid-dark dark:text-white font-bold mb-2 transition-all">Name *</label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-5 py-4 rounded-lg border-2 border-flid-dark/10 dark:border-flid-accent/30 dark:bg-gray-700/80 dark:text-white focus:outline-none focus:border-flid-accent dark:focus:border-flid-accent-dark transition-all duration-300"
                          placeholder="Your name"
                        />
                        <div className="absolute left-4 top-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-flid-accent/50 dark:text-flid-accent-dark/70" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      {formErrors.name && (
                        <motion.p 
                          className="text-red-500 text-sm mt-1 flex items-center"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          {formErrors.name}
                        </motion.p>
                      )}
                    </div>
                    <div className="relative group">                      
                      <label htmlFor="email" className="block text-flid-dark dark:text-white font-bold mb-2">Email *</label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-5 py-4 rounded-lg border-2 border-flid-dark/10 dark:border-flid-accent/30 dark:bg-gray-700/80 dark:text-white focus:outline-none focus:border-flid-accent dark:focus:border-flid-accent-dark transition-all duration-300"
                          placeholder="your.email@example.com"
                        />
                        <div className="absolute left-4 top-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-flid-accent/50 dark:text-flid-accent-dark/70" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                      </div>
                      {formErrors.email && (
                        <motion.p 
                          className="text-red-500 text-sm mt-1 flex items-center" 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          {formErrors.email}
                        </motion.p>
                      )}
                    </div>
                  </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="relative group">
                      <label htmlFor="phone" className="block text-flid-dark dark:text-white font-bold mb-2">Phone</label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 rounded-lg border-2 border-flid-dark/10 dark:border-flid-accent/30 dark:bg-gray-700/80 dark:text-white focus:outline-none focus:border-flid-accent dark:focus:border-flid-accent-dark transition-all duration-300"
                          placeholder="Your phone number"
                        />
                        <div className="absolute left-4 top-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-flid-accent/50 dark:text-flid-accent-dark/70" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                        </div>
                      </div>
                      {formErrors.phone && (
                        <motion.p 
                          className="text-red-500 text-sm mt-1 flex items-center"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          {formErrors.phone}
                        </motion.p>
                      )}
                    </div>
                    <div className="relative group">
                      <label htmlFor="company" className="block text-flid-dark dark:text-white font-bold mb-2">Company</label>
                      <div className="relative">
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 rounded-lg border-2 border-flid-dark/10 dark:border-flid-accent/30 dark:bg-gray-700/80 dark:text-white focus:outline-none focus:border-flid-accent dark:focus:border-flid-accent-dark transition-all duration-300"
                          placeholder="Your company (if applicable)"
                        />
                        <div className="absolute left-4 top-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-flid-accent/50 dark:text-flid-accent-dark/70" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                    <div className="mb-6 relative group">                    
                    <label htmlFor="subject" className="block text-flid-dark dark:text-white font-bold mb-2">Subject</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 rounded-lg border-2 border-flid-dark/10 dark:border-flid-accent/30 dark:bg-gray-700/80 dark:text-white focus:outline-none focus:border-flid-accent dark:focus:border-flid-accent-dark transition-all duration-300"
                        placeholder="What's this about?"
                      />
                      <div className="absolute left-4 top-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-flid-accent/50 dark:text-flid-accent-dark/70" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Conditional Fields Based on Form Type */}
                  {formData.formType === 'project' && (
                    <div className="mb-6 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="budget" className="block text-flid-dark dark:text-white font-medium mb-2">Budget Range *</label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg border border-flid-dark/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-flid-accent/50"
                          >
                            <option value="">Select budget range</option>
                            <option value="< $5,000">Less than $5,000</option>
                            <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                            <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                            <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                            <option value="> $50,000">More than $50,000</option>
                          </select>
                          {formErrors.budget && <p className="text-red-500 text-sm mt-1">{formErrors.budget}</p>}
                        </div>
                        <div>
                          <label htmlFor="timeframe" className="block text-flid-dark dark:text-white font-medium mb-2">Project Timeframe *</label>
                          <select
                            id="timeframe"
                            name="timeframe"
                            value={formData.timeframe}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg border border-flid-dark/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-flid-accent/50"
                          >
                            <option value="">Select timeframe</option>
                            <option value="< 1 month">Less than 1 month</option>
                            <option value="1-3 months">1-3 months</option>
                            <option value="3-6 months">3-6 months</option>
                            <option value="> 6 months">More than 6 months</option>
                          </select>
                          {formErrors.timeframe && <p className="text-red-500 text-sm mt-1">{formErrors.timeframe}</p>}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {formData.formType === 'careers' && (
                    <div className="mb-6 space-y-6">
                      <div>
                        <label htmlFor="position" className="block text-flid-dark dark:text-white font-medium mb-2">Position You're Applying For *</label>
                        <input
                          type="text"
                          id="position"
                          name="position"
                          value={formData.position}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-flid-dark/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-flid-accent/50"
                          placeholder="E.g., UX Designer, Project Manager"
                        />
                        {formErrors.position && <p className="text-red-500 text-sm mt-1">{formErrors.position}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="experience" className="block text-flid-dark dark:text-white font-medium mb-2">Experience Level *</label>
                        <select
                          id="experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-flid-dark/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-flid-accent/50"
                        >
                          <option value="">Select experience level</option>
                          <option value="Junior">Junior (0-2 years)</option>
                          <option value="Mid-level">Mid-level (2-5 years)</option>
                          <option value="Senior">Senior (5+ years)</option>
                          <option value="Lead">Lead/Manager</option>
                        </select>
                        {formErrors.experience && <p className="text-red-500 text-sm mt-1">{formErrors.experience}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="portfolio" className="block text-flid-dark dark:text-white font-medium mb-2">Portfolio/LinkedIn/GitHub *</label>
                        <input
                          type="text"
                          id="portfolio"
                          name="portfolio"
                          value={formData.portfolio}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-flid-dark/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-flid-accent/50"
                          placeholder="Link to your portfolio or professional profile"
                        />
                        {formErrors.portfolio && <p className="text-red-500 text-sm mt-1">{formErrors.portfolio}</p>}
                      </div>
                    </div>
                  )}
                    <div className="mb-6 relative group">
                    <label htmlFor="hearAboutUs" className="block text-flid-dark dark:text-white font-bold mb-2">How did you hear about us?</label>
                    <div className="relative">
                      <select
                        id="hearAboutUs"
                        name="hearAboutUs"
                        value={formData.hearAboutUs}
                        onChange={handleInputChange}
                        className="w-full appearance-none px-5 py-4 rounded-lg border-2 border-flid-dark/10 dark:border-flid-accent/30 dark:bg-gray-700/80 dark:text-white focus:outline-none focus:border-flid-accent dark:focus:border-flid-accent-dark transition-all duration-300"
                      >
                        <option value="">Select an option</option>
                        <option value="Search Engine">Search Engine</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Friend/Colleague">Friend/Colleague</option>
                        <option value="Online Advertisement">Online Advertisement</option>
                        <option value="Event">Event</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="absolute left-4 top-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-flid-accent/50 dark:text-flid-accent-dark/70" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                        <svg className="h-5 w-5 text-flid-dark/60 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-xs mt-1 text-flid-dark/60 dark:text-gray-400">
                      This helps us understand how visitors find our website
                    </p>
                  </div>
                    <div className="mb-6 relative group">                    
                    <label htmlFor="message" className="block text-flid-dark dark:text-white font-bold mb-2">Message *</label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}                      
                        className="w-full px-5 pt-12 pb-4 rounded-lg border-2 border-flid-dark/10 dark:border-flid-accent/30 dark:bg-gray-700/80 dark:text-white focus:outline-none focus:border-flid-accent dark:focus:border-flid-accent-dark transition-all duration-300"
                        placeholder="Tell us about your inquiry..."
                      ></textarea>
                      <div className="absolute left-0 top-0 w-full p-3 border-b border-flid-dark/10 dark:border-gray-600 bg-flid-light/50 dark:bg-gray-700 rounded-t-lg flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-flid-accent/70 dark:text-flid-accent-dark/70 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-flid-dark/60 dark:text-gray-300">Share your thoughts, questions, or project details</span>
                      </div>
                    </div>
                    {formErrors.message && (
                      <motion.p 
                        className="text-red-500 text-sm mt-1 flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        {formErrors.message}
                      </motion.p>
                    )}
                  </div>
                    {/* Enhanced checkboxes for Newsletter and Privacy Policy */}
                  <div className="space-y-6 mb-10">
                    <div className="flex items-start">
                      <div className="flex items-center h-6">
                        <input
                          type="checkbox"
                          id="newsletter"
                          name="newsletter"
                          checked={formData.newsletter}
                          onChange={handleInputChange}
                          className="h-5 w-5 text-flid-accent rounded border-2 border-flid-dark/20 dark:border-gray-500 focus:ring-flid-accent dark:focus:ring-flid-accent-dark focus:ring-2 focus:ring-offset-2 transition-all duration-300 cursor-pointer"
                        />
                        <div className={`absolute ${formData.newsletter ? 'scale-100' : 'scale-0'} transition-transform duration-300 pointer-events-none`}>
                          <svg className="h-5 w-5 text-flid-accent dark:text-flid-accent-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <label htmlFor="newsletter" className="ml-3 block text-flid-dark dark:text-gray-200 transition-colors hover:text-flid-accent dark:hover:text-flid-accent-dark cursor-pointer">
                        <span className="font-medium">Subscribe to our newsletter</span>
                        <p className="text-sm text-flid-dark/60 dark:text-gray-400 mt-1">Get updates on our projects, services, and industry insights</p>
                      </label>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-6">
                        <input
                          type="checkbox"
                          id="privacy"
                          name="privacy"
                          checked={formData.privacy}
                          onChange={handleInputChange}
                          className="h-5 w-5 text-flid-accent rounded border-2 border-flid-dark/20 dark:border-gray-500 focus:ring-flid-accent dark:focus:ring-flid-accent-dark focus:ring-2 focus:ring-offset-2 transition-all duration-300 cursor-pointer"
                        />
                        <div className={`absolute ${formData.privacy ? 'scale-100' : 'scale-0'} transition-transform duration-300 pointer-events-none`}>
                          <svg className="h-5 w-5 text-flid-accent dark:text-flid-accent-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-3">
                        <label htmlFor="privacy" className="block text-flid-dark dark:text-gray-200 font-medium transition-colors hover:text-flid-accent dark:hover:text-flid-accent-dark cursor-pointer">
                          Privacy Policy Agreement *
                        </label>
                        <p className="text-sm text-flid-dark/60 dark:text-gray-400 mt-1">
                          I agree to the <a href="#" className="text-flid-accent dark:text-flid-accent-dark underline hover:text-flid-accent/80 dark:hover:text-flid-accent-dark/80 font-medium">privacy policy</a> and consent to the processing of my data
                        </p>
                        {formErrors.privacy && (
                          <motion.p 
                            className="text-red-500 text-sm mt-1 flex items-center"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            {formErrors.privacy}
                          </motion.p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>                {/* Form Status and Progress with enhanced styling */}
                {formStatus.message && (
                  <motion.div 
                    className={`p-6 rounded-xl mb-8 shadow-lg border ${
                      formStatus.error 
                        ? 'bg-red-50 border-red-200 text-red-700 dark:bg-red-900/30 dark:border-red-800 dark:text-red-300' 
                        : 'bg-green-50 border-green-200 text-green-700 dark:bg-green-900/30 dark:border-green-800 dark:text-green-300'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex items-center">
                      {formStatus.error ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ) : formStatus.submitted ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 flex-shrink-0 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      )}
                      <p className="font-medium">{formStatus.message}</p>
                    </div>
                    
                    {formStatus.submitting && formStatus.progress > 0 && (
                      <div className="mt-4">
                        <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 overflow-hidden">
                          <motion.div 
                            className="bg-flid-accent dark:bg-flid-accent-dark h-3 rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: `${formStatus.progress}%` }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                <div className="flex flex-wrap gap-4 items-center">
                  <motion.button
                    type="submit"
                    className="px-8 py-4 bg-flid-accent dark:bg-flid-accent-dark text-white rounded-xl font-bold hover:bg-flid-accent/90 dark:hover:bg-flid-accent-dark/90 transition-all shadow-lg hover:shadow-flid-accent/20 dark:hover:shadow-flid-accent-dark/20 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={formStatus.submitting}
                  >
                    {formStatus.submitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </motion.button>
                  
                  <motion.button
                    type="reset"
                    className="px-6 py-4 border-2 border-flid-accent/20 dark:border-flid-accent-dark/30 text-flid-dark dark:text-white rounded-xl font-medium hover:bg-flid-accent/5 dark:hover:bg-flid-accent-dark/10 transition-all"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={formStatus.submitting}
                    onClick={() => {
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        subject: '',
                        message: '',
                        formType: 'general',
                        budget: '',
                        timeframe: '',
                        position: '',
                        experience: '',
                        portfolio: '',
                        hearAboutUs: '',
                        newsletter: false,
                        privacy: false
                      });
                      setFormErrors({
                        name: '',
                        email: '',
                        phone: '',
                        message: '',
                        privacy: '',
                        portfolio: '',
                        experience: '',
                        position: '',
                        budget: '',
                        timeframe: ''
                      });
                    }}
                  >
                    Reset Form
                  </motion.button>
                </div>
              </form>
            </motion.div>            {/* Contact Information - Enhanced with creative styling */}
            <motion.div 
              className="lg:w-1/3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {/* Office Information */}              <motion.div 
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 shadow-xl mb-8 border border-flid-accent/10 dark:border-flid-accent/20 relative overflow-hidden"
                style={{ boxShadow: "0 10px 30px rgba(139, 125, 209, 0.05)" }}
                whileHover={{ boxShadow: "0 25px 50px rgba(139, 125, 209, 0.15)" }}
              >
                {/* Decorative elements */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-flid-accent/5 dark:bg-flid-accent/10 blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-flid-accent/5 dark:bg-flid-accent/10 blur-3xl"></div>
                
                <motion.h2 
                  className="text-2xl font-bold text-flid-dark dark:text-white mb-8 relative inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  Visit Our Office
                  <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-flid-accent rounded-full"></span>
                </motion.h2>
                
                <div className="space-y-6 relative z-10">
                  <motion.div 
                    className="flex"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <div className="text-flid-accent dark:text-flid-accent-dark p-3 mr-4 rounded-full bg-flid-light dark:bg-gray-700 shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-flid-dark dark:text-white">Address</h3>
                      <p className="text-flid-dark/70 dark:text-gray-300 mt-1">
                        Marszałkowska 142<br />
                        00-061 Warsaw<br />
                        Poland
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <div className="text-flid-accent dark:text-flid-accent-dark p-3 mr-4 rounded-full bg-flid-light dark:bg-gray-700 shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-flid-dark dark:text-white">Email</h3>
                      <motion.a 
                        href="mailto:contact@flid.pl"
                        className="text-flid-accent dark:text-flid-accent-dark inline-block mt-1 relative group"
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        contact@flid.pl
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-flid-accent dark:bg-flid-accent-dark transition-all duration-300 group-hover:w-full"></span>
                      </motion.a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <div className="text-flid-accent dark:text-flid-accent-dark p-3 mr-4 rounded-full bg-flid-light dark:bg-gray-700 shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-flid-dark dark:text-white">Phone</h3>
                      <motion.a 
                        href="tel:+48221234567"
                        className="text-flid-dark/70 dark:text-gray-300 inline-block mt-1 hover:text-flid-accent dark:hover:text-flid-accent-dark transition-colors"
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        +48 22 123 45 67
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                <motion.div 
                  className="mt-10"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                >
                  <div className="h-64 rounded-xl overflow-hidden shadow-lg border border-flid-accent/10 dark:border-flid-accent/20">
                    <LocationMap position={mapPosition} popupText="FLID Office" />
                  </div>
                </motion.div>
              </motion.div>              {/* Working Hours with enhanced styling */}              <motion.div 
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 shadow-xl mb-8 border border-flid-accent/10 dark:border-flid-accent/20 relative overflow-hidden"
                style={{ boxShadow: "0 10px 30px rgba(139, 125, 209, 0.05)" }}
                whileHover={{ boxShadow: "0 25px 50px rgba(139, 125, 209, 0.15)" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                {/* Decorative element - a subtle clock face in background */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-32 h-32 opacity-5 dark:opacity-10">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full text-flid-accent">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                </div>
                
                <motion.h2 
                  className="text-2xl font-bold text-flid-dark dark:text-white mb-8 relative inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  Working Hours
                  <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-flid-accent rounded-full"></span>
                </motion.h2>
                
                <div className="space-y-4 relative z-10">
                  {[
                    { day: 'Monday - Friday', hours: '9:00 - 17:00', active: true },
                    { day: 'Saturday', hours: 'By appointment', active: true },
                    { day: 'Sunday', hours: 'Closed', active: false }
                  ].map((schedule, index) => (
                    <motion.div 
                      key={schedule.day}
                      className={`flex justify-between items-center p-4 rounded-xl ${
                        schedule.active 
                          ? 'bg-flid-light/50 dark:bg-gray-700/50' 
                          : 'bg-gray-100/50 dark:bg-gray-800/50'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                    >
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-3 ${
                          schedule.active 
                            ? 'bg-green-500 animate-pulse' 
                            : 'bg-gray-400'
                        }`}></div>
                        <span className="text-flid-dark/80 dark:text-gray-200 font-medium">{schedule.day}</span>
                      </div>
                      <span className={`font-bold text-right ${
                        schedule.active 
                          ? 'text-flid-dark dark:text-white' 
                          : 'text-flid-dark/60 dark:text-gray-400'
                      }`}>{schedule.hours}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Social Media with enhanced styling */}              <motion.div 
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-flid-accent/10 dark:border-flid-accent/20 relative overflow-hidden"
                style={{ boxShadow: "0 10px 30px rgba(139, 125, 209, 0.05)" }}
                whileHover={{ boxShadow: "0 25px 50px rgba(139, 125, 209, 0.15)" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                {/* Decorative network connection lines */}
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M20,20 L80,80" stroke="currentColor" strokeWidth="1" className="text-flid-accent" />
                    <path d="M80,20 L20,80" stroke="currentColor" strokeWidth="1" className="text-flid-accent" />
                    <path d="M50,10 L50,90" stroke="currentColor" strokeWidth="1" className="text-flid-accent" />
                    <path d="M10,50 L90,50" stroke="currentColor" strokeWidth="1" className="text-flid-accent" />
                  </svg>
                </div>
                
                <motion.h2 
                  className="text-2xl font-bold text-flid-dark dark:text-white mb-8 relative inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  Connect With Us
                  <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-flid-accent rounded-full"></span>
                </motion.h2>
                
                <div className="grid grid-cols-4 gap-4 relative z-10">
                  {[
                    { 
                      name: 'Instagram', 
                      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
                      color: 'from-pink-500 to-purple-500' 
                    },
                    { 
                      name: 'Twitter', 
                      icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z',
                      color: 'from-blue-400 to-blue-600'
                    },
                    { 
                      name: 'LinkedIn', 
                      icon: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z',
                      color: 'from-blue-600 to-blue-800'
                    },
                    { 
                      name: 'Facebook', 
                      icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.634c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.738-.9 10.126-5.864 10.126-11.854z',
                      color: 'from-blue-500 to-blue-700'
                    }
                  ].map((social, index) => (
                    <motion.a
                      key={social.name}
                      href="#"
                      className="flex flex-col items-center justify-center group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
                      aria-label={social.name}
                    >
                      <motion.div
                        className={`w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br ${social.color} text-white shadow-lg mb-2 group-hover:shadow-xl`}
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d={social.icon} />
                        </svg>
                      </motion.div>
                      <span className="text-sm text-flid-dark/70 dark:text-gray-300 font-medium group-hover:text-flid-accent dark:group-hover:text-flid-accent-dark transition-colors">
                        {social.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>      {/* FAQ Section with enhanced styling */}
      <div className="py-24 bg-white dark:bg-gray-800 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute top-0 right-0 text-flid-accent/5 dark:text-flid-accent/10" width="404" height="404" fill="none" viewBox="0 0 404 404">
            <defs>
              <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-flid-accent" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
          </svg>
          <svg className="absolute bottom-0 left-0 text-flid-accent/5 dark:text-flid-accent/10" width="404" height="404" fill="none" viewBox="0 0 404 404">
            <defs>
              <pattern id="85737c0e-0916-41d7-917f-596dc7edfa28" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-flid-accent" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa28)" />
          </svg>
        </div>
        
        <div className="container-wide relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-flid-dark dark:text-white mb-6 relative inline-block">
              Frequently Asked <span className="text-flid-accent dark:text-flid-accent-dark">Questions</span>
              <motion.span 
                className="absolute -bottom-3 left-1/4 right-1/4 h-1 bg-flid-accent dark:bg-flid-accent-dark rounded-full"
                initial={{ width: "0%", left: "50%" }}
                animate={{ width: "50%", left: "25%" }}
                transition={{ duration: 1, delay: 0.5 }}
              ></motion.span>
            </h2>
            <p className="text-xl text-flid-dark/80 dark:text-gray-300 max-w-3xl mx-auto mt-8">
              Find answers to common questions about our services and process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">            <motion.div
              className="bg-flid-light/70 dark:bg-gray-900/50 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-flid-accent/10 dark:border-flid-accent/20"
              style={{ boxShadow: "0 10px 30px rgba(139, 125, 209, 0.05)" }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ boxShadow: "0 25px 50px rgba(139, 125, 209, 0.15)" }}
            >
              <FAQSection 
                title="" 
                faqs={contactFaqs.slice(0, Math.ceil(contactFaqs.length / 2))} 
                className="h-full"
              />
            </motion.div>            <motion.div
              className="bg-flid-light/70 dark:bg-gray-900/50 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-flid-accent/10 dark:border-flid-accent/20"
              style={{ boxShadow: "0 10px 30px rgba(139, 125, 209, 0.05)" }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ boxShadow: "0 25px 50px rgba(139, 125, 209, 0.15)" }}
            >
              <FAQSection 
                title="" 
                faqs={contactFaqs.slice(Math.ceil(contactFaqs.length / 2))} 
                className="h-full"
              />
            </motion.div>
          </div>
          
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <p className="text-flid-dark/70 dark:text-gray-300 mb-6">
              Still have questions? We're here to help!
            </p>
            <motion.a
              href="#contact-form"
              className="inline-flex items-center px-8 py-4 bg-flid-accent dark:bg-flid-accent-dark text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-flid-accent/20 dark:hover:shadow-flid-accent-dark/30"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Our Team
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
