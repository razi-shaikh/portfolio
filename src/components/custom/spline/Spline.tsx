"use client";
import React from "react";
import Spline from "@splinetool/react-spline/next";
import { motion } from "framer-motion";

const RubicCube = () => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1.2 }}
      className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]"
    >
      <Spline scene="https://prod.spline.design/W23zb5Vpa0jg0tgP/scene.splinecode" />
    </motion.div>
  );
};

export default RubicCube;
