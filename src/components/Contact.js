import React from 'react';
import styles from '../styles/Contact.module.css';
import Email from '../assets/email.svg';

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.title}>Get in Touch</h2>
      <img src={Email} alt="Email icon" className={styles.emailIcon} />
      <p className={styles.subtitle}>
        I'd love to hear from you! Whether you have a question, an opportunity, or just want to say hello, feel free to reach out. You can contact me directly via email.
      </p>
      <a href="mailto:laetitiabeles9@gmail.com" className={styles.contactButton}>
        Contact Me
      </a>
    </section>
  );
};

export default Contact;
