import DoctorLayout from '@/components/DoctorLayout';
import { getDoctorBySlug } from '@/lib/doctors';

export const metadata = {
  title: 'Dr. Vaishali Manapure | Homeopathy Physician & Gynaecology Specialist',
  description: 'Meet Dr. Vaishali Manapure, Senior Homeopathy Physician with 25+ years of expertise in women\'s health, cosmetic concerns, and holistic care.',
};

export default function VaishaliManaparePage() {
  const doctor = getDoctorBySlug('vaishali');

  if (!doctor) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-2xl text-gray-600">Doctor profile not found</p>
      </div>
    );
  }

  return (
    <DoctorLayout doctor={doctor}>
      <div className="space-y-12">
        {/* Overview */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">About Dr. Vaishali Manapure</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {doctor.fullBio}
          </p>
        </section>

        {/* Experience Highlight */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 border-l-4 border-secondary">
          <div className="flex items-center gap-4">
            <div className="text-5xl font-bold text-secondary">{doctor.yearsOfExperience}+</div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">Years of Experience</h3>
              <p className="text-gray-700">Clinical expertise in women's health, gynecological disorders, cosmetic concerns, and holistic wellness</p>
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Qualifications & Credentials</h2>
          <div className="space-y-4">
            {doctor.qualifications.map((qual, idx) => (
              <div key={idx} className="bg-light rounded-lg p-6 border-l-4 border-secondary">
                <h3 className="font-bold text-primary text-lg mb-2">{qual.degree}</h3>
                <p className="text-gray-700">{qual.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Details */}
        {doctor.education && doctor.education.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Education</h2>
            <div className="space-y-4">
              {doctor.education.map((edu, idx) => (
                <div key={idx} className="bg-white border border-secondary/20 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-primary text-lg mb-2">{edu.degree} - {edu.field}</h3>
                  <p className="text-gray-700 text-sm mb-1">{edu.university}</p>
                  <p className="text-gray-600 text-xs">{edu.year}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Professional Experience */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Professional Experience</h2>
          <div className="space-y-4">
            {doctor.professionalExperience.map((exp, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-secondary text-white font-bold">
                    {idx + 1}
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">{exp}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Specializations */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Areas of Expertise</h2>
          <div className="space-y-6">
            {doctor.specializations.map((spec, idx) => (
              <div key={idx} className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border border-secondary/20">
                <h3 className="text-2xl font-bold text-primary mb-3">{spec.title}</h3>
                <p className="text-gray-700 leading-relaxed">{spec.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        {doctor.services && doctor.services.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Services Offered</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {doctor.services.map((service, idx) => (
                <div key={idx} className="bg-light rounded-lg p-4 flex items-start gap-3">
                  <div className="text-secondary text-xl mt-1">✓</div>
                  <p className="text-gray-700 font-medium">{service}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education Details Section */}
        {doctor.education && doctor.education.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Educational Background</h2>
            <div className="bg-light rounded-xl p-8 border border-secondary/20">
              <div className="space-y-6">
                {doctor.education.map((edu, idx) => (
                  <div key={idx} className="pb-6 border-b border-gray-200 last:border-0">
                    <h3 className="font-bold text-primary text-lg mb-2">{edu.degree}</h3>
                    <p className="text-gray-700 mb-1">{edu.field}</p>
                    <p className="text-secondary font-semibold text-sm mb-1">{edu.university}</p>
                    <p className="text-gray-600 text-xs">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Treatment Philosophy */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Treatment Philosophy</h2>
          <div className="bg-light rounded-xl p-8 border-l-4 border-secondary">
            <p className="text-gray-700 leading-relaxed text-lg">
              {doctor.approach}
            </p>
          </div>
        </section>

        {/* Why Choose Dr. Vaishali */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Why Choose Dr. Vaishali Manapure?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: '25+ Years of Experience',
                desc: 'Extensive clinical expertise in women\'s health and holistic wellness',
              },
              {
                title: 'Gynecology Specialist',
                desc: 'Certified in gynecology and obstetrics with specialized women\'s health knowledge',
              },
              {
                title: 'Integrated Psychology Background',
                desc: 'Master\'s degree in psychology for comprehensive mental health support',
              },
              {
                title: 'Cosmetic Expertise',
                desc: 'Natural, non-invasive homeopathic solutions for skin and cosmetic concerns',
              },
              {
                title: 'Bach Flower Therapy',
                desc: 'Expert in gentle, natural therapies for emotional balance and wellbeing',
              },
              {
                title: 'Compassionate Care',
                desc: 'Combines science, sensitivity, and experience for holistic wellness',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-secondary/20 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary text-lg mb-2 flex items-start gap-2">
                  <span className="text-secondary text-xl mt-1">✓</span>
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Specialization Highlights */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Comprehensive Care for Women</h2>
          <div className="bg-gradient-to-r from-secondary/5 to-primary/5 rounded-xl p-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              Dr. Vaishali Manapure is particularly focused on providing comprehensive care for women at every stage of life. Whether you're dealing with hormonal imbalances, fertility concerns, menopausal symptoms, cosmetic concerns, or emotional wellbeing, her integrated approach ensures that you receive holistic, compassionate care.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By combining her expertise in homeopathy, gynecology, psychology, and Bach Flower Therapy, Dr. Vaishali addresses not just the physical symptoms, but also the emotional and psychological dimensions of your health journey.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Experience Expert Women's Health Care</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg">
            Schedule a consultation with Dr. Vaishali Manapure to begin your journey toward complete wellness and vitality.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:+919999999999" className="btn-primary">
              Call Now
            </a>
            <button className="btn-secondary">
              Book Online Consultation
            </button>
          </div>
        </section>
      </div>
    </DoctorLayout>
  );
}