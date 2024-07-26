import React from 'react';
import styles from '../styles/Header.module.css';
import { ReactComponent as HomeIcon } from '../assets/home.svg';
import { ReactComponent as SkillsIcon } from '../assets/skills.svg';
import { ReactComponent as ProjectsIcon } from '../assets/projects.svg';
import { ReactComponent as GithubIcon } from '../assets/github.svg';
import { ReactComponent as LinkedinIcon } from '../assets/linkedin.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <a href="#home">
              <HomeIcon className={styles.icon} />
            </a>
          </li>
          <li>
            <a href="#skills">
              <SkillsIcon className={styles.icon} />
            </a>
          </li>
          <li>
            <a href="#projects">
              <ProjectsIcon className={styles.icon} />
            </a>
          </li>
          <li>
            <a href="http://www.linkedin.com/in/laetitiabeles">
              <LinkedinIcon className={styles.icon} />
            </a>
          </li>
          <li>
            <a href="http://www.github.com/laetitiabeles">
              <GithubIcon className={styles.icon} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
