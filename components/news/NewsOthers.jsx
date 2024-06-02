import { publicRequest } from "@/requestMethod";
import React from "react";
import NewsCard from "../custom/NewsCard";

const NewsOthers = async () => {
  const res = await publicRequest("/publication/others");
  const news = res.data;
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 gap-y-4 lg:gap-6">
      {news?.map((n) => (
        <NewsCard
          key={n.id}
          image={n.image}
          name={n.name}
          date={n.date}
          pdf={n.pdf}
        />
      ))}
    </div>
  );
};

export default NewsOthers;
