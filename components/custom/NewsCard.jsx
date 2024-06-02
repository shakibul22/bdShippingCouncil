"use client";

import Image from "next/image";

const NewsCard = ({ image, name, date, volume, pdf }) => {
  return (
    <div className="pb-3 border bg-white rounded-xl space-y-4 shadow-md w-fit mx-auto overflow-hidden">
      <Image
        src={image ? `/img/news/${image}` : "/img/pdf.png"}
        width={260}
        height={200}
        alt="news"
        className={
          image
            ? "mx-auto h-48 md:h-64 object-cover object-top"
            : "p-8 md:p-16 h-48 md:h-64"
        }
      />
      <div className="text-sm font-light text-center">
        <h4 className="font-semibold mb-2 text-base">{name}</h4>
        <p>{date}</p>
        {volume && <p>Volume: {volume}</p>}

        <button className="mt-4 font-semibold underline text-secondaryColor">
          <a href={`/pdf/${pdf}`}>Read More</a>
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
