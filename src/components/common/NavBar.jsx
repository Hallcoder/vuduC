import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import DropDown from "../Dropdown";
function NavBar() {
    const [styles,setStyles] = useState({display:'none'});
    const handleDropdownMenu = () => {
       if(styles.display ==='none'){
           setStyles({display:'block'})
       }else{
        setStyles({display:'none'})
       }
    }
  return (
    <div className="flex h-[8vh] back justify-around  bg-[#1e5e94] text-white font-semibold  w-screen fixed top-0">
      <div className="resUl flex ml-2 w-full justify-start h-full">
        <ul className='flex items-center w-[45%] h-full'>
          <li id="logo">
            <NavLink to="/">
              <img
                src={Logo}
                alt="Go to Homepage"
                className="h-[100%] w-[12vw] rounded-sm bg-[#1e5e94]"
              />
            </NavLink>
          </li>
        </ul>
        <div className='flex items-center w-[50%] justify-end h-full'>
          <MdMenu onClick={handleDropdownMenu} className='text-5xl'/>
        <input type="text" className='w-11/12 rounded-md bg-inherit border-2 h-3/6 m-1 text-[0.5em] text-white' placeholder='Search anything...'/>
          <li className='list-none m-1'>
          <BsSearch className='text-3xl'/>
        </li>
          <div style={styles}>
              <DropDown />
          </div>
        </div>
      </div>
      <div
        name=" logoAndLinks"
        className="navRes flex ml-2 w-[45%] items-center"
      >
        <ul className="list-none justify-around w-[25vw] flex items-center">
          <li id="logo">
            <NavLink to="/">
              <img
                src={Logo}
                alt="Go to Homepage"
                className="h-[80%] w-[4vw] rounded-sm bg-[#1e5e94]"
              />
            </NavLink>
          </li>
          <li>Movies</li>
          <li>TV</li>
          <li>Free</li>
          <li>My Vudu</li>
        </ul>
      </div>
      <div
        name="searchAndOtherlinks"
        className="navRes flex justify-end w-[45%] "
      >
        <ul className="list-none  justify-around w-[25vw] flex items-center">
          <li>Gift Cards</li>
          <li>Redeeem</li>
          <li className="relative">
            <div className="peer">Sign In</div>
            <div className="ulDisplay peer hover:flex  peer-hover:flex items-center h-[12vh] hidden absolute  bg-[#041c2c] right-2 m-auto text-center w-[10em]">
              <ul className="list-none w-full">
                <NavLink to="/login">
                  <li className="h-[6vh] inline-block hover:bg-opacity-10 bg-black  w-full">
                    Sign In
                  </li>
                </NavLink>
                <NavLink to="/register">
                  <li className="hover:bg-opacity-10 bg-black h-[6vh]">
                    Create Account
                  </li>
                </NavLink>
              </ul>
            </div>
          </li>
          <li>
            <BsSearch />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
