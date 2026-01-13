import React from 'react';

const About: React.FC = () => {
  const features = [
    {
      title: 'Expert Team',
      description: 'Certified professionals with 10+ years experience'
    },
    {
      title: 'Flexible Hours & Home Service',
      description: 'Available evenings and weekends to fit your schedule'
    },
    {
      title: 'Premium Products',
      description: 'Only using high-quality, cruelty-free brands'
    },
    {
      title: 'Personalized Care',
      description: 'Custom treatments tailored to your unique needs'
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-8">
            <span className="text-[#8B7355] font-medium text-sm uppercase tracking-[0.2em]">
              About Elora Beauty
            </span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#8B7355] to-[#FFD6E7] mx-auto mt-3"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
            Experience the
            <span className="block mt-4 font-normal">Elora Difference</span>
          </h2>
          
          <p className="text-gray-600 text-xl leading-relaxed font-light max-w-2xl mx-auto">
            Premium beauty services delivered directly to your home.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          
          {/* Left Column - Main Description */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                At Elora Beauty Studio, we bring luxury beauty treatments directly to your doorstep. 
                Founded with a passion for enhancing natural beauty, we provide professional services 
                in the comfort of your own space.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                Our mobile team of certified professionals combines cutting-edge techniques with 
                traditional methods to deliver exceptional results. We're committed to using only 
                the finest, cruelty-free products for your beauty journey.
              </p>
            </div>
            
            {/* CTA */}
            <div className="pt-4">
              <button className="inline-flex items-center gap-3 border border-gray-800 px-8 py-4 rounded-full text-base font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 group">
                Learn More About Our Services
                <div className="w-6 h-6 rounded-full border border-gray-800 flex items-center justify-center group-hover:border-white transition-colors">
                  <div className="w-4 h-4 relative">
                    <div className="absolute top-0 right-0 w-2 h-0.5 bg-gray-800 rounded-full transform rotate-45 group-hover:bg-white"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-0.5 bg-gray-800 rounded-full transform -rotate-45 group-hover:bg-white"></div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-5 p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300">
                  {/* Number Indicator */}
                  <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0 group-hover:border-gray-900 transition-colors">
                    <span className="text-gray-700 group-hover:text-gray-900 font-medium">
                      0{index + 1}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-lg mb-3 tracking-tight">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-base leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-20 pt-20 border-t border-gray-200">
          <div className="text-center">
            <p className="text-gray-600 text-lg font-light">
              Serving homes across the city with premium beauty services since 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;