import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <BrowserRouter>
      <section className="h-screen flex">
        <div className="lg:w-72 h-full lg:flex-shrink-0">
          <Header />
        </div>
        <MainContent />
      </section>
    </BrowserRouter>
  );
};

export default App;
