import React from 'react';
function Span({text}) {
    return ( 
        <span className='bg-gray-400 rounded-md h-4 min-w-[4em] text-center text-white font-semibold p-x-1 inline-block text-xs'>{text}</span>
     );
}

export default Span;