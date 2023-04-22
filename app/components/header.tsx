import React from "react";
import Headerpic from "../Images/featuresfirstheader.png";
import Image from "next/image";
//add a little bit of shadow on the button
function header() {
    return (
      <div className="bg-[#e5e5e5] h-screen w-screen">
        <Image src={Headerpic} alt="" className="h-full w-full rounded-xl" />
        <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-96 flex flex-col items-center justify-center">
          <h1 className="font-extrabold text-left text-[#59406c] mb-4">
            Drive with confidence and peace of mind, knowing you have the
            knowledge and skills to navigate advanced vehicle technology.
          </h1>
          <button className="bg-[#fd9862] text-[#59406c] font-bold py-2 px-4 rounded-md shadow-md">
            Learn More
          </button>
        </div>
      </div>
    );
  }
  
  export default header;
