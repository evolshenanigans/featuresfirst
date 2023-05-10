import React from 'react';
import Image from 'next/image';
import MissionStatement from '../components/images/safetyauto.jpg';

function missionStatement() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative h-[300px] w-[300px]">
        <Image src={MissionStatement} alt="missionstatement" layout="fill" objectFit="cover" />
      </div>
      <div className="ml-4">
        <h1>Our Sustainability Mission Statement</h1>
        <p>
          We are dedicated to environmental improvements that foster a sustainable future and lead to social and
          economical improvements in the communities we do business.
        </p>
      </div>
    </div>
  );
}

export default missionStatement;
