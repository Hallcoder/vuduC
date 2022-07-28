import React from 'react';
function Header({title}) {
    return ( 
        <div className="flex w-11/12 ml-auto mr-auto justify-between">
         <div><h1 className="text-white">{title}</h1></div>
         <div><h3 className="text-[#486665]">View All</h3></div>
        </div>
     );
}

export default Header;