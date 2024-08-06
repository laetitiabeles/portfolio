import React from 'react';
import styles from '../styles/Welcome.module.css';
import WelcomeImage from '../assets/welcome.png';

const Welcome = () => {
  return (
    <section id="welcome" className={styles.welcomeSection}>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Hi!</h1>
          <h1 className={styles.title}>I'm Laëtitia Bélès</h1>
          <h2 className={styles.subtitle}>Software engineering student looking for an apprenticeship</h2>
          <h3 className={styles.description}>I am a passionate and curious programming student always looking for new skills to acquire and new challenges to take on.</h3>
        </div>
        <div className={styles.imageContainer}>
          <img src={WelcomeImage} alt="Bienvenue" className={styles.WelcomeImage} />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
