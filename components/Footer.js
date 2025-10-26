// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-indigo-400">
              IREX PHARMACY
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              G/F, 258, Shop No – 1, Hauz Rani,
              <br />
              Malviya Nagar, Delhi-110017, INDIA
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-indigo-400">CONTACT</h3>
            <p className="text-gray-400 text-sm mb-2">Phone: +91-9205326123</p>
            <p className="text-gray-400 text-sm mb-2">
              Email: irexpharmacy@gmail.com
            </p>
            <p className="text-gray-400 text-sm">
              Website: www.irexpharmacy.com
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-indigo-400">LICENSES</h3>
            <p className="text-gray-400 text-sm mb-2">GST: 07AAIPQ8354P2ZS</p>
            <p className="text-gray-400 text-sm mb-2">
              Drug License: RLF20DL2022000203
            </p>
            <p className="text-gray-400 text-sm">IEC CODE: AAIPQ8354P</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2025 IREX PHARMACY. All rights reserved | Developed by{" "}
            <a
              href="https://www.web-developer-kp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 underline transition"
            >
              Web Developer KP
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
