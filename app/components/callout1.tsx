
import React, { FunctionComponent } from "react";
import img from "../images/bgfeaturesfirstcallout1final.png";
import Image from "next/image";

const Callout1: FunctionComponent = () => {
  return (
    <div className="h-screen flex flex-col justify-center text-center relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={img}
          alt="Background"
          className="object-fit object-center h-screen w-screen"
        />
      </div>
      <h1 className="font-serif font-semibold text-7xl drop-shadow-md z-10">
        Technology helps teen drivers
      </h1>
      <p className="mx-auto font-serif text-lg w-3/4 z-10">
        Car crashes are the No. 1 killer of teenagers. Vehicle safety
        technologies are part of the solution. Learn more about how to help teens
        stay safe on the road
      </p>
    </div>
  );
};

export default Callout1;
