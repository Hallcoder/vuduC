import React from 'react';
import * as actions from '../redux/actions'
import {BsCheck2Circle} from 'react-icons/bs'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import Rating from './rating';
import sky from '../assets/images/skyscrapper.jpg'
import Badge from './common/Badge';
function MovieBanner({movie,type}) {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const handleShowMovie = () => {
      //this works!
      //  dispatch({
      //    type: actions.set_currentMovie,
      //    payload:{
      //       movie,
      //    }
      //  })
       
       navigate(`/movie/${movie.id}/${type}`);
   }
    return ( 
        <div className='h-full rounded-md m-1 relative'>
            <div className='peer'>
               <Badge />
                <img src={type === 'CM' ? sky:movie.image} alt="movie banner" className="h-56 min-w-[10em]"/>
            </div>
            <div onClick={handleShowMovie} className='flex-col bg-black bg-opacity-80 h-[28vh] hidden hover:flex relative bottom-[14em] hoverable top-70 peer-hover:flex'>
             <h1 className='font-extrabold ml-1 text-sm'>{movie.fullTitle}</h1>
             <div className='flex items-center ml-1'>
             <p className='text-white text-sm'>{movie.year}</p>
             <span className='bg-gray-400 rounded-md h-4 min-w-[4em] text-center text-white font-semibold p-x-1 inline-block text-xs'>PG-13</span>
             <span className='bg-gray-400 ml-1 rounded-md h-4 min-w-[4em] text-center text-white font-semibold p-x-1 inline-block text-xs'>91min</span>
             </div>
             <div className='flex text-sm'>
                <BsCheck2Circle  className='text-lg text-green-500'/> <span className='text-white '>Age 16+</span>
             </div>
             <div>
                <Rating />
             </div>
             <div className='flex text-sm text-white'>
                <p>Rent/buy</p>
                <p>&nbsp;$3.99</p>
             </div>
            </div>
        </div>
     );
}

export default MovieBanner;