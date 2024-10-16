// import React from "react";
// import RatingEmoji from "../RatingEmoji";
// import { calculateRatings } from "../../utils/calculateRatings";
// import BookMarkLogo from "./BookMarkLogo";
// import { RxBookmarkFilled, RxBookmark } from "react-icons/rx";
// import { FaPlus } from "react-icons/fa";

// const Card = ({ movie }) => {
//   return (
//     <section className=" bg-gray12 rounded-md">
//       <div className="relative">
//         <img
//           src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//           alt=""
//           className=" w-full h-56 rounded-t-md"
//         />
//         <div className=" absolute top-[-3px] left-[-6px] ">
//           <BookMarkLogo
//             color={"text-white-blur"}
//             size={"text-5xl"}
//             plusSize={17}
//           />
//         </div>
//       </div>
//       <div className=" px-3 mt-2 mb-5">
//         <div className=" flex items-center justify-end gap-1">
//           <RatingEmoji />
//           <h3>
//             {calculateRatings(movie.vote_average)}
//             <sup className="pl-[1px]"> / 100</sup>
//           </h3>
//         </div>
//         <h2>{movie.original_title}</h2>
//         <h3 className="font-light">({movie.release_date.substring(0, 4)})</h3>
//       </div>
//     </section>
//   );
// };

// export default Card;

// import React from "react";
// import RatingEmoji from "../RatingEmoji";
// import { calculateRatings } from "../../utils/calculateRatings";
// import BookMarkLogo from "./BookMarkLogo";
// import { RxBookmarkFilled, RxBookmark } from "react-icons/rx";
// import { FaPlus } from "react-icons/fa";

// const Card = ({ movie, ratings }) => {
//   return (
//     <section className="bg-gray12 rounded-md max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
//       <div className="relative">
//         <img
//           src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//           alt=""
//           className="w-full h-56 md:h-64 lg:h-72 rounded-t-md object-cover"
//         />
//         <div className="absolute top-[-3px] left-[-6px]">
//           <BookMarkLogo color="text-white-blur" size="text-5xl" plusSize={17} />
//         </div>
//       </div>
//       <div className="px-3 mt-2 mb-5">
//         <div className="flex items-center justify-end gap-1 text-sm md:text-base">
//           <RatingEmoji ratings={ratings} />
//           <h3>
//             {/* {calculateRatings(movie.vote_average)} */}
//             {ratings}
//             <sup className="pl-[1px]"> / 100</sup>
//           </h3>
//         </div>
//         <h2 className="text-lg md:text-xl font-semibold">
//           {movie.original_title}
//         </h2>
//         <h3 className="font-light text-sm md:text-base">
//           ({movie.release_date.substring(0, 4)})
//         </h3>
//       </div>
//     </section>
//   );
// };

// export default Card;
import React from "react";
import RatingEmoji from "../RatingEmoji";
import BookMarkLogo from "./BookMarkLogo";
import { motion } from "framer-motion";

const Card = ({ movie, ratings }) => {
  return (
    <motion.section
      className="bg-gray12 rounded-md max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto cursor-pointer"
      whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "https://placehold.co/500x750?text=No+Image+Available"
          }
          alt={movie.original_title || "Movie Poster"}
          className="w-full max-w-xs h-auto rounded-t-md object-cover md:max-w-sm lg:max-w-md xl:max-w-lg"
        />
        <div className="absolute top-[-3px] left-[-6px]">
          <BookMarkLogo color="text-white-blur" size="text-5xl" plusSize={17} />
        </div>
      </div>
      <div className="px-3 mt-2 mb-5">
        <div className="flex items-center justify-end gap-1 text-sm md:text-base">
          <RatingEmoji ratings={ratings} />
          <h3>
            {ratings}
            <sup className="pl-[1px]"> / 100</sup>
          </h3>
        </div>
        <h2 className="text-lg md:text-xl font-semibold">
          {movie.original_title || "Unknown Title"}
        </h2>
        <h3 className="font-light text-sm md:text-base">
          ({movie.release_date ? movie.release_date.substring(0, 4) : "N/A"})
        </h3>
      </div>
    </motion.section>
  );
};

export default Card;
