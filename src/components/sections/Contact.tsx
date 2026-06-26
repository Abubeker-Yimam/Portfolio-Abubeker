"use client";

import { motion } from 'framer-motion';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <motion.div 
        className="container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className={styles.heading}>Get In Touch</h2>
        <p className={styles.description}>
          Whether you have a question about my work, want to discuss a project, or just want to connect, feel free to reach out. I'm currently open to new opportunities!
        </p>
        <div className={styles.buttonGroup}>
          <a href="mailto:abubekeryimam9@gmail.com" className={styles.contactBtn}>
            Gmail
          </a>
          <a href="https://www.linkedin.com/in/abubeker-yimam-b46351134/" target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>
            LinkedIn
          </a>
          <a href="https://github.com/Abubeker-Yimam" target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
