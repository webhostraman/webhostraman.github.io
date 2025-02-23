import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-2xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mt-2">
          Feel free to reach out! We’d love to hear from you.
        </p>

        {/* Contact Info */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center space-x-3">
            <Mail className="text-blue-600" />
            <p className="text-gray-700">support@cods.site</p>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="text-blue-600" />
            <p className="text-gray-700">+91 98765 43210</p>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="text-blue-600" />
            <p className="text-gray-700">Mandsaur, India</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="mt-6">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition"
          >
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
