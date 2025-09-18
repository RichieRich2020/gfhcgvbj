import React from 'react';
import { Coffee, Heart, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Coffee,
      title: 'Premium Coffee',
      description: 'Expertly crafted blends from around the world'
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every cup is prepared with passion and care'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Award-winning recipes and ingredients'
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Building connections through great coffee'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi earum, 
                  ut consequuntur pariatur fugiat aliquam voluptatem officia blanditiis 
                  ipsa laboriosam ad velit voluptate nisi saepe quisquam minima culpa eaque amet.
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero 
                  sit neque sequi eius illum at porro aperiam. Iusto reiciendis reprehenderit 
                  ipsa molestias sit eaque velit, veritatis quod, cum exercitationem doloribus 
                  eos cumque, ipsam voluptate! Nam doloribus quibusdam eos ipsum optio animi ea ex.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore qui quod 
                  consequuntur iure. Assumenda, magnam quis ut libero impedit porro?
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors duration-300">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="text-primary-500" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <Coffee size={80} className="text-primary-500 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Coffee Experience</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-300 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-200 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;