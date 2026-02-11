import TreatmentLayout from '@/components/TreatmentLayout';

export const metadata = {
  title: 'Allergy Treatment | Asha Homeopathic Clinic',
  description: 'Comprehensive homeopathic treatment for various types of allergies with natural remedies.',
};

export default function AllergyPage() {
  return (
    <TreatmentLayout
      title="Allergy Treatment"
      subtitle="Natural homeopathic solutions for various allergic conditions"
      mainImage="/images/services/allergy.png"
      clinicImage="/images/clinic/aboutclinic_1.png"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold text-primary mb-4">Understanding Allergies</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Allergies occur when the immune system overreacts to a harmless substance, causing various symptoms. Homeopathic treatment addresses the underlying immune imbalance rather than just suppressing symptoms.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Types of Allergies We Treat</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Respiratory allergies (hay fever)",
              "Food allergies",
              "Skin allergies (urticaria)",
              "Drug allergies",
              "Seasonal allergies",
              "Dust allergies",
              "Pet allergies",
              "Contact allergies",
            ].map((allergy, idx) => (
              <div key={idx} className="flex gap-3 p-3 bg-light rounded-lg">
                <span className="text-secondary text-xl font-bold">✓</span>
                <span className="text-gray-700">{allergy}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Benefits of Homeopathic Allergy Treatment</h2>
          <div className="space-y-4">
            {[
              {
                title: "Strengthens Immunity",
                desc: "Enhances the immune system to handle allergens better."
              },
              {
                title: "No Dependency",
                desc: "No need for continuous medication or antihistamines."
              },
              {
                title: "Long-term Relief",
                desc: "Addresses root causes for lasting results."
              },
              {
                title: "Safe for All Ages",
                desc: "Suitable for children, adults, and elderly."
              },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-light rounded-lg p-6 border-l-4 border-secondary">
                <h3 className="font-bold text-primary mb-2 text-lg">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Say Goodbye to Allergies</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our expert homeopathic doctors can help you overcome allergies naturally and permanently.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="tel:+919999999999" className="btn-primary">
              Call Now
            </a>
            <a href="#" className="btn-secondary">
              Schedule Consultation
            </a>
          </div>
        </section>
      </div>
    </TreatmentLayout>
  );
}