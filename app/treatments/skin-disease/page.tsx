import TreatmentLayout from '@/components/TreatmentLayout';

export const metadata = {
  title: 'Skin Disease Treatment | Asha Homeopathic Clinic',
  description: 'Comprehensive homeopathic treatment for various skin diseases with natural remedies.',
};

export default function SkinDiseasePage() {
  return (
    <TreatmentLayout
      title="Skin Disease Treatment"
      subtitle="Comprehensive homeopathic treatment for various skin diseases"
      mainImage="/images/services/skin-disease.png"
      clinicImage="/images/clinic/aboutclinic_1.png"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold text-primary mb-4">Understanding Skin Diseases</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Skin diseases are common conditions that affect millions of people worldwide. They can range from mild irritations to serious conditions affecting quality of life. At Asha Homeopathic Clinic, we provide holistic treatment that addresses the root cause of skin diseases.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Common Skin Diseases We Treat</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Eczema and dermatitis",
              "Psoriasis",
              "Urticaria (hives)",
              "Acne and pimples",
              "Fungal infections",
              "Bacterial infections",
              "Viral infections",
              "Allergic reactions",
            ].map((condition, idx) => (
              <div key={idx} className="flex gap-3 p-3 bg-light rounded-lg">
                <span className="text-secondary text-xl font-bold">✓</span>
                <span className="text-gray-700">{condition}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Why Choose Homeopathy for Skin Diseases?</h2>
          <div className="space-y-4">
            {[
              {
                title: "Addresses Root Causes",
                desc: "Homeopathy treats the underlying causes of skin diseases, not just surface symptoms."
              },
              {
                title: "No Side Effects",
                desc: "Natural remedies without harmful chemicals or steroids."
              },
              {
                title: "Long-lasting Results",
                desc: "Promotes lasting healing and prevents recurrence."
              },
              {
                title: "Improves Overall Health",
                desc: "Strengthens immune system and enhances overall wellness."
              },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-light rounded-lg p-6 border-l-4 border-secondary">
                <h3 className="font-bold text-primary mb-2 text-lg">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Our Treatment Approach</h2>
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 border border-secondary/20">
            <ol className="space-y-6">
              {[
                {
                  num: "1",
                  title: "Detailed Skin Assessment",
                  desc: "Complete evaluation of your skin condition and medical history."
                },
                {
                  num: "2",
                  title: "Root Cause Identification",
                  desc: "Understanding underlying factors causing the skin disease."
                },
                {
                  num: "3",
                  title: "Customized Treatment Plan",
                  desc: "Individualized homeopathic remedies for your specific condition."
                },
                {
                  num: "4",
                  title: "Lifestyle Guidance",
                  desc: "Diet and lifestyle modifications for better skin health."
                },
                {
                  num: "5",
                  title: "Regular Monitoring",
                  desc: "Follow-up consultations to track healing progress."
                },
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-secondary text-white font-bold text-lg">
                      {step.num}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg mb-1">{step.title}</h4>
                    <p className="text-gray-700">{step.desc}</p>
                  </div>
                </div>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Get Healthy Skin Naturally</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our experienced homeopathic doctors can help you achieve clear, healthy skin naturally.
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