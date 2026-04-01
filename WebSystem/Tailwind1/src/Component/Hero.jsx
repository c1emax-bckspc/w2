import React from 'react'
import { useState } from 'react'
import HeroImage from "../assets/4.png"
import { HiStar ,HiArrowSmRight } from 'react-icons/hi'
const Hero = () => {
  return (
    <div className='w-full md:flex-row flex sm:flex-col py-8 px-4'>
        <div className='sm:w-full md:w-1/2 '>
          <div className='flex items-center gap-2 w-fit p-4 bg-gray-150 text-xl'>
            <span classname='purple-200'>start learning today</span>
        </div>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>
            improve ur skills with online courses
        </h1>
        <p className='text-gray-600 text-lg md:text-xl mt-8 w-2/3'>
            Get the most accurate leads,sales people training conversions,tools and more - all within the same one billing.
        </p>
        <div className='mt:8 p-4 flex gap-4 w-2/3'>
         <button className='flex-1 border-gray py-4 px-6 rounded-xl'>
                <button title='Get Started' className='bg-purple-400  text-white px-8 py-4 rounded-xl'>
                Get Started
            </button>
            </button>
            <button title='Get Started' className='flex-1 border-gray py-4 px-6 rounded-xl' />
            <button className='bg-gray-400  text-white px-8 py-4 rounded-xl'>
                <HiArrowSmRight />
            </button>
           
        </div>
        </div>
     
        <div className='sm:w-full md:w-1/2 flex justify-center  items-center '>
            <img src={HeroImage} alt="" className='w-5/6' />
           
        </div>
 
    </div>
  )
}
 
export default Hero