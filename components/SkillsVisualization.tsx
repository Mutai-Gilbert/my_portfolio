import React from "react";
import { motion } from "framer-motion";
import styles from "@/styles/components/SkillsVisualization.module.scss";

interface Skill {
  name: string;
  level: number; // 1-10
  category: "frontend" | "backend" | "tools" | "languages";
}

const skills: Skill[] = [
  { name: "Python", level: 9, category: "languages" },
  { name: "Golang", level: 8, category: "languages" },
  { name: "TypeScript", level: 9, category: "languages" },
  { name: "React", level: 8, category: "frontend" },
  { name: "Express", level: 9, category: "backend" },
  { name: "Node.js", level: 9, category: "backend" },
  { name: "Next.js", level: 8, category: "frontend" },
  { name: "Docker", level: 8, category: "tools" },
  { name: "AWS", level: 7, category: "tools" },
  { name: "FeathersJS", level: 7, category: "backend" },
  { name: "Digital Ocean", level: 7, category: "tools" },
];

export default function SkillsVisualization() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Technical Skills</h2>
      <div className={styles.categories}>
        {["languages", "backend", "frontend", "tools"].map(category => (
          <div key={category} className={styles.category}>
            <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <div className={styles.skillsList}>
              {skills
                .filter(skill => skill.category === category)
                .map(skill => (
                  <motion.div 
                    key={skill.name}
                    className={styles.skillItem}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level * 10}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillLevel}>{skill.level}/10</span>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 