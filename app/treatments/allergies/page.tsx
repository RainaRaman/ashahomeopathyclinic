import TreatmentLayout from '@/components/TreatmentLayout';

export const metadata = {
  title: 'Allergies & Immunology Treatment | Asha Homeopathic Clinic',
  description: 'Natural homeopathic treatment for allergic reactions, asthma, and immune system disorders.',
};

export default function AllergiesPage() {
  return (
    <TreatmentLayout
      title="Allergies & Immunology"
      subtitle="Strengthen your immune system and overcome allergies naturally"
      mainImage="/images/services/servicepage.jpg"
      clinicImage="/images/clinic/aboutclinic_1.png"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold text-primary mb-4">Allergies & Immune Health</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Allergies affect quality of life significantly. Homeopathy strengthens the immune system to reduce hypersensitivity and build lasting immunity against allergens.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Rather than suppressing symptoms, our treatment helps your body develop natural resistance.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Conditions We Treat</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Seasonal allergies (hay fever)",
              "Food allergies",
              "Drug allergies",
              "Asthma and breathing difficulties",
              "Allergic rhinitis",
              "Urticaria (hives)",
              "Angioedema",
              "Eczema (allergic form)",
              "Weak immunity",
              "Frequent infections",
              "Allergic sinusitis",
              "Contact dermatitis",
            ].map((condition, idx) => (
              <div key={idx} className="flex gap-3 p-3 bg-light rounded-lg">
                <span className="text-secondary text-xl font-bold">✓</span>
                <span className="text-gray-700">{condition}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Why Homeopathy for Allergies?</h2>
          <div className="space-y-4">
            {[
              {
                title: "Builds Natural Immunity",
                desc: "Strengthens your immune system to reduce allergic reactions naturally."
              },
              {
                title: "Removes Root Cause",
                desc: "Addresses the constitutional weakness that causes hypersensitivity."
              },
              {
                title: "No Side Effects",
                desc: "Unlike steroids and antihistamines, homeopathy has no adverse effects."
              },
              {
                title: "Prevents Complications",
                desc: "Reduces risk of asthma development and other allergic complications."
              },
              {
                title: "Long-lasting Relief",
                desc: "Provides permanent freedom from allergies, not just temporary relief."
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
          <h2 className="text-3xl font-bold text-primary mb-6">Treatment Approach</h2>
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 border border-secondary/20">
            <ol className="space-y-6">
              {[
                { num: "1", title: "Allergy Testing & Assessment", desc: "Identify allergens and understand your immune response patterns." },
                { num: "2", title: "Constitutional Analysis", desc: "Evaluate your overall health to understand immune vulnerability." },
                { num: "3", title: "Desensitization Treatment", desc: "Gradually train your immune system to tolerate allergens." },
                { num: "4", title: "Immune Support", desc: "Homeopathic remedies to strengthen immunity and reduce allergic responses." },
                { num: "5", title: "Environmental Management", desc: "Guidance on allergen avoidance and environmental modifications." },
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
          <h2 className="text-3xl font-bold text-primary mb-6">Expected Improvements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { month: "1-3 Months", items: ["Reduced allergy symptoms", "Fewer triggering episodes", "Improved breathing"] },
              { month: "3-6 Months", items: ["Significantly fewer reactions", "Better immune response", "Reduced medicine dependency"] },
              { month: "6-12 Months", items: ["Complete freedom", "Strong immunity", "Lasting relief"] },
            ].map((period, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-secondary/20">
                <h4 className="font-bold text-primary text-lg mb-4">{period.month}</h4>
                <ul className="space-y-2">
                  {period.items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-gray-700 text-sm">
                      <span className="text-secondary">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Allergen Avoidance Tips</h2>
          <div className="space-y-4">
            {[
              { icon: "🏠", title: "Environmental", tips: "Keep home clean, use air filters, avoid outdoor allergens during peak season" },
              { icon: "🥘", title: "Food Allergens", tips: "Read labels carefully, avoid cross-contamination, maintain food diary" },
              { icon: "🧴", title: "Personal Care", tips: "Use hypoallergenic products, avoid harsh chemicals" },
              { icon: "🧘", title: "Lifestyle", tips: "Manage stress, get adequate sleep, regular exercise" },
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

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Immune Boosting Recommendations</h2>
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 border border-secondary/20">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-primary mb-4 flex items-center gap-2"><span>🍎</span> Diet</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Vitamin C rich foods (citrus, berries)</li>
                  <li>• Zinc sources (nuts, seeds, legumes)</li>
                  <li>• Antioxidant foods</li>
                  <li>• Probiotics for gut health</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-4 flex items-center gap-2"><span>🏃</span> Lifestyle</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Regular exercise</li>
                  <li>• 7-8 hours sleep</li>
                  <li>• Stress management</li>
                  <li>• Adequate hydration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Build Strong Immunity, Overcome Allergies</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Don't let allergies control your life. Our expert treatment helps you build natural immunity and enjoy lasting freedom from allergies.
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
