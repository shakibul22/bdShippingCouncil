"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SeminarLayout = () => {
  const pathname = usePathname();
  return (
    <div className="px-2 py-6">
      <div className="max-w-screen-2xl mx-auto text-sm lg:text-lg">
        <div className="text-sm lg:text-base text-center font-semibold grid grid-cols-2 gap-2 md:gap-6">
          <Link
            href={"/seminar"}
            className={`py-3 sm:py-5 md:py-8 px-1 ${
              pathname === "/seminar"
                ? "bg-secondaryColor text-white cursor-default"
                : "bg-tabbg cursor-pointer"
            }`}
          >
            Upcoming seminar workshop
          </Link>

          <Link
            href={"/seminar/previous"}
            className={`py-3 sm:py-5 md:py-8 px-1 ${
              pathname === "/seminar/previous"
                ? "bg-secondaryColor text-white cursor-default"
                : "bg-tabbg cursor-pointer"
            }`}
          >
            Previous seminar workshop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SeminarLayout;
