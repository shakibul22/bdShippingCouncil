import Image from "next/image";
import React from "react";

import img1 from "/public/img/slider/0011.webp";
import img2 from "/public/img/slider/0012.webp";
import img3 from "/public/img/slider/0013.webp";
import { publicRequest } from "@/requestMethod";

async function getData() {
  const res = await publicRequest(`/aboutUs/brief`);
  return await res.data;
}

const data = getData();

const BreifLayout = async () => {
  const AboutData = await data;

  return (
    <div className="px-2 py-6">
      <div className="max-w-screen-2xl mx-auto text-sm lg:text-base flex flex-col gap-8 md:flex-row">
        <div className="space-y-4 max-w-lg flex-1">
          <h4 className="font-semibold">Brief About SCB</h4>
          <p className="text-justify font-light">{AboutData[0].text}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
          <div className="sm:col-span-2 relative h-72">
            <Image src={img1} fill alt="image" className="object-cover" />
          </div>
          <div className="relative h-52">
            <Image
              src={img2}
              fill
              alt="image"
              className="object-cover object-right"
            />
          </div>
          <div className="relative h-52">
            <Image src={img3} fill alt="image" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreifLayout;
