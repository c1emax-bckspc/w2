import React from 'react'
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { useState } from 'react';
const Nav = () => {
    const [activeLink, setActiveLink] = useState(false);
  return (
    <div>
        <div className='bg-amber-100 shadow-sm p-2 flex justify-between items-center'>
        <div className='flex items-center'>
              <div className='md:hidden'> {activeLink ? (<HiX onClick={() => setActiveLink(!activeLink)}  className="w-8 h-8 "/>) : (
                <HiMenu onClick={() => setActiveLink(!activeLink)} className="w-8 h-8 " />)}</div>
        <div className='w-10 h-10 bg-orange-500 rounded-full'></div>
        </div>
        <div className=" hidden md:block">
          <div className='flex gap-3'>
             <a href="#">home</a>
            <a href="#">Products</a>
            <a href="#">Solution</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </div>
        </div>
         <div className='flex gap-4'>
            <button className='w-25 h-10  rounded-xl bg-white'>Sign Up</button>
            <button className='bg-[#8b3dff] h-10 w-25 rounded-xl text-white'>Login</button>
        </div>
     </div>
     {activeLink && (
            <div className='md:hidden p-2 bg-amber-100 shadow-sm w-50'>
             <div className="flex flex-col gap-3 md:block">
        <a href="#">home</a>
        <a href="#">Products</a>
        <a href="#">Solution</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
            </div>  
        </div>
        )}
    </div>
  )
}
 
export default Nav