import { MembershipFormData } from "@/data/MembershipForm";
import { publicRequest } from "@/requestMethod";
import Image from "next/image";

const MembershipLayout = async () => {
  const res = await publicRequest("/member/membership");
  const membershipData = await res.data;

  // const resF = await publicRequest("")
  return (
    <div className="px-2 py-8 text-sm lg:text-base">
      <div className="max-w-screen-2xl mx-auto space-y-10 md:space-y-20">
        <div className="font-semibold space-y-4 md:space-y-0 md:flex md:gap-8">
          <a
            href={`/pdf/ordinary.pdf`}
            // href="/public/pdf/ordinary.pdf"
            // download={"Ordinary Membership Form.pdf"}
            className="p-4 bg-white border-2 border-dashed rounded-xl flex items-center gap-3 hover:shadow-lg cursor-pointer flex-1 easyTrans"
          >
            <Image
              src={"/img/pdf.png"}
              width={60}
              height={60}
              alt="pdf"
              className=""
            />
            <p>Download Ordinary Membership Form</p>
          </a>

          <a
            href={`/pdf/associate.pdf`}
            // download={"Associate Membership Form.pdf"}
            className="p-4 bg-white border-2 border-dashed rounded-xl flex items-center gap-3 hover:shadow-lg cursor-pointer flex-1 easyTrans"
          >
            <Image
              src={"/img/pdf.png"}
              width={60}
              height={60}
              alt="pdf"
              className=""
            />
            <p>Download Associate Membership Form</p>
          </a>
        </div>

        <div className="leading-normal space-y-4 md:space-y-6 text-justify">
          <p className="font-semibold">{MembershipFormData[0].header}</p>
          {membershipData?.map((point) => (
            <p key={point.id} className="ml-3">
              <span className="font-medium mr-1">{point.id}.</span>
              <span className="font-medium ">{point.title}:</span> {point.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembershipLayout;
