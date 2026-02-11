import TreatmentLayout from '@/components/TreatmentLayout';

export const metadata = {
  title: 'Skin & Dermatology Treatment | Asha Homeopathic Clinic',
  description: 'Natural homeopathic treatment for acne, eczema, psoriasis, and other chronic skin conditions.',
};

export default function SkinPage() {
  return (
    <TreatmentLayout
      title="Skin & Dermatology"
      subtitle="Natural, holistic homeopathic solutions for chronic skin conditions"
      mainImage="/images/services/servicepage.jpg"
      clinicImage="/images/clinic/aboutclinic_1.png"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold text-primary mb-4">Chronic Skin Conditions</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Chronic skin conditions like acne, eczema, and psoriasis can affect your confidence and quality of life. At Asha Homeopathic Clinic, we treat skin diseases from the inside out, addressing the root cause rather than just suppressing symptoms.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our natural, non-invasive approach helps your skin heal naturally and achieve lasting results.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Conditions We Treat</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Acne (all types)",
              "Eczema (all forms)",
              "Psoriasis",
              "Urticaria (hives)",
              "Vitiligo",
              "Warts and moles",
              "Hair loss and alopecia",
              "Dermatitis and allergic reactions",
              "Fungal infections",
              "Pimples and blackheads",
              "Rosacea",
              "Hyperpigmentation",
            ].map((condition, idx) => (
              <div key={idx} className="flex gap-3 p-4 bg-light rounded-lg border border-secondary/10">
                <span className="text-secondary text-xl font-bold">✓</span>
                <span className="text-gray-700">{condition}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Why Homeopathy Works for Skin</h2>
          <div className="space-y-4">
            {[
              {
                title: "Treats the Cause, Not Just Symptoms",
                desc: "Skin diseases often stem from internal imbalances. Our approach identifies and treats the root cause."
              },
              {
                title: "Strengthens Immunity",
                desc: "Homeopathic treatment boosts your immune system, helping your body fight infections naturally."
              },
              {
                title: "No Harsh Chemicals",
                desc: "Unlike conventional treatments, homeopathy uses natural remedies without corticosteroids or harsh chemicals."
              },
              {
                title: "Prevents Recurrence",
                desc: "By treating the constitutional weakness, we help prevent the disease from coming back."
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
            <div className="space-y-6">
              {[
                { step: "1", title: "Skin Analysis", desc: "Comprehensive examination of your skin condition, triggers, and impact on daily life." },
                { step: "2", title: "Constitutional Assessment", desc: "Understanding your overall health, lifestyle, and emotional factors contributing to the skin condition." },
                { step: "3", title: "Remedy Selection", desc: "Customized homeopathic medicines chosen based on your specific symptoms and constitution." },
                { step: "4", title: "Lifestyle Guidance", desc: "Diet, skin care routine, stress management, and trigger avoidance recommendations." },
                { step: "5", title: "Progress Monitoring", desc: "Regular follow-ups to assess improvement and adjust treatment as needed." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-secondary text-white font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">What to Expect</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { month: "1-2 Weeks", result: "Initial response, reduced inflammation, less itching/burning" },
              { month: "1-3 Months", result: "Visible improvement in skin appearance, healing of lesions" },
              { month: "3-6 Months", result: "Significant clearing, restoration of normal skin, prevention of new breakouts" },
            ].map((timeline, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-secondary/20 text-center">
                <h4 className="font-bold text-primary text-lg mb-2">{timeline.month}</h4>
                <p className="text-gray-700 text-sm">{timeline.result}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Skin Care Tips During Treatment</h2>
          <div className="bg-light rounded-xl p-8 border border-secondary/20 space-y-4">
            <div className="flex gap-4">
              <span className="text-2xl">🧴</span>
              <div>
                <h4 className="font-bold text-primary mb-1">Gentle Cleansing</h4>
                <p className="text-gray-700 text-sm">Use mild, natural cleansers without harsh chemicals. Avoid overwashing.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">💧</span>
              <div>
                <h4 className="font-bold text-primary mb-1">Moisturize Properly</h4>
                <p className="text-gray-700 text-sm">Use natural moisturizers suitable for your skin type. Stay hydrated by drinking adequate water.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">☀️</span>
              <div>
                <h4 className="font-bold text-primary mb-1">Sun Protection</h4>
                <p className="text-gray-700 text-sm">Use natural sunscreens and avoid excessive sun exposure, especially during peak hours.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">🍎</span>
              <div>
                <h4 className="font-bold text-primary mb-1">Diet & Nutrition</h4>
                <p className="text-gray-700 text-sm">Eat antioxidant-rich foods, avoid trigger foods, limit sugar and processed items.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Get Clear, Healthy Skin Naturally</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Don't hide your skin anymore. Let our expert homeopathic doctors help you achieve clear, beautiful skin that lasts.
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
