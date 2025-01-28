import Navbar from "./components/navbar"; 
import Hero from "./components/hero"; 
import About from "./components/about";
import Services from "./components/services";
import Testimonial from "./components/testimonial";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "./globals.css";

export default function Page() {
  return (
    <div>
      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Testimonial Section */}
      <Testimonial />

      {/* About Us Section */}
      <About />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
