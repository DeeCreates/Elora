import React from 'react';

const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    'Tattoo Artistry',
    'Makeup Artistry',
    'Nail Care',
    'Lash & Brow',
    'Skincare',
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo and Description */}
          <div className="space-y-6">
            <div>
              <img 
                src="/elora_logo.png" 
                alt="Elora Beauty Studio" 
                className="h-10 mb-4"
              />
              <p className="text-gray-600 font-light text-lg leading-relaxed">
                Premium beauty services delivered to your home.
              </p>
            </div>
            
            {/* WhatsApp Contact */}
            <div>
              <a 
                href="https://wa.me/+233248264700"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-gray-800 px-6 py-3 rounded-full text-base font-medium hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                <span>Chat on WhatsApp</span>
                <div className="w-5 h-5">
                  <svg viewBox="0 0 32 32" className="w-full h-full fill-current">
                    <path d="M16 2C8.28 2 2 8.28 2 16c0 3.2 1.04 6.16 2.8 8.56L2 30l5.44-2.8C9.84 28.96 12.8 30 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm7.64 19.8c-.32.92-1.6 1.68-2.6 1.88-.72.12-1.64.2-4.84-.76-4.08-1.24-6.68-4.44-6.88-4.64-.2-.2-1.6-1.52-1.6-2.92s.96-2.08 1.32-2.44c.36-.36.76-.44 1.04-.44h.48c.32 0 .64.04.92.36.28.32.96 1.08 1.04 1.16.08.08.16.2.16.36s-.04.24-.16.36l-.64.76c-.12.12-.24.28-.12.52.12.24.56 1.08 1.2 1.76.88.88 1.6 1.16 1.84 1.28.24.12.4.08.56-.04l.8-.56c.2-.12.44-.16.68-.08.24.08 1.52.76 1.8.88.28.12.48.2.56.32.08.12.08.68-.24 1.6z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-6">Menu</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 text-base font-light hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-6">Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-600 text-base font-light hover:text-gray-900 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-6">Contact</h3>
            <div className="space-y-4">
              <div>
                <div className="text-gray-900 font-medium text-lg">+233 24 826 4700</div>
                <div className="text-gray-600 text-sm font-light mt-1">Mon-Sat: 9AM-8PM</div>
              </div>
              
              {/* Newsletter */}
              <div className="pt-4">
                <p className="text-gray-600 text-sm font-light mb-3">Subscribe for updates</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="flex-1 px-4 py-2.5 border border-gray-300 rounded-l-lg focus:outline-none focus:border-gray-900 transition-all font-light text-sm"
                  />
                  <button className="px-4 py-2.5 bg-gray-900 text-white rounded-r-lg font-medium hover:bg-gray-800 transition-all duration-300 text-sm">
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 font-light text-sm">
              © {new Date().getFullYear()} Elora Beauty Studio
            </div>
            
            <div className="flex items-center gap-6 text-gray-600 font-light text-sm">
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
              <a href="#" className="hover:text-gray-900 transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;