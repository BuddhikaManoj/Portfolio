import React from "react";
import { getImageUrl } from "../../util";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Buddhika Manoj</h1>
                <p className={styles.description}>I'm a full-stack developer. 
                    Reach out if you'd like to learn more!
                </p>
                <a href="mailto:manoiddamalgoda@gmail.com" className={styles.contactBtn}
                >Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
  );
}