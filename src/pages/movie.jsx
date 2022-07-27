import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavBar from "../components/common/NavBar";
import MovieIntro from "../components/movieIntro";
import findById from "../utils/findMovieById";
function Movie() {
    //test work works
//   const currentMovie = useCallback(useSelector((state) => state));
//   console.log(currentMovie);
const params = useParams();
console.log(params);
const movies = () => {
    if(params.type === 'INTHE') return localStorage.getItem('intheaters');
    if(params.type === 'POP') return localStorage.getItem('popular');
    if(params.type === 'CM') return localStorage.getItem('comingsoon')
}
const currentMovie = findById(movies(),params.id)
  return <div className="bg-[#041c2c] min-h-screen flex flex-col">
    <NavBar />
    <div>
        <MovieIntro movie={currentMovie} /> 
        <hr />   
    </div>
  </div>;
}

export default Movie;
