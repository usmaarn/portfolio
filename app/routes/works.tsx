import { Icon } from "@iconify/react";
import { Link } from "react-router";
import Header from "~/components/header";

export default function Page() {
  const projects = [
    {
      link: "/",
      sourceCode: "https://github.com/usmaarn/portfolio",
      title: "Portfolio",
      descriptions:
        "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
      technologies: ["golang", "react", "typescript", "postgresql"],
    },
    {
      link: "https://test.locstique.com",
      sourceCode: "https://github.com/usmaarn/locstique",
      disabled: true,
      title: "Locstique",
      descriptions:
        "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
      technologies: ["golang", "react", "typescript", "postgresql"],
    },
  ];

  return (
    <div>
      <Header />
      <div className="px-5 pt-10 pb-28 max-w-7xl mx-auto">
        <h3 className="text-4xl font-black mb-5 flex gap-3 items-center">
          <Icon icon="tabler:briefcase-filled" className="size-12" />
          <span>Works</span>
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-20">
          {projects.map((project, index) => (
            <div key={index} className="space-y-2">
              <div className="h-64 rounded-lg bg-card" />
              <h3 className="text-3xl font-bold text-foreground-light">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg">
                {project.descriptions}
              </p>
              <div className="flex gap-3 text-sm md:text-base  text-foreground-dark">
                <p className="font-black ">Technologies: </p>
                <p className="uppercase font-medium">
                  {project.technologies.join(", ")}
                </p>
              </div>

              <div className="flex gap-3">
                <button className="flex items-center gap-3 rounded-xl font-semibold bg-card px-5 h-12 hover:text-sky-500 transition duration-300 cursor-pointer">
                  <span>Visit</span>
                  <Icon icon="lucide:external-link" className="size-7" />
                </button>
                <button className="flex items-center gap-1 border px-2 rounded-md border-card font-semibold cursor-pointer hover:text-indigo-400 transition duration-300">
                  <Icon icon="line-md:github" className="size-7" />
                  <span>Source Code</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
