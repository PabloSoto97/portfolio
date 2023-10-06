"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  const downloadCV = () => {
    // Reemplaza 'ruta-al-cv.pdf' con la ubicación real de tu archivo CV
    const cvURL = "../../../public/cv.docx";
    window.open(cvURL, "_blank");
  };

  return (
    <section id="sobremi" className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-600">
              Hello, I'm
            </span>
            <br></br>
            <TypeAnimation
              sequence={["Pablo", 1000, "Web Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text:xl">
            Desarrollador de software con énfasis en las tecnologías web.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-500 via-yellow-500 to-orange-500 hover:bg-slate-200 text-white">
              Contrátame
            </button>
            <button
              onClick={downloadCV}
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br  from-red-500 via-yellow-500 to-orange-500 hover:bg-slate-800 text-white  mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Descargar CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-9 lg:mt-0"
        >
          <div className="flex items-center justify-center rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <div className="rounded-full overflow-hidden w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
              <Image
                src="/images/hero-image4-.png"
                alt="hero image"
                className="w-full h-full object-cover"
                width={300}
                height={300}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
