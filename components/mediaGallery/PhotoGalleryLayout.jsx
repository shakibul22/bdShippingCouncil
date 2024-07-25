"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { publicRequest } from "@/requestMethod";

const PhotoGalleryLayout = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await publicRequest("/gallery/allphotos");
      setAlbums(res.data);
    }
    fetchData();
  }, []);

  return (
    <div className="p-2">
      <div className="max-w-screen-2xl mx-auto text-sm sm:text-base lg:text-lg">
        {albums?.map((album, i) => (
          <div key={i} className="py-10">
            <Link href={`/media/${album.id}`}>
              <p className="font-semibold cursor-pointer">
                {album.id}. {album.title}
              </p>
            </Link>
            <div className="mt-5">
              <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 800: 3 }}>
                <Masonry gutter="4px">
                  {album?.photos.map((img, i) => (
                    <Image
                      key={i}
                      src={`/img/gallery/photo/${img.image}`}
                      width={200}
                      height={200}
                      alt="img"
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
