import React from "react";
import NewsCard from "../custom/NewsCard";
import { publicRequest } from "@/requestMethod";

const NewsHome = async () => {
  const res = await publicRequest("/publication/news");
  const news = res.data;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 gap-y-4 lg:gap-6">
      {news?.map((n) => (
        <NewsCard
          key={n.id}
          image={n.image}
          name={n.name}
          date={n.date}
          volume={n.volume}
          pdf={n.pdf}
        />
      ))}
    </div>
  );
};

export default NewsHome;
