import React from 'react';
import {MdArrowForwardIos} from 'react-icons/md';
import {MdArrowBackIosNew} from 'react-icons/md';
import Dots from './dots';

function TrendingSlideShow() {
    return ( 
        <div className='slide'>
            <MdArrowForwardIos className='absolute top-[45%] left-[98%] text-white bg-opacity-40 h-12 w-8  bg-black'/>
            <MdArrowBackIosNew className='absolute top-[45%] text-white bg-opacity-40 h-12 w-8 bg-black' />
            <Dots />
        </div>
     );
}

export default TrendingSlideShow;