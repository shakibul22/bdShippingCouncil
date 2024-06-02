import { AboutData } from "@/data/About";
import React from "react";
import ServiceCard from "../custom/ServiceCard";
import { publicRequest } from "@/requestMethod";

async function getData() {
  const res = await publicRequest("/aboutUs/activity");
  return await res.data;
}

const data = getData();

const Activities = async () => {
  const activities = await data;
  return (
    <div className="px-2 py-6">
      <div className="max-w-screen-2xl mx-auto text-sm lg:text-base space-y-10">
        <h4 className="font-semibold text-center">
          {AboutData[2].activities.header}
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {activities.map((serv) => (
            <ServiceCard
              key={serv.id}
              id={serv.id}
              text={serv.text}
              bgc={serv.bg}
              bgs={serv.bg2}
            />
          ))}
        </div>

        <div className="py-6">
          <h4 className="font-semibold text-center">
            {AboutData[2].activities.footer.title}
          </h4>

          <div className="mt-6 w-fit mx-auto space-y-2">
            {AboutData[2].activities.footer.points.map((point, i) => (
              <p key={i}>{point}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
