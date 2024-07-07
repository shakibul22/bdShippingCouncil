import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const FooterCred = () => {
  const emailAddresses = ["scbdhk@gmail.com"];
  const telNumbers = ["88-02-41064017"];
  const address = "Rangs Fortune Square, Level # A-5, House # 32, Road # 02, Dhanmondi, Dhaka-1205, Bangladesh";
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div className="text-xs font-extralight text-center">
      <div className="flex items-center flex-row justify-center">
        {emailAddresses.map((email, index) => (
          <Link
            key={index}
            href={`mailto:${email}`}
            aria-label={`Send an email to ${email}`}
            className="mr-3 flex h-8 w-8 items-center justify-center bg-white rounded-full border border-stroke hover:border-primary hover:bg-btn text-red-600 hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
          >
             <Image
      width={16}
      alt="gmail"
      height={16}
      loading="lazy"
      src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1719690838/Gmail_icon__2020_ybntks.svg"
      className="w-full h-full p-2"
    />
          </Link>
        ))}
        {telNumbers.map((tel, index) => (
          <Link
            key={index}
            href={`tel:${tel}`}
            aria-label={`Call ${tel}`}
            className="mr-3 flex h-8 w-8 items-center justify-center bg-white rounded-full border border-stroke hover:border-primary hover:bg-btn text-blue-400 hover:text-white xl:mr-4"
          >
            <FaPhoneAlt />
          </Link>
        ))}
        <Link
          href={googleMapsLink}
          aria-label="Open address in Google Maps"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-3 flex h-8 w-8 items-center justify-center bg-white rounded-full border border-stroke hover:border-primary hover:bg-btn text-red-600 hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
        >
          <FaMapMarkerAlt className="text-xl" />
        </Link>
      </div>
     
    </div>
  );
};

export default FooterCred;
