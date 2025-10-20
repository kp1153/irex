// app/page.js
"use client";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome to IREX PHARMACY
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Founded in 2022, Irex Pharmacy set out to be a leading Retail Medical Store and Merchant Exporter.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-blue-600 mb-3">Our Mission</h2>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• Provide High Quality, Affordable and Genuine Medicines</li>
              <li>• Create long term relationship with Customers</li>
              <li>• Achieve complete customer satisfaction</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-blue-600 mb-3">We Deal In</h2>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• Oncology Medicines</li>
              <li>• Anticancer Medicines</li>
              <li>• Transplant Medicines</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-blue-600 mb-3">Our Reach</h2>
            <p className="text-gray-700 text-sm">
              Serving clients across Uzbekistan, Iraq, Somalia, Afghanistan, Bangladesh, Nepal and more.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}