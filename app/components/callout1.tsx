"use client";
import React from "react";
import bgimg from "../components/images/bgfeaturesfirstcallout1final.png";
import Image from "next/image";

const Callout1 = () =>{
  return (
    <div className="h-screen flex flex-col justify-center text-center relative overflow-hidden">
      {/* <div className="absolute inset-0">
        <Image
          src={bgimg}
          alt="Background"
          className="object-fit object-center h-screen w-screen"
          width={1920}
            height={1080}
        />
      </div> */}
      <h1 className="text-black font-serif font-semibold text-7xl drop-shadow-md z-10">
        Technology helps teen drivers
      </h1>
      <p className="text-black mx-auto font-serif text-lg w-3/4 z-10">
        Car crashes are the No. 1 killer of teenagers. Vehicle safety
        technologies are part of the solution. Learn more about how to help teens
        stay safe on the road
      </p>
    </div>
  );
};

export default Callout1;
