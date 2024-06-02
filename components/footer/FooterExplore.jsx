import Link from "next/link";
import React from "react";

const FooterExplore = () => {
  return (
    <div className="text-sm text-center lg:text-base lg:text-left font-medium">
      <p>Explore</p>
      <div className="flex flex-col gap-6 mt-5 font-extralight">
        <Link href={"/about"} className="w-fit mx-auto lg:mx-0">
          About us
        </Link>
        <Link href={"/contact"} className="w-fit mx-auto lg:mx-0">
          Contact us
        </Link>
        <Link href={"/member"} className="w-fit mx-auto lg:mx-0">
          Become a member
        </Link>
        <Link href={"/about/officials"} className="w-fit mx-auto lg:mx-0">
          Organization info
        </Link>
      </div>
    </div>
  );
};

export default FooterExplore;
