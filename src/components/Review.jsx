import React from 'react';
function Review({review}) {
    return ( 
        <div className="flex flex-col h-[30vh] shadow-md shadow-white overflow-y-scroll w-3/12 m-2 border rounded-md">
            <span>🍅</span><h1 className="text-sm text-red-400 font-extrabold">{review.username}</h1>
            <p className="text-sm p-1 text-white">{review.content}</p>
            <div className='italic'>
              <p className="text-xs text-white float-right">{review.helpful}</p>
            </div>
        </div>
     );
}

export default Review;