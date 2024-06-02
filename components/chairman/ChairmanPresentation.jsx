import React from "react";
import PDFCard from "../custom/PDFCard";
import { publicRequest } from "@/requestMethod";

const ChairmanPresentation = async () => {
  const res = await publicRequest("/chairman/presentation");
  const Data = res.data;
  if (Data.length === 0)
    return (
      <p className="text-center text-xl font-light tracking-wider py-10">
        No presentation found!
      </p>
    );
  return (
    <div className="px-2 py-10">
      <div className="max-w-screen-2xl mx-auto text-sm lg:text-base grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {Data?.map((speech) => (
          <PDFCard
            key={speech.id}
            name={speech.name}
            date={speech.date}
            pdf={speech.pdf}
          />
        ))}
      </div>
    </div>
  );
};

export default ChairmanPresentation;
