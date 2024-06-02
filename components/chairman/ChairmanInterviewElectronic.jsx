"use client";

import { publicRequest } from "@/requestMethod";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";

const getData = async () => {
  const res = await publicRequest("/chairman/interview_electronic");
  return res.data;
};

const Data_p = getData();

// eslint-disable-next-line @next/next/no-async-client-component
const ChairmanInterviewElectronic = async () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // const res = await publicRequest("/chairman/interview_electronic");
  const Data = await Data_p;

  return (
    <div className="px-2 py-10">
      <div className="max-w-screen-2xl mx-auto text-sm lg:text-base grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {isClient
          ? Data?.map((vid) => (
              <div key={vid.id}>
                <ReactPlayer url={vid.link} width={"100%"} />
                <p className="font-medium mt-4">{vid.title}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default ChairmanInterviewElectronic;
