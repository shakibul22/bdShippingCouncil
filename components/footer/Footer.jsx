import React from "react";
import FooterSub from "./FooterSub";
import FooterExplore from "./FooterExplore";
import FooterForm from "./FooterForm";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-footerbg bg-cover  ">
      <div className="w-full lg:max-w-5xl 3xl:max-w-7xl mx-auto py-10 lg:py-16 px-4 xl:px-1 ">
        <div className="flex flex-col  lg:flex-row justify-between items-start  gap-14 lg:gap-24">
          <FooterSub />
          <FooterExplore />
          <FooterForm />
        </div>
      </div>
      <footer class="bg-[#10222B] text-white text-center  py-3 px-2">
        &copy; Copyright 2024, All Rights Reserved by Shippers Council Developed
        by
        <Link
          href="https://techsolutionfactory.com"
          class="text-[#5D82C1] hover:underline"
        >
          {" "}
          Tech Solution Factory
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
