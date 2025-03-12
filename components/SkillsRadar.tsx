import React from "react";
import styles from "@/styles/components/SkillsRadar.module.scss";

export default function SkillsRadar() {
  return (
    <div className={styles.panel}>
      <div className={styles.scanner}></div>
      <ul className={styles.items}>
        <li>AI Prompting</li>
        <li>LLM Orchestration</li>
        <li>Model Fine-tuning</li>
        <li>AI API Design</li>
        <li>ML Pipelines</li>
        <li>Cloud AI Deployment</li>
        <li>AI Testing</li>
        <li>Autonomous Agents</li>
        <li>AI Code Refactoring</li>
        <li>Responsible AI</li>
        <li>AI Data Viz</li>
        <li>AI CI/CD</li>
      </ul>
    </div>
  );
}