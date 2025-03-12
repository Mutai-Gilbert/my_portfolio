import React from "react";
import { motion } from "framer-motion";
import styles from "@/styles/components/SkillsVisualization.module.scss";

interface Skill {
  name: string;
  level: number; // 1-10
  category: "AI Models" | "AI Tools" | "AI Development" | "Data & Ethics";
}

const skills: Skill[] = [
  { name: "Prompt Eng.", level: 9, category: "AI Development" },
  { name: "LLM Orch.", level: 8, category: "AI Tools" },
  { name: "Model Fine-Tune", level: 8, category: "AI Models" },
  { name: "AI APIs", level: 9, category: "AI Development" },
  { name: "ML Pipelines", level: 8, category: "AI Models" },
  { name: "Cloud AI", level: 7, category: "AI Tools" },
  { name: "AI Testing", level: 7, category: "AI Development" },
  { name: "AI Agents", level: 7, category: "AI Models" },
  { name: "Code AI", level: 8, category: "AI Development" },
  { name: "AI Ethics", level: 9, category: "Data & Ethics" },
  { name: "AI Analytics", level: 8, category: "Data & Ethics" },
  { name: "AI CI/CD", level: 7, category: "AI Tools" },
];

export default function SkillsVisualization() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>AI Skills</h2>
      <div className={styles.categories}>
        {["AI Models", "AI Tools", "AI Development", "Data & Ethics"].map(category => (
          <div key={category} className={styles.category}>
            <h3>{category}</h3>
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