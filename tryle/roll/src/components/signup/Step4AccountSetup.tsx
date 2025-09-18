import React, { useState } from 'react';
import { Mail, Phone, CheckCircle } from 'lucide-react';
import { SignupStepProps } from '../../types/signup';

const Step4AccountSetup: React.FC<SignupStepProps> = ({ 
  data, 
  onUpdate, 
  onNext, 
  onPrevious, 
  isFirstStep, 
  isLastStep 
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: keyof typeof data.accountSetup, value: string) => {
    onUpdate({
      accountSetup: {
        ...data.accountSetup,
        [field]: value
      }
    });
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const handleSubmit = async () => {
    if (!validateEmail(data.accountSetup.email) || !validatePhone(data.accountSetup.phoneNumber)) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Call onNext after successful submission
    setTimeout(() => {
      onNext();
    }, 1500);
  };

  const isFormValid = validateEmail(data.accountSetup.email) && validatePhone(data.accountSetup.phoneNumber);

  if (isSubmitted) {
    return (
      <div className="space-y-8">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Account Created Successfully!</h2>
          <p className="text-gray-600">Welcome to our wellness platform. You'll receive a confirmation email shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Account Setup</h2>
        <p className="text-gray-600">Please provide your sign-up details</p>
      </div>

      <div className="space-y-6">
        {/* Email Address */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Mail className="w-4 h-4 mr-2 text-primary-600" />
            Email Address *
          </label>
          <input
            type="email"
            value={data.accountSetup.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
              data.accountSetup.email && !validateEmail(data.accountSetup.email)
                ? 'border-red-300 bg-red-50'
                : 'border-gray-300'
            }`}
            placeholder="Enter your email address"
            required
          />
          {data.accountSetup.email && !validateEmail(data.accountSetup.email) && (
            <p className="text-sm text-red-600">Please enter a valid email address</p>
          )}
        </div>

        {/* Phone Number */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Phone className="w-4 h-4 mr-2 text-primary-600" />
            Phone Number *
          </label>
          <input
            type="tel"
            value={data.accountSetup.phoneNumber}
            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
              data.accountSetup.phoneNumber && !validatePhone(data.accountSetup.phoneNumber)
                ? 'border-red-300 bg-red-50'
                : 'border-gray-300'
            }`}
            placeholder="Enter your phone number"
            required
          />
          {data.accountSetup.phoneNumber && !validatePhone(data.accountSetup.phoneNumber) && (
            <p className="text-sm text-red-600">Please enter a valid phone number</p>
          )}
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-sm text-gray-600">
          By creating an account, you agree to our{' '}
          <a href="#" className="text-primary-600 hover:text-primary-700 underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-primary-600 hover:text-primary-700 underline">
            Privacy Policy
          </a>
          . We'll use your information to provide personalized wellness recommendations.
        </p>
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
          onClick={handleSubmit}
          disabled={!isFormValid || isSubmitting}
          className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-all duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Creating Account...</span>
            </>
          ) : (
            <span>Create Account</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Step4AccountSetup;