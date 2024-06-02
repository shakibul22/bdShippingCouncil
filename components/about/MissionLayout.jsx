import Image from "next/image";
import React from "react";
import MissionCard from "../custom/MissionCard";
import { publicRequest } from "@/requestMethod";

async function getData() {
  const res = await publicRequest(`/aboutUs/mission`);
  return await res.data;
}

const data = getData();

const MissionLayout = async () => {
  const missionData = await data;
  return (
    <div className="px-2 py-10">
      <div className="max-w-screen-2xl mx-auto text-sm lg:text-base space-y-20">
        <div className="flex flex-col gap-10 md:flex-row lg:justify-between">
          <div className="space-y-6 md:max-w-[400px] lg:max-w-[500px]">
            <h4 className="font-semibold">Missions of SCB</h4>
            <p className="text-justify">{missionData.text}</p>
            <div>
              <div className="flex gap-4 items-center p-4 border rounded-lg w-fit bg-white shadow-md hover:shadow-lg cursor-pointer">
                <Image src={"/img/pdf.png"} width={40} height={40} alt="pdf" />
                <a
                  className="font-semibold"
                  href={`/pdf/${missionData.pdfName}`}
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>

          <div className="relative flex-1 space-y-5 lg:h-[550px]">
            <Image
              src={"/img/slider/0011.webp"}
              width={600}
              height={220}
              alt="img"
              className="rounded-xl shadow-xl relative z-10 ml-auto"
            />
            <Image
              src={"/img/contactus_bg.webp"}
              width={600}
              height={300}
              alt="img"
              className="rounded-xl shadow-xl lg:absolute top-64 -left-36 -z-0"
            />
          </div>
        </div>

        <div className="bg-[#97714A1A] space-y-6 py-10 rounded-xl">
          <p className="font-semibold text-center">Key Objectives of SCB</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-2 md:px-10">
            {missionData.objectiveList.map((obj) => (
              <MissionCard key={obj.id} bg={obj.bg} text={obj.text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionLayout;
