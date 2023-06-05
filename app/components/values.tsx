"use client";

import React from "react";
import micro from "../components/images/microlearning.png";
import Image from "next/image";
import mission from "../components/images/ourmission.png";
import ourvalues from "../components/images/ourvalues.png";
import missionstatement from "../components/images/learnbytext.png";
import { motion } from "framer-motion";
import { variants, variants2 } from "../../utils/motion";
import useOnScreen from "@/utils/useOnScreen";
import { useRef } from "react";

function Values() {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);
  return (
    <div
      ref={ref}
      className="flex flex-col justify-center items-center w-screen mb-5"
    >
      <div className="flex flex-col lg:flex-row justify-center w-full m-5 flex-wrap items-center lg:items-start">
        <motion.div
          className="bg-[#F2EEE9] rounded-xl shadow-lg group relative cursor-pointer w-full md:w-2/3 lg:w-1/3 h-60 m-4 items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 flex flex-row"
          initial="hidden"
          animate={onScreen ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col justify-center items-center w-1/2">
            <Image
              src={missionstatement}
              alt="microlearning"
              className="rounded-box m-1"
            />
          </div>
          <div className="w-1/2 p-4">
            <h1 className="font-extrabold text-black text-xl m-4 text-center">
              Our Microlearning Approach
            </h1>
            <p className="mb-3 text-sm text-black">
              Our customized learn-by-text programs make it easier for drivers
              to understand the technology in their vehicles and train drivers
              to effectively use the technology in less than 10 minutes per
              lesson.
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <button className="rounded-full bg-[#D94F33] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
              Schedule a Demo
            </button>
          </div>
        </motion.div>
        <motion.div
          className="bg-[#F2EEE9] rounded-xl shadow-lg group relative cursor-pointer w-full md:w-2/3 lg:w-1/3 h-60 m-4 items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 flex flex-row"
          initial="hidden"
          animate={onScreen ? "visible" : "hidden"}
          variants={variants2}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col justify-center items-center w-1/2">
            <Image src={mission} alt="mission" className="rounded-box m-1" />
          </div>
          <div className="w-1/2 p-4">
            <h1 className="font-extrabold text-black text-xl m-4 text-center">
              Our Mission
            </h1>
            <p className="mb-3 text-md text-black">
              Our mission is to reduce the number of collisions on public roads
              by reinventing driver&apos;s education that is for non-technical
              learners and relevant to today&apos;s vehicle safety technologies.
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <button className="rounded-full bg-[#D94F33] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
              Schedule a Demo
            </button>
          </div>
        </motion.div>

        {/* <motion.div
          className="bg-[#F2EEE9] rounded-xl shadow-lg group relative cursor-pointer w-full md:w-2/3 lg:w-1/3 h-60 m-4 items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 flex flex-row"
          initial="hidden"
          animate={onScreen ? "visible" : "hidden"}
          transition={{ duration: 1 }}
          variants={variants}
        >
          {" "}
          <div className="flex flex-col justify-center items-center w-1/2">
            <Image
              src={ourvalues}
              alt="microlearning"
              className="rounded-box m-1"
            />
          </div>
          <div className="w-1/2 p-1">
            <h1 className="font-extrabold text-black text-xl m-1 text-center">
              Our Values
            </h1>
            <h3 className="mb-0 text-sm font-bold text-black text-center">
              Community
            </h3>
            <p className="mb-0 text-sm text-black text-center">
              We are committed to creating educated communities
            </p>
            <h3 className="mb-0 text-sm font-bold text-black text-center">
              Safety
            </h3>
            <p className="mb-0 text-sm text-black text-center">
              We are committed to reducing collisions on public roads
            </p>
            <h3 className="mb-0 text-sm font-bold text-black text-center">
              Sustanability
            </h3>
            <p className="mb-0 text-sm text-black text-center">
              We are committed to increasing sustainable transportation
            </p>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <button className="rounded-full bg-[#D94F33] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                Schedule a Demo
              </button>
            </div>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}

export default Values;
