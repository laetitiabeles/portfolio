import React from 'react';
import styles from '../styles/Skills.module.css';

// Import des logos
import CLogo from '../assets/c.svg';
import JSLogo from '../assets/javascript.svg';
import ReactLogo from '../assets/react.svg';
import MySQLLogo from '../assets/mysql.svg';
import HTMLLogo from '../assets/html.svg';
import CSSLogo from '../assets/css.svg';
import BashLogo from '../assets/bash.svg';
import NodeLogo from '../assets/nodejs.svg';
import WordPressLogo from '../assets/wordpress.svg';
import GitLogo from '../assets/git.svg';
import PhotoshopLogo from '../assets/photoshop.svg';
import FigmaLogo from '../assets/figma.svg';

const Skills = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.content}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.skillsContainer}>
          <div className={styles.developmentCategory}>
            <h3 className={styles.skillsTitle}>Development</h3>
            <div className={styles.logoGrid}>
              <img src={CLogo} alt="C" className={styles.logo} />
              <img src={JSLogo} alt="JavaScript" className={styles.logo} />
              <img src={ReactLogo} alt="React" className={styles.logo} />
              <img src={MySQLLogo} alt="MySQL" className={styles.logo} />
              <img src={HTMLLogo} alt="HTML" className={styles.logo} />
              <img src={CSSLogo} alt="CSS" className={styles.logo} />
              <img src={BashLogo} alt="Bash" className={styles.logo} />
              <img src={NodeLogo} alt="Node.js" className={styles.logo} />
              <img src={WordPressLogo} alt="WordPress" className={styles.logo} />
              <img src={GitLogo} alt="Git" className={styles.logo} />
            </div>
          </div>
          <div>
            <div className={styles.designCategory}>
              <h3 className={styles.skillsTitle}>Design</h3>
              <div className={styles.logoGrid}>
                <img src={PhotoshopLogo} alt="Photoshop" className={styles.logo} />
                <img src={FigmaLogo} alt="Figma" className={styles.logo} />
              </div>
            </div>
            <div className={styles.tools}>
              <h3 className={styles.skillsTitle}>Tools</h3>
              <div className={styles.toolsList}>
                <ul>
                  <li>Git / GitHub</li>
                  <li>Command lines</li>
                  <li>MySQL Workbench</li>
                  <li>Chrome/Safari DevTools</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.knowledges}>
              <h3 className={styles.skillsTitle}>Knowledges</h3>
              <div className={styles.knowledgesList}>
                <ul>
                  <li>SEO</li>
                  <li>Accessibility</li>
                  <li>TDD</li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
