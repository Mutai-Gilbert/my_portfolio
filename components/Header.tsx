import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import styles from "@/styles/components/Header.module.scss";
import BurgerMenu from "@/components/BurgerMenu";

export default function Header() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const isActive = (path: string) => router.pathname === path;
  
  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <Link href="/">
            <a className={styles.logo}>
              <span className={styles.bracket}>&lt;/</span>
              <span className={styles.name}>gilbert</span>
              <span className={styles.bracket}>&gt;</span>
            </a>
          </Link>
          
          <button 
            className={`${styles.mobileMenuButton} ${mobileMenuOpen ? styles.open : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav className={`${styles.nav} ${mobileMenuOpen ? styles.open : ''}`}>
            <ul className={styles.navList}>
              {['', 'projects', 'blog', 'about', 'contact'].map((path) => (
                <li key={path} className={styles.navItem}>
                  <Link href={path === '' ? '/' : `/${path}`}>
                    <a className={`${styles.navLink} ${isActive(path === '' ? '/' : `/${path}`) ? styles.active : ''}`}>
                      {path === '' ? 'HOME' : path.toUpperCase()}
                      {isActive(path === '' ? '/' : `/${path}`) && (
                        <motion.span 
                          className={styles.activeIndicator}
                          layoutId="activeIndicator"
                          transition={{ type: "spring", duration: 0.5 }}
                        />
                      )}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <button className={styles.themeToggle}>
            {/* Theme toggle icon */}
          </button>
        </div>
        <BurgerMenu currentPage={router.pathname.substring(router.pathname.lastIndexOf("/") + 1)} />
      </header>
      <div className={styles.headerUnderline} />
    </>
  );
}
