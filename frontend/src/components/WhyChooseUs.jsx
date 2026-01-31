import React from 'react';

// YAHAN APNI ASSETS FOLDER WALI IMAGES IMPORT KAREIN
// Filhal maine dummy names likhe hain, aap inko apne file names se replace karein
import image1 from '../assets/icon1.jpeg'; 
import image2 from '../assets/icon2.jpeg';
import image3 from '../assets/icon3.jpeg';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      image: image1, // Icon ki jagah image variable use kiya
      title: "Research Subburbs",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure qui natus perspiciatis ex odio molestia.",
    },
    {
      id: 2,
      image: image2,
      title: "Sold Houses",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure qui natus perspiciatis ex odio molestia.",
    },
    {
      id: 3,
      image: image3,
      title: "Security Priority",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure qui natus perspiciatis ex odio molestia.",
    }
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADING SECTION --- */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-6 uppercase tracking-wide">
            Why Choose Us?
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis maiores quisquam saepe architecto error corporis aliquam. Cum ipsam a consectetur aut sunt sint animi, pariatur corporis, eaque, deleniti cupiditate officia.
          </p>
        </div>

        {/* --- FEATURES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center group">
              
              {/* Image Container with Hover Effect */}
              {/* 'w-12 h-12' ka matlab 48px hai (same as icon size=48) */}
              <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-24 h-24 object-contain" 
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-normal text-gray-800 mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6 px-4">
                {feature.description}
              </p>

              {/* Read More Link */}
              <a 
                href="#" 
                className="inline-block text-xs font-bold text-gray-400 uppercase tracking-[0.2em] hover:text-[#83b735] transition-colors bg-gray-100 rounded-full px-4 py-2"
              >
                Read More
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;