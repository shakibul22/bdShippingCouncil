import React from "react";
import SeminarCard from "../custom/SeminarCard";
import { publicRequest } from "@/requestMethod";

const PreviousSeminarLayout = async () => {
  const res = await publicRequest("/seminar/previous");
  const seminarData = await res.data;

  return (
    <div className="px-2 py-6">
      <div className="max-w-screen-2xl mx-auto text-sm lg:text-lg grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {seminarData?.map((sem, i) => (
          <SeminarCard key={i} name={sem.name} date={sem.date} pdf={sem.pdf} />
        ))}
      </div>
    </div>
  );
};

export default PreviousSeminarLayout;
