import React, { useState } from 'react';
import { 
  Shield, 
  Zap, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Star,
  Award
} from 'lucide-react';

interface Feature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  benefits: string[];
}

const EnrichCard: React.FC = () => {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features: Feature[] = [
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Enterprise-grade protection with end-to-end encryption and multi-factor authentication.",
      benefits: ["256-bit SSL encryption", "Zero-trust architecture", "Real-time threat monitoring"]
    },
    {
      icon: Zap,
      title: "Lightning Performance",
      description: "Optimized infrastructure delivers sub-second response times and 99.9% uptime guarantee.",
      benefits: ["Global CDN network", "Auto-scaling resources", "Performance monitoring"]
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless collaboration tools with real-time editing, comments, and project management.",
      benefits: ["Real-time collaboration", "Advanced permissions", "Activity tracking"]
    },
    {
      icon: TrendingUp,
      title: "Analytics & Insights",
      description: "Comprehensive analytics dashboard with predictive insights and custom reporting.",
      benefits: ["Advanced analytics", "Predictive modeling", "Custom dashboards"]
    }
  ];

  const handleEnroll = () => {
    setIsEnrolled(true);
    // Simulate enrollment process
    setTimeout(() => {
      alert('Successfully enrolled! Welcome to our premium features.');
    }, 1000);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Premium Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Unlock Your <span className="text-blue-600">Full Potential</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of premium features designed to transform your workflow 
            and accelerate your success with cutting-edge technology.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 ${
                hoveredCard === index ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-500">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default EnrichCard;