import React from "react";
import AboutSection from "@/components/AboutSection";
import Link from "@/lib/link";

const ContactSection = () => (
  <AboutSection>
    <h1>Get in Touch</h1>
    <p>
      If you're interested in learning more about my skills and
      experience, please feel free to{" "}
      <Link href="/contact">CONTACT ME</Link>
    </p>
  </AboutSection>
);

export default ContactSection;
