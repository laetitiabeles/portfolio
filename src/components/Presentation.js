import React from 'react';
import styles from '../styles/Presentation.module.css';

const Presentation = () => {
  return (
    <section className={styles.presentationSection}>
      <div className={styles.left}>
        {/* Fond en gradient */}
      </div>
      <div className={styles.right}>
        {/* Texte */}
        <h2>Présentation</h2>
        <p>Parlez de vous ici...</p>
      </div>
    </section>
  );
};

export default Presentation;
