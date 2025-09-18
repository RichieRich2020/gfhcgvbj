import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    { name: 'Coffee Catering', href: '#' },
    { name: 'Private Events', href: '#' },
    { name: 'Coffee Classes', href: '#' },
    { name: 'Corporate Orders', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-2xl font-serif font-bold">Co.Evolve</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Savor moments of bliss with expertly crafted coffees and delectable pastries 
              that embrace your senses and create unforgettable experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-primary-400 mt-1" size={18} />
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-white">456 Elm Street, Los Angeles</p>
                  <p className="text-white">CA 90001</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="text-primary-400" size={18} />
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="text-white">(213) 555-123-3456</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="text-primary-400" size={18} />
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-white">contact@coevolve.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="text-primary-400 mt-1" size={18} />
                <div>
                  <p className="text-gray-400">Opening Hours</p>
                  <p className="text-white">Weekdays: 10:00am - 9:00pm</p>
                  <p className="text-white">Weekends: 9:00am - 10:00pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © Co.Evolve 2025 Design by StyleShout Distributed by ThemeWagon
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
            >
              <span className="text-sm">Back To Top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;