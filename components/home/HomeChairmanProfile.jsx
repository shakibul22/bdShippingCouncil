import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ImArrowUpRight2 } from "react-icons/im";

const HomeChairmanProfile = ({ data }) => {
  const address = "Apt.-302, House # 18, Road # 6 Dhanmondi R/A, Dhaka-1205.";

  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;
  return (
    <div className="bg-[url('/img/memberbg.png')] bg-cover px-4 xl:px-0 py-8 lg:py-20 3xl:py-24 text-white size-full inset-0">
      <div className="flex flex-col w-full lg:max-w-5xl 3xl:max-w-7xl mx-auto lg:flex-row items-center justify-center">
        <div
          className="w-full lg:w-[30%] "
          data-aos-once="false"
          data-aos="fade-right"
        >
          <Image
            src="https://scbdhk.org.bd/img/chairman/chairman3.JPG"
            width={450}
            height={400}
            alt="Chairman"
            className="mx-auto lg:mx-0 lg:h-full 3xl:h-full"
          />
        </div>
        <div className="text-center min-w-[55%] rounded-xl lg:text-left flex-1 bg-gradient-to-r from-gray-900 to-gray-0 bg-opacity-70 p-10 relative">
          <p className="text-md uppercase lg:text-lg font-poppins font-normal relative z-10">
            Chairman’s Profile
          </p>
          <h3 className="font-semibold text-lg leading-8 lg:text-2xl font-poppins 3xl:text-3xl lg:mt-1 3xl:mt-2 relative z-10 space-x-1">
            Shippers’{" "}
            <span className="text-btn font-poppins mr-1 italic font-bold tracking-wide break-words outline-text">
              Council{" "}
            </span>{" "}
            Of Bangladesh
          </h3>
          <p className="font-normal text-sm lg:text-[14px] 3xl:text-[16px] leading-6 tracking-wide opacity-70 text-justify mt-4  lg:mt-4 3xl:mt-7 sm:w-[60%] lg:w-auto mx-auto relative z-10">
            {data?.text}
          </p>
          <p className="mt-7 text-xl lg:text-lg relative z-10">
            Md. Rezaul Karim
          </p>
          <p className="text-md lg:text-sm relative z-10">Chairman</p>

          <div className="flex flex-col lg:flex-row justify-evenly lg:justify-between items-center relative z-10">
            <div className="flex items-center gap-4 w-fit mx-auto lg:mx-0 mt-2 lg:mt-2 2xl:mt-4 text-sm lg:text-2xl">
              <div className="flex gap-2 items-center">
                <div className="relative w-[30px] h-[30px] lg:w-[38px] lg:h-[38px] border bg-white hover:bg-blue-500 cursor-pointer hover:border-white rounded-full overflow-hidden flex items-center justify-center transition duration-500">
                  <Link
                    href="mailto:sn_jute@hotmail.com"
                    className="flex items-center justify-center w-full h-full"
                  >
                    <Image
                      width={16}
                      alt="gmail"
                      height={16}
                      loading="lazy"
                      src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1719690838/Gmail_icon__2020_ybntks.svg"
                      className="w-full h-full p-2"
                    />
                  </Link>
                </div>

                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-[30px] h-[30px] lg:w-[38px] lg:h-[38px]  bg-white hover:bg-blue-500 cursor-pointer hover:border-white border rounded-full overflow-hidden flex items-center justify-center transition duration-500"
                >
                  <FaMapMarkerAlt className="text-red-600 hover:text-white transition duration-500" />
                </a>
              </div>
            </div>

            <Link
              href="/chairman"
              className="w-[200px]"
              data-aos-once="false"
              data-aos="fade-up"
            >
              <p className="py-3 px-6 w-fit flex flex-row justify-center gap-2 leading-normal transition-all duration-500 bg-btn hover:bg-white hover:text-gray-950 hover:border-gray-950 items-center rounded-md shadow-lg mx-auto mt-4 lg:mt-12 text-white font-semibold">
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
