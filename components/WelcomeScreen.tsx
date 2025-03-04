import React, { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/components/WelcomeScreen.module.scss";

export default function WelcomeScreen({
  setSeenWelcomePage,
}: {
  setSeenWelcomePage: (show: boolean) => void;
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setSeenWelcomePage(true);
    }, 3500);
    
    return () => clearTimeout(timer);
  }, [setSeenWelcomePage]);

  return (
    <div className={styles.welcomeContainer}>
      <motion.div 
        className={styles.logo}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        &lt;/&gt;
      </motion.div>
      
      <motion.div
        className={styles.tagline}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        Building robust backend solutions
      </motion.div>
      
      <motion.div 
        className={styles.loader}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: 1.5, duration: 1.5 }}
      />
    </div>
  );
}
