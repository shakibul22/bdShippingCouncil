"use client";

import { mainGallery } from "@/data/gallery";
import { publicRequest } from "@/requestMethod";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";

async function getData() {
  const res = await publicRequest("/gallery/allvideos");
  return res.data;
}

const data = getData();

// eslint-disable-next-line @next/next/no-async-client-component
const VideoGalleryLayout = async () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const videos = await data;
  return (
    <div className="px-2 py-10">
      <div className="max-w-screen-2xl mx-auto text-sm lg:text-lg grid grid-cols-1 lg:grid-cols-2 gap-10">
        {isClient ? (
          videos?.map((vid, i) => (
            <div key={i}>
              <ReactPlayer url={vid.link} controls={false} width={"100%"} />
              <p className="font-semibold mt-4">{vid.title}</p>
            </div>
          ))
        ) : (
          <p className="font-semibold tracking-widest animate__animated animate__bounceInRight text-center">
            Loading ...
          </p>
        )}
      </div>
    </div>
  );
};

export default VideoGalleryLayout;
