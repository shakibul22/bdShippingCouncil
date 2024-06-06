"use client";

import Image from "next/image";

const NewsCard = ({ image, name, date, volume, pdf, index }) => {
  return (
    <div className="pb-3 w-full border bg-white rounded-xl space-y-4 shadow-md flex flex-row-reverse items-start justify-between p-6   mx-auto overflow-hidden">
      <Image
        src={image ? `/img/news/${image}` : "/img/pdf.png"}
        width={360}
        height={300}
        alt="news"
        className={
          image
            ? "mx-auto h-full md:h-full object-cover object-top"
            : "p-8 md:p-16 "
        }
      />
      <div className="flex flex-row  gap-2">
        <div className="font-semibold text-xl border-2 text-center p-1 rounded-full w-10 h-10">
          {index}
        </div>
        <div className="text-sm font-light text-start space-y-2">
          <h4 className="font-semibold mb-2 text-base">{name}</h4>
          <p className="font-semibold">{date}</p>
          {volume && (
            <p className=" py-3 rounded-2xl uppercase font-semibold px-4 border">
              Volume: {volume}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
