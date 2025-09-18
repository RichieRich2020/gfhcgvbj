import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'John Rockefeller',
      location: 'Cleveland, Ohio',
      rating: 5,
      text: 'Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem. Explicabo a quaerat sint autem dolore ducimus ut consequatur neque. Nisi dolores quaerat fuga rem nihil nostrum. Laudantium quia consequatur molestias.',
      avatar: 'JR'
    },
    {
      id: 2,
      name: 'Andrew Carnegie',
      location: 'Pittsburgh, Pennsylvania',
      rating: 5,
      text: 'Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci. Nisi eaque consequatur. Voluptatem dignissimos ut ducimus accusantium perspiciatis. Quasi voluptas eius distinctio. Atque eos maxime.',
      avatar: 'AC'
    },
    {
      id: 3,
      name: 'John Morgan',
      location: 'New York City',
      rating: 5,
      text: 'Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam. Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio. Voluptatem dignissimos ut.',
      avatar: 'JM'
    },
    {
      id: 4,
      name: 'Henry Ford',
      location: 'Dearborn, Michigan',
      rating: 5,
      text: 'Nunc interdum lacus sit amet orci. Vestibulum dapibus nunc ac augue. Fusce vel dui. In ac felis quis tortor malesuada pretium. Curabitur vestibulum aliquam leo. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.',
      avatar: 'HF'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied customers about their Co.Evolve experience.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                <Quote className="text-white" size={24} />
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center relative">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={24} />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                {/* Avatar */}
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {testimonials[currentTestimonial].avatar}
                  </span>
                </div>
                
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800 text-lg">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-primary-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-500 mb-2">4.8</div>
            <div className="text-gray-600">Average Rating</div>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={16} />
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-500 mb-2">2,847</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-500 mb-2">98%</div>
            <div className="text-gray-600">Would Recommend</div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-serif font-bold mb-4">
            Subscribe to our mailing list
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Get updates, news, and exclusive offers delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="btn-secondary border-white text-white hover:bg-white hover:text-primary-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;