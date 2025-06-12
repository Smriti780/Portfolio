import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Hi, I'm Smriti Tiwari</h2>
        <p className={styles.description}>
          I am a full‑stack web developer in my final year of B.Tech(CSE) —bringing ideas 
          to life using React and Node.js. Reach out to collaborate!
        </p>
        <a
          href="https://drive.google.com/drive/folders/1s59h6hmmJXVkYCBwKuU3q2m7GsKmvgwK"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactBtn}
          download hover-item
        >
          Download Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/photo.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
