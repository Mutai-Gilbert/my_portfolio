import React from "react";
import AboutSection from "@/components/AboutSection";
import Link from "@/lib/link";
import computer from "@/public/images/experience.png";

const ExperienceSection = () => (
  <AboutSection imageUrl={computer} applyFilter>
    <h1>Technical Experience</h1>
    <p>
      Over the past two years, my professional journey has centered on building robust and scalable solutions, with a strong emphasis on leveraging technology and machine learning. 
    </p>

    <p>
      I've honed my skills in developing web applications and exploring the potential of machine learning models. My focus has been on translating complex concepts into practical, functional systems.
    </p>

    <p>
      My technical expertise includes:
      <ul>
        <li>Cloud Computing: Proficient in AWS services, holding the AWS Cloud Practitioner and AWS Machine Learning certifications.</li>
        <li>Machine Learning: Experience in developing and deploying ML models, with a focus on practical applications.</li>
        <li>Web Development: Building responsive and efficient web applications, emphasizing clean code and maintainability.</li>
      </ul>
    </p>

    <p>
      My latest projects involve integrating machine learning capabilities into web applications to enhance user experience and automate key processes.
    </p>

    <p>
      Explore my <Link href="/projects/01-jobly">Projects</Link> to see examples of my work.
    </p>
  </AboutSection>
);

export default ExperienceSection;