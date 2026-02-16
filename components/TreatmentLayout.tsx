'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiPhone, FiCalendar } from 'react-icons/fi';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

interface TreatmentLayoutProps {
  title: string;
  subtitle: string;
  mainImage?: string;
  clinicImage?: string;
  children: React.ReactNode;
}

export default function TreatmentLayout({
  title,
  subtitle,
  mainImage = '/images/clinic/clinic.png',
  clinicImage = '/images/clinic/ashaClinic1.webp',
  children,
}: TreatmentLayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-40">
        {/* Back Button */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/#services" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300 font-semibold mb-8">
            <FiArrowLeft className="w-5 h-5" />
            Back to Services
          </Link>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{title}</h1>
            <p className="text-xl text-gray-600 max-w-3xl">{subtitle}</p>
          </div>
        </section>

        {/* Main Image */}
        {mainImage && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={mainImage}
                  alt={title}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </section>
        )}

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
                {/* Clinic Image */}
                {clinicImage && (
                  <div className="bg-light rounded-2xl overflow-hidden shadow-lg">
                    <div className="relative w-full h-64">
                      <Image
                        src={clinicImage}
                        alt="Asha Homeopathic Clinic"
                        width={400}
                        height={250}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2">Visit Our Clinic</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Asha Homeopathic Clinic, Nagpur
                      </p>
                    </div>
                  </div>
                )}

                {/* CTA Box */}
                <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">Book Your Consultation</h3>
                  
                  <div className="space-y-4 mb-6">
                    <a href="tel:+919370992333" className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-300">
                      <FiPhone className="w-5 h-5 flex-shrink-0" />
                      <span>+91 9370992333</span>
                    </a>
                    <button className="w-full flex items-center justify-center gap-2 bg-white text-primary hover:bg-light font-bold py-3 rounded-lg transition-colors duration-300">
                      <FiCalendar className="w-5 h-5" />
                      Schedule Now
                    </button>
                  </div>

                  <p className="text-sm text-gray-100 text-center">
                    Get expert homeopathic care from our experienced doctors
                  </p>
                </div>

                {/* Quick Facts */}
                <div className="bg-light rounded-2xl p-6 border border-secondary/20">
                  <h4 className="font-bold text-primary mb-4">Why Choose Us?</h4>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">✓</span>
                      <span>25+ years experience</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">✓</span>
                      <span>Holistic approach</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">✓</span>
                      <span>Personalized treatment</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">✓</span>
                      <span>Proven results</span>
                    </li>
                  </ul>
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
