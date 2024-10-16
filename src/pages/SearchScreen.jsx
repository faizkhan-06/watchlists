import React from "react";
import { useParams } from "react-router-dom";
import useSearchMovies from "../hooks/useSearchMovies";
import MoviesGrid from "../components/ui/MoviesGrid";

const SearchScreen = () => {
  const { query } = useParams();

  const { loading, error, movies } = useSearchMovies({ query });

  if (loading) return <h3 className=" text-lg">Loading....</h3>;
  if (error) return <h3>{`Error Fetching Search Videos : ${error}`}</h3>;

  return (
    <section className=" space-y-10">
      <h2 className="text-3xl">{`Search Results for ${query}`}</h2>
      <MoviesGrid movies={movies} />
    </section>
  );
};

export default SearchScreen;
