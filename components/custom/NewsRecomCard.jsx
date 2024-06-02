import Image from "next/image";
import React from "react";
import { FaRegFilePdf } from "react-icons/fa6";

const NewsRecomCard = ({ name, date, pdf }) => {
  return (
    <div className="p-4 border bg-white rounded-md space-y-4 shadow-md flexCenter flex-col gap-4">
      <Image src={"/img/pdf.png"} width={100} height={200} alt="news" />
      <div className="space-y-4 text-sm lg:text-base text-center">
        <p className="font-medium">{name}</p>
        <p className="font-light">Year {date}</p>
        <a
          href={`/pdf/${pdf}`}
          className="py-1 px-3 lg:py-2 lg:px-4 font-medium bg-secondaryColor text-white block mx-auto rounded-sm"
        >
          View PDF
        </a>
      </div>
    </div>
  );
};

export default NewsRecomCard;
