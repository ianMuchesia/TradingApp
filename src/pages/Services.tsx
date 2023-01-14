import React from 'react'

import AboutHeader from '../components/AboutPageComponents/AboutHeader'
import Choose from '../components/ServicesPageComponents/Choose'
import ServicesAndFeatures from '../components/ServicesPageComponents/ServicesAndFeatures'

const Services = () => {
  return (
    <>
       <AboutHeader/>
       <div>
        <Choose/>
        <ServicesAndFeatures/>
       </div>
    </>
  )
}

export default Services