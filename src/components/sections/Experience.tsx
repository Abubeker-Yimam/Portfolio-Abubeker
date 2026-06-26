"use client";

import { motion } from 'framer-motion';
import styles from './Experience.module.css';

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Cheche Systems",
    date: "2025 - Present",
    description: "Architecting and developing mission-critical business solutions. Focused on delivering high-performance, responsive interfaces with seamless API integrations."
  },
  {
    role: "Freelancer",
    company: "Upwork",
    url: "https://www.upwork.com/freelancers/~01b11409338e6d4592",
    date: "2023 - Present",
    description: "Delivered diverse software solutions, including a non-custodial cryptocurrency wallet supporting 140+ assets and a project management system for the construction industry."
  },
  {
    role: "Lecturer",
    company: "Samara University",
    url: "https://su.edu.et/staff-profile-39/#staff-profile-39",
    date: "2015 - Present",
    description: "Taught various courses including Programming, Data Structures, and Algorithms. Organized workshops and training programs for students and staff."
  },

];

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <motion.div 
        className="container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className={styles.heading}>Where I've Worked</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div key={i} className={styles.item}>
              <h3 className={styles.role}>
                {exp.role} <span className={styles.company}>
                  @ {exp.url ? (
                    <a href={exp.url} target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                </span>
              </h3>
              <p className={styles.date}>{exp.date}</p>
              <p className={styles.description}>{exp.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
