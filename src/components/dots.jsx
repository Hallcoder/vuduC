import React from 'react';
import Dot from './Dot';
function Dots() {
    return ( 
        <div className='flex absolute justify-around w-20 left-[45%] bottom-2'>
            <Dot  />
            <Dot />
            <Dot />
            <Dot />
            <Dot />
            <Dot />
        </div>
     );
}

export default Dots;