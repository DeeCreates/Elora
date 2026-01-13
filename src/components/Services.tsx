import React, { useState } from 'react';

interface ServiceItem {
  id: string;
  name: string;
  thumbnail: string;
  mainImage: string;
  detailImage: string;
}

const Services: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('01');

  const services: ServiceItem[] = [
    { 
      id: '01', 
      name: 'Tattoo Artistry', 
      thumbnail: '/tattoo.jpg',
      mainImage: '/tattoo.jpg',
      detailImage: '/tattoo.jpg'
    },
    { 
      id: '02', 
      name: 'Makeup Artistry', 
      thumbnail: '/makeup.jpg',
      mainImage: '/makeup.jpg',
      detailImage: '/makeup.jpg'
    },
    { 
      id: '03', 
      name: 'Nail Care', 
      thumbnail: '/nails.jpg',
      mainImage: '/nails.jpg',
      detailImage: '/nails.jpg'
    },
    { 
      id: '04', 
      name: 'Lash & Brow', 
      thumbnail: '/lashes.jpg',
      mainImage: '/lashes.jpg',
      detailImage: '/lashes.jpg'
    },
  ];

  const activeService = services.find(service => service.id === activeId);

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-screen-2xl mx-auto">
        {/* Top Header Row */}
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight">
            Services We Provide
          </h2>
          <button className="hidden md:flex items-center gap-3 border border-gray-800 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 group">
            More Services
            <div className="w-5 h-5 rounded-full border border-gray-800 flex items-center justify-center group-hover:border-white">
              <div className="w-4 h-4 relative">
                <div className="absolute top-0 right-0 w-2 h-0.5 bg-gray-800 rounded-full transform rotate-45 group-hover:bg-white"></div>
                <div className="absolute bottom-0 left-0 w-2 h-0.5 bg-gray-800 rounded-full transform -rotate-45 group-hover:bg-white"></div>
              </div>
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT SIDE: Service List */}
          <div className="lg:col-span-4">
            <div className="space-y-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveId(service.id)}
                  onClick={() => setActiveId(service.id)}
                  className={`flex items-center justify-between p-6 rounded-2xl border transition-all duration-300 cursor-pointer group ${
                    activeId === service.id 
                      ? 'border-gray-900 bg-gray-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-6">
                    {/* Service Thumbnail */}
                    <div className={`w-16 h-16 rounded-full overflow-hidden border flex-shrink-0 transition-all duration-300 ${
                      activeId === service.id 
                        ? 'border-gray-900' 
                        : 'border-gray-200 group-hover:border-gray-300'
                    }`}>
                      <img 
                        src={service.thumbnail} 
                        alt={service.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className={`text-xl font-medium tracking-tight transition-colors ${
                      activeId === service.id ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'
                    }`}>
                      {service.name}
                    </span>
                  </div>

                  {/* Circular Action Button */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeId === service.id 
                      ? 'bg-gray-900' 
                      : 'border border-gray-300 group-hover:border-gray-900 group-hover:bg-gray-900'
                  }`}>
                    <div className={`w-4 h-4 relative ${
                      activeId === service.id ? 'text-white' : 'text-gray-400 group-hover:text-white'
                    }`}>
                      <div className={`absolute top-0 right-0 w-2 h-0.5 rounded-full transform rotate-45 ${
                        activeId === service.id ? 'bg-white' : 'bg-gray-400 group-hover:bg-white'
                      }`}></div>
                      <div className={`absolute bottom-0 left-0 w-2 h-0.5 rounded-full transform -rotate-45 ${
                        activeId === service.id ? 'bg-white' : 'bg-gray-400 group-hover:bg-white'
                      }`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Dynamic Image Display */}
          <div className="lg:col-span-8 flex flex-col md:flex-row gap-8">
            {/* Main Large Image Container */}
            <div className="relative flex-[1.5] rounded-[2.5rem] overflow-hidden border border-gray-200 group">
              <div className="w-full h-[500px] bg-gray-50">
                <img 
                  src={activeService?.mainImage || '/tattoo.jpg'} 
                  alt={activeService?.name || 'Service Preview'}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              
              {/* "More Details" Frosted Circle Overlay */}
              <div className="absolute top-8 right-8 w-24 h-24 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 flex flex-col items-center justify-center text-gray-900 text-center cursor-pointer hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center mb-2">
                  <div className="w-4 h-4 relative">
                    <div className="absolute top-0 right-0 w-2 h-0.5 bg-gray-900 rounded-full transform rotate-45"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-0.5 bg-gray-900 rounded-full transform -rotate-45"></div>
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium">
                  More<br/>Details
                </span>
              </div>
            </div>

            {/* Secondary Detail Image Container */}
            <div className="flex-1 rounded-[2.5rem] overflow-hidden border border-gray-200">
              <div className="w-full h-[500px] bg-gray-50">
                <img 
                  src={activeService?.detailImage || '/makeup.jpg'} 
                  alt={`${activeService?.name || 'Service'} Detail`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="mt-16 md:hidden text-center">
          <button className="inline-flex items-center gap-3 border border-gray-800 px-8 py-3.5 rounded-full text-base font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 group">
            More Services
            <div className="w-6 h-6 rounded-full border border-gray-800 flex items-center justify-center group-hover:border-white">
              <div className="w-4 h-4 relative">
                <div className="absolute top-0 right-0 w-2 h-0.5 bg-gray-800 rounded-full transform rotate-45 group-hover:bg-white"></div>
                <div className="absolute bottom-0 left-0 w-2 h-0.5 bg-gray-800 rounded-full transform -rotate-45 group-hover:bg-white"></div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;