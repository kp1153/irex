export default function Products() {
  const list = [
    "Oncology Medicines",
    "Anti-Cancer Medicines",
    "Transplant Medicines",
    "Life Saving Medicines",
  ];
  return (
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
        Our Products
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {list.map((item, i) => (
          <li key={i} className="p-4 border shadow bg-white">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
