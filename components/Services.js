// components/Services.js
export default function Services() {
  const services = [
    {
      title: "Global Medicine Export",
      desc: "Worldwide delivery to Asia, Africa, and Gulf countries",
      icon: "🌍",
    },
    {
      title: "Genuine Pharma Supply",
      desc: "100% authentic medicines from licensed manufacturers",
      icon: "✅",
    },
    {
      title: "Fast Delivery",
      desc: "Quick and trackable shipping services",
      icon: "🚀",
    },
    {
      title: "Wholesale Supply",
      desc: "Bulk orders for hospitals and distributors",
      icon: "📦",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-indigo-700 mb-8 text-center">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <div className="text-4xl mb-3">{s.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
