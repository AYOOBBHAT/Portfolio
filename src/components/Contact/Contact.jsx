import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        {/* <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:ayoob324005@gmail.com">myemail</a>
        </li> */}

<li className={styles.link}>
  <a href="mailto:ayoob324005@gmail.com">
    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
    myemail
  </a>
</li>


        {/* <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/ayoob-bhat/">linkedin.com/myname</a>
        </li> */}

<li className={styles.link}>
  <a href="https://www.linkedin.com/in/ayoob-bhat/">
    <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
    LinkedIn
  </a>
</li>




        {/* <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href=" https://github.com/AYOOBBHAT">Github</a>
        </li> */}

<li className={styles.link}>
  <a href="https://github.com/AYOOBBHAT">
    <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
    Github
  </a>
</li>




      </ul>
    </footer>
  );
};
