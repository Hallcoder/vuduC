import React from 'react';
function Header({title}) {
    return ( 
        <div className="flex w-full justify-between">
         <div><h1>{title}</h1></div>
         <div><h3 className="text-[#486665]">View All</h3></div>
        </div>
     );
}

export default Header;