import Image from "next/image";
import React from "react";
import img1 from "../../public/img/affiliates/AAEI-Horizontal-Logo-Final-White-RGB-1024x149.jpg";
import img3 from "../../public/img/affiliates/AW_ESCAP_LOGO_OFFICIAL.png";
import img4 from "../../public/img/affiliates/Asian Shippers' Alliance-ASA.jpg";
import img6 from "../../public/img/affiliates/Global Shippers' Alliance.jpg";
import img9 from "../../public/img/affiliates/Logo-GSA6.png";
import img10 from "../../public/img/affiliates/MG-LOGO-WITH-NEW-TAG-LINE-e1699524466656-2048x838.png";
import img11 from "../../public/img/affiliates/Malaysian National National Shippers' Council.jpg";
import img13 from "../../public/img/affiliates/Maritime gateway.jpg";
import img16 from "../../public/img/affiliates/Thai National Shippers' Council.jpg";
import img17 from "../../public/img/affiliates/UN - ESCAP.jpg";
import img18 from "../../public/img/affiliates/apsa-logo.png";
import img20 from "../../public/img/affiliates/european shippers' council.jpg";
import img21 from "../../public/img/affiliates/gsa.webp";
import img22 from "../../public/img/affiliates/images.jpg";
import img26 from "../../public/img/affiliates/logo.jpg";
import img28 from "../../public/img/affiliates/macn.webp";
import img29 from "../../public/img/affiliates/mnsc-logo.png";
const affiliateImages = [
  { id: 1, src: img1, name: "Affiliate 1" },
  { id: 3, src: img3, name: "Affiliate 3" },
  { id: 4, src: img4, name: "Affiliate 4" },
  { id: 6, src: img6, name: "Affiliate 6" },
  { id: 9, src: img9, name: "Affiliate 9" },
  { id: 10, src: img10, name: "Affiliate 10" },
  { id: 11, src: img11, name: "Affiliate 11" },
  { id: 13, src: img13, name: "Affiliate 13" },
  { id: 16, src: img16, name: "Affiliate 16" },
  { id: 17, src: img17, name: "Affiliate 17" },
  { id: 18, src: img18, name: "Affiliate 18" },
  { id: 20, src: img20, name: "Affiliate 20" },
  { id: 21, src: img21, name: "Affiliate 21" },
  { id: 22, src: img22, name: "Affiliate 22" },
  { id: 26, src: img26, name: "Affiliate 26" },
  { id: 28, src: img28, name: "Affiliate 28" },
  { id: 29, src: img29, name: "Affiliate 29" },
];

const HomeAffiliates = () => {
  return (
    <div className="relative overflow-hidden mt-24">
      <h3 className="text-lg md:text-xl px-2 font-poppins lg:text-2xl text-white text-start">
        Our Affiliates
      </h3>
      <div
        className="max-w-screen-xl mx-auto mt-7 overflow-hidden  scroll-container"
        style={{ "--gap": "10px" }} // Adjust the gap value
      >
        <div className="scroll-content">
          {affiliateImages.map((aff) => (
            <div
              key={aff.id}
              className="w-[70px] sm:w-[75px] h-auto bg-white lg:w-[130px] lg:h-[60px] scroll-item"
            >
              <Image
                src={aff.src}
                width={100}
                height={100}
                alt={aff.name}
                className="mx-auto h-full w-full p-2"
              />
            </div>
          ))}
          {/* {affiliateImages.map((aff) => (
            <div
              key={aff.id + 9}
              className="w-[70px] sm:w-[75px] bg-white h-auto lg:w-[130px] lg:h-[60px] scroll-item"
            >
              <Image
                src={aff.src}
                width={100}
                height={100}
                alt={aff.name}
                className="mx-auto"
              />
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default HomeAffiliates;
