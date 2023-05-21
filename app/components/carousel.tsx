import React from "react";
import Image from "next/image";
import adas from "../components/images/adas.jpg";
import podcastimg from "../components/images/featurestalkpodcast.png";
import blogimg from "../components/images/Featurestalkblog.jpg";

function carousel() {
  return (
    <div className="flex h-[20rem] space-x-4">
      <div
        className="flex-1 rounded-lg bg-center bg-no-repeat bg-auto/100 hover:flex-5 transition-all duration-800 ease-in-out bg-gradient-to-r"
        style={{ backgroundImage: "url('../components/images/adas.jpg')" }}
      />
      <div
        className="flex-1 rounded-lg bg-center bg-no-repeat bg-auto/100 hover:flex-5 transition-all duration-800 ease-in-out bg-gradient-to-r"
        style={{ backgroundImage: "url('featurestalkpodcast.png')" }}
      />
      <div
        className="flex-1 rounded-lg bg-center bg-no-repeat bg-auto/100 hover:flex-5 transition-all duration-800 ease-in-out bg-gradient-to-r"
        style={{ backgroundImage: "url('Featurestalkblog.jpg')" }}
      />
    </div>
  );
}

export default carousel;
