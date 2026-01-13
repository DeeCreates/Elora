import { motion } from "framer-motion";

export default function Hero() {
  const serviceTags = ["Tattoo Artistry", "Makeup", "Nail Care", "Lash & Brow", "Skincare", "Spa"];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Full Background Image for ALL screens */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        <img 
          src="/black_profile.png" 
          alt="Luxury Beauty Model at Elora Beauty Studio" 
          className="absolute inset-0 w-full h-full object-cover object-center md:object-[center_30%]"
          loading="eager"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-20" />
      </div>

      {/* Content Container - Different layout for mobile vs desktop */}
      <div className="relative h-full min-h-screen w-full flex flex-col z-30">
        
        {/* Mobile Layout: Title on top, content below */}
        <div className="md:hidden flex flex-col h-screen">
          {/* Title Section - At the top on mobile */}
          <div className="flex-1 flex flex-col justify-end px-6 pb-10">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl font-light text-white leading-[1.1] tracking-tight">
                Transform Your <span className="italic">Look</span> with{' '}
                <span className="block mt-4 font-normal">Expert Beauty Services</span>
              </h1>
              <p className="mt-6 text-white/80 text-lg leading-relaxed max-w-md mx-auto font-light">
                Revitalize your skin and spirit at Elora Beauty Studio.
              </p>
            </motion.div>
          </div>

          {/* CTA Buttons - Bottom on mobile */}
          <div className="px-6 pb-10">
            <div className="flex flex-col gap-4">
              <button className="w-full py-4 bg-white text-black rounded-full text-lg font-medium hover:bg-white/90 transition-all duration-300">
                Explore Services
              </button>
              <button className="w-full py-4 bg-transparent text-white rounded-full text-lg font-medium border border-white/30 hover:border-white/50 hover:bg-white/10 transition-all duration-300">
                Book Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-col h-screen">
          {/* Top Section: Heading - Left aligned */}
          <div className="flex-1 flex flex-col justify-center px-8 lg:px-12 pt-24">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left max-w-4xl"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] tracking-tight">
                Transform Your <span className="italic">Look</span> with{' '}
                <span className="block mt-4 font-normal">Expert Beauty Services</span>
              </h1>
              <p className="mt-6 text-white/80 text-xl md:text-2xl leading-relaxed max-w-2xl font-light">
                Revitalize your skin and spirit at Elora Beauty Studio. Step into a world of beauty and wellness.
              </p>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <div className="px-8 lg:px-12 pb-12">
            <div className="grid lg:grid-cols-2 gap-8 items-end">
              
              {/* Left Column: CTA Section */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-8"
              >
                {/* Service Tags */}
                <div className="flex flex-wrap gap-3">
                  {serviceTags.map((tag, i) => (
                    <motion.div 
                      key={tag}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * i }}
                      className="bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full cursor-pointer hover:bg-white/20 transition-all duration-300"
                    >
                      <span className="text-white text-sm uppercase tracking-[0.15em] font-medium whitespace-nowrap">{tag}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-6">
                  <button className="px-10 py-4 bg-white text-black rounded-full text-lg font-medium hover:bg-white/90 transition-all duration-300 hover:scale-105 active:scale-95">
                    Explore Services
                  </button>
                  <button className="px-10 py-4 bg-transparent text-white rounded-full text-lg font-medium border border-white/30 hover:border-white/50 hover:bg-white/10 transition-all duration-300">
                    Book Consultation
                  </button>
                </div>
              </motion.div>

              {/* Right Column: Service Preview Cards */}
              <div className="flex flex-col items-end gap-8">
                
                {/* Service Cards Container */}
                <div className="flex items-end gap-6">
                  
                  {/* Service 1 Card */}
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="relative w-44 h-56 rounded-2xl overflow-hidden border border-white/20 shadow-lg group cursor-pointer"
                  >
                    {/* Image Container with Fallback */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black">
                      <img 
                        src="/tattoo.jpg" 
                        alt="Tattoo Artistry"
                        className="w-full h-full object-cover opacity-80"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    
                    {/* Fallback Gradient if image fails */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    
                    {/* Glass Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 backdrop-blur-sm bg-white/10 border-t border-white/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-medium text-lg">Tattoo</h4>
                          <p className="text-white/70 text-xs mt-1">Custom Designs</p>
                        </div>
                        <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white/20 transition-all">
                          <div className="w-3 h-3 relative">
                            <div className="absolute top-0 right-0 w-1.5 h-0.5 bg-white rounded-full transform rotate-45"></div>
                            <div className="absolute bottom-0 left-0 w-1.5 h-0.5 bg-white rounded-full transform -rotate-45"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Service 2 Card */}
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="relative w-44 h-56 rounded-2xl overflow-hidden border border-white/20 shadow-lg group cursor-pointer"
                  >
                    {/* Image Container with Fallback */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black">
                      <img 
                        src="/makeup.jpg" 
                        alt="Makeup Artistry"
                        className="w-full h-full object-cover opacity-80"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    
                    {/* Fallback Gradient if image fails */}
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-900/30 to-pink-900/30"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    
                    {/* Glass Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 backdrop-blur-sm bg-white/10 border-t border-white/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-medium text-lg">Makeup</h4>
                          <p className="text-white/70 text-xs mt-1">Professional Artistry</p>
                        </div>
                        <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white/20 transition-all">
                          <div className="w-3 h-3 relative">
                            <div className="absolute top-0 right-0 w-1.5 h-0.5 bg-white rounded-full transform rotate-45"></div>
                            <div className="absolute bottom-0 left-0 w-1.5 h-0.5 bg-white rounded-full transform -rotate-45"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Navigation Indicator */}
                  <div className="flex flex-col gap-3">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <div className="flex gap-1.5">
                        {[1, 2].map((dot) => (
                          <div 
                            key={dot}
                            className={`w-1.5 h-1.5 rounded-full ${dot === 1 ? 'bg-white' : 'bg-white/30'}`}
                          ></div>
                        ))}
                      </div>
                    </div>
                    <div className="text-xs text-white/50 text-center">View More</div>
                  </div>
                </div>

                {/* Gallery Button */}
                <div className="flex items-center gap-4">
                  <button className="text-white/70 text-sm uppercase tracking-[0.2em] hover:text-white transition-colors">
                    View Gallery
                  </button>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-white/40 transition-colors cursor-pointer">
                    <div className="w-5 h-5 relative">
                      <div className="absolute top-0 right-0 w-3 h-0.5 bg-white rounded-full transform rotate-45"></div>
                      <div className="absolute bottom-0 left-0 w-3 h-0.5 bg-white rounded-full transform -rotate-45"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}