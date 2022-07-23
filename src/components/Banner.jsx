import React from 'react';
function Banner({image}) {
    return ( 
        <div className='m-auto mt-4 mb-4'>
            <img src={image} alt="banner Ad" />    
        </div>
     );
}

export default Banner;