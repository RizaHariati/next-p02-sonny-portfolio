"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className=" bg-stone-900 text-white h-screen snap-y snap-mandatory overflow-scroll z-0 ">
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      {/* Project */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>
      {/* Contact Me */}
    </main>
  );
}
