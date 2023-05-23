import React from "react";
import Image from "next/image";
import testimg1 from "../components/images/testimonials1.png";
import testimg2 from "../components/images/testimonials2.png";
import cert1 from "../components/images/certsnmsdc.jpg";
import cert2 from "../components/images/certswbenc.png";
import cert3 from "../components/images/certswosb.webp";
import cert4 from "../components/images/certssupp.jpg";

function Footer() {
  return (
    <footer className="flex flex-col w-full bg-[#e5e5e5]">
      <div className="card card-side bg-base-100 shadow-xl relative">
        <figure className="relative w-full h-[300px]">
          <Image src={testimg1} alt="Movie" />
        </figure>
        <div className="card-body">
          <p>
            {
              "Being a healthcare professional that is focused on education and risk reduction I was able to clearly see how this product could benefit companies that are advocating for vehicle health and driver safety (a yin yang). There is a clear position in the market for FeaturesFirst Auto&apos;s mission and vision. They are driven by a fierce leader who is very capable of efficiently executing this vision."
            }
          </p>
          <h2 className="card-title">
            Hayley Murphy - Jaguar Range Rover Consumer, RN
          </h2>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <Image src={testimg2} alt="Movie" />
        </figure>
        <div className="card-body">
          <p>
              &quote;FeaturesFirst Auto from a business perspective reaches EVERYONE with a car and EVERYONE that knows somebody with a car (i.e. everyone). The cars we drive can inspire different energies within us, and we need to trust and rely on our cars to get us, our passengers, and other drivers on the road to where we're going, SAFELY. Safety recalls are so common across all manufacturers, makes, and models- and the consumer hardly knows how to do anything about it! FeaturesFirst Auto keeps drivers, and their loved ones SAFE and CONFIDENT on the road.&quot;
          </p>
          <h2 className="card-title">
            Brendan Polsin - Chevrolet Impala Consumer, Pharmaceutical
            Representative
          </h2>
        </div>
      </div>

      <div className="flex aspect-[4/1]">
        <Image src={cert1} alt="" className="w-[25%]" />
        <Image src={cert2} alt="" className="w-[25%]" />
        <Image src={cert3} alt="" className="w-[25%]" />
        <Image src={cert4} alt="" className="w-[25%]" />
      </div>

      <div className="flex flex-col w-full bg-[#59406c] h-10 p-5">
        <h1 className="text-white text-sm text-center">
          &copy;2019 FeaturesFirst Auto, a multipurpose automotive platform. |
          Privacy Policy | Terms &amp; Conditions | Disclaimer
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
