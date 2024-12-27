import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-16">
      <div className="container mx-auto text-center">
        {/* Company Info */}
        <div className="mb-8">
          <h4 className="text-3xl font-semibold mb-2 text-blue-500">Loye Group</h4>
          <p className="text-lg mb-4">Your trusted partner for IT services, software engineering, and professional solutions.</p>
          <p className="text-sm">123 Business Street, City, Country</p>
          <p className="text-sm">Email: contact@loyegroup.com | Phone: 07050539964</p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h5 className="font-semibold text-lg mb-4">Quick Links</h5>
            <ul>
              <li><a href="/about" className="hover:text-blue-500">About Us</a></li>
              <li><a href="/services" className="hover:text-blue-500">Services</a></li>
              <li><a href="/contact" className="hover:text-blue-500">Contact Us</a></li>
              <li><a href="/privacy" className="hover:text-blue-500">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-lg mb-4">Services</h5>
            <ul>
              <li><a href="/services/it" className="hover:text-blue-500">IT Services</a></li>
              <li><a href="/services/software-engineering" className="hover:text-blue-500">Software Engineering</a></li>
              <li><a href="/services/accounting" className="hover:text-blue-500">Accounting & Finance</a></li>
              <li><a href="/services/marketing" className="hover:text-blue-500">Marketing</a></li>
            </ul>
          </div>
          {/* Social Media Links */}
          <div>
            <h5 className="font-semibold text-lg mb-4">Follow Us</h5>
            <div className="flex justify-center space-x-6">
              <a href="https://twitter.com/loyegroup" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="w-8 h-8 text-white hover:text-blue-400" />
              </a>
              <a href="https://www.instagram.com/loyegroup" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-8 h-8 text-white hover:text-pink-500" />
              </a>
              <a href="https://www.facebook.com/loyegroup" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="w-8 h-8 text-white hover:text-blue-600" />
              </a>
              <a href="https://www.linkedin.com/company/loyegroup" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-8 h-8 text-white hover:text-blue-700" />
              </a>
              <a href="https://wa.me/07050539964" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="w-8 h-8 text-white hover:text-green-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Signup (optional) */}
        <div className="mb-8">
          <h5 className="font-semibold text-lg mb-4">Subscribe to Our Newsletter</h5>
          <form className="flex justify-center">
            <input
              type="email"
              placeholder="Your email"
              className="p-3 w-80 rounded-l-lg focus:outline-none"
            />
            <button type="submit" className="bg-blue-600 text-white p-3 rounded-r-lg hover:bg-blue-700">Subscribe</button>
          </form>
        </div>

        {/* Copyright */}
        <div className="text-sm">
          <p>© {new Date().getFullYear()} Loye Group. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
