// components/About.js
export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-indigo-700 mb-8 text-center">
        About Us
      </h2>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Founded in 2022,{" "}
          <span className="font-bold text-indigo-600">IREX PHARMACY</span> is a
          trusted retailer and merchant exporter of life-saving medicines. We
          are bound to serve our clients and customers with full zeal,
          dedication and passion.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          We specialize in supplying{" "}
          <span className="font-semibold">
            Oncology, Anti-Cancer, and Transplant medicines
          </span>{" "}
          across{" "}
          <span className="font-semibold">Asia, Africa and Gulf countries</span>
          .
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="text-center p-6 bg-indigo-50 rounded-lg">
            <h3 className="font-bold text-xl text-indigo-700 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600 text-sm">
              Provide high quality, affordable and genuine medicines
            </p>
          </div>
          <div className="text-center p-6 bg-indigo-50 rounded-lg">
            <h3 className="font-bold text-xl text-indigo-700 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-600 text-sm">
              Taking care of your health and providing genuine medicines at the
              right time
            </p>
          </div>
          <div className="text-center p-6 bg-indigo-50 rounded-lg">
            <h3 className="font-bold text-xl text-indigo-700 mb-2">Our Goal</h3>
            <p className="text-gray-600 text-sm">
              Achieve complete customer satisfaction through dedication
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
