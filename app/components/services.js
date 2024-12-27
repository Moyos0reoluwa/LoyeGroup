// src/components/Services.js
import Link from "next/link";
import { CloudIcon, CodeBracketIcon, CurrencyDollarIcon, ShieldCheckIcon, MegaphoneIcon, CalculatorIcon } from '@heroicons/react/24/outline'; // Updated Heroicons v2.2.0 import

export default function Services() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-blue-600">Our Services</h2>
        <p className="text-lg sm:text-xl mb-12 text-gray-700">
          At Loye Group, we provide comprehensive IT solutions, software engineering, and professional services that help businesses thrive. 
          Explore the wide range of services we offer to empower your organization.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
          {/* IT Services */}
          <div className="p-8 bg-gray-100 shadow-md rounded-lg transition-all hover:shadow-xl">
            <CloudIcon className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">IT Services</h3>
            <p className="text-lg text-gray-600 mb-6">
              We offer cutting-edge IT solutions that optimize your business operations and ensure secure, scalable infrastructure.
            </p>
            <Link href="/services/it" className="inline-block text-blue-600 font-semibold hover:text-blue-700 transition-all">
              Learn More &rarr;
            </Link>
          </div>

          {/* Software Engineering */}
          <div className="p-8 bg-gray-100 shadow-md rounded-lg transition-all hover:shadow-xl">
            <CodeBracketIcon className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Software Engineering</h3>
            <p className="text-lg text-gray-600 mb-6">
              Our custom software solutions are designed to meet your unique business needs, from development to deployment.
            </p>
            <Link href="/services/software-engineering" className="inline-block text-blue-600 font-semibold hover:text-blue-700 transition-all">
              Learn More &rarr;
            </Link>
          </div>

          {/* Accounting & Financial Services */}
          <div className="p-8 bg-gray-100 shadow-md rounded-lg transition-all hover:shadow-xl">
            <CurrencyDollarIcon className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Accounting & Financial Services</h3>
            <p className="text-lg text-gray-600 mb-6">
              We provide expert accounting, auditing, and financial analysis services to help businesses make informed decisions.
            </p>
            <Link href="/services/accounting" className="inline-block text-blue-600 font-semibold hover:text-blue-700 transition-all">
              Learn More &rarr;
            </Link>
          </div>

          {/* Audit & Compliance */}
          <div className="p-8 bg-gray-100 shadow-md rounded-lg transition-all hover:shadow-xl">
            <ShieldCheckIcon className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Audit & Compliance</h3>
            <p className="text-lg text-gray-600 mb-6">
              Our audit and compliance services ensure your business adheres to industry standards and regulations, providing you with peace of mind.
            </p>
            <Link href="/services/audit" className="inline-block text-blue-600 font-semibold hover:text-blue-700 transition-all">
              Learn More &rarr;
            </Link>
          </div>

          {/* Marketing Services */}
          <div className="p-8 bg-gray-100 shadow-md rounded-lg transition-all hover:shadow-xl">
            <MegaphoneIcon className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Marketing Services</h3>
            <p className="text-lg text-gray-600 mb-6">
              Our marketing services help you connect with your audience through targeted strategies and data-driven insights.
            </p>
            <Link href="/services/marketing" className="inline-block text-blue-600 font-semibold hover:text-blue-700 transition-all">
              Learn More &rarr;
            </Link>
          </div>

          {/* Financial Analysis */}
          <div className="p-8 bg-gray-100 shadow-md rounded-lg transition-all hover:shadow-xl">
            <CalculatorIcon className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Financial Analysis</h3>
            <p className="text-lg text-gray-600 mb-6">
              We provide in-depth financial analysis and insights to help businesses make strategic financial decisions.
            </p>
            <Link href="/services/financial-analysis" className="inline-block text-blue-600 font-semibold hover:text-blue-700 transition-all">
              Learn More &rarr;
            </Link>
          </div>
        </div>
        <div className="mt-12">
          <Link href="/contact" className="inline-block px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200">
            Get in Touch with Us
          </Link>
        </div>
      </div>
    </section>
  );
}

