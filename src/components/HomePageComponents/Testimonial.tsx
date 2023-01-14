import React from 'react'
import TestimonialItem from './TestimonialItem'

const Testimonials = () => {
  return (
    <div className=''>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3d1d98" fillOpacity="1" d="M0,96L48,96C96,96,192,96,288,106.7C384,117,480,139,576,165.3C672,192,768,224,864,202.7C960,181,1056,107,1152,80C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" ></path></svg>
        <div className='bg-[#3d1d98] '>
        <h1 className=' text-center mb-4 text-4xl md:text-6xl text-gray-200 '>TESTIMONIALS</h1>
        <div >
            <TestimonialItem/>
            
        </div>
        </div>
    </div>
  )
}

export default Testimonials