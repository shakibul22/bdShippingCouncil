"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ChairmanLayout = () => {
  const pathname = usePathname();
  return (
    <div className="px-2 py-6">
      <div className="max-w-screen-2xl mx-auto text-sm lg:text-lg">
        <div className="text-sm lg:text-base text-center font-semibold grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
          <Link
            href={"/chairman"}
            className={`py-3 sm:py-5 md:py-8 px-1 ${
              pathname === "/chairman"
                ? "bg-secondaryColor text-white cursor-default"
                : "bg-tabbg cursor-pointer"
            }`}
          >
            Chairman’s Profile
          </Link>

          <Link
            href={"/chairman/message"}
            className={`py-3 sm:py-5 md:py-8 px-1 ${
              pathname === "/chairman/message"
                ? "bg-secondaryColor text-white cursor-default"
                : "bg-tabbg cursor-pointer"
            }`}
          >
            Message from Chairman
          </Link>

          <Link
            href={"/chairman/speech"}
            className={`py-3 sm:py-5 md:py-8 px-1 ${
              pathname === "/chairman/speech"
                ? "bg-secondaryColor text-white cursor-default"
                : "bg-tabbg cursor-pointer"
            }`}
          >
            Chairman’s Speech
          </Link>

          <Link
            href={"/chairman/interview-print"}
            className={`py-3 sm:py-5 md:py-8 px-1 ${
              pathname === "/chairman/interview-print"
                ? "bg-secondaryColor text-white cursor-default"
                : "bg-tabbg cursor-pointer"
            }`}
          >
            Chairman’s Interview (Print Media)
          </Link>

          <Link
            href={"/chairman/interview-electronic"}
            className={`py-3 sm:py-5 md:py-8 px-1 ${
              pathname === "/chairman/interview-electronic"
                ? "bg-secondaryColor text-white cursor-default"
                : "bg-tabbg cursor-pointer"
            }`}
          >
            Chairman’s Interview (Electronic Media)
          </Link>

          <Link
            href={"/chairman/presentation"}
            className={`py-3 sm:py-5 md:py-8 px-1 ${
              pathname === "/chairman/presentation"
                ? "bg-secondaryColor text-white cursor-default"
                : "bg-tabbg cursor-pointer"
            }`}
          >
            Chairman’s Presentation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChairmanLayout;
