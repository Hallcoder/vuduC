import React from 'react';
import NavBar from './../components/common/NavBar';
import Footer from './../components/Footer';
function Login() {
    return ( 
        <div className="bg-[#171c20] flex flex-col h-screen">
            <NavBar />
            <div className="h-[90vh] m-auto mt-20 w-5/12 rounded-sm">
                <form className='mt-20'>
                <h1 className='text-white font-extrabold text-xl text-center'>Sign In to Vudu</h1>
                <div className="flex w-9/12 m-auto">
                    <input type="text" name="email"  placeholder="Email" className='w-full rounded-md bg-inherit h-14 m-2 indent-4 border-gray-400 border'/>
                </div>
                <div className="flex w-9/12 m-auto">
                    <input type="password" name="password"  placeholder="Set Password" className='w-full bg-inherit rounded-md h-14 m-2 indent-4 border-gray-400 border'/>
                </div>
                <div className="flex w-9/12 m-auto">
                <p className='flex justify-end text-xs m-2'><strong>Forgot Password</strong></p>
                </div>
                <div className="flex w-9/12 m-auto">
                    <button type="submit" className='w-full m-2 bg-inherit  bg-[#333e48]  font-bold text-sm h-10 text-white rounded-md'>Sign In</button>
                </div>
                </form>
                <div className="flex w-10/12 justify-around items-center m-auto">
                    <span className='w-5/12 border-b border-gray-400'></span>
                    <p className='text-white'>OR</p>
                    <span className='w-5/12 border-b border-gray-400'></span>
                </div>
                <div className="flex w-9/12 mt-10 mb-4 m-auto">
                    <button  className='w-full m-2 bg-inherit border border-blue-400 font-bold text-sm h-10 text-white rounded-md'>Move FandangoNow Account</button>
                </div>
                <div className="flex w-9/12 m-auto">
                    <button  className='w-full m-2 bg-inherit border border-blue-400 font-bold text-sm h-10 text-white rounded-md'>Sign Up with Walmart</button>
                </div>
                </div>
                <hr className='mt-36' />
                <Footer />
        </div>
     );
}

export default Login;