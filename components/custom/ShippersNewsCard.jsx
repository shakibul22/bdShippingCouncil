"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ShippersNewsCard = ({ image, name, date, volume, index, pdf }) => {
  const router = useRouter();

  // Conditionally determine whether the card should be larger
  const isLargeCard = index === 3;

  const handleImageClick = () => {
    router.push(`/pdf/${pdf}`);
  };

  return (
    <div
      className={`pb-3 w-full h-full bg-white rounded-xl space-y-4 shadow-md relative overflow-hidden animatedBorder }`}
    >
      <Image
        src={image ? `/img/news/${image}` : "/img/pdf.png"}
        width={250}
        height={250}
        alt="news"
        className="w-full h-[150px] lg:w-full lg:h-[270px] p-1"
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
