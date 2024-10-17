import axios from "axios";
import React, { useEffect, useState } from "react";

const useMovies = () => {
  const apiKey = import.meta.env.VITE_TMDB_API;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&include_adult=false`
        );
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [apiKey]);

  return {
    loading,
    error,
    movies,
  };
};

export default useMovies;
