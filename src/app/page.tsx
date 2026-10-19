import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TelemetryBanner from "@/components/TelemetryBanner";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import { Contact, Footer } from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <TelemetryBanner />
      <Experience />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
