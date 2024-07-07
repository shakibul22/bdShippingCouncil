import Link from "next/link";
import React, { useEffect } from "react";

const AboutUsMenu = ({ close }) => {
  return (
    <div className="menuDiv w-[900px]">
      <div className="w-[300px]">
        <h3 className="font-bold">About Us</h3>

        <div className="mt-6">
          <ul className="list-disc space-y-2">
            <li>
              <Link href={"/about/test"}>Brief About SCB</Link>
            </li>
            <li>
              <Link href={"/about"}>Service to the Shippers Council</Link>
            </li>
            <li>
              <Link href={"/"}>Activities of SCB</Link>
            </li>
            <li>
              <Link href={"/"}>Mission of SCB</Link>
            </li>
            <li>
              <Link href={"/"}>Former Chairman</Link>
            </li>
            <li>
              <Link href={"/"}>Former Sr. Vice Chairman</Link>
            </li>
            <li>
              <Link href={"/"}>Former Vice Chairman</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="px-4 border-x-2 border-black flex-1">
        <h3 className="font-bold">Chairman’s Profile</h3>
      </div>

      <div className="w-[200px] pl-10">
        <h3 className="font-bold">Organizational Info</h3>

        <div className="mt-6">
          <ul className="list-disc space-y-2 ">
            <li>
              <Link href={"/"}>Chairman Profile</Link>
            </li>
            <li>
              <Link href={"/"}>Office Bearers and Directors ({new Date().getFullYear()} & {new Date().getFullYear()+1})</Link>
            </li>
            <li>
              <Link href={"/"}>SCB Secretariat</Link>
            </li>
            <li>
              <Link href={"/"}>Memorandum and Articles of Association</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUsMenu;
