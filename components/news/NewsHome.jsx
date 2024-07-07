import React from "react";
import NewsCard from "../custom/NewsCard";
import { publicRequest } from "@/requestMethod";
import ShippersNewsCard from "../custom/ShippersNewsCard";

const NewsHome = async () => {
  const res = await publicRequest("/publication/news");
  const news = res.data;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3  justify-center items-center gap-2 gap-y-4 lg:gap-6 w-full">
      {news?.map((n) => (
        <ShippersNewsCard
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
  );
};

export default NewsHome;
