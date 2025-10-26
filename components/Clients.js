// components/Clients.js
export default function Clients() {
  const countries = [
    "Uzbekistan",
    "Iraq",
    "Somalia",
    "Congo",
    "Afghanistan",
    "Bangladesh",
    "Nigeria",
    "Sudan",
    "Nepal",
    "Fiji",
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-indigo-700 mb-8">
        Our Global Clients
      </h2>
      <p className="text-gray-600 mb-8 text-lg">
        We proudly serve customers across multiple countries in Asia and Africa
      </p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {countries.map((c, i) => (
          <div
            key={i}
            className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition border border-gray-200"
          >
            <span className="font-semibold text-gray-800">{c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
