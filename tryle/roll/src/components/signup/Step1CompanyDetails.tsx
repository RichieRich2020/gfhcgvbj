import React from 'react';
import { Building2, MapPin, Users } from 'lucide-react';
import { SignupStepProps } from '../../types/signup';

const Step1CompanyDetails: React.FC<SignupStepProps> = ({ 
  data, 
  onUpdate, 
  onNext, 
  onPrevious, 
  isFirstStep, 
  isLastStep 
}) => {
  const handleInputChange = (field: keyof typeof data.companyDetails, value: string) => {
    onUpdate({
      companyDetails: {
        ...data.companyDetails,
        [field]: value
      }
    });
  };

  const handleNext = () => {
    if (data.companyDetails.companyName && data.companyDetails.location && data.companyDetails.employeeCount) {
      onNext();
    }
  };

  const employeeCountOptions = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '501-1000 employees',
    '1000+ employees'
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Company Details</h2>
        <p className="text-gray-600">Tell us about your organization</p>
      </div>

      <div className="space-y-6">
        {/* Company Name */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Building2 className="w-4 h-4 mr-2 text-primary-600" />
            What is your Company Name? *
          </label>
          <input
            type="text"
            value={data.companyDetails.companyName}
            onChange={(e) => handleInputChange('companyName', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
            placeholder="Enter your company name"
            required
          />
        </div>

        {/* Location */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <MapPin className="w-4 h-4 mr-2 text-primary-600" />
            What is your Location (Head Office / Primary Operations)? *
          </label>
          <input
            type="text"
            value={data.companyDetails.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
            placeholder="Enter your location"
            required
          />
        </div>

        {/* Employee Count */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Users className="w-4 h-4 mr-2 text-primary-600" />
            How many employees does your organization currently have? *
          </label>
          <select
            value={data.companyDetails.employeeCount}
            onChange={(e) => handleInputChange('employeeCount', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
            required
          >
            <option value="">Select employee count</option>
            {employeeCountOptions.map((option) => (
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
          disabled={!data.companyDetails.companyName || !data.companyDetails.location || !data.companyDetails.employeeCount}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step1CompanyDetails;