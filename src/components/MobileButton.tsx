import React from 'react';
import { Home, MoreHorizontal } from 'lucide-react';
import meditationIconDark from '../assets/Meditation Icon dark.png';

const MobileButton: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMore = () => {
    // Handle more options or menu
    console.log('More button clicked');
  };

  const handleEnrich = () => {
    // Scroll to about section or navigate to enrich page
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Classic Navigation Bar */}
      <div className="bg-white border-t border-gray-200 shadow-lg">
        <div className="flex">
          {/* Home Button */}
          <button
            onClick={scrollToTop}
            className="flex-1 py-3 flex flex-col items-center justify-center space-y-1 hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <Home size={18} className="text-gray-600" />
            </div>
            <span className="text-xs text-gray-600 font-medium">Home</span>
          </button>
          
          {/* Enrich Button */}
          <button
            onClick={handleEnrich}
            className="flex-1 py-3 flex flex-col items-center justify-center space-y-1 hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <img src={meditationIconDark} alt="Meditation" className="w-5 h-5" />
            </div>
            <span className="text-xs text-gray-600 font-medium">Enrich</span>
          </button>
          
          {/* More Button */}
          <button
            onClick={handleMore}
            className="flex-1 py-3 flex flex-col items-center justify-center space-y-1 hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <MoreHorizontal size={18} className="text-gray-600" />
            </div>
            <span className="text-xs text-gray-600 font-medium">More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileButton;