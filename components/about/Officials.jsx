import React from "react";
import BODcard from "../custom/BODcard";
import { publicRequest } from "@/requestMethod";

async function getData() {
  const res = await publicRequest(`/aboutUs/bod`);
  return await res.data;
}

const data = getData();

const Officials = async () => {
  const bodData = await data;

  return (
    <div className="px-2 py-10">
      <div className="max-w-screen-2xl mx-auto text-sm lg:text-base space-y-14">
        <div className="space-y-8 max-w-[950px] mx-auto">
          <h4 className="text-lg lg:text-xl font-semibold text-center">
            Office Bearers and Directors (2022 & 2023)
          </h4>
          <div className="md:hidden">
            <BODcard
              name={bodData[0].name}
              designation={bodData[0].designation}
              image={bodData[0].image}
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="md:mt-20">
              <BODcard
                name={bodData[1].name}
                designation={bodData[1].designation}
                image={bodData[1].image}
              />
            </div>
            <div className="hidden md:block">
              <BODcard
                name={bodData[0].name}
                designation={bodData[0].designation}
                image={bodData[0].image}
              />
            </div>

            <div className="md:mt-20">
              <BODcard
                name={bodData[2].name}
                designation={bodData[2].designation}
                image={bodData[2].image}
              />
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h4 className="text-lg lg:text-xl font-semibold text-center">
            Board of Directors
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
            {bodData.slice(3, bodData.length).map((dir) => (
              <BODcard
                name={dir.name}
                designation={dir.designation}
                image={dir.image}
                key={dir.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Officials;
