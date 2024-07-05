"use client";

import Image from "next/image";
import React, { useState } from "react";
import FooterCred from "./FooterCred";
import { publicRequest } from "@/requestMethod";
import toast from "react-hot-toast";
import { AiOutlineSend } from "react-icons/ai";

const FooterSub = () => {
  const [sending, setsending] = useState(false);
  const [data, setData] = useState({
    email: "",
  });

  const handleSub = async (e) => {
    e.preventDefault();
    setsending(true);
    try {
      let res = await publicRequest.post("/contact/subscribe", data);
      if (res.status == 200) {
        setsending(false);
        // alert("Thank you for subscribing to our newsletter.");
        toast.success("Thank you for subscribing to our newsletter.");
      }
      setTimeout(() => {
        location.reload();
      }, 3000);
    } catch (error) {
      setsending(false);
      if (error.response.status == 501) {
        toast.error(
          "This email is already subscribed to our newsletter. Please check again."
        );
      } else {
        // alert("Server Error, Try again letter.");
        console.log(error);
        toast.error("Something went wrong. Please try again!");
      }
    }
  };

  return (
    <div className="flex-1 flex flex-col gap-12 ">
      <div className="flex items-center gap-2  w-fit mx-auto lg:mx-0">
        <Image src={"/img/logo.webp"} width={45} height={45} alt="logo" />
        <h2 className="font-semibold text-2xl text-white">
          Shippers’ Council of Bangladesh
        </h2>
      </div>

      <div className="flex flex-col gap-5 ">
        <div>
          <h3 className="text-2xl font-smeibold text-white">NEWSLETTER</h3>
          <p className="text-[#8699a8] text-sm lg:text-lg mt-1">
            Subscribe to out newsletter and stay updated
          </p>
        </div>
        <form
          className="bg-[#FFF0F0] text-[#1b405d] w-[305px] border sm:w-[315px] lg:w-full flex flex-row justify-between px-5 p-2 rounded-lg bg-opacity-25  text-sm"
          onSubmit={handleSub}
        >
          <input
            type="email"
            className="p-3 text-white  bg-transparent focus:outline-none"
            placeholder="Enter  email address"
            required
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
          />
          <button
            type="submit"
            className="  transform lg:translate-x-0 -translate-x-4 rounded-full"
            onClick={handleSub}
            disabled={sending}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <rect
                x="0.5"
                y="0.5"
                width="35"
                height="35"
                rx="17.5"
                fill="#DC963C"
              />
              <rect
                x="0.5"
                y="0.5"
                width="35"
                height="35"
                rx="17.5"
                stroke="#FDCD90"
              />
              <path
                d="M14.853 24.9393L25.9103 19.0855L25.9115 19.085C26.69 18.6728 27.0796 18.4666 27.207 18.1915C27.3179 17.9518 27.3178 17.6755 27.2068 17.4358C27.0794 17.1606 26.6898 16.9542 25.9105 16.5416L14.8532 10.6878C13.862 10.163 13.3661 9.90083 13.0393 9.97629C12.7559 10.0417 12.5218 10.2399 12.4106 10.5087C12.2825 10.8187 12.4597 11.3509 12.8143 12.4149L14.466 17.3699C14.5198 17.5312 14.5474 17.6139 14.5583 17.6983C14.5682 17.7749 14.5677 17.8524 14.5578 17.9291C14.5466 18.0154 14.5187 18.0997 14.4625 18.2685L12.8146 23.2121C12.4599 24.2762 12.2827 24.8089 12.4109 25.1189C12.522 25.3877 12.7562 25.5854 13.0396 25.6508C13.3664 25.7263 13.8621 25.4639 14.853 24.9393Z"
                fill="white"
              />
              <path
                d="M14.853 24.9393L25.9103 19.0855L25.9115 19.085C26.69 18.6728 27.0796 18.4666 27.207 18.1915C27.3179 17.9518 27.3178 17.6755 27.2068 17.4358C27.0794 17.1606 26.6898 16.9542 25.9105 16.5416L14.8532 10.6878C13.862 10.163 13.3661 9.90083 13.0393 9.97629C12.7559 10.0417 12.5218 10.2399 12.4106 10.5087C12.2825 10.8187 12.4597 11.3509 12.8143 12.4149L14.466 17.3699C14.5198 17.5312 14.5474 17.6139 14.5583 17.6983C14.5682 17.7749 14.5677 17.8524 14.5578 17.9291C14.5466 18.0154 14.5187 18.0997 14.4625 18.2685L12.8146 23.2121C12.4599 24.2762 12.2827 24.8089 12.4109 25.1189C12.522 25.3877 12.7562 25.5854 13.0396 25.6508C13.3664 25.7263 13.8621 25.4639 14.853 24.9393Z"
                fill="black"
                fill-opacity="0.2"
              />
            </svg>
          </button>
        </form>
      </div>

      <div className=" hidden lg:block">
        <FooterCred />
      </div>
    </div>
  );
};

export default FooterSub;
