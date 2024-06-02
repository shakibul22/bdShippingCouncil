// import { ApplicationProcedure } from "@/data/ApplicationProcedure";
import { publicRequest } from "@/requestMethod";
import Image from "next/image";
import React from "react";

const ApplicationLayout = async () => {
  const res = await publicRequest("/member/application");
  const ApplicationProcedure = await res.data;

  const resF = await publicRequest("/member/eligibility");
  const Fee = await resF.data;

  return (
    <div className="px-2 py-6">
      <div className="max-w-screen-2xl mx-auto text-sm lg:text-base lg:flex items-start">
        <div className="space-y-10 max-w-screen-md">
          <div className="text-justify space-y-5">
            {ApplicationProcedure?.map((app) => (
              <p key={app.id}>{app.text}</p>
            ))}
          </div>

          <a
            href={`/pdf/application.pdf`}
            className="lg:hidden block w-fit mx-auto"
          >
            <div className="space-y-2 p-6 bg-white w-fit mx-auto rounded-xl shadow-lg cursor-pointer group">
              <Image
                src={"/img/pdf.png"}
                width={80}
                height={80}
                alt="pdf"
                className="mx-auto"
              />
              <p className="font-semibold text-secondaryColor group-hover:text-textPrimary cursor-pointer">
                Application Procedure
              </p>
            </div>
          </a>

          <div className="max-w-lg mx-auto">
            <div className="bg-[#0C30461A] grid grid-cols-2 grid-rows-4 leading-[30px] rounded-xl overflow-hidden border border-black/50 font-semibold">
              <div className="row-span-2 border-r border-b border-black/50 flexCenter">
                {Fee[0]?.type}
              </div>
              <div className="border-b border-black/50 p-2">
                <span className="font-normal">Admission fee - </span>
                {Fee[0]?.admission} BDT
              </div>
              <div className="border-b border-black/50 p-2">
                <span className="font-normal">Subscription fee - </span>
                {Fee[0]?.subscription} BDT
              </div>
              <div className="row-span-2 border-r border-black/50 flexCenter">
                {Fee[1]?.type}
              </div>
              <div className="border-b border-black/50 p-2">
                <span className="font-normal">Admission fee - </span>
                {Fee[1]?.admission} BDT
              </div>
              <div className="p-2">
                <span className="font-normal">Subscription fee - </span>
                {Fee[1]?.subscription} BDT
              </div>
            </div>
          </div>
        </div>

        <a
          href={`/pdf/application.pdf`}
          className="hidden lg:block mx-auto mt-32"
        >
          <div className="space-y-2 p-6 bg-white w-fit mx-auto rounded-xl shadow-lg cursor-pointer group animate__animated animate__fadeInDown">
            <Image
              src={"/img/pdf.png"}
              width={100}
              height={100}
              alt="pdf"
              className="mx-auto"
            />
            <p className="font-semibold text-secondaryColor group-hover:text-textPrimary cursor-pointer">
              Application Procedure
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ApplicationLayout;
