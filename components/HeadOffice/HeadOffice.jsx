import React from "react";
import Image from "next/image";

const HeadOffice = () => {
  return (
    <div className="h-auto max-w-7xl bg-gradient-to-r from-[#0f3654] to-[#0f3654]/10 mx-auto bg-opacity-10 py-10 my-10 flex items-center justify-between rounded-lg shadow-lg">
      <div className="px-8">
        <h2 className="text-white text-xl font-semibold mb-4">
          Click the map to find the location of our head office
        </h2>
        <p className="text-white">
          • Rangs Fortune Square, Level # A-5, House # 32, Road # 02, Dhanmondi,
          Dhaka-1205, Bangladesh
        </p>
      </div>
      <div className="h-full w-1/2">
        <div
          id="map"
          className="relative h-[300px] overflow-hidden bg-cover  bg-[50%] bg-no-repeat"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
            width="100%"
            height="480"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HeadOffice;
