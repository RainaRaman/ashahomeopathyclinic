'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight, FiArrowRight, FiSearch, FiX } from 'react-icons/fi';
import { allTreatments, searchTreatments } from '@/lib/treatments';

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerSlide = 4; // Show 4 items at a time on desktop, 2 on tablet, 1 on mobile

  // Filter treatments based on search query
  const filteredTreatments = useMemo(() => {
    if (!searchQuery.trim()) return allTreatments;
    return searchTreatments(searchQuery);
  }, [searchQuery]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, filteredTreatments.length - itemsPerSlide) : prev - 1
    );
  };

  const handleNext = () => {
    const maxIndex = Math.max(0, filteredTreatments.length - itemsPerSlide);
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  // Get visible items
  const visibleItems = [];
  for (let i = 0; i < itemsPerSlide && currentIndex + i < filteredTreatments.length; i++) {
    visibleItems.push(filteredTreatments[currentIndex + i]);
  }

  const handleClearSearch = () => {
    setSearchQuery('');
    setCurrentIndex(0);
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive homeopathic treatments for various health conditions
        </p>

        {/* Search Box */}
        <div className="mb-12 relative">
          <div className="flex gap-2">
            <div className="flex-grow relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search treatments... (e.g., Skin, Hair, Diabetes)"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentIndex(0);
                }}
                className="w-full pl-12 pr-12 py-3 border-2 border-secondary/30 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200"
              />
              {searchQuery && (
                <button
                  onClick={handleClearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Clear search"
                >
                  <FiX className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
          {searchQuery && (
            <p className="text-sm text-gray-600 mt-2">
              Found <span className="font-bold text-secondary">{filteredTreatments.length}</span> treatment(s)
            </p>
          )}
        </div>

        {/* No Results */}
        {filteredTreatments.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-2xl text-gray-600 font-semibold mb-4">No treatments found</p>
            <p className="text-gray-500 mb-8">Try searching with different keywords</p>
            <button
              onClick={handleClearSearch}
              className="btn-primary"
            >
              View All Treatments
            </button>
          </div>
        ) : (
          <>
            {/* Carousel Container */}
            <div className="relative">
              {/* Services Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {visibleItems.map((treatment) => (
                  <Link key={treatment.id} href={`/treatments/${treatment.slug}`}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl card-hover border border-secondary/10 hover:border-secondary/30 h-full cursor-pointer transition-all duration-300 flex flex-col">
                      {/* Image Section */}
                      <div className="w-full h-48 bg-gradient-to-br from-primary to-secondary relative overflow-hidden flex items-center justify-center">
                        {treatment.image ? (
                          <Image
                            src={treatment.image}
                            alt={treatment.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex items-center justify-center text-8xl">{treatment.icon}</div>
                        )}
                      </div>

                      {/* Content Section */}
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-start gap-2 mb-2">
                          <span className="text-3xl flex-shrink-0">{treatment.icon}</span>
                          <h3 className="font-bold text-primary text-lg leading-tight flex-grow">{treatment.name}</h3>
                        </div>
                        <p className="text-gray-600 text-sm mb-4 flex-grow">{treatment.description}</p>
                        <div className="flex items-center gap-2 text-secondary font-semibold text-sm hover:gap-3 transition-all duration-300">
                          Learn More <FiArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Navigation Arrows - Only show if filtered treatments > itemsPerSlide */}
              {filteredTreatments.length > itemsPerSlide && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute -left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-secondary text-white hover:bg-primary shadow-lg transition-all duration-300 hover:scale-110 z-20 hidden lg:block"
                    aria-label="Previous services"
                  >
                    <FiChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    onClick={handleNext}
                    className="absolute -right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-secondary text-white hover:bg-primary shadow-lg transition-all duration-300 hover:scale-110 z-20 hidden lg:block"
                    aria-label="Next services"
                  >
                    <FiChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Pagination Info */}
            {filteredTreatments.length > itemsPerSlide && (
              <div className="flex justify-center gap-2 mt-8 flex-wrap">
                {Array.from({ length: Math.ceil(filteredTreatments.length / itemsPerSlide) }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i * itemsPerSlide)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === Math.floor(currentIndex / itemsPerSlide)
                        ? 'bg-secondary w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to page ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}