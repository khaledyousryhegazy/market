import React from "react";
import styles from "./About.module.css";
import about_img from "../../images/about.jpg";

function About() {
  return (
    <div className={styles.about}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.left}>
            <span>about market</span>
            <h1>
              <span>10+</span> years experience
            </h1>
            <p>
              The market is limited to all types of food, including meat,
              vegetables, all kinds of drinks, and snacks. All that occupies our
              attention is the customer who comes to us, and we try as much as
              possible to provide everything he needs
            </p>
          </div>
          <div className={styles.right}>
            <img src={about_img} alt="About/jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
