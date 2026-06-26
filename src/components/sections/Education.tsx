"use client";

import { motion } from 'framer-motion';
import styles from './Education.module.css';

const education = [
  {
    period: 'October 2019 – March 2022',
    degree: 'MSc in Computer Science',
    institution: 'Wollo University',
    description:
      'Successfully completed Master of Science degree with a focus on core computer science principles and software engineering.',
  },
  {
    period: 'September 2010 - June 2013',
    degree: 'BSc In Information Technology',
    institution: 'Bahirdar University',
    description:
      'Successfully completed Bachelor of Science degree with a focus on information technology principles and software engineering.',
  },
];

const GraduationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={styles.watermark}
    aria-hidden="true"
  >
    <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3zm7 10.09L12 17 5 13.09V11l7 3.82 7-3.82v2.09z" />
  </svg>
);

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <motion.div 
        className="container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className={styles.header}>
          <span className={styles.sectionNumber}>04</span>
          <h2 className={styles.heading}>Education</h2>
          <p className={styles.subheading}>
            Academic background and continuous learning journey.
          </p>
        </div>

        <div className={styles.grid}>
          {education.map((item, i) => (
            <div key={i} className={styles.card}>
              <GraduationIcon />
              <span className={styles.period}>{item.period}</span>
              <h3 className={styles.degree}>{item.degree}</h3>
              <p className={styles.institution}>{item.institution}</p>
              <p className={styles.description}>{item.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
