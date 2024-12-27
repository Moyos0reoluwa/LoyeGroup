import Navbar from "./components/navbar"; 
import Hero from "./components/hero"; 
import About from "./components/about";
import Services from "./components/services";
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

      {/* About Us Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
