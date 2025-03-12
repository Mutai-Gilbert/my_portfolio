import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useContext, useEffect } from 'react'
import styles from '@/styles/pages/404.module.scss'
import AboutSection from "@/components/AboutSection";
import AboutLinks from "@/components/AboutLinks";
import boyComputer from "@/public/images/boyComputer.png";
import { useRouter } from 'next/router';
import { useInView } from "react-intersection-observer";
import { SeenWelcomeScreenCtx } from '@/context/SeenWelcomePageCtx';

export default function Blog() {
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
             <title>Blog</title>
        </Head>
        <div className={styles.container}>
            <AboutSection imageUrl={boyComputer}>
                  <h1>Gilbert Mutai</h1>
                  <p>Software Engineer | AWS Mcahine Learning| Building MCP </p>
            </AboutSection>
        <AboutLinks /> 
        </div>
    </Layout>
)
}
