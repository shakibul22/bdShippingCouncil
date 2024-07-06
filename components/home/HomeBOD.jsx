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
  console.log(bod);
  return (
    <div className="bg-softWhite  px-4 py-8 lg:py-20">
      <div className="w-full lg:max-w-5xl 3xl:max-w-7xl mx-auto">
        <div className="text-[#001e35] flex gap-2">
          <p className="text-xs font-semibold lg:text-lg">Organization Info</p>
          <div className="w-[150px] lg:w-[300px]">
            <hr className="flex-grow border-b mt-6 " />
          </div>
        </div>
        {/* <h3 className="text-xl font-bold mt-3 lg:text-4xl">{data.title}</h3> */}
        <h3 className="text-xl font-bold mt-3 lg:text-4xl">
          Office <span className="text-btn italic">Bearers</span> and{" "}
          <span className="text-btn italic">Directors</span> (
          {new Date().getFullYear() - 1} & {new Date().getFullYear()})
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
            <p className="py-3 px-6 w-fit flex flex-row justify-center gap-2 leading-normal bg-btn hover:bg-[#e8e8e8] hover:border-gray-900 hover:border hover:text-gray-900 cursor-pointer items-center rounded-md transition duration-500 shadow-lg mx-auto mt-12 text-white font-semibold">
              View All <ImArrowUpRight2 />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBOD;
