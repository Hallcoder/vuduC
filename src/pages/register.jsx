import React from 'react';
import Footer from '../components/Footer';
import NavBar from './../components/common/NavBar';
function Register() {
    return ( 
        <div className="bg-[#041c2c]  flex flex-col  h-screen">
            <NavBar />
            <div className="bg-white h-[90vh] m-auto mt-20 w-5/12 rounded-sm">
                <form className='mt-10'>
                <h1 className='text-black font-extrabold text-xl text-center'>Create Free Account</h1>
                <div className="flex w-9/12 m-auto">
                    <input type="text" placeholder='First Name' name='firstname' className='indent-4 w-6/12 border-2 m-2 border-gray-400 rounded-md h-12'/>
                    <input type="text" placeholder='Last Name' name='last name' className='indent-4 w-6/12 border-2 m-2 border-gray-400 rounded-md h-12'/>
                </div>
                <div className="flex w-9/12 m-auto">
                    <input type="text" name="email"  placeholder="Email" className='w-full rounded-md h-12 m-2 indent-4 border-gray-400 border-2'/>
                </div>
                <div className="flex w-9/12 m-auto">
                    <input type="password" name="password"  placeholder="Set Password" className='w-full rounded-md h-12 m-2 indent-4 border-gray-400 border-2'/>
                </div>
                <div className="flex w-9/12 m-auto">
                    <input type="password" name="cpassword"  placeholder="Confirm Password" className='w-full rounded-md h-12 m-2 indent-4 border-gray-400 border-2'/>
                </div>
                <div className="flex w-9/12 m-auto">
                <input type="checkbox" name="terms"  />
                <p className='text-xs m-2'>I certify that I am at least 18 years old and that I agree to the <strong>Terms and Policies</strong> and <strong>Privacy Policy</strong>. This service is for the U.S. only.</p>
                </div>
                <div className="flex w-9/12 m-auto">
                    <button type="submit" className='w-full m-2 bg-[#1e5e94] font-bold text-xl h-12 text-white rounded-md'>Create Free Account</button>
                </div>
                </form>
                <div className="flex w-10/12 justify-around items-center m-auto">
                    <span className='w-5/12 border-b-2 border-black'></span>
                    <p>OR</p>
                    <span className='w-5/12 border-b-2 border-black'></span>
                </div>
                <div className="flex w-9/12 m-auto">
                    <button  className='w-full m-2 bg-[#1e5e94] font-bold text-xl h-12 text-white rounded-md'>Move FandangoNow Account</button>
                </div>
                <div className="flex w-9/12 m-auto">
                    <button  className='w-full m-2 bg-[#1e5e94] font-bold text-xl h-12 text-white rounded-md'>Sign Up with Walmart</button>
                </div>
            </div>
            <hr className='mt-20'/>
            <Footer />
        </div>
     );
}

export default Register;