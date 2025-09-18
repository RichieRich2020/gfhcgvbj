export interface CompanyDetails {
  companyName: string;
  location: string;
  employeeCount: string;
}

export interface BusinessHealth {
  attritionRate: string;
  revenueGrowthRate: string;
}

export interface WellnessGoals {
  happyCulture: boolean;
  teamBonding: boolean;
  employeeWellbeing: boolean;
  employeeRetention: boolean;
  boostRevenues: boolean;
  additionalActivities: boolean;
}

export interface AccountSetup {
  email: string;
  phoneNumber: string;
}

export interface SignupData {
  companyDetails: CompanyDetails;
  businessHealth: BusinessHealth;
  wellnessGoals: WellnessGoals;
  accountSetup: AccountSetup;
}

export interface SignupStepProps {
  data: SignupData;
  onUpdate: (data: Partial<SignupData>) => void;
  onNext: () => void;
  onPrevious: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}