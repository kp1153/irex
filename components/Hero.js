// components/Hero.js
export default function Hero() {
  return (
    <div
      id="home"
      className="w-full h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Trusted Global Medicine Exporter
        </h1>
        <p className="text-lg md:text-2xl text-white mb-8">
          Genuine Medicines • Fast Delivery • Best Service
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transition transform hover:scale-105"
        >
          Contact Us Now
        </a>
      </div>
    </div>
  );
}
