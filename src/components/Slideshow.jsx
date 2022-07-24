import React, { useState } from 'react';
function SlideShow({images,currentSlide}) {
    return (  
        <div className="h-[30vh]">
            <img src={currentSlide} alt="well it's it" className="Transition" />
        </div>
    );
}

export default SlideShow;