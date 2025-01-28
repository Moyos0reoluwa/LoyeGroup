"use client";

import { useState } from "react";
import "animate.css";

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "Alexander",
    feedback: "Amazing service! The team was professional and exceeded my expectations.",
    designation: "CEO, Peachy Academy",
  },
  {
    id: 2,
    name: "Damilare",
    feedback: "A truly wonderful experience from start to finish. Highly recommended!",
    designation: "CEO, Akonilede",
  },
  {
    id: 3,
    name: "Funmilola",
    feedback: "Top-notch quality and support. I couldn't have asked for better.",
    designation: "Entrepreneur",
  },
  {
    id: 4,
    name: "Emily Davis",
    feedback: "Everything was perfect. Will definitely come back again.",
    designation: "Freelancer",
  },
  {
    id: 5,
    name: "Michael Brown",
    feedback: "Exceptional work and great attention to detail. Thank you!",
    designation: "Product Manager",
  },
  {
    id: 6,
    name: "Sarah Wilson",
    feedback: "Impressive results delivered on time. A+ for the effort!",
    designation: "Designer",
  },
  {
    id: 7,
    name: "David Lee",
    feedback: "Their commitment to excellence is unparalleled. Highly satisfied!",
    designation: "CEO, Kevin's Workshop",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // Prevent rapid clicking

  const handleNext = () => {
    if (isAnimating) return; // Prevent rapid clicking
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    if (isAnimating) return; // Prevent rapid clicking
    setIsAnimating(true);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Handle animation end to reset the animation state and allow for the next transition
  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className="py-16 bg-gray-100">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-blue-700 mb-6">
        Our Client Testimonials
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Testimonial Content */}
        <div
          className={`p-8 text-center animate__animated animate__fadeIn`}
          key={testimonials[current].id}
          onAnimationEnd={handleAnimationEnd} // Event listener for animation end
        >
          <p className="text-lg text-gray-700 italic">"{testimonials[current].feedback}"</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800">
            {testimonials[current].name}
          </h3>
          <p className="text-gray-500">{testimonials[current].designation}</p>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-1 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition"
          aria-label="Previous testimonial"
          disabled={isAnimating} 
        >
          &larr;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition"
          aria-label="Next testimonial"
          disabled={isAnimating} 
        >
          &rarr;
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isAnimating) return; 
              setIsAnimating(true);
              setCurrent(index);
            }}
            className={`w-3 h-3 rounded-full ${index === current ? "bg-gray-800" : "bg-gray-400"}`}
            disabled={isAnimating} // Disable dot during animation
          />
        ))}
      </div>
    </div>
  );
}
