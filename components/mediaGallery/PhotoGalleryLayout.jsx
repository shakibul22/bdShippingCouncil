"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { publicRequest } from "@/requestMethod";



const Modal = ({ isOpen, onClose, album }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  if (!isOpen || !album) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg max-w-4xl w-full relative">
        <button
          className="absolute top-2 right-2 text-black text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">{album.title}</h2>
        <div className="mt-5">
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 800: 3 }}>
            <Masonry gutter="4px">
              {album.photos.map((img, i) => (
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
    </div>
  );
};



const PhotoGalleryLayout = () => {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await publicRequest("/gallery/allphotos");
      setAlbums(res.data);
    }
    fetchData();
  }, []);

  const openModal = (album) => {
    setSelectedAlbum(album);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAlbum(null);
  };

  return (
     <div className="p-5 ">
      <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row md:flex-row gap-7 justify-center items-center text-sm sm:text-base lg:text-lg">
        {albums?.map((album, i) => (
          <div key={i} className="w-[320px]  p-3 h-auto rounded-lg cursor-pointer" onClick={() => openModal(album)}>
           <Image src="/file.png" alt="" width={150} height={150} className="w-48 md:w-60"/>
            <p className="hover:underline">{album.id}. {album.title}</p>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} album={selectedAlbum} />
    </div>
  );
};

export default PhotoGalleryLayout;

