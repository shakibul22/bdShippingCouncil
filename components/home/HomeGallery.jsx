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
    <div className="bg-softWhite px-4 py-8 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-semibold lg:text-lg">Media Corner</p>
        <h3 className="text-xl font-bold mt-3 lg:text-4xl">
          Our Photo <span className="text-btn italic "> Gallery</span> and{" "}
          <span className="text-btn italic">Video</span>
        </h3>
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col gap-4">
            <div className="col-span-1">
              <Image
                src={`/img/gallery/photo/${images[1]?.image}`}
                width={400}
                height={600}
                alt="img-2"
                className="w-full h-auto rounded-xl lg:rounded-2xl"
              />
            </div>
            <div className="col-span-1">
              <Image
                src={`/img/gallery/photo/${images[5]?.image}`}
                width={400}
                height={600}
                alt="img-5"
                className="w-full h-auto rounded-xl lg:rounded-2xl"
              />
            </div>
          </div>
          <div className="col-span-1 flex flex-row gap-4">
            <Image
              src={`/img/gallery/photo/${images[4]?.image}`}
              width={400}
              height={300}
              alt="hbgh"
              className="w-full h-auto rounded-xl lg:rounded-2xl"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="col-span-1">
              <Image
                src={`/img/gallery/photo/${images[0]?.image}`}
                width={400}
                height={600}
                alt="img-2"
                className="w-full h-auto rounded-xl lg:rounded-2xl"
              />
            </div>
            <div className="col-span-1">
              <Image
                src={`/img/gallery/photo/${images[2]?.image}`}
                width={400}
                height={600}
                alt="img-5"
                className="w-full h-auto rounded-xl lg:rounded-2xl"
              />
            </div>
          </div>

          <div className="col-span-1 flex flex-row gap-4">
            <Image
              src={`/img/gallery/photo/${images[3]?.image}`}
              width={400}
              height={300}
              alt="hbgh"
              className="w-full h-auto rounded-xl lg:rounded-2xl"
            />
          </div>
        </div>
        <div>
          <Link
            href={"/media"}
            className="py-2.5 px-7 w-fit flex flex-row justify-center gap-2 leading-normal bg-btn items-center rounded-sm shadow-lg mx-auto mt-12 text-white font-semibold"
          >
            See More <ImArrowUpRight2 />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
