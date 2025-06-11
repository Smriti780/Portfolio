import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Student icon" />
            <div className={styles.aboutItemText}>
              <h3>Student</h3>
              <p>
                I am a final-year B.Tech student at IIIT Guwahati, passionate about building real-world tech solutions and continuously learning in the field of computer science.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Full stack icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>
                I build responsive and dynamic web applications with integrated APIs, focusing on clean code and seamless user experience across the stack.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Contributor icon" />
            <div className={styles.aboutItemText}>
              <h3>Open Source Contributor</h3>
              <p>
                I actively contribute to open-source projects, including web development contributions during GirlScript Summer of Code. I'm also exploring machine learning and its applications.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
