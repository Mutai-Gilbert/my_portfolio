import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/HeroSection.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.title}>
            Building <span className={styles.highlight}>robust backend</span> solutions for modern applications
          </h1>
          
          <p className={styles.description}>
            Hi, I'm Gilbert Mutai 👋 I specialize in designing and implementing scalable systems 
            that power seamless digital experiences.
          </p>
          
          <motion.div 
            className={styles.videoSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className={styles.videoTitle}>Watch My Introduction</h3>
            <div className={styles.videoWrapper}>
              <video 
                className={styles.video}
                controls
                poster="/images/video-thumbnail.jpg"
              >
                <source src="/videos/introduction.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className={styles.videoCaption}>A brief introduction to my work and approach</p>
          </motion.div>
          
          <motion.div 
            className={styles.alignmentNote}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.noteContent}>
              <h3 className={styles.noteTitle}>Important Note for Recruiters</h3>
              <p>
                Please ensure that my resume and LinkedIn profile dates and details are aligned 
                before considering my application. Consistency in professional history is crucial 
                for a successful hiring process.
              </p>
              <Link href="/about">
                <a className={styles.noteLink}>View my professional timeline →</a>
              </Link>
            </div>
          </motion.div>
          
          <div className={styles.actions}>
            <Link href="/projects">
              <a className={styles.primaryButton}>View My Work</a>
            </Link>
            <Link href="/about">
              <a className={styles.secondaryButton}>About Me</a>
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.codeBlock}>
            <pre>
              <code>
                <span className={styles.comment}>// Expertise in action</span>
                <span className={styles.keyword}>const</span> <span className={styles.variable}>engineer</span> = {`{`}
                  <span className={styles.property}>name</span>: <span className={styles.string}>"Gilbert Mutai"</span>,
                  <span className={styles.property}>role</span>: <span className={styles.string}>"Backend Engineer"</span>,
                  <span className={styles.property}>skills</span>: [<span className={styles.string}>"Python"</span>, <span className={styles.string}>"Node.js"</span>, <span className={styles.string}>"Go"</span>, <span className={styles.string}>"AWS"</span>],
                  <span className={styles.property}>buildSolution</span>: <span className={styles.keyword}>function</span>(<span className={styles.parameter}>problem</span>) {`{`}
                    <span className={styles.keyword}>return</span> <span className={styles.variable}>ScalableSystem</span>.<span className={styles.method}>create</span>(<span className={styles.parameter}>problem</span>);
                  {`}`}
                {`}`};
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 