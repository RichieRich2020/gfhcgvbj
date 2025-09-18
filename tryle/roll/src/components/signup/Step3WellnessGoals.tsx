import React from 'react';
import { Heart, Users, Shield, UserCheck, DollarSign, Activity } from 'lucide-react';
import { SignupStepProps } from '../../types/signup';

const Step3WellnessGoals: React.FC<SignupStepProps> = ({ 
  data, 
  onUpdate, 
  onNext, 
  onPrevious, 
  isFirstStep, 
  isLastStep 
}) => {
  const handleCheckboxChange = (field: keyof typeof data.wellnessGoals, checked: boolean) => {
    onUpdate({
      wellnessGoals: {
        ...data.wellnessGoals,
        [field]: checked
      }
    });
  };

  const handleNext = () => {
    // Check if at least one wellness goal is selected
    const hasSelectedGoal = Object.values(data.wellnessGoals).some(goal => goal);
    if (hasSelectedGoal) {
      onNext();
    }
  };

  const wellnessOptions = [
    {
      key: 'happyCulture' as keyof typeof data.wellnessGoals,
      label: 'Create a Happy & Positive Work Culture',
      icon: Heart,
      description: 'Foster a positive and uplifting workplace environment'
    },
    {
      key: 'teamBonding' as keyof typeof data.wellnessGoals,
      label: 'Strengthen Team Bonding',
      icon: Users,
      description: 'Build stronger relationships and collaboration among teams'
    },
    {
      key: 'employeeWellbeing' as keyof typeof data.wellnessGoals,
      label: 'Improve Employee Wellbeing',
      icon: Shield,
      description: 'Enhance physical, mental, and emotional health of employees'
    },
    {
      key: 'employeeRetention' as keyof typeof data.wellnessGoals,
      label: 'Increase Employee Retention',
      icon: UserCheck,
      description: 'Reduce turnover and keep valuable team members'
    },
    {
      key: 'boostRevenues' as keyof typeof data.wellnessGoals,
      label: 'Boost Revenues through Wellness',
      icon: DollarSign,
      description: 'Drive business growth through improved employee performance'
    },
    {
      key: 'additionalActivities' as keyof typeof data.wellnessGoals,
      label: 'Introduce Additional Wellness Activities',
      icon: Activity,
      description: 'Expand current wellness programs and initiatives'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Wellness Goals</h2>
        <p className="text-gray-600">What are your primary Wellness Objectives? (Select all that apply)</p>
      </div>

      <div className="space-y-4">
        {wellnessOptions.map((option) => {
          const IconComponent = option.icon;
          const isSelected = data.wellnessGoals[option.key];
          
          return (
            <div
              key={option.key}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                isSelected
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => handleCheckboxChange(option.key, !isSelected)}
            >
              <div className="flex items-start space-x-3">
                <div className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                  isSelected
                    ? 'border-primary-500 bg-primary-500'
                    : 'border-gray-300'
                }`}>
                  {isSelected && (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <IconComponent className={`w-5 h-5 ${isSelected ? 'text-primary-600' : 'text-gray-500'}`} />
                    <h3 className={`font-medium ${isSelected ? 'text-primary-900' : 'text-gray-900'}`}>
                      {option.label}
                    </h3>
                  </div>
                  <p className={`text-sm ${isSelected ? 'text-primary-700' : 'text-gray-600'}`}>
                    {option.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
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
          disabled={!Object.values(data.wellnessGoals).some(goal => goal)}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step3WellnessGoals;