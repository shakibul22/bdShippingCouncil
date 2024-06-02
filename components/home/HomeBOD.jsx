import React from "react";
import BODcard from "../custom/BODcard";
import Link from "next/link";
import { publicRequest } from "@/requestMethod";

async function getData() {
  const res = await publicRequest(`/aboutUs/bod`);
  return await res.data;
}

const bod_data = getData();

const HomeBOD = async ({ data }) => {
  const bod = await bod_data;
  return (
    <div className="bg-softWhite px-2 py-8 lg:py-20">
      <div className="max-w-screen-2xl mx-auto">
        <p className="text-xs font-semibold lg:text-lg">Organization Info</p>
        <h3 className="text-xl font-bold mt-3 lg:text-4xl">{data.title}</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 mt-10">
          {bod?.slice(0, 4).map((dir) => (
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
          <Link
            href={"/about/officials"}
            className="py-2.5 px-5 w-fit leading-normal bg-secondaryColor block shadow-lg mx-auto mt-14"
          >
            <p className="text-white font-semibold">View All</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBOD;
