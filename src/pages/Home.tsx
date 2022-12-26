import React from 'react'
import Header from '../components/Header'
import Services from '../components/Services'
import Testimonials from '../components/Testimonial'

import CurrencyGraph from "../components/CurrencyGraph"
interface Props{
  watchList: string[];
}
const Home = ({watchList}: Props) => {
  return (
    <>
    <Header/>
    <main>
        {/* <Pricing/> */}
        <CurrencyGraph watchList={watchList}/>
        <Services/>
        <Testimonials/>
        
    </main>
       
    </>
  )
}

export default Home