"use client";
import MemberListModal from "@/components/custom/MemberListModal";

import { publicRequest } from "@/requestMethod";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const getOrdinary = async () => {
  const res_O = await publicRequest("/member/ordinary");
  return res_O.data;
};

const getAssociate = async () => {
  const res_A = await publicRequest("/member/associate");
  return res_A.data;
};

const data_O = getOrdinary();
const data_A = getAssociate();

// eslint-disable-next-line @next/next/no-async-client-component
const MemberListLayout = async () => {
  const [tab, settab] = useState(1);
  // const [search, setSearch] = useState("");

  const ordinary = await data_O;
  const associate = await data_A;
  return (
    <div className="subRoutebg">
      <div className="bg-[url('/img/memberlist_bg.webp')] subRoutebanner">
        <div className="subRouteblack">
          {tab === 1 ? (
            <h2 className="subRouteTitle animate__animated animate__fadeInUp">
              List of Ordinary Members
            </h2>
          ) : (
            <h2 className="subRouteTitle animate__animated animate__fadeInUp">
              List of Associate Members
            </h2>
          )}
        </div>
      </div>

      <div className="px-2 py-6 text-textPrimary max-w-screen-2xl mx-auto">
        <div className="text-sm lg:text-base text-center font-semibold flex gap-2 md:gap-6">
          <div
            className={`py-3 sm:py-5 md:py-8 px-1 flex-1 ${
              tab === 1
                ? "bg-secondaryColor text-white cursor-default"
                : "bg-tabbg cursor-pointer"
            }`}
            onClick={() => settab(1)}
          >
            Ordinary Members
          </div>
          <div
            className={`py-3 sm:py-5 md:py-8 px-1 flex-1 ${
              tab === 2
                ? "bg-secondaryColor text-white cursor-default"
                : "bg-tabbg cursor-pointer"
            }`}
            onClick={() => settab(2)}
          >
            Associate Members
          </div>
        </div>

        <div className="my-8">
          {/* <div className="border-2 rounded-[10px] w-full bg-white flexCenter px-4 max-w-md ml-auto">
            <AiOutlineSearch size={24} />
            <input
              type="text"
              className="w-full px-4 py-2 focus:outline-none placeholder-slate-300"
              placeholder="Search Organizations"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div> */}
        </div>

        {tab === 1 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  animate__animated animate__fadeIn animate__slow">
            {ordinary?.map((member) => (
              <MemberListModal key={member.id} member={member} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate__animated animate__fadeIn animate__slow">
            {associate?.map((member) => (
              <MemberListModal key={member.id} member={member} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberListLayout;
