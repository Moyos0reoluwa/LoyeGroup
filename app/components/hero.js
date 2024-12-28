import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end" id="home">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpeg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative flex-grow flex flex-col justify-between text-center text-white px-4">
        {/* Add content in the center if needed */}
        <div className="flex-grow flex items-center justify-center">
          {/* Placeholder for centered content */}
        </div>

        {/* Button positioned at the bottom */}
        <div className="pb-12">
          <Link
            href="#services"
            className="inline-block px-8 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-all duration-200"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
