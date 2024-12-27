// src/components/Hero.js
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-cover bg-center h-[90vh]" style={{ backgroundImage: "url('/hero.jpeg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for readability */}
      <div className="container mx-auto h-full flex items-center justify-center text-center text-white px-4">
        <div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            LOYE GROUP
          </h1>
          <p className="text-xl sm:text-2xl mb-6">
            Empowering you with the best services to achieve your dreams.
          </p>
          <Link href="/services" className="inline-block px-8 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-all duration-200">
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
