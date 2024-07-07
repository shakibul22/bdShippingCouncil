/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { useEffect } from "react";
import { GrDocumentPdf } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeMember = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  return (
    <div
      className="px-4 xl:px-0 py-10 lg:py-20 text-white  font-poppins"
      style={{ backgroundImage: "url(/img/memberbg.png)" }}
    >
      <div>
        <div
          className="flex flex-col lg:flex-row justify-between w-full lg:max-w-5xl 3xl:max-w-7xl mx-auto items-center gap-10 lg:mt-16"
          data-aos="fade-right"
        >
          <div className="mt-7 text-sm lg:text-base space-y-8 text-justify lg:w-[480px] 3xl:w-[650px] ">
            <div className="flex items-center space-x-2">
              <p className="text-xs font-semibold lg:text-lg">
                Become a member
              </p>
              <div className="w-[100px]">
                <hr className="flex-grow border-b mt-6 " />
              </div>
            </div>

            <h2 className="text-lg font-bold  lg:text-[22px] 3xl:text-3xl mt-4 ">
              Members in the<span className="text-btn italic font-bold 3xl:tracking-wide break-words outline-text "> Shippers'</span> Council Bangladesh
            </h2>

            <p className="font-medium opacity-70 flex flex-col text-base lg:text-lg">
              {data?.text}
            </p>

            <div
              className="bg-btn hover:bg-white hover:text-btn  rounded-md my-10 lg:mx- py-2.5 px-5 w-fit"
              data-aos="fade-right"
            >
              <a
                href={`/pdf/application.pdf`}
                className="flex flex-row gap-2 items-center"
              >
                <Image
                  width={6}
                  height={6}
                  alt="image"
                  src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1719694586/2d3d842ad48c8da4089f795b2b01102a_uelvof.png"
                  className="w-6 h-6"
                />
                <span className="leading-normal font-semibold">
                  Download PDF
                </span>
              </a>
            </div>
          </div>

          <div className="flex justify-end flex-1 ml-auto mr-4 h-[420px] xl:h-[490px] sm:mx-auto">
            <div className="relative">
              <Image
                src={`/img/${data?.image?.image1}`}
                width={320}
                height={280}
                alt="ship"
                data-aos="fade-left"
                className="border-2 w-56 h-64 lg:w-[370px] 3xl:w-full xl:h-[460px] border-r-8 rounded-lg border-white object-cover"
              />
              <Image
                src={`/img/${data?.image?.image2}`}
                width={320}
                height={280}
                alt="ship"
                data-aos="fade-left"
                className="border-2 w-[200px] lg:w-[250px] 3xl:w-[250px] xl:h-[350px] h-48 rounded-lg object-cover object-top absolute top-[13%] lg:top-[10%] right-[45%] sm:right-[60%] 3xl:right-[70%] z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMember;
