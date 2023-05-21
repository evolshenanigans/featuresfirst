"use client"

import React from 'react';

export default function MyCarousel(props: any){
  let badgeText;

  return(
    <div>
      <img src={'../components/images/' + props.coverImg} alt="carousel" />
      <p>{props.title}</p>
    </div>
  );
}



