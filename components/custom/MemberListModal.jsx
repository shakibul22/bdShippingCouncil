"use client";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const MemberListModal = ({ member }) => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleCardClick = () => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <div>
      <div
        className="shadow-xl cursor-pointer m-4 p-4 border rounded-lg"
        onClick={handleCardClick}
      >
        <div className="p-2 md:p-4 flex items-center gap-3">
          <div className="text-sm lg:text-base space-y-2">
            <p className="font-bold">{member.company}</p>
            <p className="font-extralight text-xs lg:text-sm tracking-wide">
              Membership ID: {member.membershipId}
            </p>
          </div>
        </div>
      </div>

      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-5 w-11/12 md:w-3/4 lg:w-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{selectedMember.company}</h2>
              <button onClick={handleCloseModal} className="text-black ">
                <FaTimes />
              </button>
            </div>
            <div className="mt-4 space-y-2">
              <p className="font-bold">{selectedMember.name}</p>
              <p>{selectedMember.address}</p>
              <p>Telephone:{selectedMember.tel}</p>
              <p>Mobile:{selectedMember.mob}</p>
              <p>Email:{selectedMember.email}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberListModal;
