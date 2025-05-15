import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/layout/Layout.tsx';
import ParticlesBackground from '../components/ui/ParticlesBackground.tsx';
import GradientText from '../components/ui/GradientText.tsx';
import FuturisticCard from '../components/ui/FuturisticCard.tsx';
import AnimatedBorder from '../components/ui/AnimatedBorder.tsx';

const AboutPage = () => {  const [activeTab, setActiveTab] = useState('vision');
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const tabs = [
    { id: 'vision', label: 'Our Vision' },
    { id: 'mission', label: 'Our Mission' },
    { id: 'team', label: 'Our Team' },
    { id: 'values', label: 'Our Values' }
  ];
  const teamMembers = [
    {
      name: 'Anna Kowalska',
      role: 'Design Director',
      bio: 'With over 15 years of experience in sustainable design, Anna leads our creative initiatives with passion and purpose.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop'
    },
    {
      name: 'Jan Nowak',
      role: 'Innovation Strategist',
      bio: 'Jan specializes in merging cutting-edge technology with human-centered design approaches to create transformative solutions.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop'
    },
    {
      name: 'Maria Wiśniewska',
      role: 'Sustainability Expert',
      bio: 'Maria\'s background in environmental science informs her holistic approach to creating sustainable design frameworks.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop'
    },
    {
      name: 'Piotr Dąbrowski',
      role: 'Technical Lead',
      bio: 'Piotr translates complex design concepts into functional, elegant technical implementations that delight users.',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=500&auto=format&fit=crop'
    }
  ];
  // Futuristic animation variants


  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Layout>
      <div className="relative pt-24 pb-16 bg-flid-light dark:bg-gray-900 overflow-hidden min-h-screen">
        {/* Interactive Particles Background */}
        <div className="absolute inset-0 z-0">
          <ParticlesBackground 
            count={windowWidth > 768 ? 70 : 40} 
            color="#8B7DD1" 
            minSize={1} 
            maxSize={3} 
            speed={0.3} 
          />
        </div>
          {/* Background elements removed */}

        <div className="container-wide relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <motion.div
              className="inline-block relative"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight relative z-10">
                About <GradientText gradient="futuristic" animate={true} highlightOnHover>FLID</GradientText>
                <motion.span
                  className="absolute -top-4 -right-4 w-8 h-8 rounded-full border-2 border-flid-accent hidden md:block"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                    rotate: [0, 90, 180, 270, 360]
                  }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                />
                <motion.span
                  className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-flid-accent/20 hidden md:block"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
              </h1>
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
                initial={{ width: 0, height: 2 }}
                animate={{ width: "120px" }}
                transition={{ duration: 1.2, delay: 0.3 }}
              >
                <div className="h-1 bg-gradient-to-r from-flid-accent via-purple-500 to-flid-accent w-full" />
              </motion.div>
            </motion.div>
              <motion.div 
              className="text-xl text-flid-dark/80 dark:text-gray-300 max-w-3xl mx-auto mt-14 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="absolute -left-3 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-flid-accent to-transparent opacity-50 hidden md:block" />
              <div className="absolute -right-3 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-flid-accent to-transparent opacity-50 hidden md:block" />
              
              <motion.p className="leading-relaxed">
                We are a foundation dedicated to creating <GradientText gradient="creative" animate={true}>balance</GradientText> through 
                innovative design, promoting <GradientText gradient="accent">sustainability</GradientText>, and 
                designing <GradientText gradient="futuristic" animate={true}>positive change</GradientText> for a better world.
                <motion.span 
                  className="inline-block w-1.5 h-5 bg-flid-accent ml-1 align-middle"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.p>
            </motion.div>
          </motion.div>          {/* Tab Navigation - Futuristic style */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[2px] bg-gradient-to-r from-transparent via-flid-accent/30 to-transparent -z-10"></div>
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                className={`px-6 py-3 rounded-full font-medium backdrop-blur-sm transition-all relative overflow-hidden ${
                  activeTab === tab.id 
                    ? 'bg-flid-accent text-white' 
                    : 'bg-white/80 dark:bg-gray-800/80 text-flid-dark dark:text-white hover:bg-flid-accent/20 dark:hover:bg-flid-accent/30'
                }`}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                {activeTab === tab.id && (
                  <motion.div
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-flid-accent to-purple-500"
                    layoutId="activeBg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                {tab.label}
                
                {activeTab === tab.id && (
                  <motion.div 
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-1 bg-white w-10 rounded-full"
                    layoutId="activeIndicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Tab Content with Animations */}
          <AnimatePresence mode="wait">            <motion.div 
              key={activeTab} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ 
                opacity: 1, 
                y: 0,
                boxShadow: [
                  '0 0 10px rgba(139, 125, 209, 0.5)',
                  '0 0 20px rgba(139, 125, 209, 0.3)',
                  '0 0 10px rgba(139, 125, 209, 0.5)'
                ]
              }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.5,
                boxShadow: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="bg-white/90 dark:bg-gray-800/90 rounded-xl p-8 md:p-12 shadow-xl backdrop-blur-sm relative border border-white/30 dark:border-gray-700/30"
            >
              {/* Animated border effect */}
              <AnimatedBorder />
              
              {activeTab === 'vision' && (
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="md:w-1/2">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className="relative"
                    >
                      <GradientText className="text-3xl font-bold mb-6" gradient="creative" animate={true} highlightOnHover>Our Vision</GradientText>
                      <motion.div
                        initial={{ height: "0%" }}
                        animate={{ height: "3px", width: "60px" }}
                        transition={{ duration: 0.8 }}
                        className="bg-flid-accent mb-6"
                      />
                    </motion.div>
                    
                    <motion.p 
                      className="text-lg mb-4 text-flid-dark/80 dark:text-gray-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      FLID Foundation envisions a world where design serves as a catalyst for positive change, 
                      creating harmonious balance between human needs and environmental sustainability.
                    </motion.p>
                    <motion.p 
                      className="text-lg mb-4 text-flid-dark/80 dark:text-gray-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      We believe that thoughtful, innovative design has the power to transform communities, 
                      inspire new ways of thinking, and address the most pressing challenges of our time.
                    </motion.p>
                    <motion.p 
                      className="text-lg text-flid-dark/80 dark:text-gray-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      By fostering collaboration between designers, researchers, innovators, and communities, 
                      we aim to build a future where design excellence and sustainability go hand in hand.
                    </motion.p>
                  </div>                  <motion.div 
                    className="md:w-1/2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}                  >                    <FuturisticCard hoverEffect="tilt" className="rounded-xl overflow-hidden h-[400px] relative group">
                      <div className="absolute inset-0 z-10 bg-gradient-to-br from-flid-accent to-purple-500 group-hover:scale-105 transition-transform duration-1000">
                      </div>
                      <motion.div
                        className="absolute inset-0 border-2 border-white/30 rounded-xl z-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                      />
                    </FuturisticCard>
                  </motion.div>
                </div>
              )}

              {activeTab === 'mission' && (
                <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                  <div className="md:w-1/2">
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className="relative"
                    >
                      <GradientText className="text-3xl font-bold mb-6" gradient="futuristic" animate={true} highlightOnHover>Our Mission</GradientText>
                      <motion.div
                        initial={{ height: "0%" }}
                        animate={{ height: "3px", width: "60px" }}
                        transition={{ duration: 0.8 }}
                        className="bg-flid-accent mb-6"
                      />
                    </motion.div>
                    
                    <motion.p 
                      className="text-lg mb-4 text-flid-dark/80 dark:text-gray-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      FLID's mission is to advance sustainable design practices through education, innovation, and collaboration.
                    </motion.p>
                    <motion.p 
                      className="text-lg mb-4 text-flid-dark/80 dark:text-gray-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      We facilitate projects that demonstrate the transformative power of design thinking, 
                      supporting initiatives that address social, environmental, and economic challenges.
                    </motion.p>
                    <motion.p 
                      className="text-lg text-flid-dark/80 dark:text-gray-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      Through our research, workshops, and design interventions, we create platforms for 
                      knowledge exchange that empower communities and organizations to implement sustainable solutions.
                    </motion.p>
                  </div>
                  <motion.div 
                    className="md:w-1/2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}                  >                    <FuturisticCard hoverEffect="tilt" className="rounded-xl overflow-hidden h-[400px] relative group">
                      <div className="absolute inset-0 z-10 bg-gradient-to-br from-purple-500 to-flid-accent group-hover:scale-105 transition-transform duration-1000">
                      </div>
                      <motion.div
                        className="absolute inset-0 border-2 border-white/30 rounded-xl z-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                      />
                    </FuturisticCard>
                  </motion.div>
                </div>
              )}

              {activeTab === 'values' && (                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerChildren}                >                  <motion.div className="text-center relative">
                    <GradientText className="text-3xl font-bold mb-8 relative z-10" gradient="futuristic" animate={true} highlightOnHover>Our Core Values</GradientText>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "80px" }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-1 bg-gradient-to-r from-flid-accent to-purple-500 mx-auto mb-12 relative z-10"
                    />
                  </motion.div>
                  
                  <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={staggerChildren}
                  >
                    {[
                      {
                        title: "Sustainability",
                        description: "We prioritize environmentally conscious design approaches that minimize negative impact and promote regenerative practices.",
                        icon: "♻️"
                      },
                      {
                        title: "Innovation",
                        description: "We embrace experimental thinking and novel approaches that challenge conventional wisdom and create breakthrough solutions.",
                        icon: "💡"
                      },
                      {
                        title: "Collaboration",
                        description: "We believe in the power of diverse perspectives and interdisciplinary cooperation to solve complex problems.",
                        icon: "🤝"
                      },
                      {
                        title: "Human-Centered",
                        description: "We place people at the center of our design process, ensuring solutions are accessible, inclusive, and meaningful.",
                        icon: "👥"
                      }
                    ].map((value, index) => (                      <FuturisticCard 
                        key={index}
                        hoverEffect="glow"
                        className="backdrop-blur-sm p-6 rounded-lg relative overflow-hidden group"
                        glowColor={`rgba(139, 125, 209, 0.${5 + index})`}
                      >
                        <motion.div
                          className="absolute -right-8 -top-10 text-6xl opacity-20 group-hover:opacity-40 transition-opacity"
                          animate={{ 
                            y: [0, -8, 0],
                            rotate: [0, 5, 0],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                          }}
                          whileHover={{ scale: 1.2, rotate: 15 }}
                        >
                          {value.icon}
                        </motion.div>
                        
                        <motion.div 
                          className="absolute -z-10 inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                          style={{
                            background: `radial-gradient(circle at ${index % 3 === 0 ? 'top right' : index % 3 === 1 ? 'bottom left' : 'center'}, rgba(139, 125, 209, 0.3), transparent 70%)`
                          }}
                        />
                        
                        <motion.div 
                          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-flid-accent via-purple-500 to-flid-accent" 
                          initial={{ width: "0%" }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1.5, delay: 0.2 * index }}
                        />
                        
                        <motion.div
                          className="absolute top-0 right-0 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            background: `conic-gradient(from ${index * 90}deg, rgba(139, 125, 209, 0.6), rgba(156, 39, 176, 0.6), rgba(139, 125, 209, 0.6))`
                          }}
                          animate={{
                            rotate: [0, 360]
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                          <motion.h3 
                          className="text-xl font-bold mb-3 relative"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                        >
                          <GradientText 
                            gradient={index % 3 === 0 ? "creative" : index % 3 === 1 ? "futuristic" : "accent"}
                            animate={true}
                            highlightOnHover
                          >
                            {value.title}
                          </GradientText>
                        </motion.h3>
                        
                        <motion.p 
                          className="text-flid-dark/80 dark:text-gray-300 relative z-10"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                        >
                          {value.description}
                        </motion.p>
                      </FuturisticCard>
                    ))}
                  </motion.div>
                </motion.div>
              )}

              {activeTab === 'team' && (                <div>                  <motion.div className="text-center relative">
                    <GradientText className="text-3xl font-bold mb-8 relative z-10" gradient="creative" animate={true} highlightOnHover>Meet Our Team</GradientText>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "80px" }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-1 bg-gradient-to-r from-flid-accent to-purple-500 mx-auto mb-12 relative z-10"
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={staggerChildren}
                    initial="hidden"
                    animate="visible"
                  >
                    {teamMembers.map((member, index) => (
                      <FuturisticCard
                        key={index}
                        hoverEffect="raise"
                        className="rounded-xl overflow-hidden relative group backdrop-blur-sm"
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-flid-accent/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <div className="h-48 relative overflow-hidden">
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-40 group-hover:opacity-30 transition-opacity"
                          />
                          <motion.img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            initial={{ scale: 1.1, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                          />
                          <motion.div 
                            className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-flid-accent to-purple-500"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                          />
                        </div>
                        
                        <motion.div className="p-5 relative z-10">                          <motion.h3 
                            className="text-xl font-bold text-flid-dark dark:text-white"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                          >
                            <GradientText 
                              gradient={index % 2 === 0 ? "creative" : "futuristic"}
                              highlightOnHover
                              animate={true}
                            >
                              {member.name}
                            </GradientText>
                          </motion.h3>
                          
                          <motion.p 
                            className="text-flid-accent font-medium mb-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                          >
                            {member.role}
                          </motion.p>
                          
                          <motion.p 
                            className="text-sm text-flid-dark/70 dark:text-gray-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                          >
                            {member.bio}
                          </motion.p>
                          
                          <motion.div 
                            className="absolute bottom-0 right-0 w-12 h-12 rounded-full bg-flid-accent/10 -mb-6 -mr-6"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 0.8, 0.5]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.5
                            }}
                          />
                        </motion.div>
                        
                        <motion.div 
                          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                        >
                          <svg className="w-4 h-4 text-flid-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </motion.div>
                      </FuturisticCard>
                    ))}
                  </motion.div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
            {/* Floating decorative elements removed */}
        </div>
        
        {/* Foundation Information Section */}
        <motion.div
          className="container-wide relative z-10 mt-20 mb-16"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <AnimatedBorder />
          <div className="bg-white/90 dark:bg-gray-800/90 rounded-xl p-8 md:p-12 shadow-xl backdrop-blur-sm relative border border-white/30 dark:border-gray-700/30">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mb-10"
            >
              <GradientText className="text-3xl font-bold mb-6" gradient="futuristic" animate={true} highlightOnHover>
                O Fundacji
              </GradientText>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "80px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-gradient-to-r from-flid-accent to-purple-500 mb-8"
              />
            </motion.div>
              <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.p className="mb-6 text-lg text-flid-dark/80 dark:text-gray-300">
                <strong className="text-flid-accent">Fundacja Ludzie-Innowacje-Design</strong> jest inicjatywą mającą na celu sensowne wykorzystanie potencjału ludzi innowacyjnych, a w szczególności projektantów wzornictwa przemysłowego dla rozwoju gospodarczego i kulturalnego.
              </motion.p>
                <motion.div 
                className="mb-8 max-w-4xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h3 className="text-xl font-bold mb-4 text-flid-dark dark:text-white">Ze Statutu:</h3>
                <p className="mb-3 text-flid-dark/80 dark:text-gray-300"><strong>Celami Fundacji są:</strong></p>
                <ol className="list-decimal ml-6 mb-8 space-y-2 text-flid-dark/80 dark:text-gray-300">
                  <li>Promocja wzornictwa przemysłowego wśród przedsiębiorców jako źródła innowacyjnej gospodarki.</li>
                  <li>Wspieranie projektów naukowo – badawczych.</li>
                  <li>Popularyzowanie działań innowacyjnych i nowych technologii.</li>
                  <li>Prowadzenie działalności naukowej, naukowo-technicznej i oświatowej, w tym również polegającej na kształceniu studentów, kulturalnej oraz w zakresie kultury fizycznej i sportu.</li>
                  <li>Świadczenie specjalistycznych usług w zakresie wzornictwa na rzecz rozwoju przedsiębiorczości.</li>
                  <li>Stworzenie silnego i konkurencyjnego sektora MŚP, poprzez bezpośrednią pomoc finansową oraz wsparcie inwestycyjne dla instytucji otoczenia biznesu, w szczególności świadczących specjalistyczne usługi na rzecz rozwoju przedsiębiorczości.</li>
                </ol>
              </motion.div>
              
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <p className="mb-3 text-flid-dark/80 dark:text-gray-300"><strong>Fundacja realizuje swoje cele poprzez szeroko rozumianą działalność promocyjną i edukacyjną prowadzoną również we współpracy z organizacjami pozarządowymi oraz społecznościami lokalnymi i regionalnymi innych państw, w szczególności:</strong></p>
                <ol className="list-[lower-alpha] ml-6 mb-8 space-y-2 text-flid-dark/80 dark:text-gray-300">
                  <li>Organizowanie zintegrowanych działań promocyjnych,</li>
                  <li>Działalność wystawiennicza.</li>
                  <li>Organizowanie konferencji naukowych, seminariów, warsztatów.</li>
                  <li>Prowadzenie projektów wzorniczych.</li>
                  <li>Działalność informacyjna w Internecie.</li>
                  <li>Działalność wydawnicza.</li>
                  <li>Usługi informacyjno – doradcze dla przedsiębiorców w zakresie wzornictwa przemysłowego.</li>
                  <li>Realizacja kampanii public-relation.</li>
                  <li>Wspomaganie wdrażania innowacji lub działalność związana z rozwojem systemu innowacji.</li>
                </ol>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >                <div className="text-center mb-12">                  <h3 className="text-2xl font-bold text-flid-dark dark:text-white mb-3">Działania</h3>
                  <div className="flex items-center justify-center mb-1">
                    <div className="h-px w-8 bg-gradient-to-r from-transparent to-flid-accent/70"></div>
                    <div className="w-2 h-2 mx-2 rounded-full bg-flid-accent"></div>
                    <div className="h-px w-8 bg-gradient-to-l from-transparent to-flid-accent/70"></div>
                  </div>
                  <div className="mt-1">
                    <GradientText className="text-sm font-medium" gradient="creative" animate={true} highlightOnHover>
                      2008-2020
                    </GradientText>
                  </div>
                </div>
                  <div className="relative max-w-4xl mx-auto">
                  {/* Timeline line */}                  <motion.div 
                    className="absolute left-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-flid-accent to-purple-500 transform -translate-x-1/2 z-0"
                    initial={{ scaleY: 0, opacity: 0 }}
                    whileInView={{ scaleY: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                  />
                  
                  <div className="space-y-12 relative">
                    {[
                      {
                        year: "2020",
                        items: [
                          "Projekt Arting – konkurs projektowania zrównoważonego",
                          "Pszczela Hala – ośrodek edukacji przyrodniczej"
                        ]
                      },
                      {
                        year: "2019",
                        items: [
                          "Design Thinking – międzynarodowe warsztaty mobilne dla dzieci",
                          "Słoneczny portal – instalacja przestrzenna i akcja edukacyjna"
                        ]
                      },
                      {
                        year: "2018",
                        items: [
                          "Warsztaty myślenia i projektowania zrównoważonego Visegrad Fund."
                        ]
                      },
                      {
                        year: "2015",
                        items: [
                          "Konkurs wzornictwa przemysłowego \"Miejsce w którym żyjemy\" Projekt Arting 2015."
                        ]
                      },
                      {
                        year: "2014",
                        items: [
                          "Polsko-słowacka i polsko-czeska akcja edukacyjna \"Energia Jutra\" w formie mobilnych warsztatów dla dzieci.",
                          "AudiofilDesign – audiowizualna wystawa sprzętu hi end towarzysząca Lotos Jazz Festival 16 Bielska Zadymka Jazzowa."
                        ]
                      },
                      {
                        year: "2013",
                        items: [
                          "Konkurs wzornictwa przemysłowego \"Energia Jutro\" Projekt Arting 2013 – organizacja i wystawy pokonkursowe.",
                          "AudiofilDesign – audiowizualna wystawa sprzętu hi end, towarzysząca Lotos Jazz Festival 15 Bielska Zadymka Jazzowa."
                        ]
                      },
                      {
                        year: "2012",
                        items: [
                          "D-spotkania i D-warsztaty LED Design.",
                          "D-spotkania i D-warsztaty pod tytułem Car Design.",
                          "Projektowanie społecznościowe w formie konkursów wzorniczych na portalu D-spot."
                        ]
                      },
                      {
                        year: "2011",
                        items: [
                          "D-potkania i D-warsztaty pod tytułem Audiofil Design.",
                          "Projekt działań informacyjnych na temat wzornictwa w Design Bank."
                        ]
                      },
                      {
                        year: "2010",
                        items: [
                          "Rozpoczęcie działalności portalu społecznościowego finansowania projektów Goobez.",
                          "Akcja Projektanci Miśiom – projekty dla małych i średnich przedsiębiorstw."
                        ]
                      },
                      {
                        year: "2009",
                        items: [
                          "Rozpoczęcie działalności portalu o wzornictwie po nazwą D-spot.",
                          "Organizacja konferencji na temat miejsca wzornictwa w gospodarce."
                        ]
                      },
                      {
                        year: "2008",
                        items: [
                          "Powołanie Fundacji Ludzie-Innowacje-Design",
                          "Organizacja projektów badawczych mających sformułować sposoby wykorzystania wzornictwa dla rozwoju gospodarczego."
                        ]
                      }
                    ].map((entry, index) => (
                      <motion.div 
                        key={entry.year}
                        className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 * index }}
                        viewport={{ once: true, margin: "-50px" }}
                      >
                        {/* Year marker - always on left for mobile, alternating for desktop */}
                        <div className={`w-full md:w-1/2 flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} items-center pb-4 md:pb-0`}>
                          <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="flex-grow hidden md:block w-6 h-[1px] bg-gradient-to-r from-flid-accent to-transparent mx-3"></div>
                            
                            <motion.div 
                              className="relative z-10"
                              whileHover={{ scale: 1.1 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 border border-flid-accent/50 flex items-center justify-center relative shadow-lg">
                                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-flid-accent/10 to-purple-500/10 backdrop-blur-sm"></div>
                                <div className="absolute inset-0 rounded-full animate-pulse bg-flid-accent/20 opacity-50"></div>
                              </div>
                            </motion.div>
                            
                            <div className="relative ml-8 md:mx-6">
                              <GradientText
                                gradient="creative"
                                className="text-xl font-bold"
                                highlightOnHover
                              >
                                {entry.year}
                              </GradientText>
                            </div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} pl-10 md:pl-0 border-l md:border-0 border-flid-accent/20 ml-3 md:ml-0`}>
                          <FuturisticCard 
                            className="backdrop-blur-sm p-5 rounded-lg relative overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            hoverEffect="glow"
                            glowColor={`rgba(139, 125, 209, 0.${(index % 3) + 3})`}
                          >
                            <motion.div 
                              className="absolute top-0 left-0 w-full h-0.5"
                              style={{
                                background: `linear-gradient(to right, var(--flid-accent), rgba(156, 39, 176, 0.${5 + (index % 3)}), transparent)`
                              }}
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                              viewport={{ once: true }}
                            />
                            <ul className="space-y-2 text-flid-dark/80 dark:text-gray-300 relative z-20">
                              {entry.items.map((item, itemIndex) => (
                                <motion.li
                                  key={itemIndex}
                                  initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.5, delay: 0.3 + itemIndex * 0.1 }}
                                  viewport={{ once: true }}
                                  className="flex items-start"
                                >
                                  <span className="text-flid-accent mr-2 mt-1 opacity-75">•</span>
                                  <span>{item}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </FuturisticCard>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default AboutPage;
