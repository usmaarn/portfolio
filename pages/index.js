/** @format */

import About from "@/components/index/About";
import Contact from "@/components/index/Contact";
import Header from "@/components/index/Header";
import Projects from "@/components/index/Projects";
import Skills from "@/components/index/Skills";

export default function Index() {
  return (
    <div className="max-w-[1100px] mx-auto">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
