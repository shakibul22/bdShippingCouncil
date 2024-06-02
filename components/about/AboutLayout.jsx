"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const AboutLayout = () => {
  const pathname = usePathname();
  return (
    <div className="px-2 py-6">
      <div className="max-w-screen-2xl mx-auto text-sm lg:text-lg">
        <div className="text-sm lg:text-base text-center font-semibold grid grid-cols-3 gap-2 md:gap-6">
          <Link
            href={"/about"}
            className={`py-3 sm:py-5 md:py-8 px-1 ${
              pathname === "/about"
                ? "bg-secondaryColor text-white cursor-default"
                : "bg-tabbg cursor-pointer"
            }`}
          >
            Brief About SCB
          </Link>

          <Link
            href={"/about/service"}
            className={`py-3 sm:py-5 md:py-8 px-1 ${
              pathname === "/about/service"
                ? "bg-secondaryColor text-white cursor-default"
                : "bg-tabbg cursor-pointer"
            }`}
          >
            Service
          </Link>

          <Link
            href={"/about/activities"}
            className={`py-3 sm:py-5 md:py-8 px-1 ${
              pathname === "/about/activities"
                ? "bg-secondaryColor text-white cursor-default"
                : "bg-tabbg cursor-pointer"
            }`}
          >
            Activities
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutLayout;
