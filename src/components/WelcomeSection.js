import React from 'react';
import styles from '../styles/Welcome.module.css';

const Welcome = () => {
  return (
    <section className={styles.welcomeSection}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <h2>Bienvenue</h2>
        <p>Informations nécessaires ici...</p>
      </div>
    </section>
  );
};

export default Welcome;
