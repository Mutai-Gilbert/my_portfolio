import React from "react";
import AboutSection from "@/components/AboutSection";
import boyComputer from "@/public/images/boyComputer.png";

const AboutHero = () => (
  <AboutSection imageUrl={boyComputer}>
    <h1>Gilbert Mutai</h1>
    <p>Software Engineer | AWS Machine Learning | Building MCP </p>
    <p>
      I love building innovative backend solutions and contributing to meaningful projects!
    </p>
    <p>Hey!, Hand me that problem and let me find a solution for you!</p>
  </AboutSection>
);

export default AboutHero;
