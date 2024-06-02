import Image from "next/image";
import React from "react";

const UsefulLinkCard = ({ name, logo }) => {
  return (
    <div className="p-4 border bg-white rounded-lg shadow-md text-sm md:text-base flexCenter flex-col text-center gap-4">
      <Image
        src={logo || "/img/linkLogo/1.png"}
        width={100}
        height={70}
        alt="useful links"
      />

      <h4 className="font-semibold mb-2">{name}</h4>
    </div>
  );
};

export default UsefulLinkCard;
