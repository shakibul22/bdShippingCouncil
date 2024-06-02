import React from "react";
import FooterSub from "./FooterSub";
import FooterExplore from "./FooterExplore";
import FooterForm from "./FooterForm";
import FooterCred from "./FooterCred";

const Footer = () => {
  return (
    <div className="bg-[#0F2733] bg-cover px-2 xl:px-0 py-10 lg:py-16 text-white">
      <div className="mx-auto max-w-md lg:max-w-screen-2xl">
        <div className="flex flex-col gap-10 lg:gap-24 lg:flex-row">
          <FooterSub />
          <FooterExplore />
          <FooterForm />
        </div>
        <div className="mt-16 lg:hidden">
          <FooterCred />
        </div>
      </div>
    </div>
  );
};

export default Footer;
