import React from 'react';
import styles from '../styles/Footer.module.css';
import LinkedIn from '../assets/linkedin.svg';
import GitHub from '../assets/github.svg';

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <p className={styles.text}>© 2024 Laëtitia Bélès</p>
      <div className={styles.socialIcons}>
        <img src={LinkedIn} alt="LinkedIn icon" className={styles.linkedInIcon} />
        <img src={GitHub} alt="GitHub icon" className={styles.githubIcon} />
      </div>
    </footer>
  );
};

export default Footer;
