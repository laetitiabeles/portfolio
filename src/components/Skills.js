import React from 'react';
import styles from '../styles/Skills.module.css';

const Skills = () => {
  return (
    <section className={styles.skillsSection}>
      <div className={styles.left}>
        {/* Fond en gradient */}
      </div>
      <div className={styles.right}>
        {/* Texte */}
        <h2>Compétences</h2>
        <div>
          <h3>Soft Skills</h3>
          <ul>
            <li>Compétence 1</li>
            <li>Compétence 2</li>
            <li>Compétence 3</li>
          </ul>
        </div>
        <div>
          <h3>Hard Skills</h3>
          <ul>
            <li>Compétence 1</li>
            <li>Compétence 2</li>
            <li>Compétence 3</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
