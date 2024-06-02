"use client";

import Image from "next/image";
import React, { useState } from "react";
import FooterCred from "./FooterCred";
import { publicRequest } from "@/requestMethod";
import toast from "react-hot-toast";

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
    <div className="flex-1">
      <div className="flex items-center gap-2 w-fit mx-auto lg:mx-0">
        <Image src={"/img/logo.webp"} width={45} height={45} alt="logo" />
        <h2 className="font-semibold lg:text-xl">
          Shippers’ Council of Bangladesh
        </h2>
      </div>

      <div>
        <p className="font-extralight text-sm mt-1">
          There are many variations of passages of Lorem the Ipsum available it
          majority.
        </p>
      </div>

      <div>
        <form
          className="bg-[#FFF0F0] p-1 bg-opacity-25 mt-6 text-sm"
          onSubmit={handleSub}
        >
          <input
            type="email"
            className="p-3 w-[70%] bg-transparent focus:outline-none"
            placeholder="Enter your email"
            required
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
          />
          <button
            type="submit"
            className="py-3 w-[30%] bg-secondaryColor"
            // onClick={handleSub}
            disabled={sending}
          >
            {sending ? "Please wait ..." : "Subscribe"}
          </button>
        </form>
      </div>

      <div className="mt-20 hidden lg:block">
        <FooterCred />
      </div>
    </div>
  );
};

export default FooterSub;
