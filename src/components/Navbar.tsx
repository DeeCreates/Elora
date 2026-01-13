import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  // WhatsApp configuration 
  const whatsappPhoneNumber = "+233248264700";
  const whatsappMessage = encodeURIComponent(
    "Hi! I'd like to book an appointment or learn more about your services."
  );
  const whatsappUrl = `https://wa.me/${whatsappPhoneNumber}?text=${whatsappMessage}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-6 flex items-center justify-between">
      {/* Left Section: Menu Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex flex-col justify-center items-center gap-1.5 hover:bg-white/20 transition-all duration-300"
      >
        <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
        <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
        <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
      </button>

      {/* Center Section: Desktop Navigation - Removed logo */}
      <div className="hidden lg:flex items-center gap-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-1.5">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
              item.label === 'Home' 
                ? 'bg-white text-black font-medium' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Right Section: Action Buttons */}
      <div className="flex items-center gap-3">
        {/* Book Appointment Button */}
        <a 
          href="#contact"
          className="hidden md:flex items-center gap-2 border border-white/20 px-6 py-2.5 rounded-full text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300"
        >
          Book Appointment
        </a>
        
        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300 group relative"
          title="Chat on WhatsApp"
        >
          {/* WhatsApp Icon */}
          <svg 
            className="w-6 h-6" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.032 0a12 12 0 00-10.165 18.371l-1.359 4.977a1.2 1.2 0 001.476 1.476l4.977-1.359A12 12 0 1012.032 0zm6.438 16.817a3.553 3.553 0 01-2.538 1.642c-.684.135-1.57.243-4.552-.921-3.59-1.395-5.882-5.031-6.06-5.265-.179-.234-1.434-1.894-1.434-3.612s.893-2.538 1.215-2.889a1.36 1.36 0 011.02-.456h.299c.313 0 .626.151.804.387.179.234.626.742.803 1.021.179.279.313.595.045.921-.268.327-.446.476-.803.803-.179.18-.366.366-.149.713.216.348 1.001 1.467 2.142 2.367 1.474 1.16 2.678 1.467 3.035 1.623.179.076.402.054.536-.089.134-.144.626-.713.804-.921.179-.208.358-.18.625-.089l2.32 1.107c.268.126.536.189.715.189.179 0 .402-.045.625-.234a5.865 5.865 0 001.35-1.87c.045-.135.045-.252 0-.327 0-.072-.045-.072-.089-.126-.045-.054-.179-.126-.268-.189l-2.052-.921c-.179-.09-.179-.09-.268-.09-.045 0-.045 0-.089.045l-.804 1.107c-.045.045-.179.045-.313-.045z" />
          </svg>
          
          {/* Optional: Pulse animation effect */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping group-hover:opacity-30"></span>
        </a>
      </div>

      {/* Mobile Menu Dropdown - Not full screen */}
      {isOpen && (
        <div className="absolute top-24 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 z-40">
          {/* Close Button */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
          >
            <div className="w-3 h-3 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-0.5 bg-white rotate-45"></div>
                <div className="absolute w-full h-0.5 bg-white -rotate-45"></div>
              </div>
            </div>
          </button>

          {/* Navigation Links */}
          <div className="flex flex-col items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white text-xl font-light tracking-widest hover:text-white/80 transition-all duration-300 py-3 w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
            {/* WhatsApp Button for Mobile */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full py-4 bg-[#25D366] text-white rounded-full font-medium text-center hover:bg-[#1da851] transition-all duration-300 flex items-center justify-center gap-3"
              onClick={() => setIsOpen(false)}
            >
              <svg 
                className="w-5 h-5" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.032 0a12 12 0 00-10.165 18.371l-1.359 4.977a1.2 1.2 0 001.476 1.476l4.977-1.359A12 12 0 1012.032 0zm6.438 16.817a3.553 3.553 0 01-2.538 1.642c-.684.135-1.57.243-4.552-.921-3.59-1.395-5.882-5.031-6.06-5.265-.179-.234-1.434-1.894-1.434-3.612s.893-2.538 1.215-2.889a1.36 1.36 0 011.02-.456h.299c.313 0 .626.151.804.387.179.234.626.742.803 1.021.179.279.313.595.045.921-.268.327-.446.476-.803.803-.179.18-.366.366-.149.713.216.348 1.001 1.467 2.142 2.367 1.474 1.16 2.678 1.467 3.035 1.623.179.076.402.054.536-.089.134-.144.626-.713.804-.921.179-.208.358-.18.625-.089l2.32 1.107c.268.126.536.189.715.189.179 0 .402-.045.625-.234a5.865 5.865 0 001.35-1.87c.045-.135.045-.252 0-.327 0-.072-.045-.072-.089-.126-.045-.054-.179-.126-.268-.189l-2.052-.921c-.179-.09-.179-.09-.268-.09-.045 0-.045 0-.089.045l-.804 1.107c-.045.045-.179.045-.313-.045z" />
              </svg>
              Chat on WhatsApp
            </a>
            
            {/* Mobile CTA Button */}
            <a 
              href="#contact"
              className="w-full py-4 bg-white text-black rounded-full font-medium text-center hover:bg-white/90 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;