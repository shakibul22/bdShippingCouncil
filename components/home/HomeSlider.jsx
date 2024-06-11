"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const HomeSlider = () => {
  const [allImageData, setAllImageData] = useState([]);
  const [imageData, setImageData] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/home/sliderImage`
      );
      const data = await res.json();
      setAllImageData(data);
      const randomImages = getRandomImages(data, 5);
      setImageData(randomImages);
    }

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % imageData.length;
        if (nextIndex === 0) {
          const newRandomImages = getRandomImages(allImageData, 5);
          setImageData(newRandomImages);
        }
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [imageData, allImageData]);

  function getRandomImages(data, count) {
    const shuffled = data.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  return (
    <div
      className=" py-10 px-10 w-full lg:max-w-5xl 3xl:max-w-7xl mx-auto bg-primaryColor"
      onMouseLeave={() => setHighlightedIndex(0)}
    >
      <h3 className="text-center text-xl font-poppins md:text-2xl pb-8 lg:text-4xl pt-5 text-white">
        Our Memorable Journey
      </h3>
      <section className="relative z-10 overflow-hi lg:py-[80px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap lg:justify-between">
            <div className="relative rounded-lg ">
              <div>
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
                          highlightedIndex === index
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                      >
                        <p className="text-white text-sm font-extralight font-quattrocento italic tracking-1 bg-black/60 backdrop-blur-sm p-2 rounded-lg">
                          {img.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div class=" absolute bottom-20 -left-4 lg:bottom-[16%]">
                  <svg
                    className="absolute top-3"
                    width="134"
                    height="34"
                    viewBox="0 0 134 34"
                    fill="#ffffff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2" cy="17" r="1.66667" fill="#ffffff" />
                    <circle cx="17" cy="17" r="1.66667" fill="#ffffff" />
                    <circle cx="32" cy="17" r="1.66667" fill="#ffffff" />
                    <circle cx="47" cy="17" r="1.66667" fill="#ffffff" />
                    <circle cx="62" cy="17" r="1.66667" fill="#ffffff" />
                    <circle cx="77" cy="17" r="1.66667" fill="#ffffff" />
                  </svg>
                  <svg
                    className="absolute top-6"
                    width="134"
                    height="34"
                    viewBox="0 0 134 34"
                    fill="#ffffff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2" cy="17" r="1.66667" fill="#ffffff" />
                    <circle cx="17" cy="17" r="1.66667" fill="#ffffff" />
                    <circle cx="32" cy="17" r="1.66667" fill="#ffffff" />
                    <circle cx="47" cy="17" r="1.66667" fill="#ffffff" />
                    <circle cx="62" cy="17" r="1.66667" fill="#ffffff" />
                    <circle cx="77" cy="17" r="1.66667" fill="#ffffff" />
                  </svg>
                </div>

                <div class="hidden lg:block absolute bottom-16 -left-4 lg:bottom-[16%]">
                  <svg
                    className="absolute top-3"
                    width="134"
                    height="34"
                    viewBox="0 0 134 34"
                    fill="#ffffff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="62" cy="17" r="1.66667" fill="#ffffff" />
                    <circle cx="77" cy="17" r="1.66667" fill="#ffffff" />
                    <circle cx="92" cy="17" r="1.66667" fill="#ffffff" />
                    <circle cx="107" cy="17" r="1.66667" fill="#ffffff" />
                    <circle cx="122" cy="17" r="1.66667" fill="#ffffff" />
                  </svg>
                  <svg
                    className="absolute top-6"
                    width="134"
                    height="34"
                    viewBox="0 0 134 34"
                    fill="#ffffff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="62" cy="17" r="1.66667" fill="#ffffff" />
                    <circle cx="77" cy="17" r="1.66667" fill="#ffffff" />
                    <circle cx="92" cy="17" r="1.66667" fill="#ffffff" />
                    <circle cx="107" cy="17" r="1.66667" fill="#ffffff" />
                    <circle cx="122" cy="17" r="1.66667" fill="#ffffff" />
                  </svg>
                </div>
                <div class=" absolute bottom-[70%] lg:bottom-[39%] -left-10">
                  <svg
                    class="absolute left-2"
                    width="34"
                    height="134"
                    viewBox="0 0 34 134"
                    fill="#ffffff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="17" cy="62" r="1.66667" fill="#ffffff" />
                    <circle cx="17" cy="77" r="1.66667" fill="#ffffff" />
                    <circle cx="17" cy="92" r="1.66667" fill="#ffffff" />
                    <circle cx="17" cy="107" r="1.66667" fill="#ffffff" />
                    <circle cx="17" cy="122" r="1.66667" fill="#ffffff" />
                  </svg>
                  <svg
                    class="absolute left-4"
                    width="34"
                    height="134"
                    viewBox="0 0 34 134"
                    fill="#ffffff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="17" cy="62" r="1.66667" fill="#ffffff" />
                    <circle cx="17" cy="77" r="1.66667" fill="#ffffff" />
                    <circle cx="17" cy="92" r="1.66667" fill="#ffffff" />
                    <circle cx="17" cy="107" r="1.66667" fill="#ffffff" />
                    <circle cx="17" cy="122" r="1.66667" fill="#ffffff" />
                  </svg>
                </div>
                <div class=" absolute -top-10 right-24">
                  <svg
                    className="absolute top-0"
                    width="120"
                    height="34"
                    viewBox="0 0 134 34"
                    fill="#ffffff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2" cy="17" r="1.66667" fill="#ffffff" />
                    <circle cx="17" cy="17" r="1.66667" fill="#ffffff" />
                    <circle cx="32" cy="17" r="1.66667" fill="#ffffff" />
                    <circle cx="47" cy="17" r="1.66667" fill="#ffffff" />
                    <circle cx="62" cy="17" r="1.66667" fill="#ffffff" />
                    <circle cx="77" cy="17" r="1.66667" fill="#ffffff" />
                    <circle cx="92" cy="17" r="1.66667" fill="#ffffff" />
                  </svg>
                  <svg
                    className="absolute top-4"
                    width="120"
                    height="34"
                    viewBox="0 0 134 34"
                    fill="#ffffff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2" cy="17" r="1.66667" fill="#ffffff" />
                    <circle cx="17" cy="17" r="1.66667" fill="#ffffff" />
                    <circle cx="32" cy="17" r="1.66667" fill="#ffffff" />
                    <circle cx="47" cy="17" r="1.66667" fill="#ffffff" />
                    <circle cx="62" cy="17" r="1.66667" fill="#ffffff" />
                    <circle cx="77" cy="17" r="1.66667" fill="#ffffff" />
                    <circle cx="92" cy="17" r="1.66667" fill="#ffffff" />
                  </svg>
                </div>
                <div class=" absolute -top-[5.5%] right-3.5">
                  <svg
                    class="absolute left-1"
                    width="34"
                    height="134"
                    viewBox="0 0 34 134"
                    fill="#ffffff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="17" cy="2" r="1.66667" fill="#ffffff" />
                    <circle cx="17" cy="17" r="1.66667" fill="#ffffff" />
                    <circle cx="17" cy="32" r="1.66667" fill="#ffffff" />
                    <circle cx="17" cy="47" r="1.66667" fill="#ffffff" />
                    <circle cx="17" cy="62" r="1.66667" fill="#ffffff" />
                    <circle cx="17" cy="77" r="1.66667" fill="#ffffff" />
                    <circle cx="17" cy="92" r="1.66667" fill="#ffffff" />
                  </svg>
                  <svg
                    class="absolute -left-1 md:left-2 lg:left-4"
                    width="34"
                    height="134"
                    viewBox="0 0 34 134"
                    fill="#ffffff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="17" cy="2" r="1.66667" fill="#ffffff" />
                    <circle cx="17" cy="17" r="1.66667" fill="#ffffff" />
                    <circle cx="17" cy="32" r="1.66667" fill="#ffffff" />
                    <circle cx="17" cy="47" r="1.66667" fill="#ffffff" />
                    <circle cx="17" cy="62" r="1.66667" fill="#ffffff" />
                    <circle cx="17" cy="77" r="1.66667" fill="#ffffff" />
                    <circle cx="17" cy="92" r="1.66667" fill="#ffffff" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSlider;
