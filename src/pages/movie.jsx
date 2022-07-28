import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/common/NavBar";
import MovieIntro from "../components/movieIntro";
import findById from "../utils/findMovieById";
import CastsAndCrews from "../components/CastsAndCrews";
import { getFullCast } from "../utils/movieRequests";
import { setfullCast } from "../utils/setInfoMovie";
function Movie() {
  //test work works
  //   const currentMovie = useCallback(useSelector((state) => state));
  //   console.log(currentMovie);
  const [cast, setCast] = useState([]);
  const params = useParams();
  const movies = () => {
    if (params.type === "INTHE") return localStorage.getItem("intheaters");
    if (params.type === "POP") return localStorage.getItem("popular");
    if (params.type === "CM") return localStorage.getItem("comingsoon");
  };
  const currentMovie = findById(movies(), params.id);
  useEffect(() => {
    if (
      localStorage.getItem("intheaters") ||
      JSON.parse(localStorage.getItem(`cast-${currentMovie.id}`))
    ) {
      getFullCast(currentMovie.id)
        .then((res) => res)
        .then((data) => {
          console.log(data);
          setCast(data.actors)
          console.log(cast)
          setfullCast(data.actors,currentMovie.id)
        });
    } else {
      setCast(JSON.parse(localStorage.getItem(`cast-${currentMovie.id}`)));
    }
  }, []);
  return (
    <div className="bg-[#041c2c] min-h-screen flex flex-col">
      <NavBar />
      <div>
        <MovieIntro movie={currentMovie} />
        <hr />
        <CastsAndCrews
          directorList={currentMovie.directorList}
          actors={cast}
        />
      </div>
    </div>
  );
}

export default Movie;
