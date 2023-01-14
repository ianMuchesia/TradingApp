import React from 'react'
import AboutHeader from '../components/AboutPageComponents/AboutHeader'
import Map from '../components/ContactPageComponents/Map'
import Form from '../components/ContactPageComponents/Form'

const Contact = () => {
  return (
    <>
    <AboutHeader/>
    <div className=''>
    <Map />
    <Form/>
    </div>
    </>
  )
}

export default Contact