"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { publicRequest } from "@/requestMethod";

const Modal = ({ isOpen, onClose, album }) => {
  const modalRef = useRef(null);

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

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  if (!isOpen || !album) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={handleOverlayClick} // Add this line to handle clicks outside
    >
      <div
        ref={modalRef} // Set the ref to the modal content
        className="bg-white p-4 rounded-lg max-w-4xl w-full relative"
      >
        <button
          className="absolute top-2 right-2 text-black text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">{album.title}</h2>
        <div className="mt-5 overflow-y-auto" style={{ maxHeight: '70vh' }}>
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
    <div className="p-5">
      <div className="max-w-screen-2xl mx-auto text-center flex flex-col md:flex-row items-center justify-center gap-5">
        {albums?.map((album, i) => (
          <div
            key={i}
            className="w-[320px] p-3 h-auto rounded-lg cursor-pointer bg-white py-6 px-3 border shadow-lg"
            onClick={() => openModal(album)}
          >
            <Image
              src={"/file.png"}
              width={80}
              height={80}
              alt="pdf"
              className="mx-auto rounded-lg"
            />
            <p className="hover:underline">{album.id}. {album.title}</p>
            <button
              onClick={() => openModal(album)}
              className="py-1 px-3 lg:py-2 lg:px-4 font-medium bg-secondaryColor text-white block mx-auto rounded-sm mt-3 w-full"
            >
              View
            </button>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} album={selectedAlbum} />
    </div>
  );
};

export default PhotoGalleryLayout;
