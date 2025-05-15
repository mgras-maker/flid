import React from 'react';
import ShaderBackground from '../components/three/ShaderAboutPage';

// Example of how to use ShaderAboutPage component in your AboutPage
const AboutPageExample: React.FC = () => {
  return (
    <div className="about-page">
      {/* Our Vision Section */}
      <section className="vision-section relative overflow-hidden">
        {/* The shader background for the Vision section */}
        <ShaderBackground type="vision" className="opacity-40" />
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Vision</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla 
              facilisi. Sed euismod, nisl eget aliquam tincidunt, nunc nisl 
              aliquam nisl, eget aliquam nisl nisl eget nisl.
            </p>
            <p className="text-lg">
              Vivamus euismod, nisl eget aliquam tincidunt, nunc nisl aliquam nisl, 
              eget aliquam nisl nisl eget nisl. Nulla facilisi.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Mission Section */}
      <section className="mission-section relative overflow-hidden">
        {/* The shader background for the Mission section */}
        <ShaderBackground type="mission" className="opacity-40" />
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Mission</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              Pellentesque habitant morbi tristique senectus et netus et 
              malesuada fames ac turpis egestas. Vestibulum tortor quam, 
              feugiat vitae, ultricies eget, tempor sit amet, ante.
            </p>
            <p className="text-lg">
              Donec eu libero sit amet quam egestas semper. Aenean ultricies 
              mi vitae est. Mauris placerat eleifend leo.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPageExample;
