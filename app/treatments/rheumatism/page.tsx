import TreatmentLayout from '@/components/TreatmentLayout';

export const metadata = {
  title: 'Rheumatism Treatment | Asha Homeopathic Clinic',
  description: 'Effective treatment for rheumatism and rheumatoid conditions',
};

export default function RheumatismPage() {
  return (
    <TreatmentLayout
      title="Rheumatism Treatment"
      subtitle="Effective treatment for rheumatism and rheumatoid conditions"
      mainImage="/images/services/rheumatism.png"
      clinicImage="/images/clinic/aboutclinic_1.png"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold text-primary mb-4">Understanding Rheumatism Treatment</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Rheumatism Treatment is a common health condition that affects many people. At Asha Homeopathic Clinic, we provide holistic treatment that addresses the root cause of this condition through natural remedies.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Why Choose Homeopathy?</h2>
          <div className="space-y-4">
            {
              [
                {
                  title: "Natural Treatment",
                  desc: "100% natural remedies with no side effects."
                },
                {
                  title: "Addresses Root Causes",
                  desc: "Treats the underlying causes, not just symptoms."
                },
                {
                  title: "Long-lasting Results",
                  desc: "Promotes lasting healing and prevents recurrence."
                },
                {
                  title: "Personalized Approach",
                  desc: "Customized treatment plans for each patient."
                },
              ].map((benefit, idx) => (
                <div key={idx} className="bg-light rounded-lg p-6 border-l-4 border-secondary">
                  <h3 className="font-bold text-primary mb-2 text-lg">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.desc}</p>
                </div>
              ))
            }
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Our Treatment Approach</h2>
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 border border-secondary/20">
            <ol className="space-y-6">
              {
                [
                  {
                    num: "1",
                    title: "Comprehensive Assessment",
                    desc: "Complete evaluation of your health condition and medical history."
                  },
                  {
                    num: "2",
                    title: "Root Cause Analysis",
                    desc: "Understanding the underlying factors causing your condition."
                  },
                  {
                    num: "3",
                    title: "Personalized Treatment",
                    desc: "Customized homeopathic remedies tailored to your specific needs."
                  },
                  {
                    num: "4",
                    title: "Lifestyle Guidance",
                    desc: "Diet and lifestyle recommendations for better health."
                  },
                  {
                    num: "5",
                    title: "Regular Follow-up",
                    desc: "Continuous monitoring and adjustment of treatment as needed."
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
                ))
              }
            </ol>
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Get Expert Homeopathic Care</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our experienced doctors are ready to help you achieve optimal health with natural, personalized treatment.
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
