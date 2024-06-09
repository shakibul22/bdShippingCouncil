'use client'
import Image from "next/image";
import { FaLinkedin, FaRegEnvelope, FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

const BODcard = ({ id, name, designation, image }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative  w-[145px] sm:w-[180px]  h-[275px] lg:w-[280px] lg:h-[400px]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="w-full h-full bg-primaryColor shadow-lg rounded-2xl transition-all duration-500"
        style={{
          clipPath: hover
            ? "polygon(-9% -4%, -8% 101%, 78% 105%, 106% 75%, 105% -4%)"
            : "polygon(22% -8%, -6% 27%, -8% 103%, 78% 105%, 106% 75%, 105% -4%)",
        }}
      ></div>
      <div className="absolute inset-0 flex flex-col items-start gap-1 justify-start p-2 md:p-3 lg:p-4">
        <Image
          src={image ? `/img/bod/${image}` : "/img/demo.webp"}
          width={250}
          height={300}
          alt="bod"
          className="h-40 md:h-52 lg:h-64 object-cover object-top"
        />
        <h3 className="text-white text-sm lg:text-lg font-bold mt-2 ">
          {name}
        </h3>
        <p className="text-white text-xs lg:text-sm">{designation}</p>
        <div className="flex space-x-4">
          <a href="#" className="text-white">
            <FaRegEnvelope />
          </a>
          <a href="#" className="text-white">
            <FaXTwitter />
          </a>
          <a href="#" className="text-white">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BODcard;
