"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-md">
      {/* Company Name */}
      <div className="bg-blue-600 text-white text-center py-4">
        <h1 className="text-2xl font-bold">IREX PHARMACY</h1>
        <p className="text-sm mt-1">
          Taking care of your Health and providing Genuine Medicines at the
          right time
        </p>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-6 py-4 text-sm font-medium text-gray-700">
            <li>
              <Link href="/" className="hover:text-blue-600 transition">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600 transition">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-blue-600 transition">
                PRODUCTS
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-600 transition">
                SERVICES
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600 transition">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
