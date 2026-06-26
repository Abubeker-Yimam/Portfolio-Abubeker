"use client";

import { motion } from 'framer-motion';
import ProjectImage from './ProjectImage';
import styles from './Projects.module.css';

const projects = [
  {
    title: "Project Management system",
    description: "A robust Point of Sale solution designed for retail efficiency. Features real-time inventory tracking, sales analytics, and seamless payment integration.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/project1.jpeg",
    github: "https://github.com/chechetech/tickflow-api",
    live: "https://tickflows.com/",
  },
  {
    title: "Membership system",
    description: "A comprehensive non-custodial wallet generator supporting 140+ cryptocurrencies. Features advanced management of multiple coins, accounts, and millions of addresses per chain.",
    tech: ["React", "Node.js", "Web3"],
    image: "/projects/project2.jpeg",
    github: "https://github.com/chechetech/membership-api",
    live: "https://membership-test.cheche.et/",
  },
  {
    title: "QA Engineer",
    description: "Ensured seamless and reliable user experiences across all web applications. Specialized in designing comprehensive test plans, automating test cases, and executing rigorous quality assurance protocols to maintain high standards of performance and functionality.",
    tech: ["Jira", "Selenium", "Postman"],
    image: "/projects/project3.jpeg",
    live: "https://zalimu.co.za/",
  },
  {
    title: "GPT 5 thinking Assistant",
    description: "An AI-powered research and writing assistant designed to augment the academic research workflow. It helps users generate hypotheses, structure arguments, and synthesize literature with advanced reasoning capabilities.",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: "/projects/project4.jpeg",
    live: "https://trello.com/b/hYpoQN7e/ub-dr-courses",
  },
  {
    title: "e-invoice portal",
    description: "A comprehensive invoice portal for the  industry. Handles complex scheduling, guest management, and automated notifications.",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: "/projects/project5.jpeg",
    github: "https://github.com/chechetech/invoice-portal",
    live: "https://www.cheche.et/invoice",
  },
];

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <motion.div 
        className="container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className={styles.header}>
          <h2 className={styles.heading}>Featured Projects</h2>
          <p className={styles.subheading}>Selected works showcasing technical expertise and design sensibility.</p>
        </div>
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <div key={i} className={styles.card}>
              {/* Screenshot image area */}
              <div className={styles.imageWrapper}>
                <ProjectImage
                  src={project.image}
                  alt={`${project.title} screenshot`}
                />
                {/* Hover overlay with links */}
                <div className={styles.overlay}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.overlayBtn} aria-label="GitHub">
                      <GitHubIcon />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.overlayBtn} aria-label="Live Demo">
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>

              {/* Card body */}
              <div className={styles.body}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.techList}>
                  {project.tech.map((t, j) => (
                    <span key={j} className={styles.techPill}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
