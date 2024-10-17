import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { RiMenu3Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SmallScreenHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      document.body.classList.remove("overflow-hidden");
    } else {
      document.body.classList.add("overflow-hidden");
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="lg:hidden grid grid-cols-3 items-center px-4 py-2">
        <div className="flex items-center gap-3">
          <RiMenu3Line
            className="text-3xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        <div className="col-span-1">
          <h2 className="text-3xl font-extrabold text-coral-red">Watchlists</h2>
        </div>

        <div className="flex justify-end">
          <div className="w-8 h-8 bg-gainsboro flex justify-center items-center rounded-full">
            <FiUser className="text-black text-2xl" />
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 gap-6 bg-black flex flex-col items-center justify-center text-white z-50"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <button
            className="absolute top-4 right-4 text-3xl"
            onClick={toggleMenu}
          >
            &times;
          </button>
          <nav className="flex flex-col items-center gap-6">
            <Link
              to="/"
              className="text-2xl hover:underline"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/history"
              className="text-2xl hover:underline"
              onClick={toggleMenu}
            >
              History
            </Link>
          </nav>
          <button className="py-2 px-4 flex justify-center items-center gap-2 bg-coral-red text-black font-semibold rounded-md">
            <FaPlus />
            Create watchlist
          </button>
        </motion.div>
      )}
    </>
  );
};

export default SmallScreenHeader;
