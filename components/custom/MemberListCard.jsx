"use client";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import ReactDOM from "react-dom";

const Modal = ({ onClose, selectedMember }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-5 w-11/12 md:w-1/2 lg:w-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{selectedMember.company}</h2>
          <button onClick={onClose} className="text-black">
            <FaTimes />
          </button>
        </div>
        <div className="mt-4 space-y-2">
          <p className="font-bold">{selectedMember.name}</p>
          <p>{selectedMember.address}</p>
          <p>Telephone: {selectedMember.tel}</p>
          <p>Mobile: {selectedMember.mob}</p>
          <p>Email: {selectedMember.email}</p>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

const MemberListCard = ({ member }) => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleCardClick = () => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <div>
      <div className="shadow-xl cursor-pointer" onClick={handleCardClick}>
        <div className="flex justify-center items-center font-poppins relative -z-10">
          <div className="p-2 md:p-4 flex items-center gap-3">
            <div className="space-y-2 flex flex-col justify-center items-center">
              <p className="text-sm lg:text-[16px] font-medium">
                {member.company}
              </p>
              <p className="font-extralight text-xs lg:text-sm tracking-wide">
                Membership ID: {member.membershipId || "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {selectedMember && (
        <Modal onClose={handleCloseModal} selectedMember={selectedMember} />
      )}
    </div>
  );
};

export default MemberListCard;
