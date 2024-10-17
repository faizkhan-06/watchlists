import axios from "axios";
import React, { useEffect, useState } from "react";

const useSearchMovies = ({ query }) => {
  const apiKey = import.meta.env.VITE_TMDB_API;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      setLoading(true);
      setError(null); // Reset error state before new search
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&include_adult=false`
        );
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query, apiKey]);

  return {
    loading,
    error,
    movies,
  };
};

export default useSearchMovies;
