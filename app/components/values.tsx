import React from "react";

function values() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-[#e5e5e5]">
      <div className="flex flex-col lg:flex-row justify-center w-full m-5 flex-wrap items-center lg:items-start">
        <div className="bg-[#ffffff] rounded-xl shadow-lg group relative cursor-pointer w-full md:w-1/2 lg:w-1/3 h-44 m-4 items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 flex">
          <h1 className="font-extrabold text-[#A7A7A7] text-4xl mb-4 transition-transform duration-500 group-hover:rotate-2 group-hover:scale-125 text-center">
            Our Microlearning Approach
          </h1>
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent 
          group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"
          ></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <p className="mb-3 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Our customized learn-by-text programs make it easier for drivers
              to understand the technology in their behicles and train drivers
              to effectively use the technology in less than 10 minutes per
              lesson.
            </p>
            <button className="rounded-full bg-[#D94F33] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
              Schedule a Demo
            </button>
          </div>
        </div>
        <div className="bg-[#ffffff] rounded-xl shadow-lg group relative cursor-pointer w-full md:w-1/2 lg:w-1/3 h-44 m-4 items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 flex">
          <h1 className="font-extrabold text-[#A7A7A7] text-4xl mb-4 transition-transform duration-500 group-hover:rotate-2 group-hover:scale-125 text-center">
            Our Mission
          </h1>
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent 
          group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"
          ></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <p className="mb-3 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Our mission is to reduce the number of collisions on public roads
              by reinventing driver&apos;s education that is for non-technical
              learners and relevant to today&apos;s vehicle safety technologies.
            </p>
            <button className="rounded-full bg-[#D94F33] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
              Schedule a Demo
            </button>
          </div>
        </div>
        <div className="bg-[#ffffff] rounded-xl shadow-lg group relative cursor-pointer w-full md:w-1/2 lg:w-1/3 h-44 m-4 items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 flex">
          <h1 className="font-extrabold text-[#A7A7A7] text-4xl mb-4 transition-transform duration-500 group-hover:rotate-2 group-hover:scale-125 text-center">
            Our Values
          </h1>
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent 
          group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"
          ></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h3 className="mb-0 text-sm font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Community
            </h3>
            <p className="mb-0 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              We are committed to creating educated communities
            </p>
            <h3 className="mb-0 text-sm font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Safety
            </h3>
            <p className="mb-0 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              We are committed to reducing collisions on public roads
            </p>
            <h3 className="mb-0 text-sm font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Sustanability
            </h3>
            <p className="mb-0 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              We are committed to increasing sustainable transportation
            </p>
            <button className="mx-auto w-[200px] rounded-full bg-[#D94F33] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-[#BF441D]">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default values;
