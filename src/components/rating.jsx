import React from "react";
import { AiFillStar,AiOutlineStar } from "react-icons/ai";
function Rating() {
  return (
    <div className="flex max-w-[4em] max-h-[2em] text-[7em] text-orange-500">
      <AiFillStar className="text-lg" />
      <AiFillStar className="text-lg" />
      <AiFillStar className="text-lg" />
      <AiFillStar className="text-lg" />
      <AiOutlineStar className="text-lg" />
    </div>
  );
}

export default Rating;
