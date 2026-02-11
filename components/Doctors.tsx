'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

interface DoctorCard {
  id: number;
  name: string;
  specialization: string;
  experience: string;
  degrees: string;
  bio: string;
  image: string;
  slug: string;
}

const doctors: DoctorCard[] = [
  {
    id: 1,
    name: 'Dr. Ashish Manapure',
    specialization: 'Chief Homeopathy Physician & Mental Health Professional',
    experience: '25+ Years',
    degrees: 'BHMS, M.A. (Psychology), M.S. (Psychotherapy)',
    image: '/images/doctors/ashish.png',
    bio: 'Renowned homeopathy specialist with expertise in treating complex chronic conditions and psychological wellbeing. Known for technical acumen in expert diagnosis, integrating homeopathy with psychology and psychotherapy for comprehensive patient care.',
    slug: 'ashish-manapure',
  },
  {
    id: 2,
    name: 'Dr. Vaishali Manapure',
    specialization: 'Senior Homeopathy Physician & Gynaecology Specialist',
    experience: '25+ Years',
    degrees: 'BHMS, Postgraduate (Homeopathy-London), M.A. (Psychology), CGO',
    image: '/images/doctors/vaishali.png',
    bio: 'Highly experienced homeopathic physician specializing in women\'s health and integrated wellness. Known for compassionate care combining science, sensitivity, and technical expertise in treating gynaecological, cosmetic, and psychological conditions with holistic homeopathic principles.',
    slug: 'vaishali-manapure',
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-20 px-4 sm:px-6 lg:px-8 bg-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Our Expert Doctors</h2>
        <p className="section-subtitle">
          Meet our team of experienced homeopathy specialists dedicated to your wellness
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl card-hover transition-all duration-300"
            >
              {/* Doctor Image */}
              <div className="relative w-full h-96 bg-gradient-to-br from-primary to-secondary overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Doctor Info */}
              <div className="p-8 flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-primary mb-1">{doctor.name}</h3>
                  <p className="text-xs text-gray-600 bg-gray-100 inline-block px-3 py-1 rounded-full mb-3 font-medium">
                    {doctor.degrees}
                  </p>
                  <p className="text-secondary font-semibold mb-2 text-sm">{doctor.specialization}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-block bg-secondary text-white font-bold text-xs px-3 py-1 rounded-full">
                      {doctor.experience} Experience
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm mb-6 leading-relaxed">{doctor.bio}</p>
                </div>

                {/* More Details Button - PROMINENT */}
                <Link href={`/doctors/${doctor.slug}`} className="w-full">
                  <button className="w-full bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-3 group shadow-md hover:shadow-xl transition-all duration-300 text-base">
                    📋 More Details
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}