"use client";
import Image from "next/image";

const ShippersNewsCard = ({ image, name, date, volume, index, pdf }) => {
  const handleImageClick = () => {
    window.open(`/pdf/${pdf}`);
  };

  return (
    <div
      className={`pb-3 w-full h-full bg-white rounded-xl flex flex-col justify-center items-center shadow-md relative overflow-hidden animatedBorder }`}
    >
      <Image
        src={image ? `/img/news/${image}` : "/img/pdf.png"}
        width={100}
        height={200}
        alt="news"
        className="w-auto h-[80px] lg:w-auto lg:h-[150px] pt-3"
      />

      <div className="text-xs lg:text-lg font-light text-start flex flex-col justify-center space-y-1 lg:space-y-2 p-3 lg:p-6">
        <h4 className="font-semibold text-[#0a4a77] text-sm mb-1 text-center lg:text-lg 3xl:text-2xl">
          0{index}. {name}
        </h4>
        <p className="font-semibold text-[#626262] text-xs text-center lg:text-lg">
          {date}
        </p>

        <p className="text-xs lg:text-sm text-[#626262] text-center  uppercase font-semibold ">
          Volume {volume}
        </p>

        <button
          onClick={handleImageClick}
          className="text-[#8c7f77] text-sm lg:text-lg font-semibold"
        >
          Read more...
        </button>
      </div>
    </div>
  );
};

export default ShippersNewsCard;
