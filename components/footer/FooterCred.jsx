import Link from "next/link";
import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import {
  FaInstagram,
  FaLocationDot,

} from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
const FooterCred = () => {
  return (
    <div className="text-xs font-extralight text-center ">
      <div className=" flex items-center flex-row justify-center">
        <Link
          href="https://twitter.com/"
          aria-label="Go to twitter"
          className="mr-3 flex h-8 w-8 items-center justify-center bg-white rounded-full border border-stroke  hover:border-primary hover:bg-btn text-white hover:text-whitey sm:mr-4 lg:mr-3 xl:mr-4"
        >
          {" "}
          <RiTwitterXFill className="text-xl text-black" />
        </Link>
        <Link
          href="https://www.facebook.com/"
          aria-label="Go to facebook"
          className="mr-3 flex h-8 w-8 items-center justify-center  bg-white rounded-full border border-stroke  hover:border-primary hover:bg-btn text-blue-400  hover:text-white xl:mr-4"
        >
          <svg
            width="8"
            height="16"
            viewBox="0 0 8 16"
            className="fill-current"
          >
            <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
          </svg>
        </Link>
        <Link
          href="https://www.instagram.com/"
          aria-label="Go to instagram"
          className="mr-3 flex h-8 w-8 items-center justify-center bg-white rounded-full border border-stroke  hover:border-primary hover:bg-btn text-white hover:text-whitey sm:mr-4 lg:mr-3 xl:mr-4"
        >
          <FaInstagram className="text-xl text-[#ad3469]" />
        </Link>

        <Link
          href="https://www.gmail.com/"
          aria-label="Go to youtube"
          className="mr-3 flex h-8 w-8 items-center justify-center bg-white rounded-full border border-stroke  hover:border-primary hover:bg-btn text-white hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
        >
          <BiLogoGmail className="text-red-600 text-xl" />
        </Link>
        <Link
          href="#"
          aria-label="Go to whats app"
          className="mr-3 flex h-8 w-8 items-center justify-center bg-white rounded-full border border-stroke  hover:border-primary hover:bg-btn text-white hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
        >
          <FaLocationDot className="text-red-400 text-xl" />
        </Link>
      </div>
      {/* <div className="space-y-1">
        <p>© Copyright 2022, All Rights Reserved by Shippers Council</p>
        <p>
          Developed by{" "}
          <span className="font-medium">Tech Solution Factory</span>
        </p>
      </div> */}
    </div>
  );
};

export default FooterCred;
