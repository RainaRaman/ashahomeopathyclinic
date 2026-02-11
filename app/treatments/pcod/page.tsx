import TreatmentLayout from '@/components/TreatmentLayout';

export const metadata = {
  title: 'PCOD/PCOS Treatment | Asha Homeopathic Clinic',
  description: 'Effective homeopathic treatment for PCOD (Polycystic Ovarian Disease) with hormonal balance and proven results.',
};

export default function PCODPage() {
  return (
    <TreatmentLayout
      title="PCOD/PCOS Treatment"
      subtitle="Natural homeopathic solutions for hormonal balance and ovarian health"
      mainImage="/images/services/servicepage.jpg"
      clinicImage="/images/clinic/aboutclinic_1.png"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold text-primary mb-4">What is PCOD?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Polycystic Ovarian Disease (PCOD), also known as PCOS (Polycystic Ovary Syndrome), is a common endocrine disorder affecting women of reproductive age. It's characterized by hormonal imbalance, irregular periods, and the development of cysts on the ovaries.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At Asha Homeopathic Clinic, we provide holistic treatment that addresses the root cause of PCOD rather than just managing symptoms.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Common Symptoms of PCOD</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Irregular or absent periods",
              "Excessive facial and body hair (Hirsutism)",
              "Acne and oily skin",
              "Hair loss and thinning",
              "Difficulty losing weight",
              "Insulin resistance",
              "Mood swings and depression",
              "Infertility or difficulty conceiving",
              "Dark patches on skin (Acanthosis nigricans)",
              "Fatigue and low energy",
            ].map((symptom, idx) => (
              <div key={idx} className="flex gap-3 p-3 bg-light rounded-lg">
                <span className="text-secondary text-xl font-bold">✓</span>
                <span className="text-gray-700">{symptom}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Why Choose Homeopathy for PCOD?</h2>
          <div className="space-y-4">
            {[
              {
                title: "Addresses Root Causes",
                desc: "Instead of suppressing symptoms, homeopathy identifies and treats the underlying hormonal imbalance."
              },
              {
                title: "Restores Hormonal Balance",
                desc: "Natural remedies help regulate insulin levels, reduce androgens, and restore menstrual regularity."
              },
              {
                title: "No Side Effects",
                desc: "Homeopathic medicines are natural and free from the harsh side effects of conventional treatments."
              },
              {
                title: "Improves Fertility",
                desc: "By regulating ovulation, PCOD treatment increases the chances of natural conception."
              },
              {
                title: "Holistic Health",
                desc: "Treatment improves overall health, energy levels, skin quality, and emotional well-being."
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
                  title: "Detailed Assessment",
                  desc: "Complete evaluation of hormonal profile, menstrual history, lifestyle, diet, and emotional factors."
                },
                {
                  num: "2",
                  title: "Customized Remedy Selection",
                  desc: "Individualized homeopathic medicines selected based on your unique symptom profile."
                },
                {
                  num: "3",
                  title: "Lifestyle & Diet Modifications",
                  desc: "Guidance on nutrition, exercise, stress management, and sleep optimization."
                },
                {
                  num: "4",
                  title: "Regular Monitoring",
                  desc: "Follow-up consultations to track hormonal balance and adjust treatment as needed."
                },
                {
                  num: "5",
                  title: "Long-term Management",
                  desc: "Sustained treatment to prevent recurrence and maintain optimal reproductive health."
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
          <h2 className="text-3xl font-bold text-primary mb-6">Expected Results During Treatment</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-secondary/20">
              <h3 className="font-bold text-primary mb-4 flex items-center gap-2"><span className="text-xl">📅</span> 0-3 Months</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Improved energy and mood</li>
                <li>• Better sleep quality</li>
                <li>• Clearer skin</li>
                <li>• Initial hormonal shifts</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border border-secondary/20">
              <h3 className="font-bold text-primary mb-4 flex items-center gap-2"><span className="text-xl">⚖️</span> 3-6 Months</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Regular menstrual cycles</li>
                <li>• Reduced androgen symptoms</li>
                <li>• Weight stabilization</li>
                <li>• Better insulin sensitivity</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border border-secondary/20">
              <h3 className="font-bold text-primary mb-4 flex items-center gap-2"><span className="text-xl">✨</span> 6-12 Months</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Complete hormonal balance</li>
                <li>• Sustained weight loss</li>
                <li>• Improved fertility</li>
                <li>• Overall health transformation</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border border-secondary/20">
              <h3 className="font-bold text-primary mb-4 flex items-center gap-2"><span className="text-xl">🎯</span> Beyond 1 Year</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Long-term remission</li>
                <li>• Optimal reproductive health</li>
                <li>• Prevention of complications</li>
                <li>• Sustained wellness</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Lifestyle Recommendations</h2>
          <div className="space-y-6">
            {[
              {
                icon: "🍎",
                title: "Diet",
                points: ["Low glycemic index foods", "High fiber intake", "Lean proteins", "Limit processed foods", "Reduce sugar and refined carbs"]
              },
              {
                icon: "🏃",
                title: "Exercise",
                points: ["Regular physical activity (30 mins daily)", "Strength training 2-3 times weekly", "Yoga for stress management", "Walking and cardio exercises"]
              },
              {
                icon: "😌",
                title: "Stress Management",
                points: ["Meditation and mindfulness", "Adequate sleep (7-8 hours)", "Counseling support", "Breathing exercises"]
              },
            ].map((category, idx) => (
              <div key={idx} className="bg-light rounded-lg p-6 border border-secondary/20">
                <h3 className="font-bold text-primary text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">{category.icon}</span>
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.points.map((point, i) => (
                    <li key={i} className="flex gap-2 text-gray-700">
                      <span className="text-secondary font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "Is PCOD curable with homeopathy?",
                a: "While PCOD is a chronic condition, homeopathic treatment can effectively manage symptoms and restore hormonal balance, allowing many patients to conceive naturally and enjoy normal periods."
              },
              {
                q: "How long does treatment take?",
                a: "Most patients see significant improvements within 3-6 months, with optimal results achieved within 6-12 months of consistent treatment."
              },
              {
                q: "Can I use homeopathy alongside conventional treatment?",
                a: "Yes, homeopathy can be used safely alongside other treatments. Inform your doctor about all treatments you're undergoing."
              },
              {
                q: "Are there any side effects?",
                a: "Homeopathic medicines are natural and have no side effects. Some patients may experience temporary symptom aggravation (healing crisis), which is actually a positive sign."
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-secondary/20">
                <h4 className="font-bold text-primary mb-2 text-lg">Q: {faq.q}</h4>
                <p className="text-gray-700 ml-6">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Take Control of Your Health Today</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Don't let PCOD control your life. Our experienced doctors at Asha Homeopathic Clinic can help you achieve hormonal balance and reclaim your health naturally.
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
