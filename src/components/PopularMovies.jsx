import React, { useEffect, useState } from "react";
import MoviesGrid from "./ui/MoviesGrid";
import useMovies from "../hooks/useMovies";

const PopularMovies = () => {
  const { loading, error, movies } = useMovies();

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error fetching movies: {error}</p>;

  return (
    <section className=" space-y-10">
      <h2 className="text-3xl">Popular movies right now</h2>
      <MoviesGrid movies={movies} />
    </section>
  );
};

export default PopularMovies;
