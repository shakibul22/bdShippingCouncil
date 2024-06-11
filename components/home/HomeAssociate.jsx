import Link from "next/link";
import MemberListCard from "../custom/MemberListCard";
import { publicRequest } from "@/requestMethod";
import { ImArrowUpRight2 } from "react-icons/im";

const getMembers = async () => {
  const res = await publicRequest("/member/memberlist");
  return res.data;
};

const data = getMembers();

const HomeAssociate = async () => {
  // const res = await publicRequest("/member/memberlist");
  const memberList = await data;
  return (
    <div className="bg-[url('/img/memberbg.png')] bg-cover bg-center px-2 xl:px-0 py-8 lg:py-20 text-white">
      <div className="w-full lg:max-w-5xl 3xl:max-w-7xl mx-auto">
        <h3 className="text-xl font-bold font-poppins lg:text-4xl">
          Some of Our <span className="text-btn">Associate</span> Members
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {memberList && Array.isArray(memberList) && memberList?.slice(0, 1).map((associate, i) => (
            <div
              key={i}
              className="border border-white shadow-md rounded-tl-3xl p-5 rounded-bl-3xl hover:bg-sky-400/30 rounded-br-3xl rounded-tr-none hover:rounded-tr-3xl hover:rounded-br-none glass_bg "
            >
              <MemberListCard
                bg={"glass"}
                name={associate.name}
                member_id={associate.membershipId}
              />
            </div>
          ))}
          {memberList && Array.isArray(memberList) && memberList?.slice(1, 2).map((associate, i) => (
            <div
              key={i}
              className="border border-white shadow-md rounded-3xl p-5  hover:rounded-tr-none hover:rounded-bl-none hover:bg-sky-400/30 glass_bg "
            >
              <MemberListCard
                name={associate.name}
                member_id={associate.membershipId}
              />
            </div>
          ))}
          {memberList && Array.isArray(memberList) && memberList?.slice(2, 3).map((associate, i) => (
            <div
              key={i}
              className="border border-white shadow-md rounded-tl-none p-5 hover:bg-sky-400/30 rounded-bl-3xl rounded-br-3xl rounded-tr-3xl hover:rounded-bl-none hover:rounded-tl-3xl glass_bg "
            >
              <MemberListCard
                name={associate.name}
                member_id={associate.membershipId}
              />
            </div>
          ))}
          {memberList && Array.isArray(memberList) && memberList?.slice(3, 4).map((associate, i) => (
            <div
              key={i}
              className="border border-white shadow-md rounded-tl-3xl p-5 rounded-bl-3xl hover:bg-sky-400/30 rounded-br-none rounded-tr-3xl hover:rounded-tr-none hover:rounded-br-3xl glass_bg "
            >
              <MemberListCard
                bg={"glass"}
                name={associate.name}
                member_id={associate.membershipId}
              />
            </div>
          ))}
          {memberList && Array.isArray(memberList) && memberList?.slice(4, 5).map((associate, i) => (
            <div
              key={i}
              className="border border-white shadow-md rounded-3xl p-5  hover:rounded-tr-none hover:rounded-bl-none hover:bg-sky-400/30 glass_bg "
            >
              <MemberListCard
                name={associate.name}
                member_id={associate.membershipId}
              />
            </div>
          ))}
          {memberList && Array.isArray(memberList) && memberList?.slice(5, 6).map((associate, i) => (
            <div
              key={i}
              className="border border-white shadow-md rounded-tl-3xl p-5 hover:bg-sky-400/30 rounded-bl-none rounded-br-3xl rounded-tr-3xl hover:rounded-bl-3xl hover:rounded-tl-none glass_bg "
            >
              <MemberListCard
                name={associate.name}
                member_id={associate.membershipId}
              />
            </div>
          ))}
        </div>

        <div>
          <Link
            href={"/member/list"}
            className="py-2.5 px-7 w-fit flex flex-row justify-center gap-2 leading-normal bg-btn items-center rounded-sm shadow-lg mx-auto mt-12 text-white font-semibold"
          >
            See More <ImArrowUpRight2 />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeAssociate;
