import React from "react";
import Image from "next/image";
import MissionStatement from "../components/images/safetyauto.jpg";

function missionStatement() {
  return (
    <div className="card card-side bg-white shadow-2xl m-3">
      <figure>
        <Image
          src={MissionStatement}
          alt="missionstatement"
          className="rounded-box m-1 "
        />
      </figure>
      <div className="card-body text-black">
        <h2 className="card-title">Our Sustainability Mission Statement</h2>
        <p> We are dedicated to environmental improvements that foster a sustainable future and lead to social and economical improvements in the communities we do business.</p>
      </div>
    </div>
  );
}

export default missionStatement;
