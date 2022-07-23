import React from 'react';
function MovieBanner({image,rating,age,name,duration,year}) {
    return ( 
        <div>
            <img src={image} alt="movie banner" />
        </div>
     );
}

export default MovieBanner;