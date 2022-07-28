import React from 'react';
function Reviews({reviews}) {
    return ( 
        <div className="h-[60vh] w-full">
            <hr />
            {reviews.map(review => {
                return <Review review={review} />
            })}
        </div>
     );
}

export default Reviews;