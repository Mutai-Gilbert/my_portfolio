import React from "react";
import styles from "@/styles/components/SkillsRadar.module.scss";

export default function SkillsRadar() {
  return (
    <>
    <div className={styles.panel}>
      <div className={styles.scanner}></div>
      <ul className={styles.items}>
        <li>Python</li>
	      <li>Golang</li>
        <li>Typescript</li>
        <li>REACT</li>
        <li>Express</li>
        <li>NodeJs</li>
        <li>NextJs</li>
        <li>Docker</li>
        <li>AWS</li>
        <li>FeathersJs</li>
        <li>Digital Ocean</li>
        <li>AGILE/SCRUM</li>
      </ul>
    </div>
    </>
  );
}
