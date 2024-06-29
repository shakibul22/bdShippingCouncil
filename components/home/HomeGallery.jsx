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
    <div className="bg-softWhite px-4  py-8 lg:py-20">
      <div className="w-full lg:max-w-5xl 3xl:max-w-7xl mx-auto">
        <div className="flex gap-2 text-[#3b5468]">
          <p className="text-xs font-semibold lg:text-lg">Media Corner</p>{" "}
          <div className="w-[120px] lg:w-[300px]">
            <hr className="flex-grow border-b mt-4 " />
          </div>
        </div>
        <h3 className="text-xl font-bold mt-3 lg:text-4xl">
          Our Photo <span className="text-btn italic "> Gallery</span> and{" "}
          <span className="text-btn italic">Video</span>
        </h3>
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-2">
          <div className="flex flex-col gap-2">
            <div className="col-span-1">
              <Image
                src={`/img/gallery/photo/${images[1]?.image}`}
                width={400}
                height={600}
                alt="img-2"
                className="w-full h-auto rounded-lg lg:rounded-lg"
              />
            </div>
            <div className="col-span-1">
              <Image
                src={`/img/gallery/photo/${images[5]?.image}`}
                width={400}
                height={600}
                alt="img-5"
                className="w-full h-auto rounded-lg lg:rounded-lg"
              />
            </div>
          </div>
          <div className="col-span-1 flex flex-row gap-2">
            <Image
              src={`/img/gallery/photo/${images[4]?.image}`}
              width={400}
              height={300}
              alt="hbgh"
              className="w-full h-auto rounded-lg lg:rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="col-span-1">
              <Image
                src={`/img/gallery/photo/${images[0]?.image}`}
                width={400}
                height={600}
                alt="img-2"
                className="w-full h-auto rounded-lg lg:rounded-lg"
              />
            </div>
            <div className="col-span-1">
              <Image
                src={`/img/gallery/photo/${images[2]?.image}`}
                width={400}
                height={600}
                alt="img-5"
                className="w-full h-auto rounded-lg lg:rounded-lg"
              />
            </div>
          </div>

          <div className="col-span-1 flex flex-row gap-2">
            <Image
              src={`/img/gallery/photo/${images[3]?.image}`}
              width={400}
              height={300}
              alt="hbgh"
              className="w-full h-auto rounded-lg lg:rounded-lg"
            />
          </div>
        </div>
        <div>
          <Link
            href={"/media"}
            className="py-2.5 px-7 w-fit flex flex-row justify-center gap-2 leading-normal bg-btn hover:bg-white hover:border hover:text-blue-400 hover:border-blue-400 items-center rounded-md shadow-lg mx-auto mt-12 transition duration-500 text-white font-semibold"
          >
            See More <ImArrowUpRight2 />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
