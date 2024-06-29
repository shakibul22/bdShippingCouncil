"use client";
import Image from "next/image";
import { FaLinkedin, FaRegEnvelope, FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "lucide-react";

const BODcard = ({ id, name, designation, image }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative  w-[45vw] sm:w-[180px]  h-[275px] lg:w-[250px] 3xl:w-[300px] lg:h-[410px] transition duration-1000"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="w-full h-full bg-cardColor shadow-lg rounded-2xl transition-all duration-500"
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
          className="h-40 md:h-52 lg:h-64  object-fill size-full"
        />
        <h3 className="text-white text-sm lg:text-[16px] 3xl:text-lg font-bold mt-2 ">
          {name}
        </h3>
        <p className="text-white text-xs lg:text-lg">{designation}</p>
        <div className="flex relative   gap-2.5 pr-20 mt-1">
          <div className="flex items-center justify-center">
            {/* <div
        
          className="mr-3 flex h-8 w-8 items-center justify-center  bg-white rounded-full border border-stroke  hover:border-primary hover:bg-btn text-blue-400  hover:text-white xl:mr-4"
        >
         <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_537_364)">
<path d="M21 40.8215C32.0322 40.8215 40.9756 31.8782 40.9756 20.8459C40.9756 9.81371 32.0322 0.870323 21 0.870323C9.9678 0.870323 1.02441 9.81371 1.02441 20.8459C1.02441 31.8782 9.9678 40.8215 21 40.8215Z" fill="white" stroke="#0081E9"/>
<path d="M13.2273 27.5034H16.0909V20.5489L12 17.4807V26.2761C12 26.9552 12.5502 27.5034 13.2273 27.5034Z" fill="#4285F4"/>
<path d="M25.9091 27.5034H28.7727C29.4518 27.5034 30 26.9532 30 26.2761V17.4807L25.9091 20.5489" fill="#34A853"/>
<path d="M25.9091 15.2308V20.5489L30 17.4807V15.8444C30 14.3267 28.2675 13.4614 27.0545 14.3717" fill="#FBBC04"/>
<path d="M16.0909 20.5489V15.2307L21 18.9125L25.9091 15.2308V20.5489L21 24.2307" fill="#EA4335"/>
<path d="M12 15.8444L12 17.4807L16.0909 20.5489V15.2307L14.9455 14.3717C13.7305 13.4614 12 14.3267 12 15.8444Z" fill="#C5221F"/>
</g>
<defs>
<clipPath id="clip0_537_364">
<rect width="42" height="42" fill="white"/>
</clipPath>
</defs>
</svg>

        </div> */}

            <div className="flex gap-2 items-center">
              <div className="relative  w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] border-2 bg-white border-sky-600 hover:bg-blue-500 rounded-full overflow-hidden flex items-center justify-center transition duration-500">
                <Image
                  width={16}
                  alt="gmail"
                  height={16}
                  loading="lazy"
                  src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1719690838/Gmail_icon__2020_ybntks.svg"
                  className="w-full h-full p-2"
                />
              </div>

              <div className="relative w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] bg-white hover:bg-blue-600 rounded-full overflow-hidden flex items-center justify-center transition duration-500">
                <FaXTwitter />
              </div>

              <div className="relative w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] bg-white hover:bg-blue-600 rounded-full overflow-hidden flex items-center justify-center transition duration-500">
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
