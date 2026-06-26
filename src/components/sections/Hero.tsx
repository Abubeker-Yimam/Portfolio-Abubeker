"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="hero" className={styles.hero}>
      <motion.div 
        className={`container ${styles.content}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariants} className={styles.greeting}>Hi, my name is</motion.p>
        <motion.h1 variants={itemVariants} className={styles.title}>Abubeker Yimam.</motion.h1>
        <motion.h2 variants={itemVariants} className={styles.subtitle}>I build things for the web.</motion.h2>
        <motion.p variants={itemVariants} className={styles.description}>
          I'm a Full Stack Developer &amp; QA Engineer who builds robust, end-to-end web applications
          and ensures they actually work. From pixel-perfect UIs to solid backend APIs and
          thorough automated testing — I cover the full spectrum.
        </motion.p>
        <motion.div variants={itemVariants} className={styles.actions}>
          <Link href="#projects" className={styles.primaryBtn}>
            Check out my work
          </Link>
          <Link href="#contact" className={styles.secondaryBtn}>
            Contact me
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
