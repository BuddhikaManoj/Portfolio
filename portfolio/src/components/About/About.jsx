import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../util";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Front-end Developer</h3>
                        <p>I am front-end developer with experience in building responsive and optimized sites</p>
                    </div>
                    </li>
                    <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")} alt="server icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Back-end Developer</h3>
                        <p>I have experience developing fast and optimized and APIs</p>
                    </div>
                    </li>
                </ul>
            </div>

        </section>
    );
}