"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import "animate.css"; 
import { FaInstagram, FaWhatsapp, FaLinkedin, FaTwitter } from "react-icons/fa";

const HamburgerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-blue-600 text-white fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-opacity-100" : "bg-opacity-0"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-lg sm:text-2xl md:text-3xl font-bold">
          <Link href="/">
            <Image 
              src="/loyeLogoWhite.png" 
              alt="Loye Group" 
              width={70}
              height={20}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="focus:outline-none p-2 rounded-md hover:bg-blue-500 transition-all duration-300 z-20"
          >
            {isOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>

          {/* Slide-In Menu */}
          <div
            id="mobile-menu"
            ref={menuRef}
            className={`${
              isOpen ? "translate-x-0" : "translate-x-full"
            } fixed top-0 right-0 w-64 h-full bg-blue-600 text-white transform transition-all duration-300 ease-in-out z-50 animate__animated ${
              isOpen ? "animate__slideInRight" : "animate__slideOutRight"
            }`}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-md z-20 hover:bg-blue-500 transition-all duration-300"
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
            <ul className="space-y-6 py-8 px-4 text-center">
              <li>
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-lg sm:text-xl md:text-2xl text-white hover:bg-blue-500 rounded-lg transition-all duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#services" 
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-lg sm:text-xl md:text-2xl text-white hover:bg-blue-500 rounded-lg transition-all duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#about"  
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-lg sm:text-xl md:text-2xl text-white hover:bg-blue-500 rounded-lg transition-all duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-lg sm:text-xl md:text-2xl text-white hover:bg-blue-500 rounded-lg transition-all duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="mt-10 flex justify-center space-x-6">
              <Link href="https://www.instagram.com" target="_blank" className="hover:text-pink-500 transition-colors duration-200">
                <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
              </Link>
              <Link href="https://wa.me" target="_blank" className="hover:text-green-500 transition-colors duration-200">
                <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
              </Link>
              <Link href="https://www.linkedin.com" target="_blank" className="hover:text-blue-500 transition-colors duration-200">
                <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="hover:text-blue-400 transition-colors duration-200">
                <FaTwitter className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="block py-2 px-4 text-lg sm:text-xl md:text-2xl text-white hover:bg-blue-500 rounded-lg"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services" 
                className="block py-2 px-4 text-lg sm:text-xl md:text-2xl text-white hover:bg-blue-500 rounded-lg"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about" 
                className="block py-2 px-4 text-lg sm:text-xl md:text-2xl text-white hover:bg-blue-500 rounded-lg"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-4 text-lg sm:text-xl md:text-2xl text-white hover:bg-blue-500 rounded-lg"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
