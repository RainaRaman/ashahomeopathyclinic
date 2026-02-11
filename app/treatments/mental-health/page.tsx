import TreatmentLayout from '@/components/TreatmentLayout';

export const metadata = {
  title: 'Mental Health & Counseling | Asha Homeopathic Clinic',
  description: 'Holistic homeopathic treatment for stress, anxiety, depression, and psychological wellbeing.',
};

export default function MentalHealthPage() {
  return (
    <TreatmentLayout
      title="Mental Health & Counseling"
      subtitle="Holistic care for emotional wellbeing and psychological health"
      mainImage="/images/services/servicepage.jpg"
      clinicImage="/images/clinic/aboutclinic_1.png"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold text-primary mb-4">Mental Health Matters</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Mental health is just as important as physical health. At Asha Homeopathic Clinic, we provide compassionate, integrated care combining homeopathic treatment, psychotherapy, and counseling to address emotional and psychological concerns.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our doctors, with qualifications in psychology and psychotherapy, understand the complex relationship between mind and body.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Conditions We Treat</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Stress and anxiety disorders",
              "Depression and mood disorders",
              "Insomnia and sleep disorders",
              "OCD and phobias",
              "Panic attacks and PTSD",
              "Relationship and family issues",
              "Work-related stress",
              "Adjustment disorders",
              "Low self-esteem",
              "Emotional disturbances",
              "Anger management issues",
              "Grief and loss",
            ].map((condition, idx) => (
              <div key={idx} className="flex gap-3 p-3 bg-light rounded-lg">
                <span className="text-secondary text-xl font-bold">✓</span>
                <span className="text-gray-700">{condition}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Integrated Treatment Approach</h2>
          <div className="space-y-4">
            {[
              {
                title: "Homeopathic Medicine",
                desc: "Natural remedies to balance emotions, reduce anxiety, and improve mood without side effects."
              },
              {
                title: "Psychotherapy",
                desc: "Structured therapeutic techniques to address emotional issues and behavioral patterns."
              },
              {
                title: "Counseling",
                desc: "Professional guidance and support to help you understand emotions and develop coping skills."
              },
              {
                title: "Bach Flower Remedies",
                desc: "Gentle flower essences to support emotional balance and inner peace."
              },
              {
                title: "Stress Management",
                desc: "Practical techniques including meditation, breathing exercises, and lifestyle modifications."
              },
            ].map((approach, idx) => (
              <div key={idx} className="bg-light rounded-lg p-6 border-l-4 border-secondary">
                <h3 className="font-bold text-primary mb-2 text-lg">{approach.title}</h3>
                <p className="text-gray-700">{approach.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Our Treatment Process</h2>
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 border border-secondary/20">
            <ol className="space-y-6">
              {[
                {
                  num: "1",
                  title: "Comprehensive Mental Health Assessment",
                  desc: "Understanding your emotional history, triggers, patterns, and current challenges."
                },
                {
                  num: "2",
                  title: "Emotional & Psychological Evaluation",
                  desc: "Assessing your emotional responses, coping mechanisms, and psychological strengths."
                },
                {
                  num: "3",
                  title: "Customized Treatment Plan",
                  desc: "Combination of homeopathy, psychotherapy, and counseling tailored to your needs."
                },
                {
                  num: "4",
                  title: "Regular Therapeutic Sessions",
                  desc: "Ongoing support and guidance to work through emotional issues."
                },
                {
                  num: "5",
                  title: "Skill Development",
                  desc: "Learning practical tools and techniques for emotional resilience and wellbeing."
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

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">What to Expect</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { period: "Week 1-2", results: "Initial relief, better sleep, reduced acute anxiety" },
              { period: "Month 1-3", results: "Emotional stability, improved coping, clearer thinking" },
              { period: "Month 3-6", results: "Lasting change, emotional resilience, improved relationships" },
            ].map((expectation, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-secondary/20 text-center">
                <h4 className="font-bold text-primary text-lg mb-2">{expectation.period}</h4>
                <p className="text-gray-700 text-sm">{expectation.results}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Special Services</h2>
          <div className="space-y-4">
            {[
              { icon: "👨‍👩‍👧‍👦", title: "Family Counseling", desc: "Address family dynamics, communication, and relationship issues" },
              { icon: "👧", title: "Child Development", desc: "Support for ADHD, autism, behavioral issues, and developmental concerns" },
              { icon: "🤔", title: "Pre-marital Counseling", desc: "Prepare for marriage with better understanding and communication" },
              { icon: "💼", title: "Career Counseling", desc: "Navigate career challenges, work-related stress, and professional growth" },
            ].map((service, idx) => (
              <div key={idx} className="bg-light rounded-lg p-6 border border-secondary/20 flex gap-4">
                <span className="text-3xl flex-shrink-0">{service.icon}</span>
                <div>
                  <h4 className="font-bold text-primary mb-1">{service.title}</h4>
                  <p className="text-gray-700 text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Bach Flower Remedies</h2>
          <p className="text-gray-700 mb-4">
            Our doctors are trained in Bach Flower Remedies, a gentle system of 38 flower essences that support emotional balance and mental wellbeing. These natural remedies help:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Reduce anxiety and worry",
              "Improve mood and emotional resilience",
              "Support emotional healing",
              "Enhance inner peace and calm",
              "Address fear and uncertainty",
              "Promote self-confidence",
              "Support life transitions",
              "Enhance overall wellbeing",
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-3 p-3 bg-light rounded-lg">
                <span className="text-secondary text-xl font-bold">✨</span>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Your Mental Health Matters</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Take the first step towards emotional wellbeing. Our compassionate doctors are here to support you on your journey to mental health and happiness.
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
