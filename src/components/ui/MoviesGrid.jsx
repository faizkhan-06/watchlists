import React from "react";
import Card from "./Card";
import { calculateRatings } from "../../utils/calculateRatings";

const MoviesGrid = ({ movies }) => {
  return (
    <div>
      {movies.length === 0 ? (
        <p className="text-center text-lg text-gray-500">No results found</p>
      ) : (
        <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-10">
          {movies.map((movie) => {
            const ratings = calculateRatings(movie.vote_average);
            return <Card key={movie.id} movie={movie} ratings={ratings} />;
          })}
        </div>
      )}
    </div>
  );
};

export default React.memo(MoviesGrid);
