import React from 'react';
import Header from './common/Header';
function MovieSection({title,movies}) {
    return ( 
    <div className="w-10/12">
      <Header title={title} movies={movies} />  
    </div> 
    );
}

export default MovieSection;