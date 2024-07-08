"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { publicRequest } from "@/requestMethod";
import { ImArrowUpRight2 } from "react-icons/im";
import MemberListCard from "../custom/MemberListCard";
import MemberListModal from "../custom/MemberListModal";

const HomeAssociate = () => {
  const [memberList, setMemberList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await publicRequest("/member/memberlist");
        setMemberList(res.data);
      } catch (error) {
        console.error("Error fetching member list:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-[url('/img/memberbg.png')] bg-cover bg-center font-poppins px-2 xl:px-0 py-8 lg:py-20 text-white">
      <div className="w-full lg:max-w-5xl 3xl:max-w-7xl mx-auto">
        <div
          className="flex gap-2 my-3"
          data-aos="fade-right"
          data-aos-once="false"
        >
          <h2 className="font-poppins">OUR ASSOCIATE MEMBERS</h2>
          <div className="w-[10px] lg:w-[270px]">
            <hr className="flex-grow border-b mt-4 " />
          </div>
        </div>
        <h3
          className="text-xl font-bold lg:text-3xl font-poppins"
          data-aos="fade-right"
          data-aos-once="false"
        >
          Some of Our{" "}
          <span className="text-[#0081E9] text-xl lg:text-[32px] font-poppins font-bold tracking-[0.8px] break-words outline-text">
            Associate
          </span>{" "}
          Members
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {memberList &&
            Array.isArray(memberList) &&
            memberList?.slice(0, 1).map((associate, i) => (
              <div
                key={i}
                className="border border-white shadow-md rounded-tl-3xl p-5 rounded-bl-3xl hover:bg-sky-400/20 rounded-br-3xl rounded-tr-none hover:rounded-tr-3xl hover:rounded-br-none glass_bg "
              >
                <MemberListCard bg={"glass"} member={associate} />
              </div>
            ))}
          {memberList &&
            Array.isArray(memberList) &&
            memberList?.slice(1, 2).map((associate, i) => (
              <div
                key={i}
                className="border border-white shadow-md rounded-3xl p-5  hover:rounded-tr-none hover:rounded-bl-none hover:bg-sky-400/20 glass_bg "
              >
                <MemberListCard member={associate} />
              </div>
            ))}
          {memberList &&
            Array.isArray(memberList) &&
            memberList?.slice(2, 3).map((associate, i) => (
              <div
                key={i}
                className="border border-white shadow-md rounded-tl-none p-5 hover:bg-sky-400/20 rounded-bl-3xl rounded-br-3xl rounded-tr-3xl hover:rounded-bl-none hover:rounded-tl-3xl glass_bg "
              >
                <MemberListCard member={associate} />
              </div>
            ))}
          {memberList &&
            Array.isArray(memberList) &&
            memberList?.slice(3, 4).map((associate, i) => (
              <div
                key={i}
                className="border border-white shadow-md rounded-tl-3xl p-5 rounded-bl-3xl hover:bg-sky-400/20 rounded-br-none rounded-tr-3xl hover:rounded-tr-none hover:rounded-br-3xl glass_bg "
              >
                <MemberListCard bg={"glass"} member={associate} />
              </div>
            ))}
          {memberList &&
            Array.isArray(memberList) &&
            memberList?.slice(4, 5).map((associate, i) => (
              <div
                key={i}
                className="border border-white shadow-md rounded-3xl p-5  hover:rounded-tr-none hover:rounded-bl-none hover:bg-sky-400/20 glass_bg "
              >
                <MemberListCard member={associate} />
              </div>
            ))}
          {memberList &&
            Array.isArray(memberList) &&
            memberList?.slice(5, 6).map((associate, i) => (
              <div
                key={i}
                className="border border-white shadow-md rounded-tl-3xl p-5 hover:bg-sky-400/20 rounded-bl-none rounded-br-3xl rounded-tr-3xl hover:rounded-bl-3xl hover:rounded-tl-none glass_bg "
              >
                <MemberListCard member={associate} />
              </div>
            ))}
        </div>

        <div className="flex justify-end items-center mt-12">
          <Link
            href={"/member/list"}
            className="py-3 px-6 flex items-center gap-2 hover:bg-btn bg-white hover:border hover:border-white rounded-md transition-all duration-500 hover:text-white text-btn font-semibold"
          >
            <span className="whitespace-nowrap">See More</span>
            <ImArrowUpRight2 className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeAssociate;
