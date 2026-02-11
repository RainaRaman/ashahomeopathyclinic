'use client';

import { FiStar } from 'react-icons/fi';

interface Testimonial {
  id: number;
  name: string;
  condition: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    condition: 'Asthma Management',
    text: 'I have been visiting Asha Homeopathy clinic for my asthma condition for the past 2 years. The personalized treatment and care I received has significantly improved my quality of life. Highly recommended!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Singh',
    condition: 'Women Health',
    text: 'Dr. Vaishali manapure is an excellent doctor. She listened to my concerns patiently and provided a comprehensive treatment plan. My hormonal issues have improved remarkably.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amit Patel',
    condition: 'Chronic Pain',
    text: 'After visiting multiple doctors, Asha Homeopathy clinic finally provided me with real relief. The holistic approach to treatment is commendable. Thank you!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Neha Gupta',
    condition: 'Skin Care',
    text: 'My acne and skin issues were troubling me for years. The natural remedies suggested by Dr. Ashish manapure worked wonders. My skin is now clear and healthy.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Vikram Sharma',
    condition: 'General Health',
    text: 'The clinic environment is peaceful and the staff is very friendly. I felt heard and understood. The treatment results speak for themselves!',
    rating: 5,
  },
  {
    id: 6,
    name: 'Anjali Desai',
    condition: 'Child Health',
    text: 'My son\'s weak immunity was making him sick frequently. After homeopathy treatment from this clinic, he is much healthier and active now. Great experience!',
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Patient Testimonials</h2>
        <p className="section-subtitle">
          Hear from our satisfied patients about their healing journey
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-secondary/10"
            >
              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-primary">{testimonial.name}</p>
                <p className="text-secondary text-sm">{testimonial.condition}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
