'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiHeart } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-light via-white to-accent/5">
      {/* Modern background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/8 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/8 rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          {/* Left Content */}
          <div className="space-y-8 fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-secondary/15 rounded-full text-sm text-secondary font-semibold mb-2 border border-secondary/20">
              <span className="flex items-center gap-2">
                <FiHeart className="text-base" />
                Trusted Healthcare Since 1999
              </span>
            </div>
            
            <div>
              <h1 className="text-6xl md:text-7xl font-bold font-serif text-primary mb-4 leading-tight">
                Your Path to <br />
                <span className="text-secondary relative inline-block">
                  Natural Healing
                  <div className="absolute -bottom-3 left-0 w-full h-2 bg-secondary/20 rounded-full"></div>
                </span>
              </h1>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed max-w-lg font-light">
              Welcome to Asha Homeopathy clinic, where ancient wisdom meets modern healthcare. Our experienced homeopathy doctors are dedicated to providing you with personalized, natural treatments that address the root cause of your ailments.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#appointment" className="btn-primary flex items-center justify-center gap-2 text-base font-semibold px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300">
                Book Appointment <FiArrowRight className="text-lg" />
              </Link>
              <Link href="#services" className="btn-outline flex items-center justify-center gap-2 text-base font-semibold px-8 py-4 rounded-lg border-2 border-secondary text-secondary hover:bg-secondary/5 transition-all duration-300">
                Explore Services
              </Link>
            </div>
            
            {/* Stats Section - Modern Grid */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-secondary/10">
              <div className="space-y-3">
                <p className="text-4xl font-bold text-secondary">1 Lakh+</p>
                <p className="text-gray-600 font-medium">Happy Patients</p>
              </div>
              <div className="space-y-3">
                <p className="text-4xl font-bold text-secondary">25+</p>
                <p className="text-gray-600 font-medium">Years Experience</p>
              </div>
              <div className="space-y-3">
                <p className="text-4xl font-bold text-secondary">2</p>
                <p className="text-gray-600 font-medium">Expert Doctors</p>
              </div>
            </div>
          </div>

          {/* Right Side - Professional Doctor Display */}
          <div className="relative hidden lg:block">
            {/* Unified professional doctor display - both doctors side by side equally */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl md:shadow-xl">
              <div className="aspect-[3/2.5] relative bg-white flex">
                {/* Dr. Ashish - Left Side - 45% width */}
                <div className="w-[45%] relative overflow-hidden">
                  <Image
                    src="/images/doctors/ashish.png"
                    alt="Dr. Ashish Manapure"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={95}
                  />
                </div>
                
                {/* Divider - subtle separator */}
                <div className="w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
                
                {/* Dr. Vaishali - Right Side - 55% width */}
                <div className="flex-1 relative overflow-hidden">
                  <Image
                    src="/images/doctors/vaishali.png"
                    alt="Dr. Vaishali Manapure"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={95}
                  />
                </div>
              </div>
              
              {/* Smooth overlay gradient at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              
              {/* Professional info overlay - smooth integration */}
              <div className="absolute bottom-0 left-0 right-0 px-8 py-6">
                <h3 className="text-3xl font-bold text-white mb-1">Expert Team</h3>
                <p className="text-base font-semibold text-white/95">Dr. Ashish Manapure & Dr. Vaishali Manapure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
