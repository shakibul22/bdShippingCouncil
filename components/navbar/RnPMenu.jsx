import Link from "next/link";
import React from "react";

const RnPMenu = () => {
  return (
    <div className="menuDiv w-[300px]">
      <div>
        <h3 className="font-bold">Research & Publications</h3>
        <div className="mt-6">
          <ul className="list-disc space-y-2 ">
            <li>
              <Link href={"/"}>Shippers’ News</Link>
            </li>
            <li>
              <Link href={"/"}>Shippers news coverage</Link>
            </li>
            <li>
              <Link href={"/"}>SCB Other Publications</Link>
            </li>
            <li>
              <Link href={"/"}>SCB Recommendations</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RnPMenu;
