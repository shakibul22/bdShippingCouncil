import Image from "next/image";
import React from "react";

const HomeMember = ({ data }) => {
  return (
    <div className="bg-[url('/img/memberbg.webp')] bg-cover px-2 xl:px-0 py-8 lg:py-20 text-white">
      <div className="sm:w-[60%] mx-auto lg:w-auto max-w-screen-2xl">
        <p className="text-xs font-semibold lg:text-lg">Become a member</p>
        <h3 className="text-xl font-bold lg:text-4xl mt-4 ">{data?.title}</h3>

        <div className="lg:flex flex-row-reverse justify-center items-center lg:mt-16">
          <div className="mt-7 text-sm lg:text-base space-y-4 text-justify lg:w-[500px]">
            <p className="font-medium opacity-70">{data?.text}</p>

            <div>
              <a
                href={`/pdf/application.pdf`}
                className="py-2.5 px-5 w-fit leading-normal font-semibold bg-secondaryColor block shadow-lg mx-auto my-10 lg:mx-0"
              >
                Download PDF
              </a>
            </div>
          </div>

          <div className="w-fit ml-auto mr-4 h-[420px] xl:h-[490px] sm:mx-auto">
            <div className="relative">
              <Image
                // src={`/img/${JSON.parse(data.image).image1}`}
                src={`/img/${data?.image.image1}`}
                width={320}
                height={280}
                alt="ship"
                className="border-2 w-56 h-64 xl:w-auto xl:h-96 object-cover"
              />
              <Image
                // src={`/img/${JSON.parse(data.image).image2}`}
                src={`/img/${data?.image.image2}`}
                width={320}
                height={280}
                alt="ship"
                className="border-2 w-56 xl:w-auto xl:h-96 h-64 object-cover object-top absolute -bottom-36 -left-28 z-20 "
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
