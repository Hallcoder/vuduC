import React, { useEffect, useState } from 'react';
import {MdArrowForwardIos} from 'react-icons/md';
import I6 from '../assets/images/6th.jpg';
import I7 from '../assets/images/7th.jpg';
import I8 from '../assets/images/8th.png';
import I9 from '../assets/images/9th.jpg';
import I4 from '../assets/images/4th.png';
import I5 from '../assets/images/5th.png';
import vid1 from '../assets/videos/video.mp4'
import vid2 from '../assets/videos/video_2.mp4'
import {MdArrowBackIosNew} from 'react-icons/md';
import Dots from './dots';
import SlideShow from './Slideshow';
function TrendingSlideShow() {
let images = [I4,vid1,I5,vid2,I6,I7,I8,I9];
const [currentSlide,setCurrentSlide] = useState(images[0]);
const handleAction = (action)=>{
    let slides = [...images];
    let index;
    switch(action){
        case 'next':
         index = slides.indexOf(currentSlide);
         if(index + 1>(slides.length-1)) {
            setCurrentSlide(slides[0])
        }else{
             setCurrentSlide(slides[index+1]);
        }
        break;
        case 'previous':
        index = slides.indexOf(currentSlide);
         if(index - 1< 0) {
            setCurrentSlide(slides[slides.length-1])
         }else{
            setCurrentSlide(slides[index-1]);
         }
        break;
        default:
         setCurrentSlide(slides[index]);
    }
}
useEffect(()=>{
  let interval = setInterval(()=>{
 handleAction('next');
    },12000)
    return ()=>{
    clearInterval(interval);
    }
},[currentSlide])
return ( 
        <div className='slide m-auto border h-[30vh]  z-index relative'>
            <SlideShow images={images} currentSlide={currentSlide}/>
            <MdArrowForwardIos  onClick={() => handleAction('next')} className='absolute top-[45%] hover:flex peer-hover:flex left-[97%] hidden text-white bg-opacity-40 h-12 w-8  bg-black'/>
            <MdArrowBackIosNew  onClick={() => handleAction('previous')} className='absolute top-[45%] hover:flex peer-hover:flex hidden text-white bg-opacity-40 h-12 w-8 bg-black' />
            <Dots />
        </div>
     );
}

export default TrendingSlideShow;