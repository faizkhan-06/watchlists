// import React from "react";
// import { RxBookmarkFilled, RxBookmark } from "react-icons/rx";
// import { FaPlus } from "react-icons/fa";

// const BookMarkLogo = ({ size, color, plusSize }) => {
//   return (
//     <span className="relative inline-flex items-center justify-center w-10 h-10">
//       <RxBookmarkFilled className={`absolute ${color} ${size}`} />
//       <RxBookmark className={`absolute text-gainsboro text-4xl ${size}`} />
//       <FaPlus className="absolute text-white" size={plusSize} />
//     </span>
//   );
// };

// export default BookMarkLogo;

import React from "react";
import { motion } from "framer-motion";
import { RxBookmarkFilled, RxBookmark } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";

const BookMarkLogo = ({ size, color, plusSize }) => {
  return (
    <motion.span
      className="relative inline-flex items-center justify-center w-10 h-10"
      whileHover={{ scaleY: 1.2, originY: 0 }} // Stretch down only
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <RxBookmarkFilled className={`absolute ${color} ${size}`} />
      <RxBookmark className={`absolute text-gainsboro text-4xl ${size}`} />
      <FaPlus className="absolute text-white" size={plusSize} />
    </motion.span>
  );
};

export default BookMarkLogo;
