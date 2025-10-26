// components/Contact.js
"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_hy60gy6",
        "template_snsau0d",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          subject: `New Inquiry from ${formData.name} - IREX Pharmacy`,
        },
        "yF3fvDRlO8cZIj5-V"
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-indigo-700 mb-8 text-center">
        Contact Us
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="bg-indigo-700 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg mb-1">Address</h4>
              <p className="text-indigo-100">
                G/F, 258, Shop No – 1, Hauz Rani,
                <br />
                Malviya Nagar, Delhi-110017, INDIA
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Phone</h4>
              <p className="text-indigo-100">+91-9205326123</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Email</h4>
              <p className="text-indigo-100">irexpharmacy@gmail.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Licenses</h4>
              <p className="text-indigo-100 text-sm">GST: 07AAIPQ8354P2ZS</p>
              <p className="text-indigo-100 text-sm">
                Drug License: RLF20DL2022000203
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={loading}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-600 focus:border-transparent disabled:bg-gray-100"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-600 focus:border-transparent disabled:bg-gray-100"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={loading}
                rows="5"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-600 focus:border-transparent disabled:bg-gray-100"
                placeholder="Enter your message"
              ></textarea>
            </div>

            {status === "success" && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                Message sent successfully! We'll contact you soon.
              </div>
            )}

            {status === "error" && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                Failed to send message. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition disabled:bg-indigo-400 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
