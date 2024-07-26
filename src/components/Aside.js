import React from 'react';
import { ReactComponent as HomeIcon } from '../assets/home.svg';
import { ReactComponent as SkillsIcon } from '../assets/skills.svg';
import { ReactComponent as ProjectsIcon } from '../assets/projects.svg';
import { ReactComponent as GithubIcon } from '../assets/github.svg';
import { ReactComponent as LinkedinIcon } from '../assets/linkedin.svg';
import styles from '../styles/Aside.module.css';

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <a href="#home">
              <HomeIcon className={styles.icon} />
              <span className={styles.title}>Accueil</span>
            </a>
          </li>
          <li>
            <a href="#skills">
              <SkillsIcon className={styles.icon} />
              <span className={styles.title}>Compétences</span>
            </a>
          </li>
          <li>
            <a href="#projects">
              <ProjectsIcon className={styles.icon} />
              <span className={styles.title}>Projets</span>
            </a>
          </li>
          <li>
            <a href="http://www.linkedin.com/in/laetitiabeles">
              <LinkedinIcon className={styles.icon} />
              <span className={styles.title}>LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="http://www.github.com/laetitiabeles">
              <GithubIcon className={styles.icon} />
              <span className={styles.title}>GitHub</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
