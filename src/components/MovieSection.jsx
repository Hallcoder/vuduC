import React from 'react';
import Header from './common/Header';
import MovieBanner from './MovieBanner';
function MovieSection({title,movies}) {
    return ( 
    <div className="w-10/12 h-[40vh] m-auto">
      <Header title={title} movies={movies} /> 
      <div className='flex flex-row justify-around overflow-scroll'>
      {movies.map(movie => {
        return <MovieBanner />
      })} 
      </div>
    </div> 
    );
}

export default MovieSection;