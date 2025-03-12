import WelcomeScreen from "@/components/WelcomeScreen";
import React, { useContext, useState, useRef, useEffect } from "react";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "@/components/Layout";
import { SeenWelcomeScreenCtx } from "@/context/SeenWelcomePageCtx";
import styles from "@/styles/pages/Home.module.scss";
import Typewriter from "@/components/Typewriter";
import { glitchAnimation } from "@/lib/utils";
import HomeLink from "@/components/HomeLink";
import CircularVideoPlayer from "@/components/CircularVideoPlayer";

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
                    <span className={styles.highlight}>AI-Powered Backend Engineer</span> crafting intelligent systems
                  </h1>
                  <p className={styles.introduction}>
                    Hi, I'm Mutai 👋 I leverage AI to build efficient, scalable, and adaptive backend solutions.
                  </p>
                  <div className={styles.ctaContainer}>
                    <HomeLink linkTo="/projects" text="AI Projects" />
                    <HomeLink linkTo="/about" text="About My AI Journey" />
                  </div>
                </motion.div>
                <motion.div 
                  className={styles.heroVisual}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <CircularVideoPlayer 
                    videoUrl="/videos/introduction.mp4" 
                    thumbnailUrl="/images/video-thumbnail.jpg"
                    caption="Watch my introduction"
                  />
                </motion.div>
              </section>
            </div>
          </Layout>
        )}
      </AnimatePresence>
    </>
  );
}