import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="space-y-2 w-full">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `flex items-center gap-3 w-full p-2 rounded-md ${
                isActive ? "bg-gray12" : ""
              }`
            }
          >
            <IoHomeOutline className="text-xl" />
            <h3 className="">Home</h3>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/history"}
            className={({ isActive }) =>
              `flex items-center gap-3 w-full p-2 rounded-md ${
                isActive ? "bg-gray12" : ""
              }`
            }
          >
            <MdHistory className="text-2xl" />
            <h3 className="">History</h3>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
