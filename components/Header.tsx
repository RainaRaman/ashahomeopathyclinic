'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX, FiMapPin, FiChevronDown, FiSearch } from 'react-icons/fi';
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { allTreatments } from '@/lib/treatments';

interface NavLink {
  href?: string;
  label: string;
  submenu?: boolean;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks: NavLink[] = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#doctors', label: 'Doctors' },
    { label: 'Services', submenu: true },
    { href: '#appointment', label: 'Appointment' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white px-4 sm:px-6 lg:px-8 py-3">
        <div className="w-full flex justify-between items-center">
          {/* Location */}
          <div className="flex items-center gap-2 text-sm">
            <FiMapPin className="w-4 h-4 flex-shrink-0" />
            <span className="hidden sm:inline">Manewada - Besa Rd, opp. Siddheshwar School, Ulhas Nagar, Rameshwari, Nagpur, Maharashtra 440024</span>
            <span className="sm:hidden">Nagpur</span>
          </div>
          
          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300" title="Instagram">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300" title="Facebook">
              <FaFacebook className="w-4 h-4" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300" title="YouTube">
              <FaYoutube className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300" title="LinkedIn">
              <FaLinkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="w-full px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center bg-white shadow-md">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo/logo.png"
            alt="Asha Homeopathy Logo"
            width={50}
            height={50}
            className="w-12 h-12 object-contain"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-primary">Asha Homeopathy</h1>
            <p className="text-xs text-secondary">Clinic</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center flex-1 ml-8">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              {link.submenu ? (
                <>
                  <button className="text-gray-700 hover:text-primary transition-colors duration-300 font-semibold flex items-center gap-1">
                    {link.label}
                    <FiChevronDown className="w-4 h-4" />
                  </button>
                  
                  {/* Services Dropdown */}
                  <div className="absolute left-0 mt-0 w-80 max-h-96 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 z-50 overflow-y-auto">
                    {allTreatments.map((treatment) => (
                      <Link
                        key={treatment.id}
                        href={`/treatments/${treatment.slug}`}
                        className="block px-4 py-3 text-gray-700 hover:bg-light hover:text-primary transition-colors duration-200 text-sm font-medium border-b border-gray-100 last:border-b-0"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{treatment.icon}</span>
                          <span>{treatment.name}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={link.href || '#'}
                  className="text-gray-700 hover:text-primary transition-colors duration-300 font-semibold"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Search Box - Desktop */}
        <div className="hidden lg:flex items-center gap-2 mx-4">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-secondary/30 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200 w-48 text-sm"
            />
          </div>
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Link href="#appointment" className="btn-primary">
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-primary"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4 shadow-md max-h-96 overflow-y-auto">
          <div className="flex flex-col gap-4">
            {/* Mobile Search */}
            <div className="relative mb-2">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search treatments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-secondary/30 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200 text-sm"
              />
            </div>

            {navLinks.map((link) => (
              <div key={link.label}>
                {link.submenu ? (
                  <>
                    <button className="text-gray-700 hover:text-primary transition-colors duration-300 font-semibold py-2 flex items-center gap-1 w-full">
                      {link.label}
                      <FiChevronDown className="w-4 h-4" />
                    </button>
                    <div className="flex flex-col gap-2 pl-4 mt-2 border-l-2 border-secondary max-h-64 overflow-y-auto">
                      {allTreatments.map((treatment) => (
                        <Link
                          key={treatment.id}
                          href={`/treatments/${treatment.slug}`}
                          className="text-gray-600 hover:text-primary transition-colors duration-200 text-sm font-medium py-1 flex items-center gap-2"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="text-base">{treatment.icon}</span>
                          <span>{treatment.name}</span>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href || '#'}
                    className="text-gray-700 hover:text-primary transition-colors duration-300 font-semibold py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link href="#appointment" className="btn-primary text-center" onClick={() => setIsOpen(false)}>
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}