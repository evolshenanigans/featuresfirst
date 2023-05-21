import React from "react";
import Image from "next/image";
import carsafetyform from "../components/images/carsafetyform.png";

function demoForm() {
  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen">
      <div className="w-full md:w-3/4 lg:w-1/2 bg-white shadow-lg rounded-lg overflow-hidden mx-2 mb-4 flex flex-wrap md:flex-nowrap">
        {/* Left Side */}
        <div className="w-full md:w-1/2 p-5">
          <h2 className="font-bold text-sm mb-5">Request a Demo</h2>
          <h1 className="font-bold text-xl mb-5">
            {" "}
            Meet your learners where they already are
          </h1>
          <form>
            <div className="mb-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              ></label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="mb-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastName"
              ></label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="mb-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              ></label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="mb-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              ></label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder="Company"
              />
            </div>
            <div className="mb-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              ></label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder="Number of Employees"
              />
            </div>
            <div className="mb-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              ></label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder="Job Title"
              />
            </div>
            <div className="mb-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-1"
                htmlFor="firstName"
              ></label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder="Phone Number"
              />
            </div>
            <div className="flex justify-center">
              <button className="w-[200px] rounded-full bg-[#D94F33] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-[#BF441D]">
                Schedule a Demo
              </button>
            </div>
          </form>
        </div>

        {/* Right Side */}
        <div className="flex w-full md:w-1/2 p-5 justify-center items-center">
          <Image
            src={carsafetyform}
            alt="Your description"
            className="max-w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default demoForm;
