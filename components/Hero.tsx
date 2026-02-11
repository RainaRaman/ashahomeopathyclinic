'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-light via-white to-accent/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Your Path to <span className="text-secondary">Natural Healing</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Welcome to Asha Homeopathy clinic, where ancient wisdom meets modern healthcare. Our experienced homeopathy doctors are dedicated to providing you with personalized, natural treatments that address the root cause of your ailments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#appointment" className="btn-primary flex items-center justify-center gap-2">
                Book Appointment <FiArrowRight />
              </Link>
              <Link href="#services" className="btn-outline flex items-center justify-center gap-2">
                Explore Services
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-secondary/30">
              <div>
                <p className="text-4xl font-bold text-secondary">1 Lakh+</p>
                <p className="text-gray-600 text-sm">Happy Patients</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-secondary">25+</p>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-secondary">2</p>
                <p className="text-gray-600 text-sm">Expert Doctors</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-secondary to-accent rounded-3xl shadow-2xl overflow-hidden">
              <Image
                src="/images/clinic/clinicheader.jpg"
                alt="Asha Homeopathy Clinic Header"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
