import Layout from "@/components/Layout";
import { SeenWelcomeScreenCtx } from "@/context/SeenWelcomePageCtx";
import Head from "next/head";
import React, { useContext, useEffect } from "react";
import styles from "@/styles/pages/About.module.scss";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import AboutHero from "@/components/AboutHero";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import SkillsRadar from "@/components/SkillsRadar";
import AboutLinks from "@/components/AboutLinks";

export default function About() {
  const { setSeenWelcomePage } = useContext(SeenWelcomeScreenCtx);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    setSeenWelcomePage(true);
  }, []);

  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <div className={styles.container}>
        <AboutHero />
        <AboutLinks />
        <ExperienceSection />
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1 }}
          className={styles.skills}
        >
          <SkillsRadar />
        </motion.div>
        <EducationSection />
        <ContactSection />
      </div>
    </Layout>
  );
}
