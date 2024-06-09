"use client";
import Image from "next/image";
import { FaLinkedin, FaRegEnvelope, FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

const BODcard = ({ id, name, designation, image }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative  w-[45vw] sm:w-[180px]  h-[275px] lg:w-[300px] lg:h-[400px]"
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
      <div className="absolute inset-0 flex flex-col items-start gap-1 justify-start p-2 md:p-3 lg:p-5 border-solid aspect-[0.67] fill-sky-900 stroke-[1px] stroke-sky-900">
        <Image
          src={image ? `/img/bod/${image}` : "/img/demo.webp"}
          width={250}
          height={300}
          alt="bod"
          className="h-40 md:h-52 lg:h-64 object-cover object-fill size-full"
        />
        <h3 className="text-white text-sm lg:text-lg font-bold mt-2 ">
          {name}
        </h3>
        <p className="text-white text-xs lg:text-sm">{designation}</p>
        <div className="flex relative  gap-2.5 pr-20 mt-1">
          <Image
            width={20}
            alt="card"
            height={20}
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f53e375dcf53aebd9fc598c683ad34fe4bb09d63a4babff70c58b8bea1cafde9?"
            className="shrink-0 aspect-square w-[25px] lg:w-[42px]"
          />
          <Image
            width={20}
            alt="card"
            height={20}
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1243aecf6bf26addf589d81452493b9265e15a1eb8767e0c6e91a3526c4c90c6?"
            className="shrink-0 aspect-square w-[25px] lg:w-[42px]"
          />
          <Image
            width={20}
            alt="card"
            height={20}
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fec738328eeb4ca5732b468096f30598c1711911fd17331491fbc89383130c6c?"
            className="shrink-0 aspect-square w-[25px] lg:w-[42px]"
          />
        </div>
      </div>
    </div>
  );
};

export default BODcard;
