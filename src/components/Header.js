import React from 'react';
import styles from '../styles/Header.module.css'; // Assurez-vous d'importer correctement les styles CSS modules
import { ReactComponent as GithubIcon } from '../assets/github.svg'; // Importez l'icône GitHub depuis votre fichier SVG
import { ReactComponent as LinkedInIcon } from '../assets/linkedin.svg'; // Importez l'icône LinkedIn depuis votre fichier SVG

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li><a href="#features">A propos</a></li>
          <li><a href="#about">Compétences</a></li>
          <li><a href="#contact">Projets</a></li>
        </ul>
      </nav>
      <a href="https://www.linkedin.com/in/laetitiabeles" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className={styles.icon} />
            </a>
            <a href="https://github.com/laetitiabeles" target="_blank" rel="noopener noreferrer">
              <GithubIcon className={styles.icon} />
      </a>
    </header>
  );
};

export default Header;
