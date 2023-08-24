import React from 'react'
import dubai from '../assets/Dubai.jpg'
import tajmahal from '../assets/tajmahal.jpg'
import himalayas from '../assets/himalayas.jpg'
import eiffel from '../assets/eiffeltowe.jpg'
import sol from '../assets/sol.jpg'

const FSDestinations = () => {
  return (
    <div className='max-w-[1080px] mx-auto py-14 px-4 text-center'>
        <div className='border-black border-b py-5'>
        <h1>Frequently Searched Destinations</h1>    
        </div>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-3 cursor-pointer' src={tajmahal} alt="/"/>
            <img className='w-full h-full object-cover cursor-pointer' src={dubai} alt="/" />
            <img className='w-full h-full object-cover cursor-pointer' src={eiffel} alt="/" />
            <img className='w-full h-full object-cover cursor-pointer col-span-2' src={himalayas} alt="/" />
            <img className='w-full h-full object-cover cursor-pointer col-span-3' src={sol} alt="/" />
        </div>
    </div>
  )
}

export default FSDestinations