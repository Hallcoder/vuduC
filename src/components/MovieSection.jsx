import React from 'react';
import Header from './common/Header';
import MovieBanner from './MovieBanner';
function MovieSection({title,movies,type}) {
    return ( 
    <div className="flex w-10/12 h-[40vh] m-auto">
      <Header title={title}/> 
      <div className='flex flex-row justify-around overflow-scroll'>
      {movies.map(movie => {
        return <MovieBanner key={Math.random()} movie={movie} type={type}/>
      })} 
      </div>
    </div> 
    );
}

export default MovieSection;