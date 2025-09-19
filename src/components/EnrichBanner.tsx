import React from 'react';
import { ArrowRight } from 'lucide-react';
import meditationIcon from '../assets/Meditation Icon red.png';

const EnrichBanner: React.FC = () => {
  const handleClick = () => {
    window.location.hash = '#enrich-create';
  };

  return (
    <div 
      className="relative bg-gradient-to-r from-[#55A06F] to-[#55A06F] rounded-2xl p-8 max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
      onClick={handleClick}
    >
      {/* Subtle wave gradient overlay */}
      <div className="absolute bottom-0 right-0 w-32 h-20 bg-gradient-to-tl from-pink-300/30 to-transparent rounded-bl-2xl"></div>
      
      <div className="relative flex items-center justify-between">
        {/* Left Side - Text Content */}
        <div className="flex flex-col space-y-2">
          {/* ENRICH Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-black uppercase tracking-wide">
            ENRICH
          </h2>
          
          {/* Design Your Program with Arrow */}
          <div className="flex items-center space-x-2">
            <span className="text-white text-lg md:text-xl font-medium">
              Design Your Program
            </span>
            <ArrowRight className="w-5 h-5 text-white" />
          </div>
        </div>
        
        {/* Right Side - Lotus Icon */}
        <div className="flex-shrink-0">
          <img 
            src={meditationIcon} 
            alt="Meditation Icon" 
            className="w-16 h-16 md:w-20 md:h-20 filter brightness-0 invert"
          />
        </div>
      </div>
      
      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-pink-600/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default EnrichBanner;