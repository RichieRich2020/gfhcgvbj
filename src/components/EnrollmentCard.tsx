import { Calendar, Users, Clock, GraduationCap } from "lucide-react";

export interface EnrollmentCardProps {
  title: string;
  instructor: string;
  description: string;
  duration: string;
  enrolledStudents: number;
  maxStudents: number;
  deadline: string;
  price: string;
  status: "open" | "full" | "closed";
  level: string;
  category: string;
}

const statusConfig = {
  open: {
    badge: "Available",
    badgeVariant: "default" as const,
    buttonText: "Enroll Now",
    buttonVariant: "default" as const,
  },
  full: {
    badge: "Full",
    badgeVariant: "secondary" as const,
    buttonText: "Join Waitlist",
    buttonVariant: "outline" as const,
  },
  closed: {
    badge: "Closed",
    badgeVariant: "destructive" as const,
    buttonText: "Notify Me",
    buttonVariant: "outline" as const,
  },
};

export function EnrollmentCard({
  title,
  instructor,
  description,
  duration,
  enrolledStudents,
  maxStudents,
  deadline,
  price,
  status,
  level,
  category,
}: EnrollmentCardProps) {
  const config = statusConfig[status];
  const enrollmentPercentage = (enrolledStudents / maxStudents) * 100;

  return (
   <div className="w-full p-3 flex justify-center">
     <div className="w-[60%] group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      {/* Gradient overlay for hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <GraduationCap className="h-4 w-4" />
              <span>{category}</span>
              <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full border">
                {level}
              </span>
            </div>
            <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors duration-200">
              {title}
            </h3>
            <p className="text-gray-500 text-sm">by {instructor}</p>
          </div>
          <span className={`px-3 py-1 text-xs font-medium rounded-full shrink-0 ${
            config.badgeVariant === 'default' ? 'bg-blue-100 text-blue-800' :
            config.badgeVariant === 'secondary' ? 'bg-gray-100 text-gray-800' :
            'bg-red-100 text-red-800'
          }`}>
            {config.badge}
          </span>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-gray-600 leading-relaxed">
            {description}
          </p>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-gray-500" />
                <span>{duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4 text-gray-500" />
                <span>{enrolledStudents}/{maxStudents}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-lg text-gray-900">{price}</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Enrollment Progress</span>
              <span className="font-medium">{Math.round(enrollmentPercentage)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${enrollmentPercentage}%` }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Calendar className="h-4 w-4" />
              <span>Deadline: {deadline}</span>
            </div>
            <button className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
              config.buttonVariant === 'default' ? 'bg-blue-500 text-white hover:bg-blue-600' :
              'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}>
              {config.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
}