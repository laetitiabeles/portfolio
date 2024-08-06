import React from 'react';
import styles from '../styles/Welcome.module.css';
import WelcomeImage from '../assets/welcome-2.png';

const Welcome = () => {
  return (
    <section id="welcome" className={styles.welcomeSection}>
      <div className={styles.contentContainer}>
        <div className={styles.textAndApprenticeshipContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Hi!</h1>
            <h1 className={styles.title}>I'm Laëtitia Bélès</h1>
            <h2 className={styles.subtitle}>Software engineering student looking for an apprenticeship</h2>
            <h3 className={styles.description}>I am a passionate and curious programming student always looking for new skills to acquire and new challenges to take on.</h3>
          </div>
          <div className={styles.apprenticeshipContainer}>
            <div className={styles.apprenticeshipColumn}>
              <h2 className={styles.apprenticeshipSubtitle}>When?</h2>
              <h3 className={styles.apprenticeshipDescription}>November 2024</h3>
              <h3 className={styles.apprenticeshipDescription}>for 15 months</h3>
            </div>
            <div className={styles.apprenticeshipColumn}>
              <h2 className={styles.apprenticeshipSubtitle}>Where?</h2>
              <h3 className={styles.apprenticeshipDescription}>Lille</h3>
            </div>
            <div className={styles.apprenticeshipColumn}>
              <h2 className={styles.apprenticeshipSubtitle}>Rythme?</h2>
              <h3 className={styles.apprenticeshipDescription}>3 weeks at work</h3>
              <h3 className={styles.apprenticeshipDescription}>1 week at school</h3>
            </div>
          </div>
          <button className={styles.resumeButton}>Resume</button>
          <button className={styles.resumeButton}>Github</button>
          <button className={styles.resumeButton}>LinkedIn</button>
        </div>
        <div className={styles.imageContainer}>
          <img src={WelcomeImage} alt="Bienvenue" className={styles.WelcomeImage} />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
