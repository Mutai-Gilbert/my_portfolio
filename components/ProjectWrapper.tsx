import React, { useState } from "react";
import styles from "@/styles/components/ProjectWrapper.module.scss";
import Image from "next/image";
import Link from "@/lib/link";
import gitHub from "@/public/images/gitHub.svg";
import gitHubHover from "@/public/images/gitHubHover.svg";
import link from "@/public/images/link.svg";
import linkHover from "@/public/images/linkHover.svg";
import rightArrow from "@/public/images/rightArrow.svg";
import rightArrowHover from "@/public/images/rightArrowHover.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Frontmatter } from "@/lib/types";

type Props = {
  slug: string;
  frontmatter: Frontmatter;
};

export default function ProjectWrapper({ slug, frontmatter }: Props) {
  const [gitHubIcon, setGitHubIcon] = useState(gitHub);
  const [linkIcon, setLinkIcon] = useState(link);
  const [rightArrowIcon, setRightArrowIcon] = useState(rightArrow);
  const { ref, inView } = useInView({ triggerOnce: true });

  // Ensure frontmatter properties exist with defaults
  const {
    title = "Untitled Project",
    thumbnail = "",
    problem = "No problem description available",
    solution = "No solution description available",
    technologies = [],
    siteUrl = "#",
    codeUrl = "#"
  } = frontmatter || {};

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 1 }}
      key={slug}
      className={styles.project}
    >
      <div className={styles.leftCorners} />
      <div className={styles.rightCorners} />
      <h1 className={styles.name}>{title}</h1>
      <div className={styles.info}>
        <Image
          priority
          width={1500}
          height={900}
          className={styles.thumbnail}
          alt={title}
          src={thumbnail ? `/${thumbnail}` : "/images/placeholder-project.jpg"}
        />
        <div className={styles.description}>
          <p>
            <span className={styles.descriptionName}>Problem:</span>{" "}
            {problem}
          </p>
          <p>
            <span className={styles.descriptionName}>Solution:</span>{" "}
            {solution}
          </p>
          <div className={styles.links}>
            <div className={styles.firstRow}>
              <a
                className={styles.link}
                href={siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setLinkIcon(linkHover)}
                onMouseLeave={() => setLinkIcon(link)}
              >
                <Image className={styles.icon} src={linkIcon} alt="Link icon" />
                SITE
              </a>
              <a
                className={styles.link}
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setGitHubIcon(gitHubHover)}
                onMouseLeave={() => setGitHubIcon(gitHub)}
              >
                <Image
                  className={styles.icon}
                  src={gitHubIcon}
                  alt="Github logo"
                />
                CODE
              </a>
            </div>
            <Link
              className={styles.link}
              href={`/projects/${slug}`}
              onMouseEnter={() => setRightArrowIcon(rightArrowHover)}
              onMouseLeave={() => setRightArrowIcon(rightArrow)}
            >
              CASE STUDY{" "}
              <Image
                className={styles.icon}
                src={rightArrowIcon}
                alt="Right arrow icon"
              />
            </Link>
          </div>
        </div>
      </div>
      <ul className={styles.technologies}>
        {Array.isArray(technologies) && technologies.map((tech) => (
          <li key={tech} className={styles.technology}>
            {tech}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
