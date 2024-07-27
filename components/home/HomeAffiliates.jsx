import Image from "next/image";
import React from "react";

const affiliateImages = [
  { id: 1, src: "/img/affiliates/AAEI-Horizontal-Logo-Final-White-RGB-1024x149.jpg", name: "Affiliate 1" },
  { id: 3, src: "/img/affiliates/AW_ESCAP_LOGO_OFFICIAL.png", name: "Affiliate 3" },
  { id: 4, src: "/img/affiliates/Asian Shippers' Alliance-ASA.jpg", name: "Affiliate 4" },
  { id: 6, src: "/img/affiliates/Global Shippers' Alliance.jpg", name: "Affiliate 6" },
  { id: 9, src: "/img/affiliates/Logo-GSA6.png", name: "Affiliate 9" },
  { id: 10, src: "/img/affiliates/MG-LOGO-WITH-NEW-TAG-LINE-e1699524466656-2048x838.png", name: "Affiliate 10" },
  { id: 11, src: "/img/affiliates/Malaysian National National Shippers' Council.jpg", name: "Affiliate 11" },
  { id: 13, src: "/img/affiliates/Maritime gateway.jpg", name: "Affiliate 13" },
  { id: 16, src: "/img/affiliates/Thai National Shippers' Council.jpg", name: "Affiliate 16" },
  { id: 17, src: "/img/affiliates/UN - ESCAP.jpg", name: "Affiliate 17" },
  { id: 18, src: "/img/affiliates/apsa-logo.png", name: "Affiliate 18" },
  { id: 20, src: "/img/affiliates/european shippers' council.jpg", name: "Affiliate 20" },
  { id: 21, src: "/img/affiliates/gsa.webp", name: "Affiliate 21" },
  { id: 22, src: "/img/affiliates/images.jpg", name: "Affiliate 22" },
  { id: 26, src: "/img/affiliates/logo.jpg", name: "Affiliate 26" },
  { id: 28, src: "/img/affiliates/macn.webp", name: "Affiliate 28" },
  { id: 29, src: "/img/affiliates/mnsc-logo.png", name: "Affiliate 29" },
];


const HomeAffiliates = () => {
  return (
    <div className="relative overflow-hidden mt-24">
      <h3 className="text-lg md:text-xl px-2 font-poppins lg:text-2xl text-white text-start">
        Our Affiliates
      </h3>
      <div
        className="w-full lg:max-w-5xl mx-auto mt-7   scroll-container"
        style={{ "--gap": "10px" }} // Adjust the gap value
      >
        <div className="scroll-content ">
          {affiliateImages.map((aff) => (
            <div
              key={aff.id}
              className="w-[70px] sm:w-[75px] h-auto bg-white lg:w-[130px] lg:h-[60px] scroll-item  overflow-hidden"
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
          
      
        </div>
      </div>
    </div>
  );
};

export default HomeAffiliates;
