import React from 'react';
import NavBar from '../components/common/NavBar';
import TrendingSlideShow from '../components/TrendingSlideShow';
function Home() {
    return (
        <div className="h-full bg-[#041c2c] w-screen min-h-fit">
        <div className="">
        <NavBar />
        </div>
        <div className='flex justify-around'>
            <TrendingSlideShow />
        </div>
        </div>
      );
}

export default Home;