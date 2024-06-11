import Image from "next/image";
import React from "react";
import { GrDocumentPdf } from "react-icons/gr";

const HomeMember = ({ data }) => {
  console.log(data);
  return (
    <div
      className="px-4 xl:px-0 py-10 lg:py-20 text-white"
      style={{ backgroundImage: "url(/img/memberbg.png)" }}
    >
      <div>
        <div className="flex flex-col lg:flex-row justify-between w-full lg:max-w-5xl 3xl:max-w-7xl mx-auto items-center gap-10 lg:mt-16">
          <div className="mt-7 text-sm lg:text-base space-y-8 text-justify lg:w-[500px]">
            <div className="flex items-center space-x-2">
              <p className="text-xs font-semibold lg:text-lg">
                Become a member
              </p>
              <hr className="flex-grow border-b mt-4 " />
            </div>

            <h2 className="text-lg font-bold  lg:text-4xl mt-4 ">
              Members in the{" "}
              <span className="text-btn italic">Shippers &apos;</span> Council
              Bangladesh
            </h2>
            <p className="font-medium opacity-70 flex flex-col">{data?.text}</p>

            <div className=" bg-btn   my-10 lg:mx- py-2.5 px-5 w-fit ">
              <a
                href={`/pdf/application.pdf`}
                className=" flex flex-row gap-2 items-center "
              >
                <GrDocumentPdf className="text-rose-700 overflow-hidden text-2xl" />
                <span className="leading-normal font-semibold">
                  {" "}
                  Download PDF
                </span>
              </a>
            </div>
          </div>

          <div className=" flex justify-end flex-1 ml-auto mr-4 h-[420px] xl:h-[490px] sm:mx-auto">
            <div className="relative">
              <Image
                // src={`/img/${JSON.parse(data.image).image1}`}
                src={`/img/${data?.image?.image1}`}
                width={320}
                height={280}
                alt="ship"
                className="border-2 w-56 h-64 lg:w-[370px] 3xl:w-full xl:h-[500px] border-r-8 border-white object-cover"
              />
              <Image
                // src={`/img/${JSON.parse(data.image).image2}`}
                src={`/img/${data?.image?.image2}`}
                width={320}
                height={280}
                alt="ship"
                className="border-2 w-[170px] lg:w-[260px] 3xl:w-auto xl:h-96 h-44 object-cover object-top absolute top-[15%] lg:top-[10%] right-[40%] sm:right-[60%]  3xl:right-[70%]  z-20 "
              />
            </div>
          </div>
        </div>
      </div>
      {/* <PDFview /> */}
    </div>
  );
};

export default HomeMember;
