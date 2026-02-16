'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-primary to-secondary text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo/logo.png"
                alt="Asha Homeopathy Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain brightness-150"
              />
              <h3 className="text-xl font-bold text-white">Asha Homeopathy clinic</h3>
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              Dedicated to providing world-class homeopathic care with natural remedies and personalized treatment plans.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <div className="space-y-2">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#doctors', label: 'Doctors' },
                { href: '#services', label: 'Services' },
                { href: '#appointment', label: 'Appointment' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm block"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Services</h4>
            <div className="space-y-2">
              {[
                'Acute Disease Treatment',
                'Chronic Disease Management',
                'Women Health',
                'Child Health',
                'Skin & Beauty',
                'Mental Health',
              ].map((service, index) => (
                <p key={index} className="text-white/90 text-sm">{service}</p>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FiMapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <p className="text-white/90 text-sm">New Road, Nagpur - 111111</p>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:9370992333" className="text-white/90 text-sm hover:text-white transition-colors">
                  9370992333
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:test@gmail.com" className="text-white/90 text-sm hover:text-white transition-colors">
                  test@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <p className="text-white/80 text-sm">
              © {currentYear} Asha Homeopathy clinic. All rights reserved.
            </p>

            {/* Social Media */}
            <div className="flex gap-6 mt-6 md:mt-0">
              {[
                { icon: FiFacebook, href: '#', label: 'Facebook' },
                { icon: FiInstagram, href: '#', label: 'Instagram' },
                { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                    title={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Privacy Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-white/70 text-sm pt-6">
          <Link href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <span>•</span>
          <Link href="#" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
          <span>•</span>
          <Link href="#" className="hover:text-white transition-colors">
            Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
}
