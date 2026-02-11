'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiCheck, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const aboutImages = [
  '/images/clinic/aboutclinic_1.png',
  '/images/clinic/aboutclinic_2.png',
  '/images/clinic/aboutclinic_3.png',
  '/images/clinic/aboutclinic_4.png',
  '/images/clinic/aboutclinic_5.png',
];

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? aboutImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === aboutImages.length - 1 ? 0 : prev + 1));
  };

  const highlights = [
    '25+ Years of Clinical Excellence',
    'Root Cause Treatment Approach',
    'Individualized Care Plans',
    'Zero Side Effects - 100% Natural',
    'Experienced & Certified Practitioners',
    'Holistic Wellness Focus',
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Carousel */}
          <div className="relative h-96 hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-accent to-secondary rounded-3xl shadow-2xl overflow-hidden">
              <Image
                src={aboutImages[currentImageIndex]}
                alt={`Clinic Interior ${currentImageIndex + 1}`}
                fill
                className="object-cover transition-opacity duration-500"
              />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-12 p-3 rounded-full bg-secondary text-white hover:bg-primary shadow-lg transition-all duration-300 hover:scale-110 z-20"
              aria-label="Previous image"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-12 p-3 rounded-full bg-secondary text-white hover:bg-primary shadow-lg transition-all duration-300 hover:scale-110 z-20"
              aria-label="Next image"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold z-20">
              {currentImageIndex + 1} / {aboutImages.length}
            </div>

            {/* Dot Indicators */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {aboutImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About Our Clinic
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Asha Homeopathy, we integrate ancient wisdom with modern science to provide comprehensive natural healing. Our evidence-based approach treats the whole person, not just symptoms.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of certified homeopathy specialists brings over 25 years of combined clinical experience. We've successfully helped thousands of patients achieve lasting wellness through personalized, non-invasive treatments.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <FiCheck className="w-6 h-6 text-secondary" />
                  </div>
                  <p className="text-gray-700 font-semibold">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}