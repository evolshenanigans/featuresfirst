"use client";

import React, { useState } from "react";
import Safety from "../components/images/safetyauto.jpg";
import Safety2 from "../components/images/safetyautogirl.jpg";
import Image from "next/image";
import Modal from "react-modal";
import YouTube from "react-youtube";

function Body2() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
      theme: "dark",
    },
  };

  return (
    <div className="flex min-h-screen m items-center justify-center bg-[#e5e5e5] mb-0 pb-0">
      <div
        className="group h-96 w-80 [perspective:1000px] mx-6"
        onClick={openModal}
      >
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] border-4 border-solid border-[#E19901]">
          <div className="absolute inset-0">
            <Image
              className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
              src={Safety}
              alt=""
            />
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <h1 className="text-3xl font-bold">A Corporate Learning Solution</h1>
              <p className="text-base">
                We train fleet drivers to understand your company's safety vehicle technologies and how to translate their newly acquired knowledge to drive safer on public roads.
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
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <h1 className="text-3xl font-bold">A Company Learning Solution</h1>
              <p className="text-base">
                We train your customers to understand their vehicle's safety technology and how to translate their newly acquired knowledge to drive safer on public roads.
              </p>
              <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="YouTube Video"
        className="bg-[#222] fixed inset-0 flex items-center justify-center mx-auto my-auto outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
      >
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 bg-transparent border-none text-white text-xl cursor-pointer"
        >
          &times;
        </button>
        <YouTube videoId="dQw4w9WgXcQ" opts={opts} />
      </Modal>
    </div>
  );
}

export default Body2;
