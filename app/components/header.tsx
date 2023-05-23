import React from "react";
import Headerpic from "../components/images/featuresfirstheader.png";
import Image from "next/image";

function header() {
    return (
      <div className="bg-[#e5e5e5] h-screen w-screen overflow-hidden">
        <Image src={Headerpic} alt="" className="h-full w-full rounded-xl" />
        <div className="absolute top-1/3 left-[20%] transform -translate-x-1/2 -translate-y-1/2 w-96 flex flex-col items-center justify-center">
          <h1 className="font-extrabold text-left text-[#59406c] mb-0">
            Driver&apos;s education relevant to today&apos;s vehicles
          </h1>
          <p className="font-serif text-center">greet the road confidently with the knowledge and skills needed to interact effectively with new safety vehicle technologies.</p>
          <button className="bg-[#fd9862] text-[#59406c] font-bold py-2 px-4 rounded-md shadow-md">
            Learn More
          </button>
        </div>
      </div>
    );
  }
  
  export default header;
