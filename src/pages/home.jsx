import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import NavBar from '../components/common/NavBar';
import B1 from '../assets/images/banner1.jpg'
import B2 from '../assets/images/banner2.jpg'
import B3 from '../assets/images/banner3.jpg'
import B4 from '../assets/images/banner4.jpg'
import B5 from '../assets/images/banner5.jpg'
import MovieSection from '../components/MovieSection';
import TrendingSlideShow from '../components/TrendingSlideShow';
import Footer from '../components/Footer';
import Popular from '../utils/getPopularMovies';
 function Home() {
    const [popularMovies,setPopularMovies] = useState([])
    useEffect(()=>{
        Popular().then(data => setPopularMovies(data.items));
    },[])
    console.log(popularMovies)  
    const movies = [
        {id:1},
        {id:2},
        {id:3},
        {id:4},
        {id:5},
        {id:6},
        {id:7},
        {id:8},
        {id:9},
        {id:10},
        {id:10},
        {id:10},
        {id:10},
    ]
    return (
        <div className="h-full bg-[#041c2c] w-screen min-h-fit">
        <div>
        <NavBar />
        </div>
        <div className='flex justify-around mt-6 flex-col'>
            <TrendingSlideShow />
            <MovieSection title={'$4.99 Summer Weekend Deals'} movies={movies}/>
            <hr />
            <Banner image={B1}/>
            <hr />
            <MovieSection title={'New releases'} movies={movies} />
            <hr />
            <Banner image={B2}/>
            <hr />
            <MovieSection title={'Top 200 Movies'} movies={movies} />
            <hr />
            <Banner image={B3} />
            <hr />
            <MovieSection title={'Deals of the Week'} movies={movies} />
            <hr />
            <Banner image={B4} />
            <hr />
            <MovieSection title={'In Theaters'} movies={movies} />
            <hr />
            <Banner image={B5} />
            <hr />
        </div> 
        <div>
            <Footer />
        </div>
        </div>
      );
}

export default Home;