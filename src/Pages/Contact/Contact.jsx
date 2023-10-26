import styles from "./Contact.module.css";

import React from "react";

function Contact() {
  return (
    <div className={styles.contact}>
      <div className="container h-100  d-flex justify-content-center align-items-center">
        <div className={styles.form}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Write Your Message"
          ></textarea>
          <button className="btn btn-main">Send</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
