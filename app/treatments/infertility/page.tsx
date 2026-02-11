import TreatmentLayout from '@/components/TreatmentLayout';

export const metadata = {
  title: 'Infertility Treatment | Asha Homeopathic Clinic',
  description: 'Comprehensive homeopathic treatment for infertility with high success rates. Experienced doctors specializing in male and female infertility treatment.',
};

export default function InfertilityPage() {
  return (
    <TreatmentLayout
      title="Infertility Treatment"
      subtitle="Evidence-based homeopathic solutions for male and female infertility with proven success rates"
      mainImage="/images/services/servicepage.jpg"
      clinicImage="/images/clinic/aboutclinic_1.png"
    >
      <div className="space-y-8">
        {/* Overview */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-4">Understanding Infertility</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Infertility affects countless couples worldwide, causing emotional and psychological distress. At Asha Homeopathic Clinic, we understand the sensitivity of this issue and provide compassionate, evidence-based homeopathic treatment that addresses both the physical and emotional aspects of infertility.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our specialized approach combines detailed case analysis with time-tested homeopathic remedies to improve reproductive health and increase the chances of natural conception.
          </p>
        </section>

        {/* Types of Infertility */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Types of Infertility We Treat</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Female Infertility",
                conditions: [
                  "Irregular or absent periods (Amenorrhea)",
                  "Ovulatory disorders and PCOD",
                  "Tubal blockage and adhesions",
                  "Endometriosis",
                  "Uterine fibroids and polyps",
                  "Low egg quality and quantity",
                  "Premature ovarian failure",
                  "Hormonal imbalances",
                ]
              },
              {
                title: "Male Infertility",
                conditions: [
                  "Low sperm count (Oligospermia)",
                  "Poor sperm motility (Asthenozoospermia)",
                  "Abnormal sperm morphology (Teratozoospermia)",
                  "Erectile dysfunction",
                  "Low libido",
                  "Varicocele and testicular issues",
                  "Frequent ejaculation",
                  "Stress-related infertility",
                ]
              }
            ].map((category, idx) => (
              <div key={idx} className="bg-light rounded-xl p-6 border border-secondary/20">
                <h3 className="text-xl font-bold text-primary mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.conditions.map((condition, i) => (
                    <li key={i} className="flex gap-3 text-gray-700">
                      <span className="text-secondary font-bold text-lg">•</span>
                      <span>{condition}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Our Approach */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Our Homeopathic Approach</h2>
          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "Comprehensive Case Analysis",
                desc: "We conduct detailed consultations to understand your medical history, lifestyle, emotional state, and reproductive health concerns."
              },
              {
                step: "02",
                title: "Root Cause Identification",
                desc: "Our doctors identify the underlying causes of infertility, whether physical, hormonal, psychological, or constitutional."
              },
              {
                step: "03",
                title: "Personalized Treatment Plan",
                desc: "Based on the individual analysis, we create a customized homeopathic treatment protocol tailored to your specific needs."
              },
              {
                step: "04",
                title: "Holistic Management",
                desc: "Treatment includes homeopathic remedies, lifestyle modifications, dietary guidance, and psychological counseling for comprehensive wellness."
              },
              {
                step: "05",
                title: "Regular Monitoring",
                desc: "We track progress through regular follow-ups, hormone level checks, and reproductive health assessments."
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 pb-6 border-b border-gray-200 last:border-b-0">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Benefits */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Why Homeopathy for Infertility?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Natural and side-effect free treatment",
              "Addresses root causes, not just symptoms",
              "Improves overall health and immunity",
              "Regulates hormonal balance naturally",
              "Reduces stress and emotional burden",
              "Enhances reproductive organ function",
              "Safe to combine with other treatments",
              "High success rates with natural conception",
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4 p-4 bg-light rounded-lg border border-secondary/10">
                <span className="text-2xl">✓</span>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Success Indicators */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Expected Improvements During Treatment</h2>
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 border border-secondary/20">
            <ul className="space-y-3">
              {[
                "Regular and predictable menstrual cycles",
                "Improved hormonal balance and ovulation",
                "Increased sperm count, motility, and quality",
                "Enhanced sexual function and libido",
                "Reduced stress and improved emotional health",
                "Better energy levels and overall vitality",
                "Improved digestion and nutrient absorption",
                "Successful natural conception",
              ].map((improvement, idx) => (
                <li key={idx} className="flex gap-3 text-gray-700">
                  <span className="text-secondary font-bold">★</span>
                  <span>{improvement}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Treatment Timeline</h2>
          <p className="text-gray-700 mb-6">
            While individual results vary, here's what you can typically expect:
          </p>
          <div className="space-y-4">
            {[
              { month: "1-3 months", result: "Regulatory cycles, hormonal balance begins, improved overall health" },
              { month: "3-6 months", result: "Significant improvement in reproductive parameters, increased fertility" },
              { month: "6-12 months", result: "Optimal reproductive health, high chances of natural conception" },
            ].map((timeline, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border-l-4 border-secondary">
                <h4 className="font-bold text-primary text-lg mb-2">{timeline.month}</h4>
                <p className="text-gray-700">{timeline.result}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Patient Success Stories</h2>
          <p className="text-gray-700 mb-6">
            Many couples have successfully conceived and delivered healthy babies after undergoing treatment at Asha Homeopathic Clinic. Their journeys inspire us to continue providing compassionate, effective care.
          </p>
          <div className="bg-light rounded-xl p-6 border border-secondary/20 italic text-gray-700">
            "After 5 years of trying, we finally have our bundle of joy. The personalized treatment and counseling at Asha Clinic gave us hope when we had almost given up. Thank you to Dr. Ashish and Dr. Vaishali!"
            <p className="font-semibold text-primary mt-4 not-italic">— Success Story, Nagpur</p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Don't let infertility steal your joy. Reach out to Asha Homeopathic Clinic today and let our experienced doctors guide you towards parenthood with natural, safe, and effective treatment.
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
