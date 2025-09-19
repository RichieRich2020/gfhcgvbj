import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-8">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="max-w-6xl mx-auto">
          {/* Greeting Section */}
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-gray-900">
              Good Afternoon, <span className="text-red-500">Sarina!</span>
            </h1>
          </div>

          {/* Main Score Card */}
          <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 rounded-2xl p-12 max-w-5xl">
            <div className="flex items-center justify-between">
              {/* Left Side - Score */}
              <div className="flex items-center">
                <div className="text-9xl font-bold text-black mr-6">32</div>
                <div className="flex flex-col">
                  <div className="text-4xl font-bold text-black mb-3">OHI</div>
                  <div className="text-xl text-black">Wellbeing Score</div>
                </div>
              </div>

              {/* Right Side - Text */}
              <div className="flex flex-col text-left">
                <div className="text-3xl font-medium text-black mb-2">Your</div>
                <div className="text-3xl font-medium text-white mb-2">organization</div>
                <div className="text-3xl font-medium text-black">at a glance</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="max-w-sm mx-auto">
          {/* Greeting Section */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Good Afternoon, <span className="text-red-500">Sarina!</span>
            </h1>
          </div>

          {/* Main Score Card */}
          <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 rounded-2xl p-8">
            <div className="text-center">
              {/* Score Display */}
              <div className="flex items-center justify-center mb-6">
                <div className="text-7xl font-bold text-black mr-4">32</div>
                <div className="text-3xl font-bold text-black">OHI</div>
              </div>
              
              <div className="text-xl text-black mb-6">Wellbeing Score</div>
              
              {/* Organization Text */}
              <div className="text-center">
                <div className="text-xl font-medium text-black mb-2">Your</div>
                <div className="text-xl font-medium text-white mb-2">organization</div>
                <div className="text-xl font-medium text-black">at a glance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;