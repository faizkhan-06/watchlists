import React from "react";
import { NavLink, Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import Logo from "./ui/Logo";
import SmallScreenHeader from "./ui/SmallScreenHeader";
import UserProfile from "./UserProfile";
import Nav from "./Nav";
import SmallInput from "./ui/SmallInput";

const Header = () => {
  return (
    <>
      <SmallScreenHeader />
      <aside className=" hidden fixed lg:flex flex-col justify-between px-5 py-3  h-full w-72">
        <section>
          <header className="space-y-5 flex flex-col mb-3">
            <Link to={"/"}>
              <Logo />
            </Link>
            <SmallInput />
            <Nav />
            <button className=" flex justify-center items-center gap-2 bg-coral-red py-2 text-black font-semibold rounded-md">
              <FaPlus />
              Create watchlist
            </button>
            <hr className="border-light-silver" />
          </header>
          <section className=" px-2">
            <h3 className=" text-xl text-dusty-gray">My Lists</h3>
          </section>
        </section>
        <UserProfile />
      </aside>
    </>
  );
};

export default React.memo(Header);
