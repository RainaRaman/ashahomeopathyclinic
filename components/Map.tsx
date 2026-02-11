'use client';

import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

export default function Map() {

  // Clinic location coordinates (example: New Road coordinates)
  // For your specific address, get coordinates from Google Maps
  const clinicLocation = {
    lat: 28.7041,
    lng: 77.1025,
    address: 'Manewada - Besa Rd, opp. Siddheshwar School, Ulhas Nagar, Rameshwari, Nagpur, Maharashtra 440024',
    name: 'Asha homeopathy clinic',
  };

  // Note: To use Google Maps, you need to:
  // 1. Get an API key from Google Cloud Console
  // 2. Add it to .env.local as NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  // 3. Enable Maps JavaScript API in Google Cloud Console

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Find Us</h2>
        <p className="section-subtitle">Visit our clinic or get in touch with us</p>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Map Container */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-96 md:h-auto">
            <iframe
              title="Clinic Location"
              width="100%"
              height="100%"
              frameBorder="0"
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(clinicLocation.address)}`}
              style={{ border: 0, minHeight: '500px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center space-y-4">
            {/* Address */}
            <div className="bg-light rounded-2xl p-4 border border-secondary/10">
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 text-white">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-primary text-sm mb-1">Location</h4>
                  <p className="text-gray-700 text-xs leading-snug">{clinicLocation.address}</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-light rounded-2xl p-4 border border-secondary/10">
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 text-white">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm mb-1">Phone</h4>
                  <a
                    href="tel:9999999999"
                    className="text-gray-700 hover:text-secondary transition-colors duration-300 font-semibold text-sm"
                  >
                    +91 9999999999
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-light rounded-2xl p-4 border border-secondary/10">
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 text-white">
                  <FiMail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-primary text-sm mb-1">Email</h4>
                  <a
                    href="mailto:test@gmail.com"
                    className="text-gray-700 hover:text-secondary transition-colors duration-300 font-semibold text-xs break-all"
                  >
                    test@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-light rounded-2xl p-4 border border-secondary/10">
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 text-white">
                  <FiClock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm mb-1">Hours</h4>
                  <div className="text-gray-700 space-y-0.5 text-xs">
                    <p><span className="font-semibold">Mon-Sat:</span> 10 AM - 3 PM</p>
                    <p className="ml-12 text-xs">6 PM - 10 PM</p>
                    <p><span className="font-semibold">Sun:</span> Closed</p>
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
