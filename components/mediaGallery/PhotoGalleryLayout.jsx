"use client";

import Image from "next/image";
// import { gallery, mainGallery } from "@/data/gallery";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { publicRequest } from "@/requestMethod";

async function getData() {
  const res = await publicRequest("/gallery/allphotos");
  return res.data;
}

const data = getData();

// eslint-disable-next-line @next/next/no-async-client-component
const PhotoGalleryLayout = async () => {
  const albums = await data;

  return (
    <div className="p-2">
      <div className="max-w-screen-2xl mx-auto text-sm sm:text-base lg:text-lg">
        {albums?.map((album, i) => (
          <div key={i} className="py-10">
            <p className="font-semibold">
              {album.id}. {album.title}
            </p>
            <div className="mt-5">
              <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 800: 3 }}>
                <Masonry gutter="4px">
                  {album?.photos.map((img, i) => (
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGalleryLayout;
