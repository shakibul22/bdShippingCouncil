import Image from "next/image";
import Link from "next/link";
import { ImArrowUpRight2 } from "react-icons/im";

const HomeChairmanProfile = ({ data }) => {
  return (
    <div className="bg-[url('/img/memberbg.png')] bg-cover px-4 xl:px-0 py-8 lg:py-24 text-white size-full inset-0">
      <div className="flex flex-col w-full lg:max-w-5xl 3xl:max-w-7xl mx-auto lg:flex-row items-center justify-center">
        <div
          className="w-full lg:w-[30%]"
          data-aos-once="false"
          data-aos="fade-right"
        >
          <Image
            src={`/img/chairman/${data?.image?.image}`}
            width={450}
            height={400}
            alt="Chairman"
            className="mx-auto lg:mx-0 lg:h-[410px] 3xl:h-[410px]"
          />
        </div>
        <div className="text-center min-w-[55%] rounded-xl lg:text-left flex-1 bg-gradient-to-r from-gray-900 to-gray-0 bg-opacity-70 p-8 relative">
          <p className="text-md uppercase lg:text-lg font-normal relative z-10">
            Chairman’s Profile
          </p>
          <h3 className="font-semibold text-lg leading-8 lg:text-4xl lg:mt-2 relative z-10 space-x-1">
            Shippers’{" "}
            <span className="text-btn font-poppins mr-1 italic font-bold tracking-wide break-words outline-text">
              Council{" "}
            </span>{" "}
            Of Bangladesh
          </h3>
          <p className="font-normal text-sm lg:text-lg tracking-wide opacity-70 text-justify mt-4 lg:mt-7 sm:w-[60%] lg:w-auto mx-auto relative z-10">
            {data?.text}
          </p>
          <p className="mt-7 text-xl lg:text-lg relative z-10">
            Md. Rezaul Karim
          </p>
          <p className="text-md lg:text-sm relative z-10">Chairman</p>

          <div className="flex flex-col lg:flex-row justify-evenly lg:justify-between items-center relative z-10">
            <div className="flex items-center gap-4 w-fit mx-auto lg:mx-0 mt-2 lg:mt-4 text-sm lg:text-2xl">
              <div className="flex gap-2 items-center">
                <div className="relative w-[30px] h-[30px] lg:w-[38px] lg:h-[38px] border bg-white hover:bg-blue-500 cursor-pointer hover:border-white rounded-full overflow-hidden flex items-center justify-center transition duration-500">
                  <Image
                    width={16}
                    alt="gmail"
                    height={16}
                    loading="lazy"
                    src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1719690838/Gmail_icon__2020_ybntks.svg"
                    className="w-full h-full p-2"
                  />
                </div>
                <div className="relative w-[30px] h-[30px] lg:w-[38px] lg:h-[38px] bg-white hover:bg-blue-500 cursor-pointer hover:border-white border rounded-full overflow-hidden flex items-center justify-center transition duration-500">
                  <Image
                    width={16}
                    alt="linkedin"
                    height={16}
                    loading="lazy"
                    src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1719697559/linkedin_vgbynx.png"
                    className=""
                  />
                </div>
              </div>
            </div>

            <Link
              href="/chairman"
              className="w-[200px]"
              data-aos-once="false"
              data-aos="fade-up"
            >
              <p className="py-3 px-6 w-fit flex flex-row justify-center gap-2 leading-normal transition-all duration-500 bg-btn hover:bg-white hover:text-gray-950 hover:border-gray-950 items-center rounded-sm shadow-lg mx-auto mt-4 lg:mt-12 text-white font-semibold">
                Read More <ImArrowUpRight2 />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeChairmanProfile;
