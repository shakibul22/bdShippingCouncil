import Link from "next/link";
import React from "react";

const SeminarMenu = () => {
  return (
    <div className="menuDiv w-[300px]">
      <div>
        <h3 className="font-bold">Seminar and workshop</h3>
        <div className="mt-6">
          <ul className="list-disc space-y-2 ">
            <li>
              <Link href={"/"}>Upcoming Seminar & Workshop</Link>
            </li>
            <li>
              <Link href={"/"}>Previous Seminar & Workshop</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SeminarMenu;
