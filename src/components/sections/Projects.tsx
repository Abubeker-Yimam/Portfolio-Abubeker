import styles from './Projects.module.css';

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A robust Point of Sale solution designed for retail efficiency. Features real-time inventory tracking, sales analytics, and seamless payment integration.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "#",
    external: "#"
  },
  {
    title: "Crypto Wallet App",
    description: "A comprehensive non-custodial wallet generator supporting 140+ cryptocurrencies. Features advanced management of multiple coins and accounts.",
    tech: ["React", "Node.js", "Web3"],
    github: "#",
    external: "#"
  },
  {
    title: "Booking Platform",
    description: "A comprehensive booking and reservation platform for the hospitality industry. Handles complex scheduling and guest management.",
    tech: ["Vue.js", "Express", "MongoDB"],
    github: "#",
    external: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Some Things I've Built</h2>
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.folderIcon}>📁</div>
                <div className={styles.links}>
                  <a href={project.github} className={styles.linkIcon}>GitHub</a>
                  <a href={project.external} className={styles.linkIcon}>Live</a>
                </div>
              </div>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <ul className={styles.techList}>
                {project.tech.map((t, j) => (
                  <li key={j}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
