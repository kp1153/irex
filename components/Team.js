export default function Team() {
  const team = [
    { name: "Raza Quadir", role: "Proprietor" },
    { name: "Mohammad Tareeque Khurshid", role: "Pharmacist" },
    { name: "Dr. Mohammad Eisa", role: "International Marketing Head" },
    { name: "Abdul Basit", role: "Sales Executive" }
  ];
  return (
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {team.map((member, index) => (
          <div key={index} className="p-5 shadow bg-white border">
            <h3 className="font-bold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
