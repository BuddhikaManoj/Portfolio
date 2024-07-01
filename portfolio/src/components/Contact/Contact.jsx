import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../util";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:manoiddamalgoda@@gmail.com">manoiddamalgoda@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/buddhika-manoj-775114251/">linkedin.com/BuddhikaManoj</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/BuddhikaManoj">github.com/BuddhikaManoj</a>
        </li>
      </ul>
    </footer>
  );
};
