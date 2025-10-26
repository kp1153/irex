"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggle = () => setMobileOpen(!mobileOpen);
  const close = () => setMobileOpen(false);

  return (
    <header className="absolute top-6 left-0 w-full z-50">
      {/* Logo Center */}
      <div className="flex justify-center">
        <Link href="#home" onClick={close} className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="IREX Pharmacy"
            className="w-14 h-14 object-cover"
          />
          <span className="text-2xl font-bold text-indigo-700">
            IREX Pharmacy
          </span>
        </Link>
      </div>

      {/* Desktop Menu Below Logo */}
      <nav className="hidden md:flex justify-center gap-8 mt-3 text-sm font-semibold">
        <Link href="#home" style={{ color: "#FF0000" }}>
          Home
        </Link>
        <Link href="#about" style={{ color: "#FF7F00" }}>
          About
        </Link>
        <Link href="#products" style={{ color: "#FFFF00" }}>
          Products
        </Link>
        <Link href="#services" style={{ color: "#00FF00" }}>
          Services
        </Link>
        <Link href="#why-us" style={{ color: "#0000FF" }}>
          Why Us
        </Link>
        <Link href="#team" style={{ color: "#4B0082" }}>
          Team
        </Link>
        <Link href="#clients" style={{ color: "#8B00FF" }}>
          Clients
        </Link>
        <Link href="#contact" style={{ color: "#FF1493" }}>
          Contact
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <div className="flex justify-center md:hidden mt-2">
        <button onClick={toggle} className="border px-4 py-2">
          MENU
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white mt-2 px-6 py-4 flex flex-col items-center gap-4 text-sm font-semibold shadow">
          <Link href="#home" style={{ color: "#FF0000" }} onClick={close}>
            Home
          </Link>
          <Link href="#about" style={{ color: "#FF7F00" }} onClick={close}>
            About
          </Link>
          <Link href="#products" style={{ color: "#FFFF00" }} onClick={close}>
            Products
          </Link>
          <Link href="#services" style={{ color: "#00FF00" }} onClick={close}>
            Services
          </Link>
          <Link href="#why-us" style={{ color: "#0000FF" }} onClick={close}>
            Why Us
          </Link>
          <Link href="#team" style={{ color: "#4B0082" }} onClick={close}>
            Team
          </Link>
          <Link href="#clients" style={{ color: "#8B00FF" }} onClick={close}>
            Clients
          </Link>
          <Link href="#contact" style={{ color: "#FF1493" }} onClick={close}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
