import Image from "next/image";
import React from "react";

const SeminarCard = ({ name, date, pdf }) => {
  return (
    <div className="bg-white py-6 px-3 border shadow-lg rounded-xl text-center flex flex-col items-center justify-between gap-4">
      <Image
        src={"/img/pdf.png"}
        width={80}
        height={80}
        alt="pdf"
        className="mx-auto shadow-md p-2 rounded-lg"
      />
      <p className="font-medium text-sm lg:text-base">{name}</p>
      <p className="font-light text-sm">{date}</p>

      <a
        href={`/pdf/${pdf}`}
        className="py-1 px-3 lg:py-2 lg:px-4 font-medium bg-secondaryColor text-white block mx-auto rounded-sm"
      >
        View PDF
      </a>
    </div>
  );
};

export default SeminarCard;
