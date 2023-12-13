import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Link } from "react-router-dom";
import {
  instaPost01,
  instaPost02,
  instaPost03,
  instaPost04,
  instaPost05,
  instaPost06,
  instaPost07,
  instaPost08,
} from "../utils/helper";

const InstaPosts = () => {
  return (
    <section aria-labelledby="Instagram Posts" className="relative p-4">
      <Swiper
        loop={true}
        speed={1500}
        spaceBetween={10}
        grabCursor={true}
        navigation={false}
        centeredSlides={false}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 8,
          },
        }}
      >
        <SwiperSlide>
          <img src={instaPost01} alt="instagram" className="insta-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={instaPost02} alt="instagram" className="insta-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={instaPost03} alt="instagram" className="insta-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={instaPost04} alt="instagram" className="insta-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={instaPost05} alt="instagram" className="insta-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={instaPost06} alt="instagram" className="insta-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={instaPost07} alt="instagram" className="insta-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={instaPost08} alt="instagram" className="insta-img" />
        </SwiperSlide>
      </Swiper>
      <Link
        to="#!"
        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-white px-8 py-3 text-xs text-primary-600 shadow-md hover:bg-slate-200"
      >
        FOLLOW US ON INSTAGRAM
      </Link>
    </section>
  );
};

export default InstaPosts;
