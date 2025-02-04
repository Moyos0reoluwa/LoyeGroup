import Link from "next/link";
import {
  CloudIcon,
  CodeBracketIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  MegaphoneIcon,
  CalculatorIcon,
} from "@heroicons/react/24/outline";
import { FaArrowRight } from "react-icons/fa";  // Importing the arrow icon from react-icons
import 'animate.css'; // Importing Animate.css

export default function Services() {
  return (
    <section className="bg-gray-700 py-16" id="services">
      <div className="container mx-auto px-6 text-center animate__animated animate__fadeIn">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-green-500 mb-6">
          Our Services
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-white max-w-3xl mx-auto mb-12" style={{ fontSize: '18px' }}>
          At Loye Group, we specialize in delivering tailored IT solutions, cutting-edge software engineering, and expert professional services designed to drive business success.
          Discover our diverse service offerings, strategically crafted to elevate and empower your organization.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* IT Services */}
          <div className="p-8 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <CloudIcon className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">IT Services</h3>
            <p className="text-base text-gray-600 mb-6" style={{ fontSize: '18px' }}>
              We offer cutting-edge IT solutions that optimize your business operations and ensure secure, scalable infrastructure.
            </p>
            <div className="flex justify-center mt-4">
              <Link
                href="https://www.linkedin.com/in/loye-group-55911634a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-all"
              >
                Learn More
                <FaArrowRight className="ml-2 text-blue-600" />
              </Link>
            </div>
          </div>

          {/* UI/UX Design */}
          <div className="p-8 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <CurrencyDollarIcon className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">UI/UX Design</h3>
            <p className="text-base text-gray-600 mb-6" style={{ fontSize: '18px' }}>
            Intuitive interfaces, crafted for seamless user experiences, elevating your digital presence to new heights.
            </p>
            <div className="flex justify-center mt-4">
              <Link
                href="https://www.linkedin.com/in/loye-group-55911634a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-all"
              >
                Learn More
                <FaArrowRight className="ml-2 text-blue-600" />
              </Link>
            </div>
          </div>

          {/* Software Engineering */}
          <div className="p-8 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <CodeBracketIcon className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">Software Engineering</h3>
            <p className="text-base text-gray-600 mb-6" style={{ fontSize: '18px' }}>
              Our custom software solutions are designed to meet your unique business needs, from development to deployment.
            </p>
            <div className="flex justify-center mt-4">
              <Link
                href="https://www.linkedin.com/in/loye-group-55911634a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-all"
              >
                Learn More
                <FaArrowRight className="ml-2 text-blue-600" />
              </Link>
            </div>
          </div>

          {/* Graphics Design */}
          <div className="p-8 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <CurrencyDollarIcon className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">Graphics Design</h3>
            <p className="text-base text-gray-600 mb-6" style={{ fontSize: '18px' }}>
            Creative visuals, tailored for your brand’s unique identity, to make you stand out.
            </p>
            <div className="flex justify-center mt-4">
              <Link
                href="https://www.linkedin.com/in/loye-group-55911634a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-all"
              >
                Learn More
                <FaArrowRight className="ml-2 text-blue-600" />
              </Link>
            </div>
          </div>

          {/* Accounting & Financial Services */}
          <div className="p-8 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <CurrencyDollarIcon className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">Accounting & Financial Services</h3>
            <p className="text-base text-gray-600 mb-6" style={{ fontSize: '18px' }}>
              We provide expert accounting, auditing, and financial analysis services to help businesses make informed decisions.
            </p>
            <div className="flex justify-center mt-4">
              <Link
                href="https://www.linkedin.com/in/loye-group-55911634a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-all"
              >
                Learn More
                <FaArrowRight className="ml-2 text-blue-600" />
              </Link>
            </div>
          </div>

          {/* Audit & Compliance */}
          <div className="p-8 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <ShieldCheckIcon className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">Audit & Compliance</h3>
            <p className="text-base text-gray-600 mb-6" style={{ fontSize: '18px' }}>
              Our audit and compliance services ensure your business adheres to industry standards and regulations, providing you with peace of mind.
            </p>
            <div className="flex justify-center mt-4">
              <Link
                href="https://www.linkedin.com/in/loye-group-55911634a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-all"
              >
                Learn More
                <FaArrowRight className="ml-2 text-blue-600" />
              </Link>
            </div>
          </div>

          {/* Marketing Services */}
          <div className="p-8 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <MegaphoneIcon className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">Marketing Services</h3>
            <p className="text-base text-gray-600 mb-6" style={{ fontSize: '18px' }}>
              Our marketing services help you connect with your audience through targeted strategies and data-driven insights.
            </p>
            <div className="flex justify-center mt-4">
              <Link
                href="https://www.linkedin.com/in/loye-group-55911634a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-all"
              >
                Learn More
                <FaArrowRight className="ml-2 text-blue-600" />
              </Link>
            </div>
          </div>

          {/* Financial Analysis */}
          <div className="p-8 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <CalculatorIcon className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">Financial Analysis</h3>
            <p className="text-base text-gray-600 mb-6" style={{ fontSize: '18px' }}>
              We provide in-depth financial analysis and insights to help businesses make strategic financial decisions.
            </p>
            <div className="flex justify-center mt-4">
              <Link
                href="https://www.linkedin.com/in/loye-group-55911634a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-all"
              >
                Learn More
                <FaArrowRight className="ml-2 text-blue-600" />
              </Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white text-sm sm:text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all"
          >
            Get in Touch with Us
          </Link>
        </div>
      </div>
    </section>
  );
}
