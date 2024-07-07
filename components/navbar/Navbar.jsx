"use client";

//External Imports
import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { BsSend } from "react-icons/bs";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

//Internal imports
import logo from "/public/img/logo.webp";
import Link from "next/link";
import { useState } from "react";
import AboutUsMenu from "./AboutUsMenu";
import RnPMenu from "./RnPMenu";
import SeminarMenu from "./SeminarMenu";
import MediaMenu from "./MediaMenu";
import MemberMenu from "./MemberMenu";
import MobNav from "./MobNav";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const openMob = () => {
    document.getElementById("mob").style.display = "block";
  };

  const closeMob = () => {
    document.getElementById("mob").style.display = "none";
  };

  const pathname = usePathname();

  const [openMenu, setopenMenu] = useState(null);

  return (
    <div className="absolute z-50  w-full top-0 bg-white">
      {/* Mobile Nav */}
      <div
        className={`h-[85px] flex items-end px-2 md:px-6 pb-3 ${
          pathname === "/" ? "bg-transparent text-lg" : "bg-white"
        }  text-white relative lg:hidden`}
      >
        <div className="flex justify-between items-center flex-1">
          <div className="flex items-center gap-1">
            <Image src={logo} width={40} height={40} alt="logo" />
            <h2
              className={`${inter.className} font-semibold text-black text-lg`}
            >
              Shippers’ Council of Bangladesh
            </h2>
          </div>
          <div
            className="w-[35px] h-[35px] bg-white text-black rounded-[5px] flexCenter"
            onClick={openMob}
          >
            <BiMenuAltRight size={30} />
          </div>
        </div>

        <div
          id="mob"
          className="h-screen w-full fixed top-0 left-0 hidden animate__animated animate__fadeIn animate__faster bg-white text-black/30 backdrop-blur-[35px] z-50"
        >
          <AiOutlineClose
            size={35}
            className="absolute top-12 right-4"
            onClick={closeMob}
          />

          <div>
            <MobNav />
          </div>
        </div>
      </div>

      {/* PC Nav */}
      <div
        className={` ${
          pathname === "/" ? "bg-transparent text-lg" : "bg-white"
        }  hidden lg:block  relative select-none z-10`}
      >
        {/* top bar */}
        <div className="w-full lg:max-w-5xl 3xl:max-w-7xl mx-auto flex flex-row justify-between items-center h-[80px]">
          <div className="flex gap-3 items-center">
            <Image src={logo} width={50} height={50} alt="logo" />
            <h2
              className={`${inter.className} lg:text-2xl 3xl:text-3xl text-[#0a4a77] font-bold font-Inter`}
            >
              Shippers’ Council of Bangladesh
            </h2>
          </div>
          <div className="border border-[#477799] rounded-tl-3xl bg-[#ffffff]  rounded-bl-3xl rounded-br-[32px] w-[198px] ">
            <Link
              href="/contact"
              className="font-bold text-lg col-span-1 flex items-center gap-2 w-fit leading-normal"
            >
              <div className="bg-[#0a4a77] p-1 rounded-full">
                <div className="p-2 rounded-full border border-[#84a4bb]  ">
                  <BsSend className="lg:text-lg 3xl:text-xl transform transition-transform duration-1000 hover:rotate-45 text-white" />
                </div>
              </div>
              <span className="pr-2 text-[#0a4a77]"> CONTACT US</span>
            </Link>
          </div>
        </div>

        {/* nav bar */}
        <div className="bg-[#0a4a77] py-1.5 mt-2  text-white">
          <div
            className={`w-full lg:max-w-5xl 3xl:max-w-6xl mx-auto  flex items-center justify-between h-full font-light`}
          >
            {/* Home */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem
                  className={
                    pathname === "/"
                      ? "bg-white text-lg  font-normal text-[#0a4a77] rounded-none"
                      : "hover:bg-white transition duration-700 text-lg font-normal text-white hover:text-[#0a4a77]"
                  }
                >
                  <Link href={"/"} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <span className="text-lg">Home</span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* About Us */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`bg-transparent text-lg  hover:bg-white transition font-normal duration-700 hover:text-[#0a4a77] rounded-none ${
                      pathname.split("/")[1] === "about"
                        ? "bg-white text-black"
                        : null
                    }`}
                  >
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="py-4 px-10">
                    <div className="w-[800px] grid grid-cols-4 text-sm">
                      <div>
                        <h3 className="font-bold">About Us</h3>
                        <ul className="list-disc space-y-3 mt-4">
                          <li>
                            <NavigationMenuLink>
                              <Link href={"/about"}>Brief About SCB</Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink>
                              <Link href={"/about/service"}>
                                Service to the Shippers Council
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink>
                              <Link href={"/about/activities"}>
                                Activities of SCB
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink>
                              <Link href={"/about/mission"}>
                                Mission of SCB
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink>
                              <Link href={"/about/former-chairmen"}>
                                Former Chairman
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink>
                              <Link href={"/about/former-svc"}>
                                Former Sr. Vice Chairman
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink>
                              <Link href={"/about/former-vc"}>
                                Former Vice Chairman
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>

                      <div className="border-x-2 px-4 mr-12 col-span-2 space-y-4">
                        <h3 className="font-bold">Chairman’s Profile</h3>
                        <Image
                          src={"/img/chairman/chairman2.webp"}
                          alt="chairman"
                          width={200}
                          height={200}
                          className=" mx-auto rounded-lg shadow-lg border-2"
                        />
                        <p className="text-sm text-justify">
                          A very warm welcome to you all present here this
                          morning of the new year on the occasion of our 40th
                          Annual General Meeting (AGM). We are scheduled today
                          to transact the business of the Annual General Meeting
                        </p>
                      </div>

                      <div>
                        <h3 className="font-bold">Organizational Info</h3>
                        <ul className="list-disc space-y-3 mt-4">
                          <li>
                            <NavigationMenuLink>
                              <Link href={"/chairman"}>Chairman Profile</Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink>
                              <Link href={"/about/officials"}>
                                Office Bearers and Directors (
                                {new Date().getFullYear() } &{" "}
                                {new Date().getFullYear()+1})
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink>
                              <Link href={"/about/secretariat"}>
                                SCB Secretariat
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink>
                              <Link href={"/about/memorandum"}>
                                Memorandum and Articles of Association
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Research & Publication */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`bg-transparent text-lg font-normal  hover:bg-white transition duration-700 hover:text-[#0a4a77] rounded-none ${
                      pathname.split("/")[1] === "news"
                        ? "bg-white text-black"
                        : null
                    }`}
                  >
                    Research & Publication
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="py-4 px-10 text-sm">
                    <h3 className="font-bold">Research & Publication</h3>
                    <ul className="list-disc space-y-3 mt-4 w-[230px]">
                      <li>
                        <NavigationMenuLink>
                          <Link href={"/news"}>Shippers’ News</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink>
                          <Link href={"/news/coverage"}>
                            Shippers news coverage
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink>
                          <Link href={"/news/others"}>
                            SCB Other Publications
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink>
                          <Link href={"/news/budget"}>SCB Recommendations</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink>
                          <Link href={"/news/circular"}>SCB Circular</Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Seminar */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`bg-transparent text-lg font-normal hover:bg-white transition duration-700 hover:text-[#0a4a77] rounded-none ${
                      pathname.split("/")[1] === "seminar"
                        ? "bg-white text-black"
                        : null
                    }`}
                  >
                    Seminar
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="py-4 px-10 text-sm">
                    <h3 className="font-bold">Seminar and workshop</h3>
                    <ul className="list-disc space-y-3 mt-4 w-[280px]">
                      <li>
                        <NavigationMenuLink>
                          <Link href={"/seminar"}>
                            Upcoming Seminar & Workshop
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink>
                          <Link href={"/seminar/previous"}>
                            Previous Seminar & Workshop
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Media Corner */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`bg-transparent text-lg font-normal hover:bg-white transition duration-700 hover:text-[#0a4a77]  rounded-none ${
                      pathname.split("/")[1] === "media"
                        ? "bg-white text-black"
                        : null
                    }`}
                  >
                    Media Corner
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="py-4 px-10 text-sm">
                    <h3 className="font-bold">Media Gallery</h3>
                    <ul className="list-disc space-y-3 mt-4 w-[150px]">
                      <li>
                        <NavigationMenuLink>
                          <Link href={"/media"}>Photo gallery</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink>
                          <Link href={"/media/video"}>Video Gallery</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink>
                          <Link href={"/media/condolence"}>Condolence</Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Become a Member */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`bg-transparent text-lg font-normal hover:bg-white transition duration-700 hover:text-[#0a4a77]  rounded-none ${
                      pathname.split("/")[1] === "member"
                        ? "bg-white text-black"
                        : null
                    }`}
                  >
                    Become a Member
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="py-4 px-10 text-sm">
                    <h3 className="font-bold">Become a member</h3>
                    <ul className="list-disc space-y-3 mt-4 w-[200px]">
                      <li>
                        <NavigationMenuLink>
                          <Link href={"/member"}>Eligibility</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink>
                          <Link href={"/member/membership"}>
                            Membership Form
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink>
                          <Link href={"/member/application"}>
                            Application Procedure
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink>
                          <Link href={"/member/benefits"}>
                            Benefit of being a Member
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink>
                          <Link href={"/member/list"}>Members Lists</Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                    {/* <NavigationMenuLink>Link</NavigationMenuLink> */}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Useful Link */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem
                  className={
                    pathname === "/useful-link"
                      ? "bg-white text-black font-normal hover:bg-white transition duration-700 hover:text-[#0a4a77]"
                      : "hover:bg-white transition font-normal duration-700 hover:text-[#0a4a77]  "
                  }
                >
                  <Link href={"/useful-link"} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {" "}
                      <span className="text-lg"> Useful Link</span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {openMenu && (
            <div
              className="fixed h-screen w-screen max-w-full top-0 left-0 bg-gradient-to-b from-black/40 to-transparent text-lg z-0"
              onClick={() => setopenMenu(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
