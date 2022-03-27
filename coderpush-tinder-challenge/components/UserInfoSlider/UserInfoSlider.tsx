import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom } from 'swiper';
import styles from './UserInfoSlider.module.css';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const UserInfoSlider: React.FunctionComponent = () => (
  <div className={styles.container}>
    <Swiper zoom={true} modules={[Zoom]} className="mySwiper">
      <SwiperSlide>
        <div className="swiper-zoom-container">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-zoom-container">
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-zoom-container">
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </div>
      </SwiperSlide>
    </Swiper>
    <div className={styles.basic_info}>Patrick, 38</div>
  </div>
);

export default UserInfoSlider;
