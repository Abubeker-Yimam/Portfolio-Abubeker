import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.content} animate-fade-in`}>
        <p className={styles.greeting}>Hi, my name is</p>
        <h1 className={styles.title}>Abubeker Yimam.</h1>
        <h2 className={styles.subtitle}>I build things for the web.</h2>
        <p className={styles.description}>
          I'm a passionate frontend developer crafting elegant, responsive digital experiences.
          Specializing in modern web technologies like React and Next.js, dedicated to building high-performance, secure, and data-driven web applications.
        </p>
        <div className={styles.actions}>
          <Link href="#projects" className={styles.primaryBtn}>
            Check out my work
          </Link>
          <Link href="#contact" className={styles.secondaryBtn}>
            Contact me
          </Link>
        </div>
      </div>
    </section>
  );
}
