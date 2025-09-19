import React, { useState } from 'react';
import { X, ChevronLeft } from 'lucide-react';
import { SignupData } from '../types/signup';
import Step1CompanyDetails from './signup/Step1CompanyDetails';
import Step2BusinessHealth from './signup/Step2BusinessHealth';
import Step3WellnessGoals from './signup/Step3WellnessGoals';
import Step4AccountSetup from './signup/Step4AccountSetup';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [signupData, setSignupData] = useState<SignupData>({
    companyDetails: {
      companyName: '',
      location: '',
      employeeCount: ''
    },
    businessHealth: {
      attritionRate: '',
      revenueGrowthRate: ''
    },
    wellnessGoals: {
      happyCulture: false,
      teamBonding: false,
      employeeWellbeing: false,
      employeeRetention: false,
      boostRevenues: false,
      additionalActivities: false
    },
    accountSetup: {
      email: '',
      phoneNumber: ''
    }
  });

  const steps = [
    { number: 1, title: 'Company Details', component: Step1CompanyDetails },
    { number: 2, title: 'Business Health', component: Step2BusinessHealth },
    { number: 3, title: 'Wellness Goals', component: Step3WellnessGoals },
    { number: 4, title: 'Account Setup', component: Step4AccountSetup }
  ];

  const handleDataUpdate = (data: Partial<SignupData>) => {
    setSignupData(prev => ({ ...prev, ...data }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClose = () => {
    setCurrentStep(1);
    setSignupData({
      companyDetails: { companyName: '', location: '', employeeCount: '' },
      businessHealth: { attritionRate: '', revenueGrowthRate: '' },
      wellnessGoals: {
        happyCulture: false,
        teamBonding: false,
        employeeWellbeing: false,
        employeeRetention: false,
        boostRevenues: false,
        additionalActivities: false
      },
      accountSetup: { email: '', phoneNumber: '' }
    });
    onClose();
  };

  if (!isOpen) return null;

  const CurrentStepComponent = steps[currentStep - 1].component;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={handleClose}></div>
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-white">Onboarding Questionnaire</h1>
                <p className="text-primary-100 text-sm">Step {currentStep} of {steps.length}</p>
              </div>
              <button
                onClick={handleClose}
                className="text-white hover:text-primary-200 transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex space-x-2">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                      step.number <= currentStep
                        ? 'bg-white'
                        : 'bg-white bg-opacity-30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Step Navigation */}
          <div className="bg-gray-50 px-6 py-3 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {currentStep > 1 && (
                  <button
                    onClick={handlePrevious}
                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    <ChevronLeft size={16} />
                    <span className="text-sm font-medium">Previous</span>
                  </button>
                )}
              </div>
              <div className="text-sm font-medium text-gray-600">
                {steps[currentStep - 1].title}
              </div>
              <div className="w-20"></div> {/* Spacer for centering */}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
            <CurrentStepComponent
              data={signupData}
              onUpdate={handleDataUpdate}
              onNext={handleNext}
              onPrevious={handlePrevious}
              isFirstStep={currentStep === 1}
              isLastStep={currentStep === steps.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;