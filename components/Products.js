// components/Products.js
export default function Products() {
  const products = [
    {
      title: "Oncology Medicines",
      desc: "Comprehensive range of cancer treatment medications",
    },
    {
      title: "Anti-Cancer Medicines",
      desc: "High-quality chemotherapy and targeted therapy drugs",
    },
    {
      title: "Transplant Medicines",
      desc: "Immunosuppressants and post-transplant care medications",
    },
    {
      title: "Life Saving Medicines",
      desc: "Critical care and emergency pharmaceutical supplies",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-indigo-700 mb-8 text-center">
        Our Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border-l-4 border-indigo-600"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
