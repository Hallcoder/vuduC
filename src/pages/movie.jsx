import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/common/NavBar";
import MovieIntro from "../components/movieIntro";
import findById from "../utils/findMovieById";
import CastsAndCrews from "../components/CastsAndCrews";
import { getFullCast, getReviews } from "../utils/movieRequests";
import { setfullCast, setLocalReviews } from "../utils/setInfoMovie";
import Reviews from "./../components/Reviews";
import Header from "../components/common/Header";
function Movie() {
  //test work works
  //   const currentMovie = useCallback(useSelector((state) => state));
  //   console.log(currentMovie);
  const [reviews, setReviews] = useState([]);
  const [cast, setCast] = useState([]);
  const params = useParams();
  const movies = () => {
    if (params.type === "INTHE") return localStorage.getItem("intheaters");
    if (params.type === "POP") return localStorage.getItem("popular");
    if (params.type === "CM") return localStorage.getItem("comingsoon");
  };
  const currentMovie = findById(movies(), params.id);
  useEffect(() => {
    if (!localStorage.getItem(`cast-${currentMovie.id}`)) {
      getFullCast(currentMovie.id)
        .then((res) => res)
        .then((data) => {
          console.log(data);
          setCast(data.actors);
          console.log(cast);
          setfullCast(data.actors, currentMovie.id);
        });
    } else {
      setCast(JSON.parse(localStorage.getItem(`cast-${currentMovie.id}`)));
    }
    if (!localStorage.getItem(`reviews-${currentMovie.id}`)) {
      getReviews(currentMovie.id)
        .then((res) => res)
        .then((data) => {
          setReviews(data.items)
          setLocalReviews(data.items, currentMovie.id)
        });
    }
    else{
      setReviews(JSON.parse(localStorage.getItem(`reviews-${currentMovie.id}`)));
    }
  }, []);
  return (
    <div className="bg-[#041c2c] min-h-screen flex flex-col">
      <NavBar />
      <div>
        <MovieIntro movie={currentMovie} />
        <CastsAndCrews
          directorList={currentMovie.directorList}
          starList={currentMovie.starList}
          actors={cast}
        />
      </div>
      <div>
        <Reviews reviews={reviews} />
      </div>
    </div>
  );
}

export default Movie;
