import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Get In Touch</h2>
        <p className={styles.description}>
          Whether you have a question about my work, want to discuss a project, or just want to connect, feel free to reach out. I'm currently open to new opportunities!
        </p>
        <a href="mailto:contact@example.com" className={styles.contactBtn}>
          Say Hello
        </a>
      </div>
    </section>
  );
}
