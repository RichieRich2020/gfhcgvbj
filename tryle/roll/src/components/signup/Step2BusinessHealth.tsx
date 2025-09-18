import React from 'react';
import { TrendingDown, TrendingUp } from 'lucide-react';
import { SignupStepProps } from '../../types/signup';

const Step2BusinessHealth: React.FC<SignupStepProps> = ({ 
  data, 
  onUpdate, 
  onNext, 
  onPrevious, 
  isFirstStep, 
  isLastStep 
}) => {
  const handleInputChange = (field: keyof typeof data.businessHealth, value: string) => {
    onUpdate({
      businessHealth: {
        ...data.businessHealth,
        [field]: value
      }
    });
  };

  const handleNext = () => {
    if (data.businessHealth.attritionRate && data.businessHealth.revenueGrowthRate) {
      onNext();
    }
  };

  const attritionRateOptions = [
    'Less than 5%',
    '5-10%',
    '11-15%',
    '16-20%',
    '21-25%',
    'More than 25%'
  ];

  const revenueGrowthOptions = [
    'Negative growth',
    '0-5%',
    '6-10%',
    '11-15%',
    '16-20%',
    '21-30%',
    'More than 30%'
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Business Health Indicators</h2>
        <p className="text-gray-600">Help us understand your current business metrics</p>
      </div>

      <div className="space-y-6">
        {/* Attrition Rate */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <TrendingDown className="w-4 h-4 mr-2 text-red-500" />
            What is your current employee attrition rate? (Approximate if tentative) *
          </label>
          <select
            value={data.businessHealth.attritionRate}
            onChange={(e) => handleInputChange('attritionRate', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
            required
          >
            <option value="">Select attrition rate</option>
            {attritionRateOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Revenue Growth Rate */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
            What is your company's annual revenue growth rate? *
          </label>
          <select
            value={data.businessHealth.revenueGrowthRate}
            onChange={(e) => handleInputChange('revenueGrowthRate', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
            required
          >
            <option value="">Select revenue growth rate</option>
            {revenueGrowthOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-6">
        <button
          onClick={onPrevious}
          disabled={isFirstStep}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
            isFirstStep
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-all duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={!data.businessHealth.attritionRate || !data.businessHealth.revenueGrowthRate}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step2BusinessHealth;