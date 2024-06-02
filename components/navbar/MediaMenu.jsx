import Link from "next/link";
import React from "react";

const MediaMenu = () => {
  return (
    <div className="menuDiv w-[300px]">
      <div>
        <h3 className="font-bold">Media Gallery</h3>
        <div className="mt-6">
          <ul className="list-disc space-y-2 ">
            <li>
              <Link href={"/"}>Photo gallery</Link>
            </li>
            <li>
              <Link href={"/"}>Video Gallery</Link>
            </li>
            <li>
              <Link href={"/"}>Condolence</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MediaMenu;
