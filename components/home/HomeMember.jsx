import Image from "next/image";
import React from "react";

const HomeMember = ({ data }) => {
  return (
    <div
      className="  px-2 xl:px-0 py-8 lg:py-20 text-white"
      style={{ backgroundImage: "url(/img/memberbg.webp)" }}
    >
      <div>
        <div className="lg:flex flex-row justify-between max-w-7xl mx-auto items-center lg:mt-16">
          <div className="mt-7 text-sm lg:text-base space-y-8 text-justify lg:w-[500px]">
            <div className="flex items-center space-x-2">
              <p className="text-xs font-semibold lg:text-lg">
                Become a member
              </p>
              <hr className="flex-grow border-b mt-4 " />
            </div>

            <h2 className="text-2xl font-bold  lg:text-4xl mt-4 ">
              {data?.title}
            </h2>
            <p className="font-medium opacity-70 flex flex-col">{data?.text}</p>

            <div>
              <a
                href={`/pdf/application.pdf`}
                className="py-2.5 px-5 w-fit leading-normal font-semibold bg-btn shadow-lg mx-auto my-10 lg:mx-0"
              >
                Download PDF
              </a>
            </div>
          </div>

          <div className=" flex justify-end flex-1 ml-auto mr-4 h-[420px] xl:h-[490px] sm:mx-auto">
            <div className="relative">
              <Image
                // src={`/img/${JSON.parse(data.image).image1}`}
                src={`/img/${data?.image.image1}`}
                width={320}
                height={280}
                alt="ship"
                className="border-2 w-56 h-64 xl:w-full xl:h-[500px] border-r-8 border-white object-cover"
              />
              <Image
                // src={`/img/${JSON.parse(data.image).image2}`}
                src={`/img/${data?.image.image2}`}
                width={320}
                height={280}
                alt="ship"
                className="border-2 w-56 xl:w-auto xl:h-96 h-64 object-cover object-top absolute top-[10%] right-[70%]  z-20 "
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
