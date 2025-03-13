import fs from "fs";
import matter, { GrayMatterFile } from "gray-matter";
import { useContext, useEffect, useState } from "react";
import Layout from "@/components/Layout";
import ReactMarkdown from "react-markdown";
import { SeenWelcomeScreenCtx } from "@/context/SeenWelcomePageCtx";
import styles from "@/styles/pages/CaseStudy.module.scss";
import { Frontmatter } from "@/lib/types";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import gitHub from "@/public/images/gitHub.svg";
import gitHubHover from "@/public/images/gitHubHover.svg";
import link from "@/public/images/link.svg";
import linkHover from "@/public/images/linkHover.svg";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  frontmatter: Frontmatter;
  content: string;
};

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticPaths() {
  const files = fs.readdirSync("projects");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: Params) {
  const fileName = fs.readFileSync(`projects/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(
    fileName
  ) as GrayMatterFile<string>;
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function CaseStudy({ frontmatter, content }: Props) {
  const { setSeenWelcomePage } = useContext(SeenWelcomeScreenCtx);
  const [gitHubIcon, setGitHubIcon] = useState(gitHub);
  const [linkIcon, setLinkIcon] = useState(link);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  
  // Mock additional images - replace with actual data from frontmatter
  const projectImages = [
    `/${frontmatter.thumbnail}`,
    ...(frontmatter.galleryImages || []).map(img => `/${img}`)
  ];
  
  // If no gallery images are provided, use the thumbnail multiple times for demo
  const allImages = projectImages.length > 1 
    ? projectImages 
    : Array(4).fill(`/${frontmatter.thumbnail}`);

  // Set seenWelcomePage to true so that the welcome screen is not shown
  // when user redirects to home page.
  useEffect(() => {
    setSeenWelcomePage(true);
  }, []);
  
  const handleThumbnailClick = () => {
    setShowGallery(true);
  };
  
  const handleCloseGallery = () => {
    setShowGallery(false);
  };
  
  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };
  
  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <Layout>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <article className={styles.project}>
        <div className={styles.leftCorners} />
        <div className={styles.rightCorners} />
        <header className={styles.header}>
          <h1 className={styles.name}>{frontmatter.title}</h1>
          
          {/* Project Gallery Preview */}
          <div className={styles.galleryPreview} onClick={handleThumbnailClick}>
            <Image
              priority
              width={1000}
              height={1000}
              className={styles.thumbnail}
              src={allImages[0]}
              alt={frontmatter.title}
            />
            
            {allImages.length > 1 && (
              <div className={styles.galleryIndicator}>
                <span className={styles.galleryIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 18V6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6V18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z" stroke="#1bff80" strokeWidth="2"/>
                    <path d="M8 11L11 14L16 9" stroke="#1bff80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className={styles.galleryText}>{allImages.length} images</span>
              </div>
            )}
            
            {/* Stacked Images Effect */}
            {allImages.length > 1 && (
              <>
                <div className={styles.stackedImage1}></div>
                <div className={styles.stackedImage2}></div>
              </>
            )}
          </div>

          <ul className={styles.technologies}>
            {frontmatter.technologies.map((tech) => (
              <li key={tech} className={styles.technology}>
                {tech}
              </li>
            ))}
          </ul>
          <div className={styles.links}>
            <a
              className={styles.link}
              href={frontmatter.siteUrl}
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
              href={frontmatter.codeUrl}
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
          <TableOfContents headings={frontmatter.toc} />
        </header>
        <main className={styles.main}>
          <ReactMarkdown
            components={{
              // Add an ID to every `h2` tag
              h2: ({ children }) => (
                <h2 id={children.toString().toLowerCase()}>{children}</h2>
              ),
              // Add `target="_blank"` to all anchor tags
              a: ({ node, ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" />,
            }}
          >
            {content}
          </ReactMarkdown>
        </main>
        <footer>
        <div className={styles.links}>
            <a
              className={styles.link}
              href={frontmatter.siteUrl}
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
              href={frontmatter.codeUrl}
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
        </footer>
      </article>
      
      {/* Full Screen Gallery Modal */}
      <AnimatePresence>
        {showGallery && (
          <motion.div 
            className={styles.galleryModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseGallery}
          >
            <div className={styles.galleryContent} onClick={(e) => e.stopPropagation()}>
              <button 
                className={styles.closeButton} 
                onClick={handleCloseGallery}
                title="Close gallery"
                aria-label="Close gallery"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="#1bff80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 6L18 18" stroke="#1bff80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div className={styles.galleryControls}>
                <button 
                  className={styles.galleryNavButton} 
                  onClick={handlePrevImage}
                  title="Previous image"
                  aria-label="View previous image"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="#1bff80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                <div className={styles.galleryImageContainer}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                      className={styles.galleryImageWrapper}
                    >
                      <Image
                        src={allImages[currentImageIndex]}
                        alt={`${frontmatter.title} - Image ${currentImageIndex + 1}`}
                        width={1200}
                        height={800}
                        className={styles.galleryImage}
                      />
                      
                      <div className={styles.scanlines}></div>
                      <div className={styles.vignette}></div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                <button 
                  className={styles.galleryNavButton} 
                  onClick={handleNextImage}
                  title="Next image"
                  aria-label="View next image"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="#1bff80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              
              <div className={styles.galleryThumbnails}>
                {allImages.map((img, index) => (
                  <div 
                    key={index}
                    className={`${styles.galleryThumbnail} ${index === currentImageIndex ? styles.activeThumbnail : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      width={100}
                      height={100}
                    />
                  </div>
                ))}
              </div>
              
              <div className={styles.galleryCounter}>
                <span className={styles.currentIndex}>{currentImageIndex + 1}</span>
                <span className={styles.totalImages}>/ {allImages.length}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
