import React from "react";
function CastOrCrew({image,name,role}) {
  return (
    <div className="flex flex-col m-1">
      <img src={image} alt={name} className='h-[25vh] min-w-[10em]' />
      <h2 className="text-white text-sm">{name}</h2>
      <h4 className="text-white text-xs">{role}</h4>
    </div>
  );
}

export default CastOrCrew;
