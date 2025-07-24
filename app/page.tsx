import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <ContactUs />
      <Footer />
    </main>
  );
}
