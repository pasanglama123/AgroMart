import React,{useState} from 'react'
import logoR from '../assets/logoR.png'
import pasang from '../assets/pasang.jpeg'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="body w-full h-screen bg-red-500">

        <div className="navbar bg-[#ffffff] flex justify-between items-center">
          <div className="logo w-30">
            <img src={logoR} alt="" />
          </div>
          <div className={`menu absolute top-[14%] left-0 w-full bg-gray-200 text-[#057E0D] font-bold p-4 space-y-4 cursor-pointer 
                        ${menuOpen ? 'block' : 'hidden'} 
                       `}>
            <ul className='space-y-4 transition-all '>
              <li className='hover:pl-5 transition-all duration-400'>Home</li><hr />
              <li className='hover:pl-5 transition-[padding] duration-400'>About</li><hr />
              <li className='hover:pl-5 transition-[padding] duration-400'>Service</li><hr />
              <li className='hover:pl-5 transition-[padding] duration-400'>Blog</li><hr />
              <li className='hover:pl-5 transition-[padding] duration-400'>Contact</li><hr />
            </ul>
          </div> 
          
          <div className="profile flex pr-8 cursor-pointer items-center justify-center">

             <div className="mobile_menu mx-6"  onClick={() => setMenuOpen(!menuOpen)}>
               <div className="line h-0.5 w-5 my-1 bg-black "></div>
               <div className="line h-0.5 w-5 my-1 bg-black "></div>
               <div className="line h-0.5 w-5 my-1 bg-black "></div>
             </div>
   
              
               <div className="img_container  w-12 h-12 rounded-full flex items-center justify-center">
                 <img src={pasang} className='my_img w-10 h-10 rounded-full ' alt="" />
               </div>

          </div>

        </div>

      </div>

    </>
  )
}

export default Navbar