"use client";
import React, { useState, useRef } from "react";
import ProjectCards from "./ProjectCards";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
const projectsData = [
  {
    id: 1,
    title: "Rick & Morty Website",
    description:
      "App desarrollado con React Native,Redux,Js,Css,NodeJs,express,PostgreSQL y Sequelize ",
    image: "/images/projects/rick.png",
    name: ["Todos", "Web"],
    gitUrl: "https://github.com/PabloSoto97/rick",
    previewUrl: "https://rick-opal.vercel.app/",
  },
  {
    id: 2,
    title: "FlexAgenda",
    description:
      "App desarrollado con React Native,Redux,Js,Css,NodeJs,express,PostgreSQL, Sequelize y otras mas",
    image: "/images/projects/flex.png",
    name: ["Todos", "Web"],
    gitUrl: "https://github.com/AndresPM98/FlexAgenda",
    previewUrl: "https://flex-agenda.vercel.app/",
  },
  {
    id: 3,
    title: "Pokemon",
    description:
      "Unas de mis primeras App desarrollado con React, Redux,Js,Css,NodeJs,express,PostgreSQL y Sequelize ",
    image: "/images/projects/poke.png",
    name: ["Todos", "Web"],
    gitUrl: "https://github.com/PabloSoto97/pokemon",
    previewUrl: "https://pokemon-cosmic.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [name, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleTagChangue = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = projectsData.filter((project) =>
    project.name.includes(name)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="misproyectos">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mis Proyectos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2  py-6 ">
        <ProjectTag
          onClick={handleTagChangue}
          name="Todos"
          isSelected={name === "Todos"}
        />
        <ProjectTag
          onClick={handleTagChangue}
          name="Web"
          isSelected={name === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCards
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            ></ProjectCards>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
