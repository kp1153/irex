// components/WhyChooseUs.js
export default function WhyChooseUs() {
  const points = [
    {
      title: "100% Genuine Medicines",
      desc: "All medicines sourced directly from authorized manufacturers",
    },
    {
      title: "Licensed Pharmacy",
      desc: "Fully licensed with Drug License RLF20DL2022000203",
    },
    {
      title: "Trusted by 10+ Countries",
      desc: "Serving clients across Asia, Africa, and Gulf regions",
    },
    {
      title: "Trackable Delivery",
      desc: "Real-time tracking for all international shipments",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-indigo-700 mb-8 text-center">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {points.map((p, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-indigo-600"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">{p.title}</h3>
            <p className="text-gray-600">{p.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center bg-indigo-50 p-8 rounded-lg">
        <h3 className="text-2xl font-bold text-indigo-700 mb-4">
          Our Associations
        </h3>
        <p className="text-gray-700">
          We work with leading pharmaceutical companies including Cipla, Pfizer,
          AstraZeneca, GSK, Dr. Reddy's, Zydus, Roche, and many more.
        </p>
      </div>
    </div>
  );
}
