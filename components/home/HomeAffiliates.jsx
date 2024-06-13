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

  return (
    <div>
      <h3 className="text-lg md:text-xl px-2 font-bold lg:text-2xl text-white text-start">
        Our Affiliates
      </h3>

      <div className="mt-6 lg:mt-10 w-full lg:max-w-5xl 3xl:max-w-7xl mx-auto flex  xl:flex-row sm:flex-wrap justify-between gap-14 lg:gap-12 3xl:gap-20 border-t bg-transparent opacity-70 items-center">
        {affiliates &&
          Array.isArray(affiliates) &&
          affiliates.map((aff, index) => (
            <div
              key={aff.id}
              onClick={() => handleAffiliateClick(aff.id)}
              className={`hover:bg-[#063152] w-[80px] h-auto lg:w-[130px] lg:h-[74px] p-4 hover:border-t-4 border-white ${
                index >= 3 ? "hidden sm:block" : ""
              } ${activeAffiliate === aff.id ? "bg-[#063152] border-t-4" : ""}`}
            >
              <Image
                src={`/img/affiliates/${aff.logo}`}
                width={100}
                height={24}
                alt={aff.name}
                className="mx-auto foreground-[#d6dbde]"
                style={{ filter: "brightness(0) invert(1) contrast(100)" }}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeAffiliates;
