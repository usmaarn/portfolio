import { Icon } from "@iconify/react";
import type { Route } from "./+types/home";
import { Link } from "react-router";
import Header from "~/components/header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dev Usman" },
    { name: "description", content: "Welcome to my portfolio" },
  ];
}

export default function Home() {
  const socialIcons = [
    {
      link: "https://github.com/usmaarn",
      icon: "mdi:github",
    },
    {
      link: "https://linkedin.com/in/usmaarn",
      icon: "mdi:linkedin",
    },
    {
      link: "https://x.com/_usmaarn",
      icon: "prime:twitter",
    },
    {
      link: "https://wa.me/09077022461",
      icon: "ic:round-whatsapp",
    },
  ];

  return (
    <div className="mb-20">
      <Header className="md:p-24">
        <div className="">
          <div className="mt-12 space-y-4 md:space-y-10">
            <Link to="/" className="badge">
              <span>Lorem ipsum elitia</span>
              <Icon icon="ri:arrow-right-up-line" />
            </Link>

            <h3 className="font-black text-foreground-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl">
              Software Engineer
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-foreground-dark 2xl:max-w-2/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              minus tenetur magnam natus totam amet alias esse iure et quae!
              Dolorum quos error voluptatibus illo nulla voluptas recusandae
              laboriosam aliquam!
            </p>

            <div className="flex items-center gap-3">
              <button className="button">Download CV</button>
              <button className="button text-foreground-dark! bg-background!">
                Get in Touch
              </button>
            </div>
            <div className="flex items-center gap-5 mt-5">
              {socialIcons.map((l) => (
                <Link to={l.link} key={l.link}>
                  <Icon icon={l.icon} className="size-9" />
                </Link>
              ))}
            </div>
          </div>
          <div className=""></div>
        </div>
      </Header>

      <div className="p-4 max-w-7xl mx-auto space-y-16 mt-8">
        <div className="space-y-3 lg:text-2xl leading-relaxed md:font-light">
          <p>Hi,</p>
          <p>
            I am <strong className="font-black">Uthman Muhammad</strong>
          </p>
          <p>
            A, Highly skilled Software Engineer  with 7+ years of experience
            building scalable, high-performance applications. Proficient in
            React, Nodejs, TypeScript, and JavaScript, with expertise in
            frontend performance optimization, backend development, API
            integration, and testing. Adept at integrating RESTful APIs,
            GraphQL, and CI/CD pipelines, ensuring robust and maintainable
            applications. Passionate about optimizing application performance,
            and writing clean, maintainable code.
          </p>
        </div>
        <Skills />
      </div>
    </div>
  );
}

function Skills() {
  const skills = [
    {
      icon: "fa6-brands:golang",
      language: "GoLang",
      description:
        "Over 4 years of experience using Go to build scalable and secure APIs and automate workflows.",
    },
    {
      icon: "lineicons:python",
      language: "Python",
      description:
        "Over 4 years of experience using Go to build scalable and secure APIs and automate workflows.",
    },
    {
      icon: "ri:javascript-fill",
      language: "Javascript",
      description:
        "Over 4 years of experience using Go to build scalable and secure APIs and automate workflows.",
    },
    {
      icon: "ri:javascript-fill",
      language: "Typescript",
      description:
        "Over 4 years of experience using Go to build scalable and secure APIs and automate workflows.",
    },
    {
      icon: "ri:nodejs-line",
      language: "NodeJs",
      description:
        "Over 4 years of experience using Go to build scalable and secure APIs and automate workflows.",
    },
    {
      icon: "mdi:react",
      language: "React JS",
      description:
        "Over 4 years of experience using Go to build scalable and secure APIs and automate workflows.",
    },
    {
      icon: "ri:svelte-fill",
      language: "Svelte JS",
      description:
        "Over 4 years of experience using Go to build scalable and secure APIs and automate workflows.",
    },
  ];
  return (
    <div className="mt-8 space-y-5 max-w-7xl mx-auto">
      <div className="flex items-center gap-2">
        <Icon icon="carbon:skill-level-advanced" />
        <h3 className="uppercase font-bold text-lg">skills</h3>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {skills.map((skill, index) => (
          <div key={index} className="bg-card rounded-xl p-5 flex gap-5">
            <div className="">
              <Icon
                icon={skill.icon}
                className="size-12 sm:size-20 md:size-20"
              />
            </div>
            <div className="">
              <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-2">
                {skill.language}
              </h3>
              <p className="text-xs sm:text-base md:text-lg text-foreground-dark font-medium">
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
