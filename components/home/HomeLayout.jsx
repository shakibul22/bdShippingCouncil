/* eslint-disable @next/next/no-async-client-component */
"use client";

import { publicRequest } from "@/requestMethod";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import HomeAboutUs from "./HomeAboutUs";
import HomeAffiliates from "./HomeAffiliates";
import HomeAssociate from "./HomeAssociate";
import HomeBOD from "./HomeBOD";
import HomeChairmanProfile from "./HomeChairmanProfile";
import HomeGallery from "./HomeGallery";
import HomeLatestNews from "./HomeLatestNews";
import HomeMember from "./HomeMember";
import HomeRnP from "./HomeRnP";
import HomeSlider from "./HomeSlider";

// async function getData() {
//   const res = await fetch(`
//     ${process.env.NEXT_PUBLIC_API_BASE_URL}/home/alldata`);
//   return await res.json();
// }

async function getData() {
  try {
    const res = await publicRequest("/home/alldata");
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

const data = getData();

const HomeLayout = async () => {
  const homeData = await data;
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div className="h-[60vh] sm:h-[70vh] md:h-[45vh] lg:h-[100vh] 3xl:h-[85vh] bg-[url('/img/herobg.webp')] bg-cover bg-center -z-50 object-cover">
        <div className="bg-black/50 h-full backdrop-blur-md">
          <div className="h-full flexCenter -z-40">
            <div className="w-[87%] sm:w-[600px] lg:w-[900px] xl:w-[1180px] pt-[50px] lg:pt-[130px]">
              <HomeSlider />
            </div>
          </div>
          <HomeLatestNews />

          <div>
            <HomeAboutUs data={homeData[0]} />
            <HomeChairmanProfile data={homeData[1]} />
            <HomeBOD data={homeData[2]} />
            <HomeMember data={homeData[3]} />
            <HomeRnP />
            <HomeAssociate />
            <HomeGallery />
            <HomeAffiliates />
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
