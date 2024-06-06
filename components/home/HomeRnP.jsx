import React from "react";
import NewsCard from "../custom/NewsCard";
import Link from "next/link";
import { publicRequest } from "@/requestMethod";
import { ImArrowUpRight2 } from "react-icons/im";

const getData = async () => {
  const res = await publicRequest("/publication/news");
  return res.data;
};

const data = getData();

const HomeRnP = async () => {
  const news = await data;
  return (
    <div className=" px-2 py-8 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="w-full">
          <div className="flex items-center space-x-2">
            <p className="text-xs font-semibold lg:text-lg">
              Research & Publications
            </p>
            <div className="w-[500px]">
              <hr className="flex-grow border-b mt-4 " />
            </div>
          </div>
          <h3 className="text-xl font-bold mt-3 lg:text-4xl space-x-2">
            Shippers News, <span className="text-btn">Reports</span> and
            <span className="text-btn"> Publication</span>
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-2 lg:gap-6 mt-10">
          <div className="flex flex-col gap-4 w-full">
            {news?.slice(0, 2).map((n) => (
              <NewsCard
                key={n.id}
                index={n.id}
                image={n.image}
                name={n.name}
                date={n.date}
                volume={n.volume}
                pdf={n.pdf}
              />
            ))}
          </div>
          <div className="w-full">
            {news?.slice(2, 4).map((n) => (
              <NewsCard
                key={n.id}
                index={n.id}
                image={n.image}
                name={n.name}
                date={n.date}
                volume={n.volume}
                pdf={n.pdf}
              />
            ))}
          </div>
        </div>

        <div>
          <Link
            href={"/news"}
            className="py-2.5 px-7 w-fit flex flex-row justify-center gap-2 leading-normal bg-btn items-center rounded-sm shadow-lg mx-auto mt-12 text-white font-semibold"
          >
            See More <ImArrowUpRight2 />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeRnP;
