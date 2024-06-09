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
      <div className="flex items-center gap-2 w-fit mx-auto lg:mx-0">
        <Image src={"/img/logo.webp"} width={45} height={45} alt="logo" />
        <h2 className="font-semibold text-2xl text-white">
          Shippers’ Council of Bangladesh
        </h2>
      </div>

      <div className="flex flex-col gap-5">
        <div>
          <h3 className="text-2xl font-smeibold text-white">NEWSLETTER</h3>
          <p className="text-[#6f8699] text-sm lg:text-md mt-1">
            Subscribe to out newsletter and stay updated
          </p>
        </div>
        <form
          className="bg-[#FFF0F0] text-[#1b405d] w-[313px] lg:w-full flex flex-row justify-between px-5 p-2 rounded-lg bg-opacity-25  text-sm"
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
            className=" bg-secondaryColor w-10 h-10 p-2 transform lg:translate-x-4 -translate-x-14 rounded-full"
            // onClick={handleSub}
            disabled={sending}
          >
            {" "}
            <AiOutlineSend className="text-2xl " />
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
