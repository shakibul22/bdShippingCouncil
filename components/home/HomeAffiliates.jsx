"use client";

import { useState, useEffect } from "react";
import { publicRequest } from "@/requestMethod";
import Image from "next/image";

const getData = async () => {
  const res = await publicRequest("/home/affiliates");
  return res.data;
};

// eslint-disable-next-line @next/next/no-async-client-component
const HomeAffiliates = () => {
  const [affiliates, setAffiliates] = useState([]);
  const [activeAffiliate, setActiveAffiliate] = useState(null);
  const [hoveredAffiliate, setHoveredAffiliate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setAffiliates(data);
      if (data && data.length > 0) {
        setActiveAffiliate(data[0].id);
      }
    };
    fetchData();
  }, []);

  const handleAffiliateClick = (id) => {
    setActiveAffiliate(id);
  };

  const handleMouseEnter = (id) => {
    setHoveredAffiliate(id);
  };

  const handleMouseLeave = () => {
    setHoveredAffiliate(null);
  };

  return (
    <div>
      <h3 className="text-lg md:text-xl px-2 font-poppins lg:text-2xl text-white text-start">
        Our Affiliates
      </h3>

      <div className="mt-6 3xl:mt-10 w-full lg:max-w-5xl 3xl:max-w-7xl mx-auto flex xl:flex-row sm:flex-wrap justify-between gap-14 lg:gap-12 3xl:gap-20 border-t bg-transparent opacity-70 items-center">
        {affiliates &&
          Array.isArray(affiliates) &&
          affiliates.map((aff, index) => (
            <div
              key={aff.id}
              onClick={() => handleAffiliateClick(aff.id)}
              onMouseEnter={() => handleMouseEnter(aff.id)}
              onMouseLeave={handleMouseLeave}
              className={`w-[70px] sm:w-[75px] h-auto lg:w-[130px] 3xl:w-[130px] lg:h-[60px] 3xl:h-[85px] p-4 hover:border-t-4 border-white ${
                index >= 3 ? "hidden sm:block" : ""
              } ${
                activeAffiliate === aff.id && hoveredAffiliate === null
                  ? "border-t-4 bg-opacity-40"
                  : ""
              } ${
                hoveredAffiliate === aff.id ? "border-t-4 bg-opacity-40" : ""
              }`}
              style={{
                backgroundColor:
                  activeAffiliate === aff.id && hoveredAffiliate === null
                    ? "rgba(10, 74, 119, 0.40)"
                    : hoveredAffiliate === aff.id
                    ? "rgba(10, 74, 119, 0.40)"
                    : "",
              }}
            >
              <Image
                src={`/img/affiliates/${aff.logo}`}
                width={100}
                height={24}
                alt={aff.name}
                className="mx-auto"
                style={{ filter: "brightness(0) invert(1) contrast(100)" }}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeAffiliates;
