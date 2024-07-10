"use client";
import React from "react";
import { FaTimes } from "react-icons/fa";
import ReactDOM from "react-dom";
import Image from "next/image";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
const Modal = ({ onClose, selectedMember }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-5 w-11/12 md:w-1/2 lg:w-auto">
        <div className="flex justify-end items-end mb-4">
          <button
            onClick={onClose}
            className="text-black border-4 border-slate-400 rounded-md aspect-square "
          >
            <FaTimes />
          </button>
        </div>
        <div className=" space-y-2 flex flex-col lg:flex-row justify-between gap-5">
          <Image
            src={`https://server.scbdhk.org.bd/bod/${selectedMember.image}`}
            alt={selectedMember.name}
            className="w-[200px] h-[200px] object-cover"
            height={200}
            width={200}
          />
          <div>
            <h2 className="text-xl font-bold">{selectedMember.name}</h2>
            <p className="font-bold">{selectedMember.designation}</p>

            <p>Mobile: {selectedMember.mob}</p>
            <p>Email: {selectedMember.email}</p>
            <p>Address: {selectedMember.address}</p>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

const BODcard = ({ id, name, designation, image, mob, email, address }) => {
  const [hover, setHover] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const primaryMob = mob ? mob.split(",")[0] : "";
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  const handleImageClick = () => {
    setSelectedMember({
      name,
      designation,
      image,
      mob,
      email,
      address,
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div
      className="relative w-[45vw] sm:w-[180px] h-[275px] lg:w-[250px] 3xl:w-[300px] lg:h-[410px] transition-all duration-1000"
      data-aos="zoom-in"
      data-aos-once="false"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="w-full h-full bg-cardColor shadow-lg rounded-2xl transition duration-1000"
        style={{
          clipPath: hover
            ? "polygon(-3% -6%, -13% 106%, 74% 102%, 103% 80%, 108% -17%)"
            : "polygon(38% -6%, -5% 23%, -13% 106%, 74% 102%, 103% 80%, 108% -17%)",
        }}
      ></div>
      <div className="absolute inset-0 flex flex-col items-start gap-1 justify-start p-2 md:p-3 lg:p-5 border-solid aspect-[0.67] fill-sky-900 stroke-[1px] stroke-sky-900">
        <Image
          onClick={handleImageClick}
          src={
            image
              ? `https://server.scbdhk.org.bd/bod/${image}`
              : "/img/demo.webp"
          }
          width={250}
          height={300}
          alt="bod"
          className="h-40 md:h-52 lg:h-64 object-fill border rounded border-sky-900 hover:border-white transition-all duration-500 size-full"
        />
        <h3 className="text-white text-xs md:text-sm lg:text-[16px] 3xl:text-lg font-bold mt-2">
          {name}
        </h3>
        <p className="text-white text-xs lg:text-lg">{designation}</p>
        <div className="flex relative gap-2.5 mt-1">
          <div className="flex items-center justify-center">
            <div className="flex gap-2 items-center">
              <a
                href={`mailto:${email}`}
                className="relative w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] bg-white hover:bg-blue-500 cursor-pointer hover:border-white border rounded-full overflow-hidden flex items-center justify-center transition duration-500"
              >
                <Image
                  width={16}
                  alt="gmail"
                  height={16}
                  loading="lazy"
                  src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1719690838/Gmail_icon__2020_ybntks.svg"
                  className="w-full h-full p-2 hover:shadow-inner transition duration-500"
                />
              </a>
              <a
                href={`tel:${primaryMob.trim()}`}
                className="relative w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] bg-white hover:bg-blue-500 cursor-pointer hover:border-white border rounded-full overflow-hidden flex items-center justify-center transition duration-500"
              >
                <FaPhone className="text-btn hover:text-white transition duration-500" />
              </a>
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] bg-white hover:bg-blue-500 cursor-pointer hover:border-white border rounded-full overflow-hidden flex items-center justify-center transition duration-500"
              >
                <FaMapMarkerAlt className="text-red-600 hover:text-white transition duration-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={handleCloseModal} selectedMember={selectedMember} />
      )}
    </div>
  );
};

export default BODcard;
