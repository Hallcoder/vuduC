import React from 'react';
import {BsSearch} from 'react-icons/bs'
import {NavLink} from 'react-router-dom'
import Logo from '../../assets/logo.png'
function NavBar() {
    return ( 
        <div className="flex h-[8vh] justify-around bg-[#1e5e94] text-white font-semibold  w-full fixed top-0">
            <div name='logoAndLinks' className='flex ml-2 w-[45%] items-center'>
            <ul className='list-none justify-around w-[25vw] flex items-center'>
                <li><NavLink to='/'><img src={Logo} alt="Go to Homepage" className="h-[80%] w-[4vw] rounded-sm bg-[#1e5e94]" /></NavLink></li>
                <li>Movies</li>
                <li>TV</li>
                <li>Free</li>
                <li>My Vudu</li>
            </ul>
            </div>
           <div name='searchAndOtherlinks'  className='flex justify-end w-[45%] '>
            <ul className='list-none  justify-around w-[25vw] flex items-center'>
                <li>Gift Cards</li>
                <li>Redeeem</li>
                <li>Sign In</li>
                <li><BsSearch /></li>
            </ul>
           </div>
        </div>
     );
}

export default NavBar;