'use client';

import Link from 'next/link';
import { FiMessageCircle } from 'react-icons/fi';

export default function WhatsAppButton() {
  const phoneNumber = process.env.NEXT_PUBLIC_CLINIC_WHATSAPP || '919370992333';
  const message = encodeURIComponent(
    'Hello! I\'m interested in booking an appointment at Asha Homeopathy clinic. Please let me know the availability.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 z-40 flex items-center justify-center group"
      title="Chat on WhatsApp"
    >
      <FiMessageCircle className="w-6 h-6" />
      <span className="absolute right-full mr-3 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Chat with us
      </span>
    </Link>
  );
}
