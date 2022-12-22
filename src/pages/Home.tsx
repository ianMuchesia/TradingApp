import React from 'react'
import Header from '../components/Header'
import Services from '../components/Services'
import Testimonials from '../components/Testimonial'
import Footer from '../components/Footer'
import CurrencyGraph from "../components/CurrencyGraph"
const Home = () => {
  return (
    <>
    <Header/>
    <main>
        {/* <Pricing/> */}
        <CurrencyGraph/>
        <Services/>
        <Testimonials/>
        
    </main>
        <Footer/>
    </>
  )
}

export default Home