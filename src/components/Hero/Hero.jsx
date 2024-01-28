import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ayoob Bhat</h1>
        <p className={styles.description}>
        "I'm a full-stack developer proficient in React and NodeJS,
         and I'm actively enhancing my skills in Data Structures and Algorithms (DSA).
          Feel free to reach out if you'd like to connect or learn more about my work!"

        </p>
        <a href="https://www.linkedin.com/in/ayoob-bhat/" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
