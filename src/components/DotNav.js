import React, { useEffect } from 'react';
import styles from '../styles/DotNav.module.css';

const DotNav = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll(`.${styles.dotLink}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Array.from(sections).indexOf(entry.target);
          if (entry.isIntersecting) {
            navLinks.forEach((link) => link.classList.remove(styles.active));
            navLinks[index].classList.add(styles.active);
          }
        });
      },
      { threshold: 0.5 } // Change de point si 70% de la section est visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className={styles.dotNav}>
      <ul className={styles.dotList}>
        <li className={styles.dotItem}>
          <a href="#welcome" className={styles.dotLink}></a>
        </li>
        <li className={styles.dotItem}>
          <a href="#about" className={styles.dotLink}></a>
        </li>
        <li className={styles.dotItem}>
          <a href="#skills" className={styles.dotLink}></a>
        </li>
        <li className={styles.dotItem}>
          <a href="#projects" className={styles.dotLink}></a>
        </li>
        <li className={styles.dotItem}>
          <a href="#contact" className={styles.dotLink}></a>
        </li>
      </ul>
    </nav>
  );
};

export default DotNav;
