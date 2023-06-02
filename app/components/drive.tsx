"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { variants, variants2 } from "../../utils/motion";
import useOnScreen from "@/utils/useOnScreen";
import Image from "next/image";
import drivesafe from "../components/images/drivesafeplaceholder.png";
import driveempowered from "../components/images/driveempowered.png";
import driveinformed from "../components/images/driveinformed.png";

function Drive() {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);
  return (
    <div
      ref={ref}
      className=" text-black flex flex-col w-full justify-center items-center text-center"
    >
      <motion.div
        className="card lg:card-side bg-[#F2EEE9] shadow-xl w-3/4"
        initial="hidden"
        animate={onScreen ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1 }}
      >
        <figure>
          <Image
            src={drivesafe}
            alt="drivesafe"
            className=""
          />
        </figure>
        <div className="card-body">
          <h1 className="card-title justify-center">Drive Safe</h1>
          <p>Automotive safety technology always sides with you</p>
        </div>
      </motion.div>
      <motion.div
        className="card lg:card-side bg-[#F2EEE9] shadow-xl w-3/4"
        initial="hidden"
        animate={onScreen ? "visible" : "hidden"}
        variants={variants2}
        transition={{ duration: 1 }}
      >
        <figure>
        <Image
            src={driveempowered}
            alt="drivesafe"
            className=""
          />
        </figure>
        <div className="card-body">
          <h1 className="card-title justify-center">Drive Empowered</h1>
          <p>
            Improve your connection with the safety technology in your vehicle
          </p>
        </div>
      </motion.div>
      <motion.div
        className="card lg:card-side bg-[#F2EEE9] shadow-xl w-3/4"
        initial="hidden"
        animate={onScreen ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1 }}
      >
        <figure>
        <Image
            src={driveinformed}
            alt="drivesafe"
            className=""
          />
        </figure>
        <div className="card-body">
          <h1 className="card-title justify-center">Drive Informed</h1>
          <p>Reduce the risk of technology misuses</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Drive;
