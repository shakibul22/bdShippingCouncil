import { publicRequest } from "@/requestMethod";
import Image from "next/image";
import React from "react";

const CondolenceLayout = async () => {
  const res = await publicRequest("/gallery/condolence");
  const data = res.data;
  return (
    <div className="px-4 py-10">
      <div className="max-w-screen-2xl mx-auto text-sm">
        {data?.map((con) =>
          con.featured ? (
            <div
              className="bg-black p-4 rounded-xl text-white mb-9"
              key={con.id}
            >
              <div className="flexCenter flex-col gap-6">
                <Image
                  src={con.image || "/img/demo.webp"}
                  width={250}
                  height={250}
                  className="border-2 border-white p-2"
                  alt="demo"
                />

                <div className="space-y-1 font-extralight text-center">
                  <p className="font-semibold text-base">{con.name}</p>
                  <p>{con.position}</p>
                  <p>Period: {con.period}</p>
                </div>

                <div className="w-full font-extralight max-w-5xl text-justify">
                  <p>{con.text}</p>
                </div>
              </div>
            </div>
          ) : null
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.map((con) =>
            !con.featured ? (
              <div
                className="border shadow-md rounded-xl p-2 flexCenter flex-col gap-4 bg-white "
                key={con.id}
              >
                <Image
                  src={con.image || "/img/demo.webp"}
                  width={120}
                  height={150}
                  className="rounded-full border-2 border-black shadow-sm"
                  alt="demo"
                />

                <div className="space-y-1 font-extralight text-center">
                  <p className="font-semibold text-base">{con.name}</p>
                  <p>{con.position}</p>
                  <p>Period: {con.period}</p>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default CondolenceLayout;
