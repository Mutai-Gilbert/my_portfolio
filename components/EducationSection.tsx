import React from "react";
import AboutSection from "@/components/AboutSection";
import styles from "@/styles/pages/About.module.scss";

const EducationSection = () => (
  <AboutSection>
    <h1>Education & Certifications</h1>
    <p>
      <strong>Dedan Kimathi University - Bachelor of Science in Actuarial Science</strong> -
      A rigorous program focused on mathematical and statistical modeling for risk assessment and financial strategy. This foundation provides a strong analytical base for my work in technology and machine learning.
      -{" "}
      <a
        href="/files/actuarial.pdf" // Update with the actual certificate path
        target="_blank"
        className={styles.link}
      >
        CERTIFICATE
      </a>
    </p>
    <p>
      <strong>AWS Certified Cloud Practitioner</strong> -
      Demonstrated foundational knowledge of AWS cloud services, architecture, security, and pricing. This certification validates my understanding of core cloud concepts and their application in building scalable and reliable solutions.
      -{" "}
      <a
        href="/files/aws-cloud-practitioner.pdf" // Update with the actual certificate path
        target="_blank"
        className={styles.link}
      >
        CERTIFICATE
      </a>
    </p>
    <p>
      <strong>AWS Certified Machine Learning - Specialty (In Progress)</strong> -
      Currently pursuing this advanced certification to deepen my expertise in building, training, tuning, and deploying machine learning models on AWS. This reflects my commitment to specializing in machine learning and leveraging cloud-based solutions for advanced data analysis and model deployment.
      -{" "}
      <span>Expected Completion: [Date/Quarter]</span>
    </p>
  </AboutSection>
);

export default EducationSection;