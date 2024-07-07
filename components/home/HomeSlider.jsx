"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ImArrowUpRight2 } from "react-icons/im";

const HomeSlider = () => {
  const [allImageData, setAllImageData] = useState([]);
  const [imageData, setImageData] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
  console.log(allImageData);
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

  const getActiveIndex = () => {
    return hoveredIndex !== null ? hoveredIndex : highlightedIndex;
  };

  return (
    <div
      className="py-5 px-10 w-full lg:min-w-7xl xl:container mx-auto bg-primaryColor"
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="flex flex-col justify-center mb-1 items-center">
        <h3 className="text-center font-poppins text-xl font-bold md:text-xl pb-2  lg:text-2xl 3xl:text-3xl tracking-[.8px] pt-5 text-white relative">
          Our Memorable Journey
          <span className="block h-0.5 w-full bg-current mt-2"></span>
        </h3>
      </div>
      <section className="relative z-10 lg:py-[0px]">
        <div className=" py-6">
          <div className="-mx-4 flex flex-wrap lg:justify-between">
            <div className="relative">
              <div>
                <div className="flex rounded-2xl flex-row p-2">
                  {imageData?.map((img, index) => (
                    <div
                      className={`relative rounded group activeSlide h-[200px] lg:h-[497px] mb-16 overflow-hidden transition-all duration-500 ${
                        getActiveIndex() === index
                          ? "flex-[6] opacity-100"
                          : "flex-[1] opacity-50"
                      } ${
                        getActiveIndex() === index ? "shadow-none" : "shadow-md"
                      } `} // Add the rounded-xl class here
                      key={img.id}
                      onMouseEnter={() => setHoveredIndex(index)}
                    >
                      <Image
                        src={`/img/slider/${img.image}`}
                        height={900}
                        width={800}
                        alt="sliderImage"
                        className={`mx-auto rounded-none overflow-hidden ${
                          getActiveIndex() === index
                            ? "w-full h-full"
                            : "w-full h-full object-cover"
                        } transition-all duration-500`}
                        priority
                      />

                      <div
                        className={`absolute bottom-2 left-0 easyTrans px-4 hidden md:block z-10 ${
                          getActiveIndex() === index
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                      >
                        <p
                          className="text-white text-sm font-normal font-quattrocento italic tracking-[0.36px] backdrop-blur-sm p-4 rounded-lg"
                          style={{ backgroundColor: "rgba(0, 30, 53, 0.60)" }}
                        >
                          &ldquo;{img.caption}&ldquo;
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div class=" absolute bottom-20 -left-5 3xl:-left-6 lg:bottom-[14.5%]">
                  <svg
                    className="absolute top-3"
                    width="134"
                    height="34"
                    viewBox="0 0 134 34"
                    fill="#8599a8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2" cy="17" r="2.5" fill="#8599a8" />
                    <circle cx="17" cy="17" r="2.5" fill="#8599a8" />
                    <circle cx="32" cy="17" r="2.5" fill="#8599a8" />
                    <circle cx="47" cy="17" r="2.5" fill="#8599a8" />
                    <circle cx="62" cy="17" r="2.5" fill="#8599a8" />
                  </svg>
                  <svg
                    className="absolute top-6"
                    width="134"
                    height="34"
                    viewBox="0 0 134 34"
                    fill="#8599a8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2" cy="17" r="2.5" fill="#8599a8" />
                    <circle cx="17" cy="17" r="2.5" fill="#8599a8" />
                    <circle cx="32" cy="17" r="2.5" fill="#8599a8" />
                    <circle cx="47" cy="17" r="2.5" fill="#8599a8" />
                    <circle cx="62" cy="17" r="2.5" fill="#8599a8" />
                  </svg>
                </div>

                <div class=" absolute bottom-[66%] lg:bottom-[33%] -left-9 3xl:-left-10">
                  <svg
                    class="absolute left-0"
                    width="34"
                    height="134"
                    viewBox="0 0 34 134"
                    fill="#8599a8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="17" cy="92" r="2.5" fill="#8599a8" />
                    <circle cx="17" cy="107" r="2.5" fill="#8599a8" />
                    <circle cx="17" cy="122" r="2.5" fill="#8599a8" />
                  </svg>
                  <svg
                    class="absolute left-4"
                    width="34"
                    height="134"
                    viewBox="0 0 34 134"
                    fill="#8599a8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="17" cy="92" r="2.5" fill="#8599a8" />
                    <circle cx="17" cy="107" r="2.5" fill="#8599a8" />
                    <circle cx="17" cy="122" r="2.5" fill="#8599a8" />
                  </svg>
                </div>
                <div class=" absolute -top-8 right-20 ">
                  <svg
                    className="absolute top-0"
                    width="100"
                    height="34"
                    viewBox="0 0 134 34"
                    fill="#8599a8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="62" cy="17" r="2.5" fill="#8599a8" />
                    <circle cx="77" cy="17" r="2.5" fill="#8599a8" />
                    <circle cx="92" cy="17" r="2.5" fill="#8599a8" />
                  </svg>
                  <svg
                    className="absolute top-4"
                    width="100"
                    height="34"
                    viewBox="0 0 134 34"
                    fill="#8599a8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="62" cy="17" r="2.5" fill="#8599a8" />
                    <circle cx="77" cy="17" r="2.5" fill="#8599a8" />
                    <circle cx="92" cy="17" r="2.5" fill="#8599a8" />
                  </svg>
                </div>
                <div class=" absolute -top-[9%] lg:-top-[4.1%]  3xl:-top-[4.1%]  right-1">
                  <svg
                    class="absolute -left-1 lg:left-0"
                    width="30"
                    height="134"
                    viewBox="0 0 34 134"
                    fill="#8599a8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="17" cy="2" r="2.5" fill="#8599a8" />
                    <circle cx="17" cy="20" r="2.5" fill="#8599a8" />
                    <circle cx="17" cy="35" r="2.5" fill="#8599a8" />
                    <circle cx="17" cy="50" r="2.5" fill="#8599a8" />
                    <circle cx="17" cy="65" r="2.5" fill="#8599a8" />
                  </svg>
                  <svg
                    class="absolute -left-3.5 md:left-2 lg:-left-3"
                    width="30"
                    height="134"
                    viewBox="0 0 34 134"
                    fill="#8599a8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="17" cy="2" r="2.5" fill="#8599a8" />
                    <circle cx="17" cy="20" r="2.5" fill="#8599a8" />
                    <circle cx="17" cy="35" r="2.5" fill="#8599a8" />
                    <circle cx="17" cy="50" r="2.5" fill="#8599a8" />
                    <circle cx="17" cy="65" r="2.5" fill="#8599a8" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative inset-0 m-auto rounded-md overflow-hidden border hover:bg-btn transition duration-500 text-btn bg-white border-[#0081e9] hover:border-white hover:text-white">
              <Link
                href={"/media"}
                className="py-3 px-[25px] w-fit flex flex-row justify-center gap-2 leading-normal  items-center  shadow-lg mx-auto  font-medium"
              >
                See More <ImArrowUpRight2 />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSlider;
