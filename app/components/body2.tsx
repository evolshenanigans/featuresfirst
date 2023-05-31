"use client";

import React, { useState } from "react";
import Safety from "../components/images/safetyauto.jpg";
import Safety2 from "../components/images/safetyautogirl.jpg";
import Image from "next/image";


function Body2() {


  return (
    <div className="flex min-h-screen m items-center justify-center mb-0 pb-0">
      <div
        className="group h-96 w-80 [perspective:1000px] mx-6"
      >
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] border-4 border-solid border-[#E19901]">
          <div className="absolute inset-0">
            <Image
              className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
              src={Safety}
              alt=""
            />
          </div>
          <div className="absolute inset-x-0 bottom-5 bg-[#e5e5e5] py-2 backdrop-filter backdrop-blur-sm bg-opacity-20">
            <h1 className="text-center text-black text-3xl font-bold">
              A Corporate Learning Solution
            </h1>
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <p className="text-base">
                We train fleet drivers to understand your company&apos;s safety
                vehicle technologies and how to translate their newly acquired
                knowledge to drive safer on public roads.
              </p>
              <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                {" "}
                Learn More{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="group h-96 w-80 [perspective:1000px] mx-6">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] border-4 border-solid border-[#58416c]">
          <div className="absolute inset-0">
            <Image
              className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
              src={Safety2}
              alt=""
            />
              <h1 className="text-3xl font-bold text-black text-center">
                A Company Learning Solution
              </h1>
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <p className="text-base">
                We train your customers to understand their vehicle&apos;s
                safety technology and how to translate their newly acquired
                knowledge to drive safer on public roads.
              </p>
              <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body2;
