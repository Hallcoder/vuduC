import React from 'react';
import Review from './Review';
import Header from './common/Header';
function Reviews({reviews}) {
    return ( 
        <div className="">
            <Header title={"Reviews"}/>
            <div className="flex flex-wrap justify-center h-[60vh] w-11/12 m-auto  overflow-y-scroll">
                {reviews && reviews.map(review => {
                    return <Review review={review} />
                })}
            </div>
        </div>
     );
}

export default Reviews;