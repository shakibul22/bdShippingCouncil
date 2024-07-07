import Image from "next/image";

const NewsCard = ({ image, name, date, volume, index }) => {
  // Conditionally determine whether the card should be larger
  const isLargeCard = index === 3;

  return (
    <div
      className={`pb-3 w-full bg-white rounded-xl space-y-4 shadow-md relative overflow-hidden 
        animatedBorder
       ${
         isLargeCard
           ? "w-full h-full lg:w-full lg:h-[500px]"
           : "w-full h-[200px] lg:h-full flex flex-row justify-between items-start"
       }`}
    >
      <div className={`absolute inset-0 animatedBorder`}></div>
      <div
        className={`flex flex-row justify-end items-end absolute rounded-tl-2xl w-full bottom-0 right-0 ${
          isLargeCard
            ? "w-[130px] h-[200px] lg:w-[400px] lg:h-[330px]"
            : "w-[70px] lg:w-[290px] h-[80px] lg:h-[190px] "
        }`}
      >
        <Image
          src={image ? `/img/news/${image}` : "/img/pdf.png"}
          width={350}
          height={350}
          alt="news"
          className={`object-bottom ${
            !isLargeCard
              ? "w-full h-full lg:w-full lg:h-full pl-5 pt-3"
              : "w-full h-full lg:w-full lg:h-full pl-5 pt-3"
          }`}
        />
      </div>
      <div className="flex flex-row gap-2 p-2 lg:p-4">
        <div className="font-semibold text-sm lg:text-xl text-center w-8 lg:w-10 h-8 lg:h-10"></div>
        <div className="text-xs lg:text-lg font-light text-start space-y-1 lg:space-y-2">
          <h4 className="font-semibold text-[#0a4a77] text-xs mb-2 lg:text-lg 3xl:text-2xl">
            0{index}. {name}
          </h4>
          <p className="font-semibold text-[#626262] text-xs lg:text-lg">
            {date}
          </p>
          {volume && (
            <p className="py-1 text-xs text-[#626262] lg:py-2 rounded-2xl uppercase font-semibold w-fit px-2 lg:px-4 border">
              Volume {volume}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
