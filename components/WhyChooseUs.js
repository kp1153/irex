export default function WhyChooseUs() {
  const points = [
    "100% Genuine Medicines",
    "Licensed Pharmacy",
    "Trusted by 10+ Countries",
    "Trackable Delivery",
  ];
  return (
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
        Why Choose Us
      </h2>
      <ul className="space-y-3">
        {points.map((p, i) => (
          <li key={i} className="p-4 bg-white shadow border">
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}
