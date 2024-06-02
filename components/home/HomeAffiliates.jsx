"use client";

import { publicRequest } from "@/requestMethod";
import Image from "next/image";
import Slider from "react-slick";

const getData = async () => {
  const res = await publicRequest("/home/affiliates");
  return res.data;
};

const data = getData();

// eslint-disable-next-line @next/next/no-async-client-component
const HomeAffiliates = async () => {
  const affiliates = await data;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    swipeToSlide: true,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="bg-[url('/img/affiliatebg.webp')] bg-cover text-white">
      <div className="bg-black/50 backdrop-blur-[1px] px-2 xl:px-0 py-8 lg:py-16">
        <div className="mx-auto max-w-screen-2xl">
          <h3 className="text-xl font-bold lg:text-4xl text-center">
            Our Affiliates
          </h3>

          <div className="mt-10">
            {affiliates?.length > 0 ? (
              <Slider {...settings}>
                {affiliates?.map((aff) => (
                  <div key={aff.id}>
                    <Image
                      src={`/img/affiliates/${aff.logo}`}
                      width={100}
                      height={24}
                      alt="temp"
                      className="mx-auto"
                    />
                  </div>
                ))}
              </Slider>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAffiliates;
