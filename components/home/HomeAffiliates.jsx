"use client";

import { publicRequest } from "@/requestMethod";
import Image from "next/image";

const getData = async () => {
  const res = await publicRequest("/home/affiliates");
  return res.data;
};

const data = getData();

// eslint-disable-next-line @next/next/no-async-client-component
const HomeAffiliates = async () => {
  const affiliates = await data;

  return (
    <div>
      <h3 className="text-lg md:text-xl px-2  font-bold lg:text-2xl text-white text-start">
        Our Affiliates
      </h3>

      <div className="lg:mt-10 max-w-7xl mx-auto flex pb-6 xl:flex-row sm:flex-wrap justify-between gap-8 lg:gap-20 border-t bg-transparent opacity-70 items-center">
  {affiliates && Array.isArray(affiliates) &&
    affiliates.map((aff, index) => (
      <div
        key={aff.id}
        className={`hover:bg-[#063152] w-[60px] h-[16px] lg:w-[130px] lg:h-[44px] p-4 hover:border-t-4 border-white ${index >= 4 ? "hidden sm:block" : ""}`}
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
