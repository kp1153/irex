// components/Team.js
export default function Team() {
  const team = [
    { name: "Raza Quadir", role: "Proprietor", icon: "👤" },
    { name: "Mohammad Tareeque Khurshid", role: "Pharmacist", icon: "💊" },
    {
      name: "Dr. Mohammad Eisa",
      role: "International Marketing Head",
      icon: "🌐",
    },
    { name: "Abdul Basit", role: "Sales Executive", icon: "📊" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-indigo-700 mb-8">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <div className="text-5xl mb-4">{member.icon}</div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">
              {member.name}
            </h3>
            <p className="text-indigo-600 font-semibold">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
