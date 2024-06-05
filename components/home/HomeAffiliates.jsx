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
    <div className="">
      <div className="mx-auto max-w-7xl">
        <h3 className="text-xl font-bold lg:text-2xl text-white text-start">
          Our Affiliates
        </h3>

        <div className="mt-10 flex xl:flex-row sm:flex-wrap justify-between gap-20 border-t bg-transparent opacity-70  items-center">
          {affiliates?.map((aff) => (
            <div
              key={aff.id}
              className="hover:bg-[#063152] p-4 hover:border-t-4 border-white"
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
    </div>
  );
};

export default HomeAffiliates;
