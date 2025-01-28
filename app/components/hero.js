import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end text-white"
      id="home"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/heropage.png"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative flex-grow flex flex-col justify-between text-center px-4">
        {/* Centered Content */}
        <div className="flex-grow flex flex-col items-start justify-center mt-14 space-y-7 animate__animated animate__fadeIn">
          <h1 className="text-[37px] sm:text-5xl md:text-6xl font-bold leading-tight tracking-wider animate__animated animate__zoomIn">
            Loye Group
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl font-medium max-w-2xl animate__animated animate__fadeInUp">
            Where <span className="text-blue-500">Tech</span> and{" "}
            <span className="text-green-500">Finance</span> Meet
          </p>
          <p className="text-lg sm:text-xl md:text-2xl  mt-10 mb-10 leading-relaxed">
            Offering innovative design, cutting-edge software engineering, and
            professional services including financial analysis, audit,
            accounting, marketing, and IT solutions.
          </p>
        </div>


        {/* Buttons */}
        <div className="flex justify-center space-x-4 pb-12 animate__animated animate__fadeInUp">
          <Link
            href="#services"
            className="inline-block px-8 py-3 bg-blue-500 text-white text-sm sm:text-base md:text-lg font-semibold rounded-lg hover:bg-blue-600 transition-all duration-200"
          >
            Explore Our Services
          </Link>
          <Link
            href="#contact"
            className="inline-block px-8 py-3 bg-green-500 text-white text-sm sm:text-base md:text-lg font-semibold rounded-lg hover:bg-green-600 transition-all duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
