"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { variants, variants2 } from "../../utils/motion";
import useOnScreen from "@/utils/useOnScreen";
import Image from "next/image";
import communityimg from '../components/images/comunityimg.jpg'
import communitysafety from '../components/images/communitysafety.jpeg'
import communitysustain from '../components/images/communitysustain.jpeg'

const lineVariants = {
  hidden: { width: '0%' },
  visible: { width: '80%' }
};
const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 }
};

function Drive() {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);
  return (
    <div
      ref={ref}
      className=" text-black flex flex-col w-full justify-center items-center text-center "
    >
      <motion.hr
        initial="hidden"
        animate={onScreen ? "visible" : "hidden"}
        variants={lineVariants}
        transition={{ duration: 1 }}
        className="w-3/4 border-t-2 border-black my-2"
      />
      <motion.div 
        className="relative text-center mb-4"
        initial="hidden"
        animate={onScreen ? "visible" : "hidden"}
        variants={titleVariants}
        transition={{ duration: 1 }}
      >
        <span className="relative -top-3 px-2 text-5xl font-semibold">Our Values</span>
      </motion.div>
      <motion.div
        className="card lg:card-normal bg-[#F2EEE9] shadow-xl w-3/4 mb-4"
        initial="hidden"
        animate={onScreen ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1 }}
      >
        <figure>
          <Image
            src={communityimg}
            alt="drivesafe"
            className=""
          />
        </figure>
        <div className="card-body">
          <h1 className="card-title justify-center">Community</h1>
          <p>We are commited to creating educated communities.</p>
        </div>
      </motion.div>
      <motion.div
        className="card lg:card-normal bg-[#F2EEE9] shadow-xl w-3/4 mb-4"
        initial="hidden"
        animate={onScreen ? "visible" : "hidden"}
        variants={variants2}
        transition={{ duration: 1 }}
      >
        <figure>
        <Image
            src={communitysafety}
            alt="drivesafe"
            className=""
          />
        </figure>
        <div className="card-body">
          <h1 className="card-title justify-center">Safety</h1>
          <p>
            We are committed to reducing collisions on public roads
          </p>
        </div>
      </motion.div>
      <motion.div
        className="card lg:card-normal bg-[#F2EEE9] shadow-xl w-3/4"
        initial="hidden"
        animate={onScreen ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1 }}
      >
        <figure>
        <Image
            src={communitysustain}
            alt="drivesafe"
            className=""
          />
        </figure>
        <div className="card-body">
          <h1 className="card-title justify-center">Sustainability</h1>
          <p>We are committed to increasing sustainable transportation</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Drive;
