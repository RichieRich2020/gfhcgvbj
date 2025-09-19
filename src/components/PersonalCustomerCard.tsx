import React from 'react';
import { Rocket, ArrowRight } from 'lucide-react';

const PersonalCustomerCard: React.FC = () => {
  return (
    <div className="w-full flex justify-center py-12">
      <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 relative">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-left">
          Enrich
        </h1>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left leading-tight">
          Become a personal customer
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-left mb-8 leading-relaxed">
          Upon receipt of the form, we will contact you and set up an appointment with an advisor.
        </p>

        {/* Get Started Button */}
        <div className="flex justify-center">
          <button   onClick={() => window.location.href = '#enrich-create'} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-blue-600 hover:to-purple-700 flex items-center gap-2">
            Get started
            <ArrowRight size={20} />
          </button>
        </div>

       
      </div>
    </div>
  );
};

export default PersonalCustomerCard;