"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const MemberListCard = ({ member }) => {
  const [members] = useState([member]);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleCardClick = (member) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };
  console.log("sds", members);
  return (
    <div>
      {members &&
        members.length > 0 &&
        members?.map((member) => (
          <div
            key={member?.id}
            className="shadow-xl cursor-pointer m-4 p-4 border rounded-lg"
            onClick={() => handleCardClick(member)}
          >
            <div className="p-2 md:p-4 flex items-center gap-3">
              {/* Uncomment and add correct image path if you have a logo */}
              {/* <img src={`/img/memberLogo/${member?.logo}`} width={70} height={70} alt="member" className="rounded-md" /> */}
              <div className="text-sm lg:text-base space-y-2">
                <p className="">{member?.name}</p>
                <p className="font-extralight text-xs lg:text-sm tracking-wide">
                  Membership ID: {member?.membershipId}
                </p>
              </div>
            </div>
          </div>
        ))}

      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-5 w-11/12 md:w-3/4 lg:w-1/2">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Member Details</h2>
              <button onClick={handleCloseModal} className="text-red-600">
                <FaTimes />
              </button>
            </div>
            <div className="mt-4 space-y-2">
              <p>
                <strong>Name:</strong> {selectedMember.name}
              </p>
              <p>
                <strong>Company:</strong> {selectedMember.company}
              </p>
              <p>
                <strong>Address:</strong> {selectedMember.address}
              </p>
              <p>
                <strong>Telephone:</strong> {selectedMember.tel}
              </p>
              <p>
                <strong>Mobile:</strong> {selectedMember.mob}
              </p>
              <p>
                <strong>Email:</strong> {selectedMember.email}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default MemberListCard;
