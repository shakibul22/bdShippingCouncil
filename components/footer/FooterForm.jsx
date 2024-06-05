"use client";
import { publicRequest } from "@/requestMethod";
import React, { useState } from "react";
import toast from "react-hot-toast";

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
    <div className="space-y-6 flex-1">
      <div>
        <h4 className="font-medium">Contact with us</h4>
      </div>
      <form
        className="text-sm text-softWhite max-w-sm mx-auto space-y-3"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-2 overflow-hidden">
          <div className="flex-1">
            <label className="block">Name</label>
            <input
              type="text"
              className="text-neutral-700 bg-[#547086] p-1.5 focus:outline-none w-full"
              required
              placeholder="Enter your name"
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
              }}
            />
          </div>
          <div className="flex-1">
            <label className="block">Number</label>
            <input
              type="number"
              className="text-neutral-700 bg-[#547086] p-1.5 focus:outline-none w-full"
              required
              placeholder="Enter your number"
              onChange={(e) => {
                setForm({ ...form, number: e.target.value });
              }}
            />
          </div>
        </div>

        <div>
          <label className="block">Email</label>
          <input
            type="email"
            className="text-neutral-700 bg-[#547086] p-1.5 focus:outline-none w-full"
            required
            placeholder="Enter your email"
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
          />
        </div>

        <div>
          <label className="block">Message</label>
          <textarea
            rows={3}
            type="text"
            className="text-neutral-700 bg-[#547086] p-1.5 focus:outline-none w-full"
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
          className="py-3 w-full bg-white text-blue-600"
          // onClick={(e) => handleSubmit(e)}
          disabled={sending}
        >
          {sending ? "Sending ..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default FooterForm;
