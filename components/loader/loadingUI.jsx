"use client";

import React from "react";
import "./loadingUI.css";

import Image from "next/image";
import loading from "../../public/img/loader_ship.webp";

const LoadingUI = () => {
  return (
    // <div className="loader">
    //   <span></span>
    //   <span></span>
    //   <span></span>
    // </div>

    <div className="flex flex-col gap-7 items-center justify-center">
      <Image
        src={loading}
        width={50}
        height={50}
        alt="ship"
        className="motion-safe:animate-ping opacity-90"
      />
      <p className="text-center tracking-[2px] font-semibold">Loading</p>
    </div>
  );
};

export default LoadingUI;
