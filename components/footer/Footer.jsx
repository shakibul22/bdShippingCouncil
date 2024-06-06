import React from "react";
import FooterSub from "./FooterSub";
import FooterExplore from "./FooterExplore";
import FooterForm from "./FooterForm";
import FooterCred from "./FooterCred";

const Footer = () => {
  return (
    <div className="bg-footerbg bg-cover px-4 xl:px-0 py-10 lg:py-16 ">
      <div className="mx-auto max-w-md lg:max-w-7xl">
        <div className="flex flex-col  lg:flex-row justify-between items-start  gap-14 lg:gap-24">
          <FooterSub />
          <FooterExplore />
          <FooterForm />
        </div>
      </div>
    </div>
  );
};

export default Footer;
