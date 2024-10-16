import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const SmallScreenHeader = () => {
  return (
    <div className="flex flex-col items-center h-screen  w-16 lg:hidden">
      <h2 className="text-center font-bold font-archivo flex justify-center items-center text-lg text-black w-10 h-10 bg-coral-red rounded-full mt-5 shadow-lg">
        W
      </h2>

      <div className=" flex flex-col items-center justify-between h-full  ">
        <div className=" flex flex-col justify-center items-center h-full">
          <Link to={"/"}>
            <div className="flex items-center justify-center h-16 cursor-pointer">
              <IoHomeOutline size={24} />
            </div>
          </Link>
          <Link to={"/history"}>
            <div className="flex items-center justify-center h-16  cursor-pointer">
              <MdHistory size={24} />
            </div>
          </Link>
          <div className="flex items-center justify-center h-16 cursor-pointer">
            <div className=" flex justify-center items-center p-1 rounded-lg bg-coral-red cursor-pointer">
              <FaPlus className=" text-black" size={24} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center h-16 cursor-pointer">
          <FiUser size={24} />
        </div>
      </div>
    </div>
  );
};

export default SmallScreenHeader;
