
import Image from "next/image";

const ShippersNewsCard =({ name, date, pdf,image }) => {
  return (
    <div className="bg-white py-6 px-3 border shadow-lg rounded-xl text-center flex flex-col items-center justify-between gap-4">
      <Image
        src={image ? `/img/news/${image}` : "/img/pdf.png"}
        width={120}
        height={120}
        alt="pdf"
        className="mx-auto "
      />
      <p className="font-medium text-sm lg:text-base">{name}</p>
      <p className="font-light text-sm">{date}</p>

      <a
        href={`/pdf/${pdf}`} target="_blank"
        className="py-1 px-3 lg:py-2 lg:px-4 font-medium bg-secondaryColor text-white w-full lg:w-60 block mx-auto rounded-sm"
      >
        View PDF
      </a>
    </div>
  );
};

export default ShippersNewsCard;
