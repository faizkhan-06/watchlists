import React from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <BrowserRouter>
      <section className="lg:h-screen lg:flex">
        <div className="lg:w-72 lg:h-full lg:flex-shrink-0">
          <Sidebar />
        </div>
        <MainContent />
      </section>
    </BrowserRouter>
  );
};

export default App;
