'use client';

import { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FiUser, FiPhone, FiCalendar, FiClock, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';

interface AppointmentFormData {
  name: string;
  phone: string;
  doctor: string;
  date: string;
  time: string;
  message: string;
}

const doctors = [
  { id: 'dr-ashish', name: 'Dr. Ashish Manapure' },
  { id: 'dr-vaishali', name: 'Dr. Vaishali Manapure' },
];

const whyChooseUs = [
  {
    icon: '🏥',
    title: 'Expert Practitioners',
    description: '25+ years of clinical experience',
  },
  {
    icon: '🌿',
    title: 'Natural Healing',
    description: 'Zero side effects, 100% natural remedies',
  },
  {
    icon: '👤',
    title: 'Personalized Care',
    description: 'Customized treatment for each patient',
  },
  {
    icon: '🎯',
    title: 'Root Cause Focus',
    description: 'Treating the source, not just symptoms',
  },
  {
    icon: '⏰',
    title: 'Convenient Timings',
    description: '10 AM-3 PM & 6 PM-10 PM, Mon-Sat',
  },
  {
    icon: '💬',
    title: 'Compassionate Support',
    description: 'Caring doctors dedicated to your wellness',
  },
];

// Clinic hours: 10 AM - 3 PM, 6 PM - 10 PM (Mon-Sat), Sunday closed
const CLINIC_HOURS = [
  { start: 10, end: 15 }, // 10 AM - 3 PM
  { start: 18, end: 22 }, // 6 PM - 10 PM
];

function generateTimeSlots(): string[] {
  const slots: string[] = [];
  
  CLINIC_HOURS.forEach((period) => {
    let hour = period.start;
    let minute = 0;
    
    while (hour < period.end || (hour === period.end && minute === 0)) {
      const timeString = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
      slots.push(timeString);
      
      minute += 15;
      if (minute === 60) {
        minute = 0;
        hour += 1;
      }
    }
  });
  
  return slots;
}

function getMinDate(): string {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split('T')[0];
}

function getMaxDate(): string {
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  return maxDate.toISOString().split('T')[0];
}

function getAvailableTimeSlots(selectedDate: string): string[] {
  if (!selectedDate) return [];
  
  const date = new Date(selectedDate);
  const dayOfWeek = date.getDay();
  
  // 0 = Sunday, 1-6 = Monday to Saturday
  if (dayOfWeek === 0) {
    return []; // Sunday closed
  }
  
  return generateTimeSlots();
}

export default function Appointment() {
  const [submitted, setSubmitted] = useState(false);
  // const [selectedDate, setSelectedDate] = useState('');
  const { register, handleSubmit, reset, formState: { errors }, watch } = useForm<AppointmentFormData>({
    mode: 'onChange',
  });
  
  const date = watch('date');
  const time = watch('time');
  const availableTimeSlots = useMemo(() => getAvailableTimeSlots(date), [date]);
  const isSunday = date && new Date(date).getDay() === 0;

  const onSubmit = async (data: AppointmentFormData) => {
    try {
      console.log('Appointment Data:', data);
      
      // You can integrate with backend API here
      // const response = await fetch('/api/appointments', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });

      setSubmitted(true);
      reset();
      //setSelectedDate('');
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting appointment:', error);
    }
  };

  return (
    <section id="appointment" className="py-20 px-4 sm:px-6 lg:px-8 bg-light">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Book Your Appointment</h2>
        <p className="section-subtitle">
          Schedule a consultation with our expert doctors at your convenience
        </p>

        {/* Main Container with Why Choose Us and Form */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Why Choose Us Section - Improved Visibility */}
          <div className="bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl shadow-lg p-8 flex flex-col justify-between overflow-hidden relative">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -mr-10 -mt-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full -ml-5 -mb-5"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Why Choose Us?</h3>
              <p className="text-white text-base mb-8 leading-relaxed font-medium">
                Experience professional homeopathic care with natural healing methods and personalized treatment plans.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex gap-3 items-start bg-white/10 rounded-xl p-3.5 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                    <div className="flex-shrink-0 text-2xl mt-0.5">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-white text-sm leading-tight">{item.title}</h4>
                      <p className="text-white/90 text-xs leading-snug mt-0.5">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action at Bottom */}
            <div className="mt-8 pt-6 border-t border-white/30 relative z-10">
              <p className="text-white/90 text-xs font-semibold tracking-wide mb-2 uppercase">📞 Need Help? Call Us</p>
              <p className="text-xl md:text-2xl font-bold text-white">+91 9999999999</p>
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col">
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border-2 border-green-300 rounded-xl text-green-800 flex items-start gap-3">
                <FiCheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Appointment Request Submitted!</p>
                  <p className="text-sm mt-1">We will contact you shortly to confirm.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex-grow">
              {/* Name */}
              <div>
                <label className="block text-gray-800 font-bold mb-2 text-sm flex items-center gap-1">
                  <FiUser className="w-4 h-4 text-secondary" />
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  {...register('name', { 
                    required: 'Full name is required',
                    minLength: { value: 3, message: 'Name must be at least 3 characters' }
                  })}
                  className={`w-full px-4 py-3 text-sm border-2 rounded-lg focus:outline-none transition-all duration-200 ${
                    errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20'
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-600 text-xs font-semibold mt-1.5 flex items-center gap-1">⚠️ {errors.name.message}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-800 font-bold mb-2 text-sm flex items-center gap-1">
                  <FiPhone className="w-4 h-4 text-secondary" />
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  {...register('phone', { 
                    required: 'Phone number is required',
                    pattern: { value: /^[0-9]{10}$/, message: 'Please enter a valid 10-digit phone number' }
                  })}
                  className={`w-full px-4 py-3 text-sm border-2 rounded-lg focus:outline-none transition-all duration-200 ${
                    errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20'
                  }`}
                  placeholder="9876543210"
                />
                {errors.phone && <p className="text-red-600 text-xs font-semibold mt-1.5 flex items-center gap-1">⚠️ {errors.phone.message}</p>}
              </div>

              {/* Doctor Selection */}
              <div>
                <label className="block text-gray-800 font-bold mb-2 text-sm flex items-center gap-1">
                  👨‍⚕️ Select Doctor <span className="text-red-500">*</span>
                </label>
                <select
                  {...register('doctor', { required: 'Please select a doctor' })}
                  className={`w-full px-4 py-3 text-sm border-2 rounded-lg focus:outline-none transition-all duration-200 ${
                    errors.doctor ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20'
                  }`}
                >
                  <option value="">-- Choose a doctor --</option>
                  {doctors.map((doc) => (
                    <option key={doc.id} value={doc.name}>
                      {doc.name}
                    </option>
                  ))}
                </select>
                {errors.doctor && <p className="text-red-600 text-xs font-semibold mt-1.5 flex items-center gap-1">⚠️ {errors.doctor.message}</p>}
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-gray-800 font-bold mb-2 text-sm flex items-center gap-1">
                  <FiCalendar className="w-4 h-4 text-secondary" />
                  Select Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  {...register('date', { required: 'Please select a date' })}
                  min={getMinDate()}
                  max={getMaxDate()}
                  className={`w-full px-4 py-3 text-sm border-2 rounded-lg focus:outline-none transition-all duration-200 ${
                    isSunday ? 'border-orange-500 bg-orange-50' : errors.date ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20'
                  }`}
                />
                {errors.date && <p className="text-red-600 text-xs font-semibold mt-1.5 flex items-center gap-1">⚠️ {errors.date.message}</p>}
                {isSunday && <p className="text-orange-600 text-xs font-semibold mt-1.5 flex items-center gap-1">⏰ We're closed on Sundays. Please select another date.</p>}
                {!errors.date && !isSunday && date && <p className="text-green-600 text-xs font-semibold mt-1.5 flex items-center gap-1">✓ Date selected</p>}
              </div>

              {/* Time Selection */}
              <div>
                <label className="block text-gray-800 font-bold mb-2 text-sm flex items-center gap-1">
                  <FiClock className="w-4 h-4 text-secondary" />
                  Select Time <span className="text-red-500">*</span>
                </label>
                {!date ? (
                  <div className="w-full px-4 py-3 text-sm border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed flex items-center gap-2">
                    <FiClock className="w-4 h-4" />
                    Please select a date first
                  </div>
                ) : isSunday ? (
                  <div className="w-full px-4 py-3 text-sm border-2 border-orange-500 rounded-lg bg-orange-50 text-orange-600 font-semibold flex items-center gap-2">
                    ⏰ Clinic closed on Sundays
                  </div>
                ) : (
                  <select
                    {...register('time', { required: 'Please select a time' })}
                    className={`w-full px-4 py-3 text-sm border-2 rounded-lg focus:outline-none transition-all duration-200 ${
                      errors.time ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20'
                    }`}
                  >
                    <option value="">-- Choose a time slot --</option>
                    {availableTimeSlots.map((timeSlot) => {
                      const [hours, minutes] = timeSlot.split(':');
                      const hour = parseInt(hours);
                      const meridiem = hour >= 12 ? 'PM' : 'AM';
                      const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
                      return (
                        <option key={timeSlot} value={timeSlot}>
                          {displayHour}:{minutes} {meridiem}
                        </option>
                      );
                    })}
                  </select>
                )}
                {errors.time && <p className="text-red-600 text-xs font-semibold mt-1.5 flex items-center gap-1">⚠️ {errors.time.message}</p>}
                {!errors.time && time && date && !isSunday && <p className="text-green-600 text-xs font-semibold mt-1.5 flex items-center gap-1">✓ Time slot selected</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-800 font-bold mb-2 text-sm flex items-center gap-1">
                  <FiMessageSquare className="w-4 h-4 text-secondary" />
                  Message <span className="text-gray-400 text-xs">(Optional)</span>
                </label>
                <textarea
                  {...register('message')}
                  rows={3}
                  className="w-full px-4 py-3 text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200"
                  placeholder="Tell us about your health concern..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full btn-primary py-3 text-base font-bold mt-4 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FiCheckCircle className="w-5 h-5" />
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}