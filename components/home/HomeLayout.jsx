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
import Hero from "../custom/Hero";

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
      <div className="h-[60vh] sm:h-[70vh] md:h-[45vh] lg:h-screen 3xl:h-screen bg-transparent opacity-100    bg-[url('https://res.cloudinary.com/dgohi0iqm/image/upload/v1717481512/istockphoto-1317779371-1024x1024_1_migxdp.jpg')] bg-cover   bg-center -z-50 ">
        <div className="h-screen ">
          <div className="h-full flex flex-col max-w-7xl mx-auto ">
            <Hero />
            <div className="absolute bottom-0">
              <HomeAffiliates />
            </div>
          </div>
          {/* <HomeLatestNews /> */}
          <div>
            <div className="bg-primaryColor">
              <HomeSlider />
            </div>
            <HomeAboutUs data={homeData[0]} />
            <HomeChairmanProfile data={homeData[1]} />
            <HomeBOD data={homeData[2]} />
            <HomeMember data={homeData[3]} />
            <HomeRnP />
            <HomeAssociate />
            <HomeGallery />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
