// components/Navbar.js
"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggle = () => setMobileOpen(!mobileOpen);
  const close = () => setMobileOpen(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Mobile First - Logo & Hamburger */}
        <div className="flex items-center justify-between">
          <Link
            href="#home"
            onClick={close}
            className="flex items-center gap-2"
          >
            <img
              src="/logo.jpg"
              alt="IREX Pharmacy"
              className="w-10 h-10 object-cover rounded-full"
            />
            <span className="text-lg font-bold text-indigo-700">
              IREX PHARMACY
            </span>
          </Link>

          {/* Hamburger Menu - Mobile Only */}
          <button
            onClick={toggle}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className="w-6 h-0.5 bg-gray-800 block rounded"></span>
            <span className="w-6 h-0.5 bg-gray-800 block rounded"></span>
            <span className="w-6 h-0.5 bg-gray-800 block rounded"></span>
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 text-sm font-semibold">
            <Link
              href="#home"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              About
            </Link>
            <Link
              href="#products"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Products
            </Link>
            <Link
              href="#services"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Services
            </Link>
            <Link
              href="#why-us"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Why Us
            </Link>
            <Link
              href="#team"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Team
            </Link>
            <Link
              href="#clients"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Clients
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <nav className="md:hidden mt-4 pb-2 flex flex-col gap-3 text-sm font-semibold border-t pt-4">
            <Link
              href="#home"
              className="text-gray-700 hover:text-indigo-600 py-2"
              onClick={close}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-indigo-600 py-2"
              onClick={close}
            >
              About
            </Link>
            <Link
              href="#products"
              className="text-gray-700 hover:text-indigo-600 py-2"
              onClick={close}
            >
              Products
            </Link>
            <Link
              href="#services"
              className="text-gray-700 hover:text-indigo-600 py-2"
              onClick={close}
            >
              Services
            </Link>
            <Link
              href="#why-us"
              className="text-gray-700 hover:text-indigo-600 py-2"
              onClick={close}
            >
              Why Us
            </Link>
            <Link
              href="#team"
              className="text-gray-700 hover:text-indigo-600 py-2"
              onClick={close}
            >
              Team
            </Link>
            <Link
              href="#clients"
              className="text-gray-700 hover:text-indigo-600 py-2"
              onClick={close}
            >
              Clients
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-indigo-600 py-2"
              onClick={close}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
