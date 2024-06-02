"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const FormerLayout = () => {
  const pathname = usePathname();
  return (
    <div className="px-2 py-6">
      <div className="max-w-screen-2xl mx-auto text-sm lg:text-lg">
        <div className="text-sm lg:text-base text-center font-semibold grid grid-cols-3 gap-2 md:gap-6">
          <Link
            href={"/about/former-chairmen"}
            className={`py-3 sm:py-5 md:py-8 px-1 ${
              pathname === "/about/former-chairmen"
                ? "bg-secondaryColor text-white cursor-default"
                : "bg-tabbg cursor-pointer"
            }`}
          >
            Former Chairmen
          </Link>

          <Link
            href={"/about/former-svc"}
            className={`py-3 sm:py-5 md:py-8 px-1 ${
              pathname === "/about/former-svc"
                ? "bg-secondaryColor text-white cursor-default"
                : "bg-tabbg cursor-pointer"
            }`}
          >
            Former Sr. Vice Chairmen
          </Link>

          <Link
            href={"/about/former-vc"}
            className={`py-3 sm:py-5 md:py-8 px-1 ${
              pathname === "/about/former-vc"
                ? "bg-secondaryColor text-white cursor-default"
                : "bg-tabbg cursor-pointer"
            }`}
          >
            Former Vice Chairmen
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormerLayout;
