import React, { useEffect, useState } from "react";
import Badge from "./common/Badge";
import Span from "./common/span";
import { MdAddCircleOutline } from "react-icons/md";
import Rating from "./rating";
import WatchTrailer from "./WatchTrailer";
import { getTrailer } from "../utils/movieRequests";
import { setMovieTrailer } from "../utils/setInfoMovie";
function MovieIntro({ movie }) {
  const [trailer, setTrailer] = useState({});
  useEffect(() => {
    if(!localStorage.getItem(`trailer-${movie.id}`)){
      getTrailer(movie.id)
       .then((res) => res)
       .then((data) => {
         console.log(data);
         setTrailer(data)
         setMovieTrailer(data,movie.id);
       });
    }else{
      setTrailer(JSON.parse(localStorage.getItem(`trailer-${movie.id}`)));
    }
  }, []);
  const [styles, setStyles] = useState({
    display: "none",
  });
  const handleDisplay = (action) => {
    console.log(action);
    if (action === "show") {
      setStyles({ display: "flex" });
    }
    if (action === "hide") {
      setStyles({ display: "none" });
    }
    return;
  };
  const buttonClass =
    "text-white ml-2 font-semibold flex items-center justify-center px-1 w-3/12 h-6 bg-inherit border-2 border-blue-600 rounded-md";
  const {
    image,
    fullTitle,
    genres,
    contentRating,
    runtimeStr,
    duration,
    imDbRating,
    plot,
  } = movie;
  return (
    <div className="flex h-[60vh] mt-20 w-11/12 m-auto bg-[#041c2c]">
      <div className="flex h-full w-[50%] m-8">
        <div>
          <Badge />
          <img src={image} alt="" className="h-56 min-w-[10em]" />
        </div>
        <div className="w-9/12 m-4 flex flex-col p-2 justify-evenly h-3/6">
          <h2 className="text-white m-1">{fullTitle}</h2>
          <h4 className="text-white text-sm m-1 flex items-center">
            {genres ? genres.split(",").join("|") : "Unknown"} |{" "}
            <Span text={contentRating} /> <Span text={runtimeStr} />
          </h4>
          <span className="text-white text-xs  flex ">
            <Rating />
            {imDbRating}
          </span>
          <div className="w-10/12 flex justify-around mt-4">
            <button
              className={buttonClass}
              onClick={() => handleDisplay("show")}
            >
              Trailer
            </button>
            <button className={buttonClass}>
              <MdAddCircleOutline />
              List
            </button>
            <button className={buttonClass}>Redeem</button>
          </div>
          <p className="text-white m-1">
            {plot ? plot : "Plot not available now"}
          </p>
          <div>
            <button className="text-white bg-[#2d29ff] w-[10em] h-[3em] m-2 rounded-md font-semibold ">
              Rent ${imDbRating ? imDbRating : 2}
            </button>
            <button className="text-white bg-[#2d29ff] w-[10em] h-[3em] m-2 rounded-md font-semibold ">
              Buy ${+imDbRating ?imDbRating + 2: 4.5}
            </button>
          </div>
        </div>
      </div>
      <div className="h-full w-6/12">
        <img src={image} className="h-full object-contain w-full" alt="" />
      </div>
      <div
        style={styles}
        className="fixed h-[80vh]  mb-10 bg-opacity-10 w-full"
      >
        <WatchTrailer display={handleDisplay} trailer={trailer}/>
      </div>
    </div>
  );
}

export default MovieIntro;
