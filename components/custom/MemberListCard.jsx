import Image from "next/image";
import React from "react";

const MemberListCard = ({ bg, name, logo, member_id }) => {
  return (
    <div
      className={`p-2 md:p-4 flex items-center gap-3 shadow-md ${
        bg === "white" ? "bg-white border rounded-[8px]" : "glass_bg"
      }`}
    >
      {/* <Image
        src={`/img/memberLogo/${logo}`}
        width={70}
        height={70}
        alt="member"
        className="rounded-md"
      /> */}

      <div className="text-sm lg:text-base space-y-2">
        <p className="">{name}</p>
        <p className="font-extralight text-xs lg:text-sm tracking-wide">Membership ID: {member_id}</p>
      </div>
    </div>
  );
};

export default MemberListCard;
