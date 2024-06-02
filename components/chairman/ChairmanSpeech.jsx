import React from "react";
import PDFCard from "../custom/PDFCard";
import { publicRequest } from "@/requestMethod";

const ChairmanSpeech = async () => {
  const res = await publicRequest("/chairman/speech");
  const speechData = res.data;

  return (
    <div className="px-2 py-10">
      <div className="max-w-screen-2xl mx-auto text-sm lg:text-base grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {speechData?.map((speech) => (
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

export default ChairmanSpeech;
