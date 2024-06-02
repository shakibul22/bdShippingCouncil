import Link from "next/link";
import React from "react";

const MemberMenu = () => {
  return (
    <div className="menuDiv w-[300px]">
      <div>
        <h3 className="font-bold">Become a member</h3>
        <div className="mt-6">
          <ul className="list-disc space-y-2 ">
            <li>
              <Link href={"/"}>Eligibility</Link>
            </li>
            <li>
              <Link href={"/"}>Membership Form</Link>
            </li>
            <li>
              <Link href={"/"}>Application Procedure</Link>
            </li>
            <li>
              <Link href={"/"}>Benefit of being a Member</Link>
            </li>
            <li>
              <Link href={"/"}>Members Lists</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MemberMenu;
