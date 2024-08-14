import React from 'react';
import styles from '../styles/Projects.module.css';
import RemindFullPage from '../assets/remindfull-landing-page.png';
import Kassoum from '../assets/kassoum.png';
import Printf from '../assets/printf.jpg';
import Shell from '../assets/shell.png';

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.content}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.landingPage}>
          <h3 className={styles.sectionTitle}>Landing Pages</h3>
          <div className={styles.projectCard}>
            <img src={RemindFullPage} alt="RemindFull landing page" className={styles.projectImage} />
            <div className={styles.projectText}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>
                  <a href="https://github.com/laetitiabeles/remindfull-landing_page/" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    RemindFull
                    <span className={styles.arrowIcon}>&#8599;</span>
                  </a>
                </h3>
                <div className={styles.projectButtons}>
                  <a href="https://github.com/laetitiabeles/remindfull-landing_page/" target="_blank" rel="noopener noreferrer" className={styles.button}>
                    Code
                  </a>
                  <a href="https://laetitiabeles.github.io/remindfull-landing_page/" target="_blank" rel="noopener noreferrer" className={styles.button}>
                    Demo
                  </a>
                </div>
              </div>
              <p className={styles.projectDescription}>
                The RemindFull landing page is designed to provide comprehensive information about the RemindFull app. It offers an overview of the app’s features, benefits, and user experiences, helping visitors understand how RemindFull can enhance their productivity by managing reminders and tasks more efficiently.
              </p>
              <div className={styles.tags}>
                <span className={styles.tag}>React</span>
                <span className={styles.tag}>HTML</span>
                <span className={styles.tag}>CSS</span>
              </div>
            </div>
          </div>
          <div className={styles.projectCard}>
            <img src={Kassoum} alt="Kassoum" className={styles.projectImage} />
            <div className={styles.projectText}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>
                  <a href="https://drive.google.com/file/d/1k3KovijvKOycPmcqz9q6jy0wYRAxKwU8/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    Kassoum - Work in progress
                    <span className={styles.arrowIcon}>&#8599;</span>
                  </a>
                </h3>
              </div>
              <p className={styles.projectDescription}>
              Kassoum is a design mockup created and will be soon a landing page for a client, showcasing a sustainable solution for the collection of organic waste. The service is tailored for professionals, offering eco-friendly and socially responsible waste management.
              </p>
              <div className={styles.tags}>
                <span className={styles.tag}>React</span>
                <span className={styles.tag}>HTML</span>
                <span className={styles.tag}>CSS</span>
                <span className={styles.tag}>Figma</span>
              </div>
            </div>
          </div>
          <h3 className={styles.sectionTitle}>Mobile App</h3>
          <div className={styles.projectCard}>
            <img src={RemindFullPage} alt="RemindFull landing page" className={styles.projectImage} />
            <div className={styles.projectText}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>
                  <a href="https://github.com/laetitiabeles/RemindFull_Mobile_Web" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    RemindFull
                    <span className={styles.arrowIcon}>&#8599;</span>
                  </a>
                </h3>
                <div className={styles.projectButtons}>
                  <a href="https://github.com/laetitiabeles/RemindFull_Mobile_Web" target="_blank" rel="noopener noreferrer" className={styles.button}>
                    Code
                  </a>
                  <a href="https://youtu.be/lj2D_oNPgMw" target="_blank" rel="noopener noreferrer" className={styles.button}>
                    Demo
                  </a>
                </div>
              </div>
              <p className={styles.projectDescription}>
              RemindFull is an iOS and Android app specifically designed to support individuals with ADHD (or not) in managing their daily tasks and responsibilities. The app allows users to create, modify, and delete tasks effortlessly, ensuring they stay organized and on track. RemindFull also helps users remember important dates like birthdays, remember the gifts they gave and provides gentle reminders on the dashboard when it's been a while since they've reached out to a contact.
              </p>
              <div className={styles.tags}>
                <span className={styles.tag}>React Native</span>
                <span className={styles.tag}>NodeJS</span>
                <span className={styles.tag}>ExpressJS</span>
                <span className={styles.tag}>MySQL</span>
              </div>
            </div>
          </div>
          <h3 className={styles.sectionTitle}>Back-end projects</h3>
          <div className={styles.projectCard}>
            <img src={Printf} alt="Printf" className={styles.projectImage} />
            <div className={styles.projectText}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>
                  <a href="https://github.com/laetitiabeles/holbertonschool-printf" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    Printf
                    <span className={styles.arrowIcon}>&#8599;</span>
                  </a>
                </h3>
                <div className={styles.projectButtons}>
                  <a href="https://github.com/laetitiabeles/holbertonschool-printf" target="_blank" rel="noopener noreferrer" className={styles.button}>
                    Code
                  </a>
                </div>
              </div>
              <p className={styles.projectDescription}>
              I rebuilt the standard printf function from scratch. 
              </p>
              <div className={styles.tags}>
                <span className={styles.tag}>C</span>
              </div>
            </div>
          </div>
          <div className={styles.projectCard}>
            <img src={Shell} alt="Shell" className={styles.projectImage} />
            <div className={styles.projectText}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>
                  <a href="https://github.com/Dloyr/holbertonschool-simple_shell" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    Shell
                    <span className={styles.arrowIcon}>&#8599;</span>
                  </a>
                </h3>
                <div className={styles.projectButtons}>
                  <a href="https://github.com/Dloyr/holbertonschool-simple_shell" target="_blank" rel="noopener noreferrer" className={styles.button}>
                    Code
                  </a>
                </div>
              </div>
              <p className={styles.projectDescription}>
              Simple Shell is a C programming project where I developed a basic UNIX command-line interpreter from scratch. This custom shell handles user input, executes commands, manages processes. The project demonstrates a solid understanding of system calls, process control, and the core principles of operating systems, mimicking the functionality of a standard shell while providing a hands-on experience in low-level programming and shell scripting.
              </p>
              <div className={styles.tags}>
                <span className={styles.tag}>C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
