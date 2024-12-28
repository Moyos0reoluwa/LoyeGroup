import {
    FaTwitter,
    FaInstagram,
    FaFacebook,
    FaLinkedin,
    FaWhatsapp,
  } from "react-icons/fa";
  
  export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h4 className="text-2xl sm:text-3xl font-semibold mb-4 text-blue-500 text-center md:text-left">
                Loye Group
              </h4>
              <p className="text-base sm:text-lg mb-4 text-center md:text-left">
                Your trusted partner for IT services, software engineering, and
                professional solutions.
              </p>
              <p className="text-sm sm:text-base text-center md:text-left">
                123 Business Street, City, Country
              </p>
              <p className="text-sm sm:text-base text-center md:text-left">
                Email: contact@loyegroup.com | Phone: 07050539964
              </p>
            </div>
  
            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start">
              <h5 className="font-semibold text-lg sm:text-xl mb-4">Quick Links</h5>
              <ul>
                <li>
                  <a
                    href="/about"
                    className="hover:text-blue-500 text-sm sm:text-base block"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="hover:text-blue-500 text-sm sm:text-base block"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-blue-500 text-sm sm:text-base block"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Social Media */}
            <div className="flex flex-col items-center">
              <h5 className="font-semibold text-lg sm:text-xl mb-4">Follow Us</h5>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://twitter.com/loyegroup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white hover:text-blue-400" />
                </a>
                <a
                  href="https://www.instagram.com/loyegroup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white hover:text-pink-500" />
                </a>
                <a
                  href="https://www.facebook.com/loyegroup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white hover:text-blue-600" />
                </a>
                <a
                  href="https://www.linkedin.com/company/loyegroup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white hover:text-blue-700" />
                </a>
                <a
                  href="https://wa.me/07050539964"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white hover:text-green-500" />
                </a>
              </div>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="mt-4 text-xs sm:text-sm text-center">
            <p>© {new Date().getFullYear()} Loye Group. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  