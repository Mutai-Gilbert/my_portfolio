import Layout from "@/components/Layout";
import React, { useContext, useEffect } from "react";
import { SeenWelcomeScreenCtx } from "@/context/SeenWelcomePageCtx";
import fs from "fs";
import matter from "gray-matter";
import ProjectWrapper from "@/components/ProjectWrapper";
import Head from "next/head";
import { ProjectsProps, Frontmatter } from "@/lib/types";
import path from "path";

export async function getStaticProps() {
  try {
    // Log the current working directory
    console.log("Current working directory:", process.cwd());
    
    // Get the absolute path to the projects directory
    const projectsDirectory = path.join(process.cwd(), "projects");
    console.log("Projects directory path:", projectsDirectory);
    
    // Check if the directory exists
    const directoryExists = fs.existsSync(projectsDirectory);
    console.log("Projects directory exists:", directoryExists);
    
    if (!directoryExists) {
      console.error("Projects directory does not exist!");
      // Return empty projects array to prevent mapping error
      return {
        props: {
          projects: [],
        },
      };
    }
    
    // Get all project files
    const files = fs.readdirSync(projectsDirectory);
    console.log("Project files found:", files);
    
    if (!files || files.length === 0) {
      console.log("No project files found in directory");
      return {
        props: {
          projects: [],
        },
      };
    }
    
    // Process each project file
    const projects = files.map((fileName) => {
      try {
        const slug = fileName.replace(".md", "");
        const readFile = fs.readFileSync(path.join(projectsDirectory, fileName), "utf-8");
        const { data: frontmatter } = matter(readFile);
        
        // Log each project's frontmatter to check for issues
        console.log(`Processed project ${slug} with frontmatter:`, 
          JSON.stringify(frontmatter, null, 2).substring(0, 100) + "...");
        
        // Ensure all required properties exist
        const validatedFrontmatter: Frontmatter = {
          title: frontmatter.title || "Untitled Project",
          thumbnail: frontmatter.thumbnail || "",
          galleryImages: Array.isArray(frontmatter.galleryImages) ? frontmatter.galleryImages : [],
          problem: frontmatter.problem || "No problem description available",
          solution: frontmatter.solution || "No solution description available",
          technologies: Array.isArray(frontmatter.technologies) ? frontmatter.technologies : [],
          siteUrl: frontmatter.siteUrl || "#",
          codeUrl: frontmatter.codeUrl || "#",
          toc: Array.isArray(frontmatter.toc) ? frontmatter.toc : []
        };
        
        return {
          slug,
          frontmatter: validatedFrontmatter,
        };
      } catch (fileError) {
        console.error(`Error processing file ${fileName}:`, fileError);
        // Return a placeholder object to prevent the map from breaking
        return {
          slug: fileName.replace(".md", ""),
          frontmatter: {
            title: `Error loading ${fileName}`,
            thumbnail: "",
            galleryImages: [],
            problem: "Error loading project data",
            solution: "Please check the project file format",
            technologies: [],
            siteUrl: "#",
            codeUrl: "#",
            toc: []
          },
        };
      }
    });
    
    console.log(`Processed ${projects.length} projects successfully`);
    
    return {
      props: {
        projects: projects || [],
      },
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    // Return empty projects array as fallback
    return {
      props: {
        projects: [],
      },
    };
  }
}

export default function Projects({ projects }: ProjectsProps) {
  const { setSeenWelcomePage } = useContext(SeenWelcomeScreenCtx);

  // Set seenWelcomePage to true so that the welcome screen is not shown
  // when user redirects to home page.
  useEffect(() => {
    setSeenWelcomePage(true);
  }, [setSeenWelcomePage]);

  // Add a safety check to prevent mapping over undefined
  if (!projects || projects.length === 0) {
    return (
      <Layout>
        <Head>
          <title>Projects</title>
        </Head>
        <div className="no-projects-message">
          <h2>No projects found</h2>
          <p>Check back soon for updates!</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      {Array.isArray(projects) && projects.map(({ slug, frontmatter }) => (
        <ProjectWrapper key={slug} slug={slug} frontmatter={frontmatter}/>
      ))}
    </Layout>
  );
}
