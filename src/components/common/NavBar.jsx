import React from 'react';
import {BsSearch} from 'react-icons/bs'
import {NavLink} from 'react-router-dom'
import Logo from '../../assets/logo.png'
function NavBar() {
    return ( 
        <div className="flex h-[8vh] back justify-around  bg-[#1e5e94] text-white font-semibold  w-full fixed top-0">
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
                <li className='relative'>
                    <div className="peer">
                        Sign In
                    </div>
                    <div className="ulDisplay peer hover:flex  peer-hover:flex items-center h-[12vh] hidden absolute  bg-[#041c2c] right-2 m-auto text-center w-[10em]">
                           <ul className="list-none w-full">
                            <NavLink to='/login'>
                                <li className="h-[6vh] inline-block hover:bg-opacity-10 bg-black  w-full">Sign In</li>
                            </NavLink>
                            <NavLink to='/register'>
                                <li className="hover:bg-opacity-10 bg-black h-[6vh]">Create Account</li>
                            </NavLink>
                           </ul>
                    </div>
                </li>
                <li><BsSearch /></li>
            </ul>
           </div>
        </div>
     );
}

export default NavBar;