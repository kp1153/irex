export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
        Contact Us
      </h2>
      <div className="bg-white p-6 shadow border">
        <p>
          <b>Address:</b> G/F, 258, Shop No – 1, Hauz Rani, Malviya Nagar,
          Delhi-110017, INDIA
        </p>
        <p>
          <b>Phone:</b> +91-9205326123
        </p>
        <p>
          <b>Email:</b> irexpharmacy@gmail.com
        </p>
        <form className="mt-6 grid grid-cols-1 gap-4">
          <input type="text" placeholder="Your Name" className="border p-3" />
          <input type="email" placeholder="Your Email" className="border p-3" />
          <textarea
            placeholder="Message"
            className="border p-3 h-32"
          ></textarea>
          <button className="bg-indigo-600 text-white py-3">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
