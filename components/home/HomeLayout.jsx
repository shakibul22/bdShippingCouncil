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
import HomeMember from "./HomeMember";
import HomeRnP from "./HomeRnP";
import HomeSlider from "./HomeSlider";
import Hero from "../custom/Hero";
import HeadOffice from "../HeadOffice/HeadOffice";

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
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center absolute bottom-0">
          <HomeAffiliates />
        </div>
      </div>
      <div className="bg-primaryColor"> {/* <HomeSlider /> */}</div>
      <HomeAboutUs data={homeData[0]} />
      <HomeChairmanProfile data={homeData[1]} />
      <HomeBOD data={homeData[2]} />
      <HomeMember data={homeData[3]} />
      <HomeRnP />
      <HomeAssociate />
      <HomeGallery />
      <HeadOffice />
      <Footer />
    </div>
  );
};

export default HomeLayout;
