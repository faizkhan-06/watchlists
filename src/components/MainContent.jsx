import React from "react";
import WelcomeHeading from "./WelcomeHeading";
import MoviesSearch from "./ui/MoviesSearch";
import Pages from "../pages/pages";

const MainContent = () => {
  return (
    <main className="flex-1 overflow-y-auto space-y-8 py-10 lg:px-16 px-10 bg-white-opacity">
      <WelcomeHeading />
      <MoviesSearch />
      <Pages />
    </main>
  );
};

export default MainContent;
