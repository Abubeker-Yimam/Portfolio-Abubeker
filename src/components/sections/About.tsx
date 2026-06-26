"use client";

import { motion } from 'framer-motion';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <motion.div 
        className="container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className={styles.heading}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              I'm a Full Stack Developer &amp; QA Engineer dedicated to building high-performance,
              secure, and data-driven web applications from the ground up. With a strong background
              in computer science, I bridge the gap between complex technical architectures and
              intuitive user experiences — on both the frontend and backend.
            </p>
            <p>
              My professional journey spans developing end-to-end features, designing RESTful APIs,
              crafting responsive UIs, and implementing automated testing pipelines that keep
              codebases reliable and production-ready at every stage.
            </p>
          </div>
          <div className={styles.stats}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>10+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>10+</div>
              <div className={styles.statLabel}>Projects Completed</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
