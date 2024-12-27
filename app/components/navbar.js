"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing the hamburger and close (X) icons from react-icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Reference to the menu for detecting clicks outside

  // Close the menu if the user clicks outside of it
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

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">Loye Group</Link>
        </div>

        {/* Hamburger Menu (Slide-In from Right) */}
        <div className="lg:hidden relative">
          <button
            onClick={() => setIsOpen(!isOpen)} // Toggle menu visibility
            className="focus:outline-none"
            aria-label="Toggle navigation"
          >
            {/* Using the refined icon from react-icons */}
            <FaBars className="h-8 w-8 text-white" />
          </button>

          {/* Slide-In Menu */}
          <div
            ref={menuRef} // Attach the reference to the menu div
            className={`${
              isOpen ? "translate-x-0" : "translate-x-full"
            } fixed top-0 right-0 w-64 h-full bg-blue-600 bg-opacity-90 text-white transform transition-all duration-300 ease-in-out z-10`}
          >
            {/* Close (X) Icon */}
            <button
              onClick={() => setIsOpen(false)} // Close the menu
              className="absolute top-4 right-4 text-2xl text-white"
              aria-label="Close menu"
            >
              <FaTimes />
            </button>

            <ul className="space-y-6 py-8 px-4 text-center">
              <li>
                <Link
                  href="/"
                  className="block py-3 px-4 text-white hover:bg-blue-500 rounded-lg transition-all duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="../components/about"
                  className="block py-3 px-4 text-white hover:bg-blue-500 rounded-lg transition-all duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block py-3 px-4 text-white hover:bg-blue-500 rounded-lg transition-all duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-3 px-4 text-white hover:bg-blue-500 rounded-lg transition-all duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center space-x-6 text-center">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="block py-2 px-4 text-white hover:bg-blue-500 rounded-lg"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-4 text-white hover:bg-blue-500 rounded-lg"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block py-2 px-4 text-white hover:bg-blue-500 rounded-lg"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-4 text-white hover:bg-blue-500 rounded-lg"
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
