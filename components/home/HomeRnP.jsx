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
    <div className=" px-4 py-8 lg:py-20 bg-[#e9f5ff] ">
      <div className="w-full lg:max-w-5xl 3xl:max-w-7xl mx-auto">
        <div className="w-full">
          <div className="flex items-center space-x-2">
            <p className="text-md font-semibold lg:text-lg">
              Research & Publications
            </p>
            <div className="w-[120px] lg:w-[500px]">
              <hr className="flex-grow border-b mt-4 " />
            </div>
          </div>
          <h3 className="text-xl  font-bold mt-3 lg:text-4xl space-x-2">
            Shippers News, <span className="text-btn italic">Reports</span> and
            <span className="text-btn italic"> Publication</span>
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-2 lg:gap-6 shadow-lg shadow-blue-500/50 bg-[#d1e9fd] mt-10">
          <div className="flex flex-col gap-4 w-full">
            {news &&
              Array.isArray(news) &&
              news
                ?.slice(0, 2)
                .map((n) => (
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
            {news &&
              Array.isArray(news) &&
              news
                ?.slice(2, 4)
                .map((n) => (
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
            className="py-2.5 px-7 w-fit flex flex-row justify-center gap-2 leading-normal bg-btn hover:bg-white hover:border-btn hover:border hover:text-btn items-center rounded-md transition duration-500 shadow-lg mx-auto mt-12 text-white font-semibold"
          >
            See More <ImArrowUpRight2 />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeRnP;
