"use client";
import React from "react";
import { HERO_CONTENT } from "@/constants";
import RubicCube from "../spline/Spline";
import { motion } from "framer-motion";

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});
const HeroSection = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4 lg:mb-3.5">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className=" flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className=" pb-16 text-6xl font-normal tracking-tight lg:mt-16 lg:text-8xl"
            >
              Razi Shaikh
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="w-full mt-6 my-4"
            >
              <button
                type="submit"
                className="inline-block h-16 px-10 bg-transparent border border-gray-400 text-gray-400 font-medium rounded-lg hover:bg-white/70 hover:text-black hover:font-bold"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "./RaziResume.pdf"; // Path to your PDF
                  link.download = "Razi Resume.pdf"; // Name of the downloaded file
                  link.click();
                }}
              >
                Resume
              </button>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            {/* <Image src={profilePic} alt="Profile Picture" /> */}
            <RubicCube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
