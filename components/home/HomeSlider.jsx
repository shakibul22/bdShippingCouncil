"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const HomeSlider = () => {
  const validIndices = [9, 4, 11, 10, 12];
  const defaultId = 11;

  const [imageData, setImageData] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/home/sliderImage`
      );
      const data = await res.json();
      const filteredData = data.filter((img, index) =>
        validIndices.includes(index)
      );
      setImageData(filteredData);
      const initialIndex = filteredData.findIndex(
        (img) => img.id === defaultId
      );
      setHighlightedIndex(initialIndex >= 0 ? initialIndex : 0);
    }

    fetchData();
  }, []);

  const defaultIndex = imageData.findIndex((img) => img.id === defaultId);

  return (
    <div
      className="container py-10 px-4   mx-auto bg-primaryColor"
      onMouseLeave={() => setHighlightedIndex(defaultIndex)}
    >
      <h3 className="text-center text-4xl py-10 text-white ">
        Our Memorable Journey
      </h3>

      <div className="flex flex-row ">
        {imageData?.map((img, index) => (
          <div
            className={`relative group activeSlide h-[200px] lg:h-[400px] mb-16 rounded-lg overflow-hidden transition-all duration-500 ${
              highlightedIndex === index ? "flex-[5]" : "flex-[1]"
            }`}
            key={img.id}
            onMouseEnter={() => setHighlightedIndex(index)}
          >
            <Image
              src={`/img/slider/${img.image}`}
              height={900}
              width={800}
              alt="sliderImage"
              className={`mx-auto rounded-none overflow-hidden ${
                highlightedIndex === index
                  ? "w-full h-full"
                  : "w-full h-full object-cover"
              } transition-all duration-500`}
              priority
            />

            <div
              className={`absolute bottom-2 left-0 easyTrans px-4 hidden md:block z-10 ${
                highlightedIndex === index ||
                (highlightedIndex === null && index === defaultIndex)
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }`}
            >
              <p className="text-white text-sm font-extralight bg-black/60 backdrop-blur-sm p-2 rounded-lg">
                {img.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;
