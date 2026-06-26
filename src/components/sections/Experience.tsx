import styles from './Experience.module.css';

const experiences = [
  {
    role: "Frontend-Focused Full-Stack Developer",
    company: "Company Name",
    date: "2023 - Present",
    description: "Architecting and developing mission-critical business solutions. Focused on delivering high-performance, responsive interfaces with seamless API integrations."
  },
  {
    role: "Front-End Developer",
    company: "Tech Agency",
    date: "2021 - 2023",
    description: "Developed responsive web applications to extend functionality. Enabled management of complex data and improved user experience."
  },
  {
    role: "Junior Frontend Developer",
    company: "Freelance",
    date: "2020 - 2021",
    description: "Worked as a freelance web developer on various projects, building landing pages and simple web apps."
  }
];

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Where I've Worked</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div key={i} className={styles.item}>
              <h3 className={styles.role}>
                {exp.role} <span className={styles.company}>@ {exp.company}</span>
              </h3>
              <p className={styles.date}>{exp.date}</p>
              <p className={styles.description}>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
