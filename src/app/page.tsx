import Hero from "@/components/hero/Hero";
import About from "@/components/about/about";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Education from "@/components/education/Education";

import Services from "@/components/services/Services";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />

      <Services />
      <Contact />
    </main>
  );
}
