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
      <h2 className="text-3xl font-bold text-indigo-700 mb-6">
        Our Global Clients
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {countries.map((c, i) => (
          <div key={i} className="p-4 bg-white border shadow">
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}
