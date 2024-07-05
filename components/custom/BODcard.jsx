"use client";
import Image from "next/image";
import { FaLinkedin, FaRegEnvelope, FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "lucide-react";

const BODcard = ({ id, name, designation, image }) => {
  const [hover, setHover] = useState(false);

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
          src={image ? `/img/bod/${image}` : "/img/demo.webp"}
          width={250}
          height={300}
          alt="bod"
          className="h-40 md:h-52 lg:h-64 object-fill border rounded border-sky-900 hover:border-white transition-all duration-500 size-full"
        />
        <h3 className="text-white text-xs md:text-sm lg:text-[16px] 3xl:text-lg font-bold mt-2">
          {name}
        </h3>
        <p className="text-white text-xs lg:text-lg">{designation}</p>
        <div className="flex relative gap-2.5  mt-1">
          <div className="flex items-center justify-center">
            <div className="flex gap-2 items-center">
              <div className="relative  w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] bg-white hover:bg-blue-500 cursor-pointer hover:border-white border rounded-full overflow-hidden flex items-center justify-center transition duration-500">
                <Image
                  width={16}
                  alt="gmail"
                  height={16}
                  loading="lazy"
                  src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1719690838/Gmail_icon__2020_ybntks.svg"
                  className="w-full h-full p-2 hover:shadow-inner transition duration-500"
                />
              </div>

              <div className="relative w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] bg-white hover:bg-blue-500 cursor-pointer hover:border-white border rounded-full overflow-hidden flex items-center justify-center transition duration-500">
                <FaXTwitter />
              </div>

              <div className="relative w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] bg-white hover:bg-blue-500 cursor-pointer hover:border-white border rounded-full overflow-hidden flex items-center justify-center transition duration-500">
                <Image
                  width={16}
                  alt="linkedin"
                  height={16}
                  loading="lazy"
                  src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1719697559/linkedin_vgbynx.png"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BODcard;
