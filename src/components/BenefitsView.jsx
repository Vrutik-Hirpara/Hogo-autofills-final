export default function BenefitsView() {
  return (
    <section id="benefits" className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-[var(--primary-color)]">
        Our Benefits
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          "UV Protection",
          "Heat Reduction",
          "Privacy Control",
          "Energy Saving",
          "Glare Reduction",
          "Interior Protection",
        ].map((item) => (
          <div
            key={item}
            className="p-6 bg-white rounded-xl shadow-md border-2 border-transparent hover:border-[var(--primary-color)] hover:-translate-y-2 transition-all"
          >
            <h3 className="text-lg font-bold mb-2 text-[var(--primary-color)]">
              {item}
            </h3>
            <p className="text-gray-600">
              High-quality film that enhances comfort and safety.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
