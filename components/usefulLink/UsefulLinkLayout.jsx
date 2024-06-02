"use client";

import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import UsefulLinkCard from "../custom/UsefulLinkCard";
import { publicRequest } from "@/requestMethod";

// eslint-disable-next-line @next/next/no-async-client-component
const UsefulLinkLayout = () => {
  const [tab, settab] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await publicRequest("/contact/useful-links");
      setData(res.data);
    }
    getData();
  }, []);

  return (
    <div className="subRoutebg">
      <div className="bg-[url('/img/useful_link_bg.webp')] subRoutebanner">
        <div className="subRouteblack">
          <h2 className="subRouteTitle animate__animated animate__fadeInUp">
            Useful Links
          </h2>
        </div>
      </div>

      <div className="px-2 py-6 text-textPrimary max-w-screen-2xl mx-auto">
        <div className="text-sm lg:text-base text-center font-semibold flex gap-2 md:gap-8">
          <div
            className={`py-3 sm:py-5 md:py-8 px-1 flex-1 ${
              tab === 1
                ? "bg-secondaryColor text-white cursor-default"
                : "bg-tabbg cursor-pointer"
            }`}
            onClick={() => settab(1)}
          >
            Government Links
          </div>
          <div
            className={`py-3 sm:py-5 md:py-8 px-1 flex-1 ${
              tab === 2
                ? "bg-secondaryColor text-white cursor-default"
                : "bg-tabbg cursor-pointer"
            }`}
            onClick={() => settab(2)}
          >
            Foreign Chamber Link
          </div>
          <div
            className={`py-3 sm:py-5 md:py-8 px-1 flex-1 ${
              tab === 3
                ? "bg-secondaryColor text-white cursor-default"
                : "bg-tabbg cursor-pointer"
            }`}
            onClick={() => settab(3)}
          >
            National Chamber Link
          </div>
        </div>

        <div className="my-6">
          {/* <div className="border-2 rounded-[10px] w-full bg-white flexCenter px-4 max-w-md ml-auto">
            <AiOutlineSearch size={24} />
            <input
              type="text"
              className="w-full px-4 py-2 focus:outline-none placeholder-slate-300"
              placeholder="Search Organizations"
            />
          </div> */}
        </div>

        {data.length === 0 ? (
          <p className="font-semibold tracking-wider animate__animated animate__fadeInRight animate__slower">Loading ...</p>
        ) : null}

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-6">
          {tab === 1
            ? data
                ?.filter((link, i) => link.type === "government")
                .map((link) => (
                  <UsefulLinkCard
                    name={link.Name}
                    logo={link.logo}
                    key={link.id}
                  />
                ))
            : tab === 2
            ? data
                .filter((link, i) => link.type === "foreign")
                .map((link) => (
                  <UsefulLinkCard
                    name={link.Name}
                    logo={link.logo}
                    key={link.id}
                  />
                ))
            : data
                .filter((link, i) => link.type === "national")
                .map((link) => (
                  <UsefulLinkCard
                    name={link.Name}
                    logo={link.logo}
                    key={link.id}
                  />
                ))}
        </div>
      </div>
    </div>
  );
};

export default UsefulLinkLayout;
