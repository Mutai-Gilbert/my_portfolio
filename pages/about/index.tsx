import Layout from "@/components/Layout";
import { SeenWelcomeScreenCtx } from "@/context/SeenWelcomePageCtx";
import Head from "next/head";
import React, { useContext, useEffect } from "react";
import styles from "@/styles/pages/About.module.scss";
import boyComputer from "@/public/images/boyComputer.png";
import boyReading from "@/public/images/boyReading.gif";
import Link from "@/lib/link";
import computer from "@/public/images/experience.png";
import techBoy from "@/public/images/tech-boy.png";
import AboutSection from "@/components/AboutSection";
import SkillsRadar from "@/components/SkillsRadar";
import AboutLinks from "@/components/AboutLinks";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function About() {
  const { setSeenWelcomePage } = useContext(SeenWelcomeScreenCtx);
  const { ref, inView } = useInView({ triggerOnce: true });

  // Set seenWelcomePage to true so that the welcome screen is not shown
  // when user redirects to home page.
  useEffect(() => {
    setSeenWelcomePage(true);
  }, []);

  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <div className={styles.container}>
        <AboutSection imageUrl={boyComputer}>
          <h1>Gilbert Mutai</h1>
          <p>Software Engineer | Entrepreneurial Mindset | Machine Learning Enthusiast | Driving Innovation with AI </p>
          <p>
            I love building innovative web solutions and contributing to meaningful projects!
          </p>

          <p>Hey!, Hand me that problem and let me find a solution for you!</p>
        </AboutSection>

        <AboutLinks />

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

            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1 }}
              className={styles.skills}
            >
              <SkillsRadar />
            </motion.div>

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

        <AboutSection imageUrl={boyReading} applyFilter>
          <h1>My Approach</h1>
          <p>
            When it comes to creating web applications, my approach is a
            combination of creativity and problem-solving. I begin by analyzing
            the needs and goals of the project, and then work to create a design
            that meets those goals. During development, I take a methodical and
            strategic approach, breaking down complex issues into smaller steps
            and leveraging my skills to provide the best possible solution.
          </p>
          <p>
            As a developer, I understand the importance of soft skills such as
            communication and teamwork, and I strive to demonstrate them in
            every work environment.
          </p>
        </AboutSection>

        <AboutSection imageUrl={techBoy} applyFilter>
          <h1>My Journey</h1>
          <p>
            I have had a lifelong interest in technology, starting from a young
            age when I enjoyed building and tinkering with various gadgets and
            machines. From building drones to constructing my own motorcycle, I
            loved the challenge of solving complex problems and seeing my
            creations come to life. It was through this love of building and
            creating that I discovered my passion for programming and the
            endless possibilities it offers for creating amazing projects.
          </p>
          <p>
            My ultimate goal is to become a lead front-end developer and lead a
            team of talented individuals, bringing my creativity and
            problem-solving skills to projects that make a positive impact.
          </p>
        </AboutSection>

        <AboutSection>
          <h1>Get in Touch</h1>
          <p>
            If you're interested in learning more about my skills and
            experience, please feel free to{" "}
            <Link href="/contact">CONTACT ME</Link>
          </p>
        </AboutSection>
      </div>
    </Layout>
  );
}
