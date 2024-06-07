import Image from "next/image";

const NewsCard = ({ image, name, date, volume, pdf, index }) => {
  // Conditionally determine whether the card should be larger
  const isLargeCard = index === 3;

  return (
    <div
      className={`pb-3 w-full border bg-white rounded-xl space-y-4  shadow-md relative overflow-hidden ${
        isLargeCard
          ? "w-full h-full lg:w-full lg:h-[500px]"
          : "w-full h-[200px] lg:h-full flex flex-row justify-between items-start "
      }`}
    >
      <div
        className={`flex flex-row justify-end items-end absolute border rounded-tl-2xl bg-gradient-to-b from-[#98bad3] to-[#98bad3]/10 bg-opacity-70 w- bottom-0 right-0 ${
          isLargeCard
            ? "w-[130px] h-[200px] lg:w-[400px] lg:h-[330px]"
            : "w-[80px] lg:w-[300px] lg:h-[200px]"
        }`}
      >
        <Image
          src={image ? `/img/news/${image}` : "/img/pdf.png"}
          width={350}
          height={350}
          alt="news"
          className={` object-bottom ${
            !isLargeCard
              ? "w-full h-full lg:w-full lg:h-full pl-5 pt-3 "
              : "w-full h-full lg:w-full lg:h-full pl-5 pt-3"
          }`}
        />
      </div>
      <div className="flex flex-row  gap-2 p-2 lg:p-4 ">
        <div className="font-semibold text-sm lg:text-xl border-2 text-center p-2 lg:p-1 rounded-full w-8 lg:w-10  h-8 lg:h-10">
          {index}
        </div>
        <div className="text-xs lg:text-sm font-light text-start space-y-1 lg:space-y-2">
          <h4 className="font-semibold text-xs mb-2 lg:text-base">{name}</h4>
          <p className="font-semibold text-xs">{date}</p>
          {volume && (
            <p className="py-1 text-xs lg:py-3 rounded-2xl uppercase font-semibold px-1 lg:px-4 border">
              Volume: {volume}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
