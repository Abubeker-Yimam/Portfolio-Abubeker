"use client";

import { motion } from 'framer-motion';
import styles from './TechStack.module.css';

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Express", 
  "PostgreSQL", "MongoDB", "Playwright", "Cypress", "Docker", 
  "TailwindCSS", "Git", "Jest"
];

// Duplicate the array to create a seamless infinite loop
const duplicatedStack = [...techStack, ...techStack];

export default function TechStack() {
  return (
    <section className={styles.section} aria-label="Technology Stack">
      <motion.div
        className={styles.marquee}
        animate={{
          x: ["0%", "-50%"]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20, // Adjust speed here
            ease: "linear",
          },
        }}
      >
        {duplicatedStack.map((tech, index) => (
          <div key={index} className={styles.techItem}>
            <span>{tech}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
