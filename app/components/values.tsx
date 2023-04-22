import React from "react";

function values() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-[#e5e5e5] mt-40">
      <div className="flex flex-row justify-center w-full m-5">
        <div className=" bg-[#5C5C5C] rounded-xl group relative cursor-pointer w-1/2 h-44 m-4 items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 flex">
          <h1 className="font-extrabold text-[#A7A7A7] text-4xl mb-4 transition-transform duration-500 group-hover:rotate-2 group-hover:scale-125 text-center">
            Our Approach to Learning
          </h1>
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent 
          group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"
          ></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              dolore adipisci placeat.
            </p>
            <button className="rounded-full bg-[#D94F33] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
              See More
            </button>
          </div>
        </div>
        <div className=" bg-[#5C5C5C] rounded-xl group relative cursor-pointer w-1/2 h-44 m-4 items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 flex">
          <h1 className="font-extrabold text-[#A7A7A7] text-4xl mb-4 transition-transform duration-500 group-hover:rotate-2 group-hover:scale-125 text-center">
            Our Mission
          </h1>
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent 
          group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"
          ></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              dolore adipisci placeat.
            </p>
            <button className="rounded-full bg-[#D94F33] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
              See More
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center w-11/12 bg-[#5c5c5c] rounded-xl h-44 px-5 mx-5 group relative cursor-pointer items-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30  ">
        <h1 className="font-extrabold text-[#a7a7a7] text-4xl mb-4 justify-center items-center text-center transition-transform duration-500 group-hover:rotate-0 group-hover:scale-125">
          Our Values
        </h1>
        <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent 
          group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"
          ></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            dolore adipisci placeat.
          </p>
          <button className="rounded-full bg-[#D94F33] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
            See More
          </button>
        </div>
      </div>
    </div>
  );
}

export default values;
