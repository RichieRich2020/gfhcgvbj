import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SignupModal from './SignupModal';
import austinImage from '../assets/austin-distel-wawEfYdpkag-unsplash.jpg';
import EnrichBanner from './EnrichBanner';

const Hero: React.FC = () => {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  return (
    <section 
      id="intro" 
      className="relative flex items-center justify-center overflow-hidden pt-24 md:pt-20 px-1 sm:px-6 lg:px-12 bg-white"
    >
      {/* Background image for desktop only */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{
          backgroundImage: `url(${austinImage})`
        }}
      ></div>
      {/* Dark overlay for desktop view only to ensure text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40 md:block hidden"></div>
      
      {/* Background Pattern - Responsive */}
      <div className="absolute inset-0 opacity-10">
        <div id="1" className="absolute top-16 md:top-20 left-4 md:left-20 w-16 md:w-32 h-16 md:h-32 bg-primary-200 rounded-full border border-white border-opacity-30"></div>
        <div id="2" className="absolute top-32 md:top-40 right-8 md:right-32 w-12 md:w-24 h-12 md:h-24 bg-primary-300 rounded-full border border-white border-opacity-30"></div>
        <div id="3" className="absolute bottom-24 md:bottom-32 left-8 md:left-40 w-20 md:w-40 h-20 md:h-40 bg-primary-200 rounded-full border border-white border-opacity-30"></div>
        <div id="4" className="absolute bottom-16 md:bottom-20 right-4 md:right-20 w-14 md:w-28 h-14 md:h-28 bg-primary-300 rounded-full border border-white border-opacity-30"></div>
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto px-2 sm:px-4">
          {/* Welcome Text - Responsive */}
          <div className="mb-6 md:mb-8 animate-fade-in">
            <p className="text-base md:text-lg text-gray-600 md:text-white mb-2 md:mb-4">Welcome to</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif font-bold text-gray-900 md:text-white mb-2 md:mb-4">
              <span className="text-gradient">Co.Evolve</span>
            </h1>
            {/* <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-gray-800 md:text-white mb-6 md:mb-8">
              Cafe
            </h2> */}
          </div>

          {/* Wellbeing Score Chart - Matching Image Style */}
          <div className="mb-8 md:mb-12 animate-slide-up">
            <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 rounded-2xl p-6 md:p-12 max-w-4xl mx-auto">
              <div className="flex items-center justify-between">
                {/* Left Side - Score */}
                <div className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className="text-6xl md:text-9xl font-bold text-black mb-2 md:mb-3">32</div>
                    <div className="text-sm md:text-[24px] text-black">Wellbeing Score</div>
                  </div>
                  <div className="text-2xl md:text-4xl font-bold text-black ml-4 md:ml-6">OHI</div>
                </div>

                {/* Right Side - Text */}
                <div className="flex flex-col text-left">
                  <div className="text-lg md:text-3xl font-medium text-black mb-1 md:mb-2">Your</div>
                  <div className="text-lg md:text-3xl font-medium text-white mb-1 md:mb-2">organization</div>
                  <div className="text-lg md:text-3xl font-medium text-black">at a glance</div>
                </div>
              </div>
            </div>
          </div>
             

          <EnrichBanner />
          
          {/* Scroll Down Indicator - Responsive */}
          <div className="animate-bounce-slow mt-12">
            <a href="#about" className="inline-flex flex-col items-center text-gray-600 md:text-white hover:text-primary-500 transition-all duration-300 group">
              <span className="text-xs md:text-sm font-medium mb-1 md:mb-2 bg-gray-100 md:bg-black md:bg-opacity-30 px-2 md:px-3 py-1 rounded-full backdrop-blur-sm">Scroll Down</span>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-200 md:bg-white md:bg-opacity-20 border border-gray-300 md:border-white md:border-opacity-30 rounded-full flex items-center justify-center group-hover:bg-primary-500 group-hover:border-primary-500 transition-all duration-300 backdrop-blur-sm">
                <ChevronDown size={16} className="text-gray-600 group-hover:text-white md:hidden" />
                <ChevronDown size={20} className="text-white group-hover:text-white hidden md:block" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements - Responsive */}
      <div id="4" className="absolute top-1/4 left-2 md:left-10 w-20 md:w-40 h-20 md:h-40 bg-primary-200 rounded-full opacity-20 border border-white border-opacity-30"></div>
      <div id="5" className="absolute top-1/3 right-2 md:right-10 w-16 md:w-26 h-16 md:h-26 bg-primary-300 rounded-full opacity-20 border border-white border-opacity-30"></div>
      <div id="6" className="absolute bottom-1/4 left-4 md:left-20 w-18 md:w-36 h-18 md:h-36 bg-primary-200 rounded-full opacity-20 border border-white border-opacity-30"></div>

      {/* Signup Modal */}
      <SignupModal 
        isOpen={isSignupModalOpen} 
        onClose={() => setIsSignupModalOpen(false)} 
      />
    </section>
  );
};

export default Hero;