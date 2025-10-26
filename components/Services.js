export default function Services() {
  const services = [
    "Global Medicine Export",
    "Genuine Pharma Supply",
    "Fast Delivery",
    "Wholesale Supply",
  ];
  return (
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((s, i) => (
          <div key={i} className="p-5 border bg-white shadow">
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}
