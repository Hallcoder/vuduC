import React from 'react';
function Review({review}) {
    return ( 
        <div className="flex flex-col">
            <span>🍅</span><h1>{review.name}</h1>
            <h6>{review.location}</h6>
            <p>{review.content}</p>
        </div>
     );
}

export default Review;