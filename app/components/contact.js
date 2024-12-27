import { FaTwitter, FaInstagram, FaFacebook, FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin } from 'react-icons/fa'; // Importing icons from react-icons

export default function Contact() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-blue-600">Contact Us</h2>
        <p className="text-lg sm:text-xl mb-12 text-gray-700">
          We’d love to hear from you! Whether you have questions, feedback, or need assistance, feel free to get in touch.
        </p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4 mb-12">
          {/* Phone */}
          <div className="flex items-center justify-center bg-white p-6 shadow-md rounded-lg">
            <FaPhone className="w-8 h-8 text-blue-600 mr-4" />
            <span className="text-lg text-gray-700">07050539964</span>
          </div>

          {/* Email */}
          <div className="flex items-center justify-center bg-white p-6 shadow-md rounded-lg">
            <FaEnvelope className="w-8 h-8 text-blue-600 mr-4" />
            <span className="text-lg text-gray-700">contact@loyegroup.com</span>
          </div>

          {/* Social Media */}
          <div className="flex justify-center space-x-6">
            <a href="https://twitter.com/loyegroup" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-8 h-8 text-black hover:text-blue-700" />
            </a>
            <a href="https://www.instagram.com/loyegroup" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-8 h-8 text-black hover:text-blue-700" />
            </a>
            <a href="https://www.facebook.com/loyegroup" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-8 h-8 text-black hover:text-blue-700" />
            </a>
            <a href="https://wa.me/07050539964" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="w-8 h-8 text-black hover:text-green-600" />
            </a>
            <a href="https://www.linkedin.com/company/loyegroup" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-8 h-8 text-black hover:text-blue-700" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 shadow-md rounded-lg max-w-xl mx-auto">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Send us a Message</h3>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows="4"
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button type="submit" className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all">
              Send Message
            </button>
          </form>
        </div>

        {/* Footer with Business Hours */}
        <div className="mt-12 text-gray-600">
          <h4 className="text-xl font-semibold">Business Hours</h4>
          <p className="text-lg">Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p className="text-lg">Saturday: 10:00 AM - 2:00 PM</p>
        </div>
      </div>
    </section>
  );
}
