"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import useOnScreen from "../components/useOnScreen"; // Import the custom hook

function Drive() {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);

  const variants = {
    hidden: { x: -500 },
    visible: { x: 0 },
  };
  const variants2 = {
    hidden: { x: 500 },
    visible: { x: 0 },
  };

  return (
    <div ref={ref} className="flex flex-row w-full h-screen justify-center items-center text-center">
      <motion.div
        className="flex-1 bg-white mx-4 rounded-lg shadow-lg p-4"
        initial="hidden"
        animate={onScreen ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1 }}
      >
        <h1>Drive Safe</h1>
        <p>Automotive safety technology always sides with you</p>
      </motion.div>
      <div className="flex-1 bg-white mx-4 rounded-lg shadow-lg p-4">
        <h1>Drive Empowered</h1>
        <p>Improve your connection with the safety technology in your vehicle</p>
      </div>
      <motion.div
        className="flex-1 bg-white mx-4 rounded-lg shadow-lg p-4"
        initial="hidden"
        animate={onScreen ? "visible" : "hidden"}
        variants={variants2}
        transition={{ duration: 1 }}
      >
        <h1>Drive Informed</h1>
        <p>Reduce the risk of technology misuses</p>
      </motion.div>
    </div>
  );
}

export default Drive;