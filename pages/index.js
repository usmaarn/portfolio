/** @format */

import About from "@/components/index/About";
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
    </div>
  );
}
