import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Link from "next/link";
import { gallery } from "../../data/gallery";
import Image from "next/image";
import { publicRequest } from "@/requestMethod";

async function getData() {
  const res = await publicRequest("/gallery/allphotos");
  return res.data;
}

const data = getData();

const HomeGallery = async () => {
  const galleryData = await data;

  return (
    <div className="bg-softWhite px-2 py-8 lg:py-20">
      <div className="max-w-screen-2xl mx-auto">
        <p className="text-xs font-semibold lg:text-lg">Media Corner</p>
        <h3 className="text-xl font-bold mt-3 lg:text-4xl">
          Our Photo Gallery and Video
        </h3>
        <div className="mt-10">
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 800: 3 }}>
            <Masonry gutter="4px">
              {galleryData[0]?.photos.map((img, i) => (
                <Image
                  src={`/img/gallery/photo/${img.image}`}
                  width={200}
                  height={200}
                  alt="img"
                  key={i}
                  className="w-auto h-auto"
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
        <div>
          <Link
            href={"/media"}
            className="py-2.5 px-5 w-fit leading-normal bg-secondaryColor block shadow-lg mx-auto mt-12 text-white font-semibold"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
