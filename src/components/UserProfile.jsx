import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

const UserProfile = () => {
  return (
    <section className=" flex items-center justify-between border border-gainsboro p-2 rounded-md">
      <div className=" flex items-center gap-3">
        <div className=" w-8 h-8 bg-gainsboro flex justify-center items-center rounded-full">
          <FiUser className="text-black text-2xl stroke-current stroke-2" />
        </div>
        <h3>GUEST</h3>
      </div>
      <div>
        <BsThreeDots className=" text-xl" />
      </div>
    </section>
  );
};

export default UserProfile;
