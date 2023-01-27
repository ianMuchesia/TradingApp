import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <section className="p-4 md:p-10">
         <h1 className='text-5xl text-center text-gray-800 font-extrabold'>OUR SERVICES</h1>
        <p className='text-lg text-gray-600 text-center  my-10'>Discover the full range of our advanced trading services and take your trading to the next level.</p>

    <div>
      <ServiceCard/>
    </div>
    </section>
  )
}

export default Services