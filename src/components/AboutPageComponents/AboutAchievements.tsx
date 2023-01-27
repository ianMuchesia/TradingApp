import React from 'react'
import {motion, Variants } from "framer-motion"



const buttonVariants: Variants={
  hidden:{
    opacity:0,
    x:'-100vw',

  },
  visible:{
    opacity: 1,
    x : 0,
    transition:{
      type: 'spring',
      stiffness:105 
    }
  }
}
const AboutAchievements = () => {
  return (
    <div>
    <h1 className="text-5xl text-center">
      <span className="font-bold">Large</span>
      <br /> Achievments
    </h1>

    <p className="text-base my-4">
      Successfully predicting market trends and making profitable trades is
      one of our major achievements. We have a team of highly experienced
      and skilled analysts who continuously monitor the markets and use
      cutting-edge tools to identify profitable opportunities.{" "}
    </p>
    <p>
      Our traders use this information to make well-informed trades that
      consistently generate high returns for our clients. Furthermore, we
      also have a risk management system in place to mitigate any potential
      losses. This combination of expert analysis and risk management has
      enabled us to achieve exceptional results for our clients.
    </p>
    <div className="grid place-items-center my-6">
      <motion.button variants={buttonVariants} initial="hidden" animate="visible" className="shadow__btn">Start Now</motion.button>
    </div>
    </div>
  )
}

export default AboutAchievements