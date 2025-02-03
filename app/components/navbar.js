"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import "animate.css";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaTwitter, FaHome, FaCogs, FaInfoCircle, FaEnvelope } from "react-icons/fa";

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
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-green-500 text-white fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
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
            } fixed top-0 right-0 w-2/3 h-full bg-green-500 text-white transform transition-all duration-300 ease-in-out z-50 animate__animated ${
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
            <ul className="space-y-0 py-20 px-4 text-center">
              <li className="border-b border-white last:border-b-0">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="py-4 px-4 text-lg sm:text-xl md:text-2xl flex items-center justify-center text-white hover:bg-blue-500 rounded-lg transition-all duration-200"
                >
                  <FaHome className="mr-3" /> Home
                </Link>
              </li>
              <li className="border-b border-white last:border-b-0">
                <Link
                  href="#services"
                  onClick={() => setIsOpen(false)}
                  className="py-4 px-4 text-lg sm:text-xl md:text-2xl flex items-center justify-center text-white hover:bg-blue-500 rounded-lg transition-all duration-200"
                >
                  <FaCogs className="mr-3" /> Services
                </Link>
              </li>
              <li className="border-b border-white last:border-b-0">
                <Link
                  href="#about"
                  onClick={() => setIsOpen(false)}
                  className="py-4 px-4 text-lg sm:text-xl md:text-2xl flex items-center justify-center text-white hover:bg-blue-500 rounded-lg transition-all duration-200"
                >
                  <FaInfoCircle className="mr-3" /> About Us
                </Link>
              </li>
              <li className="border-b border-white last:border-b-0">
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="py-4 px-4 text-lg sm:text-xl md:text-2xl flex items-center justify-center text-white hover:bg-blue-500 rounded-lg transition-all duration-200"
                >
                  <FaEnvelope className="mr-3" /> Contact
                </Link>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="mt-32 flex justify-center space-x-6">
              <Link href="https://www.instagram.com/loyegroup?igsh=cnMwY2YzZG90dnlt " target="_blank" className="hover:text-pink-500 transition-colors duration-200">
                <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
              </Link>
              <Link href="https://wa.me" target="_blank" className="hover:text-green-500 transition-colors duration-200">
                <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
              </Link>
              <Link href="https://www.linkedin.com/in/loye-group-55911634a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="hover:text-blue-500 transition-colors duration-200">
                <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="hover:text-blue-400 transition-colors duration-200">
                <FaTwitter className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
              </Link>
            </div>

            
            {/* Slogan */}
            <p className="text-[16px] sm:text-[22px] md:text-[25px] font-medium italic animate__animated animate__fadeInUp pt-36 px-3">
              Where Tech and Finance Meet...
            </p>

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
                href="#services"
                className="block py-2 px-4 text-lg sm:text-xl md:text-2xl text-white hover:bg-blue-500 rounded-lg"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="block py-2 px-4 text-lg sm:text-xl md:text-2xl text-white hover:bg-blue-500 rounded-lg"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
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
