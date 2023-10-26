import styles from "./Banner.module.css";

import banner from "../../images/banner.jpg";

import React from "react";

function Banner() {
  return (
    <div className={styles.banner}>
      {/* <img src={banner} alt="banner/jpg" /> */}
      <div className="container h-100 position-relative">
        <a href="/shop/vegetables">Shop Now</a>
      </div>
    </div>
  );
}

export default Banner;
