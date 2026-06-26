import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          <span className="text-gradient">&lt;Abubeker/&gt;</span>
        </Link>
        
        <nav className={styles.nav}>
          <Link href="#about" className={styles.link}>About</Link>
          <Link href="#experience" className={styles.link}>Experience</Link>
          <Link href="#projects" className={styles.link}>Projects</Link>
          <Link href="#contact" className={styles.link}>Contact</Link>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.resumeBtn}>
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
}
