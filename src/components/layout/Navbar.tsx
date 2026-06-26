'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          <span className="text-gradient">&lt;Abubeker/&gt;</span>
        </Link>

        <nav className={styles.nav}>
          <Link href="#about" className={styles.link}>About</Link>
          <Link href="#experience" className={styles.link}>Experience</Link>
          <Link href="#education" className={styles.link}>Education</Link>
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
