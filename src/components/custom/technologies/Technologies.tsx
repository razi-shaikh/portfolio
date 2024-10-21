"use client";
import { motion } from "framer-motion";
import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { RiSupabaseLine } from "react-icons/ri";
import { SiCsswizardry } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";

const iconVariants = (duration: number) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      y: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  },
});

const Technologies = () => {
  const technologies = [
    {
      name: "React",
      colour: "text-[#5ED3F3]",
      icon: <RiReactjsLine />,
      duration: 1.2, // Unique duration
    },
    {
      name: "Next",
      colour: "",
      icon: <TbBrandNextjs />,
      duration: 1.5, // Unique duration
    },
    {
      name: "Node",
      colour: "text-[#509941]",
      icon: <FaNodeJs />,
      duration: 1.8, // Unique duration
    },
    {
      name: "Express",
      colour: "text-[#F3DF1D]",
      icon: <SiExpress />,
      duration: 1.5, // Unique duration
    },
    {
      name: "Tailwind",
      colour: "text-[#36B7F0]",
      icon: <RiTailwindCssFill />,
      duration: 2.0, // Unique duration
    },
    {
      name: "HTML",
      colour: "text-[#F06529]",
      icon: <ImHtmlFive />,
      duration: 1.8, // Unique duration
    },
    {
      name: "CSS",
      colour: "text-[#264DE4]",
      icon: <SiCsswizardry />,
      duration: 1, // Unique duration
    },
    {
      name: "MongoDB",
      colour: "text-[#00E661]",
      icon: <SiMongodb />,
      duration: 1, // Unique duration
    },
    {
      name: "Supabase",
      colour: "text-[#3ECF8E]",
      icon: <RiSupabaseLine />,
      duration: 2.0, // Unique duration
    },
    {
      name: "TypeScript",
      colour: "text-[#007ACC]",
      icon: <SiTypescript />,
      duration: 1.5, // Unique duration
    },
    {
      name: "JavaScript",
      colour: "text-[#F0DB4F]",
      icon: <SiJavascript />,
      duration: 1.8, // Unique duration
    },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className=" my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {technologies.map((technology) => (
          <motion.div
            variants={iconVariants(technology.duration)}
            initial="initial"
            animate="animate"
            key={technology.name}
            className=" rounded-2xl border-4 border-neutral-800 p-4"
          >
            <div className={`text-7xl ${technology.colour}`}>
              {technology.icon}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
