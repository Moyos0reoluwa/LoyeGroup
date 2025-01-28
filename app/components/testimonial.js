"use client";

import { useState } from "react";
import "animate.css";

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    feedback: "Amazing service! The team was professional and exceeded my expectations.",
    designation: "CEO, Example Inc.",
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback: "A truly wonderful experience from start to finish. Highly recommended!",
    designation: "Marketing Manager, ABC Ltd.",
  },
  {
    id: 3,
    name: "Robert Johnson",
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
    designation: "Software Engineer",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);
  const [animation, setAnimation] = useState("animate__fadeIn");

  const handleNext = () => {
    setAnimation("animate__fadeOut");
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
      setAnimation("animate__fadeIn");
    }, 300); // Match animation duration
  };

  const handlePrev = () => {
    setAnimation("animate__fadeOut");
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setAnimation("animate__fadeIn");
    }, 300); // Match animation duration
  };

  return (
    <div className="py-16 bg-gray-100">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-700 mb-6">
          What they have to say about us
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Testimonial Content */}
        <div
          className={`p-8 text-center animate__animated ${animation}`}
          key={testimonials[current].id}
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
          className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition"
          aria-label="Previous testimonial"
        >
          &larr;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition"
          aria-label="Next testimonial"
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
              setAnimation("animate__fadeOut");
              setTimeout(() => {
                setCurrent(index);
                setAnimation("animate__fadeIn");
              }, 300);
            }}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
