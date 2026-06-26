import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <p className={styles.text}>
          © {new Date().getFullYear()} Abubeker Yimam. Crafted with Purpose.
        </p>
        <div className={styles.links}>
          <a href="https://github.com/Abubeker-Yimam" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
          <a href="mailto:contact@example.com" className={styles.link}>Email</a>
        </div>
      </div>
    </footer>
  );
}
