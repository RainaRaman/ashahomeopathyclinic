import TreatmentLayout from '@/components/TreatmentLayout';

export const metadata = {
  title: 'Digestive & GI Health Treatment | Asha Homeopathic Clinic',
  description: 'Natural homeopathic treatment for IBS, gastritis, constipation, and other digestive disorders.',
};

export default function DigestiveHealthPage() {
  return (
    <TreatmentLayout
      title="Digestive & GI Health"
      subtitle="Restore healthy digestion naturally with proven homeopathic treatment"
      mainImage="/images/services/servicepage.jpg"
      clinicImage="/images/clinic/aboutclinic_1.png"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold text-primary mb-4">Digestive Health Matters</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A healthy digestive system is the foundation of overall wellness. Chronic digestive issues affect your energy, immunity, and quality of life. At Asha Homeopathic Clinic, we address digestive problems from the root cause using gentle, natural homeopathic remedies.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our integrated approach helps restore normal gut function, improve nutrient absorption, and rebuild digestive health sustainably.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Conditions We Treat</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Irritable Bowel Syndrome (IBS)",
              "Gastritis and GERD",
              "Constipation and diarrhea",
              "Inflammatory Bowel Disease (IBD)",
              "Ulcerative Colitis",
              "Crohn's Disease",
              "Celiac Disease",
              "Food intolerances",
              "Bloating and gas",
              "Abdominal pain and cramps",
              "Dyspepsia (indigestion)",
              "Hemorrhoids",
              "Sluggish digestion",
              "Poor appetite",
            ].map((condition, idx) => (
              <div key={idx} className="flex gap-3 p-3 bg-light rounded-lg">
                <span className="text-secondary text-xl font-bold">✓</span>
                <span className="text-gray-700">{condition}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Common Digestive Problems</h2>
          <div className="space-y-4">
            {[
              {
                title: "IBS (Irritable Bowel Syndrome)",
                symptoms: "Abdominal pain, irregular bowel movements, bloating, food sensitivities"
              },
              {
                title: "GERD (Acid Reflux)",
                symptoms: "Heartburn, regurgitation, chest pain, difficulty swallowing"
              },
              {
                title: "Inflammatory Bowel Disease",
                symptoms: "Chronic diarrhea, blood in stool, weight loss, malnutrition"
              },
              {
                title: "Functional Digestive Disorders",
                symptoms: "Bloating, gas, poor digestion, inconsistent bowel habits"
              },
            ].map((problem, idx) => (
              <div key={idx} className="bg-light rounded-lg p-6 border border-secondary/20">
                <h3 className="font-bold text-primary mb-2">{problem.title}</h3>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Common symptoms:</span> {problem.symptoms}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Why Homeopathy Works for Digestion</h2>
          <div className="space-y-4">
            {[
              {
                title: "Addresses Root Causes",
                desc: "Treats underlying imbalances causing digestive dysfunction, not just symptoms."
              },
              {
                title: "Restores Gut Function",
                desc: "Helps normalize stomach acid, bile production, and intestinal motility naturally."
              },
              {
                title: "Reduces Inflammation",
                desc: "Natural remedies calm inflamed tissues and promote healing of the digestive tract."
              },
              {
                title: "No Harsh Chemicals",
                desc: "Unlike conventional drugs, homeopathy doesn't damage the gut lining or cause dependency."
              },
              {
                title: "Improves Overall Health",
                desc: "Better digestion leads to improved nutrient absorption, energy, and immunity."
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
          <h2 className="text-3xl font-bold text-primary mb-6">Our Treatment Process</h2>
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 border border-secondary/20">
            <ol className="space-y-6">
              {[
                { num: "1", title: "Digestive History & Assessment", desc: "Understanding symptoms, triggers, food intolerances, and digestive patterns." },
                { num: "2", title: "Constitutional Evaluation", desc: "Assessing overall health, stress factors, and lifestyle impact on digestion." },
                { num: "3", title: "Remedy Selection", desc: "Customized homeopathic remedies to restore digestive function." },
                { num: "4", title: "Dietary Guidance", desc: "Specific recommendations for foods to eat and avoid during treatment." },
                { num: "5", title: "Lifestyle Support", desc: "Stress management, sleep, eating habits, and long-term digestive wellness." },
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
          <h2 className="text-3xl font-bold text-primary mb-6">Dietary Guidelines During Treatment</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Foods to Include",
                items: ["Whole grains", "Fresh vegetables", "Lean proteins", "Healthy fats", "Probiotic foods", "Herbal teas"]
              },
              {
                title: "Foods to Avoid",
                items: ["Processed foods", "Spicy foods", "Caffeine", "Alcohol", "High-fat foods", "Artificial additives"]
              },
            ].map((category, idx) => (
              <div key={idx} className="bg-light rounded-lg p-6 border border-secondary/20">
                <h3 className="font-bold text-primary mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-gray-700">
                      <span className="text-secondary font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Digestive Health Tips</h2>
          <div className="space-y-4">
            {[
              { icon: "🕐", title: "Eating Habits", tips: "Eat at regular times, chew slowly, avoid rushing, don't overeat" },
              { icon: "💧", title: "Hydration", tips: "Drink adequate water between meals, avoid drinking during meals" },
              { icon: "🧘", title: "Stress Management", tips: "Reduce stress through meditation, yoga, and relaxation techniques" },
              { icon: "🏃", title: "Exercise", tips: "Regular physical activity improves digestion and gut motility" },
            ].map((tip, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-secondary/20 flex gap-4">
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
          <h2 className="text-3xl font-bold text-primary mb-6">Expected Improvements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { month: "1-3 Weeks", results: "Reduced bloating and gas, improved appetite" },
              { month: "1-3 Months", results: "Regular bowel movements, less pain, better digestion" },
              { month: "3-6 Months", results: "Sustained relief, improved energy, food tolerance" },
              { month: "6-12 Months", results: "Complete healing, normal digestion, excellent health" },
            ].map((timeline, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-secondary/20 text-center">
                <h4 className="font-bold text-primary text-lg mb-2">{timeline.month}</h4>
                <p className="text-gray-700 text-sm">{timeline.results}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Nutritional Support</h2>
          <div className="bg-light rounded-xl p-8 border border-secondary/20">
            <p className="text-gray-700 mb-6">
              Our doctors may recommend specific nutritional supplements to support digestive healing:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Probiotics for gut flora",
                "Digestive enzymes",
                "L-Glutamine for gut lining",
                "Omega-3 fatty acids",
                "Fiber supplementation",
                "Vitamin & mineral support",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-secondary font-bold text-lg flex-shrink-0">✓</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Restore Your Digestive Health Naturally</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Stop suffering from digestive issues. Let our experienced doctors help you restore healthy digestion and enjoy life without discomfort.
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
