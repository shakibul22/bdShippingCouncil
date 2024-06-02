import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

import { FaAngleDown } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const MobNav = () => {
  const pathname = usePathname();

  return (
    <div className="h-screen flexCenter flex-col gap-6 text-lg">
      <div
        className={`py-1.5 px-2.5 rounded-md ${
          pathname === "/" && "bg-secondaryColor"
        }`}
      >
        <Link href={"/"}>Home</Link>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger
          className={`flexCenter gap-1 cursor-pointer relative py-1.5 px-2.5 rounded-md flex items-center active:outline-none focus:outline-none ${
            pathname.split("/")[1] === "about" && "bg-secondaryColor"
          }`}
        >
          About Us
          <FaAngleDown size={15} className="opacity-70" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>About Us</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={"/about"}>Brief About SCB</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/about/service"}>Service to the Shippers Council</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/about/activities"}>Activities of SCB</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/about/mission"}>Mission of SCB</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/about/former-chairmen"}>Former Chairman</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/about/former-svc"}>Former Sr. Vice Chairman</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/about/former-vc"}>Former Vice Chairman</Link>
          </DropdownMenuItem>
          <DropdownMenuLabel>Organizational Info</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={"/chairman"}>Chairman Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/about/officials"}>
              Office Bearers and Directors (2022 & 2023)
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/about/secretariat"}>SCB Secretariat</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/about/memorandum"}>
              Memorandum and Articles of Association
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger
          className={`flexCenter gap-1 cursor-pointer relative py-1.5 px-2.5 rounded-md flex items-center active:outline-none focus:outline-none ${
            pathname.split("/")[1] === "news" && "bg-secondaryColor"
          }`}
        >
          Research & Publication
          <FaAngleDown size={15} className="opacity-70" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Research & Publication</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={"/news"}>Shippers’ News</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/news/coverage"}>Shippers news coverage</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/news/others"}>SCB Other Publications</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/news/budget"}>SCB Recommendations</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger
          className={`flexCenter gap-1 cursor-pointer relative py-1.5 px-2.5 rounded-md flex items-center active:outline-none focus:outline-none ${
            pathname.split("/")[1] === "seminar" && "bg-secondaryColor"
          }`}
        >
          Seminar
          <FaAngleDown size={15} className="opacity-70" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Seminar and workshop</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={"/seminar"}>Upcoming Seminar & Workshop</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/seminar/previous"}>Previous Seminar & Workshop</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger
          className={`flexCenter gap-1 cursor-pointer relative py-1.5 px-2.5 rounded-md flex items-center active:outline-none focus:outline-none ${
            pathname.split("/")[1] === "media" && "bg-secondaryColor"
          }`}
        >
          Media Corner
          <FaAngleDown size={15} className="opacity-70" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Media Gallery </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={"/media"}>Photo galley</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/media/video"}>Video Gallery</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/media/condolence"}>Condolence</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger
          className={`flexCenter gap-1 cursor-pointer relative py-1.5 px-2.5 rounded-md flex items-center active:outline-none focus:outline-none ${
            pathname.split("/")[1] === "member" && "bg-secondaryColor"
          }`}
        >
          Become a Member
          <FaAngleDown size={15} className="opacity-70" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Become a member</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={"/member"}>Eligibility</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/member/membership"}>Membership Form</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/member/application"}>Application Procedure</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/member/benefits"}>Benefit of being a Member</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/member/list"}>Members Lists</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div
        className={`flexCenter gap-1 cursor-pointer relative py-1.5 px-2.5 rounded-md flex items-center ${
          pathname.split("/")[1] === "useful-links" && "bg-secondaryColor"
        }`}
      >
        <Link href={"/useful-link"}>Useful Link</Link>
      </div>

      <div>
        <Link
          href={"/contact"}
          className="py-2.5 px-5 w-fit leading-normal bg-secondaryColor border border-white block"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default MobNav;
