import TreatmentLayout from '@/components/TreatmentLayout';

export const metadata = {
  title: 'Hair Loss Treatment | Asha Homeopathic Clinic',
  description: 'Natural homeopathic treatment for hair fall, alopecia, and hair restoration.',
};

export default function HairLossPage() {
  return (
    <TreatmentLayout
      title="Hair Loss Treatment"
      subtitle="Restore your hair naturally with proven homeopathic remedies"
      mainImage="/images/services/servicepage.jpg"
      clinicImage="/images/clinic/aboutclinic_1.png"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold text-primary mb-4">Hair Loss Problem</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hair loss affects millions of people worldwide, impacting self-confidence and emotional well-being. Whether it's temporary shedding or chronic alopecia, homeopathic treatment offers a natural solution to promote healthy hair growth.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At Asha Homeopathic Clinic, we identify the root cause of hair loss and provide personalized treatment to restore your hair naturally.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Types of Hair Loss We Treat</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Androgenetic Alopecia",
                desc: "Hereditary hair loss affecting both men and women"
              },
              {
                title: "Alopecia Areata",
                desc: "Patchy hair loss due to autoimmune condition"
              },
              {
                title: "Telogen Effluvium",
                desc: "Excessive shedding due to stress or hormonal changes"
              },
              {
                title: "Nutritional Hair Loss",
                desc: "Hair fall due to deficiencies in iron, zinc, proteins"
              },
              {
                title: "Postpartum Hair Loss",
                desc: "Hair shedding after pregnancy due to hormonal changes"
              },
              {
                title: "Trichotillomania",
                desc: "Hair pulling disorder with psychological component"
              },
            ].map((type, idx) => (
              <div key={idx} className="bg-light rounded-lg p-6 border border-secondary/20">
                <h3 className="font-bold text-primary mb-2">{type.title}</h3>
                <p className="text-gray-700 text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Common Causes of Hair Loss</h2>
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 border border-secondary/20">
            <div className="space-y-4">
              {[
                { category: "Nutritional", items: ["Iron deficiency", "Zinc deficiency", "Protein deficiency", "Vitamin B12 deficiency"] },
                { category: "Hormonal", items: ["Thyroid disorders", "PCOD/PCOS", "Hormonal imbalances", "Postpartum changes"] },
                { category: "Lifestyle", items: ["Chronic stress", "Poor sleep", "Sedentary lifestyle", "Unhealthy diet"] },
                { category: "Environmental", items: ["Pollution", "Hard water", "Chemical exposure", "Excessive heat"] },
              ].map((cause, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-primary mb-2">{cause.category} Factors:</h4>
                  <ul className="grid md:grid-cols-2 gap-2 ml-4">
                    {cause.items.map((item, i) => (
                      <li key={i} className="text-gray-700 flex gap-2">
                        <span className="text-secondary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Homeopathic Approach to Hair Loss</h2>
          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "Scalp & Hair Analysis",
                desc: "Detailed examination of hair condition, scalp health, and pattern of hair loss."
              },
              {
                step: "02",
                title: "Systemic Evaluation",
                desc: "Assessment of nutritional status, hormonal balance, and overall health."
              },
              {
                step: "03",
                title: "Root Cause Identification",
                desc: "Determining whether hair loss is due to constitutional, nutritional, hormonal, or environmental factors."
              },
              {
                step: "04",
                title: "Customized Treatment",
                desc: "Personalized homeopathic remedies combined with nutritional support and lifestyle modifications."
              },
              {
                step: "05",
                title: "Hair Growth Stimulation",
                desc: "Treatment promotes blood circulation to scalp and strengthens hair follicles from within."
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 pb-6 border-b border-gray-200 last:border-b-0">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white font-bold">
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

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Treatment Timeline</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { month: "0-3", result: "Reduction in hair fall, healthier scalp" },
              { month: "3-6", result: "New hair growth visible, improved hair quality" },
              { month: "6-9", result: "Significant regrowth, fuller hair density" },
              { month: "9-12", result: "Complete hair restoration, sustained growth" },
            ].map((timeline, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 border border-secondary/20 text-center">
                <h4 className="font-bold text-primary text-lg mb-2">{timeline.month} Months</h4>
                <p className="text-gray-700 text-sm">{timeline.result}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Hair Care Recommendations</h2>
          <div className="space-y-4">
            {[
              { icon: "🚵", title: "Gentle Cleansing", tips: "Use natural shampoos, avoid harsh chemicals, wash 2-3 times weekly" },
              { icon: "🚿", title: "Scalp Massage", tips: "Regular massage improves blood circulation and nourishes hair follicles" },
              { icon: "🛡", title: "Oiling", tips: "Use coconut, sesame, or neem oil twice weekly for 15-20 minutes" },
              { icon: "🚮", title: "Avoid Heat", tips: "Minimize blow dryers, straighteners, and chemical treatments" },
              { icon: "🍎", title: "Nutrition", tips: "Iron-rich foods, proteins, nuts, seeds, leafy greens, and adequate water" },
            ].map((tip, idx) => (
              <div key={idx} className="bg-light rounded-lg p-6 border border-secondary/20 flex gap-4">
                <span className="text-3xl flex-shrink-0">{tip.icon}</span>
                <div>
                  <h4 className="font-bold text-primary mb-1">{tip.title}</h4>
                  <p className="text-gray-700 text-sm">{tip.tips}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Get Your Hair Back Naturally</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Stop worrying about hair loss. Our experienced doctors at Asha Homeopathic Clinic can help you restore healthy, beautiful hair naturally.
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
