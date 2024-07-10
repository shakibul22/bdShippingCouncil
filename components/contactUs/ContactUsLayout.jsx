import React from "react";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

const ContactUsLayout = () => {
  return (
    <div className="subRoutebg">
      <div className="bg-[url('/img/contactus_bg.webp')] subRoutebanner">
        <div className="subRouteblack">
          <h2 className="subRouteTitle animate__animated animate__fadeInUp">
            Contact Us
          </h2>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-2 py-6 flex flex-col gap-8 lg:flex-row">
        <div className="bg-[#0C3046] text-white px-6 py-10 lg:py-24 text-sm lg:text-base font-extralight tracking-wide space-y-6 min-h-[350px] flex-1 shadow-lg animate__animated animate__fadeInLeft">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-tabbg w-fit rounded-full">
              <FaLocationDot size={24} className="text-primaryColor" />
            </div>
            <p>
              Rangs Fortune Square, Level # A-5, House # 32, Road # 02,
              Dhanmondi, Dhaka-1205, Bangladesh
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-4 bg-tabbg w-fit rounded-full">
              <FaPhone size={24} className="text-primaryColor" />
            </div>
            <p>Tel : 88-02-41064017, 41063015, 41063016, 41060180 & 41063014</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-4 bg-tabbg w-fit rounded-full">
              <FaEnvelope size={24} className="text-primaryColor" />
            </div>
            <p>Email: scbdhk@gmail.com</p>
          </div>
        </div>

        <div className="space-y-5 flex-1 animate__animated animate__fadeInRight">
          <h4 className="text-sm lg:text-base font-semibold md:text-base">
            Click the map to find the location
          </h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.238933116371!2d90.37612967621067!3d23.738857589217726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b92f13cbbed9%3A0xf7da80ae590fd78c!2sShippers&#39;%20Council%20of%20Bangladesh!5e0!3m2!1sen!2sbd!4v1697479008459!5m2!1sen!2sbd"
            width="auto"
            height="auto"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-96 lg:h-[500px] border-2 shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsLayout;
