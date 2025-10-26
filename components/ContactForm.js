export default function ContactForm() {
  return (
    <form className="bg-white p-6 rounded-lg shadow max-w-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" name="name" placeholder="Your name" className="p-3 border rounded" />
        <input type="email" name="email" placeholder="Your email" className="p-3 border rounded" />
      </div>

      <div className="mt-4">
        <input type="text" name="subject" placeholder="Subject" className="w-full p-3 border rounded" />
      </div>

      <div className="mt-4">
        <textarea name="message" rows="5" placeholder="Message" className="w-full p-3 border rounded"></textarea>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Send Message</button>
        <a href="tel:+919999999999" className="text-sm text-gray-600">Or call: +91 99999 99999</a>
      </div>
    </form>
  );
}
