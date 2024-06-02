import React from "react";
import NewsRecomCard from "../custom/NewsRecomCard";
import { publicRequest } from "@/requestMethod";

const NewsRecom = async () => {
  const res = await publicRequest("/publication/budget");
  const news = res.data;
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 gap-y-4 lg:gap-6">
      {news?.map((n) => (
        <NewsRecomCard name={n.name} date={n.date} pdf={n.pdf} key={n.id} />
      ))}
    </div>
  );
};

export default NewsRecom;
