import React, { useState } from 'react';
import { Coffee, Cookie, Star } from 'lucide-react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('signature');

  const menuCategories = {
    signature: {
      title: 'Signature Blends',
      icon: Coffee,
      items: [
        {
          name: 'Co.Evolve Elegance Espresso',
          description: 'Rich and full-bodied, our signature espresso blend with notes of dark chocolate and toasted nuts.',
          price: '$3.50'
        },
        {
          name: 'Velvet Mocha Delight',
          description: 'Silky mocha infused with a hint of vanilla, crowned with velvety whipped cream.',
          price: '$4.25'
        },
        {
          name: 'Caramel Macchiato Symphony',
          description: 'A harmonious blend of espresso, steamed milk, and caramel drizzle.',
          price: '$4.00'
        },
        {
          name: 'Hazelnut Heaven Latte',
          description: 'Creamy latte with the nutty goodness of hazelnut syrup.',
          price: '$4.50'
        },
        {
          name: 'French Vanilla Cappuccino',
          description: 'Classic cappuccino with a touch of French vanilla sweetness.',
          price: '$4.25'
        }
      ]
    },
    pastries: {
      title: 'Freshly Baked Pastries',
      icon: Cookie,
      items: [
        {
          name: 'Buttery Croissants',
          description: 'Flaky and buttery croissants baked to perfection.',
          price: '$2.50'
        },
        {
          name: 'Flaky Almond Danishes',
          description: 'Delicate pastries filled with almond paste and sliced almonds.',
          price: '$3.00'
        },
        {
          name: 'Blueberry Streusel Muffins',
          description: 'Moist muffins bursting with blueberries and a crumbly streusel top.',
          price: '$2.75'
        },
        {
          name: 'Chocolate-Filled Scones',
          description: 'Tender scones with a surprise chocolate center.',
          price: '$3.25'
        },
        {
          name: 'Raspberry Cream Cheese Danish',
          description: 'Sweet and tangy raspberry filling in a cream cheese danish.',
          price: '$3.25'
        }
      ]
    },
    treats: {
      title: 'Gourmet Treats',
      icon: Star,
      items: [
        {
          name: 'Artisanal Dark Chocolate Truffles',
          description: 'Luxurious dark chocolate truffles dusted with cocoa powder.',
          price: '$2.75'
        },
        {
          name: 'Handcrafted Praline Bonbons',
          description: 'Praline-filled bonbons topped with a caramelized nut.',
          price: '$3.00'
        },
        {
          name: 'Pistachio and Sea Salt Toffee',
          description: 'Crunchy toffee coated in pistachios and sea salt.',
          price: '$4.00'
        },
        {
          name: 'Raspberry White Chocolate Bark',
          description: 'Creamy white chocolate with swirls of raspberry and a sprinkle of almonds.',
          price: '$3.50'
        },
        {
          name: 'Salted Caramel Brownie Bites',
          description: 'Fudgy brownie bites with a caramel drizzle and a touch of sea salt.',
          price: '$2.50'
        }
      ]
    }
  };

  return (
    <section id="menu" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium coffees, fresh pastries, and gourmet treats.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(menuCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-500'
              }`}
            >
              <category.icon size={20} />
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {menuCategories[activeCategory as keyof typeof menuCategories].items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <span className="text-2xl font-bold text-primary-500">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Offer */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Daily Special
            </h3>
            <p className="text-lg mb-6">
              Get 20% off any pastry with your coffee purchase
            </p>
            <button className="btn-secondary border-white text-white hover:bg-white hover:text-primary-500">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;