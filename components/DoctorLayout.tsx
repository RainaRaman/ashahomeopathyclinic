'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiPhone, FiCalendar, FiMapPin } from 'react-icons/fi';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

interface DoctorLayoutProps {
  doctor: any;
  children: React.ReactNode;
}

export default function DoctorLayout({ doctor, children }: DoctorLayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-40">
        {/* Back Button */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/#doctors" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300 font-semibold mb-8">
            <FiArrowLeft className="w-5 h-5" />
            Back to Doctors
          </Link>
        </div>

        {/* Hero Section with Doctor Info */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 items-start">
              {/* Doctor Image */}
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Doctor Info */}
              <div className="md:col-span-2">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">{doctor.name}</h1>
                <p className="text-2xl text-secondary font-semibold mb-4">{doctor.title}</p>
                <p className="text-lg text-gray-600 mb-6">{doctor.specialization}</p>
                <p className="text-gray-700 text-base leading-relaxed mb-8">{doctor.bio}</p>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-8">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-primary text-white flex items-center justify-center font-bold text-2xl shadow-lg">
                      {doctor.yearsOfExperience}+
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Years of</p>
                      <p className="font-bold text-primary text-xl">Experience</p>
                    </div>
                  </div>
                  <div className="border-l-2 border-gray-300"></div>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold text-2xl shadow-lg">
                      ✓
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Holistic &</p>
                      <p className="font-bold text-primary text-xl">Integrated Care</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="md:col-span-2">
                <div className="prose prose-lg max-w-none">
                  {children}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Book Appointment */}
                <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">Book an Appointment</h3>
                  
                  <div className="space-y-4 mb-6">
                    <a href="tel:+919999999999" className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-300">
                      <FiPhone className="w-5 h-5 flex-shrink-0" />
                      <span>+91 9999999999</span>
                    </a>
                    <button className="w-full flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-100 font-bold py-3 rounded-lg transition-colors duration-300">
                      <FiCalendar className="w-5 h-5" />
                      Schedule Now
                    </button>
                  </div>

                  <p className="text-sm text-gray-100 text-center">
                    Get expert homeopathic care from {doctor.name}
                  </p>
                </div>

                {/* Clinic Location */}
                <div className="bg-light rounded-2xl p-6 border border-secondary/20">
                  <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                    <FiMapPin className="w-5 h-5" />
                    Visit Our Clinic
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Asha Homeopathic Clinic<br />
                    Manewada - Besa Rd, opp. Siddheshwar School<br />
                    Ulhas Nagar, Rameshwari<br />
                    Nagpur, Maharashtra 440024
                  </p>
                  <p className="text-gray-600 text-xs">
                    <strong>Hours:</strong> 10 AM - 3 PM & 6 PM - 10 PM (Mon-Sat)<br />
                    <strong>Sunday:</strong> Closed
                  </p>
                </div>

                {/* Approach */}
                <div className="bg-light rounded-2xl p-6 border border-secondary/20">
                  <h4 className="font-bold text-primary mb-3">Treatment Approach</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {doctor.approach}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}