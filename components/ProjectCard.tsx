import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "@/styles/components/ProjectCard.module.scss";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  index: number;
}

export default function ProjectCard({ 
  title, 
  description, 
  image, 
  technologies, 
  link,
  index 
}: ProjectCardProps) {
  return (
    <motion.div 
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className={styles.imageContainer}>
        <Image 
          src={image} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
          className={styles.image}
        />
        <div className={styles.overlay}>
          <Link href={link}>
            <a className={styles.viewButton}>View Project</a>
          </Link>
        </div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.technologies}>
          {technologies.map(tech => (
            <span key={tech} className={styles.technology}>{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 