import React from 'react';
import {useSelector} from 'react-redux';
function Movie() {
    const currentMovie  = useSelector(state => state);
    console.log(useSelector(state => state))
    return ( 
        <div></div>
     );
}

export default Movie;