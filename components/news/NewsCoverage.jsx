import React from "react";
import NewsCoverageCard from "../custom/NewsCoverageCard";
import { publicRequest } from "@/requestMethod";

const NewsCoverage = async () => {
  const res = await publicRequest("/publication/annual");
  const news = res.data;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-4 lg:gap-6">
      {news?.map((n) => (
        <NewsCoverageCard
          key={n.id}
          name={n.name}
          date={n.date}
          image={n.image}
          pdf={n.pdf}
        />
      ))}
    </div>
  );
};

export default NewsCoverage;
