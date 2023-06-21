import React, { useState } from "react";
import Safety from "../components/images/corporateimg.jpg";
import Safety2 from "../components/images/notcorp.jpg";
import Image from "next/image";

function Body2() {
  return (
    <main className="flex justify-center items-center space-x-4">
      <div className="card w-full md:w-1/2 group">
        <figure className="aspect-[16/9] object-cover">
          <Image src={Safety} alt="corporate" />
        </figure>
        <div className="card-body">
          <div className="absolute inset-x-0 bottom-5 bg-[#e5e5e5] py-2 backdrop-filter backdrop-blur-sm bg-opacity-20 group-hover:opacity-0 opacity-100 transition-opacity">
            <h2 className="text-center text-black text-3xl font-bold group-hover:opacity-0 opacity-100 transition-opacity">
              A Corporate Learning Solution
            </h2>
          </div>
          <div className="text-center">
            <p className="text-base group-hover:opacity-100 opacity-0 transition-opacity">
              We train fleet drivers to understand your company&apos;s safety
              vehicle technologies and how to translate their newly acquired
              knowledge to drive safer on public roads.
            </p>
            <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm group-hover:opacity-100 opacity-0 transition-opacity">
              {" "}
              Learn More{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="card w-full md:w-1/2 image-full group">
        <figure className="aspect-[16/9] object-cover">
          <Image src={Safety2} alt="corporate" />
        </figure>
        <div className="card-body">
          <div className="absolute inset-x-0 bottom-5 bg-[#e5e5e5] py-2 backdrop-filter backdrop-blur-sm bg-opacity-20 group-hover:opacity-0 opacity-100 transition-opacity">
            <h2 className="text-center text-black text-3xl font-bold group-hover:opacity-0 opacity-100 transition-opacity">
              A Company Learning Solution
            </h2>
          </div>
          <div className="text-center justify-center">
            <p className="text-base group-hover:opacity-100 opacity-0 transition-opacity">
              We train your customers to understand their vehicle&apos;s safety
              technology and how to translate their newly acquired knowledge to
              drive safer on public roads.
            </p>
            <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm group-hover:opacity-100 opacity-0 transition-opacity">
              {" "}
              Learn More{" "}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Body2;
