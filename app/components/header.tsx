import React from "react";
import Headerpic from "../components/images/featuresfirstheader.png";
import Image from "next/image";

function header() {
  return (
    <div className="bg-[#e5e5e5] h-screen w-screen overflow-hidden relative">
      <Image src={Headerpic} alt="" className="h-full w-full rounded-xl" />
      <div className="absolute top-20 left-5 lg:top-20 lg:left-10 max-w-sm md:max-w-md lg:max-w-lg flex flex-col items-start justify-center space-y-4 p-4">
        <h1 className="font-manrope font-normal text-2xl text-start text-black mb-0">
          Drivers education relevant to today&apos;s vehicles for drivers,
          passengers and everyone else on the road
        </h1>
        <button className="bg-[#fd9862] text-[#59406c] font-bold py-2 px-4 rounded-md shadow-md">
          Learn More
        </button>
      </div>
    </div>
  );
}



export default header;
