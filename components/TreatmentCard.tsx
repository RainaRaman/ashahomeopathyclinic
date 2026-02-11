'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

interface TreatmentCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
  image?: string;
}

export default function TreatmentCard({
  title,
  description,
  icon,
  slug,
  image,
}: TreatmentCardProps) {
  return (
    <Link href={`/treatments/${slug}`}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl card-hover border border-secondary/10 hover:border-secondary/30 h-full cursor-pointer transition-all duration-300 flex flex-col">
        {/* Image Section */}
        <div className="w-full h-48 bg-gradient-to-br from-primary to-secondary relative overflow-hidden flex items-center justify-center">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex items-center justify-center text-6xl">{icon}</div>
          )}
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-primary mb-3">{title}</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

          {/* CTA */}
          <div className="flex items-center gap-2 text-secondary font-semibold hover:gap-4 transition-all duration-300">
            <span>Learn More</span>
            <FiArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
