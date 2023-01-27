import React from 'react'
import Header from '../components/HomePageComponents/Header'
import Services from '../components/HomePageComponents/Services'
import Testimonials from '../components/HomePageComponents/Testimonial'

import CurrencyGraph from "../components/HomePageComponents/CurrencyGraph"
import Pricing from '../components/HomePageComponents/CurrencyCalculator'
interface Props{
  watchList: string[];
}
const Home = ({watchList}: Props) => {
  return (
    <>
    <Header/>
    <main>
          <Pricing/>  
        <CurrencyGraph watchList={watchList}/>
        <Services/>
        <Testimonials/>
        
    </main>
       
    </>
  )
}

export default Home