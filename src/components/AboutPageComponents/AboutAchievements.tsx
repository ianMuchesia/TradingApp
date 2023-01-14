import React from 'react'

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
      <button className="shadow__btn">Start Now</button>
    </div>
    </div>
  )
}

export default AboutAchievements