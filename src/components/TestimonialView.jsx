import { staticData } from "../config/apiConfig";

export default function TestimonialView() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-[var(--primary-color)]">
        Testimonials
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {staticData.testimonials.map((t) => (
          <div key={t.id} className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="font-bold">{t.name}</h3>
            <p className="text-gray-600">{t.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
