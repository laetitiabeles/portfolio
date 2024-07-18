import React from 'react';
import styles from '../styles/Projects.module.css';

const Projects = () => {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.left}>
        {/* Fond en gradient */}
      </div>
      <div className={styles.right}>
        {/* Texte */}
        <h2>Projets</h2>
        {/* Cartes de projets */}
        <div>
          <h3>Nom du Projet</h3>
          <p>Description du projet...</p>
        </div>
        {/* Répétez pour chaque projet */}
      </div>
    </section>
  );
};

export default Projects;
