export default function Hero() {
  return (
    <div
      id="home"
      className="w-full h-[90vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="bg-black/50 p-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Trusted Global Medicine Exporter
        </h1>
        <p className="text-lg md:text-xl text-white mt-4">
          Genuine Medicines • Fast Delivery • Best Service
        </p>
        <a
          href="#contact"
          className="inline-block mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
