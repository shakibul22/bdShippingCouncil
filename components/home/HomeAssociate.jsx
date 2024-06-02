import Link from "next/link";
import MemberListCard from "../custom/MemberListCard";
import { publicRequest } from "@/requestMethod";

const getMembers = async () => {
  const res = await publicRequest("/member/memberlist");
  return res.data;
};

const data = getMembers();

const HomeAssociate = async () => {
  // const res = await publicRequest("/member/memberlist");
  const memberList = await data;
  return (
    <div className="bg-[url('/img/memberbg.webp')] bg-cover bg-center px-2 xl:px-0 py-8 lg:py-20 text-white">
      <div className="mx-auto max-w-screen-2xl">
        <h3 className="text-xl font-bold lg:text-4xl">
          Some of Our Associate Members
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {memberList?.slice(0, 6).map((associate, i) => (
            <MemberListCard
              bg={"glass"}
              key={i}
              name={associate.name}
              member_id={associate.membershipId}
            />
          ))}
        </div>

        <div>
          <Link
            href={"/member/list"}
            className="py-2.5 px-5 w-fit leading-normal bg-secondaryColor block shadow-lg mx-auto mt-12 text-white font-semibold"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeAssociate;
