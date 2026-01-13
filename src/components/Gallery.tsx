import React, { useState } from 'react';

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  subtitle: string;
  image: string;
}

const Gallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      category: 'Tattoo',
      title: 'Custom Ink Designs',
      subtitle: 'Personalized tattoo artistry',
      image: '/tattoo.jpg'
    },
    {
      id: 2,
      category: 'Makeup',
      title: 'Bridal Glamour',
      subtitle: 'Wedding day perfection',
      image: '/makeup.jpg'
    },
    {
      id: 3,
      category: 'Nails',
      title: 'Artistic Manicures',
      subtitle: 'Precision nail artistry',
      image: '/nails.jpg'
    },
    {
      id: 4,
      category: 'Lashes',
      title: 'Lash Enhancements',
      subtitle: 'Natural-looking extensions',
      image: '/lashes.jpg'
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 md:mb-24">
          <div className="inline-block mb-8">
            <span className="text-[#8B7355] font-medium text-sm uppercase tracking-[0.2em]">
              Our Portfolio
            </span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#8B7355] to-[#FFD6E7] mx-auto mt-3"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
            Featured
            <span className="block mt-4 font-normal">Work</span>
          </h2>
          
          <p className="text-gray-600 text-xl leading-relaxed font-light max-w-2xl mx-auto">
            A curated selection of our recent beauty transformations and artistry.
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className="relative">
          {/* Main Carousel Container */}
          <div className="relative overflow-hidden rounded-[2.5rem] border border-gray-200">
            <div className="flex transition-transform duration-500 ease-in-out" 
                 style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {galleryItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="relative">
                    {/* Background Image */}
                    <div className="aspect-[4/3] md:aspect-video">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                      <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-3 mb-6">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span className="text-white text-sm uppercase tracking-widest font-medium">
                            {item.category}
                          </span>
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-medium text-white mb-4">
                          {item.title}
                        </h3>
                        <p className="text-white/80 text-lg md:text-xl font-light mb-8 max-w-md">
                          {item.subtitle}
                        </p>
                        
                        <button className="inline-flex items-center gap-3 text-white group">
                          <span className="text-sm uppercase tracking-widest font-medium">
                            View Case Study
                          </span>
                          <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/60 group-hover:bg-white/10 transition-all">
                            <div className="w-4 h-4 relative">
                              <div className="absolute top-0 right-0 w-2 h-0.5 bg-white rounded-full transform rotate-45"></div>
                              <div className="absolute bottom-0 left-0 w-2 h-0.5 bg-white rounded-full transform -rotate-45"></div>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 left-6 right-6 -translate-y-1/2 flex justify-between pointer-events-none">
            <button 
              onClick={prevSlide}
              className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-sm border border-gray-300 flex items-center justify-center hover:bg-white hover:border-gray-900 transition-all duration-300 group shadow-lg"
            >
              <div className="w-5 h-5 relative">
                <div className="absolute top-0 left-0 w-3 h-0.5 bg-gray-700 rounded-full transform rotate-45 translate-y-1 group-hover:bg-gray-900"></div>
                <div className="absolute bottom-0 left-0 w-3 h-0.5 bg-gray-700 rounded-full transform -rotate-45 -translate-y-1 group-hover:bg-gray-900"></div>
              </div>
            </button>
            
            <button 
              onClick={nextSlide}
              className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-sm border border-gray-300 flex items-center justify-center hover:bg-white hover:border-gray-900 transition-all duration-300 group shadow-lg"
            >
              <div className="w-5 h-5 relative">
                <div className="absolute top-0 right-0 w-3 h-0.5 bg-gray-700 rounded-full transform rotate-45 translate-y-1 group-hover:bg-gray-900"></div>
                <div className="absolute bottom-0 right-0 w-3 h-0.5 bg-gray-700 rounded-full transform -rotate-45 -translate-y-1 group-hover:bg-gray-900"></div>
              </div>
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-8 h-1 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-gray-900 w-12' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-24">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-3xl md:text-4xl font-light text-gray-900">
              Recent Work
            </h3>
            <button className="hidden md:inline-flex items-center gap-3 border border-gray-800 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 group">
              View All Projects
              <div className="w-5 h-5 rounded-full border border-gray-800 flex items-center justify-center group-hover:border-white">
                <div className="w-3 h-3 relative">
                  <div className="absolute top-0 right-0 w-1.5 h-0.5 bg-gray-800 rounded-full transform rotate-45 group-hover:bg-white"></div>
                  <div className="absolute bottom-0 left-0 w-1.5 h-0.5 bg-gray-800 rounded-full transform -rotate-45 group-hover:bg-white"></div>
                </div>
              </div>
            </button>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
              <div 
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl border border-gray-200 cursor-pointer ${
                  index === activeIndex ? 'ring-2 ring-gray-900' : ''
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="aspect-square bg-gray-50">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white text-sm font-medium">{item.category}</p>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                        <div className="w-3 h-3 relative">
                          <div className="absolute top-0 right-0 w-1.5 h-0.5 bg-white rounded-full transform rotate-45"></div>
                          <div className="absolute bottom-0 left-0 w-1.5 h-0.5 bg-white rounded-full transform -rotate-45"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-12 md:hidden text-center">
            <button className="inline-flex items-center gap-3 border border-gray-800 px-8 py-3.5 rounded-full text-base font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 group">
              View All Projects
              <div className="w-6 h-6 rounded-full border border-gray-800 flex items-center justify-center group-hover:border-white">
                <div className="w-4 h-4 relative">
                  <div className="absolute top-0 right-0 w-2 h-0.5 bg-gray-800 rounded-full transform rotate-45 group-hover:bg-white"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-0.5 bg-gray-800 rounded-full transform -rotate-45 group-hover:bg-white"></div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;