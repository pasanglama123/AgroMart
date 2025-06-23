import React, { useState } from 'react';
import logo from '../assets/logo.jpeg';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="w-screen h-screen bg-[#E5E5E5] flex justify-center items-center overflow-auto">
      <div className="bg-white p-6 h-full w-full max-w-screen-md  md:w-[70%] lg:w-[60%] xl:w-[50%] rounded-md shadow-md ">

 
        <div className="flex justify-center mb-4">
          <img src={logo} className="w-32 md:50" alt="logo" />
        </div>

        <h1 className="text-2xl font-bold text-center  text-[#057E0D] relative -top-10 md:-top-10">Create a new account</h1>

        <form className="flex flex-col gap-5 px-2 sm:px-6">

          <div className="flex flex-col gap-4 md:flex-row">
            <input
              type="text"
              placeholder="Company's name"
              className="cname flex-1 p-3 pl-4 border text-base border-[#ccc] outline-none focus:border-[#057E0D] duration-300"
              required
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="semail flex-1 p-3 pl-4 border text-base border-[#ccc] outline-none focus:border-[#057E0D] duration-300"
              required
            />
          </div>

          <input
            type="text"
            placeholder="Phone number"
            className="sphone p-3 pl-4 w-full border text-base border-[#ccc] outline-none focus:border-[#057E0D] duration-300"
            required
          />

      
          <input
            type="password"
            placeholder="Password"
            className="spassword p-3 pl-4 w-full border text-base border-[#ccc] outline-none focus:border-[#057E0D] duration-300"
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="scpassword p-3 pl-4 w-full border text-base border-[#ccc] outline-none focus:border-[#057E0D] duration-300"
            required
          />


          <div className="text-[#057E0D] font-semibold">Location</div>
          

          <div className="flex justify-center mt-2">
            <button
              type="submit"
              className="ssignup_btn bg-[#057E0D] hover:bg-[#056E0D] text-white font-bold py-2 px-20 rounded"
            >
              Sign Up
            </button>
          </div>


          <p className="text-center text-[#057E0D] text-base mt-2">
            Already have an Account?{' '}
            <Link to="/" className="hover:underline hover:underline-offset-4">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
