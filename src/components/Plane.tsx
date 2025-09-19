import React from 'react';
import { Plane as PlaneIcon } from 'lucide-react';

interface PlaneProps {
  onClick?: () => void;
  className?: string;
}

const Plane: React.FC<PlaneProps> = ({ onClick, className = '' }) => {
  return (
    <div 
      className={`flex items-center justify-center p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className="flex items-center space-x-3">
        <PlaneIcon className="w-8 h-8 text-white" />
        <span className="text-white font-semibold text-lg">Take Flight</span>
      </div>
    </div>
  );
};

export default Plane;