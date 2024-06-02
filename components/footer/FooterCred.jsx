import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const FooterCred = () => {
  return (
    <div className="text-xs font-extralight text-center my-4 space-y-6">
      <div className="flex gap-4 items-center text-[#FFF0F0] opacity-80 text-lg w-fit mx-auto">
        <FaFacebookF />
        <FaInstagram />
        <FaXTwitter />
      </div>
      <div className="space-y-1">
        <p>© Copyright 2022, All Rights Reserved by Shippers Council</p>
        <p>
          Developed by <span className="font-medium">Tech Solution Factory</span>
        </p>
      </div>
    </div>
  );
};

export default FooterCred;
