import React from "react";

const FormerCard = ({ name, period, position }) => {
  return (
    <div className="bg-white p-4 border shadow-lg rounded-xl">
      <h5 className="font-semibold mb-4">{name}</h5>
      <p>{position}</p>
      <p className="font-light">Period: {period}</p>
    </div>
  );
};

export default FormerCard;
