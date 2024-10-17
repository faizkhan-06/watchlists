import React from "react";
import BookMarkLogo from "../components/ui/BookMarkLogo";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const WelcomeHeading = () => {
  return (
    <div className="bg-gray-opacity w-full p-4 md:p-5 border rounded-md border-redd">
      <h1 className="text-2xl md:text-4xl mb-3 md:mb-5">
        Welcome to <span className="text-coral-red">Watchlists</span>
      </h1>
      <div className="text-lg md:text-xl leading-7 md:leading-9">
        Browse movies, add them to watchlists, and share them with friends.
        <br />
        <span className="flex flex-col sm:flex-row items-start flex-wrap">
          Just click the{" "}
          <BookMarkLogo
            color={"text-black"}
            size={"text-3xl md:text-4xl"}
            plusSize={8} // Adjusted for smaller screens
            className="mx-1"
          />{" "}
          to add a movie, the poster to see more details, or
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            className="text-2xl md:text-3xl mx-2"
          >
            <FaCheck />
          </motion.div>{" "}
          to mark the movie as watched.
        </span>
      </div>
    </div>
  );
};

export default React.memo(WelcomeHeading);
