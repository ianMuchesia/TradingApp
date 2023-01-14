import React from "react";
import Navbar from "../components/Navbar";
import AboutHeader from "../components/AboutPageComponents/AboutHeader";
import AboutTeam from "../components/AboutPageComponents/AboutTeam";
import AboutCards from "../components/AboutPageComponents/AboutCards";
import AboutAchievements from "../components/AboutPageComponents/AboutAchievements";

const About = () => {
  return (
    <>
      <AboutHeader />
      <div className="mx-16 mt-4">
      <AboutAchievements/>
      <AboutCards/>
      <AboutTeam />
      </div>
    </>
  );
};

export default About;
