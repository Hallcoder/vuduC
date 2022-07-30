import React from "react";
import { NavLink } from "react-router-dom";
function DropDown() {
  return (
    <div className="absolute w-4/12">
      <ul className="list-none  justify-around w-[25vw] flex flex-col items-center">
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
      </ul>
    </div>
  );
}

export default DropDown;
