import WelcomeScreen from "@/components/WelcomeScreen";
import React, { useContext, useState } from "react";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "@/components/Layout";
import { SeenWelcomeScreenCtx } from "@/context/SeenWelcomePageCtx";
import styles from "@/styles/pages/Home.module.scss";
import SkillsRadar from "@/components/SkillsRadar";
import Typewriter from "@/components/Typewriter";
import { glitchAnimation } from "@/lib/utils";
import HomeLink from "@/components/HomeLink";

// Shows the welcome screen only when user first visits the site or refreshes
// the page. Otherwise, it shows the homepage.
export default function Home() {
  const { seenWelcomePage, setSeenWelcomePage } =
    useContext(SeenWelcomeScreenCtx);
  const [partOne] = useState(true);
  const [partTwo, setPartTwo] = useState(false);
  const [partThree, setPartThree] = useState(false);
  const [partFour, setPartFour] = useState(false);
  const [showContent, setShowContent] = useState({});
  const commonProps = {
    initial: { opacity: 0, y: 20 },
    style: { opacity: 0, y: 20 },
    animate: showContent,
  };

  return (
    <>
      <Head>
        <title>&lt;/gilbert&gt;</title>
      </Head>
      <AnimatePresence initial={false} mode="wait">
        {!seenWelcomePage ? (
          <motion.div
            key={"welcomeScreen"}
            exit={glitchAnimation}
            transition={{ duration: 0.2, type: "keyframes" }}
          >
            <WelcomeScreen setSeenWelcomePage={setSeenWelcomePage} />
          </motion.div>
        ) : (
          <Layout>
            <div className={styles.heroContainer}>
              <section className={styles.hero}>
                <motion.div 
                  className={styles.heroContent}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className={styles.title}>
                    <span className={styles.highlight}>Backend Engineer</span> with a passion for scalable solutions
                  </h1>
                  <p className={styles.introduction}>
                    Hi, I'm Mutai 👋 I design and implement robust systems that power seamless digital experiences.
                  </p>
                  <div className={styles.ctaContainer}>
                    <HomeLink linkTo="/projects" text="View My Work" />
                    <HomeLink linkTo="/about" text="About Me" />
                  </div>
                </motion.div>
                <motion.div 
                  className={styles.heroVisual}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {/* Modern visual element here - could be an updated skills visualization */}
                </motion.div>
              </section>
              <motion.section
                {...commonProps}
                initial={{ y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                className={styles.right}
              >
                <SkillsRadar />
              </motion.section>
            </div>
          </Layout>
        )}
      </AnimatePresence>
    </>
  );
}
