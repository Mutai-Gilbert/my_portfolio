import React from "react";
import AboutSection from "@/components/AboutSection";
import styles from "@/styles/pages/About.module.scss";

const EducationSection = () => (
  <AboutSection>
    <h1>Education</h1>
    <p>
      <strong>Dedan Kimathi University - Bachelor of Science in Actuarial Science</strong> -
      The program is designed to prepare students for a career as an actuary, which involves using mathematical and statistical models to assess financial risks and develop strategies to minimize them.
      -{" "}
      <a
        href="/files/"
        target="_blank"
        className={styles.link}
      >
        CERTIFICATE
      </a>
    </p>
    <p>
      <strong>Microverse JavaScript Module</strong> -
      Students earn this credential after demonstrating understanding and mastery of JavaScript. During the course of this module, they build several projects using JavaScript while pair-programming remotely with an international team of software developers.-{" "}
      <a
        href="/files/javascript.pdf"
        target="_blank"
        className={styles.link}
      >
        CERTIFICATE
      </a>
    </p>
    <p>
      <strong>Microverse React & Redux Module</strong> - Students earn this credential after demonstrating thorough understanding and mastery of React and Redux. Over the course of this module, students build and develop multiple projects using React and Redux, working both independently and while remotely pair-programming. -{" "}
      <a
        href="/files/reactredux.pdf"
        target="_blank"
        className={styles.link}
      >
        CERTIFICATE
      </a>
    </p>
    <p>
      <strong>Microverse Ruby/Databases Module</strong> - 
      Students earn this credential after demonstrating thorough understanding and mastery of Ruby/Databases. Over the course of this module, students build and develop multiple projects using Ruby/Databases, working both independently and while remotely pair-programming.            
      -{" "}
      <a
        href="/files/ruby.pdf"
        target="_blank"
        className={styles.link}
      >
        CERTIFICATE
      </a>
    </p>
    <p>
      <strong>Microverse Ruby on Rails Module</strong> - Students earn this credential after demonstrating thorough understanding and mastery of Ruby on Rails. Over the course of this module, students build and develop multiple projects using Ruby on Rails, working both independently and while remotely pair-programming -{" "}
      <a
        href="/files/rubyonrails.pdf"
        target="_blank"
        className={styles.link}
      >
        CERTIFICATE
      </a>
    </p>
    <p>
      <strong>Microverse Final Capstone Module</strong> - Students earn this credential after demonstrating thorough understanding and mastery of React, Redux, JavaScript, Front End Web Development and connecting Back End Web Development using Ruby on Rails. Over the course of this module, students build and develop multiple projects using React, Redux, JavaScript, Front End Web Development and connecting Back End Web Development using Ruby on Rails, working both independently and while remotely pair-programming. -{" "}
      <a
        href="/files/fullstackcapstone.pdf"
        target="_blank"
        className={styles.link}
      >
        CERTIFICATE
      </a>
    </p>
    <p>
      <strong>Microverse Software Development Program</strong> - 
      Students earn this credential after working through 1500+ hours of remote pair programming, learning to code with teams from around the world.-{" "}
      <a
        href="/files/fullstackwebdevelopement.pdf"
        target="_blank"
        className={styles.link}
      >
        CERTIFICATE
      </a>
    </p> 
  </AboutSection>
);

export default EducationSection;
