import React from 'react';
import sky from '../assets/images/skyscrapper.jpg'
function MovieBanner({image,rating,age,name,duration,year}) {
    return ( 
        <div className='h-full rounded-md m-1'>
            <span className='indent-4 bg-orange-400 rounded-sm w-full h-6 font-bold text-white text-center text-sm inline-block'>Sale</span>
            <img src={sky} alt="movie banner" className="h-56 min-w-[10em]"/>
        </div>
     );
}

export default MovieBanner;