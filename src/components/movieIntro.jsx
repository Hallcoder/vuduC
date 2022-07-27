import React from "react";
import Badge from "./common/Badge";
import Span from "./common/span";
import {MdAddCircleOutline} from 'react-icons/md';
import Rating from "./rating";
function MovieIntro({ movie }) {
  console.log(movie)
  const buttonClass = 'text-white ml-2 font-semibold flex items-center justify-center px-1 w-3/12 h-6 bg-inherit border-2 border-blue-600 rounded-md'
  const { image, fullTitle, genres,contentRating,runtimeStr, duration, imDbRating, trailer, plot } = movie;
  return (
    <div className="flex h-[60vh] mt-20 w-11/12 m-auto bg-[#041c2c]">
      <div className="flex h-full w-[50%] m-8">
        <div>
            <Badge />
            <img src={image} alt=""  className='h-56 min-w-[10em]'/>
        </div>
        <div className="w-9/12 m-4 flex flex-col p-4 justify-evenly h-3/6">
          <h2 className="text-white">{fullTitle}</h2>
          <h4 className="text-white text-sm">{genres ? genres.split(',').join('|') : 'Unknown'} | <Span text={contentRating}/> <Span text={runtimeStr}/></h4>
          <span className='text-white text-xs  flex '><Rating />{imDbRating}</span>
        <div className='w-10/12 flex justify-around mt-8'>
          <button className={buttonClass}>Trailer</button>
          <button className={buttonClass}><MdAddCircleOutline />List</button>
          <button className={buttonClass}>Redeem</button>
        </div>
        </div>
      </div>
      <div className="h-full w-6/12">
        <img src={image} className="h-full object-fill w-full" alt="" />
      </div>
    </div>
  );
}

export default MovieIntro;
