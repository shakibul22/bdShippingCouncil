"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MemberTabs = () => {
  const pathname = usePathname();
  return (
    <div className="px-2 py-6">
      <div className="text-textPrimary max-w-screen-2xl mx-auto space-y-2 md:space-y-5">
        <div className="text-sm lg:text-base text-center font-semibold grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-4 ">
          <Link
            href={"/member"}
            className={`py-3 sm:py-5 md:py-8 px-1 ${
              pathname === "/member"
                ? "bg-secondaryColor text-white cursor-default"
                : "bg-tabbg cursor-pointer"
            }`}
          >
            Eligibility
          </Link>

          <Link
            href={"/member/membership"}
            className={`py-3 sm:py-5 md:py-8 px-1 ${
              pathname === "/member/membership"
                ? "bg-secondaryColor text-white cursor-default"
                : "bg-tabbg cursor-pointer"
            }`}
          >
            Membership Form
          </Link>

          <Link
            href={"/member/application"}
            className={`py-3 sm:py-5 md:py-8 px-1 ${
              pathname === "/member/application"
                ? "bg-secondaryColor text-white cursor-default"
                : "bg-tabbg cursor-pointer"
            }`}
          >
            Application Procedure
          </Link>

          <Link
            href={"/member/benefits"}
            className={`py-3 sm:py-5 md:py-8 px-1 ${
              pathname === "/member/benefits"
                ? "bg-secondaryColor text-white cursor-default"
                : "bg-tabbg cursor-pointer"
            }`}
          >
            Benefit of being a Member
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MemberTabs;
