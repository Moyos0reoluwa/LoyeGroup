"use client"

import React, { useState } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setStatus("Thank you for your message!");
          form.reset();
        } else {
          setStatus("Oops! There was a problem submitting your form.");
        }
      })
      .catch(() => {
        setStatus("Oops! There was a problem submitting your form.");
      });
  };

  return (
    <section className="bg-gray-100 py-16" id="contact">
      <div className="container mx-auto text-center px-6">
        {/* Header Section */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-green-500 mb-6">
          Contact Us
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
          We’d love to hear from you! Whether you have questions, feedback, or need assistance, feel free to get in touch.
        </p>

        {/* Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {/* Phone */}
          <div className="flex items-center justify-center bg-white p-6 shadow-md rounded-lg">
            <FaPhone className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-4" />
            <span className="text-sm sm:text-base lg:text-lg text-gray-700 font-sans">(+234)705-053-9964</span>
          </div>

          {/* Email */}
          <div className="flex items-center justify-center bg-white p-6 shadow-md rounded-lg">
            <FaEnvelope className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-4" />
            <span className="text-sm sm:text-base lg:text-lg text-gray-700 font-sans">contact@loyegroup.com</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 sm:p-8 shadow-md rounded-lg max-w-xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-semibold text-green-500 mb-6">
            Send us a Message
          </h3>
          <form
            id="contact-form"
            action="https://formspree.io/f/mbllowje"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm sm:text-lg font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-2 sm:p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm sm:text-lg font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-2 sm:p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm sm:text-lg font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full p-2 sm:p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 sm:py-3 bg-blue-600 text-white text-sm sm:text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all"
            >
              Send Message
            </button>
          </form>
          <p className="text-sm text-red-600 mt-4">{status}</p>
        </div>
      </div>
    </section>
  );
}
