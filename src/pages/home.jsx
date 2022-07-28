import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import NavBar from '../components/common/NavBar';
import B1 from '../assets/images/banner1.jpg'
import B2 from '../assets/images/banner2.jpg'
import B3 from '../assets/images/banner3.jpg'
import B4 from '../assets/images/banner4.jpg'
import B5 from '../assets/images/banner5.jpg'
import { useSelector } from 'react-redux';
import MovieSection from '../components/MovieSection';
import TrendingSlideShow from '../components/TrendingSlideShow';
import Footer from '../components/Footer';
import {Popular,comingSoon,InTheaters, getBoxOfficeMovies} from '../utils/movieRequests';
import setLocalStorage from '../utils/setLocalStorage';
 function Home() {
    let condition = localStorage.getItem('popular') && localStorage.getItem('comingsoon') && localStorage.getItem('intheaters') && localStorage.getgetgetItem('popular').length === 0  && localStorage.getItem('intheaters').length === 0 && localStorage.getItem('comingsoon').length === 0 && localStorage.getItem('box').length === 0
    let moviesCategories = ['CM','POP','INTHE','BX']
    const [popularMovies,setPopularMovies] = useState([])
    const [InTheaterMovies,setInTheaterMovies] = useState([])
    const [ComingSoon,setComingSoon] = useState([])
    useEffect(()=>{
        if(condition){
            Popular().then(data => setPopularMovies(data.items));
            InTheaters().then(data => setInTheaterMovies(data.items));
            comingSoon().then(data => setComingSoon(data.items));
        }else{
            setPopularMovies(JSON.parse(localStorage.getItem('popular')))
            setInTheaterMovies(JSON.parse(localStorage.getItem('intheaters')))
            setComingSoon(JSON.parse(localStorage.getItem('comingsoon')))
        }
    },[])
    setLocalStorage(popularMovies,InTheaterMovies,ComingSoon);
    return (
        <div className="h-full bg-[#041c2c] w-screen min-h-fit">
        <div>
        <NavBar />
        </div>
        <div className='flex justify-around mt-6 flex-col'>
            <TrendingSlideShow />
            <MovieSection title={'$4.99 Summer Weekend Deals'} movies={InTheaterMovies} type={moviesCategories[2]}/>
            <hr />
            <Banner image={B1}/>
            <hr />
            <MovieSection title={'New releases'} movies={popularMovies} type={moviesCategories[1]}/>
            <hr />
            <Banner image={B2}/>
            <hr />
            <MovieSection title={'Top 200 Movies'} movies={ComingSoon} type={moviesCategories[0]} />
            <hr />
            <Banner image={B3} />
            <hr />
            <MovieSection title={'Deals of the Week'} movies={popularMovies} type={moviesCategories[1]}/>
            <hr />
            <Banner image={B4} />
            <hr />
            <MovieSection title={'In Theaters'} movies={InTheaterMovies} type={moviesCategories[2]}/>
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