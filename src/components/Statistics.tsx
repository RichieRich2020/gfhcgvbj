import React from 'react';
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
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { TrendingUp, Users, Coffee, Star } from 'lucide-react';

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

const Statistics: React.FC = () => {
  // Check if we're on mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  // Sales Data
  const salesData = {
    labels: isMobile ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] : ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Coffee Sales',
        data: [120, 150, 180, 200, 220, 250],
        backgroundColor: 'rgba(242, 116, 11, 0.8)',
        borderColor: 'rgba(242, 116, 11, 1)',
        borderWidth: isMobile ? 1 : 2,
        borderRadius: isMobile ? 4 : 8,
      },
      {
        label: 'Pastry Sales',
        data: [80, 100, 120, 140, 160, 180],
        backgroundColor: 'rgba(100, 116, 139, 0.8)',
        borderColor: 'rgba(100, 116, 139, 1)',
        borderWidth: isMobile ? 1 : 2,
        borderRadius: isMobile ? 4 : 8,
      },
    ],
  };

  // Customer Satisfaction
  const satisfactionData = {
    labels: ['Excellent', 'Good', 'Average', 'Poor'],
    datasets: [
      {
        data: [65, 25, 8, 2],
        backgroundColor: [
          'rgba(242, 116, 11, 0.8)',
          'rgba(100, 116, 139, 0.8)',
          'rgba(156, 163, 175, 0.8)',
          'rgba(239, 68, 68, 0.8)',
        ],
        borderColor: [
          'rgba(242, 116, 11, 1)',
          'rgba(100, 116, 139, 1)',
          'rgba(156, 163, 175, 1)',
          'rgba(239, 68, 68, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  // Revenue Trend
  const revenueData = {
    labels: isMobile ? ['W1', 'W2', 'W3', 'W4'] : ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Revenue ($)',
        data: [2500, 3200, 2800, 3800],
        borderColor: 'rgba(242, 116, 11, 1)',
        backgroundColor: 'rgba(242, 116, 11, 0.1)',
        borderWidth: isMobile ? 2 : 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgba(242, 116, 11, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: isMobile ? 1 : 2,
        pointRadius: isMobile ? 4 : 6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: isMobile ? 10 : 12,
            family: 'Inter',
          },
          boxWidth: isMobile ? 12 : 15,
          padding: isMobile ? 8 : 12,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          font: {
            size: isMobile ? 10 : 12,
          },
        },
      },
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          font: {
            size: isMobile ? 10 : 12,
          },
        },
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          font: {
            size: isMobile ? 10 : 12,
            family: 'Inter',
          },
          boxWidth: isMobile ? 12 : 15,
          padding: isMobile ? 6 : 10,
        },
      },
    },
  };

  const statsCards = [
    {
      icon: TrendingUp,
      title: 'Monthly Growth',
      value: '+24%',
      description: 'Compared to last month',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: Users,
      title: 'Happy Customers',
      value: '2,847',
      description: 'Satisfied customers this month',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Coffee,
      title: 'Cups Served',
      value: '15,234',
      description: 'Fresh cups this month',
      color: 'text-primary-500',
      bgColor: 'bg-primary-50',
    },
    {
      icon: Star,
      title: 'Average Rating',
      value: '4.8',
      description: 'Out of 5 stars',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4 sm:mb-6">
            Our Performance
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Track our success through data-driven insights and customer satisfaction metrics.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {statsCards.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} rounded-xl p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-300 card-hover`}
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                <stat.icon className={stat.color} size={isMobile ? 20 : 24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">{stat.value}</h3>
              <h4 className="font-semibold text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">{stat.title}</h4>
              <p className="text-xs sm:text-sm text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Sales Chart */}
          <div className="bg-gray-50 rounded-2xl p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Monthly Sales</h3>
            <div className="h-64 sm:h-80">
              <Bar data={salesData} options={chartOptions} />
            </div>
          </div>

          {/* Customer Satisfaction */}
          <div className="bg-gray-50 rounded-2xl p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Customer Satisfaction</h3>
            <div className="h-64 sm:h-80">
              <Doughnut data={satisfactionData} options={doughnutOptions} />
            </div>
          </div>

          {/* Revenue Trend */}
          <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 lg:col-span-2">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Revenue Trend</h3>
            <div className="h-64 sm:h-80">
              <Line data={revenueData} options={chartOptions} />
            </div>
          </div>
        </div>

        {/* Additional Metrics */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary-500 mb-1 sm:mb-2">98%</div>
            <div className="text-sm sm:text-base text-gray-600">Customer Retention Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary-500 mb-1 sm:mb-2">4.2min</div>
            <div className="text-sm sm:text-base text-gray-600">Average Wait Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary-500 mb-1 sm:mb-2">156</div>
            <div className="text-sm sm:text-base text-gray-600">Daily Orders</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;