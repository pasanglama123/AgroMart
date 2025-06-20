import React from 'react'
import logo from '../assets/logo.jpeg'
import personlogo from '../assets/person.svg'
import passlogo from '../assets/password.svg'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="w-screen h-screen bg-[#E5E5E5] flex justify-center items-center">
      <div className="w-full h-full bg-white p-6 flex flex-col justify-center  md:items-center md:py-10 md:w-[50%] shadow-md ">

        <div className="md:w-[450px] w-full">

          <div className="flex justify-center -mt-60 md:mt-10 relative md:-top-[10%]">
            <img src={logo} alt="logo" className="w-50 md:w-50" />
          </div>

          
          <h1 className="text-3xl text-[#057E0D] font-bold mx-8 md:mx-0 md:text-center mt-4 relative md:-top-[15%]">Sign Into</h1>
          <p className="text-[16px] text-[#057E0D] font-semibold mx-9 md:mx-0 md:text-center mb-6 relative md:-top-[15%]">Your Account</p>

          <form className="flex flex-col gap-6 px-4 md:px-0 relative md:-top-[10%]">

            <label className="relative w-full flex items-center my-10 md:my-6 ">
              <span className="absolute left-3">
                <img src={personlogo} alt="person icon" className="w-5 h-5" />
              </span>

              <input
                type="text"
                placeholder="Email or phone number"
                className="lemail_phone pl-10 pr-4 py-3 w-full border-b border-[#ccc] text-base outline-none focus:border-[#057E0D] duration-300"
                required
              />
            </label>

            
            <label className="relative w-full flex items-center">
              <span className="absolute left-3">
                <img src={passlogo} alt="password icon" className="w-5 h-5" />
              </span>
              <input
                type="password"
                placeholder="Password"
                className="lpassword pl-10 pr-4 py-3 w-full border-b border-[#ccc] text-base outline-none focus:border-[#057E0D] duration-300"
                required
              />
            </label>

            
            <div className="flex justify-center relative -bottom-17 md:static md:mt-4">
              <button
                type="submit"
                className="ssignin_btn bg-[#057E0D] hover:bg-[#056E0D] text-white font-bold py-3 px-20 rounded"
              >
                Sign In
              </button>
            </div>

            <p className="text-center text-base text-[#057E0D] mt-8 relative -bottom-10 md:static md:mt-6">
              Create an Account?{' '}
              <Link to="/signup" className=" hover:underline hover:underline-offset-4">
                Sign Up
              </Link>
            </p>

          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;
