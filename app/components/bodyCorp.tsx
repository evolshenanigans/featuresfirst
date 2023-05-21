import React from "react";

function bodyCorp() {
  return (
    <div className="flex flex-row justify-center w-screen h-10 bg-[#5c5c5c] mt-8 ">
      <div className="flex flex-col justify-center items-center w-1/2 h-96 bg-[#e19901] rounded-xl m-4 shadow-xl shadow-black/40">
        <h1 className="font-extrabold text-[#58416c] text-4xl mb-4">
          Corporate
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center w-1/2 h-96 bg-[#58416c] rounded-xl m-4 shadow-xl shadow-black/40">
        <h1 className="font-extrabold text-[#e19901] text-4xl mb-4">
          Consumer
        </h1>
      </div>
    </div>
  );
}

export default bodyCorp;

