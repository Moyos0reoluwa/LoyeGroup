// src/components/About.js
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-blue-600">About Loye Group</h2>
        <p className="text-lg sm:text-xl mb-8 text-gray-700">
          Loye Group is a leading IT service, software engineering, and professional services firm committed to providing innovative solutions in accounting, audit, marketing, and financial analysis. 
          We specialize in creating tailored services to meet the unique needs of businesses, enabling them to optimize operations and drive sustainable growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
          <div className="text-left">
            <h3 className="text-3xl font-semibold text-blue-600 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600 mb-6">
              At Loye Group, our mission is to empower businesses of all sizes by providing cutting-edge IT services, bespoke software engineering, and comprehensive professional services. 
              We strive to deliver exceptional quality, integrity, and innovation in every project we undertake.
            </p>
          </div>
          <div className="text-left">
            <h3 className="text-3xl font-semibold text-blue-600 mb-4">What We Do</h3>
            <p className="text-lg text-gray-600 mb-6">
              We offer a broad range of services including IT solutions to enhance business infrastructure, custom software development for unique business requirements, and expert support in accounting, audit, marketing, and financial analysis. 
              Our goal is to provide end-to-end support, helping businesses navigate challenges and achieve long-term success.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-3xl font-semibold text-blue-600 mb-6">Why Choose Us?</h3>
          <p className="text-lg sm:text-xl mb-8 text-gray-700">
            At Loye Group, we prioritize understanding our clients' needs and crafting customized solutions that lead to measurable results. Our expert team combines technical proficiency with industry knowledge to deliver exceptional services tailored to each client's objectives.
          </p>
          <Link href="/services" className="inline-block px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200">
            Discover Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
