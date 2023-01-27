import React from "react";
import Navbar from "../Navbar";

const AboutHeader = () => {
  return (
    <div className="relative">
      <div className="h-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#15008d"
            fillOpacity="1"
            d="M0,288L60,261.3C120,235,240,181,360,165.3C480,149,600,171,720,186.7C840,203,960,213,1080,218.7C1200,224,1320,224,1380,224L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="absolute w-full top-0">
        <Navbar />
      </div>
    </div>
  );
};

export default AboutHeader;
