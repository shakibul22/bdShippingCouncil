import Link from "next/link";
import React from "react";

const FooterExplore = () => {
  return (
    <div className="text-sm text-center flex flex-col items-center  justify-center lg:text-base lg:text-left font-medium">
      <h2 className="text-white text-xl 3xl:text-2xl">Explore</h2>
      <div className="flex flex-col items-center gap-4 mt-5 ">
        <Link
          href={"/about"}
          className=" text-[#8699a8] hover:text-[#ffffff] hover:underline"
        >
          About us
        </Link>
        <Link
          href={"/contact"}
          className=" text-[#8699a8] hover:text-[#ffffff] hover:underline"
        >
          Contact us
        </Link>
        <Link
          href={"/member"}
          className=" text-[#8699a8] hover:text-[#ffffff] hover:underline"
        >
          Become a member
        </Link>
        <Link
          href={"/about/officials"}
          className=" text-[#8699a8] hover:text-[#ffffff] hover:underline"
        >
          Organization info
        </Link>
      </div>
    </div>
  );
};

export default FooterExplore;
