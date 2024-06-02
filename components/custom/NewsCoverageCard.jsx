import Image from "next/image";
import React from "react";

const NewsCoverageCard = ({ image, name, pdf, date }) => {
  return (
    <div className="p-4 border bg-white rounded-lg space-y-4 shadow-md w-fit mx-auto text-sm md:text-base ">
      <Image src={`/img/news/${image}`} width={400} height={400} alt="news" />
      <div className="flex gap-4">
        <h4 className="font-semibold mb-2">{name}</h4>
        <p>J{date}</p>
      </div>
      <button className="mt-4 py-2 px-4 font-semibold underline text-white bg-secondaryColor">
        Download PDF
      </button>
    </div>
  );
};

export default NewsCoverageCard;
