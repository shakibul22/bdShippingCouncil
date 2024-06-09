import React from "react";
import BODcard from "../custom/BODcard";
import Link from "next/link";
import { publicRequest } from "@/requestMethod";
import { ImArrowUpRight2 } from "react-icons/im";

async function getData() {
  const res = await publicRequest(`/aboutUs/bod`);
  return await res.data;
}

const bod_data = getData();

const HomeBOD = async ({ data }) => {
  const bod = await bod_data;
  return (
    <div className="bg-softWhite px-4 py-8 lg:py-20">
      <div className="w-full lg:max-w-7xl mx-auto">
        <p className="text-xs font-semibold lg:text-lg">Organization Info</p>
        {/* <h3 className="text-xl font-bold mt-3 lg:text-4xl">{data.title}</h3> */}
        <h3 className="text-xl font-bold mt-3 lg:text-4xl">
          Office <span className="text-btn italic">Bearers</span> and{" "}
          <span className="text-btn italic">Directors</span> (2022 & 2023)
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5 mt-10">
          {bod &&
            Array.isArray(bod) &&
            bod
              ?.slice(0, 4)
              .map((dir) => (
                <BODcard
                  key={dir.id}
                  id={dir.id}
                  image={dir.image}
                  name={dir.name}
                  designation={dir.designation}
                />
              ))}
        </div>
        <div>
          <Link href={"/about/officials"} className="w-[200px]">
            <p className="py-2.5 px-7 w-fit flex flex-row justify-center gap-2 leading-normal bg-btn items-center rounded-sm shadow-lg mx-auto mt-12 text-white font-semibold">
              View All <ImArrowUpRight2 />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBOD;
