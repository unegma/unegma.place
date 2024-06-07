'use client';
// todo ^ might not be needed

import * as React from "react";

export default function VideoComponent ({src}: any) {

  return (
    <video width="100%" height="auto" preload="auto" autoPlay muted loop>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}
