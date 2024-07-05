import React, { useRef } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const HeadOffice = () => {
  const mapIframeRef = useRef(null);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust the duration as needed
    });
  }, []);
  // const getUserLocation = () => {
  //   const mapIframe = mapIframeRef.current;
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       const { latitude, longitude } = position.coords;
  //       mapIframe.src = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58516.73451676248!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1`;
  //     });
  //   } else {
  //     alert("Geolocation is not supported by this browser.");
  //   }
  // };

  return (
    <div className="relative bg-[url('/img/office.png')] bg-cover px-2 bg-center h-auto lg:h-[300px] w-full lg:max-w-5xl 3xl:max-w-7xl gap-4 mx-auto py-10 flex flex-col lg:flex-row items-center justify-between rounded-lg shadow-lg">
      <div className="px-8" data-aos="fade-right" data-aos-once="false">
        <h2 className="text-white text-xl font-semibold mb-4">
          Click the map to find the location of our head office
        </h2>
        <p className="text-white">
          • Rangs Fortune Square, Level # A-5, House # 32, Road # 02, Dhanmondi,
          Dhaka-1205, Bangladesh
        </p>
      </div>
      <div
        className="max-w-full lg:w-1/2 mt-4 h-[300px] lg:mt-0 py-1"
        data-aos="fade-up"
        data-aos-once="false"
      >
        <div className="relative h-[300px] lg:h-full overflow-hidden lg:mt-0 py-1  rounded-lg ">
          <iframe
            ref={mapIframeRef}
            id="mapIframe"
            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d58416.73451676248!2d90.36069709152436!3d23.781379533956283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d23.8256128!2d90.4293758!4m5!1s0x3755b92f13cbbed9%3A0xf7da80ae590fd78c!2sShippers&#39;%20Council%20of%20Bangladesh%2C%20Rangs%20Fortune%20Square%2C%20Level%20%23%20A-5%2C%20House%20%23%2032%20Road%20No.%202%2C%20Dhaka%201205!3m2!1d23.7388527!2d90.37870459999999!5e0!3m2!1sen!2sbd!4v1717831230799!5m2!1sen!2sbd"
            width="600"
            height="280"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* <button
            onClick={getUserLocation}
            className="absolute bottom-2 left-2 bg-white p-2 rounded-full shadow-md"
          >
            📍
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default HeadOffice;
