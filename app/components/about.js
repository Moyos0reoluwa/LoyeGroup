import Link from "next/link";
import { FaBullseye, FaHandsHelping, FaCogs } from "react-icons/fa";

export default function About() {
  return (
    <section className="bg-gray-50 py-16" id="about">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-blue-700">
          About Loye Group
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
        At Loye Group, we deliver innovative IT solutions, expert software engineering, 
        and comprehensive services in accounting, auditing, marketing, and financial analysis. 
        Our team leverages advanced technologies and industry best practices to create 
        tailored solutions that drive business growth. We are committed to empowering 
        businesses with the tools and insights needed to succeed in today’s dynamic 
        market. Whether optimizing operations or enhancing financial strategies, 
        Loye Group is your trusted partner for transformative success.
        </p>

        {/* Mission and Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-4 text-blue-700">
              <FaBullseye size={40} />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">
              Our Mission
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">
              We are committed to empowering businesses by providing cutting-edge IT solutions and tailored professional services. With a focus on quality and integrity, we aim to help businesses achieve measurable growth and long-term success.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-4 text-blue-700">
              <FaCogs size={40} />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">
              What We Do
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">
              From IT infrastructure and custom software development to expert accounting and financial analysis, we provide a comprehensive range of services to address diverse business challenges and deliver innovative solutions.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-600 mb-6" style={{ fontSize: '21px' }}>
            Why Choose Us?
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-4xl mx-auto mb-8" style={{ fontSize: '17px' }}>
            At Loye Group, we prioritize understanding your unique business needs to craft tailored solutions. Our team of skilled professionals combines technical expertise with industry insights to deliver exceptional results, making us a trusted partner for your growth journey.
          </p>
          <div className="text-center">
            <Link
              href="/services"
              className="inline-block px-8 py-3 bg-blue-600 text-white text-base sm:text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Discover Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
