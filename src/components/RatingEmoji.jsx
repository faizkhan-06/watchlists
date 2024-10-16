import React from "react";
import cool from "../assets/emoji/cool.svg";
import smile from "../assets/emoji/smile.svg";
import confused from "../assets/emoji/confused.svg";

const RatingEmoji = ({ ratings }) => {
  if (ratings >= 80) {
    return <img src={cool} alt="Cool" className=" w-5 h-5" />;
  } else if (ratings >= 30) {
    return <img src={smile} alt="Smile" className=" w-[23px] h-[23px]" />;
  } else {
    return <img src={confused} alt="Confused" className=" w-5 h-5" />;
  }
};

export default RatingEmoji;
