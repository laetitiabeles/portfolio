import React from 'react';
import styles from '../styles/About.module.css';


const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>About me</h1>
          <h2 className={styles.subtitle}>A decade of passion dedicated to web development</h2>
          <h3 className={styles.description}>I have been passionate about web development for over 10 years, having written my first lines of code on Blogspot and WordPress. After several years of anticipation, I finally decided to pursue formal training last year. The combination of this training, along with my degree in Marketing, HR, and Communication, allows me to understand both the client and business perspectives. This unique blend of skills enables me to create solutions that are not only technically sound but also aligned with business goals and customer needs.</h3>
        </div>
      </div>
    </section>
  );
};

export default About;
