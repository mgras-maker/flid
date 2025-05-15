import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/layout/Layout.tsx';
import ParallaxHero from '../components/ui/ParallaxHero.tsx';
import FAQSection from '../components/ui/FAQSection.tsx';
import LocationMap from '../components/ui/LocationMap.tsx';
import L from 'leaflet';

const ContactPage = () => {
  // Fix for Leaflet default marker icons when using SSR or code splitting
  useEffect(() => {
    // Fix Leaflet's default icon issue in production
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
  }, []);  const [formData, setFormData] = useState({
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
  const mapPosition: [number, number] = [52.2297, 21.0122];const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        hasError = true;
      } else if (
        formData.portfolio.includes('http') && 
        !/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i.test(formData.portfolio)
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
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 } 
    }
  };
  
  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 } 
    }
  };
  
  const staggerItems = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.7, 0.9, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };
  
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
  ];
  
  return (
    <Layout>      <ParallaxHero 
        title="How Can We" 
        highlightedText="Help You?" 
        description="Our team is ready to answer your questions and explore how we can work together."
        backgroundImage="/public/projects/energia-jutra.jpg"
        height="450px"
      />
      
      <div className="py-16 bg-flid-light dark:bg-gray-900">
        <div className="container-wide">          {/* Empty space for better layout */}
          <div className="h-8"></div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Contact Form */}
            <motion.div 
              className="lg:w-2/3 bg-white dark:bg-gray-800 rounded-xl p-8 md:p-10 shadow-xl relative overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Animated background elements */}
              <motion.div 
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-flid-accent opacity-5 z-0"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.05, 0.08, 0.05],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div 
                className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-purple-500 opacity-5 z-0"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.05, 0.07, 0.05],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
                {/* Animated decorative lines */}
              <motion.div 
                className="absolute top-10 right-10 w-1 h-20 bg-gradient-to-b from-transparent via-flid-accent to-transparent opacity-30 z-0 hidden md:block"
                animate={{
                  height: ["20%", "30%", "20%"],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div 
                className="absolute bottom-10 left-20 w-20 h-1 bg-gradient-to-r from-transparent via-flid-accent to-transparent opacity-30 z-0 hidden md:block"
                animate={{
                  width: ["20%", "30%", "20%"],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              {/* Additional animated element */}
              <motion.div
                className="absolute top-1/2 left-0 w-3 h-3 rounded-full bg-flid-accent opacity-20 z-0 hidden md:block"
                animate={{
                  x: ["0%", "150%", "0%"],
                  y: ["0%", "100%", "0%"],
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />{/* Form Type Selection */}
              <motion.div 
                className="mb-8 relative z-10"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
              >
                <h2 className="text-2xl font-bold text-flid-dark dark:text-white mb-6">How can we help you?</h2>
                <motion.div 
                  className="flex flex-wrap gap-3"
                  variants={staggerItems}
                  initial="hidden"
                  animate="visible"
                >                  {[
                    { type: 'general', label: 'General Inquiry' },
                    { type: 'project', label: 'Project Collaboration' },
                    { type: 'careers', label: 'Join Our Team' },
                    { type: 'press', label: 'Press & Media' }
                  ].map(option => (
                    <motion.button
                      key={option.type}
                      type="button"
                      className={`px-6 py-3 rounded-lg font-medium transition-all ${
                        formData.formType === option.type 
                          ? 'bg-flid-accent text-white shadow-md' 
                          : 'bg-flid-light dark:bg-gray-700 text-flid-dark dark:text-white hover:bg-flid-accent/10 dark:hover:bg-flid-accent/20'
                      }`}
                      onClick={() => handleFormTypeChange(option.type)}
                      variants={fadeInScale}
                      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {option.label}
                    </motion.button>
                  ))}
                </motion.div>
              </motion.div>              {/* Contact Form */}              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                    variants={staggerItems}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div 
                      variants={fadeInScale}
                      initial="hidden"
                      animate="visible"
                    >                      
                      <label htmlFor="name" className="block text-flid-dark dark:text-white font-medium mb-2">Name *</label>
                      <motion.input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-flid-dark/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-flid-accent/50"
                        placeholder="Your name"
                        whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.2)" }}
                      />
                      <AnimatePresence>
                        {formErrors.name && (
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            exit={{ opacity: 0 }}
                            className="text-red-500 text-sm mt-1"
                          >
                            {formErrors.name}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                    <motion.div 
                      variants={fadeInScale}
                      initial="hidden"
                      animate="visible"
                    >                      
                      <label htmlFor="email" className="block text-flid-dark dark:text-white font-medium mb-2">Email *</label>
                      <motion.input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-flid-dark/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-flid-accent/50"
                        placeholder="your.email@example.com"
                        whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.2)" }}
                      />
                      <AnimatePresence>
                        {formErrors.email && (
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            exit={{ opacity: 0 }}
                            className="text-red-500 text-sm mt-1"
                          >
                            {formErrors.email}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-flid-dark dark:text-white font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-flid-dark/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-flid-accent/50"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-flid-dark dark:text-white font-medium mb-2">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-flid-dark/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-flid-accent/50"
                        placeholder="Your company (if applicable)"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">                    
                    <label htmlFor="subject" className="block text-flid-dark dark:text-white font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-flid-dark/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-flid-accent/50"
                      placeholder="What's this about?"
                    />
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
                  
                  <div className="mb-6">
                    <label htmlFor="hearAboutUs" className="block text-flid-dark dark:text-white font-medium mb-2">How did you hear about us?</label>
                    <select
                      id="hearAboutUs"
                      name="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-flid-dark/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-flid-accent/50"
                    >
                      <option value="">Select an option</option>
                      <option value="Search Engine">Search Engine</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Friend/Colleague">Friend/Colleague</option>
                      <option value="Online Advertisement">Online Advertisement</option>
                      <option value="Event">Event</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">                    
                    <label htmlFor="message" className="block text-flid-dark dark:text-white font-medium mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}                      
                      className="w-full px-4 py-3 rounded-lg border border-flid-dark/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-flid-accent/50"
                      placeholder="Tell us about your inquiry..."
                    ></textarea>
                    {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                  </div>
                  
                  {/* Checkboxes for Newsletter and Privacy Policy */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="newsletter"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-flid-accent rounded border-gray-300 focus:ring-flid-accent"
                      />
                      <label htmlFor="newsletter" className="ml-3 block text-sm text-flid-dark dark:text-gray-300">
                        Subscribe to our newsletter for updates on our projects and services
                      </label>
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="privacy"
                        name="privacy"
                        checked={formData.privacy}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-flid-accent rounded border-gray-300 focus:ring-flid-accent"
                      />
                      <label htmlFor="privacy" className="ml-3 block text-sm text-flid-dark dark:text-gray-300">
                        I agree to the <a href="#" className="text-flid-accent underline hover:text-flid-accent/80">privacy policy</a> and consent to the processing of my data
                      </label>
                    </div>
                    {formErrors.privacy && <p className="text-red-500 text-sm mt-1">{formErrors.privacy}</p>}
                  </div>
                </div>

                {/* Form Status and Progress */}
                {formStatus.message && (
                  <div className={`p-4 rounded-lg mb-6 ${formStatus.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                    {formStatus.message}
                    
                    {formStatus.submitting && formStatus.progress > 0 && (
                      <div className="mt-2">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div 
                            className="bg-flid-accent h-2.5 rounded-full transition-all duration-500" 
                            style={{ width: `${formStatus.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                )}                <motion.button
                  type="submit"
                  className="px-8 py-3 bg-flid-accent dark:bg-flid-accent-dark text-white rounded-lg font-medium hover:bg-flid-accent/90 dark:hover:bg-flid-accent-dark/90 transition-colors relative overflow-hidden group"
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(99, 102, 241, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  disabled={formStatus.submitting}
                >
                  <motion.span 
                    className="absolute inset-0 w-full h-full bg-white/10 transform -translate-x-full"
                    animate={{
                      translateX: formStatus.submitting ? ["0%", "200%"] : "-100%"
                    }}
                    transition={{
                      duration: 1,
                      repeat: formStatus.submitting ? Infinity : 0,
                      ease: "linear"
                    }}
                  />
                  <span className="relative z-10">{formStatus.submitting ? 'Sending...' : 'Send Message'}</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="lg:w-1/3"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >              {/* Office Information */}
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-8"
                variants={fadeInScale}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
                whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <h2 className="text-2xl font-bold text-flid-dark dark:text-white mb-6">Visit Our Office</h2>
                <motion.div 
                  className="space-y-4"
                  variants={staggerItems}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div 
                    className="flex"
                    variants={fadeInUp}
                    whileHover={{ x: 3, transition: { duration: 0.2 } }}
                  >
                    <div className="text-flid-accent mt-1 mr-4">
                      <motion.svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        animate={pulseAnimation}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </motion.svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-flid-dark dark:text-white">Address</h3>
                      <p className="text-flid-dark/70 dark:text-gray-300">
                        Marszałkowska 142<br />
                        00-061 Warsaw<br />
                        Poland
                      </p>
                    </div>
                  </motion.div>                  <motion.div 
                    className="flex"
                    variants={fadeInUp}
                    whileHover={{ x: 3, transition: { duration: 0.2 } }}
                  >
                    <div className="text-flid-accent mt-1 mr-4">
                      <motion.svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        whileHover={{ rotate: [0, -10, 0], transition: { duration: 0.5 } }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </motion.svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-flid-dark dark:text-white">Email</h3>
                      <motion.p 
                        className="text-flid-accent dark:text-flid-accent-dark hover:underline"
                        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                      >
                        <a href="mailto:contact@flid.pl">contact@flid.pl</a>
                      </motion.p>
                    </div>
                  </motion.div>                  <motion.div 
                    className="flex"
                    variants={fadeInUp}
                    whileHover={{ x: 3, transition: { duration: 0.2 } }}
                  >
                    <div className="text-flid-accent mt-1 mr-4">
                      <motion.svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        whileHover={{ rotate: 5, scale: 1.1, transition: { duration: 0.3 } }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </motion.svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-flid-dark dark:text-white">Phone</h3>
                      <motion.p 
                        className="text-flid-dark/70 dark:text-gray-300"
                        whileHover={{ color: '#6366f1', transition: { duration: 0.2 } }}
                      >
                        +48 22 123 45 67                      </motion.p>
                    </div>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="mt-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <motion.div 
                    className="h-64 rounded-lg overflow-hidden shadow-lg"
                    whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <LocationMap position={mapPosition} popupText="FLID Office" />
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Working Hours */}
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <h2 className="text-2xl font-bold text-flid-dark dark:text-white mb-6">Working Hours</h2>
                <motion.div 
                  className="space-y-3"
                  variants={staggerItems}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div 
                    className="flex justify-between"
                    variants={fadeInUp}
                    whileHover={{ backgroundColor: "rgba(99, 102, 241, 0.05)", borderRadius: "0.375rem", padding: "0.5rem" }}
                  >
                    <span className="text-flid-dark/70 dark:text-gray-300">Monday - Friday:</span>
                    <span className="font-medium text-flid-dark dark:text-white">9:00 - 17:00</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex justify-between"
                    variants={fadeInUp}
                    whileHover={{ backgroundColor: "rgba(99, 102, 241, 0.05)", borderRadius: "0.375rem", padding: "0.5rem" }}
                  >
                    <span className="text-flid-dark/70 dark:text-gray-300">Saturday:</span>
                    <span className="font-medium text-flid-dark dark:text-white">By appointment</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex justify-between"
                    variants={fadeInUp}
                    whileHover={{ backgroundColor: "rgba(99, 102, 241, 0.05)", borderRadius: "0.375rem", padding: "0.5rem" }}
                  >
                    <span className="text-flid-dark/70 dark:text-gray-300">Sunday:</span>
                    <span className="font-medium text-flid-dark dark:text-white">Closed</span>
                  </motion.div>
                </motion.div>
              </motion.div>              {/* Social Media */}              
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <h2 className="text-2xl font-bold text-flid-dark dark:text-white mb-6">Connect With Us</h2>
                <motion.div 
                  className="flex space-x-4"
                  variants={staggerItems}
                  initial="hidden"
                  animate="visible"
                  {[
                    { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                    { name: 'Twitter', icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' },
                    { name: 'LinkedIn', icon: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' },
                    { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.634c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.738-.9 10.126-5.864 10.126-11.854z' }
                  ].map(social => (                    <motion.a
                      key={social.name}
                      href="#"                      
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-flid-light dark:bg-gray-700 text-flid-dark dark:text-white hover:bg-flid-accent hover:text-white dark:hover:bg-flid-accent-dark transition-colors"
                      whileHover={{ 
                        scale: 1.15,
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 10 
                      }}
                      aria-label={social.name}
                    >
                      <motion.svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 5 }}
                      >
                        <path d={social.icon} />
                      </motion.svg>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="container-wide">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-flid-dark dark:text-white mb-6">
              Frequently Asked <span className="text-flid-accent">Questions</span>
            </h2>
            <p className="text-xl text-flid-dark/80 dark:text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our services and process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <FAQSection 
                title="" 
                faqs={contactFaqs.slice(0, Math.ceil(contactFaqs.length / 2))} 
                className="h-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <FAQSection 
                title="" 
                faqs={contactFaqs.slice(Math.ceil(contactFaqs.length / 2))} 
                className="h-full"
              />
            </motion.div>
          </div>
        </div>      </div>
    </Layout>
  );
};

export default ContactPage;
