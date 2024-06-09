"use client";
import { publicRequest } from "@/requestMethod";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { TbSend } from "react-icons/tb";
const FooterForm = () => {
  const [form, setForm] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const [sending, setsending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setsending(true);
    try {
      let res = await publicRequest.post("/contact/formdata", form);
      if (res.status == 200) {
        setsending(false);
        toast.success(
          "Thank you for you message. We will contact you shortly."
        );
        setTimeout(() => {
          location.reload();
        }, 3000);
      }
    } catch (error) {
      setsending(false);
      toast.error("Something went wrong. Please try again!");
    }
  };

  return (
    <div className="space-y-6 flex-1 flex flex-col items-start">
      <div>
        <h4 className="text-2xl text-white">Contact with us</h4>
      </div>
      <form
        className="text-sm text-softWhite  space-y-3"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-2 overflow-hidden">
          <div className="flex-1">
            <input
              type="text"
              className=" bg-[#547086] text-white  p-4 rounded-lg mt-2 focus:outline-none w-full"
              required
              placeholder="Enter your name"
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
              }}
            />
          </div>
          <div className="flex-1">
            <input
              type="number"
              className=" bg-[#547086] text-white  p-4 rounded-lg mt-2 focus:outline-none w-full"
              required
              placeholder="Enter your number"
              onChange={(e) => {
                setForm({ ...form, number: e.target.value });
              }}
            />
          </div>
        </div>

        <div>
          <input
            type="email"
            className=" bg-[#547086] text-white  p-4 rounded-lg mt-2 focus:outline-none w-full"
            required
            placeholder="Enter your email"
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
          />
        </div>

        <div>
          <textarea
            rows={3}
            type="text"
            className=" bg-[#547086] text-white  p-4 rounded-lg mt-2 focus:outline-none w-full"
            required
            aria-required
            placeholder="Write something to us"
            onChange={(e) => {
              setForm({ ...form, message: e.target.value });
            }}
          />
        </div>

        <button
          type="submit"
          className="py-3 w-full bg-white flex flex-row justify-center items-center gap-3   text-blue-600"
          // onClick={(e) => handleSubmit(e)}
          disabled={sending}
        >
          <TbSend className="text-2xl" />{" "}
          {sending ? "Sending ..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default FooterForm;