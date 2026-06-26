import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              I'm a Frontend Developer dedicated to building high-performance, secure, and data-driven web applications. With a strong background in computer science, I bridge the gap between complex technical architectures and intuitive user experiences.
            </p>
            <p>
              My professional journey includes developing specialized solutions, handling intricate frontend challenges, and leveraging data-driven insights to create performant, scalable digital products.
            </p>
          </div>
          <div className={styles.stats}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>3+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>10+</div>
              <div className={styles.statLabel}>Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
