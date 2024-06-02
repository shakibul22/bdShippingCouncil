import { Eligibility } from "@/data/Eligibility";
import { publicRequest } from "@/requestMethod";
import Image from "next/image";

const EligibilityLayout = async () => {
  const res = await publicRequest("/member/eligibility");
  const eligibilityData = res.data;

  const resP = await publicRequest("member/relevantPaper");
  const relPaper = resP.data;

  return (
    <div className="px-2 py-6 text-sm lg:text-base">
      <div className="max-w-screen-2xl mx-auto space-y-14">
        {/* Eligibility */}
        <div className="flex flex-col gap-10 lg:flex-row items-center text-justify">
          <div className="leading-normal flex-1">
            <h4 className="font-semibold">{Eligibility[0].type.header}</h4>

            <ol className="list-decimal ml-6 mt-4">
              {eligibilityData?.map((type, i) => (
                <li key={i}>{type.type}</li>
              ))}
            </ol>

            {eligibilityData?.map((type, i) => (
              <p className="mt-8" key={i}>
                <span className="font-semibold">{type.type}: </span>
                {type.text}
              </p>
            ))}
          </div>

          <div>
            <Image
              src={"/img/eligibility.webp"}
              width={400}
              height={400}
              alt="photo"
              className="rounded-xl mx-auto flex-1 animate__animated animate__fadeInRight"
            />
          </div>
        </div>

        {/* Fees */}
        <div>
          <p className="my-6 font-semibold">{Eligibility[0].fees.header}</p>

          {eligibilityData?.map((type, i) => (
            <div
              className="bg-[#0C30461A] grid grid-cols-2 grid-rows-3 leading-[30px] rounded-xl overflow-hidden border border-black/30 font-semibold mt-2 lg:text-center text-xs sm:text-sm lg:text-base"
              key={i}
            >
              <div className="row-span-3 border-r border-b border-black/30 flexCenter">
                {type.type}
              </div>

              <div className="border-b border-black/30 p-2">
                <span className="font-normal">Admission fee - </span>
                {type.admission} BDT
              </div>
              <div className="border-b border-black/30 p-2">
                <span className="font-normal">Subscription fee - </span>
                {type.subscription} BDT
              </div>
              <div className="border-b border-black/30 p-2">
                <span className="font-normal">Total - </span>
                {type.subscription + type.admission} BDT
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="">
            <Image
              src={"/img/eligibility_b.webp"}
              width={400}
              height={400}
              alt="photo"
              className="mx-auto rounded-xl animate__animated animate__fadeInLeft"
            />
          </div>

          <div className="space-y-8 flex-1">
            {/* Required Papers */}
            <div className="space-y-2">
              <h4 className="font-semibold mb-6">
                {Eligibility[0].relevantPapers.header}
              </h4>
              {relPaper?.map((paper, i) => {
                if (paper?.type === "new") {
                  return <li key={i}>{paper.papers}</li>;
                }
              })}
            </div>

            {/* note */}
            <div className="text-justify italic leading-normal">
              <p className="font-light"> Note: {Eligibility[0].note}</p>
            </div>

            {/* Renewal */}
            <div>
              <h4 className="font-semibold">Renewal of Membership</h4>
              <div className="grid grid-cols-3 leading-loose text-center mt-4">
                <p className="font-medium">Category of Membership</p>
                <p className="font-medium">Annual Subscription</p>
                <p className="font-medium">Total</p>
              </div>

              {eligibilityData?.map((type, i) => (
                <div
                  className="grid grid-cols-3 leading-loose text-center mt-1"
                  key={i}
                >
                  <p>
                    {type.id}. {type.type}
                  </p>
                  <p>BDT {type.subscription}</p>
                  <p>BDT {type.subscription}</p>
                </div>
              ))}
            </div>

            {/* Papers for renew */}
            <div className="leading-normal pb-12">
              <h4 className="font-semibold">
                Relevant papers required for renewal
              </h4>
              <div className="mt-4">
                {relPaper?.map((paper, i) => {
                  if (paper?.type === "renew") {
                    return <li key={i}>{paper.papers}</li>;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligibilityLayout;
