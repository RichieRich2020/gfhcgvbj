import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      title: 'Cozy Interior',
      description: 'Our warm and inviting cafe atmosphere',
      category: 'interior'
    },
    {
      id: 2,
      title: 'Fresh Coffee',
      description: 'Artfully crafted coffee beverages',
      category: 'coffee'
    },
    {
      id: 3,
      title: 'Delicious Pastries',
      description: 'Freshly baked treats and desserts',
      category: 'pastries'
    },
    {
      id: 4,
      title: 'Barista in Action',
      description: 'Our skilled baristas at work',
      category: 'staff'
    },
    {
      id: 5,
      title: 'Outdoor Seating',
      description: 'Relaxing outdoor dining area',
      category: 'exterior'
    },
    {
      id: 6,
      title: 'Coffee Beans',
      description: 'Premium quality coffee beans',
      category: 'coffee'
    },
    {
      id: 7,
      title: 'Morning Light',
      description: 'Beautiful morning ambiance',
      category: 'interior'
    },
    {
      id: 8,
      title: 'Customer Smiles',
      description: 'Happy customers enjoying their visit',
      category: 'customers'
    }
  ];

  const categories = ['all', 'interior', 'coffee', 'pastries', 'staff', 'exterior', 'customers'];
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a visual journey through our cafe and discover the moments that make us special.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 capitalize ${
                activeCategory === category
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 aspect-square">
                {/* Placeholder for image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-300 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">
                        {image.title.charAt(0)}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-700 mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-600">{image.description}</p>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <span className="text-primary-500 font-bold">+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
              >
                <X size={20} />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
              >
                <ChevronLeft size={20} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
              >
                <ChevronRight size={20} />
              </button>

              {/* Image Content */}
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary-300 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white font-bold text-3xl">
                        {filteredImages[selectedImage].title.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                      {filteredImages[selectedImage].title}
                    </h3>
                    <p className="text-gray-600">
                      {filteredImages[selectedImage].description}
                    </p>
                  </div>
                </div>
                
                {/* Image Info */}
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        {filteredImages[selectedImage].title}
                      </h4>
                      <p className="text-gray-600">
                        {filteredImages[selectedImage].description}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500">
                      {selectedImage + 1} / {filteredImages.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;