import { Benefits } from "@/data/BenefitsOfBeingAMember";
import { publicRequest } from "@/requestMethod";
import Image from "next/image";

// async function getData() {
//   const res = await fetch(`
//     ${process.env.NEXT_PUBLIC_API_BASE_URL}/member/benefits`);
//   return await res.json();
// }

// const data = getData();

const BenefitLayout = async () => {
  const res = await publicRequest("/member/benefits");
  const BenefitsData = await res.data;

  return (
    <div>
      <div className="text-textPrimary">
        <div className="flex flex-col lg:flex-row items-center gap-6 px-2 py-10 max-w-screen-2xl mx-auto">
          <div className="space-y-3 animate__animated animate__fadeInLeft max-w-md">
            <h3 className="font-semibold lg:text-xl">Benefits of a member</h3>
            <p className="text-sm lg:text-base font-light text-justify leading-loose">
              {BenefitsData[0]?.benefits}
            </p>
          </div>
          <Image
            src={`/img/benefits/${Benefits[0].image}`}
            width={600}
            height={400}
            alt="benefits"
            className="mx-auto rounded-xl"
          />
        </div>

        <div className="bg-[#E7EBED]">
          <div className="flex flex-col lg:flex-row items-center gap-6 py-10 px-2 max-w-screen-2xl mx-auto">
            <Image
              src={`/img/benefits/${Benefits[1].image}`}
              width={600}
              height={400}
              alt="benefits"
              className="mx-auto rounded-xl"
            />

            <div className="space-y-8 animate__animated animate__fadeInRight">
              <h3 className="font-semibold lg:text-xl">
                Advantages of being a member
              </h3>
              <ul className="text-sm lg:text-base font-light list-disc pl-6 space-y-3">
                {JSON.parse(BenefitsData[0]?.advantages).map((adv, i) => (
                  <li key={i}>{adv}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitLayout;
