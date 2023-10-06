"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";
/* eslint-disable react/no-unescaped-entities */

const TAB_DATA = [
  {
    title: "Habilidades",
    id: "habilidades",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Educación",
    id: "educacion",
    content: (
      <ul className="list-disc pl-2">
        <li>Soy Henry</li>
        <li>Argentina Programa 4.0</li>
        <li>Universidad Nacional del Nordeste</li>
      </ul>
    ),
  },
  {
    title: "Certificados",
    id: "certificados",
    content: (
      <ul className="list-disc pl-2">
        <li>Full Stack Web Developer (&quot;Soy Henry&quot;)</li>
        <li>Desarrollador Web Argentina Programa 4.0 (&quot;UTN&quot;)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("habilidades");
  const [isPending, startTransition] = useTransition();
  const handleTabChangue = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
      >
        <div className=" mt-4 md:mt-0  flex flex-col h-full ">
          <Image
            src="/images/about-image.jpg"
            width={500}
            height={500}
            alt=" "
          ></Image>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mí</h2>
          <p className="text-base lg:text-lg">
            Soy un desarrollador web full stack con una pasión por diseñar
            aplicaciones web interactivas y adaptables. Poseo experiencia
            trabajando con JavaScript, React, Redux, Node.js, Express,
            PostgreSQL, Sequelize, HTML, CSS y Git. Tengo la capacidad de
            aprender rápidamente y siempre estoy buscando ampliar mi
            conocimiento y habilidades. Disfruto colaborar en equipo para crear
            aplicaciones asombrosas.
          </p>

          <div className="flex flex-row  mt-8">
            <TabButton
              selectTab={() => handleTabChangue("habilidades")}
              active={tab === "habilidades"}
            >
              {" "}
              Habilidades{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChangue("educacion")}
              active={tab === "educacion"}
            >
              {" "}
              Educación{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChangue("certificados")}
              active={tab === "certificados"}
            >
              {" "}
              Certificados{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
