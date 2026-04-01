import React from 'react'
import { features } from "../data/data"
import Front from "../assets/1.png"
import UI from "../assets/2.png"
import Team from "../assets/3.png"

const Features = () => {
  return (
    <div className='w-full mx-auto px-4 py-8 flex flex-col justify-center'>
      <h1 className='text-center text-3xl font-bold mb-4'>
        why choose us?
      </h1>
      <p className='text-center text-gray-600 mb-8'>
        we help study and learn
      </p>

      <div className='flex sm:flex-col md:flex-row'>
        {features.map((item, index) => (
          <div key={index} className='flex flex-1 flex-col justify-center items-center p-6'>
            <div
              
             
            >
              <div className='text-3xl'>{nigga.icon}</div>
            </div>

            <p className='text-2xl mb-4 font-semibold'>{item.title}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features