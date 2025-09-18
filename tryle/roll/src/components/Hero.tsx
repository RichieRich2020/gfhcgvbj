import React, { useState, useEffect } from 'react';
import { ChevronDown, Facebook, Instagram, Twitter, Heart, UserPlus } from 'lucide-react';
import backgroundImage from '../assets/austin-distel-wawEfYdpkag-unsplash.jpg';
import christopherImage from '../assets/christopher-paul-high-fwRMK19zavc-unsplash.jpg';
import dianeImage from '../assets/diane-newbill-Xfk_WfZ1GTU-unsplash.jpg';
import kathyImage from '../assets/kathy-marsh-MkoTQg_5xjw-unsplash.jpg';
import SignupModal from './SignupModal';

const Hero: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useState('rgba(0, 0, 0, 0.2)'); // Start with black
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll percentage (0 to 1)
      const scrollPercentage = scrollTop / (documentHeight - windowHeight);
      
      // Interpolate between black and white
      const blackRgb = [0, 0, 0]; // Black RGB
      const whiteRgb = [255, 255, 255]; // White RGB
      
      // Calculate interpolated RGB values
      const interpolatedR = Math.round(blackRgb[0] + (whiteRgb[0] - blackRgb[0]) * scrollPercentage);
      const interpolatedG = Math.round(blackRgb[1] + (whiteRgb[1] - blackRgb[1]) * scrollPercentage);
      const interpolatedB = Math.round(blackRgb[2] + (whiteRgb[2] - blackRgb[2]) * scrollPercentage);
      
      // Set opacity (keep it subtle for readability)
      const opacity = 0.2 + (scrollPercentage * 0.3); // 0.2 to 0.5 opacity
      
      const newColor = `rgba(${interpolatedR}, ${interpolatedG}, ${interpolatedB}, ${opacity})`;
      setBackgroundColor(newColor);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial call to set opacity
    handleScroll();

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Heart, href: '#', label: 'Heart' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <section id="intro" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6 sm:px-8 lg:px-12">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Dynamic color overlay that transitions from black to white */}
        <div 
          className="absolute inset-0 transition-all duration-500 ease-in-out"
          style={{ backgroundColor: backgroundColor }}
        ></div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div  id="1" className="absolute top-20 left-20 w-32 h-32 bg-primary-200 rounded-full border border-white border-opacity-30"></div>
        <div id="2" className="absolute top-40 right-32 w-24 h-24 bg-primary-300 rounded-full border border-white border-opacity-30"></div>
        <div id="3" className="absolute bottom-32 left-40 w-40 h-40 bg-primary-200 rounded-full border border-white border-opacity-30"></div>
        <div id="4" className="absolute bottom-20 right-20 w-28 h-28 bg-primary-300 rounded-full border border-white border-opacity-30"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto px-2 sm:px-4">
          {/* Welcome Text */}
          <div className="mb-8 animate-fade-in">
            <p className="text-lg text-white mb-4 drop-shadow-lg">Welcome to</p>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-4 drop-shadow-2xl">
              <span className="text-gradient drop-shadow-2xl">Co.Evolve</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-white mb-8 drop-shadow-lg">
              Cafe
            </h2>
          </div>

          {/* Description */}
          <div className="mb-12 animate-slide-up">
            <p className="text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto drop-shadow-lg bg-black bg-opacity-20 px-4 sm:px-6 py-4 rounded-lg backdrop-blur-sm">
              Savor moments of bliss with every sip, as our expertly crafted coffees 
              and delectable pastries embrace your senses.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-fade-in">
            <button
              onClick={() => setIsSignupModalOpen(true)}
              className="px-8 py-4 bg-primary-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-primary-700 flex items-center space-x-2 backdrop-blur-sm"
            >
              <UserPlus size={20} />
              <span>Get Started</span>
            </button>
            <a
              href="#about"
              className="px-8 py-4 bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white hover:bg-opacity-30"
            >
              Learn More
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-14 h-14 bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-full flex items-center justify-center shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-primary-500 hover:bg-opacity-90 hover:border-primary-500 group"
                aria-label={social.label}
              >
                <social.icon size={22} className="text-white group-hover:text-white" />
              </a>
            ))}
          </div>

          {/* Scroll Down Indicator */}
          <div className="animate-bounce-slow">
            <a href="#about" className="inline-flex flex-col items-center text-white hover:text-primary-300 transition-all duration-300 group">
              <span className="text-sm font-medium mb-2 bg-black bg-opacity-30 px-3 py-1 rounded-full backdrop-blur-sm">Scroll Down</span>
              <div className="w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-full flex items-center justify-center group-hover:bg-primary-500 group-hover:bg-opacity-90 group-hover:border-primary-500 transition-all duration-300">
                <ChevronDown size={20} className="text-white" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div  id="4" className="absolute top-1/4 left-10 w-40 h-40 bg-primary-200 rounded-full opacity-20 border border-white border-opacity-30"></div>
      <div id="5" className="absolute top-1/3 right-10 w-26 h-26 bg-primary-300 rounded-full opacity-20 border border-white border-opacity-30"></div>
      <div id="6" className="absolute bottom-1/4 left-20 w-36 h-36 bg-primary-200 rounded-full opacity-20 border border-white border-opacity-30"></div>

      {/* Signup Modal */}
      <SignupModal 
        isOpen={isSignupModalOpen} 
        onClose={() => setIsSignupModalOpen(false)} 
      />
    </section>
  );
};

export default Hero;