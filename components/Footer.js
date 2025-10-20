// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="text-lg font-bold mb-3">IREX PHARMACY</h3>
            <p className="text-sm text-gray-400">
              G/F, 258, Shop No – 1, Hauz Rani, Malviya Nagar, Delhi-110017
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">CONTACT</h3>
            <p className="text-sm text-gray-400">Phone: +91-9205326123</p>
            <p className="text-sm text-gray-400">
              Email: irexpharmacy@gmail.com
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">LICENSES</h3>
            <p className="text-sm text-gray-400">GST: 07AAIPQ8354P2ZS</p>
            <p className="text-sm text-gray-400">
              Drug License: RLF20DL2022000203
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-400">
            All rights reserved | Developed by{" "}
            <a
              href="https://www.web-developer-kp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 underline"
            >
              Web Developer KP
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
