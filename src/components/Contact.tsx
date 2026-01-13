import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  service: z.string().min(1, 'Please select a service'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  address: z.string().min(1, 'Please provide your address'),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const whatsappNumber = '+233248264700';
    
    // Format the message for WhatsApp
    const message = `📋 *New Appointment Request*\n\n` +
      `👤 *Name:* ${data.name}\n` +
      `📞 *Phone:* ${data.phone}\n` +
      `💅 *Service:* ${data.service}\n` +
      `📅 *Date:* ${data.date}\n` +
      `⏰ *Time:* ${data.time}\n` +
      `📍 *Address:* ${data.address}\n` +
      (data.message ? `📝 *Notes:* ${data.message}\n` : '');
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Show success message
    alert('Opening WhatsApp to send your booking request...');
    reset();
  };

  const services = [
    'Tattoo Artistry',
    'Makeup Artistry',
    'Nail Care',
    'Lash & Brow',
    'Skincare',
    'Spa Treatments',
    'Consultation',
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM'
  ];

  const contactInfo = [
    {
      title: 'Call Us',
      info: '+233 24 826 4700',
      subInfo: 'Mon-Sat: 9AM-8PM',
    },
    {
      title: 'Home Service',
      info: 'We Come To You',
      subInfo: 'Serving Greater Accra',
    },
    {
      title: 'Hours',
      info: 'Monday - Saturday',
      subInfo: '9:00 AM - 8:00 PM',
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24 md:mb-32">
          <div className="inline-block mb-10">
            <span className="text-[#8B7355] font-medium text-lg uppercase tracking-[0.2em]">
              Book Appointment
            </span>
            <div className="w-24 h-1 bg-gradient-to-r from-[#8B7355] to-[#FFD6E7] mx-auto mt-4"></div>
          </div>
          
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-10 leading-[1.1] tracking-tight">
            Book Your
            <span className="block mt-6 font-normal">Appointment</span>
          </h2>
          
          <p className="text-gray-600 text-2xl md:text-3xl leading-relaxed font-light max-w-3xl mx-auto">
            Ready to experience the Elora difference? Book your home service appointment today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Contact Information */}
          <div className="space-y-16">
            <div>
              <h3 className="text-4xl md:text-5xl font-light text-gray-900 mb-12">Get in Touch</h3>
              <p className="text-gray-600 text-2xl leading-relaxed font-light mb-16">
                Have questions or want to schedule a home visit? We'll come to your location 
                for a perfect beauty experience.
              </p>
              
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="p-8 rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-300 group">
                    <div className="flex items-center gap-8">
                      {/* Apple-style indicator */}
                      <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center flex-shrink-0 group-hover:border-gray-900 transition-colors">
                        <div className="w-3 h-3 bg-gray-400 rounded-full group-hover:bg-gray-900"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-2xl mb-3">{item.title}</h4>
                        <p className="text-gray-700 text-xl font-light">{item.info}</p>
                        <p className="text-base text-gray-500 font-light mt-2">{item.subInfo}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Direct Booking */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 border border-gray-200">
              <div className="text-center">
                <h4 className="text-3xl font-light text-gray-900 mb-8">Direct WhatsApp Booking</h4>
                <p className="text-gray-600 text-xl mb-10 font-light">
                  Prefer to book directly via WhatsApp? Click below to start a conversation.
                </p>
                <a 
                  href="https://wa.me/+233248264700?text=Hello%20Elora%20Beauty%20Studio!%20I%20would%20like%20to%20book%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 border-2 border-gray-900 px-10 py-5 rounded-full text-xl font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 group"
                >
                  <span>Chat on WhatsApp</span>
                  {/* WhatsApp Logo */}
                  <div className="w-8 h-8">
                    <svg viewBox="0 0 32 32" className="w-full h-full fill-current">
                      <path d="M16 2C8.28 2 2 8.28 2 16c0 3.2 1.04 6.16 2.8 8.56L2 30l5.44-2.8C9.84 28.96 12.8 30 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm7.64 19.8c-.32.92-1.6 1.68-2.6 1.88-.72.12-1.64.2-4.84-.76-4.08-1.24-6.68-4.44-6.88-4.64-.2-.2-1.6-1.52-1.6-2.92s.96-2.08 1.32-2.44c.36-.36.76-.44 1.04-.44h.48c.32 0 .64.04.92.36.28.32.96 1.08 1.04 1.16.08.08.16.2.16.36s-.04.24-.16.36l-.64.76c-.12.12-.24.28-.12.52.12.24.56 1.08 1.2 1.76.88.88 1.6 1.16 1.84 1.28.24.12.4.08.56-.04l.8-.56c.2-.12.44-.16.68-.08.24.08 1.52.76 1.8.88.28.12.48.2.56.32.08.12.08.68-.24 1.6z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="rounded-3xl border-2 border-gray-200 p-10">
            <h3 className="text-4xl font-light text-gray-900 mb-12">Book Home Service</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
              <div>
                <label className="block text-xl font-medium text-gray-700 mb-4">
                  Full Name *
                </label>
                <input
                  type="text"
                  {...register('name')}
                  className="w-full px-6 py-5 text-lg border-2 border-gray-300 rounded-xl focus:border-gray-900 outline-none transition-all font-light"
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="mt-3 text-base text-red-600 font-light">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xl font-medium text-gray-700 mb-4">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  {...register('phone')}
                  className="w-full px-6 py-5 text-lg border-2 border-gray-300 rounded-xl focus:border-gray-900 outline-none transition-all font-light"
                  placeholder="+233 XX XXX XXXX"
                />
                {errors.phone && (
                  <p className="mt-3 text-base text-red-600 font-light">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xl font-medium text-gray-700 mb-4">
                  Service Interested *
                </label>
                <select
                  {...register('service')}
                  className="w-full px-6 py-5 text-lg border-2 border-gray-300 rounded-xl focus:border-gray-900 outline-none transition-all font-light"
                >
                  <option value="" className="text-gray-400 text-lg">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service} className="text-gray-900 text-lg">
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-3 text-base text-red-600 font-light">{errors.service.message}</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xl font-medium text-gray-700 mb-4">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    {...register('date')}
                    className="w-full px-6 py-5 text-lg border-2 border-gray-300 rounded-xl focus:border-gray-900 outline-none transition-all font-light"
                  />
                  {errors.date && (
                    <p className="mt-3 text-base text-red-600 font-light">{errors.date.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xl font-medium text-gray-700 mb-4">
                    Preferred Time *
                  </label>
                  <select
                    {...register('time')}
                    className="w-full px-6 py-5 text-lg border-2 border-gray-300 rounded-xl focus:border-gray-900 outline-none transition-all font-light"
                  >
                    <option value="" className="text-gray-400 text-lg">Select time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time} className="text-gray-900 text-lg">
                        {time}
                      </option>
                    ))}
                  </select>
                  {errors.time && (
                    <p className="mt-3 text-base text-red-600 font-light">{errors.time.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xl font-medium text-gray-700 mb-4">
                  Home Address *
                </label>
                <textarea
                  {...register('address')}
                  rows={3}
                  className="w-full px-6 py-5 text-lg border-2 border-gray-300 rounded-xl focus:border-gray-900 outline-none transition-all font-light"
                  placeholder="Enter your address for home service"
                />
                {errors.address && (
                  <p className="mt-3 text-base text-red-600 font-light">{errors.address.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xl font-medium text-gray-700 mb-4">
                  Additional Notes
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full px-6 py-5 text-lg border-2 border-gray-300 rounded-xl focus:border-gray-900 outline-none transition-all font-light"
                  placeholder="Any special requests or beauty goals..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-6 bg-gray-900 text-white rounded-full text-2xl font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-4 group"
              >
                {isSubmitting ? (
                  'Processing...'
                ) : (
                  <>
                    <span>Book via WhatsApp</span>
                    {/* WhatsApp Logo */}
                    <div className="w-8 h-8">
                      <svg viewBox="0 0 32 32" className="w-full h-full fill-current">
                        <path d="M16 2C8.28 2 2 8.28 2 16c0 3.2 1.04 6.16 2.8 8.56L2 30l5.44-2.8C9.84 28.96 12.8 30 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm7.64 19.8c-.32.92-1.6 1.68-2.6 1.88-.72.12-1.64.2-4.84-.76-4.08-1.24-6.68-4.44-6.88-4.64-.2-.2-1.6-1.52-1.6-2.92s.96-2.08 1.32-2.44c.36-.36.76-.44 1.04-.44h.48c.32 0 .64.04.92.36.28.32.96 1.08 1.04 1.16.08.08.16.2.16.36s-.04.24-.16.36l-.64.76c-.12.12-.24.28-.12.52.12.24.56 1.08 1.2 1.76.88.88 1.6 1.16 1.84 1.28.24.12.4.08.56-.04l.8-.56c.2-.12.44-.16.68-.08.24.08 1.52.76 1.8.88.28.12.48.2.56.32.08.12.08.68-.24 1.6z"/>
                      </svg>
                    </div>
                  </>
                )}
              </button>

              <p className="text-center text-base text-gray-500 font-light">
                After submitting, you'll be redirected to WhatsApp to confirm your booking.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;