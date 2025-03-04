import React from "react";
import AboutSection from "@/components/AboutSection";
import Link from "@/lib/link";
import computer from "@/public/images/experience.png";

const ExperienceSection = () => (
  <AboutSection imageUrl={computer} applyFilter>
    <h1>Experience</h1>
    <p>
      During the past two years, I have focused on translating ideas into
      fully-functional websites and web applications, with my latest
      project being:
    </p>
    <p>
      <strong>
        <Link href="/projects/01-jobly">Doctor Appointment</Link>
      </strong>{" "}
      -Doctors Appointments frontend is react forntend application for doctor book appoinemnts. This applications is responsive and users can load, create, and delete doctors and reservations. Users need to sign up or sign in to access application. They can sign up or sign in using the sign up and login forms.
    </p>
    <p>
      Check out my other <Link href="/projects">PROJECTS</Link>
    </p>
  </AboutSection>
);

export default ExperienceSection;
