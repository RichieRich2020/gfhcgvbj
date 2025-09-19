import React, { useState } from 'react';
import { 
  Heart, 
  Brain, 
  Users, 
  Activity, 
  Moon, 
  Coffee, 
  BookOpen, 
  Target, 
  Zap,
  ArrowLeft
} from 'lucide-react';
import steveCookImage from '../assets/steve-cook.webp';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

interface ScoreCardProps {
  title: string;
  score: number;
  icon: React.ReactNode;
  color: string;
  onClick: () => void;
}

const ScoreCard: React.FC<ScoreCardProps> = ({ title, score, icon, color, onClick }) => {
  return (
    <div 
      className="relative rounded-[30px] p-3 sm:p-4 md:p-6 border border-white border-opacity-20 hover:scale-105 transition-all duration-300 group cursor-pointer overflow-hidden h-[210px]"
      onClick={onClick}
      style={{
        backgroundImage: `url(${steveCookImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center h-full justify-end">
        {/* Title */}
        <h3 className="text-sm sm:text-base md:text-xl font-bold text-white sm:mb-2 group-hover:text-primary-300 transition-colors duration-300 drop-shadow-lg">
          {title}
        </h3>
      </div>
    </div>
  );
};

const ScoreGrid: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  // Chart data for each wellness category
  const getChartData = (category: string) => {
    const baseData = {
      'Mental Health': {
        weeklyData: [85, 88, 90, 92, 89, 91, 92],
        monthlyData: [78, 82, 85, 88, 90, 92],
        categories: ['Stress Level', 'Focus', 'Memory', 'Mood'],
        values: [92, 88, 85, 90]
      },
      'Physical Fitness': {
        weeklyData: [80, 82, 85, 87, 84, 86, 85],
        monthlyData: [75, 78, 80, 82, 84, 85],
        categories: ['Cardio', 'Strength', 'Flexibility', 'Endurance'],
        values: [85, 80, 75, 88]
      },
      'Social Connection': {
        weeklyData: [70, 75, 78, 80, 77, 79, 78],
        monthlyData: [65, 70, 72, 75, 77, 78],
        categories: ['Family', 'Friends', 'Colleagues', 'Community'],
        values: [78, 85, 70, 75]
      },
      'Sleep Quality': {
        weeklyData: [85, 87, 88, 90, 87, 89, 88],
        monthlyData: [80, 83, 85, 87, 88, 88],
        categories: ['Duration', 'Deep Sleep', 'REM Sleep', 'Restfulness'],
        values: [88, 85, 90, 87]
      },
      'Nutrition': {
        weeklyData: [78, 80, 82, 84, 81, 83, 82],
        monthlyData: [75, 77, 79, 81, 82, 82],
        categories: ['Hydration', 'Vitamins', 'Protein', 'Fiber'],
        values: [82, 85, 80, 78]
      },
      'Learning': {
        weeklyData: [88, 90, 92, 94, 91, 93, 90],
        monthlyData: [85, 87, 89, 91, 92, 90],
        categories: ['Reading', 'Skills', 'Courses', 'Practice'],
        values: [90, 88, 92, 85]
      },
      'Goal Achievement': {
        weeklyData: [70, 72, 75, 78, 74, 76, 75],
        monthlyData: [65, 68, 70, 73, 74, 75],
        categories: ['Career', 'Personal', 'Health', 'Financial'],
        values: [75, 80, 70, 72]
      },
      'Energy Level': {
        weeklyData: [82, 84, 86, 88, 85, 87, 86],
        monthlyData: [78, 80, 82, 84, 85, 86],
        categories: ['Morning', 'Afternoon', 'Evening', 'Overall'],
        values: [86, 88, 82, 85]
      },
      'Overall Wellness': {
        weeklyData: [84, 86, 88, 90, 87, 89, 87],
        monthlyData: [80, 82, 84, 86, 87, 87],
        categories: ['Physical', 'Mental', 'Emotional', 'Spiritual'],
        values: [87, 90, 85, 88]
      }
    };
    return baseData[category as keyof typeof baseData] || baseData['Overall Wellness'];
  };

  const scoreData = [
    {
      title: "Mental Health",
      score: 92,
      icon: <Brain className="w-6 h-6 text-white" />,
      color: "bg-blue-500"
    },
    {
      title: "Physical Fitness",
      score: 85,
      icon: <Activity className="w-6 h-6 text-white" />,
      color: "bg-green-500"
    },
    {
      title: "Social Connection",
      score: 78,
      icon: <Users className="w-6 h-6 text-white" />,
      color: "bg-purple-500"
    },
    {
      title: "Sleep Quality",
      score: 88,
      icon: <Moon className="w-6 h-6 text-white" />,
      color: "bg-indigo-500"
    },
    {
      title: "Nutrition",
      score: 82,
      icon: <Coffee className="w-6 h-6 text-white" />,
      color: "bg-orange-500"
    },
    {
      title: "Learning",
      score: 90,
      icon: <BookOpen className="w-6 h-6 text-white" />,
      color: "bg-teal-500"
    },
    {
      title: "Goal Achievement",
      score: 75,
      icon: <Target className="w-6 h-6 text-white" />,
      color: "bg-red-500"
    },
    {
      title: "Energy Level",
      score: 86,
      icon: <Zap className="w-6 h-6 text-white" />,
      color: "bg-yellow-500"
    },
    {
      title: "Overall Wellness",
      score: 87,
      icon: <Heart className="w-6 h-6 text-white" />,
      color: "bg-pink-500"
    }
  ];

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart' as const,
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 14,
            family: 'Inter',
            weight: 'bold' as const,
          },
          color: '#374151',
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        titleFont: {
          size: 14,
          weight: 'bold' as const,
        },
        bodyFont: {
          size: 13,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
          drawBorder: false,
        },
        ticks: {
          font: {
            size: 12,
            weight: 'normal' as const,
          },
          color: '#6B7280',
          padding: 10,
        },
      },
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
          drawBorder: false,
        },
        ticks: {
          font: {
            size: 12,
            weight: 'normal' as const,
          },
          color: '#6B7280',
          padding: 10,
        },
      },
    },
  };


  const renderCharts = (category: string) => {
    const data = getChartData(category);
    const selectedItem = scoreData.find(item => item.title === category);
    
    // Get category-specific colors
    const getCategoryColors = (cat: string) => {
      switch (cat) {
        case 'Mental Health':
          return {
            border: 'rgba(99, 102, 241, 1)', // Indigo
            background: 'rgba(99, 102, 241, 0.1)',
            gradient: 'rgba(99, 102, 241, 0.3)',
            point: 'rgba(99, 102, 241, 1)'
          };
        case 'Physical Fitness':
          return {
            border: 'rgba(16, 185, 129, 1)', // Emerald
            background: 'rgba(16, 185, 129, 0.1)',
            gradient: 'rgba(16, 185, 129, 0.3)',
            point: 'rgba(16, 185, 129, 1)'
          };
        case 'Social Connection':
          return {
            border: 'rgba(245, 158, 11, 1)', // Amber
            background: 'rgba(245, 158, 11, 0.1)',
            gradient: 'rgba(245, 158, 11, 0.3)',
            point: 'rgba(245, 158, 11, 1)'
          };
        case 'Sleep Quality':
          return {
            border: 'rgba(139, 92, 246, 1)', // Purple
            background: 'rgba(139, 92, 246, 0.1)',
            gradient: 'rgba(139, 92, 246, 0.3)',
            point: 'rgba(139, 92, 246, 1)'
          };
        default:
          return {
            border: 'rgba(59, 130, 246, 1)', // Blue
            background: 'rgba(59, 130, 246, 0.1)',
            gradient: 'rgba(59, 130, 246, 0.3)',
            point: 'rgba(59, 130, 246, 1)'
          };
      }
    };

    const colors = getCategoryColors(category);
    
    // Weekly trend data
    const weeklyData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: `${category} Score`,
          data: data.weeklyData,
          borderColor: colors.border,
          backgroundColor: colors.background,
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: colors.point,
          pointBorderColor: '#ffffff',
          pointBorderWidth: 3,
          pointRadius: 8,
          pointHoverRadius: 10,
          pointHoverBackgroundColor: colors.point,
          pointHoverBorderColor: '#ffffff',
          pointHoverBorderWidth: 4,
        },
      ],
    };


    return (
      <div className="">
        {/* Back Button */}
        <button
          onClick={() => setSelectedCard(null)}
          className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors duration-300 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Dashboard
        </button>

        {/* Category Header */}
        <div className="text-center mb-8">
          <div className={`w-16 h-16 ${selectedItem?.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
            {selectedItem?.icon}
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-2">
            {category} Analytics
          </h2>
          <p className="text-lg text-gray-600">
            Detailed insights into your {category.toLowerCase()} performance
          </p>
        </div>

        {/* Single Chart */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg max-w-4xl mx-auto hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-800">Weekly Trend</h3>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{backgroundColor: colors.border}}></div>
              <span className="text-sm font-medium text-gray-600">{category} Score</span>
            </div>
          </div>
          <div className="h-96 bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100">
            <Line data={weeklyData} options={chartOptions} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 px-6 sm:px-8 lg:px-12 bg-white">
      <div className="container-custom">
        {selectedCard ? (
          renderCharts(selectedCard)
        ) : (
          <>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl  font-bold text-black mb-4 drop-shadow-lg text-left ml-8">
                Our Features
              </h2>
        
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
              {scoreData.map((item, index) => (
                <ScoreCard
                  key={index}
                  title={item.title}
                  score={item.score}
                  icon={item.icon}
                  color={item.color}
                  onClick={() => setSelectedCard(item.title)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ScoreGrid;