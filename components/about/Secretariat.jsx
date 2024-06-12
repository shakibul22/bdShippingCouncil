'use client'
import React, { useState, useEffect } from "react";
import BODcard from "../custom/BODcard";
import { publicRequest } from "@/requestMethod";

const Secretariat = () => {
  const [secretariatData, setSecretariatData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await publicRequest(`/aboutUs/secretariat`);
        const data = await res.data;
        setSecretariatData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="px-2 py-10">
      <div className="max-w-screen-2xl mx-auto text-sm lg:text-base space-y-10">
        <h4 className="text-lg lg:text-xl font-semibold text-center">
          SCB Secretariats of Term ({new Date().getFullYear()-1} & {new Date().getFullYear()})
        </h4>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-x-4 sm:gap-y-8">
          {secretariatData.map((sec) => (
            <BODcard
              name={sec.name}
              designation={sec.position}
              image={sec.image}
              key={sec.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Secretariat;
