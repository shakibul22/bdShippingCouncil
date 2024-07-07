import React from "react";

const MemberListCard = ({ bg, name, logo, member_id }) => {
  return (
    <div className={`p-2 md:p-4  gap-3}`}>
      {/* <Image
        src={`/img/memberLogo/${logo}`}
        width={70}
        height={70}
        alt="member"
        className="rounded-md"
      /> */}

      <div className="text-sm flex flex-col justify-center text-[#cccccc] items-center lg:text-base space-y-2">
        <p className="uppercase font-semibold text-[16px]">{name}</p>
        <p className="font-normal text-xs lg:text-[16px] tracking-wide">
          Membership ID: {member_id}
        </p>
      </div>
    </div>
  );
};

export default MemberListCard;
