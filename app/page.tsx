"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Blogs from "@/components/sections/Blogs";
import { FloatingCLIButton } from "@/components/ui/floating-cli-button"; // Add this import

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Blogs />
      <Contact />
      <Footer />
      <FloatingCLIButton /> {/* Add the floating CLI button */}
    </main>
  );
}