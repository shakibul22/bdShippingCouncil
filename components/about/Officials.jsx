"use client";
import React, { useState, useEffect } from "react";
import BODcard from "../custom/BODcard";
import { publicRequest } from "@/requestMethod";

const Officials = () => {
  const [bodData, setBodData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await publicRequest(`/aboutUs/bod`);
        const data = await res.data;
        setBodData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  console.log(bodData);
  return (
    <div className="px-2 py-10">
      <div className="w-full lg:max-w-5xl 3xl:max-w-7xl mx-auto text-sm lg:text-base space-y-14">
        <div className="space-y-8 w-full lg:max-w-[770px] 3xl:max-w-[950px] mx-auto">
          <h4 className="text-lg lg:text-xl font-semibold text-center">
            Office Bearers and Directors ({new Date().getFullYear()} &{" "}
            {new Date().getFullYear() + 1})
          </h4>
          <div className="md:hidden flex justify-center items-center">
            {bodData.length > 0 && (
              <BODcard
                name={bodData[0].name}
                designation={bodData[0].designation}
                image={bodData[0].image}
                mob={bodData[0].mob}
                email={bodData[0].email}
                address={bodData[0].address}
              />
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="md:mt-20">
              {bodData.length > 1 && (
                <BODcard
                  name={bodData[1].name}
                  designation={bodData[1].designation}
                  image={bodData[1].image}
                  mob={bodData[1].mob}
                  email={bodData[1].email}
                  address={bodData[1].address}
                />
              )}
            </div>
            <div className="hidden md:block">
              {bodData.length > 0 && (
                <BODcard
                  name={bodData[0].name}
                  designation={bodData[0].designation}
                  image={bodData[0].image}
                  mob={bodData[0].mob}
                  email={bodData[0].email}
                  address={bodData[0].address}
                />
              )}
            </div>
            <div className="md:mt-20">
              {bodData.length > 2 && (
                <BODcard
                  name={bodData[2].name}
                  designation={bodData[2].designation}
                  image={bodData[2].image}
                  mob={bodData[2].mob}
                  email={bodData[2].email}
                  address={bodData[2].address}
                />
              )}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h4 className="text-lg lg:text-xl font-semibold text-center">
            Board of Directors
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
            {bodData.slice(3).map((dir) => (
              <BODcard
                name={dir.name}
                designation={dir.designation}
                image={dir.image}
                key={dir.id}
                mob={dir.mob}
                email={dir.email}
                address={dir.address}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Officials;
