import React from "react";
import PopularMovies from "../components/PopularMovies";

const HomeScreen = () => {
  return (
    <section>
      <PopularMovies />
    </section>
  );
};

export default React.memo(HomeScreen);
