import { publicRequest } from "@/requestMethod";
import Image from "next/image";
import React from "react";

const ChairmanMessage = async () => {
  const res = await publicRequest("/chairman/message");
  const messageData = res.data;
  return (
    <div className="py-10">
      <div className="text-sm lg:text-base">
        {/* upper */}
        <div className="bg-[#F5F1ED] px-2">
          <div className="max-w-screen-2xl mx-auto py-6 flex flex-col gap-10 md:flex-row justify-between items-center  flex-shrink-0">
            <div className="text-center">
              <Image
                src={"/img/chairman/chairman2.webp"}
                width={250}
                height={400}
                alt="chairman"
                className="rounded-xl mx-auto shadow-lg"
              />

              <p className="mt-6 text-lg lg:text-xl font-semibold">
                Md. Rezaul Karim
              </p>
              <p>Chairman</p>
            </div>

            <div className="lg:max-w-3xl leading-8 flex-1">
              <p className="font-light text-justify">
                {messageData[0]?.message}
              </p>
            </div>
          </div>
        </div>

        {/* lower */}
        <div>
          <div className="px-2">
            <div
              className="max-w-screen-2xl mx-auto py-6 flex flex-col-reverse gap-10 md:flex-row-reverse
             justify-between items-center flex-shrink-0"
            >
              <div>
                <Image
                  src={"/img/chairman/chairman1.webp"}
                  width={300}
                  height={300}
                  alt="chairman"
                  className="rounded-xl mx-auto shadow-lg"
                />
              </div>

              <div className="lg:max-w-3xl leading-8 flex-1">
                <p className="font-light text-justify">
                  {messageData[1]?.message}
                </p>
              </div>
            </div>

            <div className="leading-8 max-w-screen-2xl mx-auto space-y-6">
              {messageData && messageData.slice(2, messageData.length).map((msg) => (
                <p className="font-light text-justify" key={msg.id}>
                  {msg.message}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChairmanMessage;
