"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NewsLayout = ({ img, title }) => {
  const pathname = usePathname();
  return (
    <div className="subRoutebg">
      <div className={`bg-[url('/img/news_bg.webp')] subRoutebanner`}>
        <div className="subRouteblack px-2">
          <h2 className="subRouteTitle animate__animated animate__fadeInUp">
            {title}
          </h2>
        </div>
      </div>

      <div className="px-2 py-6 text-textPrimary max-w-screen-2xl mx-auto space-y-2 md:space-y-5">
        <div className="text-sm lg:text-base text-center font-semibold grid grid-cols-2 gap-2 md:gap-6">
          <Link
            href={"/news"}
            className={`py-3 sm:py-5 md:py-8 px-1 ${
              pathname === "/news"
                ? "bg-secondaryColor text-white cursor-default"
                : "bg-tabbg cursor-pointer"
            }`}
          >
            Shipper’s News
          </Link>

          <Link
            href={"/news/coverage"}
            className={`py-3 sm:py-5 md:py-8 px-1 ${
              pathname === "/news/coverage"
                ? "bg-secondaryColor text-white cursor-default"
                : "bg-tabbg cursor-pointer"
            }`}
          >
            Annual Reports
          </Link>
        </div>

        <div className="text-sm lg:text-base text-center font-semibold grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
          <Link
            href={"/news/others"}
            className={`py-3 sm:py-5 md:py-8 px-1 ${
              pathname === "/news/others"
                ? "bg-secondaryColor text-white cursor-default"
                : "bg-tabbg cursor-pointer"
            }`}
          >
            SCB Other Publications
          </Link>

          <Link
            href={"/news/budget"}
            className={`py-3 sm:py-5 md:py-8 px-1 ${
              pathname === "/news/budget"
                ? "bg-secondaryColor text-white cursor-default"
                : "bg-tabbg cursor-pointer"
            }`}
          >
            SCB Budget Recommendations
          </Link>

          <Link
            href={"/news/port"}
            className={`py-3 sm:py-5 md:py-8 px-1 col-span-2 md:col-span-1 ${
              pathname === "/news/port"
                ? "bg-secondaryColor text-white cursor-default"
                : "bg-tabbg cursor-pointer"
            }`}
          >
            SCB Port Recommendations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsLayout;
