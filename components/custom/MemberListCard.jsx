"use client";
import React, { useState } from "react";


const MemberListCard = ({ bg, name, logo, member_id }) => {
  return (
    <div className="flex justify-center items-center font-poppins">
      <div className="p-2 md:p-4 flex items-center gap-3">
        <div className="space-y-2 flex flex-col justify-center items-center">
          <p className="text-sm lg:text-[16px] font-medium">{name}</p>
          <p className="font-extralight text-xs lg:text-sm tracking-wide">
            Membership ID: {member_id}
          </p>
        </div>
      </div>
    </div>
  );
};
export default MemberListCard;
