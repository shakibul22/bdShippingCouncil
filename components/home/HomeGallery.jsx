import Link from "next/link";
import Image from "next/image";
import { publicRequest } from "@/requestMethod";
import { ImArrowUpRight2 } from "react-icons/im";

async function getData() {
  const res = await publicRequest("/gallery/allphotos");
  return res.data;
}

const data = getData();

const HomeGallery = async () => {
  const galleryData = await data;

  // Define the images in a specific order to match the provided layout
  const images = galleryData[0]?.photos || [];

  return (
    <div className="bg-softWhite px-4 py-8 ">
      <div className="w-full lg:max-w-5xl 3xl:max-w-7xl mx-auto">
        <div className="flex gap-2 ">
          <p className="font-normal text-[#3b5468] font-poppins">
            Media Corner
          </p>
          <div className="w-[120px] lg:w-[270px] text-[#001E35] mt-4">
            <hr className="flex-grow border-b " />
          </div>
        </div>
        <h3 className="text-xl font-bold mt-3 font-poppins lg:text-3xl">
          Our Photo <span className="text-btn italic"> Gallery</span> and{" "}
          <span className="text-btn italic">Video</span>
        </h3>
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-2">
          <div className="flex flex-col justify-evenly overflow-hidden gap-2">
            <div
              className="col-span-1 h-full md:h-[180px] lg:h-[180px]"
              data-aos="zoom-in"
              data-aos-once="false"
            >
              <Image
                src={`/img/gallery/photo/${images[1]?.image}`}
                width={400}
                height={300} // Reduced height
                alt="img-2"
                className="w-full h-full rounded-lg lg:rounded-lg"
              />
            </div>
            <div
              className="col-span-1 h-full md:h-[180px] lg:h-[180px]"
              data-aos="zoom-in"
              data-aos-once="false"
            >
              <Image
                src={`/img/gallery/photo/${images[5]?.image}`}
                width={400}
                height={300} // Reduced height
                alt="img-5"
                className="w-full h-auto rounded-lg lg:rounded-lg"
              />
            </div>
          </div>
          <div
            className="col-span-1 flex flex-row gap-2"
            data-aos="zoom-in"
            data-aos-once="false"
          >
            <Image
              src={`/img/gallery/photo/${images[4]?.image}`}
              width={400}
              height={200} // Reduced height
              alt="image-4"
              className="w-full h-auto rounded-lg lg:rounded-lg"
            />
          </div>

          <div className="flex flex-col justify-evenly  gap-2">
            <div
              className="col-span-1 h-full md:h-[180px] lg:h-[180px]"
              data-aos="zoom-in"
              data-aos-once="false"
            >
              <Image
                src={`/img/gallery/photo/${images[0]?.image}`}
                width={400}
                height={200} // Reduced height
                alt="img-2"
                className="w-full h-full rounded-lg lg:rounded-lg"
              />
            </div>
            <div
              className="col-span-1 h-full md:h-[180px] lg:h-[180px]"
              data-aos="zoom-in"
              data-aos-once="false"
            >
              <Image
                src={`/img/gallery/photo/${images[2]?.image}`}
                width={400}
                height={200} // Reduced height
                alt="img-5"
                className="w-full h-full rounded-lg lg:rounded-lg"
              />
            </div>
          </div>

          <div
            className="col-span-1 flex flex-row gap-2 "
            data-aos="zoom-in"
            data-aos-once="false"
          >
            <Image
              src={`/img/gallery/photo/${images[3]?.image}`}
              width={400}
              height={200} // Reduced height
              alt="image-6"
              className="w-full h-auto rounded-lg lg:rounded-lg"
            />
          </div>
        </div>
        <div>
          <Link
            href={"/media"}
            className="py-3 px-6 w-fit flex flex-row justify-center gap-2 leading-normal bg-btn hover:bg-white hover:border hover:text-blue-400 hover:border-blue-400 items-center rounded-md  mx-auto mt-12 transition duration-500 border border-white text-white font-semibold"
            data-aos="fade-up"
          >
            See More <ImArrowUpRight2 />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
