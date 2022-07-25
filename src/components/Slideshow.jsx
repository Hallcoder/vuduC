import React, { useState } from 'react';
function SlideShow({currentSlide}) {
    return (  
        <div className="h-[30vh]">
          {currentSlide.toString().match(/mp4/gi) === null ? <img src={ currentSlide} alt="well it's it" className="Transition" /> : <video muted autoPlay><source src={currentSlide} /></video>}
        </div>
    );
}

export default SlideShow;