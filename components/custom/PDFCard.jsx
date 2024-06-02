"use client";

import Image from "next/image";
import React from "react";

const PDFCard = ({ name, pdf, date }) => {
  return (
    <div className="border p-3 min-w-[170px] max-w-[260px] mx-auto rounded-xl shadow-lg bg-white text-center space-y-4 flex flex-col items-center justify-between">
      <Image
        src={"/img/pdf.png"}
        width={100}
        height={100}
        alt="pdf"
        className="mx-auto"
      />
      <div className="space-y-6">
        <p>{name}</p>
        <p>{date}</p>
      </div>
      <a
        href={pdf ? `/pdf/${pdf}` : `/nofile`}
        className="py-1 px-3 lg:py-2 lg:px-4 font-medium bg-secondaryColor text-white block mx-auto rounded-sm"
      >
        View PDF
      </a>
    </div>
  );
};

export default PDFCard;
