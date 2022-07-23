import React from 'react';
import app from '../assets/images/a;;.png'
import play from '../assets/images/play.png'
import micro from '../assets/images/micro.png'
import linkedin from '../assets/images/linkedin.png'
import facebook from '../assets/images/facebook.png'
import twitter from '../assets/images/twitter.jpg'
function Footer() {
    return (  
        <div id='footer' className="flex h-[70vh] flex-col">
            <div className="flex mt-8 mb-8 ml-4">
                <div>
                    <img src={app} alt="app access" className='h-12 '  />
                </div>
                <div>
                    <img src={play} alt="app access" className='h-12 object-contain' />
                </div>
                <div>
                    <img src={micro} alt="app access" className='h-12 ' />
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
            <img src={twitter} alt=""  className='h-8 rounded-full m-1' />
            <img src={linkedin} alt="" className='h-8 rounded-full m-1' />
            <img src={facebook} alt="" className='h-8 rounded-full m-1 mr-10' />
            </div>
        </div>
    );
}

export default Footer;