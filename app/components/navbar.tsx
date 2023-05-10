import React from "react";
import Logo from "../components/images/featuresfirstlogo.png";
import Image from "next/image";
function Navbar() {
  return (
    <nav
      className="flex justify-between items-center w-screen h-16 bg-white text-black relative shadow-sm font-mono"
      role="navigation"
    >
      <a href="/" className="pl-8">
        <Image src={Logo} alt="" className="h-15 w-40" />
      </a>
      <div className="px-4 cursor-pointer md:hidden"></div>
      <div className="pr-8 md:block hidden">
        <a href="/" className="p-4 hover:text-[#fd9862]">
          Home
        </a>
        <a href="/" className="p-4 hover:text-[#fd9862]">
          Our Solutions
        </a>
        <a href="/" className="p-4 hover:text-[#fd9862]">
          Resources
        </a>
        <a href="/" className="p-4 hover:text-[#fd9862]">
          About Us
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
