import styles from "./Landing.module.css";

import landing_1 from "../../images/landing_1.jpg";
import landing_2 from "../../images/landing_2.jpg";
import landing_3 from "../../images/landing_3.jpg";
import landing_4 from "../../images/landing_4.jpg";
import landing_5 from "../../images/landing_5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

function Landing() {
  return (
    <div className={styles.landing}>
      <div className="container">
        <Swiper
          loop={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className={styles.swiper}
        >
          <SwiperSlide className={styles.swiper_slider}>
            <img src={landing_1} alt="LANDING/jpg" />
            <div>snacks for free times </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slider}>
            <img src={landing_2} alt="LANDING/jpg" />
            <div>all dairy products</div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slider}>
            <img src={landing_3} alt="LANDING/jpg" />
            <div>Meats</div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slider}>
            <img src={landing_4} alt="LANDING/jpg" />
            <div>All kinds of vegetables</div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slider}>
            <img src={landing_5} alt="LANDING/jpg" />
            <div>all beverages you need </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Landing;
