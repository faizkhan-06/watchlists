import React from "react";
import WelcomeHeading from "./WelcomeHeading";
import MoviesSearch from "./ui/MoviesSearch";
import PagesRoute from "../pages/PagesRoute";

const MainContent = () => {
  return (
    <main className="flex-1 overflow-y-auto space-y-8 py-10 lg:px-16 px-10 bg-white-opacity">
      <WelcomeHeading />
      <MoviesSearch />
      <PagesRoute />
    </main>
  );
};

export default MainContent;
