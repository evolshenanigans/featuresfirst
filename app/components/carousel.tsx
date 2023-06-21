"use client";

import Image from "next/image";
import adas from "../components/images/adas.jpg";
import podcastimg from "../components/images/featurestalkpodcast.png";
import blogimg from "../components/images/Featurestalkblog.jpg";

function carousel() {
  return (
    <div className="carousel carousel-center p-4 space-x-4 rounded-box w-full">
      <div id="slide1" className="carousel-item relative">
        <Image src={adas} className="rounded-box" alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative">
        <Image src={podcastimg} className="rounded-box" alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative">
        <Image src={blogimg} className="rounded-box" alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default carousel;
