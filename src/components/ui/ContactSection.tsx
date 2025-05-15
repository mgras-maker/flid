import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, here you would send the data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
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
    
    const element = document.getElementById('contact-section');
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (    <section id="contact-section" className="section bg-white dark:bg-gray-800">
      <div className="container-wide">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >          <h2 className="text-3xl md:text-5xl font-bold text-flid-dark dark:text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? Want to collaborate? Or just want to say hello?
            We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <motion.div
            className="order-2 lg:order-1 bg-flid-light dark:bg-gray-700 p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {isSubmitted ? (
              <motion.div
                className="text-center p-8 bg-green-50 rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  className="w-16 h-16 text-green-500 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>                <h3 className="text-2xl font-bold text-flid-dark dark:text-white mb-2">Thank You!</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Your message has been sent successfully. We'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>                  <label htmlFor="name" className="block text-sm font-medium text-flid-dark dark:text-white mb-2">
                    Name
                  </label>                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-flid-accent focus:border-transparent transition"
                    placeholder="Your name"
                  />
                </div>
                
                <div>                  <label htmlFor="email" className="block text-sm font-medium text-flid-dark dark:text-white mb-2">
                    Email
                  </label>                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-flid-accent focus:border-transparent transition"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>                  <label htmlFor="message" className="block text-sm font-medium text-flid-dark dark:text-white mb-2">
                    Message
                  </label>                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-flid-accent focus:border-transparent transition"
                    placeholder="How can we help you?"
                  />
                </div>
                  <div>
                  <motion.button
                    type="submit"
                    className="btn btn-primary w-full dark:bg-flid-accent-dark"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="space-y-10">
              <div>                <h3 className="text-2xl font-bold text-flid-dark dark:text-white mb-4 line-decoration">Our Office</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We believe in the power of design to create positive change. 
                  Visit our studio to discuss your project in person.
                </p>
                <div className="flex items-start space-x-4">
                  <div className="bg-flid-primary bg-opacity-20 p-3 rounded-full">
                    <svg className="w-6 h-6 text-flid-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>                  <address className="not-italic text-gray-600 dark:text-gray-300">
                    FLID Design Studio<br />
                    Krakow, Poland<br />
                    Ul. Projektowa 42, 30-100
                  </address>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-flid-dark dark:text-white mb-4 line-decoration">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-flid-primary bg-opacity-20 p-3 rounded-full">
                      <svg className="w-6 h-6 text-flid-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-flid-dark dark:text-white">Email</p>
                      <a href="mailto:info@flid.pl" className="text-flid-accent hover:underline">info@flid.pl</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-flid-primary bg-opacity-20 p-3 rounded-full">
                      <svg className="w-6 h-6 text-flid-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-flid-dark dark:text-white">Phone</p>
                      <a href="tel:+48123456789" className="text-flid-accent hover:underline">+48 123 456 789</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-flid-dark dark:text-white mb-4 line-decoration">Follow Us</h3>
                <div className="flex space-x-4">
                  {['facebook', 'instagram', 'linkedin', 'twitter'].map((platform) => (
                    <motion.a
                      key={platform}                      href={`https://${platform}.com/flid`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 bg-flid-primary dark:bg-flid-primary/70 rounded-full flex items-center justify-center text-flid-dark dark:text-white"
                      whileHover={{ 
                        y: -5, 
                        backgroundColor: '#8B7DD1',
                        color: '#ffffff' 
                      }}
                      transition={{ duration: 0.2 }}
                      aria-label={`FLID on ${platform}`}
                    >
                      <span className="sr-only">FLID on {platform}</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        {platform === 'facebook' && (
                          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                        )}
                        {platform === 'instagram' && (
                          <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.509-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428.247-.66.598-1.216 1.153-1.772.5-.509 1.105-.902 1.772-1.153.637-.247 1.363-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" />
                        )}
                        {platform === 'linkedin' && (
                          <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.37H5.5v8.37h2.77z" />
                        )}
                        {platform === 'twitter' && (
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        )}
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
