import React from "react";
import { IoIosSearch } from "react-icons/io";

const SmallInput = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="bg-black border placeholder:text-light-silver border-light-silver px-2 py-1 rounded-md pl-11 w-full"
      />
      <IoIosSearch className="absolute text-2xl left-2 top-1/2 transform -translate-y-1/2 text-light-silver" />
    </div>
  );
};

export default SmallInput;
