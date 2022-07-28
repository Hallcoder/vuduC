import React from "react";
import vid from '../assets/videos/video.mp4'
import { MdClose,MdAddTask } from "react-icons/md";
import {BiLike} from 'react-icons/bi'
function WatchTrailer({trailer,display}) {
    console.log(trailer);
  return (
    <div className="w-11/12 m-auto mb-20 h-full bg-black border-4 border-black fixed bg-opacity-90 z-[1]">
      <div className='text-white'>
        <MdClose  className='text-white text-4xl hover:cursor-pointer' onClick={()=> display('hide')}/>
      </div>
      <div className='w-full h-[70%]'>
         {trailer && trailer.videoUrl && <iframe src={`https://youtube.com/embed/${trailer.videoUrl.split('=')[1]}`} type='video/mp4' className='h-full w-full'/>}   
         {!trailer.videoUrl && <iframe src='https://youtube.com/embed/PyLKg4GdH44' className='h-full w-full'/> }
      </div>
      <div className='flex w-5/12'>
          <div className='flex min-w-fit items-center border border-blue-400 justify-center rounded-md m-1 hover:bg-opacity-80 hover:cursor-pointer bg-black w-4/12'>
            <MdAddTask className='text-4xl m-1 text-green-400'/><h2 className='text-white text-xl'>WatchList</h2>
          </div>
            <div className='flex w-min-fit items-center border border-blue-400 justify-center rounded-md hover:bg-opacity-80 m-1 hover:cursor-pointer bg-black w-4/12'>
                <BiLike className='text-4xl m-1 text-green-400'/><h2 className='text-white text-xl'>Like</h2>
            </div>
      </div>
    </div>
  );
}

export default WatchTrailer;
