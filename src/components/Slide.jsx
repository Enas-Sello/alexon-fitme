import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper';
// import required modules
import { Autoplay, EffectFade } from 'swiper';

import slide1 from '../assets/slide1.png'
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';
const Slide = () => {
  return (
    <>
      <Swiper
        effect={ 'coverflow' }
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={false}
        modules={[EffectCoverflow, Autoplay]}
        className="hidden lg:block"
      >
        <SwiperSlide>
          <img src={slide1} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="slide" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slide;
