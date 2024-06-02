import React from "react";

const MissionCard = ({ text, bg }) => {
  return (
    <div
      style={{ backgroundColor: `${bg}` }}
      className="p-3 rounded-xl flexCenter font-medium h-32 border shadow-lg text-center"
    >
      <p>{text}</p>
    </div>
  );
};

export default MissionCard;
