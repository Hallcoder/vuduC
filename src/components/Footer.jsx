import React from 'react';
import app from '../assets/images/a;;.png'
import play from '../assets/images/play.png'
import micro from '../assets/images/micro.png'
import linkedin from '../assets/images/linkedin.png'
import facebook from '../assets/images/facebook.png'
import twitter from '../assets/images/twitter.jpg'
function Footer() {
    return (  
        <div id='footer' className="flex bg-inherit  h-[70vh] flex-col">
            <div className="flex mt-8 mb-8 ml-4">
                <div>
                    <img src={app} alt="app access" className='h-12 m-2 rounded-md '  />
                </div>
                <div>
                    <img src={play} alt="app access" className='h-12 m-2 rounded-md object-contain' />
                </div>
                <div>
                    <img src={micro} alt="app access" className='h-12 m-2 rounded-md ' />
                </div>
            </div>
            <div className="flex ml-4">
                <div className='w-2/12 text-sm'>
                    <h1>Watch</h1>
                    <ul className=" p-2 list-none flex flex-col text-white ">
                        <li>Spotlight</li>
                        <li>Movies</li>
                        <li>TV</li>
                        <li>Free</li>
                    </ul>
                </div>
                <div className='w-2/12 text-sm'>
                    <h1>My Account</h1>
                    <ul className=" p-2 list-none flex flex-col text-white ">
                        <li>My Vudu</li>
                        <li>Account</li>
                        <li>Settings</li>
                        <li>Manage Devices</li>
                    </ul>
                </div>
                <div className='w-2/12 text-sm'>
                    <h1>Features</h1>
                    <ul className=" p-2 list-none flex flex-col text-white ">
                        <li>Lists</li>
                        <li>Family</li>
                        <li>Disc to Digital</li>
                        <li>Movies Anywhere</li>
                        <li>InstaWatch</li>
                        <li>Gift Cards</li>
                    </ul>
                </div>
                <div className='w-2/12 text-sm'>
                    <h1>Help</h1>
                    <ul className=" p-2 list-none flex flex-col text-white ">
                        <li>Lists</li>
                        <li>Family</li>
                        <li>InstaWatch</li>
                        <li>Disc to Digital</li>
                        <li>Movies Anywhere</li>
                        <li>InstaWatch</li>
                        <li>Disc to Digital</li>
                        <li>Gift Cards</li>
                    </ul>
                </div>

            </div>
            <div className='flex justify-end'>
            <img src={twitter} alt=""  className='h-8  rounded-full m-1' />
            <img src={linkedin} alt="" className='h-8  rounded-full m-1' />
            <img src={facebook} alt="" className='h-8  rounded-full m-1 mr-10' />
            </div>
            <div className='flex items-center justify-center'>
             <div className='flex w-7/12'>
                 <h3 className="border-r-2 m-1 p-1  border-gray-500 text-xs text-blue-500  text-center">Terms and Policies</h3>
                 <h3 className="border-r-2 m-1 p-1  border-gray-500 text-xs text-blue-500  text-center">Your Privacy Rights - Privacy Policy</h3>
                 <h3 className="border-r-2 m-1 p-1  border-gray-500 text-xs text-blue-500  text-center">AdChoices</h3>
                 <h3 className="border-r-2 m-1 p-1  border-gray-500 text-xs text-blue-500  text-center">Do Not Sell My Personal information</h3>
                 <h3 className="border-r-2 m-1 p-1  border-gray-500 text-xs text-blue-500  text-center">California Notice</h3>
                 <h3 className="border-r-2 m-1 p-1  border-gray-500 text-xs text-blue-500  text-center">Feedback</h3>
             </div>
             <h3 className="text-xs flex justify-end p-x-2 w-4/12 text-white">&copy;2022 Fandango</h3>
            </div>
        </div>
    );
}

export default Footer;