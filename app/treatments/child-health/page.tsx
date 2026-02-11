import TreatmentLayout from '@/components/TreatmentLayout';

export const metadata = {
  title: 'Child Health & Development | Asha Homeopathic Clinic',
  description: 'Specialized homeopathic treatment for children including ADHD, autism, developmental issues.',
};

export default function ChildHealthPage() {
  return (
    <TreatmentLayout
      title="Child Health & Development"
      subtitle="Gentle, safe homeopathic care for children with developmental and behavioral support"
      mainImage="/images/services/servicepage.jpg"
      clinicImage="/images/clinic/aboutclinic_1.png"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold text-primary mb-4">Child Health & Development</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Asha Homeopathic Clinic, we understand that children require special attention and gentle care. Our experienced doctors specialize in treating developmental disorders, behavioral issues, and common childhood ailments using safe, natural remedies.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We believe in supporting children's natural growth and development while addressing any health concerns with compassion and expertise.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Conditions We Treat</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "ADHD (Attention-Deficit/Hyperactivity)",
              "Autism Spectrum Disorder (ASD)",
              "Learning difficulties and delays",
              "Behavioral problems",
              "Speech and language delays",
              "Coordination issues (Dyspraxia)",
              "Temper tantrums and anger",
              "Anxiety and fear in children",
              "Bed-wetting and urinary issues",
              "Poor appetite and growth issues",
              "Allergies and weak immunity",
              "Sleep disorders and nightmares",
              "Eczema and skin conditions",
              "Frequent infections",
            ].map((condition, idx) => (
              <div key={idx} className="flex gap-3 p-3 bg-light rounded-lg">
                <span className="text-secondary text-xl font-bold">+</span>
                <span className="text-gray-700">{condition}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Our Special Expertise</h2>
          <div className="space-y-4">
            {[
              {
                title: "ADHD Management",
                desc: "Helps improve focus, impulse control, and behavioral regulation without stimulant side effects."
              },
              {
                title: "Autism Spectrum Support",
                desc: "Supports social development, communication, and behavioral improvement naturally."
              },
              {
                title: "Developmental Delays",
                desc: "Addresses speech, motor, and cognitive delays with gentle, effective remedies."
              },
              {
                title: "Behavioral Guidance",
                desc: "Comprehensive approach including homeopathy, counseling, and behavioral strategies for parents."
              },
              {
                title: "Learning Support",
                desc: "Helps children with learning disabilities improve focus, memory, and academic performance."
              },
            ].map((expertise, idx) => (
              <div key={idx} className="bg-light rounded-lg p-6 border-l-4 border-secondary">
                <h3 className="font-bold text-primary mb-2 text-lg">{expertise.title}</h3>
                <p className="text-gray-700">{expertise.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Why Homeopathy for Children?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "✓",
                title: "Safe & Gentle",
                desc: "No harmful side effects or addiction potential"
              },
              {
                icon: "✓",
                title: "Natural Remedies",
                desc: "Made from natural substances, safe for sensitive systems"
              },
              {
                icon: "✓",
                title: "Holistic Approach",
                desc: "Treats the whole child, not just symptoms"
              },
              {
                icon: "✓",
                title: "Constitutional Healing",
                desc: "Strengthens children's immune systems and resilience"
              },
              {
                icon: "✓",
                title: "No Harsh Chemicals",
                desc: "Avoids stimulants and other controversial medications"
              },
              {
                icon: "✓",
                title: "Family Support",
                desc: "Includes parental guidance and behavioral strategies"
              },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-secondary/20">
                <div className="flex items-start gap-4">
                  <span className="text-2xl text-secondary font-bold flex-shrink-0">{benefit.icon}</span>
                  <div>
                    <h3 className="font-bold text-primary mb-1">{benefit.title}</h3>
                    <p className="text-gray-700 text-sm">{benefit.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Treatment Process</h2>
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 border border-secondary/20">
            <ol className="space-y-6">
              {[
                { num: "1", title: "Detailed Child & Family Assessment", desc: "Understanding child's development, behavior, emotions, and family dynamics." },
                { num: "2", title: "Constitutional Evaluation", desc: "Assessing child's inherent characteristics and health constitution." },
                { num: "3", title: "Remedy Selection", desc: "Choosing age-appropriate homeopathic remedies based on symptoms and temperament." },
                { num: "4", title: "Parental Guidance", desc: "Providing behavioral strategies, dietary advice, and lifestyle modifications." },
                { num: "5", title: "Regular Monitoring", desc: "Tracking developmental progress and adjusting treatment as child grows." },
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

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Developmental Milestones Support</h2>
          <div className="space-y-4">
            {[
              { age: "0-2 Years", focus: "Growth, nutrition, immunization, early development" },
              { age: "2-5 Years", focus: "Speech, motor skills, behavior, social skills" },
              { age: "6-12 Years", focus: "Learning, attention, behavior, school performance" },
              { age: "Teens", focus: "Growth, emotions, behavior, academic support" },
            ].map((stage, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-secondary/20">
                <h4 className="font-bold text-primary text-lg mb-2">{stage.age}</h4>
                <p className="text-gray-700">Focus: {stage.focus}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Parental Support & Education</h2>
          <div className="bg-light rounded-xl p-8 border border-secondary/20">
            <h3 className="font-bold text-primary mb-4">We provide guidance on:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Behavioral management techniques",
                "Nutritional support for development",
                "Educational strategies and school support",
                "Managing emotional challenges",
                "Sleep and routine optimization",
                "Immune system strengthening",
                "Screen time and digital wellness",
                "Building confidence and self-esteem",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-secondary font-bold text-lg flex-shrink-0">•</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Success Timeline</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { period: "1-3 Months", results: "Improved behavior, better sleep, reduced emotional outbursts" },
              { period: "3-6 Months", results: "Enhanced focus, improved school performance, better social interaction" },
              { period: "6-12 Months", results: "Significant developmental gains, sustained improvement, confidence building" },
              { period: "Beyond 1 Year", results: "Normalized development, sustained wellness, independent functioning" },
            ].map((timeline, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-secondary/20">
                <h4 className="font-bold text-primary text-lg mb-2">{timeline.period}</h4>
                <p className="text-gray-700 text-sm">{timeline.results}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Give Your Child the Best Start</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Every child deserves to grow up healthy, happy, and confident. Our specialized doctors can help your child overcome developmental challenges and reach their full potential naturally.
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
