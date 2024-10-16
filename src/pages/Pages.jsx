import React, { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
const HomeScreen = lazy(() => import("./HomeScreen"));
const SearchScreen = lazy(() => import("./SearchScreen"));

const Pages = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/search/:query" element={<SearchScreen />} />
      </Routes>
    </Suspense>
  );
};

export default Pages;
